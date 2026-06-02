import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import heroPoster from "@/assets/hero-home.jpg";

interface VideoHeroProps {
  youtubeId?: string;
  mp4Src?: string;
  posterSrc?: string;
}

export const VideoHero = ({
  youtubeId = "0LDSwhryy7w",
  mp4Src,
  posterSrc = heroPoster,
}: VideoHeroProps) => {
  const [mounted, setMounted] = useState(false);
  const [muted, setMuted] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    if (mp4Src && videoRef.current) {
      videoRef.current.muted = next;
      if (!next) videoRef.current.play().catch(() => {});
      return;
    }
    const iframe = iframeRef.current;
    if (!iframe?.contentWindow) return;
    const command = next ? "mute" : "unMute";
    iframe.contentWindow.postMessage(
      JSON.stringify({ event: "command", func: command, args: [] }),
      "*"
    );
  };

  const ytSrc = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1&fs=0&enablejsapi=1`;

  return (
    <section
      aria-label="Cinematic introduction to Beau Monde Builders"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Poster fallback (always rendered behind, visible until video fades in or for reduced motion) */}
      <img
        src={posterSrc}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Video layer */}
      {!reducedMotion && (
        <div
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          {mp4Src ? (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              poster={posterSrc}
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={mp4Src} type="video/mp4" />
            </video>
          ) : (
            <div className="absolute inset-0 pointer-events-none">
              {/* 16:9 cover technique: oversize iframe so it always fills viewport */}
              <iframe
                ref={iframeRef}
                src={ytSrc}
                title="Beau Monde Builders cinematic"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[max(100vw,177.78vh)] h-[max(56.25vw,100vh)] border-0"
              />
            </div>
          )}
        </div>
      )}

      {/* Vignette + bottom gradient for legibility */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />

      {/* Bottom-left brand mark */}
      <div className="absolute bottom-8 left-4 sm:left-8 lg:left-16 z-10 flex items-center space-x-3 text-white">
        <div className="h-px w-8 md:w-12 bg-accent" />
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-light text-white/80">
          Palm Beach, Florida
        </span>
      </div>

      {/* Bottom-center scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center text-white/70 animate-float">
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] mb-2">Scroll</span>
        <div className="w-px h-10 md:h-14 bg-gradient-to-b from-white/70 to-transparent" />
      </div>

      {/* Bottom-right unmute pill */}
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
    </section>
  );
};
