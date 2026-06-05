import { useEffect, useRef, ReactNode } from "react";

interface RevealAnimationProps {
  children: ReactNode;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in" | "luxury-reveal" | "curtain";
  className?: string;
}

export const RevealAnimation = ({ 
  children, 
  delay = 0, 
  animation = "luxury-reveal",
  className = "" 
}: RevealAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add("revealed");
            }, delay);
            observer.unobserve(element);
          }
        });
      },
      {
        // Use a low threshold and a viewport-relative bottom margin so tall
        // sections still trigger on short mobile viewports.
        threshold: 0.01,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delay]);

  const animationClass = {
    "fade-up": "reveal-fade-up",
    "fade-in": "reveal-fade-in",
    "slide-left": "reveal-slide-left",
    "slide-right": "reveal-slide-right",
    "scale-in": "reveal-scale-in",
    "luxury-reveal": "reveal-luxury",
    "curtain": "reveal-curtain",
  }[animation];

  return (
    <div ref={ref} className={`reveal-element ${animationClass} ${className}`}>
      {children}
    </div>
  );
};
