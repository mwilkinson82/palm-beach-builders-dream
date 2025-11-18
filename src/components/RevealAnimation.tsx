import { useEffect, useRef, ReactNode } from "react";

interface RevealAnimationProps {
  children: ReactNode;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in" | "luxury-reveal";
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
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
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
  }[animation];

  return (
    <div ref={ref} className={`reveal-element ${animationClass} ${className}`}>
      {children}
    </div>
  );
};
