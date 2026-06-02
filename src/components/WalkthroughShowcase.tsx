import { RevealAnimation } from "@/components/RevealAnimation";

interface WalkthroughShowcaseProps {
  iframeSrc?: string;
}

export const WalkthroughShowcase = ({
  iframeSrc = "https://media.reelreef.com/videos/019caebd-3875-71e0-b3da-bde3d856926a",
}: WalkthroughShowcaseProps) => {
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
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold uppercase text-white text-center leading-[0.95] tracking-tight mb-5 md:mb-7">
            AJ Hoover
          </h2>
        </RevealAnimation>

        <RevealAnimation animation="fade-up" delay={180}>
          <p className="text-center text-base md:text-lg lg:text-xl font-serif italic font-light text-white/75 max-w-3xl mx-auto mb-10 md:mb-14">
            Newly completed project walkthrough. CEO, Beau Monde Builders.
          </p>
        </RevealAnimation>

        <RevealAnimation animation="luxury-reveal" delay={300}>
          <div className="relative w-full aspect-video bg-black overflow-hidden md:border md:border-accent/30 shadow-2xl">
            <iframe
              src={iframeSrc}
              title="Newly completed project walkthrough with AJ Hoover, CEO of Beau Monde Builders"
              loading="lazy"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
              style={{ border: 0 }}
            />
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