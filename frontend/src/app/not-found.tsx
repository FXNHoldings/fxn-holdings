import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center bg-slate-50 px-6">
      <div className="text-center">
        <p className="eyebrow text-emerald-600">Error 404</p>
        <h1 className="mt-4 font-['Urbanist'] text-7xl font-bold tracking-tight text-navy sm:text-8xl">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">Page not found</h2>
        <p className="mx-auto mt-3 max-w-md text-slate-600">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <Link
          href="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-soft"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Back to home
        </Link>
      </div>
    </section>
  );
}
