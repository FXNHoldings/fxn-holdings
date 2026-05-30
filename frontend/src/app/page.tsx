/*
 * FXN Holdings — Home
 * Corporate / institutional redesign (navy + emerald).
 */
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, ShoppingBag, Plane, Newspaper,
  BarChart3, Network, Check,
} from "lucide-react";
import LottiePlayer from "@/components/LottiePlayer";
import FaqAccordion from "@/components/FaqAccordion";
import { GovernanceIcon, DataLedIcon, DiversifiedIcon, EndureIcon } from "@/components/PrincipleIcons";

/* ── Reveal-on-scroll helper ───────────────────────────────── */
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const dur = 1400, t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      setN(Math.floor((1 - Math.pow(1 - p, 3)) * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const stats = [
  { value: 15, suffix: "+", label: "Web properties" },
  { value: 5, suffix: "", label: "Digital verticals" },
  { value: 2024, suffix: "", label: "Founded" },
  { value: 100, suffix: "K+", label: "Monthly visitors" },
];

const verticals = [
  { id: "ecommerce", icon: ShoppingBag, name: "E-Commerce", blurb: "Online retail brands engineered for search visibility and conversion." },
  { id: "travel", icon: Plane, name: "Travel & Booking", blurb: "Destination, comparison, and booking platforms powered by affiliate partnerships." },
  { id: "content", icon: Newspaper, name: "Content & Publishing", blurb: "Authoritative editorial networks built to rank and retain audiences." },
  { id: "comparison", icon: BarChart3, name: "Price Comparison", blurb: "Real-time pricing intelligence across thousands of products and retailers." },
  { id: "affiliate", icon: Network, name: "Affiliate & Performance", blurb: "Performance-marketing properties with disciplined, data-led monetisation." },
];

const principles = [
  { icon: GovernanceIcon, title: "Governance first", desc: "A UK-registered company operating to GDPR, ICO, and ASA standards across every property we hold." },
  { icon: DataLedIcon, title: "Data-led decisions", desc: "We allocate capital and attention using analytics, testing, and rigorous market research." },
  { icon: DiversifiedIcon, title: "Diversified by design", desc: "Operating across five verticals spreads risk and compounds operational expertise." },
  { icon: EndureIcon, title: "Built to endure", desc: "We build durable assets — quality content, sound technology, and honest monetisation." },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-navy via-emerald-500 to-navy" />
        <div className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="container pt-36 pb-20 sm:pt-44 sm:pb-28">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Left: title + copy + CTAs */}
            <div>
              <Reveal>
                <p className="eyebrow text-emerald-600">UK Digital Holdings Company · Est. 2024</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-5 text-4xl font-bold leading-[1.07] tracking-tight text-slate-900 sm:text-5xl">
                  We build, acquire, and operate{" "}
                  <span className="text-emerald-600">digital businesses</span> across Europe and the UK.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600">
                  FXN Holdings Limited is a digital holding company managing a diversified
                  portfolio of e-commerce, travel, content, price-comparison, and affiliate
                  properties — operated with institutional discipline and measured for the long term.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link href="/portfolio" className="group inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-soft">
                    View the portfolio
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link href="/about" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-900">
                    About the company
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right: animated illustration */}
            <Reveal delay={0.15} className="order-first lg:order-none">
              <LottiePlayer
                src="/lottie/digital-design.json"
                speed={0.5}
                ariaLabel="Digital design and growth"
                className="mx-auto w-full max-w-md lg:max-w-xl"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="container grid grid-cols-2 gap-px overflow-hidden lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="bg-slate-50 px-2 py-10 text-center">
              <div className="font-['Urbanist'] text-4xl font-bold tracking-tight text-navy sm:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="eyebrow mt-2 text-slate-500">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Portfolio overview ── */}
      <section className="py-20 sm:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
            <Reveal>
              <p className="eyebrow text-emerald-600">The portfolio</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Five verticals, one operating standard.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-slate-600 lg:pb-2">
                Each property is built, measured, and improved against the same
                principles — technical excellence, quality content, and
                transparent, compliant monetisation.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {verticals.map((v, i) => (
              <Reveal key={v.id} delay={i * 0.05} className="h-full">
                <div className="group flex h-full flex-col bg-white p-8 transition-colors hover:bg-slate-50">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-900">{v.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{v.blurb}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.05} className="h-full">
              <Link href="/portfolio" className="group flex h-full flex-col justify-between bg-navy p-8 text-white transition-colors hover:bg-navy-soft">
                <span className="eyebrow text-emerald-400">Explore</span>
                <span className="mt-6 inline-flex items-center gap-2 font-['Urbanist'] text-lg font-bold">
                  See the full portfolio
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Operating standard (text + image) ── */}
      <section className="border-t border-slate-200 py-20 sm:py-28">
        <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image (left) */}
          <Reveal>
            <img
              src="/img/digital-design.svg?v=2"
              alt="FXN Holdings — shared analytics and operating platform"
              className="mx-auto w-full max-w-md lg:max-w-lg"
            />
          </Reveal>

          {/* Text (right) */}
          <Reveal delay={0.1}>
            <p className="eyebrow text-emerald-600">The operating standard</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Shared infrastructure, compounding advantage.
            </h2>
            <p className="mt-6 leading-relaxed text-slate-600">
              Every property we build or acquire plugs into the same operating
              backbone — analytics, SEO, content workflows, compliance, and
              monetisation. What we learn in one vertical strengthens the rest.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Centralised analytics and performance benchmarking",
                "Shared SEO, content, and technical playbooks",
                "Group-wide compliance and brand standards",
                "Disciplined, transparent monetisation",
              ].map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-slate-700">
                  <Check className="h-4 w-4 flex-shrink-0 text-emerald-600" />
                  {p}
                </li>
              ))}
            </ul>
            <Link href="/about" className="group mt-8 inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-900">
              How we operate
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-28">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-emerald-600">How we operate</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              An institutional approach to digital assets.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-7">
                  <p.icon className="h-10 w-10 text-emerald-600" />
                  <h3 className="mt-5 text-base font-bold tracking-tight text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Value creation lifecycle ── */}
      <section className="py-20 sm:py-28">
        <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text (left) */}
          <Reveal>
            <p className="eyebrow text-emerald-600">How we create value</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A disciplined lifecycle, from acquisition to scale.
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              We treat every property as a long-term asset. Capital and attention
              are allocated where the evidence points — then compounded across the group.
            </p>
            <div className="mt-8 space-y-7">
              {[
                { n: "01", title: "Acquire & build", desc: "We originate or acquire web properties with durable demand, defensible content, and clear paths to growth." },
                { n: "02", title: "Operate & optimise", desc: "Each property adopts our shared analytics, SEO, content, and compliance playbooks to lift traffic and revenue." },
                { n: "03", title: "Scale & compound", desc: "We reinvest gains and route learnings across verticals, compounding performance over the long term." },
              ].map((s) => (
                <div key={s.n} className="flex gap-5">
                  <span className="font-['Urbanist'] text-2xl font-bold tracking-tight text-emerald-600">{s.n}</span>
                  <div>
                    <h3 className="text-base font-bold tracking-tight text-slate-900">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Image (right) */}
          <Reveal delay={0.1}>
            <img
              src="/img/life-cycle.svg?v=2"
              alt="FXN Holdings — value creation lifecycle"
              className="mx-auto w-full max-w-md lg:max-w-lg"
            />
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-slate-200 bg-slate-50 py-20 sm:py-28">
        <div className="container grid gap-10 lg:grid-cols-[35fr_65fr] lg:gap-24">
          {/* Left (35%): title */}
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-emerald-600">FAQ</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              Answers to common questions about FXN Holdings and our portfolio. Still
              curious?{" "}
              <Link
                href="/contact"
                className="font-medium text-emerald-700 underline decoration-emerald-300 underline-offset-2 hover:decoration-emerald-600"
              >
                Get in touch
              </Link>
              .
            </p>
          </Reveal>

          {/* Right (65%): questions */}
          <Reveal delay={0.1}>
            <FaqAccordion
              items={[
                {
                  q: "What does FXN Holdings do?",
                  a: "FXN Holdings Limited is a UK digital holdings company. We build, acquire, and operate a diversified portfolio of online businesses across e-commerce, travel, content and publishing, price comparison, and affiliate marketing.",
                },
                {
                  q: "Is FXN Holdings a registered UK company?",
                  a: "Yes. FXN Holdings Limited is incorporated and registered in England & Wales (Company No. 16134139) and registered with the ICO for data protection (Registration: ZB940664).",
                },
                {
                  q: "What types of websites are in the portfolio?",
                  a: "Our portfolio spans five verticals: e-commerce stores, travel and booking sites, content and publishing networks, price-comparison platforms, and affiliate marketing properties.",
                },
                {
                  q: "Can I advertise or partner with you?",
                  a: "Yes. We welcome advertising and partnership opportunities across the portfolio — display, sponsored content, affiliate arrangements, and collaborations. Use the contact form to outline what you have in mind.",
                },
                {
                  q: "Do you acquire existing websites?",
                  a: "We consider established web properties that fit our portfolio strategy. If you have a site for sale, get in touch with details of your traffic, revenue, and niche.",
                },
                {
                  q: "How do you handle compliance and data protection?",
                  a: "As a UK-registered company we operate to GDPR, ICO data-protection, and ASA advertising standards across every property we hold.",
                },
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="container py-20 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-center">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Partner, advertise, or explore an acquisition.
              </h2>
              <p className="mt-4 max-w-xl text-slate-600">
                We work with brands, advertisers, and operators across our
                portfolio. If your goals align with ours, we&apos;d welcome the conversation.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="lg:justify-self-end">
              <Link href="/contact" className="group inline-flex items-center gap-2 rounded-lg bg-navy px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-navy-soft">
                Contact FXN Holdings
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
