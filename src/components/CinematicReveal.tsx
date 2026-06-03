import { ReactNode, useEffect, useRef, useState } from "react";

interface CinematicRevealProps {
  children: ReactNode;
  className?: string;
  /** Maximum starting zoom (1.0–1.2). Default 1.12. */
  startScale?: number;
  /** Duration in ms. Default 1600. */
  duration?: number;
  /** Threshold for IntersectionObserver. Default 0.2. */
  threshold?: number;
}

/**
 * A subtle Ken Burns + "develop" reveal — the image starts slightly
 * scaled up and soft, then settles into focus over ~1.6s once it
 * enters the viewport. Triggers once.
 */
export const CinematicReveal = ({
  children,
  className = "",
  startScale = 1.12,
  duration = 1600,
  threshold = 0.2,
}: CinematicRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{
        opacity: revealed ? 1 : 0,
        transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
      }}
    >
      <div
        style={{
          transform: revealed ? "scale(1)" : `scale(${startScale})`,
          filter: revealed ? "blur(0px)" : "blur(6px)",
          transition: `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1), filter ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        }}
      >
        {children}
      </div>
      {/* Develop-mask: a soft ivory sweep that retreats as the image settles */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-background"
        style={{
          opacity: revealed ? 0 : 0.6,
          transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        }}
      />
    </div>
  );
};