/*
 * FXN Holdings — Navbar Component
 * Design: Kinetic Blueprint — dark translucent nav with electric blue accents
 * Features: sticky scroll, mobile hamburger, active route highlighting
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.18_0.04_240/0.95)] backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-sm bg-[oklch(0.62_0.2_220)] flex items-center justify-center glow-blue transition-all duration-300 group-hover:bg-[oklch(0.75_0.17_75)]">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-['Space_Grotesk'] font-700 text-white text-lg leading-none tracking-tight">
                  FXN<span className="text-[oklch(0.62_0.2_220)]"> Holdings</span>
                </span>
                <p className="mono-label text-[oklch(0.65_0.02_240)] text-[10px] leading-none mt-0.5">
                  LIMITED · UK
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`nav-link font-['Space_Grotesk'] font-500 text-sm transition-colors duration-200 ${
                    location === link.href
                      ? "text-[oklch(0.62_0.2_220)] active"
                      : "text-[oklch(0.75_0.02_240)] hover:text-white"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <button className="btn-fill border border-[oklch(0.62_0.2_220)] text-[oklch(0.62_0.2_220)] hover:text-white px-5 py-2 text-sm font-['Space_Grotesk'] font-600 transition-all duration-300">
                <span>Get in Touch</span>
              </button>
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[oklch(0.18_0.04_240/0.98)] backdrop-blur-md border-b border-white/10"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`block font-['Space_Grotesk'] font-500 text-base py-2 border-b border-white/5 transition-colors ${
                      location === link.href
                        ? "text-[oklch(0.62_0.2_220)]"
                        : "text-[oklch(0.75_0.02_240)]"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <Link href="/contact">
                <button className="w-full mt-2 border border-[oklch(0.62_0.2_220)] text-[oklch(0.62_0.2_220)] px-5 py-3 text-sm font-['Space_Grotesk'] font-600">
                  Get in Touch
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
