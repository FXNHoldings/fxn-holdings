/*
 * FXN Holdings — logo lockup (mark + wordmark).
 * Geometric "F" monogram with an emerald accent on a rounded navy tile.
 * variant="light" for white backgrounds, "dark" for the navy footer.
 */

type Variant = "light" | "dark";

export function LogoMark({ className = "h-9 w-9", variant = "light" as Variant }: { className?: string; variant?: Variant }) {
  const dark = variant === "dark";
  const tile = dark ? "rgba(255,255,255,0.10)" : "#0b1f3a";
  const stroke = "#ffffff";
  const accent = dark ? "#34d399" : "#10b981";
  return (
    <svg viewBox="0 0 40 40" className={className} role="img" aria-label="FXN Holdings">
      <rect width="40" height="40" rx="9" fill={tile} />
      {/* F monogram: white stem + middle bar, emerald top bar */}
      <rect x="13.5" y="11" width="4.5" height="18" rx="1.5" fill={stroke} />
      <rect x="13.5" y="18.25" width="9.5" height="4" rx="1.5" fill={stroke} />
      <rect x="13.5" y="11" width="14" height="4.5" rx="1.5" fill={accent} />
      {/* accent square — balances the mark, nods to a diversified portfolio */}
      <rect x="24.5" y="24.5" width="4.5" height="4.5" rx="1.25" fill={accent} />
    </svg>
  );
}

export default function Logo({
  variant = "light",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const dark = variant === "dark";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark variant={variant} />
      <span className="font-['Urbanist'] text-[17px] font-bold leading-none tracking-tight">
        <span className={dark ? "text-white" : "text-slate-900"}>FXN</span>{" "}
        <span className={`font-bold ${dark ? "text-slate-300" : "text-slate-500"}`}>Holdings</span>
      </span>
    </span>
  );
}
