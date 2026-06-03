import { useEffect, useRef, useState } from "react";
import { Maximize2, Volume2 } from "lucide-react";
import { RevealAnimation } from "@/components/RevealAnimation";
import { Parallax } from "@/components/Parallax";
import { VideoLightbox } from "@/components/VideoLightbox";
import { useAudioPreference } from "@/hooks/useAudioPreference";

interface WalkthroughShowcaseProps {
  iframeSrc?: string;
}

export const WalkthroughShowcase = ({
  iframeSrc = "https://media.reelreef.com/videos/019caebd-3875-71e0-b3da-bde3d856926a",
}: WalkthroughShowcaseProps) => {
  const [open, setOpen] = useState(false);
  const [inView, setInView] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const audioOn = useAudioPreference();

  // Mount the autoplaying iframe only while it's near the viewport, so the
  // (muted) playback pauses cleanly once the user scrolls past.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => setInView(e.isIntersecting)),
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Autoplay loop iframe src. If the user has unmuted the hero, this player
  // inherits sound when it enters the viewport; otherwise plays muted.
  let inlineSrc = iframeSrc;
  try {
    const url = new URL(iframeSrc);
    url.searchParams.set("autoplay", "1");
    url.searchParams.set("muted", audioOn ? "0" : "1");
    url.searchParams.set("loop", "1");
    url.searchParams.set("controls", "0");
    inlineSrc = url.toString();
  } catch {
    /* ignore */
  }

  return (
    <section
      aria-label="Newly completed project walkthrough with AJ Hoover"
      className="relative bg-primary text-primary-foreground py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <RevealAnimation animation="luxury-reveal">
          <div className="flex items-center justify-center gap-4 mb-3 md:mb-4">
            <div className="h-px w-10 md:w-14 bg-accent/40" />
            <span className="font-serif italic font-light text-accent text-lg md:text-xl tracking-[0.15em]">
              A Walkthrough With
            </span>
            <div className="h-px w-10 md:w-14 bg-accent/40" />
          </div>
          <h2 className="text-center mb-5 md:mb-7 leading-[0.95]">
            <span className="block font-display text-primary-foreground text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight">
              AJ Hoover
            </span>
            <span className="mt-3 md:mt-4 flex items-center justify-center gap-3 md:gap-4">
              <span className="h-px w-6 md:w-10 bg-accent/40" />
              <span className="font-sans uppercase text-accent text-[10px] sm:text-xs md:text-sm tracking-[0.45em] font-light">
                Chief Executive Officer
              </span>
              <span className="h-px w-6 md:w-10 bg-accent/40" />
            </span>
          </h2>
        </RevealAnimation>

        <RevealAnimation animation="fade-up" delay={180}>
          <p className="text-center text-base md:text-lg lg:text-xl font-serif italic font-light text-primary-foreground/75 max-w-3xl mx-auto mb-10 md:mb-14">
            Newly completed project walkthrough. CEO, Beau Monde Builders.
          </p>
        </RevealAnimation>

        <RevealAnimation animation="luxury-reveal" delay={300}>
          <Parallax speed={0.06}>
            <div
              ref={wrapRef}
              className="relative w-full aspect-video bg-black overflow-hidden md:border md:border-accent/30 shadow-2xl"
            >
              {inView && (
                <iframe
                  key={audioOn ? "on" : "off"}
                  src={inlineSrc}
                  title="Walkthrough with AJ Hoover, autoplay preview"
                  allow="autoplay; picture-in-picture"
                  className="absolute inset-0 h-full w-full pointer-events-none"
                  style={{ border: 0 }}
                  tabIndex={-1}
                />
              )}

              {/* Click-through overlay opens the lightbox with sound */}
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open walkthrough video with sound and full controls"
                className="group absolute inset-0 flex items-end justify-between p-4 md:p-6 text-primary-foreground bg-gradient-to-t from-black/45 via-transparent to-transparent hover:from-black/55 transition-colors"
              >
                <span className="flex items-center gap-2 font-sans uppercase text-[10px] md:text-xs tracking-[0.3em] font-light border border-primary-foreground/30 bg-black/30 backdrop-blur-md px-3 py-2 group-hover:border-accent group-hover:text-accent transition-colors">
                  <Volume2 className="h-3.5 w-3.5" strokeWidth={1.25} />
                  {audioOn ? "Tap to expand" : "Tap to watch with sound"}
                </span>
                <span className="hidden md:flex items-center gap-2 font-sans uppercase text-[10px] tracking-[0.3em] font-light border border-primary-foreground/30 bg-black/30 backdrop-blur-md px-3 py-2 group-hover:border-accent group-hover:text-accent transition-colors">
                  <Maximize2 className="h-3.5 w-3.5" strokeWidth={1.25} />
                  Expand
                </span>
              </button>
            </div>
          </Parallax>
        </RevealAnimation>

        <RevealAnimation animation="fade-up" delay={400}>
          <div className="mt-8 md:mt-10 flex items-center justify-center space-x-3 text-primary-foreground/70">
            <div className="h-px w-8 md:w-12 bg-accent" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-light">
              An Award-Winning Beau Monde Residence
            </span>
            <div className="h-px w-8 md:w-12 bg-accent" />
          </div>
        </RevealAnimation>
      </div>
      <VideoLightbox
        items={[
          {
            src: iframeSrc,
            title: "Walkthrough with AJ Hoover",
            caption: "Walkthrough with AJ Hoover",
            subtitle:
              "Chief Executive Officer · Newly Completed Project Walkthrough · Beau Monde Builders",
            kind: "iframe",
          },
        ]}
        open={open}
        onClose={() => setOpen(false)}
      />
    </section>
  );
};