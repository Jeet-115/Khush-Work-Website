# Shree Chamunda Aluminium

Production-ready Next.js 15 business website architecture.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- GSAP
- React Hook Form + Zod
- Lucide React
- ESLint + Prettier

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script                 | Description                          |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | Start development server (Turbopack) |
| `npm run build`        | Create production build              |
| `npm run start`        | Start production server              |
| `npm run lint`         | Run ESLint                           |
| `npm run lint:fix`     | Fix ESLint issues                    |
| `npm run format`       | Format with Prettier                 |
| `npm run format:check` | Check Prettier formatting            |
| `npm run typecheck`    | Run TypeScript checks                |

## Project Structure

```
app/           # App Router routes and layouts
components/    # Reusable UI and feature components
hooks/         # Custom React hooks
lib/           # Core utilities, fonts, metadata, validations
constants/     # App-wide constants
types/         # Shared TypeScript types
utils/         # General-purpose helpers
public/        # Static assets
styles/        # Global styles and Tailwind entry
```

## Path Aliases

`@/*` maps to the project root.

## shadcn/ui

Add components with:

```bash
npx shadcn@latest add button
```
