/*
 * FXN Holdings — Footer
 * Corporate / institutional: navy band, emerald accents, tidy columns.
 */
import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";

const explore = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Sitemap", href: "/sitemap" },
  { label: "Contact", href: "/contact" },
];

const verticals = [
  { label: "E-Commerce", href: "/portfolio#ecommerce" },
  { label: "Travel & Booking", href: "/portfolio#travel" },
  { label: "Content & Publishing", href: "/portfolio#content" },
  { label: "Price Comparison", href: "/portfolio#comparison" },
  { label: "Affiliate", href: "/portfolio#affiliate" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-slate-300">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Logo variant="dark" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              A UK-registered digital holdings company that builds, acquires, and
              operates a diversified portfolio of online businesses across
              commerce, travel, content, and performance marketing.
            </p>
            <a
              href="mailto:info@fxnholdings.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-emerald-400"
            >
              <Mail className="h-4 w-4" />
              info@fxnholdings.com
            </a>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <h4 className="eyebrow text-emerald-400">Explore</h4>
            <ul className="mt-5 space-y-3">
              {explore.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio */}
          <div className="md:col-span-4">
            <h4 className="eyebrow text-emerald-400">Portfolio</h4>
            <ul className="mt-5 space-y-3">
              {verticals.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {l.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-slate-500">
            © {year} FXN Holdings Limited · Registered in England &amp; Wales ·
            Company No. 16134139 · ICO Reg. ZB940664
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-xs text-slate-500 transition-colors hover:text-slate-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
