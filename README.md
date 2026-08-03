# Chul Chivorn — Portfolio

Personal portfolio site built with React, Vite, TypeScript, and Tailwind CSS v4.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (`@tailwindcss/vite`)
- React Router 7
- lucide-react for icons

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (defaults to http://localhost:5173).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run oxlint

## Structure

- `src/pages` — one component per route (`/`, `/about`, `/experience`, `/education`, `/projects`, `/lessons`, `/contact`)
- `src/components` — shared UI (nav, footer, layout shell, code-editor card, project card, section header)
- `src/data/content.ts` — all real site copy/content in one typed module
- `src/hooks/useTheme.ts` — class-based dark mode toggle, persisted to `localStorage`

## Notes

- The "download resume" button links to `/resume.pdf`, which is not included yet — add the actual file to `public/resume.pdf` when available.