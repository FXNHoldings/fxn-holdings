/*
 * FXN Holdings — Portfolio Page
 * Design: Kinetic Blueprint — dark slate, electric blue, amber gold
 * Sections: Hero, 5 vertical deep-dives, approach
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ShoppingCart, Plane, FileText, BarChart2, Link2,
  ArrowRight, CheckCircle, TrendingUp, Users, Globe
} from "lucide-react";

const verticals = [
  {
    id: "ecommerce",
    icon: ShoppingCart,
    label: "VERTICAL 01",
    title: "E-Commerce Platforms",
    subtitle: "Online Retail at Scale",
    description:
      "Our ecommerce portfolio comprises multiple online retail stores spanning diverse product categories. Each platform is built on proven ecommerce technology, optimised for search engine visibility, and designed to convert browsers into buyers.",
    image: "/manus-storage/ecommerce_card_50fd5dab.jpg",
    color: "oklch(0.62 0.2 220)",
    features: [
      "Multi-category product catalogues",
      "Mobile-first responsive design",
      "SEO-optimised product pages",
      "Integrated payment processing",
      "Automated inventory management",
      "Customer review and rating systems",
    ],
    stats: [
      { label: "Avg. Conversion Rate", value: "3.2%" },
      { label: "Mobile Traffic Share", value: "68%" },
      { label: "Product Categories", value: "20+" },
    ],
  },
  {
    id: "travel",
    icon: Plane,
    label: "VERTICAL 02",
    title: "Travel & Booking Websites",
    subtitle: "Inspiring Journeys, Driving Bookings",
    description:
      "Our travel portfolio connects millions of travellers with the best destinations, hotels, flights, and holiday packages. We partner with leading travel affiliate networks to deliver competitive pricing and real-time availability across our platforms.",
    image: "/manus-storage/travel_card_a37a6ea4.jpg",
    color: "oklch(0.75 0.17 75)",
    features: [
      "Destination guides and travel inspiration",
      "Hotel and accommodation comparison",
      "Flight search and booking integration",
      "Holiday package aggregation",
      "Travel tips and itinerary planning",
      "User reviews and ratings",
    ],
    stats: [
      { label: "Destinations Covered", value: "500+" },
      { label: "Affiliate Partners", value: "30+" },
      { label: "Monthly Searches", value: "50K+" },
    ],
  },
  {
    id: "blogs",
    icon: FileText,
    label: "VERTICAL 03",
    title: "Blog & Content Networks",
    subtitle: "Authority Content That Ranks",
    description:
      "Our content network spans multiple high-authority blogs covering lifestyle, technology, finance, health, food, and travel. Each publication is built on a foundation of expert-written, SEO-optimised content designed to rank on Google and engage loyal audiences.",
    image: "/manus-storage/blog_content_card_5eceb4cb.jpg",
    color: "oklch(0.68 0.18 160)",
    features: [
      "Expert-written, fact-checked articles",
      "Long-form SEO content strategy",
      "Topic cluster and pillar page architecture",
      "Email newsletter and subscriber management",
      "Social media content distribution",
      "Display advertising and sponsored content",
    ],
    stats: [
      { label: "Active Blog Properties", value: "5+" },
      { label: "Articles Published", value: "1,000+" },
      { label: "Avg. Domain Authority", value: "35+" },
    ],
  },
  {
    id: "comparison",
    icon: BarChart2,
    label: "VERTICAL 04",
    title: "Price Comparison Platforms",
    subtitle: "Helping Consumers Find the Best Deals",
    description:
      "Our price comparison websites aggregate product and service pricing from hundreds of UK and international retailers. We empower consumers to make informed purchasing decisions by presenting clear, accurate, and up-to-date price data across multiple categories.",
    image: "/manus-storage/price_comparison_card_1bc52a83.jpg",
    color: "oklch(0.7 0.18 280)",
    features: [
      "Real-time price data aggregation",
      "Multi-retailer product comparison",
      "Price history tracking and alerts",
      "Deal and discount discovery",
      "User-friendly comparison tables",
      "Affiliate commission on referred purchases",
    ],
    stats: [
      { label: "Products Tracked", value: "100K+" },
      { label: "Retail Partners", value: "200+" },
      { label: "Price Updates Daily", value: "500K+" },
    ],
  },
  {
    id: "affiliate",
    icon: Link2,
    label: "VERTICAL 05",
    title: "Affiliate Marketing Networks",
    subtitle: "Performance Marketing That Converts",
    description:
      "Our affiliate portfolio is a network of niche websites that generate revenue through strategic partnerships with leading brands and affiliate networks. We use data-driven content strategies and technical SEO to drive high-intent traffic that converts.",
    image: "/manus-storage/affiliate_card_b0d66016.jpg",
    color: "oklch(0.72 0.16 120)",
    features: [
      "Niche-specific product review sites",
      "Comparison and best-of content",
      "High-intent keyword targeting",
      "Multi-network affiliate management",
      "Commission tracking and optimisation",
      "Seasonal campaign management",
    ],
    stats: [
      { label: "Affiliate Networks", value: "15+" },
      { label: "Active Campaigns", value: "50+" },
      { label: "Avg. EPC", value: "£0.85" },
    ],
  },
];

const approach = [
  { icon: TrendingUp, title: "Research & Validate", desc: "We identify high-opportunity niches through extensive keyword research, market analysis, and competitive intelligence before building." },
  { icon: Globe, title: "Build & Optimise", desc: "Every property is built with technical SEO, performance, and user experience as primary considerations from day one." },
  { icon: Users, title: "Grow & Monetise", desc: "We scale traffic through content, link building, and paid channels, then monetise through the most appropriate revenue model for each vertical." },
];

export default function Portfolio() {
  return (
    <div className="overflow-x-hidden pt-16">
      {/* ── Page Hero ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[oklch(0.14_0.04_240)]" />
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[oklch(0.62_0.2_220/0.05)] blur-3xl" />
        <div className="relative container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-[oklch(0.75_0.17_75)]" />
              <span className="mono-label text-[oklch(0.75_0.17_75)] text-xs">OUR PORTFOLIO</span>
              <span className="w-8 h-px bg-[oklch(0.75_0.17_75)]" />
            </div>
            <h1
              className="font-['Space_Grotesk'] font-700 text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Our Digital{" "}
              <span className="text-gradient-blue">Web Portfolio</span>
            </h1>
            <p className="text-[oklch(0.75_0.02_240)] text-lg max-w-2xl mx-auto leading-relaxed">
              Five distinct digital verticals, each managed with the same commitment to quality, performance, and sustainable growth. Explore the web properties that make up the FXN Holdings portfolio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Verticals ── */}
      {verticals.map((v, i) => (
        <section
          key={v.id}
          id={v.id}
          className={`py-20 relative ${i % 2 === 1 ? "bg-[oklch(0.16_0.038_240)]" : ""}`}
        >
          <div className="absolute inset-0 blueprint-grid opacity-8" />
          <div className="relative container">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={i % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.title}
                    className="w-full h-72 lg:h-96 object-cover"
                  />
                  <div
                    className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5"
                    style={{ background: `${v.color}22`, border: `1px solid ${v.color}55` }}
                  >
                    <v.icon className="w-3.5 h-3.5" style={{ color: v.color }} />
                    <span className="mono-label text-[10px]" style={{ color: v.color }}>
                      {v.label}
                    </span>
                  </div>
                </div>
                {/* Stats bar */}
                <div className="grid grid-cols-3 border border-white/10 border-t-0">
                  {v.stats.map((stat) => (
                    <div key={stat.label} className="p-4 border-r border-white/10 last:border-r-0 text-center">
                      <div
                        className="font-['Space_Grotesk'] font-700 text-lg mb-1"
                        style={{ color: v.color }}
                      >
                        {stat.value}
                      </div>
                      <div className="mono-label text-[oklch(0.55_0.02_240)] text-[10px]">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={i % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-px" style={{ background: v.color }} />
                  <span className="mono-label text-xs" style={{ color: v.color }}>
                    {v.label}
                  </span>
                </div>
                <h2
                  className="font-['Space_Grotesk'] font-700 text-white leading-tight mb-2"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
                >
                  {v.title}
                </h2>
                <p className="font-['Space_Grotesk'] font-400 mb-4" style={{ color: v.color }}>
                  {v.subtitle}
                </p>
                <p className="text-[oklch(0.72_0.02_240)] text-sm leading-relaxed mb-6">
                  {v.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {v.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: v.color }} />
                      <span className="text-[oklch(0.72_0.02_240)] text-sm">{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Our Approach ── */}
      <section className="py-24 relative">
        <div className="absolute inset-0 blueprint-grid opacity-10" />
        <div className="relative container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-[oklch(0.75_0.17_75)]" />
              <span className="mono-label text-[oklch(0.75_0.17_75)] text-xs">HOW WE WORK</span>
              <span className="w-8 h-px bg-[oklch(0.75_0.17_75)]" />
            </div>
            <h2
              className="font-['Space_Grotesk'] font-700 text-white leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Our Portfolio Approach
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {approach.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative bg-[oklch(0.22_0.035_240)] border border-white/10 p-8 text-center"
              >
                <div className="absolute top-4 right-4 mono-label text-[oklch(0.3_0.02_240)] text-2xl font-700">
                  0{i + 1}
                </div>
                <div className="w-14 h-14 bg-[oklch(0.62_0.2_220/0.12)] flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-[oklch(0.62_0.2_220)]" />
                </div>
                <h3 className="font-['Space_Grotesk'] font-600 text-white text-xl mb-3">
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
        <div className="relative container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-['Space_Grotesk'] font-700 text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Interested in Advertising<br />on Our Platforms?
            </h2>
            <p className="text-[oklch(0.65_0.02_240)] text-base max-w-lg mx-auto mb-8">
              Reach highly targeted audiences across our portfolio of ecommerce, travel, content, and affiliate websites. Get in touch to discuss advertising and partnership opportunities.
            </p>
            <Link href="/contact">
              <button className="group inline-flex items-center gap-2 bg-[oklch(0.62_0.2_220)] hover:bg-[oklch(0.55_0.22_220)] text-white px-8 py-4 font-['Space_Grotesk'] font-600 text-base transition-all duration-300 glow-blue">
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
