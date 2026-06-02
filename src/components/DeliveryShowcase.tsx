import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { RevealAnimation } from "@/components/RevealAnimation";
import videoAsset from "@/assets/new-delivery.mp4.asset.json";
import posterAsset from "@/assets/new-delivery-poster.jpg.asset.json";

interface DeliveryShowcaseProps {
  videoSrc?: string;
  posterSrc?: string;
  eyebrow?: string;
  heading?: string;
  subhead?: string;
}

export const DeliveryShowcase = ({
  videoSrc = videoAsset.url,
  posterSrc = posterAsset.url,
  eyebrow = "New Beau Monde Delivery",
  heading = "Another Custom Luxury Home",
  subhead = "Delivered by the Beau Monde Builders team.",
}: DeliveryShowcaseProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  // Play only when visible to save bandwidth and avoid competing with the main hero
  useEffect(() => {
    if (reducedMotion) return;
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    setMuted(next);
    if (!next) video.play().catch(() => {});
  };

  return (
    <section
      aria-label="New Beau Monde Builders delivery"
      className="relative bg-primary text-primary-foreground py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <RevealAnimation animation="luxury-reveal">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-thin text-white text-center leading-[1.0] tracking-tight mb-5 md:mb-7">
            New <span className="italic font-light text-accent">Beau Monde</span> Delivery
          </h2>
        </RevealAnimation>

        <RevealAnimation animation="fade-up" delay={180}>
          <p className="text-center text-base md:text-lg lg:text-xl font-serif italic font-light text-white/75 max-w-3xl mx-auto mb-10 md:mb-14">
            Another custom luxury home, delivered by the Beau Monde Builders team.
          </p>
        </RevealAnimation>

        <RevealAnimation animation="luxury-reveal" delay={300}>
          <div className="relative w-full aspect-video bg-black overflow-hidden md:border md:border-accent/30 shadow-2xl">
            {!reducedMotion ? (
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                preload="metadata"
                poster={posterSrc}
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            ) : (
              <img
                src={posterSrc}
                alt="Newly delivered Beau Monde Builders custom luxury home"
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}

            {/* Subtle vignette for legibility of the pill */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/60 to-transparent" />

            {!reducedMotion && (
              <button
                type="button"
                onClick={toggleMute}
                aria-label={muted ? "Unmute video" : "Mute video"}
                className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-10 min-h-[44px] group flex items-center gap-2 border border-white/30 bg-black/40 backdrop-blur-md px-4 py-2.5 text-white text-[10px] md:text-xs uppercase tracking-[0.25em] font-light hover:border-accent hover:bg-black/60 transition-colors"
              >
                {muted ? (
                  <VolumeX className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent" />
                ) : (
                  <Volume2 className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent" />
                )}
                <span>{muted ? "Unmute" : "Mute"}</span>
              </button>
            )}
          </div>
        </RevealAnimation>

        <RevealAnimation animation="fade-up" delay={400}>
          <div className="mt-8 md:mt-10 flex items-center justify-center space-x-3 text-white/70">
            <div className="h-px w-8 md:w-12 bg-accent" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-light">
              Palm Beach, Florida
            </span>
            <div className="h-px w-8 md:w-12 bg-accent" />
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};
