import { useEffect, useRef, useState } from "react";
import { RevealAnimation } from "@/components/RevealAnimation";

const cards = [
  { k: "Live CPM Schedule", v: "The master timeline that drives every trade." },
  { k: "Daily Logs", v: "Field reports, photos, and decisions — recorded each day." },
  { k: "Owner Portal", v: "24/7 access for owner, architect, and designer." },
  { k: "Selection Curation", v: "Dream board → approval → procurement → install." },
];

interface Props {
  scrollY: number;
}

export const ScheduleDrivenSection = ({ scrollY }: Props) => {
  const sectionRef = useRef<HTMLElement>(null);
  // Local section progress (0 → 1) based on its position within the viewport
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || 800;
    // Section center vs viewport center, normalized
    const center = rect.top + rect.height / 2;
    const raw = 1 - center / vh;
    const clamped = Math.max(0, Math.min(1, raw + 0.25));
    setProgress(clamped);
  }, [scrollY]);

  // Parallax values
  const watermarkX = (1 - progress) * 60; // slides in from the right
  const watermarkY = (progress - 0.5) * 40;
  const watermarkOpacity = Math.max(0, Math.min(0.06, progress * 0.08));
  const eyebrowWidth = 8 + progress * 60; // hairline grows with scroll

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 border-t border-accent/15 bg-background overflow-hidden"
    >
      {/* Parallax watermark — drifts in from the right as you scroll */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute right-0 top-10 md:top-16 font-display italic text-[22vw] md:text-[14vw] leading-none text-primary whitespace-nowrap will-change-transform"
        style={{
          transform: `translate3d(${watermarkX}%, ${watermarkY}px, 0)`,
          opacity: watermarkOpacity,
        }}
      >
        On schedule.
      </span>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <RevealAnimation animation="fade-up" className="lg:col-span-5">
            <div className="flex items-center space-x-3 mb-6">
              <div
                className="h-px bg-accent transition-[width] duration-300 ease-out"
                style={{ width: `${eyebrowWidth}px` }}
              />
              <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-sans font-light">
                Schedule-Driven
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-primary leading-[1.05] mb-6">
              Built on the clock,
              <br />
              <span className="italic text-muted-foreground">open to the owner.</span>
            </h2>
            <p className="font-sans font-light text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mb-6">
              Beau Monde runs every project on a live CPM schedule. Owners receive
              direct, around-the-clock access to daily logs and the master timeline —
              full transparency on what was done today, what's planned tomorrow, and
              where the project stands against its critical path.
            </p>
            <p className="font-sans font-light text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
              Our selection software carries every choice from inspiration board to
              approval to release for procurement, delivery, and installation — a
              single record from dream to doorway.
            </p>
          </RevealAnimation>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-accent/15 border border-accent/20">
              {cards.map((card, i) => {
                // Cards illuminate as scroll progress crosses their threshold
                const threshold = 0.25 + i * 0.12;
                const lit = progress >= threshold;
                return (
                  <RevealAnimation key={card.k} animation="fade-up" delay={i * 110}>
                    <div
                      className="group h-full bg-card hover:bg-seafoam p-8 md:p-10 transition-all duration-700"
                      style={{
                        transform: lit ? "translateY(0)" : "translateY(6px)",
                      }}
                    >
                      <div className="flex items-baseline gap-4 mb-4">
                        <span
                          className={`font-display text-3xl md:text-4xl leading-none transition-colors duration-500 ${
                            lit ? "text-accent" : "text-accent/40"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div
                          className={`h-px flex-1 transition-colors duration-500 ${
                            lit ? "bg-accent/60" : "bg-accent/20"
                          }`}
                        />
                      </div>
                      <h3 className="font-display text-2xl md:text-[28px] text-primary leading-snug mb-3">
                        {card.k}
                      </h3>
                      <p className="font-sans font-light text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                        {card.v}
                      </p>
                    </div>
                  </RevealAnimation>
                );
              })}
            </div>

            <RevealAnimation animation="fade-up" delay={380}>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-10 bg-accent" />
                <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-accent">
                  One source of truth · From dream board to doorway
                </span>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};