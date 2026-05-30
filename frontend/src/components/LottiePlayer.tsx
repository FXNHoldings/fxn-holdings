"use client";

import { useEffect, useRef } from "react";

/**
 * Generic client-only Lottie player. lottie-web is imported dynamically so it
 * never runs during the static export/prerender; the JSON is fetched at runtime.
 */
export default function LottiePlayer({
  src,
  speed = 1,
  loop = true,
  className = "",
  ariaLabel = "",
}: {
  src: string;
  speed?: number;
  loop?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let anim: any;
    (async () => {
      try {
        const lottie = (await import("lottie-web")).default;
        const res = await fetch(src);
        const data = await res.json();
        if (cancelled || !ref.current) return;
        anim = lottie.loadAnimation({
          container: ref.current,
          renderer: "svg",
          loop,
          autoplay: true,
          animationData: data,
        });
        if (speed !== 1) anim.setSpeed(speed);
      } catch {
        /* ignore — animation is decorative */
      }
    })();
    return () => {
      cancelled = true;
      anim?.destroy();
    };
  }, [src, speed, loop]);

  return <div ref={ref} role="img" aria-label={ariaLabel} className={className} />;
}
