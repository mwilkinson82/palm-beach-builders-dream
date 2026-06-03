import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { RevealAnimation } from "@/components/RevealAnimation";

import c1 from "@/assets/constellation/c1.jpg.asset.json";
import c2 from "@/assets/constellation/c2.jpg.asset.json";
import c3 from "@/assets/constellation/c3.jpg.asset.json";
import c4 from "@/assets/constellation/c4.jpg.asset.json";
import c5 from "@/assets/constellation/c5.jpg.asset.json";
import c6 from "@/assets/constellation/c6.jpg.asset.json";
import c7 from "@/assets/constellation/c7.jpg.asset.json";
import c8 from "@/assets/constellation/c8.jpg.asset.json";
import c9 from "@/assets/constellation/c9.jpg.asset.json";
import c11 from "@/assets/constellation/c11.jpg.asset.json";
import c12 from "@/assets/constellation/c12.jpg.asset.json";
import c13 from "@/assets/constellation/c13.jpg.asset.json";
import c14 from "@/assets/constellation/c14.jpg.asset.json";
import c15 from "@/assets/constellation/c15.jpg.asset.json";
import c16 from "@/assets/constellation/c16.jpg.asset.json";
import c17 from "@/assets/constellation/c17.jpg.asset.json";
import c18 from "@/assets/constellation/c18.jpg.asset.json";
import c19 from "@/assets/constellation/c19.jpg.asset.json";
import c20 from "@/assets/constellation/c20.jpg.asset.json";
import c21 from "@/assets/constellation/c21.jpg.asset.json";
import c22 from "@/assets/constellation/c22.jpg.asset.json";
import c23 from "@/assets/constellation/c23.jpg.asset.json";
import c24 from "@/assets/constellation/c24.jpg.asset.json";
import c25 from "@/assets/constellation/c25.jpg.asset.json";
import c26 from "@/assets/constellation/c26.jpg.asset.json";
import c27 from "@/assets/constellation/c27.jpg.asset.json";
import c28 from "@/assets/constellation/c28.jpg.asset.json";
import c29 from "@/assets/constellation/c29.jpg.asset.json";
import c30 from "@/assets/constellation/c30.jpg.asset.json";
import c31 from "@/assets/constellation/c31.jpg.asset.json";
import c32 from "@/assets/constellation/c32.jpg.asset.json";
import c33 from "@/assets/constellation/c33.jpg.asset.json";
import c34 from "@/assets/constellation/c34.jpg.asset.json";
import c35 from "@/assets/constellation/c35.jpg.asset.json";
import c36 from "@/assets/constellation/c36.jpg.asset.json";
import c37 from "@/assets/constellation/c37.jpg.asset.json";
import c38 from "@/assets/constellation/c38.jpg.asset.json";
import c39 from "@/assets/constellation/c39.jpg.asset.json";
import c40 from "@/assets/constellation/c40.jpg.asset.json";
import c41 from "@/assets/constellation/c41.jpg.asset.json";
import c42 from "@/assets/constellation/c42.jpg.asset.json";
import c43 from "@/assets/constellation/c43.jpg.asset.json";
import c44 from "@/assets/constellation/c44.jpg.asset.json";
import c45 from "@/assets/constellation/c45.jpg.asset.json";
import c46 from "@/assets/constellation/c46.jpg.asset.json";
import c47 from "@/assets/constellation/c47.jpg.asset.json";
import c48 from "@/assets/constellation/c48.jpg.asset.json";
import c49 from "@/assets/constellation/c49.jpg.asset.json";
import c50 from "@/assets/constellation/c50.jpg.asset.json";
import c51 from "@/assets/constellation/c51.jpg.asset.json";
import c52 from "@/assets/constellation/c52.jpg.asset.json";
import c53 from "@/assets/constellation/c53.jpg.asset.json";
import c54 from "@/assets/constellation/c54.jpg.asset.json";
import c55 from "@/assets/constellation/c55.jpg.asset.json";
import c56 from "@/assets/constellation/c56.jpg.asset.json";
import c57 from "@/assets/constellation/c57.jpg.asset.json";
import c58 from "@/assets/constellation/c58.jpg.asset.json";
import c59 from "@/assets/constellation/c59.jpg.asset.json";
import c60 from "@/assets/constellation/c60.jpg.asset.json";
import c61 from "@/assets/constellation/c61.jpg.asset.json";
import c62 from "@/assets/constellation/c62.jpg.asset.json";
import c63 from "@/assets/constellation/c63.jpg.asset.json";
import c64 from "@/assets/constellation/c64.jpg.asset.json";
import c65 from "@/assets/constellation/c65.jpg.asset.json";
import c66 from "@/assets/constellation/c66.jpg.asset.json";

const PHOTOS: { url: string }[] = [
  c1, c2, c3, c4, c5, c6, c7, c8, c9, c11,
  c12, c13, c14, c15, c16, c17, c18, c19, c20, c21,
  c22, c23, c24, c25, c26, c27, c28, c29, c30, c31,
  c32, c33, c34, c35, c36, c37, c38, c39, c40, c41,
  c42, c43, c44, c45, c46, c47, c48, c49, c50, c51,
  c52, c53, c54, c55, c56, c57, c58, c59, c60, c61,
  c62, c63, c64, c65, c66,
];

/**
 * Editorial filmstrip of walkthrough stills.
 * Horizontal scroller of uniform tiles; tap opens a full-screen
 * lightbox with arrow nav, swipe, and a pinned thumbnail rail.
 */
export const WalkthroughGallery = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  return (
    <section
      aria-label="Walkthrough photo gallery"
      className="relative bg-primary text-primary-foreground pb-16 md:pb-24 lg:pb-28 -mt-2 overflow-hidden"
    >
      <RevealAnimation animation="fade-up" delay={120}>
        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          className="flex gap-px md:gap-[2px] overflow-x-auto snap-x snap-mandatory scroll-px-6 px-6 md:px-10 lg:px-16"
        >
          {PHOTOS.map((p, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Open photo ${i + 1} of ${PHOTOS.length}`}
              className="group relative flex-shrink-0 w-56 md:w-64 lg:w-72 aspect-[3/2] bg-black overflow-hidden ring-1 ring-accent/20 hover:ring-accent/70 transition-[box-shadow] duration-500 snap-start"
            >
              <img
                src={p.url}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-[900ms] ease-out"
              />
              {/* hairline reveal on hover */}
              <span
                aria-hidden
                className="absolute left-0 right-0 bottom-0 h-px bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]"
              />
            </button>
          ))}
        </div>
      </RevealAnimation>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Brass progress ticker */}
        <RevealAnimation animation="fade-up" delay={180}>
          <div className="mt-6 md:mt-8 h-px w-full bg-accent/15 overflow-hidden">
            <div
              className="h-full bg-accent/70 origin-left transition-transform duration-150 ease-out"
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>
        </RevealAnimation>

        <RevealAnimation animation="fade-up" delay={240}>
          <p className="mt-5 text-center font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary-foreground/55">
            Tap any frame to enlarge · Scroll to explore
          </p>
        </RevealAnimation>
      </div>

      {openIndex !== null && (
        <PhotoLightbox
          photos={PHOTOS}
          initialIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </section>
  );
};

/* ------------------------------------------------------------------ */

interface PhotoLightboxProps {
  photos: { url: string }[];
  initialIndex: number;
  onClose: () => void;
}

const PhotoLightbox = ({ photos, initialIndex, onClose }: PhotoLightboxProps) => {
  const [current, setCurrent] = useState(initialIndex);
  const total = photos.length;

  const go = (delta: number) =>
    setCurrent((i) => (i + delta + total) % total);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  // swipe support
  let touchStartX = 0;
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo gallery"
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm animate-fade-in flex flex-col"
      onClick={onClose}
    >
      <div className="absolute inset-0 silk-grain opacity-[0.03] pointer-events-none" />

      {/* Top bar */}
      <div
        className="relative z-20 flex items-center justify-between px-5 md:px-8 pt-5 md:pt-6 text-primary-foreground/85"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="font-sans uppercase text-[10px] md:text-xs tracking-[0.35em]">
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="min-h-[44px] min-w-[44px] flex items-center justify-center border border-primary-foreground/30 bg-black/40 hover:border-accent hover:text-accent transition-colors"
        >
          <X className="h-5 w-5" strokeWidth={1.25} />
        </button>
      </div>

      {/* Stage */}
      <div
        className="relative flex-1 flex items-center justify-center px-3 md:px-16 pb-[160px] md:pb-[180px]"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous photo"
          className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center border border-primary-foreground/30 bg-black/40 text-primary-foreground hover:border-accent hover:text-accent transition-colors"
        >
          <ChevronLeft className="h-6 w-6" strokeWidth={1.25} />
        </button>

        <img
          key={current}
          src={photos[current].url}
          alt={`Photo ${current + 1} of ${total}`}
          className="max-h-full max-w-full object-contain border border-accent/30 shadow-2xl animate-fade-in"
        />

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next photo"
          className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center border border-primary-foreground/30 bg-black/40 text-primary-foreground hover:border-accent hover:text-accent transition-colors"
        >
          <ChevronRight className="h-6 w-6" strokeWidth={1.25} />
        </button>
      </div>

      {/* Thumbnail rail */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 px-3 md:px-6 lg:px-10 pb-4 md:pb-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 mb-3 text-primary-foreground/70">
          <span className="h-px w-6 bg-accent" />
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase">
            The Residence · Gallery
          </span>
        </div>
        <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2">
          {photos.map((p, i) => {
            const active = i === current;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Show photo ${i + 1}`}
                aria-current={active}
                className={`group relative flex-shrink-0 w-24 md:w-32 aspect-[3/2] bg-black overflow-hidden border transition-all duration-300 ${
                  active
                    ? "border-accent shadow-[0_0_0_1px_hsl(var(--accent))]"
                    : "border-primary-foreground/20 hover:border-accent/70 opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={p.url}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>,
    document.body
  );
};