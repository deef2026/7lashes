/**
 * خادم محلي بسيط لاستقبال ملفات JSON معدّلة من الواجهة ورفعها إلى المستودع عبر GitHub REST API
 * تشغيل: node server/index.js   (تأكد من وجود .env مع GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO)
 *
 * تحذير أمني: شغّل هذا الخادم محلياً فقط وراء جدار الحماية. لا تكشف PORT أو التوكن للإنترنت العام.
 */
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Octokit } = require("octokit");

const app = express();
app.use(cors()); // أثناء التطوير: يسمح لطرف الواجهة (Vite) بالاتصال
app.use(express.json({ limit: "8mb" }));

const TOKEN = process.env.GITHUB_TOKEN;
const OWNER = process.env.GITHUB_OWNER || "deef2026";
const REPO = process.env.GITHUB_REPO || "7lashes";
const BRANCH = process.env.GITHUB_BRANCH || "main";
const PORT = process.env.PORT || 4000;

if (!TOKEN) {
  console.error("GITHUB_TOKEN غير معرّف في .env — ضع PAT محلياً (للتجربة فقط).");
  process.exit(1);
}

const octokit = new Octokit({ auth: TOKEN });

async function getFileSha(path) {
  try {
    const res = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
      owner: OWNER,
      repo: REPO,
      path,
      ref: BRANCH,
    });
    return res.data.sha;
  } catch (err) {
    // إذا الملف غير موجود سنعيد null
    return null;
  }
}

app.post("/api/sync", async (req, res) => {
  /**
   * يتوقع body:
   * {
   *   message: "Commit message",
   *   files: [
   *     { path: "data/session_types.json", content: "JSON string" },
   *     ...
   *   ]
   * }
   */
  const { message, files } = req.body || {};
  if (!Array.isArray(files) || files.length === 0) {
    return res.status(400).json({ error: "ملفات غير موجودة" });
  }
  try {
    const results = [];
    for (const f of files) {
      const remotePath = f.path;
      const contentBuffer = Buffer.from(f.content, "utf8");
      const base64 = contentBuffer.toString("base64");
      const sha = await getFileSha(remotePath);
      const params = {
        owner: OWNER,
        repo: REPO,
        path: remotePath,
        message: message || `Sync ${remotePath} via local web admin`,
        content: base64,
        branch: BRANCH,
      };
      if (sha) params.sha = sha;
      const r = await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", params);
      results.push({ path: r.data.content.path, commit: r.data.commit.sha });
    }
    return res.json({ ok: true, results });
  } catch (err) {
    console.error("sync error:", err);
    return res.status(500).json({ error: err.message || String(err) });
  }
});

app.get("/", (req, res) => {
  res.send("7Lashes local sync server is running.");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} (sync API at /api/sync)`);
});
