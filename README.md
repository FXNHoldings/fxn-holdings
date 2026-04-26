# FXN Holdings

Marketing website for **FXN Holdings Limited**, a UK-registered digital holdings company managing a portfolio of ecommerce, travel, blog, price comparison, and affiliate web properties.

Live: [www.fxnholdings.com](https://www.fxnholdings.com)

## About

A four-page single-page application built around the "Kinetic Blueprint" design system — light theme with electric-blue and amber-gold accents, blueprint-grid backgrounds, and Urbanist/Outfit typography.

Pages:

- **Home** — hero, portfolio overview, stats
- **About** — company story and principles
- **Portfolio** — five verticals (E-Commerce, Travel, Blog & Content, Price Comparison, Affiliate)
- **Contact** — enquiry form, company info, FAQ

Company registered in England & Wales (Co. No. 16134139), ICO Registration ZB940664.

## Tech stack

| Area | Stack |
|------|-------|
| Framework | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build tool | [Vite 7](https://vitejs.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) + [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) |
| UI primitives | [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/) patterns |
| Routing | [wouter](https://github.com/molefrog/wouter) |
| Animation | [framer-motion](https://www.framer.com/motion/) |
| Forms | [react-hook-form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| Icons | [lucide-react](https://lucide.dev/) |
| Notifications | [sonner](https://sonner.emilkowal.ski/) |
| Charts | [recharts](https://recharts.org/) |
| Package manager | [pnpm 10](https://pnpm.io/) |
| Hosting | [Vercel](https://vercel.com/) (static SPA) |

## Project layout

```
fxn-holdings/
├── client/                # SPA root (Vite root)
│   ├── index.html
│   ├── public/            # static assets served from /
│   └── src/
│       ├── components/    # shared components + ui/ (shadcn primitives)
│       ├── contexts/      # React contexts (theme)
│       ├── hooks/         # custom React hooks
│       ├── lib/           # utilities (cn, etc.)
│       ├── pages/         # Home, About, Portfolio, Contact, NotFound
│       ├── App.tsx
│       └── main.tsx
├── server/                # legacy Express static server (not used on Vercel)
├── shared/                # shared constants
├── vercel.json            # Vercel build/deploy config
└── vite.config.ts
```

## Getting started

### Prerequisites

- **Node.js** ≥ 20 (22 recommended)
- **pnpm** ≥ 10 (`npm install -g pnpm`)

### Install dependencies

```bash
pnpm install
```

### Run the dev server

```bash
pnpm dev
```

Opens on [http://localhost:3000](http://localhost:3000) with hot module reload.

### Other commands

```bash
pnpm build      # production build → dist/public/
pnpm preview    # serve the production build locally
pnpm check      # TypeScript type-check (no emit)
pnpm format     # Prettier write across the repo
```

## Deployment

This project deploys to Vercel as a static SPA. Configuration lives in [`vercel.json`](./vercel.json):

- **Build command:** `vite build`
- **Output directory:** `dist/public`
- **Install command:** `pnpm install --frozen-lockfile`
- **Framework preset:** `vite`
- **Rewrites:** all paths fall back to `/index.html` (SPA routing via wouter)

To deploy:

1. Import the repo in the Vercel dashboard → **New Project → Import `FXNHoldings/fxn-holdings`**
2. Set **Node.js Version** to `22.x` under Project Settings → General
3. Deploy — no environment variables required
4. Add the production domain (e.g. `www.fxnholdings.com`) under Settings → Domains

## License

MIT
