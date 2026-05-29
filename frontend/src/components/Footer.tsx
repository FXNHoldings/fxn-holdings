/*
 * FXN Holdings — Footer Component
 * Design: Kinetic Blueprint — light footer with blueprint grid, gold accents
 */
import Link from "next/link";
import { Globe, Mail, MapPin, ExternalLink } from "lucide-react";

const portfolioLinks = [
  { label: "E-Commerce Platforms", href: "/portfolio#ecommerce" },
  { label: "Travel Websites", href: "/portfolio#travel" },
  { label: "Blog & Content Sites", href: "/portfolio#blogs" },
  { label: "Price Comparison", href: "/portfolio#comparison" },
  { label: "Affiliate Networks", href: "/portfolio#affiliate" },
];

const companyLinks = [
  { label: "About FXN Holdings", href: "/about" },
  { label: "Our Portfolio", href: "/portfolio" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[oklch(0.96_0.002_240)] border-t border-[oklch(0.92_0.004_286.32)] overflow-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-30" />

      <div className="relative container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-sm bg-[oklch(0.62_0.2_220)] flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-['Urbanist'] font-700 text-[oklch(0.235_0.015_65)] text-xl leading-none">
                  FXN<span className="text-[oklch(0.62_0.2_220)]"> Holdings</span>
                </span>
                <p className="mono-label text-[oklch(0.45_0.02_240)] text-[10px] leading-none mt-0.5">
                  LIMITED · REGISTERED IN ENGLAND & WALES
                </p>
              </div>
            </div>
            <p className="text-[oklch(0.45_0.02_240)] text-sm leading-relaxed max-w-sm mb-6">
              FXN Holdings Limited is a UK-registered digital holding company building and managing a diverse portfolio of high-performance websites across ecommerce, travel, content, and affiliate marketing verticals.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[oklch(0.45_0.02_240)] text-sm">
                <MapPin className="w-4 h-4 text-[oklch(0.62_0.2_220)] flex-shrink-0" />
                <span>Registered in England &amp; Wales</span>
              </div>
              <div className="flex items-center gap-2 text-[oklch(0.45_0.02_240)] text-sm">
                <Globe className="w-4 h-4 text-[oklch(0.62_0.2_220)] flex-shrink-0" />
                <a
                  href="https://www.fxnholdings.com"
                  className="hover:text-[oklch(0.235_0.015_65)] transition-colors"
                >
                  www.fxnholdings.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-[oklch(0.45_0.02_240)] text-sm">
                <Mail className="w-4 h-4 text-[oklch(0.62_0.2_220)] flex-shrink-0" />
                <a
                  href="mailto:info@fxnholdings.com"
                  className="hover:text-[oklch(0.235_0.015_65)] transition-colors"
                >
                  info@fxnholdings.com
                </a>
              </div>
            </div>
          </div>

          {/* Portfolio Links */}
          <div>
            <h4 className="font-['Urbanist'] font-600 text-[oklch(0.235_0.015_65)] text-sm mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-[oklch(0.75_0.17_75)]" />
              Our Portfolio
            </h4>
            <ul className="flex flex-col gap-3">
              {portfolioLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="text-[oklch(0.45_0.02_240)] text-sm hover:text-[oklch(0.62_0.2_220)] transition-colors flex items-center gap-1.5 group">
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-['Urbanist'] font-600 text-[oklch(0.235_0.015_65)] text-sm mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-[oklch(0.75_0.17_75)]" />
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="text-[oklch(0.45_0.02_240)] text-sm hover:text-[oklch(0.62_0.2_220)] transition-colors flex items-center gap-1.5 group">
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="font-['Urbanist'] font-600 text-[oklch(0.235_0.015_65)] text-sm mb-3 flex items-center gap-2">
                <span className="w-4 h-px bg-[oklch(0.75_0.17_75)]" />
                Legal
              </h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <span className="text-[oklch(0.45_0.02_240)] text-sm hover:text-[oklch(0.62_0.2_220)] transition-colors cursor-pointer">
                    Privacy Policy
                  </span>
                </li>
                <li>
                  <span className="text-[oklch(0.45_0.02_240)] text-sm hover:text-[oklch(0.62_0.2_220)] transition-colors cursor-pointer">
                    Terms of Service
                  </span>
                </li>
                <li>
                  <span className="text-[oklch(0.45_0.02_240)] text-sm hover:text-[oklch(0.62_0.2_220)] transition-colors cursor-pointer">
                    Cookie Policy
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-rule mt-12 mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="mono-label text-[oklch(0.55_0.02_240)] text-xs">
            © {new Date().getFullYear()} FXN Holdings Limited. All rights reserved. Registered in England &amp; Wales.
          </p>
          <p className="mono-label text-[oklch(0.55_0.02_240)] text-xs">
            Company No. 16134139 · ICO Reg. ZB940664
          </p>
        </div>
      </div>
    </footer>
  );
}
