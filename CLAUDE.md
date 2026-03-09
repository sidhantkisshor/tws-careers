# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Turbopack) at localhost:3000
npm run build    # Production build — also validates TypeScript
npm start        # Serve production build
```

No linter or test runner is configured.

## Architecture

Next.js 16 App Router site for `careers.twsgurukulx.com`. Tailwind CSS v4 (uses `@theme inline` in globals.css, no tailwind.config). TypeScript strict mode. Path alias `@/*` → `./src/*`.

### Data-driven job pages

All job content lives in `src/data/jobs.ts` as typed objects (`Job` interface from `src/lib/types.ts`). Components receive props — they never import job data directly. To add a new job, add an entry to the `jobs` array; `generateStaticParams` and the listings page pick it up automatically.

Form field definitions are embedded in each Job object (`form.step1Fields`, `form.step2Fields`), not in separate config.

### Routing

| Route | Type | Purpose |
|---|---|---|
| `/` | Static | Job listings grid |
| `/[slug]` | SSG via `generateStaticParams` | Job detail page |
| `/api/apply` | Dynamic | POST → n8n webhook |

### Server vs Client boundary

Almost everything is a Server Component. Only three files use `'use client'`:
- `ApplyModal` — 2-step form with validation, focus trap, rate limiting
- `ApplyTrigger` — button that dispatches `open-apply` custom DOM event
- `MobileStickyBar` — IntersectionObserver-based sticky CTA

### Modal trigger pattern

The apply modal opens via a custom DOM event (`open-apply`), not React context. This lets any server component render an `<ApplyTrigger>` button without wrapping the tree in a client provider. `ApplyModal` listens with `window.addEventListener('open-apply', ...)`.

### Anti-spam

- Honeypot hidden field in form; server silently accepts bot submissions (returns 200, doesn't forward to webhook)
- Client-side rate limiting via localStorage (60s cooldown)

## Environment variables

| Variable | Purpose | Default |
|---|---|---|
| `WEBHOOK_URL` | n8n webhook endpoint for applications | Hardcoded fallback in `api/apply/route.ts` |

## Fonts

- **Satoshi** (400/500/700/900): self-hosted woff2 in `public/fonts/`, declared via `@font-face` in globals.css
- **Instrument Serif**: loaded via `next/font/google` in root layout, exposed as CSS variable `--font-instrument-serif`

## Brand colors

Defined in `globals.css` under `@theme inline`. Use semantic Tailwind classes (`text-burnt-amber`, `bg-deep-slate`, `text-warm-white`, etc.) — never raw hex values in components.

## Key conventions

- Server Components by default; only add `'use client'` when the component needs browser APIs or interactivity
- Components take typed props derived from the `Job` interface (e.g., `{ items: Job['responsibilities'] }`)
- Mobile-first responsive design; horizontal scroll cards on mobile, grid on desktop
- Accessibility: focus trap in modal, `aria-*` attributes, `prefers-reduced-motion` support, safe-area-inset padding for notched devices
- Deploy target is Vercel; security headers configured in `vercel.json`
