import { useEffect, useRef, useState } from "react";
import { Maximize2, Volume2 } from "lucide-react";
import { VideoLightbox } from "@/components/VideoLightbox";
import { useAudioPreference } from "@/hooks/useAudioPreference";

interface VideoHeroProps {
  iframeSrc?: string;
}

// Space Coast hero — AJ Hoover walkthrough of a newly completed Beau Monde residence.
// The walkthrough is served as an embeddable iframe (ReelReef); the hero autoplays
// muted until the user opens the lightbox for sound + full controls.
const DEFAULT_SRC =
  "https://media.reelreef.com/videos/019caebd-3875-71e0-b3da-bde3d856926a";

export const VideoHero = ({ iframeSrc = DEFAULT_SRC }: VideoHeroProps) => {
  const [open, setOpen] = useState(false);
  const audioOn = useAudioPreference();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [ctaHinting, setCtaHinting] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  // Draw the eye to the sound CTA for the first few seconds, then settle.
  useEffect(() => {
    if (audioOn) { setCtaHinting(false); return; }
    const t = window.setTimeout(() => setCtaHinting(false), 6000);
    return () => window.clearTimeout(t);
  }, [audioOn]);

  // Compose autoplay loop iframe src
  let inlineSrc = iframeSrc;
  try {
    const url = new URL(iframeSrc);
    url.searchParams.set("autoplay", reducedMotion ? "0" : "1");
    url.searchParams.set("muted", audioOn ? "0" : "1");
    url.searchParams.set("loop", "1");
    url.searchParams.set("controls", "0");
    inlineSrc = url.toString();
  } catch {
    /* ignore */
  }

  return (
    <section
      aria-label="Cinematic walkthrough of a newly completed Beau Monde residence on Florida's Space Coast"
      className="relative h-[100svh] w-full overflow-hidden bg-black"
    >
      <div ref={wrapRef} className="absolute inset-0">
        {!reducedMotion && (
          <iframe
            key={audioOn ? "on" : "off"}
            src={inlineSrc}
            title="Walkthrough with AJ Hoover, autoplay preview"
            allow="autoplay; picture-in-picture"
            className="absolute inset-0 h-full w-full pointer-events-none scale-[1.15]"
            style={{ border: 0 }}
            tabIndex={-1}
          />
        )}
      </div>

      {/* Vignette + edge gradients for legibility */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />

      {/* Bottom-left brand mark */}
      <div className="absolute bottom-8 left-4 sm:left-8 lg:left-16 z-10 flex items-center space-x-3 text-white">
        <div className="h-px w-8 md:w-12 bg-accent" />
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-light text-white/80">
          Space Coast, Florida
        </span>
      </div>

      {/* Bottom-center scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center text-white/70 animate-float">
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] mb-2">Scroll</span>
        <div className="w-px h-10 md:h-14 bg-gradient-to-b from-white/70 to-transparent" />
      </div>

      {/* Click-through to open lightbox with sound */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Watch the walkthrough with sound and full controls"
        className="absolute bottom-8 right-4 sm:right-8 lg:right-16 z-10 group flex items-center gap-2 border border-white/30 bg-black/30 backdrop-blur-md px-4 py-2.5 text-white text-[10px] md:text-xs uppercase tracking-[0.25em] font-light hover:border-accent hover:bg-black/50 transition-colors"
      >
        {audioOn ? (
          <Maximize2 className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent" strokeWidth={1.25} />
        ) : (
          <Volume2 className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent" strokeWidth={1.25} />
        )}
        <span>{audioOn ? "Expand" : "Watch with sound"}</span>
      </button>

      <VideoLightbox
        items={[
          {
            src: iframeSrc,
            title: "Walkthrough with AJ Hoover",
            caption: "Walkthrough with AJ Hoover",
            subtitle:
              "Chief Executive Officer · Newly Completed Residence · Beau Monde Builders, Space Coast",
            kind: "iframe",
          },
        ]}
        open={open}
        onClose={() => setOpen(false)}
      />
    </section>
  );
};
