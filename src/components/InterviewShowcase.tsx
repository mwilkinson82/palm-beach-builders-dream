import { RevealAnimation } from "@/components/RevealAnimation";

interface InterviewShowcaseProps {
  iframeSrc?: string;
}

export const InterviewShowcase = ({
  iframeSrc = "https://media.reelreef.com/videos/019caebd-371f-734b-86ff-fe2acb4cb3a2",
}: InterviewShowcaseProps) => {
  return (
    <section
      aria-label="In conversation with AJ Hoover — Realtor interview at the completed residence"
      className="relative bg-primary text-primary-foreground py-16 md:py-24 lg:py-32 overflow-hidden border-t border-accent/20"
    >
      {/* Oversized parallax ligature */}
      <span
        aria-hidden
        className="parallax-ligature absolute -top-10 md:-top-20 -right-6 md:-right-16 font-display italic text-[12rem] md:text-[20rem] lg:text-[24rem] leading-none text-accent/10 pointer-events-none select-none"
        style={{ fontFeatureSettings: "'swsh' 1, 'dlig' 1" }}
      >
        C
      </span>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <RevealAnimation animation="luxury-reveal">
          <div className="flex items-center justify-center gap-4 mb-3 md:mb-4">
            <div className="h-px w-10 md:w-14 bg-accent/40" />
            <span className="font-sans uppercase text-accent text-[10px] md:text-xs tracking-[0.45em] font-light">
              In Conversation
            </span>
            <div className="h-px w-10 md:w-14 bg-accent/40" />
          </div>

          <h2 className="text-center mb-5 md:mb-7 leading-[0.95]">
            <span className="block font-display text-primary-foreground text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight">
              The Builder, <span className="italic">on the Build</span>
            </span>
          </h2>
        </RevealAnimation>

        <RevealAnimation animation="fade-up" delay={180}>
          <p className="text-center text-base md:text-lg lg:text-xl font-serif italic font-light text-primary-foreground/75 max-w-3xl mx-auto mb-10 md:mb-14">
            A candid interview with AJ Hoover, on site at the residence he just delivered.
          </p>
        </RevealAnimation>

        <RevealAnimation animation="luxury-reveal" delay={300}>
          <div className="relative w-full aspect-video bg-black overflow-hidden md:border md:border-accent/30 shadow-2xl">
            <iframe
              src={iframeSrc}
              title="Realtor interview with AJ Hoover, CEO of Beau Monde Builders, at his newly completed Palm Beach residence"
              loading="lazy"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
              style={{ border: 0 }}
            />
          </div>
        </RevealAnimation>

        <RevealAnimation animation="fade-up" delay={400}>
          <div className="mt-8 md:mt-10 flex items-center justify-center space-x-3 text-primary-foreground/70">
            <div className="h-px w-8 md:w-12 bg-accent" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-light">
              On Site · Palm Beach, Florida
            </span>
            <div className="h-px w-8 md:w-12 bg-accent" />
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};