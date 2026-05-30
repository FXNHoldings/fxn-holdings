/*
 * FXN Holdings — About
 * Corporate / institutional redesign (navy + emerald).
 */
"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  ArrowRight, Check, Target, Scale, Layers, ShieldCheck,
} from "lucide-react";

const facts = [
  ["Legal name", "FXN Holdings Limited"],
  ["Registration", "England & Wales"],
  ["Company number", "16134139"],
  ["ICO registration", "ZB940664"],
  ["Founded", "2024"],
  ["Compliance", "GDPR · ICO · ASA"],
];

const values = [
  { icon: Target, title: "Performance-driven", desc: "Every property is held to measurable standards for traffic, engagement, and return. We manage to the numbers." },
  { icon: Scale, title: "Transparency", desc: "Honest content and fair, clearly-labelled monetisation underpin every business we operate." },
  { icon: Layers, title: "Diversification", desc: "Operating across five verticals spreads risk and lets operational learning compound across the group." },
  { icon: ShieldCheck, title: "Compliance & trust", desc: "As a UK company we operate to GDPR, ICO data-protection, and ASA advertising standards." },
];

const milestones = [
  { year: "2024", event: "FXN Holdings Limited incorporated in England & Wales." },
  { year: "2024", event: "ICO registration completed (ZB940664)." },
  { year: "2024", event: "First e-commerce and affiliate properties launched." },
  { year: "2025", event: "Travel and price-comparison verticals added to the portfolio." },
  { year: "2025", event: "Content & publishing network expanded to 5+ properties." },
  { year: "2026", event: "Portfolio reaches 15+ active web properties." },
];

export default function About() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-slate-200 bg-slate-50 pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="container">
          <Reveal>
            <p className="eyebrow text-emerald-600">About FXN Holdings</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              A UK digital holdings company, built for the long term.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              We create, acquire, and operate a diversified portfolio of digital
              businesses — applying disciplined capital allocation and consistent
              operating standards across every property we hold.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Mission + facts ── */}
      <section className="py-20 sm:py-28">
        <div className="container grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <Reveal>
            <p className="eyebrow text-emerald-600">Our mission</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Building digital businesses that last.
            </h2>
            <p className="mt-6 leading-relaxed text-slate-600">
              FXN Holdings was established to build and manage a portfolio of
              digital web properties that deliver genuine value to users while
              generating sustainable, long-term returns. We believe the best
              digital businesses rest on three foundations: quality content,
              technical excellence, and honest monetisation.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Founded in 2024 and registered in England &amp; Wales, we operate
              across five core verticals — e-commerce, travel, content &amp;
              publishing, price comparison, and affiliate marketing — each held to
              the same standards of quality, compliance, and performance.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["SEO-first content strategy", "Data-driven monetisation", "UK regulatory compliance", "User-centric design"].map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-slate-700">
                  <Check className="h-4 w-4 flex-shrink-0 text-emerald-600" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-lg font-bold tracking-tight text-slate-900">Company facts</h3>
              <dl className="mt-5 divide-y divide-slate-200">
                {facts.map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-sm text-slate-500">{k}</dt>
                    <dd className="text-right text-sm font-medium text-slate-900">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-28">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-emerald-600">Our values</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              The principles that guide us.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="flex h-full gap-5 rounded-xl border border-slate-200 bg-white p-7">
                  <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold tracking-tight text-slate-900">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20 sm:py-28">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-emerald-600">Our journey</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Company milestones.
            </h2>
          </Reveal>
          <div className="mt-12 space-y-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200">
            {milestones.map((m, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="flex items-center gap-6 bg-white px-6 py-5 sm:px-8">
                  <span className="font-['Urbanist'] text-lg font-bold tracking-tight text-emerald-600 w-16 flex-shrink-0">
                    {m.year}
                  </span>
                  <span className="h-2 w-2 flex-shrink-0 rounded-full bg-navy" />
                  <p className="text-sm text-slate-700">{m.event}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Explore the portfolio.</h2>
            <p className="mt-3 max-w-xl text-slate-300">See the businesses we build and operate across five digital verticals.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3">
              <Link href="/portfolio" className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-400">
                View portfolio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                Contact us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
