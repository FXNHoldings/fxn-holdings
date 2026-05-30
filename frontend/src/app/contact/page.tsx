/*
 * FXN Holdings — Contact
 * Corporate / institutional redesign (navy + emerald).
 */
"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { toast } from "sonner";
import {
  Mail, Globe, MapPin, Clock, Send, CheckCircle2, Plus,
  Briefcase, Megaphone, Handshake, HelpCircle,
} from "lucide-react";

const reasons = [
  { icon: Briefcase, label: "Partnership enquiry", value: "partnership" },
  { icon: Megaphone, label: "Advertising opportunity", value: "advertising" },
  { icon: Handshake, label: "Website collaboration", value: "collaboration" },
  { icon: HelpCircle, label: "General enquiry", value: "general" },
];

const details = [
  { icon: Globe, label: "Website", value: "www.fxnholdings.com", href: "https://www.fxnholdings.com" },
  { icon: Mail, label: "Email", value: "info@fxnholdings.com", href: "mailto:info@fxnholdings.com" },
  { icon: MapPin, label: "Registered", value: "England & Wales · No. 16134139" },
  { icon: Clock, label: "Response time", value: "Within 2 business days" },
];

const faqs = [
  { q: "What types of websites does FXN Holdings manage?", a: "A diversified portfolio of digital properties — e-commerce stores, travel and booking sites, content and publishing networks, price-comparison platforms, and affiliate marketing websites." },
  { q: "Can I advertise on your websites?", a: "Yes. We welcome advertising partnerships across the portfolio — display, sponsored content, and affiliate arrangements. Use the form to outline your requirements." },
  { q: "Is FXN Holdings a registered UK company?", a: "Yes. FXN Holdings Limited is incorporated and registered in England & Wales (Company No. 16134139) and registered with the ICO for data protection (ZB940664)." },
  { q: "Do you acquire existing websites?", a: "We consider established web properties that fit our portfolio strategy. If you have a site for sale, get in touch with details of traffic, revenue, and niche." },
  { q: "How can I collaborate with FXN Holdings?", a: "We welcome content partnerships, affiliate arrangements, joint ventures, and technology partnerships. Reach out via the form to start the conversation." },
];

const inputCls =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", reason: "", message: "" });
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState<number | null>(0);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please complete all required fields.");
      return;
    }
    setSent(true);
    toast.success("Message sent — we'll be in touch within 2 business days.");
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-slate-200 bg-slate-50 pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="container">
          <Reveal><p className="eyebrow text-emerald-600">Get in touch</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Let&apos;s start a conversation.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Whether you&apos;re looking to partner, advertise, or learn more about the
              portfolio, we&apos;d be glad to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Contact grid ── */}
      <section className="py-20 sm:py-28">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          {/* Details */}
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Company information</h2>
            <ul className="mt-7 space-y-6">
              {details.map((d) => (
                <li key={d.label} className="flex items-start gap-4">
                  <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
                    <d.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="eyebrow text-slate-400">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="text-sm font-medium text-slate-900 transition-colors hover:text-emerald-600">{d.value}</a>
                    ) : (
                      <p className="text-sm font-medium text-slate-900">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
              <p className="eyebrow text-slate-400">We welcome enquiries about</p>
              <ul className="mt-4 space-y-3">
                {reasons.map((r) => (
                  <li key={r.value} className="flex items-center gap-3 text-sm text-slate-700">
                    <r.icon className="h-4 w-4 text-emerald-600" />
                    {r.label}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50/50 p-12 text-center">
                <CheckCircle2 className="h-16 w-16 text-emerald-600" />
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">Message sent</h3>
                <p className="mt-3 max-w-sm text-slate-600">
                  Thank you for reaching out to FXN Holdings. We&apos;ll review your message
                  and respond within 2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_1px_30px_rgba(15,23,42,0.05)]">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Send us a message</h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Full name <span className="text-emerald-600">*</span></label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" className={inputCls} />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Email address <span className="text-emerald-600">*</span></label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" className={inputCls} />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Company</label>
                    <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Your company" className={inputCls} />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Enquiry type</label>
                    <select value={form.reason} onChange={(e) => setForm({ ...form, reason: e.target.value })} className={`${inputCls} appearance-none`}>
                      <option value="">Select a reason</option>
                      {reasons.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
                    </select>
                  </div>
                </div>
                <div className="mt-5">
                  <label className="mb-2 block text-sm font-medium text-slate-700">Message <span className="text-emerald-600">*</span></label>
                  <textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your enquiry…" className={`${inputCls} resize-none`} />
                </div>
                <button type="submit" className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-soft">
                  Send message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <p className="mt-4 text-center text-xs text-slate-400">
                  By submitting this form you agree to our Privacy Policy. We never share your information with third parties.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-slate-200 bg-slate-50 py-20 sm:py-28">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-emerald-600">FAQ</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Frequently asked questions.</h2>
          </Reveal>
          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                    <span className="font-['Urbanist'] font-semibold text-slate-900">{f.q}</span>
                    <Plus className={`h-5 w-5 flex-shrink-0 text-emerald-600 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`} />
                  </button>
                  {open === i && (
                    <div className="border-t border-slate-100 px-6 pb-5 pt-4">
                      <p className="text-sm leading-relaxed text-slate-600">{f.a}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
