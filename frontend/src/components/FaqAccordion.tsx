"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function FaqAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl bg-white">
      {items.map((f, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            aria-expanded={open === i}
          >
            <span className="font-['Urbanist'] text-lg font-semibold text-slate-900">{f.q}</span>
            <Plus
              className={`h-5 w-5 flex-shrink-0 text-emerald-600 transition-transform duration-300 ${
                open === i ? "rotate-45" : ""
              }`}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-5">
              <p className="text-sm leading-relaxed text-slate-600">{f.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
