/*
 * FXN Holdings — Portfolio
 * Corporate / institutional redesign (navy + emerald).
 */
"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  ArrowRight, Check, ShoppingBag, Plane, Newspaper, BarChart3, Network,
  Search, Wrench, TrendingUp,
} from "lucide-react";

const verticals = [
  {
    id: "ecommerce", no: "01", icon: ShoppingBag,
    name: "E-Commerce Platforms", subtitle: "Online retail at scale",
    description:
      "A portfolio of online retail stores spanning diverse product categories, each built on proven commerce technology, optimised for search visibility, and engineered to convert browsers into buyers.",
    features: ["Multi-category catalogues", "Mobile-first design", "SEO-optimised product pages", "Integrated payments", "Automated inventory", "Reviews & ratings"],
    stats: [["3.2%", "Avg. conversion"], ["68%", "Mobile traffic"], ["20+", "Categories"]],
  },
  {
    id: "travel", no: "02", icon: Plane,
    name: "Travel & Booking", subtitle: "Inspiring journeys, driving bookings",
    description:
      "Travel properties that connect millions of travellers with destinations, hotels, flights, and holiday packages — partnered with leading affiliate networks for competitive pricing and real-time availability.",
    features: ["Destination guides", "Hotel comparison", "Flight search integration", "Holiday package aggregation", "Itinerary planning", "User reviews"],
    stats: [["500+", "Destinations"], ["30+", "Affiliate partners"], ["50K+", "Monthly searches"]],
  },
  {
    id: "content", no: "03", icon: Newspaper,
    name: "Content & Publishing", subtitle: "Authority content that ranks",
    description:
      "A network of high-authority publications across lifestyle, technology, finance, health, and travel — built on expert-written, SEO-optimised editorial designed to rank on Google and retain loyal audiences.",
    features: ["Expert, fact-checked articles", "Long-form SEO strategy", "Topic-cluster architecture", "Newsletter & subscribers", "Social distribution", "Sponsored content"],
    stats: [["5+", "Active properties"], ["1,000+", "Articles published"], ["35+", "Avg. domain authority"]],
  },
  {
    id: "comparison", no: "04", icon: BarChart3,
    name: "Price Comparison", subtitle: "Helping consumers decide",
    description:
      "Comparison platforms that aggregate product and service pricing from hundreds of UK and international retailers, empowering consumers with clear, accurate, and up-to-date price data across categories.",
    features: ["Real-time aggregation", "Multi-retailer comparison", "Price history & alerts", "Deal discovery", "Clear comparison tables", "Referral commission"],
    stats: [["100K+", "Products tracked"], ["200+", "Retail partners"], ["500K+", "Daily price updates"]],
  },
  {
    id: "affiliate", no: "05", icon: Network,
    name: "Affiliate & Performance", subtitle: "Performance marketing that converts",
    description:
      "A network of niche properties generating revenue through strategic partnerships with leading brands and affiliate networks, using data-led content and technical SEO to drive high-intent, converting traffic.",
    features: ["Niche review sites", "Comparison & best-of content", "High-intent keywords", "Multi-network management", "Commission optimisation", "Seasonal campaigns"],
    stats: [["15+", "Affiliate networks"], ["50+", "Active campaigns"], ["£0.85", "Avg. EPC"]],
  },
];

const approach = [
  { icon: Search, title: "Research & validate", desc: "We identify high-opportunity niches through keyword research, market analysis, and competitive intelligence before committing capital." },
  { icon: Wrench, title: "Build & optimise", desc: "Every property is built with technical SEO, performance, and user experience as first-order concerns from day one." },
  { icon: TrendingUp, title: "Grow & monetise", desc: "We scale traffic through content, links, and paid channels, then monetise with the model best suited to each vertical." },
];

export default function Portfolio() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-slate-200 bg-slate-50 pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="container">
          <Reveal><p className="eyebrow text-emerald-600">Our portfolio</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              A diversified portfolio of digital businesses.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Five distinct verticals, each operated to the same standard of
              quality, performance, and sustainable growth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Verticals ── */}
      {verticals.map((v, i) => (
        <section key={v.id} id={v.id} className={`scroll-mt-24 py-16 sm:py-20 ${i % 2 === 1 ? "bg-slate-50 border-y border-slate-200" : ""}`}>
          <div className="container grid items-center gap-12 lg:grid-cols-2">
            {/* Text */}
            <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
                  <v.icon className="h-5 w-5" />
                </span>
                <span className="eyebrow text-slate-400">Vertical {v.no}</span>
              </div>
              <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{v.name}</h2>
              <p className="mt-1.5 font-['Urbanist'] font-semibold text-emerald-600">{v.subtitle}</p>
              <p className="mt-4 leading-relaxed text-slate-600">{v.description}</p>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {v.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <Check className="h-4 w-4 flex-shrink-0 text-emerald-600" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Figures panel */}
            <Reveal delay={0.1} className={i % 2 === 1 ? "lg:order-1" : ""}>
              <div className="rounded-2xl bg-navy p-8 sm:p-10">
                <p className="eyebrow text-emerald-400">By the numbers</p>
                <div className="mt-6 divide-y divide-white/10">
                  {v.stats.map(([val, label]) => (
                    <div key={label} className="flex items-baseline justify-between gap-4 py-4">
                      <span className="font-['Urbanist'] text-3xl font-bold tracking-tight text-white sm:text-4xl">{val}</span>
                      <span className="eyebrow text-right text-slate-400">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* ── Approach ── */}
      <section className="border-t border-slate-200 py-20 sm:py-28">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-emerald-600">How we work</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our portfolio approach.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {approach.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="relative h-full rounded-xl border border-slate-200 bg-white p-8">
                  <span className="eyebrow absolute right-6 top-6 text-slate-300">0{i + 1}</span>
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-navy text-white">
                    <a.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-900">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-navy">
        <div className="container flex flex-col items-start gap-8 py-20 sm:flex-row sm:items-center sm:justify-between sm:py-24">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Advertise across the portfolio.</h2>
            <p className="mt-3 max-w-xl text-slate-300">Reach targeted audiences across our e-commerce, travel, content, and affiliate properties.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/contact" className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-emerald-400">
              Get in touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
