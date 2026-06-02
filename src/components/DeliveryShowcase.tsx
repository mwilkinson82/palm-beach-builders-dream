import { useState } from "react";
import { Play } from "lucide-react";
import { RevealAnimation } from "@/components/RevealAnimation";
import { VideoLightbox, LightboxVideo } from "@/components/VideoLightbox";
import videoAsset from "@/assets/new-delivery.mp4.asset.json";
import posterAsset from "@/assets/new-delivery-poster.jpg.asset.json";

const CLOUDFLARE_IFRAME =
  "https://customer-t8esmyyidbkq6bm8.cloudflarestream.com/eaa200cf9f64ad5d8866238bf13af54b/iframe";
const CLOUDFLARE_POSTER =
  "https://customer-t8esmyyidbkq6bm8.cloudflarestream.com/eaa200cf9f64ad5d8866238bf13af54b/thumbnails/thumbnail.jpg?time=15s&height=600";

interface DeliveryShowcaseProps {
  videoSrc?: string;
  posterSrc?: string;
  /** Cloudflare Stream iframe (or any 16:9 embed) shown alongside the MP4. */
  secondaryIframeSrc?: string;
  secondaryPoster?: string;
}

export const DeliveryShowcase = ({
  videoSrc = videoAsset.url,
  posterSrc = posterAsset.url,
  secondaryIframeSrc = CLOUDFLARE_IFRAME,
  secondaryPoster = CLOUDFLARE_POSTER,
}: DeliveryShowcaseProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const playlist: LightboxVideo[] = [
    {
      src: videoSrc,
      poster: posterSrc,
      title: "Recent Delivery · No. 01",
      caption: "Recent Delivery · No. 01",
      kind: "mp4",
    },
    {
      src: secondaryIframeSrc,
      poster: secondaryPoster,
      title: "Recent Delivery · No. 02",
      caption: "Recent Delivery · No. 02",
      kind: "iframe",
    },
  ];

  const tiles: Array<{ label: string; poster: string; alt: string }> = [
    {
      label: "Recent Delivery · No. 01",
      poster: posterSrc,
      alt: "Newly delivered Beau Monde Builders custom luxury home — preview one",
    },
    {
      label: "Recent Delivery · No. 02",
      poster: secondaryPoster,
      alt: "Newly delivered Beau Monde Builders custom luxury home — preview two",
    },
  ];

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
            Two more custom luxury homes, recently delivered. Tap either to watch both back-to-back.
          </p>
        </RevealAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {tiles.map((tile, i) => (
            <RevealAnimation key={i} animation="luxury-reveal" delay={200 + i * 120}>
              <figure className="space-y-3">
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  aria-label={`Play ${tile.label}`}
                  className="group relative block w-full aspect-video bg-black overflow-hidden md:border md:border-accent/30 shadow-2xl"
                >
                  <img
                    src={tile.poster}
                    alt={tile.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/20 transition-opacity duration-500 group-hover:from-black/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full border border-accent bg-black/35 backdrop-blur-md text-accent transition-transform duration-500 group-hover:scale-110">
                      <Play className="h-6 w-6 md:h-7 md:w-7 ml-0.5 fill-accent" strokeWidth={1.25} />
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 text-primary-foreground/90">
                    <span className="h-px w-6 bg-accent" />
                    <span className="font-sans uppercase text-[10px] tracking-[0.3em] font-light">
                      Tap to Play · Watch Both
                    </span>
                    <span className="h-px w-6 bg-accent" />
                  </div>
                </button>
                <figcaption className="flex items-center gap-3 text-primary-foreground/70">
                  <span className="h-px w-6 bg-accent" />
                  <span className="font-sans uppercase text-[10px] tracking-[0.3em] font-light">
                    {tile.label}
                  </span>
                </figcaption>
              </figure>
            </RevealAnimation>
          ))}
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
        items={playlist}
        initialIndex={openIndex ?? 0}
        open={openIndex !== null}
        onClose={() => setOpenIndex(null)}
      />
    </section>
  );
};
