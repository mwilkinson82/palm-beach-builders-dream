import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
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

const PHOTOS: { url: string }[] = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c11];

/**
 * Editorial filmstrip of walkthrough stills.
 * Horizontal scroller of uniform tiles; tap opens a full-screen
 * lightbox with arrow nav, swipe, and a pinned thumbnail rail.
 */
export const WalkthroughGallery = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      aria-label="Walkthrough photo gallery"
      className="relative bg-primary text-primary-foreground pb-16 md:pb-24 lg:pb-28 -mt-2 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <RevealAnimation animation="fade-up">
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
            <span className="h-px w-8 md:w-12 bg-accent/50" />
            <span className="font-sans uppercase text-[10px] md:text-xs tracking-[0.35em] text-accent">
              The Residence · In Photographs
            </span>
            <span className="h-px w-8 md:w-12 bg-accent/50" />
          </div>
        </RevealAnimation>

        <RevealAnimation animation="fade-up" delay={120}>
          <div className="relative">
            {/* edge fades */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-2 w-12 bg-gradient-to-r from-primary to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-2 w-12 bg-gradient-to-l from-primary to-transparent z-10" />

            <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scroll-px-6 -mx-6 px-6 md:-mx-10 md:px-10 lg:-mx-16 lg:px-16">
              {PHOTOS.map((p, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  aria-label={`Open photo ${i + 1} of ${PHOTOS.length}`}
                  className="group relative flex-shrink-0 w-56 md:w-72 lg:w-80 aspect-[3/2] bg-black overflow-hidden border border-primary-foreground/15 hover:border-accent transition-all duration-500 snap-start"
                >
                  <img
                    src={p.url}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="font-sans uppercase text-[9px] tracking-[0.3em] text-accent">
                      {String(i + 1).padStart(2, "0")} / {String(PHOTOS.length).padStart(2, "0")}
                    </span>
                    <Expand className="h-3.5 w-3.5 text-primary-foreground" strokeWidth={1.25} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </RevealAnimation>

        <RevealAnimation animation="fade-up" delay={220}>
          <p className="mt-6 md:mt-8 text-center font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary-foreground/55">
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