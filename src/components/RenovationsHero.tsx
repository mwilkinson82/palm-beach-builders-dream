import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Play, Volume2, VolumeX } from "lucide-react";
import { audioPreference } from "@/hooks/useAudioPreference";
import videoAsset from "@/assets/renovations-hero.mp4.asset.json";
import posterAsset from "@/assets/renovations-hero-poster.jpg.asset.json";

// Detect a coarse pointer / small screen at module load so we can skip the
// 82 MB autoplay download on cellular and wait for an explicit tap instead.
const isMobileLike = () =>
  typeof window !== "undefined" &&
  (window.matchMedia("(max-width: 768px)").matches ||
    window.matchMedia("(pointer: coarse)").matches);

export const RenovationsHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [muted, setMuted] = useState(true);
  const [mobile, setMobile] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setMobile(isMobileLike());
  }, []);

  // Only autoplay (and therefore download the full mp4) on desktop. On mobile
  // we hold on the poster until the visitor taps Play — this prevents an
  // ~82 MB download from kicking off the moment the page mounts on cellular.
  useEffect(() => {
    if (reducedMotion) return;
    if (mobile && !started) return;
    const v = videoRef.current;
    if (!v) return;
    const onPlaying = () => setReady(true);
    v.addEventListener("playing", onPlaying);
    v.play().catch(() => {});
    return () => v.removeEventListener("playing", onPlaying);
  }, [reducedMotion, mobile, started]);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    setMuted(next);
    audioPreference.set(!next);
    if (!next) v.play().catch(() => {});
  };

  const handlePlay = () => {
    setStarted(true);
    // Unmute on intentional tap so the visitor actually hears the footage.
    setMuted(false);
    audioPreference.set(true);
    const v = videoRef.current;
    if (v) {
      v.muted = false;
      v.play().catch(() => {});
    }
  };

  // Desktop preloads the video for an instant LCP-style reveal. Mobile skips
  // the preload entirely so we don't burn cellular data before a tap.
  const shouldPreload = !reducedMotion && !mobile;

  return (
    <section
      aria-label="Renovations cinematic introduction"
      className="relative h-[100svh] w-full overflow-hidden bg-black"
    >
      {shouldPreload && (
        <Helmet>
          <link rel="preload" as="image" href={posterAsset.url} fetchPriority="high" />
          <link rel="preload" as="video" href={videoAsset.url} type="video/mp4" />
        </Helmet>
      )}

      <img
        src={posterAsset.url}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-contain md:object-cover"
      />

      {!reducedMotion && (!mobile || started) && (
        <video
          ref={videoRef}
          autoPlay
          muted={muted}
          loop
          playsInline
          preload={mobile ? "none" : "metadata"}
          disablePictureInPicture
          poster={posterAsset.url}
          className={`absolute inset-0 h-full w-full object-contain md:object-cover transition-opacity duration-[1200ms] ease-out ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={videoAsset.url} type="video/mp4" />
        </video>
      )}

      {/* Mobile-only tap-to-play affordance — keeps the poster up until the
          visitor opts in, avoiding an automatic 82 MB download on cellular. */}
      {!reducedMotion && mobile && !started && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label="Play renovations film"
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-accent/60"
        >
          <span className="flex items-center justify-center h-16 w-16 rounded-full border border-accent/70 bg-black/30 backdrop-blur-md">
            <Play className="h-6 w-6 text-accent" strokeWidth={1.25} />
          </span>
          <span className="mt-4 font-display italic text-base text-white/90">Tap to play</span>
        </button>
      )}

      {/* Vignette + edge gradients for nav legibility, matching the home VideoHero */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />

      {/* Bottom-left brand mark */}
      <div className="absolute bottom-3 sm:bottom-8 left-4 sm:left-8 lg:left-16 z-10 flex items-center space-x-3 text-white">
        <div className="h-px w-8 md:w-12 bg-accent" />
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-light text-white/80">
          Beau Monde Renovations
        </span>
      </div>

      {/* Bottom-center scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center text-white/70 animate-float">
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] mb-2">Scroll</span>
        <div className="w-px h-10 md:h-14 bg-gradient-to-b from-white/70 to-transparent" />
      </div>

      {/* Bottom-right unmute pill — only after the video is actually playing. */}
      {!reducedMotion && (!mobile || started) && (
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="absolute bottom-8 right-4 sm:right-8 lg:right-16 z-10 group flex items-center gap-2 border border-white/30 bg-black/30 backdrop-blur-md px-4 py-2.5 text-white text-[10px] md:text-xs uppercase tracking-[0.25em] font-light hover:border-accent hover:bg-black/50 transition-colors"
        >
          {muted ? (
            <VolumeX className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent" />
          ) : (
            <Volume2 className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent" />
          )}
          <span>{muted ? "Unmute" : "Mute"}</span>
        </button>
      )}
    </section>
  );
};
