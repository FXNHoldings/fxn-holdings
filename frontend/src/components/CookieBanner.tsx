/*
 * FXN Holdings — Cookie consent banner.
 * Corporate / institutional style. This site uses only strictly-necessary
 * storage, so this is a notice with an acknowledge/decline choice; the choice
 * is remembered in localStorage. hasConsent() can gate any future analytics.
 */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "fxnh-cookie-consent";
type Consent = "accepted" | "declined";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== "accepted" && stored !== "declined") setVisible(true);
  }, []);

  function choose(value: Consent) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore storage errors */
    }
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Cookie notice"
          aria-live="polite"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6"
        >
          <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-[0_8px_40px_rgba(15,23,42,0.12)] backdrop-blur-md sm:flex-row sm:items-center sm:gap-6 sm:p-6">
            <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
              <Cookie className="h-5 w-5" />
            </span>
            <p className="flex-1 text-sm leading-relaxed text-slate-600">
              We use only strictly-necessary cookies to keep this website working
              and secure — no analytics or advertising tracking.{" "}
              <Link
                href="/cookies/"
                className="font-medium text-emerald-700 underline decoration-emerald-300 underline-offset-2 hover:decoration-emerald-600"
              >
                Read our Cookie Policy
              </Link>
              .
            </p>
            <div className="flex flex-shrink-0 gap-2.5">
              <button
                type="button"
                onClick={() => choose("declined")}
                className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => choose("accepted")}
                className="rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-soft"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** True only if the visitor has actively accepted. Use to gate future analytics. */
export function hasConsent(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(STORAGE_KEY) === "accepted";
}
