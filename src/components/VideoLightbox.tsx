import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface VideoLightboxProps {
  /** iframe src (we'll append autoplay query params on open) */
  src: string;
  title?: string;
  open: boolean;
  onClose: () => void;
}

/**
 * Cinematic full-viewport video lightbox. Portaled to body to escape any
 * parent transform/overflow. ESC + backdrop click close. Body scroll locked
 * while open.
 */
export const VideoLightbox = ({
  src,
  title = "Video player",
  open,
  onClose,
}: VideoLightboxProps) => {
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

  if (!open || typeof document === "undefined") return null;

  // Append autoplay flags. Works for both ReelReef and Cloudflare Stream embeds.
  const url = new URL(src, window.location.href);
  url.searchParams.set("autoplay", "1");
  const finalSrc = url.toString();

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/95 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 silk-grain opacity-[0.04] pointer-events-none" />

      <button
        type="button"
        onClick={onClose}
        aria-label="Close video"
        className="absolute top-5 right-5 md:top-8 md:right-8 z-10 min-h-[44px] min-w-[44px] flex items-center justify-center border border-primary-foreground/30 bg-black/30 text-primary-foreground hover:border-accent hover:text-accent transition-colors"
      >
        <X className="h-5 w-5" strokeWidth={1.25} />
      </button>

      <div
        className="relative w-[92vw] max-w-[1400px] aspect-video bg-black border border-accent/40 shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={finalSrc}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
          style={{ border: 0 }}
        />
      </div>
    </div>,
    document.body
  );
};