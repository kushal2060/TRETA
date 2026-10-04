# TETRA

Landing page for TETRA, a web and app development studio.

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS v4 · Motion (Framer Motion)

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Where things live

| What | Where |
|---|---|
| All copy & placeholder data (services, projects, team, clients, testimonials, contact) | `src/content/site.ts` |
| Page sections | `src/components/sections/` |
| Colors, fonts, animations | `src/app/globals.css` (`@theme`) |
| Page metadata / SEO | `src/app/layout.tsx` |

To change content, edit `src/content/site.ts`. The components only read from it.

## Design notes

- Palette: warm paper (`paper`), ink (`ink`), one accent (`accent`), plus `moss`, `sun`, `sky`, `plum` for covers and highlights.
- Type: Fraunces (display, with soft/wonky variable axes) + Geist (body) + Geist Mono (labels).
- Project covers are drawn in CSS (`src/components/ProjectCover.tsx`); swap for real screenshots with `next/image` when ready.
- All motion respects `prefers-reduced-motion`.
