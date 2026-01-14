# 7 Lashes Salon Protocol Management System

## Overview

A protocol management system for 7 Lashes beauty salon, designed to help staff select session types and skin types to retrieve the appropriate skincare treatment protocols. The application is built with Arabic RTL support and features a luxury beauty brand aesthetic combined with professional management tool clarity.

The system manages:
- Session types (أنواع الجلسات) - different treatment sessions offered
- Skin types (أنواع البشرة) - client skin type classifications
- Protocols - step-by-step treatment instructions based on session/skin type combinations
- Materials - products and tools used in treatments
- Care instructions - post-treatment guidance for clients

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens for luxury aesthetic
- **Build Tool**: Vite with HMR support
- **RTL Support**: Full Arabic language support with RTL layout (lang="ar" dir="rtl")
- **Typography**: Tajawal Google Font for Arabic text

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **API Design**: RESTful JSON API under `/api` prefix
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Validation**: Zod with drizzle-zod integration
- **File Uploads**: Presigned URL pattern with Google Cloud Storage

### Data Storage
- **Database**: PostgreSQL (connection via DATABASE_URL environment variable)
- **Schema Location**: `shared/schema.ts` - shared between client and server
- **Migrations**: Drizzle Kit with `drizzle-kit push` command
- **Object Storage**: Google Cloud Storage via Replit integration for image uploads

### Key Design Patterns
- **Shared Types**: Schema definitions in `shared/` directory are imported by both frontend and backend
- **API Client**: Centralized fetch wrapper in `lib/queryClient.ts` with automatic error handling
- **Form Handling**: React Hook Form with Zod resolver for validation
- **Component Architecture**: Compound components with Radix UI primitives wrapped by shadcn/ui

### Project Structure
```
├── client/src/          # React frontend
│   ├── components/ui/   # shadcn/ui components
│   ├── pages/           # Route components (home, settings, reference)
│   ├── hooks/           # Custom React hooks
│   └── lib/             # Utilities and query client
├── server/              # Express backend
│   ├── routes.ts        # API route definitions
│   ├── storage.ts       # Database access layer
│   └── replit_integrations/  # Object storage integration
├── shared/              # Shared code (schema, types)
└── migrations/          # Drizzle database migrations
```

## External Dependencies

### Database
- PostgreSQL database provisioned via Replit
- Connection string provided via `DATABASE_URL` environment variable

### Cloud Storage
- Google Cloud Storage for image uploads
- Integrated via Replit sidecar service at `http://127.0.0.1:1106`
- Presigned URL upload pattern for direct client-to-storage uploads

### Frontend Libraries
- @tanstack/react-query - Server state management
- @uppy/core, @uppy/dashboard, @uppy/aws-s3 - File upload handling
- react-hook-form with @hookform/resolvers - Form management
- Radix UI primitives - Accessible UI components
- Lucide React - Icon library

### Development Tools
- Vite with React plugin for development server
- Replit-specific plugins for error overlay and dev banner
- ESBuild for production server bundling
- TypeScript for type safety across the stack