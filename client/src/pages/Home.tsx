/*
 * FXN Holdings — Home Page
 * Design: Kinetic Blueprint — dark slate, electric blue, amber gold
 * Sections: Hero, Stats, Portfolio Preview, About Teaser, Why FXN, CTA
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import {
  ShoppingCart, Plane, FileText, BarChart2, Link2, Globe,
  ArrowRight, ChevronRight, TrendingUp, Users, Award, Zap
} from "lucide-react";

// ─── Animated Counter ────────────────────────────────────────────────────────
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Portfolio Categories ─────────────────────────────────────────────────────
const portfolioItems = [
  {
    id: "ecommerce",
    icon: ShoppingCart,
    label: "E-Commerce",
    title: "Online Retail Platforms",
    description:
      "We build and operate high-converting ecommerce stores across multiple niches — from fashion and electronics to health and lifestyle products. Our platforms are optimised for SEO, mobile performance, and conversion.",
    image: "/manus-storage/ecommerce_card_50fd5dab.jpg",
    color: "oklch(0.62 0.2 220)",
    tags: ["Shopify", "WooCommerce", "Conversion Optimisation"],
  },
  {
    id: "travel",
    icon: Plane,
    label: "Travel",
    title: "Travel & Booking Websites",
    description:
      "Our travel portfolio includes destination guides, hotel comparison tools, flight aggregators, and holiday package platforms. We connect travellers with the best deals through smart affiliate partnerships.",
    image: "/manus-storage/travel_card_a37a6ea4.jpg",
    color: "oklch(0.75 0.17 75)",
    tags: ["Booking APIs", "Destination Guides", "Travel Affiliate"],
  },
  {
    id: "blogs",
    icon: FileText,
    label: "Blogs & Content",
    title: "Content & Blog Networks",
    description:
      "We manage a network of authoritative content websites and blogs covering lifestyle, technology, finance, health, and more. Each property is built on a foundation of high-quality, SEO-optimised editorial content.",
    image: "/manus-storage/blog_content_card_5eceb4cb.jpg",
    color: "oklch(0.68 0.18 160)",
    tags: ["SEO Content", "Editorial Strategy", "Audience Growth"],
  },
  {
    id: "comparison",
    icon: BarChart2,
    label: "Price Comparison",
    title: "Product Price Comparison",
    description:
      "Our price comparison platforms help consumers find the best deals across thousands of products and services. We aggregate data from hundreds of retailers in real time to deliver accurate, up-to-date pricing intelligence.",
    image: "/manus-storage/price_comparison_card_1bc52a83.jpg",
    color: "oklch(0.7 0.18 280)",
    tags: ["Data Aggregation", "Real-Time Pricing", "Consumer Tools"],
  },
  {
    id: "affiliate",
    icon: Link2,
    label: "Affiliate",
    title: "Affiliate Marketing Networks",
    description:
      "We operate a growing portfolio of affiliate websites that generate revenue through strategic partnerships with leading brands. Our data-driven approach maximises click-through rates and commission earnings across every vertical.",
    image: "/manus-storage/affiliate_card_b0d66016.jpg",
    color: "oklch(0.72 0.16 120)",
    tags: ["Performance Marketing", "CPA Networks", "Revenue Optimisation"],
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
const stats = [
  { value: 15, suffix: "+", label: "Web Properties", icon: Globe },
  { value: 5, suffix: "", label: "Digital Verticals", icon: TrendingUp },
  { value: 2024, suffix: "", label: "Founded", icon: Award },
  { value: 100, suffix: "K+", label: "Monthly Visitors", icon: Users },
];

// ─── Why FXN ──────────────────────────────────────────────────────────────────
const whyItems = [
  {
    icon: Zap,
    title: "Performance-First",
    desc: "Every website in our portfolio is engineered for speed, SEO, and conversion — not just aesthetics.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Growth",
    desc: "We use analytics, A/B testing, and market research to continuously optimise traffic and revenue.",
  },
  {
    icon: Globe,
    title: "Multi-Vertical Expertise",
    desc: "From travel to ecommerce, our team brings deep domain knowledge across five distinct digital verticals.",
  },
  {
    icon: Award,
    title: "UK Registered & Trusted",
    desc: "FXN Holdings Limited is a company registered in England & Wales, operating with full legal compliance.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/manus-storage/hero_banner_6c37e63f.jpg"
            alt="FXN Holdings digital network"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.14_0.04_240/0.95)] via-[oklch(0.14_0.04_240/0.75)] to-[oklch(0.14_0.04_240/0.4)]" />
          <div className="absolute inset-0 blueprint-grid opacity-20" />
        </div>

        <div className="relative container pt-24 pb-16">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="mono-label text-[oklch(0.62_0.2_220)] text-xs">
                UK DIGITAL HOLDING COMPANY
              </span>
              <span className="w-8 h-px bg-[oklch(0.62_0.2_220)]" />
              <span className="mono-label text-[oklch(0.65_0.02_240)] text-xs">
                EST. 2024
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-['Space_Grotesk'] font-700 text-white leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              Building the{" "}
              <span className="text-gradient-blue">Digital Future</span>
              <br />
              One Website at a Time
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[oklch(0.78_0.02_240)] text-lg leading-relaxed mb-10 max-w-xl"
            >
              FXN Holdings Limited is a UK-registered digital holding company managing a growing portfolio of ecommerce, travel, blog, price comparison, and affiliate websites — all engineered for performance and growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/portfolio">
                <button className="group flex items-center gap-2 bg-[oklch(0.62_0.2_220)] hover:bg-[oklch(0.55_0.22_220)] text-white px-7 py-3.5 font-['Space_Grotesk'] font-600 text-sm transition-all duration-300 glow-blue">
                  Explore Our Portfolio
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/about">
                <button className="flex items-center gap-2 border border-white/20 text-white hover:border-[oklch(0.62_0.2_220)] hover:text-[oklch(0.62_0.2_220)] px-7 py-3.5 font-['Space_Grotesk'] font-600 text-sm transition-all duration-300">
                  About FXN Holdings
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="mono-label text-[oklch(0.5_0.02_240)] text-[10px]">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-[oklch(0.62_0.2_220)] to-transparent"
          />
        </motion.div>
      </section>

      {/* ── Stats ── */}
      <section
        className="relative py-16 border-y border-white/10 overflow-hidden"
        style={{
          backgroundImage: `url('/manus-storage/stats_bg_0c2b2cec.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[oklch(0.14_0.04_240/0.88)]" />
        <div className="relative container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <stat.icon className="w-6 h-6 text-[oklch(0.62_0.2_220)] mx-auto mb-3" />
                <div className="font-['Space_Grotesk'] font-700 text-white mb-1" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mono-label text-[oklch(0.55_0.02_240)] text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio Preview ── */}
      <section className="py-24 relative">
        <div className="absolute inset-0 blueprint-grid opacity-10" />
        <div className="relative container">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[oklch(0.75_0.17_75)]" />
              <span className="mono-label text-[oklch(0.75_0.17_75)] text-xs">OUR PORTFOLIO</span>
            </div>
            <h2 className="font-['Space_Grotesk'] font-700 text-white leading-tight mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Five Digital Verticals,<br />
              <span className="text-gradient-blue">One Holding Company</span>
            </h2>
            <p className="text-[oklch(0.65_0.02_240)] text-base max-w-xl leading-relaxed">
              FXN Holdings manages a carefully curated portfolio of web properties, each built to dominate its niche through quality content, technical excellence, and strategic monetisation.
            </p>
          </motion.div>

          {/* Portfolio grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`portfolio-card bg-[oklch(0.22_0.035_240)] border border-white/10 overflow-hidden ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                {/* Card image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.035_240)] to-transparent" />
                  <div
                    className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5"
                    style={{ background: `${item.color}22`, border: `1px solid ${item.color}44` }}
                  >
                    <item.icon className="w-3.5 h-3.5" style={{ color: item.color }} />
                    <span className="mono-label text-[10px]" style={{ color: item.color }}>
                      {item.label}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6 gold-border-left">
                  <h3 className="font-['Space_Grotesk'] font-600 text-white text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[oklch(0.65_0.02_240)] text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="mono-label text-[10px] px-2 py-1 bg-white/5 text-[oklch(0.55_0.02_240)] border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-10 text-center"
          >
            <Link href="/portfolio">
              <button className="group inline-flex items-center gap-2 border border-[oklch(0.62_0.2_220)] text-[oklch(0.62_0.2_220)] hover:bg-[oklch(0.62_0.2_220)] hover:text-white px-8 py-3.5 font-['Space_Grotesk'] font-600 text-sm transition-all duration-300">
                View Full Portfolio
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── About Teaser ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/manus-storage/about_section_a8a5c840.jpg"
            alt="FXN Holdings team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.14_0.04_240/0.96)] via-[oklch(0.14_0.04_240/0.85)] to-[oklch(0.14_0.04_240/0.5)]" />
        </div>
        <div className="relative container">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[oklch(0.75_0.17_75)]" />
                <span className="mono-label text-[oklch(0.75_0.17_75)] text-xs">ABOUT US</span>
              </div>
              <h2 className="font-['Space_Grotesk'] font-700 text-white leading-tight mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                A UK Digital Company<br />
                <span className="text-gradient-blue">Built for Scale</span>
              </h2>
              <p className="text-[oklch(0.78_0.02_240)] text-base leading-relaxed mb-4">
                Founded and registered in England &amp; Wales, FXN Holdings Limited was established with a clear mission: to build, acquire, and manage a portfolio of digital web properties that deliver real value to users and sustainable returns for the business.
              </p>
              <p className="text-[oklch(0.65_0.02_240)] text-base leading-relaxed mb-8">
                Our team combines expertise in digital marketing, web development, SEO, content strategy, and affiliate marketing to create web properties that rank, convert, and grow.
              </p>
              <Link href="/about">
                <button className="group flex items-center gap-2 bg-[oklch(0.75_0.17_75)] hover:bg-[oklch(0.68_0.18_75)] text-[oklch(0.14_0.04_240)] px-7 py-3.5 font-['Space_Grotesk'] font-700 text-sm transition-all duration-300">
                  Learn More About FXN
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why FXN ── */}
      <section className="py-24 relative">
        <div className="absolute inset-0 blueprint-grid opacity-10" />
        <div className="relative container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-[oklch(0.75_0.17_75)]" />
              <span className="mono-label text-[oklch(0.75_0.17_75)] text-xs">WHY FXN HOLDINGS</span>
              <span className="w-8 h-px bg-[oklch(0.75_0.17_75)]" />
            </div>
            <h2 className="font-['Space_Grotesk'] font-700 text-white leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              What Sets Us Apart
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-[oklch(0.22_0.035_240)] border border-white/10 p-6 hover:border-[oklch(0.62_0.2_220/0.4)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-[oklch(0.62_0.2_220/0.15)] flex items-center justify-center mb-4 group-hover:bg-[oklch(0.62_0.2_220/0.25)] transition-colors">
                  <item.icon className="w-5 h-5 text-[oklch(0.62_0.2_220)]" />
                </div>
                <h3 className="font-['Space_Grotesk'] font-600 text-white text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-[oklch(0.65_0.02_240)] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[oklch(0.62_0.2_220/0.08)]" />
        <div className="absolute inset-0 blueprint-grid opacity-15" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.62_0.2_220/0.5)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.62_0.2_220/0.5)] to-transparent" />
        <div className="relative container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mono-label text-[oklch(0.75_0.17_75)] text-xs block mb-4">GET IN TOUCH</span>
            <h2 className="font-['Space_Grotesk'] font-700 text-white leading-tight mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Interested in Partnering<br />with FXN Holdings?
            </h2>
            <p className="text-[oklch(0.65_0.02_240)] text-base max-w-lg mx-auto mb-8">
              Whether you're looking to collaborate, advertise on our platforms, or explore acquisition opportunities, we'd love to hear from you.
            </p>
            <Link href="/contact">
              <button className="group inline-flex items-center gap-2 bg-[oklch(0.62_0.2_220)] hover:bg-[oklch(0.55_0.22_220)] text-white px-8 py-4 font-['Space_Grotesk'] font-600 text-base transition-all duration-300 glow-blue">
                Contact Us Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
