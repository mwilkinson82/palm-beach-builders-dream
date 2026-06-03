import { useCallback, useEffect, useRef, useState } from "react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before",
  afterAlt = "After",
  beforeLabel = "Original Residence",
  afterLabel = "Beau Monde Standard",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(55);
  const [dragging, setDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const revealRan = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, x)));
  }, []);

  const startDrag = useCallback(
    (e: React.PointerEvent) => {
      (e.target as Element).setPointerCapture?.(e.pointerId);
      setDragging(true);
      setHasInteracted(true);
      updateFromClientX(e.clientX);
    },
    [updateFromClientX],
  );

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: PointerEvent) => updateFromClientX(e.clientX);
    const onUp = () => setDragging(false);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [dragging, updateFromClientX]);

  // One-time intro sweep when the slider scrolls into view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || revealRan.current) return;
          revealRan.current = true;
          const duration = 1400;
          const start = performance.now();
          const from = 100;
          const to = 55;
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            // ease-in-out cubic
            const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
            setPosition(from + (to - from) * eased);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.35 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setHasInteracted(true);
      setPosition((p) => Math.max(0, p - 2));
    } else if (e.key === "ArrowRight") {
      setHasInteracted(true);
      setPosition((p) => Math.min(100, p + 2));
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/5] md:aspect-video overflow-hidden border border-foreground/5 shadow-[0_30px_80px_-30px_rgba(15,42,61,0.45)] select-none touch-none"
      onPointerDown={startDrag}
    >
      {/* Before image (base) */}
      <img
        src={beforeSrc}
        alt={beforeAlt}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable={false}
        loading="lazy"
      />

      {/* After image (clipped overlay revealed from left as position grows) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={afterSrc}
          alt={afterAlt}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
          loading="lazy"
        />
      </div>

      {/* Floating labels */}
      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20 pointer-events-none">
        <div className="backdrop-blur-sm bg-primary/30 px-3 md:px-4 py-1.5 md:py-2 border border-background/20">
          <span className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-background">
            {beforeLabel}
          </span>
        </div>
      </div>
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20 pointer-events-none">
        <div className="bg-primary px-3 md:px-4 py-1.5 md:py-2 border border-accent/40">
          <span className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-background">
            {afterLabel}
          </span>
        </div>
      </div>

      {/* Divider + handle */}
      <div
        className="absolute top-0 bottom-0 z-30 flex items-center justify-center"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="h-full w-px bg-accent" />
        <button
          type="button"
          role="slider"
          aria-label="Drag to compare before and after"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          tabIndex={0}
          onKeyDown={onKeyDown}
          onPointerDown={(e) => {
            e.stopPropagation();
            startDrag(e);
          }}
          className="absolute w-12 h-12 md:w-14 md:h-14 rounded-full border border-accent bg-background/10 backdrop-blur-md flex items-center justify-center cursor-col-resize transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent/60"
        >
          <div className="flex gap-2 pointer-events-none">
            <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>

      {/* Slide-to-reveal hint */}
      <div
        className={`absolute top-6 right-6 md:top-8 md:right-8 z-20 pointer-events-none transition-opacity duration-700 ${
          hasInteracted ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex items-center gap-3 bg-background/70 backdrop-blur-sm px-3 py-1.5">
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary">
            Slide to Reveal
          </span>
          <div className="w-8 md:w-12 h-px bg-primary" />
        </div>
      </div>
    </div>
  );
}