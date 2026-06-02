import { ReactNode } from "react";
import { useParallax } from "@/hooks/useParallax";

interface ParallaxProps {
  children: ReactNode;
  /** Translate intensity. Tiny by design: 0.05–0.25. Positive = lifts up. */
  speed?: number;
  className?: string;
  /** Disable below this viewport width (default 768). */
  disableBelow?: number;
  as?: "div" | "span";
}

/**
 * Declarative subtle scroll-parallax wrapper.
 * Use sparingly — one or two per section — to add depth without motion sickness.
 */
export const Parallax = ({
  children,
  speed = 0.12,
  className = "",
  disableBelow = 768,
  as: Tag = "div",
}: ParallaxProps) => {
  const { ref, style } = useParallax<HTMLDivElement>(speed, { disableBelow });
  return (
    <Tag ref={ref as never} className={className} style={style}>
      {children}
    </Tag>
  );
};