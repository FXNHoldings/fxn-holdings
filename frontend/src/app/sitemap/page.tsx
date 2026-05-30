/*
 * FXN Holdings — Sitemap (human-readable index)
 * Corporate / institutional design (navy + emerald).
 */
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sitemap · FXN Holdings Limited",
  description:
    "A complete index of pages and portfolio sections across the FXN Holdings Limited website.",
  alternates: { canonical: "/sitemap/" },
};

type LinkItem = { label: string; href: string; external?: boolean };
type Group = { title: string; links: LinkItem[] };

const groups: Group[] = [
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
  {
    title: "Portfolio verticals",
    links: [
      { label: "E-Commerce", href: "/portfolio#ecommerce" },
      { label: "Travel & Booking", href: "/portfolio#travel" },
      { label: "Content & Publishing", href: "/portfolio#content" },
      { label: "Price Comparison", href: "/portfolio#comparison" },
      { label: "Affiliate & Performance", href: "/portfolio#affiliate" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "XML sitemap", href: "/sitemap.xml", external: true },
      { label: "Robots", href: "/robots.txt", external: true },
    ],
  },
];

const legal: LinkItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export default function SitemapPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-slate-200 bg-slate-50 pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="container">
          <p className="eyebrow text-emerald-600">Sitemap</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Everything on this site, in one place.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            A complete index of the FXN Holdings website — pages, portfolio
            verticals, and resources.
          </p>
        </div>
      </section>

      {/* ── Index ── */}
      <section className="py-20 sm:py-28">
        <div className="container grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="eyebrow text-slate-400">{g.title}</h2>
              <ul className="mt-5 space-y-1">
                {g.links.map((l) =>
                  l.external ? (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="group flex items-center gap-1.5 rounded-md py-2 text-slate-700 transition-colors hover:text-emerald-700"
                      >
                        {l.label}
                        <ArrowUpRight className="h-4 w-4 text-slate-400 transition-colors group-hover:text-emerald-600" />
                      </a>
                    </li>
                  ) : (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="group flex items-center gap-1.5 rounded-md py-2 text-slate-700 transition-colors hover:text-emerald-700"
                      >
                        {l.label}
                        <ArrowUpRight className="h-4 w-4 text-slate-400 transition-colors group-hover:text-emerald-600" />
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}

          {/* Legal */}
          <div>
            <h2 className="eyebrow text-slate-400">Legal</h2>
            <ul className="mt-5 space-y-1">
              {legal.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-1.5 rounded-md py-2 text-slate-700 transition-colors hover:text-emerald-700"
                  >
                    {l.label}
                    <ArrowUpRight className="h-4 w-4 text-slate-400 transition-colors group-hover:text-emerald-600" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
