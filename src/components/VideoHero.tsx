import { useEffect, useRef, useState } from "react";
import { Maximize2, Volume2, VolumeX } from "lucide-react";
import { VideoLightbox } from "@/components/VideoLightbox";
import { useAudioPreference, audioPreference } from "@/hooks/useAudioPreference";

interface VideoHeroProps {
  iframeSrc?: string;
}

// Space Coast hero — AJ Hoover walkthrough of a newly completed Beau Monde residence.
// Autoplays muted on landing (browser policy); a single tap anywhere on the hero
// unmutes in place and restarts the clip from 0 so the opening "Good morning" lands.
const DEFAULT_SRC =
  "https://media.reelreef.com/videos/019caebd-3875-71e0-b3da-bde3d856926a";
const HERO_VIDEO_SRC =
  "https://stream.mux.com/RobUQ1iPAyHL00WrjLg7XgIPxrqkE9ID9/high.mp4";
const HERO_POSTER_SRC =
  "https://image.mux.com/RobUQ1iPAyHL00WrjLg7XgIPxrqkE9ID9/thumbnail.png?width=1920&height=1080&smart_crop=true&time=1";

export const VideoHero = ({ iframeSrc = DEFAULT_SRC }: VideoHeroProps) => {
  const [open, setOpen] = useState(false);
  const audioOn = useAudioPreference();
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [promptHinting, setPromptHinting] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  // Center prompt fades after a beat so it doesn't compete with the footage.
  useEffect(() => {
    if (audioOn) { setPromptHinting(false); return; }
    const t = window.setTimeout(() => setPromptHinting(false), 6000);
    return () => window.clearTimeout(t);
  }, [audioOn]);

  // Native video avoids ReelReef's embedded play overlay and gives true muted autoplay.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;

    video.muted = !audioOn;
    if (audioOn) video.currentTime = 0;

    const playAttempt = video.play();
    if (playAttempt) playAttempt.catch(() => undefined);
  }, [audioOn, reducedMotion]);

  const toggleAudio = () => audioPreference.set(!audioOn);

  return (
    <section
      aria-label="Cinematic walkthrough of a newly completed Beau Monde residence on Florida's Space Coast"
      className="relative h-[100svh] w-full overflow-hidden bg-black"
    >
      <div ref={wrapRef} className="absolute inset-0">
        {!reducedMotion && (
          <video
            ref={videoRef}
            src={HERO_VIDEO_SRC}
            poster={HERO_POSTER_SRC}
            title="Walkthrough with AJ Hoover, autoplay preview"
            autoPlay
            muted={!audioOn}
            loop
            playsInline
            preload="auto"
            controls={false}
            className="absolute inset-0 h-full w-full pointer-events-none object-cover"
            style={{ border: 0 }}
          />
        )}
      </div>

      {/* Vignette + edge gradients for legibility */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />

      {/* Full-area tap target: single tap unmutes (or re-mutes) the hero in place. */}
      <button
        type="button"
        onClick={toggleAudio}
        aria-label={audioOn ? "Mute the walkthrough" : "Tap anywhere for sound"}
        className="absolute inset-0 z-[5] cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-accent/60"
      />

      {/* Centered first-touch prompt — fades after the visitor has had a beat. */}
      {!audioOn && promptHinting && !reducedMotion && (
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center text-white animate-fade-in">
          <span
            className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full border border-accent/70 bg-black/30 backdrop-blur-md animate-pulse"
          >
            <Volume2 className="h-6 w-6 md:h-7 md:w-7 text-accent" strokeWidth={1.25} />
          </span>
          <span className="mt-4 font-display italic text-base md:text-lg text-white/90">
            Tap for sound
          </span>
          <span className="mt-1 font-sans uppercase text-[9px] md:text-[10px] tracking-[0.35em] text-white/60">
            Hear AJ's welcome
          </span>
        </div>
      )}

      {/* Bottom-left brand mark */}
      <div className="pointer-events-none absolute bottom-8 left-4 sm:left-8 lg:left-16 z-10 flex items-center space-x-3 text-white">
        <div className="h-px w-8 md:w-12 bg-accent" />
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-light text-white/80">
          Space Coast, Florida
        </span>
      </div>

      {/* Bottom-center scroll indicator */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center text-white/70 animate-float">
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] mb-2">Scroll</span>
        <div className="w-px h-10 md:h-14 bg-gradient-to-b from-white/70 to-transparent" />
      </div>

      {/* Bottom-right utility controls: persistent mute toggle + expand to lightbox. */}
      <div className="absolute bottom-8 right-4 sm:right-8 lg:right-16 z-10 flex items-center gap-2">
        <button
          type="button"
          onClick={toggleAudio}
          aria-label={audioOn ? "Mute" : "Unmute"}
          className="flex items-center justify-center h-10 w-10 border border-white/30 bg-black/30 backdrop-blur-md text-white hover:border-accent hover:bg-black/50 transition-colors"
        >
          {audioOn ? (
            <Volume2 className="h-4 w-4 text-accent" strokeWidth={1.25} />
          ) : (
            <VolumeX className="h-4 w-4 text-white/80" strokeWidth={1.25} />
          )}
        </button>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Expand walkthrough to fullscreen"
          className="group flex items-center gap-2 border border-white/30 bg-black/30 backdrop-blur-md px-4 py-2.5 text-white text-[10px] md:text-xs uppercase tracking-[0.25em] font-light hover:border-accent hover:bg-black/50 transition-colors"
        >
          <Maximize2 className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent" strokeWidth={1.25} />
          <span>Expand</span>
        </button>
      </div>

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
