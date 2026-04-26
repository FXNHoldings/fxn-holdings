/*
 * FXN Holdings — About Page
 * Design: Kinetic Blueprint — dark slate, electric blue, amber gold
 * Sections: Hero, Mission, Values, Team, UK Registration
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Target, Eye, Layers, Shield, Globe, ArrowRight, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Performance-Driven",
    desc: "We measure everything. Every website in our portfolio is continuously optimised for traffic, engagement, and revenue through rigorous data analysis.",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "We operate with full transparency — with our partners, advertisers, and users. Honest content and fair practices are at the core of every platform we manage.",
  },
  {
    icon: Layers,
    title: "Diversification",
    desc: "Our multi-vertical approach spreads risk and maximises opportunity. By operating across ecommerce, travel, content, and affiliate sectors, we build resilient digital businesses.",
  },
  {
    icon: Shield,
    title: "Compliance & Trust",
    desc: "As a UK-registered company, we adhere to all relevant regulations including GDPR, ICO data protection requirements, and ASA advertising standards.",
  },
];

const milestones = [
  { year: "2024", event: "FXN Holdings Limited incorporated in England & Wales" },
  { year: "2024", event: "ICO registration completed (Ref: ZB940664)" },
  { year: "2024", event: "First ecommerce and affiliate platforms launched" },
  { year: "2025", event: "Travel and price comparison verticals added to portfolio" },
  { year: "2025", event: "Blog and content network expanded to 5+ properties" },
  { year: "2026", event: "Portfolio reaches 15+ active web properties" },
];

const ukFacts = [
  "Company Number: 16134139",
  "Registered in England & Wales",
  "ICO Registration: ZB940664",
  "Data Protection compliant (GDPR)",
  "ASA advertising standards adherent",
  "Companies House registered",
];

export default function About() {
  return (
    <div className="overflow-x-hidden pt-16">
      {/* ── Page Hero ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80&auto=format&fit=crop"
            alt="FXN Holdings team in London office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.14_0.04_240/0.9)] via-[oklch(0.14_0.04_240/0.8)] to-[oklch(0.14_0.04_240)]" />
          <div className="absolute inset-0 blueprint-grid opacity-15" />
        </div>
        <div className="relative container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-[oklch(0.75_0.17_75)]" />
              <span className="mono-label text-[oklch(0.75_0.17_75)] text-xs">ABOUT FXN HOLDINGS</span>
              <span className="w-8 h-px bg-[oklch(0.75_0.17_75)]" />
            </div>
            <h1
              className="font-['Urbanist'] font-700 text-[oklch(0.235_0.015_65)] leading-tight mb-6"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}
            >
              Who We Are
            </h1>
            <p className="text-[oklch(0.45_0.02_240)] text-lg max-w-2xl mx-auto leading-relaxed">
              FXN Holdings Limited is a UK-registered digital holding company with a mission to build, manage, and grow a diverse portfolio of high-performance web properties.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-24 relative">
        <div className="absolute inset-0 blueprint-grid opacity-10" />
        <div className="relative container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[oklch(0.75_0.17_75)]" />
                <span className="mono-label text-[oklch(0.75_0.17_75)] text-xs">OUR MISSION</span>
              </div>
              <h2
                className="font-['Urbanist'] font-700 text-[oklch(0.235_0.015_65)] leading-tight mb-6"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
              >
                Building Digital Businesses That{" "}
                <span className="text-gradient-blue">Last</span>
              </h2>
              <p className="text-[oklch(0.45_0.02_240)] text-base leading-relaxed mb-4">
                At FXN Holdings, our mission is to create and manage a portfolio of digital web properties that deliver genuine value to users while generating sustainable, long-term revenue. We believe that the best digital businesses are built on quality content, technical excellence, and honest monetisation.
              </p>
              <p className="text-[oklch(0.45_0.02_240)] text-base leading-relaxed mb-8">
                Founded in 2024 and registered in England &amp; Wales, we operate across five key digital verticals: ecommerce, travel, blogs &amp; content, price comparison, and affiliate marketing. Each property in our portfolio is managed with the same rigorous standards of quality, compliance, and performance.
              </p>
              <div className="flex flex-col gap-3">
                {["SEO-first content strategy", "Data-driven monetisation", "UK regulatory compliance", "User-centric design"].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[oklch(0.62_0.2_220)] flex-shrink-0" />
                    <span className="text-[oklch(0.45_0.02_240)] text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white border border-[oklch(0.92_0.004_286.32)] p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-[oklch(0.62_0.2_220)]" />
                <h3 className="font-['Urbanist'] font-600 text-[oklch(0.235_0.015_65)] text-xl">
                  UK Registered Company
                </h3>
              </div>
              <p className="text-[oklch(0.45_0.02_240)] text-sm leading-relaxed mb-6">
                FXN Holdings Limited is a company incorporated and registered in England &amp; Wales. We operate with full legal compliance across all our digital properties.
              </p>
              <div className="flex flex-col gap-3">
                {ukFacts.map((fact) => (
                  <div key={fact} className="flex items-center gap-3 py-2 border-b border-[oklch(0.92_0.004_286.32)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.75_0.17_75)] flex-shrink-0" />
                    <span className="mono-label text-[oklch(0.45_0.02_240)] text-xs">{fact}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 bg-[oklch(0.96_0.002_240)] relative">
        <div className="absolute inset-0 blueprint-grid opacity-10" />
        <div className="relative container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[oklch(0.75_0.17_75)]" />
              <span className="mono-label text-[oklch(0.75_0.17_75)] text-xs">OUR VALUES</span>
            </div>
            <h2
              className="font-['Urbanist'] font-700 text-[oklch(0.235_0.015_65)] leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              The Principles That Guide Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white border border-[oklch(0.92_0.004_286.32)] p-8 hover:border-[oklch(0.62_0.2_220/0.4)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[oklch(0.62_0.2_220/0.12)] flex items-center justify-center mb-5 group-hover:bg-[oklch(0.62_0.2_220/0.22)] transition-colors">
                  <val.icon className="w-6 h-6 text-[oklch(0.62_0.2_220)]" />
                </div>
                <h3 className="font-['Urbanist'] font-600 text-[oklch(0.235_0.015_65)] text-xl mb-3">
                  {val.title}
                </h3>
                <p className="text-[oklch(0.45_0.02_240)] text-sm leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24 relative">
        <div className="absolute inset-0 blueprint-grid opacity-10" />
        <div className="relative container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[oklch(0.75_0.17_75)]" />
              <span className="mono-label text-[oklch(0.75_0.17_75)] text-xs">OUR JOURNEY</span>
            </div>
            <h2
              className="font-['Urbanist'] font-700 text-[oklch(0.235_0.015_65)] leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Company Milestones
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-gradient-to-b from-[oklch(0.62_0.2_220/0.5)] via-[oklch(0.62_0.2_220/0.3)] to-transparent hidden sm:block" />

            <div className="flex flex-col gap-6">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-6"
                >
                  <div className="flex-shrink-0 w-[72px] text-right">
                    <span className="mono-label text-[oklch(0.75_0.17_75)] text-xs">{m.year}</span>
                  </div>
                  <div className="relative flex-shrink-0 hidden sm:block">
                    <div className="w-3 h-3 rounded-full bg-[oklch(0.62_0.2_220)] mt-0.5" />
                  </div>
                  <div className="bg-white border border-[oklch(0.92_0.004_286.32)] px-5 py-3 flex-1">
                    <p className="text-[oklch(0.85_0.02_240)] text-sm">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[oklch(0.62_0.2_220/0.08)]" />
        <div className="absolute inset-0 blueprint-grid opacity-15" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.62_0.2_220/0.5)] to-transparent" />
        <div className="relative container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-['Urbanist'] font-700 text-[oklch(0.235_0.015_65)] leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Want to Know More?
            </h2>
            <p className="text-[oklch(0.45_0.02_240)] text-base max-w-lg mx-auto mb-8">
              Explore our portfolio of web properties or get in touch to discuss partnership opportunities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/portfolio">
                <button className="group inline-flex items-center gap-2 bg-[oklch(0.62_0.2_220)] hover:bg-[oklch(0.55_0.22_220)] text-[oklch(0.235_0.015_65)] px-7 py-3.5 font-['Urbanist'] font-600 text-sm transition-all duration-300">
                  View Our Portfolio
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 border border-[oklch(0.92_0.004_286.32)] text-[oklch(0.235_0.015_65)] hover:border-[oklch(0.62_0.2_220)] hover:text-[oklch(0.62_0.2_220)] px-7 py-3.5 font-['Urbanist'] font-600 text-sm transition-all duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
