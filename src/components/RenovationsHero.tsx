import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import videoAsset from "@/assets/renovations-hero.mp4.asset.json";
import posterAsset from "@/assets/renovations-hero-poster.jpg.asset.json";

const ctaClass =
  "group relative inline-flex items-center justify-center bg-primary text-primary-foreground px-12 md:px-16 py-5 text-[10px] md:text-[11px] font-sans font-light tracking-[0.3em] uppercase ring-1 ring-inset ring-accent/30 hover:ring-accent/60 transition-all duration-500 hover:-translate-y-px hover:shadow-[0_18px_40px_-20px_hsl(var(--primary)/0.55)]";

export const RenovationsHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const v = videoRef.current;
    if (!v) return;
    const onPlaying = () => setReady(true);
    v.addEventListener("playing", onPlaying);
    v.play().catch(() => {});
    return () => v.removeEventListener("playing", onPlaying);
  }, [reducedMotion]);

  return (
    <section
      aria-label="Renovations hero"
      className="relative h-[80svh] min-h-[600px] w-full overflow-hidden bg-primary"
    >
      <img
        src={posterAsset.url}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {!reducedMotion && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterAsset.url}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-out ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={videoAsset.url} type="video/mp4" />
        </video>
      )}

      {/* Overlays for legibility */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,hsl(var(--primary)/0.55)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/85 via-primary/40 to-transparent" />

      {/* Copy */}
      <div className="relative z-10 h-full">
        <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-end pb-20 md:pb-28">
          <div className="max-w-3xl text-primary-foreground">
            <div className="flex items-center space-x-3 mb-8">
              <div className="h-px w-12 bg-accent" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-accent font-sans font-light">
                Renovations
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8">
              <span className="italic">Reimagine</span> your
              <br />
              Palm Beach residence.
            </h1>

            <p className="font-sans font-light text-base md:text-lg text-primary-foreground/80 leading-relaxed max-w-xl mb-10">
              Three decades of discreet, master-built craftsmanship — now applied to
              the residences you already love.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link to="/contact" className={ctaClass}>
                <span className="relative">
                  Talk to Beau Monde
                  <span className="pointer-events-none absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                </span>
              </Link>
              <Link
                to="/process"
                className="group inline-flex items-center text-[10px] md:text-xs uppercase tracking-[0.4em] font-sans font-light text-primary-foreground"
              >
                <span className="relative pb-1">
                  View Our Process
                  <span className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-accent/50 group-hover:bg-accent transition-colors duration-500" />
                </span>
                <span className="ml-3 text-accent">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom-left location mark */}
      <div className="absolute bottom-8 right-4 sm:right-8 lg:right-16 z-10 hidden md:flex items-center space-x-3 text-primary-foreground/80">
        <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-light">
          Palm Beach, Florida
        </span>
        <div className="h-px w-8 bg-accent" />
      </div>
    </section>
  );
};