/*
 * Renders a structured LegalDoc in the corporate design.
 * Emails and URLs in the content are turned into links automatically.
 */
import type { LegalDoc } from "@/lib/legal";

const TOKEN = /(https?:\/\/[^\s,)]+|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g;

// Anchor id from a heading, e.g. "1. Who we are" -> "who-we-are".
const slug = (h: string) =>
  h
    .toLowerCase()
    .replace(/^\d+\.\s*/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function linkify(text: string): React.ReactNode[] {
  const parts = text.split(TOKEN);
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      const isEmail = part.includes("@") && !part.startsWith("http");
      const href = isEmail ? `mailto:${part}` : part;
      return (
        <a
          key={i}
          href={href}
          className="font-medium text-emerald-700 underline decoration-emerald-300 underline-offset-2 hover:decoration-emerald-600"
          {...(isEmail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
        >
          {part.replace(/^https?:\/\//, "")}
        </a>
      );
    }
    return part;
  });
}

export default function LegalDocView({ doc }: { doc: LegalDoc }) {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50 pt-36 pb-14 sm:pt-44 sm:pb-16">
        <div className="container">
          <p className="eyebrow text-emerald-600">Legal</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            {doc.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{doc.lede}</p>
          <p className="mt-6 text-sm text-slate-500">Last updated: {doc.updated}</p>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 sm:py-20">
        <div className="container grid gap-10 lg:grid-cols-[250px_1fr] lg:gap-16">
          {/* Table of contents (left) */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-slate-400">On this page</p>
            <nav className="mt-4">
              <ol className="border-l border-slate-200">
                {doc.sections.map((s, i) => (
                  <li key={i}>
                    <a
                      href={`#${slug(s.h)}`}
                      className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-sm text-slate-500 transition-colors hover:border-emerald-500 hover:text-emerald-700"
                    >
                      {s.h}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* Content (right) */}
          <article>
            {doc.sections.map((s, i) => (
              <div key={i} id={slug(s.h)} className={`scroll-mt-28 ${i > 0 ? "mt-10" : ""}`}>
                <h2 className="text-xl font-bold tracking-tight text-slate-900">{s.h}</h2>

                {s.p?.map((para, j) => (
                  <p key={j} className="mt-3 leading-relaxed text-slate-600">
                    {linkify(para)}
                  </p>
                ))}

                {s.ul && (
                  <ul className="mt-3 space-y-2">
                    {s.ul.map((li, j) => (
                      <li key={j} className="flex gap-3 leading-relaxed text-slate-600">
                        <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                        <span>{linkify(li)}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {s.table && (
                  <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="bg-slate-50">
                          {s.table.head.map((h, j) => (
                            <th key={j} className="border-b border-slate-200 px-4 py-3 font-semibold text-slate-900">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {s.table.rows.map((row, j) => (
                          <tr key={j} className="align-top">
                            {row.map((cell, k) => (
                              <td key={k} className="border-b border-slate-100 px-4 py-3 text-slate-600 last:border-r-0">
                                {linkify(cell)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
