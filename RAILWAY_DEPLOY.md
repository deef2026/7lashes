# دليل نشر التطبيق على Railway

## الخطوة 1: رفع المشروع على GitHub

1. أنشئ حساب على [github.com](https://github.com) إذا لم يكن لديك
2. أنشئ مستودع جديد (Repository) باسم `7lashes`
3. فك ضغط ملف المشروع على جهازك
4. افتح Terminal أو Command Prompt في مجلد المشروع
5. نفذ الأوامر التالية:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/7lashes.git
git push -u origin main
```

## الخطوة 2: إنشاء مشروع على Railway

1. اذهب إلى [railway.app](https://railway.app)
2. سجل دخول باستخدام حساب GitHub
3. اضغط على **"New Project"**
4. اختر **"Deploy from GitHub repo"**
5. اختر مستودع `7lashes`
6. انتظر حتى ينتهي النشر

## الخطوة 3: إضافة قاعدة البيانات PostgreSQL

1. في لوحة المشروع، اضغط على **"+"** أو **"Create"**
2. اختر **"Database"** → **"Add PostgreSQL"**
3. انتظر حتى تُنشأ قاعدة البيانات

## الخطوة 4: ربط قاعدة البيانات بالتطبيق

1. اضغط على **خدمة التطبيق** (الخدمة التي رفعتها من GitHub)
2. اذهب إلى تبويب **"Variables"**
3. اضغط **"New Variable"**
4. في حقل الاسم اكتب: `DATABASE_URL`
5. في حقل القيمة اختر من القائمة: `${{Postgres.DATABASE_URL}}`
6. اضغط **"Add"**

## الخطوة 5: إضافة متغير SESSION_SECRET

1. في نفس صفحة Variables
2. اضغط **"New Variable"**
3. الاسم: `SESSION_SECRET`
4. القيمة: أي نص عشوائي طويل (مثل: `my-super-secret-key-12345`)
5. اضغط **"Add"**

## الخطوة 6: إنشاء الرابط العام

1. اضغط على خدمة التطبيق
2. اذهب إلى **"Settings"** → **"Networking"**
3. اضغط **"Generate Domain"**
4. ستحصل على رابط مثل: `https://your-app.up.railway.app`

## الخطوة 7: تعبئة قاعدة البيانات (اختياري)

لإضافة البيانات الأولية، يمكنك استخدام Railway CLI:

```bash
npm install -g @railway/cli
railway login
railway link
railway run node scripts/seed-database.js
```

## ملاحظات مهمة

- التطبيق سيُعاد نشره تلقائياً عند أي تحديث على GitHub
- تأكد من إضافة جميع المتغيرات المطلوبة قبل النشر
- الصور المرفوعة على Replit لن تنتقل - ستحتاج لرفعها مجدداً

## استكشاف الأخطاء

إذا فشل النشر:
1. اذهب إلى **"Deployments"** 
2. اضغط على آخر deployment
3. اضغط **"View Logs"** لمعرفة السبب

المشاكل الشائعة:
- نسيان إضافة `DATABASE_URL`
- نسيان إضافة `SESSION_SECRET`
