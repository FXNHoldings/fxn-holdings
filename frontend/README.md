# FXN Holdings — frontend

FXN Holdings Limited corporate site. Next.js 16 **static export** (`output: "export"`)
+ Tailwind CSS v4 + TypeScript — the same platform as the FXN Europe site.
The original "Kinetic Blueprint" design is preserved; only the framework
changed (Vite/React SPA → Next.js App Router).

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build & publish

```bash
../publish.sh      # builds frontend/out and rsyncs to /var/www/html/fxnholdings.com
```

`next build` emits a fully static site into `frontend/out`, served by nginx
(behind Cloudflare). No Node server runs in production.

## Structure

- `src/app/` — App Router pages: `/` (Home), `/about`, `/portfolio`, `/contact`, plus `not-found`.
- `src/components/` — `Navbar`, `Footer`, and the `ui/` primitives (button, card, sonner).
- `src/app/globals.css` — the design system (oklch theme + custom utility classes).
- Fonts (Urbanist, Outfit, Space Grotesk, JetBrains Mono) load from Google Fonts in `layout.tsx`.

The contact form is a client-side simulation (no backend), matching the original.
