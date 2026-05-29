# FXN Holdings

Marketing website for **FXN Holdings Limited**, a UK-registered digital holdings company managing a portfolio of ecommerce, travel, blog, price comparison, and affiliate web properties.

Live: [www.fxnholdings.com](https://www.fxnholdings.com)

## About

A four-page site built around the "Kinetic Blueprint" design system — light theme with electric-blue and amber-gold accents, blueprint-grid backgrounds, and Urbanist/Outfit typography.

Pages:

- **Home** — hero, portfolio overview, animated stats
- **About** — company story, values, milestones
- **Portfolio** — five verticals (E-Commerce, Travel, Blog & Content, Price Comparison, Affiliate)
- **Contact** — enquiry form, company info, FAQ

Company registered in England & Wales (Co. No. 16134139), ICO Registration ZB940664.

## Tech stack

Same platform as the FXN Europe site: a **Next.js static export** (no Node server in production).

| Area | Stack |
|------|-------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, `output: "export"`) + [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) + [tw-animate-css](https://github.com/Wombosvideo/tw-animate-css) |
| UI primitives | [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/) patterns (button, card, sonner) |
| Routing | Next.js App Router (file-based) |
| Animation | [framer-motion](https://www.framer.com/motion/) |
| Icons | [lucide-react](https://lucide.dev/) |
| Notifications | [sonner](https://sonner.emilkowal.ski/) |
| Fonts | Urbanist, Outfit, Space Grotesk, JetBrains Mono (Google Fonts) |
| Hosting | nginx static (behind Cloudflare) at `/var/www/html/fxnholdings.com` |

## Project layout

```
fxn-holdings/
├── frontend/              # Next.js app (static export → frontend/out)
│   └── src/
│       ├── app/           # App Router: page.tsx (Home), about/, portfolio/, contact/, not-found, layout, globals.css
│       ├── components/    # Navbar, Footer, ui/ (button, card, sonner)
│       └── lib/           # utilities (cn)
└── publish.sh             # build + rsync to the nginx web root
```

## Getting started

```bash
cd frontend
npm install
npm run dev        # http://localhost:3000
```

## Build & deploy

```bash
./publish.sh       # builds frontend/out and rsyncs to /var/www/html/fxnholdings.com
```

`next build` emits a fully static site into `frontend/out`, served directly by
nginx (behind Cloudflare). No Node server runs in production. The contact form
is a client-side simulation (no backend), matching the original design.

## License

MIT
