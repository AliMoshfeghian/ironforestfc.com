@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> Heads-up: this repo runs **Next.js 16.2.6 with React 19**. APIs, conventions, and file layout may differ from your training data. When in doubt, read `node_modules/next/dist/docs/` before writing code (see `AGENTS.md`).

## Commands

```bash
npm run dev     # next dev — local dev server on http://localhost:3000
npm run build   # next build — production build
npm start       # next start — serve the production build
npm run lint    # eslint (flat config, extends next/core-web-vitals)
```

There is no test setup in this project.

## Architecture

Single-page marketing/teaser site for **Iron Forest FC** (Huntsville, TX soccer club). Plain JavaScript (no TypeScript), Next.js App Router, CSS Modules.

- **Path alias**: `@/*` → `./src/*` (see `jsconfig.json`).
- **Entry point**: `src/app/page.js` is the entire landing page — hero, countdown, story, roadmap, sign-up forms, FAQs, footer. All sections live in this one file; the page composes three client components from `src/components/`.
- **Layout & fonts**: `src/app/layout.js` wires up Geist-adjacent fonts (`Outfit`, `Inter`) via `next/font/google` as CSS variables (`--font-outfit`, `--font-inter`) and sets site-wide metadata (SEO, OpenGraph, Twitter).
- **Components** (all in `src/components/`):
  - `Crest.js` — server component that renders `/public/crest.png` (the club crest). The crest file is intentionally untracked-in-history-but-present; updating it is a normal task.
  - `Countdown.js` — `"use client"`. Counts down to **June 1, 2027 19:00 Central** (inaugural match target). Uses `useEffect` + `setInterval`; gate render on `isMounted` to avoid SSR hydration mismatches.
  - `Forms.js` — `"use client"`. Tabbed sign-up form for **fans / players / sponsors**. POSTs JSON to `/api/submit`.
- **API**: `src/app/api/submit/route.js` is the only server route. It validates per-`type` fields and appends submissions to a local `submissions.json` via `fs`. **That file write is expected to fail on Vercel/serverless** — the route catches the error and still returns success. If you change submission handling, route to a real backend (email, DB, webhook) rather than relying on the local file.

## Styling system

- **Global tokens** in `src/app/globals.css` — color palette (`--forest-green`, `--champion-gold`, `--bg-dark`, etc.), glassmorphism (`--glass-bg`, `--glass-border`), and `--content-max-width: 1200px`. Use these CSS variables; don't hardcode hex values.
- Each component has a co-located `*.module.css` (`Forms.module.css`, `Countdown.module.css`, `page.module.css`).
- Utility classes like `glass-panel`, `accent-title`, `animate-fade-in-up`, `animation-delay-100` are defined in `globals.css` and applied alongside module styles via template strings.
- Icons come from `lucide-react`.

## Project conventions

- **JavaScript, not TypeScript.** No `.ts`/`.tsx` files; no `tsconfig.json`.
- **Client vs server components**: default to server components; add `"use client"` only when a component uses state, effects, or browser APIs (`Forms.js`, `Countdown.js`).
- **Content**: copy on the page reflects current positioning — "targeted entry into USL League Two," "Summer 2027 inaugural," "CEO Lou Fiscella" (not Coach). Keep that wording consistent across `page.js` and `layout.js` metadata. Recent commits show this messaging has been deliberately tightened — match the existing tone.
- **Local artifacts**: `submissions.json` is gitignored (see `.gitignore`); never commit it.

## Deployment

Targeted at Vercel (this repo includes `public/vercel.svg`, `next.config.mjs` is empty). The submit route's file-write fallback exists specifically because Vercel's serverless functions have a read-only FS — keep that fallback intact if you touch the route.
