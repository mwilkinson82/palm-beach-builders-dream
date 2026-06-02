import { useEffect, useRef, useState } from "react";

/**
 * Subtle scroll-driven parallax. Returns a ref + inline transform style.
 *
 * `speed` is the fraction of the element's traversal through the viewport
 * that gets translated vertically. Keep it tiny (0.05–0.25) for editorial calm.
 * Positive speed = element moves UP as you scroll down (lifts off the page).
 * Negative speed = element moves DOWN (settles deeper).
 *
 * Respects prefers-reduced-motion and disables on touch-only / narrow viewports
 * to avoid jitter on mobile.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(
  speed = 0.12,
  { disableBelow = 768 }: { disableBelow?: number } = {}
) {
  const ref = useRef<T | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    if (window.innerWidth < disableBelow) return;

    let rafId = 0;
    let ticking = false;

    const update = () => {
      const el = ref.current;
      if (!el) {
        ticking = false;
        return;
      }
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      // Progress 0 → 1 as the element traverses the viewport
      const progress =
        (viewportH - rect.top) / (viewportH + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      // Center the translate around 0 so element rests at its natural spot mid-screen
      const translate = (clamped - 0.5) * speed * 100;
      setOffset(translate);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      rafId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(rafId);
    };
  }, [speed, disableBelow]);

  return {
    ref,
    style: {
      transform: `translate3d(0, ${offset}px, 0)`,
      willChange: "transform" as const,
    },
  };
}