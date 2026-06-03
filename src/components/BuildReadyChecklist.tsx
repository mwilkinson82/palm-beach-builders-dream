import { useEffect, useRef, useState } from "react";

const items = [
  { k: "Architectural drawings", v: "Approved & stamped" },
  { k: "Permits & approvals", v: "Town of Palm Beach in hand" },
  { k: "Scope & budget", v: "Locked, line-by-line" },
  { k: "Material & finish schedule", v: "Specified to spec sheets" },
  { k: "Trade partners", v: "Selected and contracted" },
  { k: "Site logistics & HOA", v: "Sequenced, neighbor-conscious" },
];

export const BuildReadyChecklist = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [checkedCount, setCheckedCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setRevealed(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Tick the progress counter in sync with each check-mark draw completing.
  // Each item draws starting at 500 + i*140ms and the SVG stroke takes 700ms.
  useEffect(() => {
    if (!revealed) return;
    const timers: number[] = [];
    items.forEach((_, i) => {
      const t = window.setTimeout(() => {
        setCheckedCount((c) => Math.max(c, i + 1));
      }, 500 + i * 140 + 700);
      timers.push(t);
    });
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [revealed]);

  const progress = (checkedCount / items.length) * 100;

  return (
    <div ref={ref} className="relative">
      {/* Engraved paper card */}
      <div className="relative bg-card border border-accent/25 shadow-[0_30px_80px_-40px_hsl(var(--primary)/0.35)] p-8 md:p-14">
        {/* Inner hairline frame */}
        <div aria-hidden className="pointer-events-none absolute inset-3 border border-accent/20" />

        {/* Header */}
        <div className="relative flex flex-col items-center text-center mb-10 md:mb-12">
          <div className="flex items-center space-x-3 mb-5">
            <span className="h-px w-8 bg-accent" />
            <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-accent">
              Build-Ready Checklist
            </span>
            <span className="h-px w-8 bg-accent" />
          </div>
          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary leading-[1.05]">
            Six confirmations before a
            <br />
            <span className="italic text-muted-foreground">shovel touches the site.</span>
          </h3>
          <div
            className={`mt-8 h-px bg-accent origin-left transition-all duration-[1400ms] ease-out ${
              revealed ? "w-24 opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>

        {/* Animated progress rail */}
        <div className="relative mb-10 md:mb-12">
          <div className="flex items-baseline justify-between mb-3">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent">
              Readiness
            </span>
            <span className="font-display text-xl md:text-2xl text-primary tabular-nums leading-none">
              <span className="italic">{String(checkedCount).padStart(2, "0")}</span>
              <span className="text-muted-foreground/60 mx-1">/</span>
              <span className="text-muted-foreground/60">{String(items.length).padStart(2, "0")}</span>
            </span>
          </div>
          <div className="relative h-px w-full bg-accent/15 overflow-visible">
            <div
              className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
            <div
              className="absolute -top-[3px] h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_0_4px_hsl(var(--background))] transition-[left] duration-700 ease-out"
              style={{ left: `calc(${progress}% - 3.5px)` }}
            />
            {/* Tick marks */}
            <div className="absolute inset-x-0 -top-1 flex justify-between pointer-events-none">
              {items.map((_, i) => (
                <span
                  key={i}
                  className={`h-[3px] w-px transition-colors duration-500 ${
                    i < checkedCount ? "bg-accent" : "bg-accent/30"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="mt-3 font-sans font-light italic text-[11px] text-muted-foreground">
            {checkedCount < items.length
              ? "Confirmations in progress…"
              : "Build-ready. Site mobilization can begin."}
          </div>
        </div>

        {/* Items */}
        <ul className="relative grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-16">
          {items.map((item, i) => (
            <li
              key={item.k}
              className={`group relative flex items-start gap-5 py-5 border-b border-accent/15 last:border-b-0 md:[&:nth-last-child(2)]:border-b-0 transition-all duration-[900ms] ease-out ${
                revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: revealed ? `${300 + i * 140}ms` : "0ms" }}
            >
              {/* Brass check mark — animated SVG draw */}
              <span className="relative mt-1 shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full ring-1 ring-accent/40 bg-[hsl(var(--seafoam))]/40">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M5 12.5l4.5 4.5L19 7"
                    style={{
                      strokeDasharray: 24,
                      strokeDashoffset: revealed ? 0 : 24,
                      transition: `stroke-dashoffset 700ms ease-out ${
                        revealed ? 500 + i * 140 : 0
                      }ms`,
                    }}
                  />
                </svg>
              </span>

              <div className="flex-1 min-w-0 pb-1">
                <div className="font-display text-xl md:text-2xl text-primary leading-snug">
                  {item.k}
                </div>
                <div className="font-sans font-light text-[11px] md:text-xs tracking-[0.25em] uppercase text-accent mt-1.5">
                  {item.v}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Footer hairline + signature */}
        <div className="relative mt-10 md:mt-12 flex flex-col items-center">
          <div
            className={`h-px bg-accent origin-center transition-all duration-[1400ms] ease-out ${
              revealed ? "w-40 opacity-100" : "w-0 opacity-0"
            }`}
            style={{ transitionDelay: revealed ? "1400ms" : "0ms" }}
          />
          <p
            className={`mt-5 font-sans font-light italic text-[12px] md:text-[13px] text-muted-foreground transition-opacity duration-[1200ms] ${
              revealed ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: revealed ? "1600ms" : "0ms" }}
          >
            Reviewed, signed, and countersigned by your Master Builder.
          </p>
        </div>
      </div>

      {/* Drop-shadow card behind */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 translate-x-3 translate-y-3 border border-accent/20"
      />
    </div>
  );
};