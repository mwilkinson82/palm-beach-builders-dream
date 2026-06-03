import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, Play, Maximize2 } from "lucide-react";

export interface LightboxVideo {
  /** Source URL — iframe embed URL or direct .mp4 */
  src: string;
  /** Accessible title / overlay label */
  title: string;
  /** Short caption shown under thumbnail (e.g. "Recent Delivery · No. 02") */
  caption?: string;
  /** Optional editorial subtitle rendered under the player (single-video layouts) */
  subtitle?: string;
  /** Thumbnail image for the playlist rail */
  poster?: string;
  /** How to render */
  kind: "iframe" | "mp4";
}

interface VideoLightboxProps {
  /** Playlist of one or more videos. Renders queue when 2+. */
  items: LightboxVideo[];
  initialIndex?: number;
  open: boolean;
  onClose: () => void;
}

/**
 * Cinematic full-viewport video lightbox with optional playlist queue.
 * Portaled to body so it escapes any parent transform/overflow.
 * ESC + backdrop click close. Body scroll locked while open.
 */
export const VideoLightbox = ({
  items,
  initialIndex = 0,
  open,
  onClose,
}: VideoLightboxProps) => {
  const [current, setCurrent] = useState(initialIndex);
  const playerRef = useRef<HTMLDivElement | null>(null);
  const videoElRef = useRef<HTMLVideoElement | null>(null);

  // Reset to chosen item every time the lightbox opens
  useEffect(() => {
    if (open) setCurrent(initialIndex);
  }, [open, initialIndex]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined" || items.length === 0) return null;

  const item = items[current] ?? items[0];

  // Request fullscreen synchronously from the user tap. iOS Safari doesn't
  // support iframe fullscreen, but supports element fullscreen (16.4+) and
  // webkitEnterFullscreen on <video>. We try each in order.
  const handleFullscreen = () => {
    const v = videoElRef.current as any;
    if (v && typeof v.webkitEnterFullscreen === "function") {
      try { v.webkitEnterFullscreen(); return; } catch { /* fallthrough */ }
    }
    const el = playerRef.current as any;
    if (!el) return;
    const req =
      el.requestFullscreen ||
      el.webkitRequestFullscreen ||
      el.webkitEnterFullscreen ||
      el.msRequestFullscreen;
    if (typeof req === "function") {
      try { req.call(el); } catch { /* ignore */ }
    }
  };

  // Append autoplay flags for iframe embeds. Works for ReelReef and Cloudflare Stream.
  let finalSrc = item.src;
  if (item.kind === "iframe") {
    try {
      const url = new URL(item.src, window.location.href);
      url.searchParams.set("autoplay", "1");
      finalSrc = url.toString();
    } catch {
      /* ignore */
    }
  }

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 silk-grain opacity-[0.03] pointer-events-none" />

      <button
        type="button"
        onClick={onClose}
        aria-label="Close video"
        className="absolute top-5 right-5 md:top-8 md:right-8 z-20 min-h-[44px] min-w-[44px] flex items-center justify-center border border-primary-foreground/30 bg-black/40 text-primary-foreground hover:border-accent hover:text-accent transition-colors"
      >
        <X className="h-5 w-5" strokeWidth={1.25} />
      </button>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); handleFullscreen(); }}
        aria-label="Enter fullscreen"
        className="absolute top-5 right-20 md:top-8 md:right-24 z-20 min-h-[44px] min-w-[44px] flex items-center justify-center border border-primary-foreground/30 bg-black/40 text-primary-foreground hover:border-accent hover:text-accent transition-colors"
      >
        <Maximize2 className="h-5 w-5" strokeWidth={1.25} />
      </button>

      <div
        className={`relative w-full h-full flex flex-col items-center justify-center px-3 md:px-6 lg:px-10 pt-16 md:pt-14 gap-3 md:gap-4 ${
          items.length > 1 ? "pb-[180px] md:pb-[200px]" : "pb-6"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Now playing label */}
        <div className="flex items-center gap-3 text-primary-foreground/80 shrink-0 max-w-[calc(100%-7rem)] text-center">
          <span className="h-px w-6 bg-accent" />
          <span className="font-sans text-[10px] md:text-xs tracking-[0.35em] uppercase">
            Now Playing · {item.title}
          </span>
          <span className="h-px w-6 bg-accent" />
        </div>

        {/* Player — fills available viewport while preserving 16:9 */}
        <div
          key={current}
          ref={playerRef}
          className="relative aspect-video bg-black border border-accent/40 shadow-2xl animate-scale-in"
          style={{
            // Explicit width derived from viewport so the 16:9 box always
            // fits both width and remaining height (label + optional rail).
            width:
              items.length > 1
                ? "min(96vw, calc((100vh - 280px) * 16 / 9))"
                : "min(96vw, calc((100vh - 140px) * 16 / 9))",
          }}
        >
          {item.kind === "iframe" ? (
            <iframe
              src={finalSrc}
              title={item.title}
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media; web-share"
              allowFullScreen
              // @ts-expect-error legacy vendor attributes for iOS/older Safari
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              className="absolute inset-0 h-full w-full"
              style={{ border: 0 }}
            />
          ) : (
            <video
              ref={videoElRef}
              src={item.src}
              poster={item.poster}
              autoPlay
              controls
              playsInline
              className="absolute inset-0 h-full w-full object-contain bg-black"
            />
          )}
        </div>

        {/* Editorial caption under the player (single-video layouts only) */}
        {items.length === 1 && item.subtitle && (
          <div className="w-full max-w-2xl text-center shrink-0 flex flex-col items-center gap-2 md:gap-3 px-2">
            <span className="h-px w-10 bg-accent/60" />
            <p className="font-sans uppercase text-[10px] md:text-xs tracking-[0.35em] text-accent/90">
              {item.title}
            </p>
            <p className="font-display italic text-primary-foreground/85 text-base md:text-lg leading-snug">
              {item.subtitle}
            </p>
          </div>
        )}

        {/* Playlist queue */}
        {items.length > 1 && (
          <div className="w-full max-w-[1400px] shrink-0 absolute bottom-4 md:bottom-6 left-0 right-0 px-3 md:px-6 lg:px-10 mx-auto">
            <div className="flex items-center gap-3 mb-3 text-primary-foreground/70">
              <span className="h-px w-6 bg-accent" />
              <span className="font-sans text-[10px] tracking-[0.35em] uppercase">
                Up Next · Watch Both
              </span>
            </div>
            <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2">
              {items.map((it, i) => {
                const active = i === current;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrent(i)}
                    aria-label={`Play ${it.title}`}
                    aria-current={active}
                    className={`group relative flex-shrink-0 w-44 md:w-56 aspect-video bg-black overflow-hidden border transition-all duration-300 ${
                      active
                        ? "border-accent shadow-[0_0_0_1px_hsl(var(--accent))]"
                        : "border-primary-foreground/20 hover:border-accent/70 opacity-80 hover:opacity-100"
                    }`}
                  >
                    {it.poster ? (
                      <img
                        src={it.poster}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-primary/60" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    {!active && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="flex items-center justify-center h-10 w-10 rounded-full border border-accent bg-black/40 text-accent">
                          <Play className="h-4 w-4 ml-0.5 fill-accent" strokeWidth={1.25} />
                        </span>
                      </span>
                    )}
                    <div className="absolute bottom-2 left-2 right-2 text-left">
                      <p className="font-sans uppercase text-[9px] tracking-[0.25em] text-accent mb-0.5">
                        {active ? "Now Playing" : `Video ${String(i + 1).padStart(2, "0")}`}
                      </p>
                      <p className="font-display italic text-sm leading-tight text-primary-foreground truncate">
                        {it.caption ?? it.title}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};