import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play } from "lucide-react";
import { RevealAnimation } from "@/components/RevealAnimation";
import { VideoLightbox } from "@/components/VideoLightbox";
import videoAsset from "@/assets/new-delivery.mp4.asset.json";
import posterAsset from "@/assets/new-delivery-poster.jpg.asset.json";

interface DeliveryShowcaseProps {
  videoSrc?: string;
  posterSrc?: string;
  /** Cloudflare Stream iframe (or any 16:9 embed) shown alongside the MP4. */
  secondaryIframeSrc?: string;
  eyebrow?: string;
  heading?: string;
  subhead?: string;
}

export const DeliveryShowcase = ({
  videoSrc = videoAsset.url,
  posterSrc = posterAsset.url,
  secondaryIframeSrc = "https://customer-t8esmyyidbkq6bm8.cloudflarestream.com/eaa200cf9f64ad5d8866238bf13af54b/iframe?poster=https%3A%2F%2Fcustomer-t8esmyyidbkq6bm8.cloudflarestream.com%2Feaa200cf9f64ad5d8866238bf13af54b%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D15s%26height%3D600",
  eyebrow = "New Beau Monde Delivery",
  heading = "Another Custom Luxury Home",
  subhead = "Delivered by the Beau Monde Builders team.",
}: DeliveryShowcaseProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

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
          <div className="flex items-center justify-center gap-4 mb-3 md:mb-4">
            <div className="h-px w-10 md:w-14 bg-accent/40" />
            <span className="font-serif italic font-light text-accent text-lg md:text-xl tracking-[0.15em]">
              New from
            </span>
            <div className="h-px w-10 md:w-14 bg-accent/40" />
          </div>
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-wordmark text-primary-foreground text-center leading-[0.95] tracking-tight mb-5 md:mb-7">
            Beau Monde
          </h2>
        </RevealAnimation>

        <RevealAnimation animation="fade-up" delay={180}>
          <p className="text-center text-base md:text-lg lg:text-xl font-serif italic font-light text-primary-foreground/75 max-w-3xl mx-auto mb-10 md:mb-14">
            Two more custom luxury homes, recently delivered by the Beau Monde Builders team.
          </p>
        </RevealAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left — autoplaying MP4 with mute toggle */}
          <RevealAnimation animation="luxury-reveal" delay={200}>
            <figure className="space-y-3">
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
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/60 to-transparent" />
                {!reducedMotion && (
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={muted ? "Unmute video" : "Mute video"}
                    className="absolute bottom-4 right-4 z-10 min-h-[44px] group flex items-center gap-2 border border-primary-foreground/30 bg-black/40 backdrop-blur-md px-4 py-2.5 text-primary-foreground text-[10px] uppercase tracking-[0.25em] font-light hover:border-accent hover:bg-black/60 transition-colors"
                  >
                    {muted ? (
                      <VolumeX className="h-3.5 w-3.5 text-accent" />
                    ) : (
                      <Volume2 className="h-3.5 w-3.5 text-accent" />
                    )}
                    <span>{muted ? "Unmute" : "Mute"}</span>
                  </button>
                )}
              </div>
              <figcaption className="flex items-center gap-3 text-primary-foreground/70">
                <span className="h-px w-6 bg-accent" />
                <span className="font-sans uppercase text-[10px] tracking-[0.3em] font-light">
                  Recent Delivery · No. 01
                </span>
              </figcaption>
            </figure>
          </RevealAnimation>

          {/* Right — secondary embed, click-to-lightbox */}
          <RevealAnimation animation="luxury-reveal" delay={320}>
            <figure className="space-y-3">
              <button
                type="button"
                onClick={() => setLightboxSrc(secondaryIframeSrc)}
                aria-label="Play second recent delivery video"
                className="group relative block w-full aspect-video bg-black overflow-hidden md:border md:border-accent/30 shadow-2xl"
              >
                <iframe
                  src={secondaryIframeSrc}
                  title="Recent Beau Monde Builders delivery — second video"
                  loading="lazy"
                  allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full pointer-events-none"
                  style={{ border: 0 }}
                  tabIndex={-1}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 opacity-100 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full border border-accent bg-black/30 backdrop-blur-md text-accent transition-transform duration-500 group-hover:scale-110">
                    <Play className="h-6 w-6 md:h-7 md:w-7 ml-0.5 fill-accent" strokeWidth={1.25} />
                  </span>
                </div>
              </button>
              <figcaption className="flex items-center gap-3 text-primary-foreground/70">
                <span className="h-px w-6 bg-accent" />
                <span className="font-sans uppercase text-[10px] tracking-[0.3em] font-light">
                  Recent Delivery · No. 02
                </span>
              </figcaption>
            </figure>
          </RevealAnimation>
        </div>

        <RevealAnimation animation="fade-up" delay={400}>
          <div className="mt-8 md:mt-10 flex items-center justify-center space-x-3 text-primary-foreground/70">
            <div className="h-px w-8 md:w-12 bg-accent" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-light">
              Two Pristine Luxury Builds · Newly Delivered
            </span>
            <div className="h-px w-8 md:w-12 bg-accent" />
          </div>
        </RevealAnimation>
      </div>

      <VideoLightbox
        src={lightboxSrc ?? ""}
        title="Recent Beau Monde Builders delivery"
        open={!!lightboxSrc}
        onClose={() => setLightboxSrc(null)}
      />
    </section>
  );
};
