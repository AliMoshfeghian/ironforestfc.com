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
- **API**: `src/app/api/submit/route.js` is the only server route. It validates per-`type` fields and POSTs the submission to a Google Apps Script webhook (`SHEETS_WEBHOOK_URL` + `SHEETS_WEBHOOK_SECRET` env vars) which appends a row to the bound Google Sheet (tabs: `Fans`/`Players`/`Sponsors`) and sends two emails via `GmailApp`: a notification to `admin@ironforestfc.com` and a per-type auto-reply to the submitter. The route always returns success to the user — if the webhook fails or env vars are missing, the full submission is logged to Vercel logs so leads are recoverable. The Apps Script source is not in this repo; it lives in the Apps Script project bound to the sheet. Redeploy that project (Deploy → Manage deployments → New version) after editing the script.

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

Targeted at Vercel (this repo includes `public/vercel.svg`, `next.config.mjs` is empty). Required env vars on Vercel: `SHEETS_WEBHOOK_URL` and `SHEETS_WEBHOOK_SECRET` (Apps Script webhook for form submissions). Local dev mirrors these in `.env.local` (gitignored).
