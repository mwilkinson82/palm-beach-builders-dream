import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RevealAnimation } from "@/components/RevealAnimation";
import { SplashScreen } from "@/components/SplashScreen";
import { SEO } from "@/components/SEO";
import { VideoHero } from "@/components/VideoHero";
import { DeliveryShowcase } from "@/components/DeliveryShowcase";
import { WalkthroughShowcase } from "@/components/WalkthroughShowcase";
import { WalkthroughGallery } from "@/components/WalkthroughGallery";
import { InterviewShowcase } from "@/components/InterviewShowcase";
import { Parallax } from "@/components/Parallax";
import { ArrowRight, Star } from "lucide-react";
import fcmbLogo from "@/assets/fcmb-logo.png";
import logoSketch from "@/assets/beau-monde-logo-sketch.jpeg";
import renovationHero from "@/assets/projects/renovation-hero.jpg.asset.json";
import bespokePortrait from "@/assets/projects/bespoke-portrait.jpg.asset.json";
import bespokeDetail from "@/assets/projects/bespoke-detail.jpg.asset.json";

const EMBLEM_MEANINGS = [
  {
    title: "The Lions",
    body: "Strength and leadership — protecting the structural and financial integrity of your legacy home.",
  },
  {
    title: "The Parthenon",
    body: "The golden ratio and timeless quality — every residence transcending temporary trends to remain an architectural landmark.",
  },
  {
    title: "Palm Trees",
    body: "Our geographical stamp — the tranquility and exclusive heritage of Palm Beach woven into the design itself.",
  },
];

const FCMB_CREDENTIALS = [
  { k: "Experience", v: "7+ years of proven industry practice" },
  { k: "Record", v: "Clean regulatory and disciplinary history" },
  { k: "References", v: "Verified by clients and subcontractors" },
  { k: "Warranty", v: "Written, minimum one-year guarantee" },
];

const COMMITMENTS = [
  {
    n: "I",
    title: "Bespoke Design",
    body: "We collaborate with renowned architects to shape a home that embodies your aesthetic and the way you actually live.",
  },
  {
    n: "II",
    title: "Precision Execution",
    body: "Disciplined project management. On time, on budget, beyond expectation — measured by the detail you notice last.",
  },
  {
    n: "III",
    title: "Lifetime Commitment",
    body: "The relationship outlives the build. Comprehensive warranty support and ongoing care for the home and the investment.",
  },
];

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <SEO 
        canonical="/"
        description="Beau Monde Builders Palm Beach - Florida's premier custom luxury home builder. Three decades of excellence crafting oceanfront estates and bespoke residences on Worth Avenue for discerning clients."
      />
      
      {/* Splash Screen */}
      {showSplash && (
        <SplashScreen 
          duration={3000} 
          onComplete={() => setShowSplash(false)} 
        />
      )}
      
      <div className="min-h-screen bg-background">
        <Navigation />

      {/* Hero Section - Cinematic Video */}
      <VideoHero />

      {/* Founder Walkthrough */}
      <WalkthroughShowcase />

      {/* Walkthrough Gallery — editorial filmstrip of stills from the same residence */}
      <WalkthroughGallery />

      {/* Realtor Interview with AJ — paired with the walkthrough (same home, two lenses) */}
      <InterviewShowcase />

      {/* New Delivery Showcase */}
      <DeliveryShowcase />

      {/* Editorial Sequence — Bespoke hero + Stats */}
      <section className="relative bg-background text-foreground py-20 md:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 silk-grain opacity-[0.03] pointer-events-none select-none z-0" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">

          {/* Band 1 — Hero editorial */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 border-b border-accent/30 pb-16 md:pb-20">
            <div className="lg:col-span-7 lg:pr-12">
              <RevealAnimation animation="fade-up">
                <span className="block font-sans text-[10px] tracking-[0.25em] text-accent uppercase mb-4">
                  The Beau Monde Standard
                </span>
              </RevealAnimation>

              <div className="relative">
                <span
                  aria-hidden
                  className="parallax-ligature absolute -top-12 md:-top-16 -left-6 md:-left-12 font-display italic text-[10rem] md:text-[16rem] lg:text-[18rem] leading-none text-accent/15 pointer-events-none select-none"
                  style={{ fontFeatureSettings: "'swsh' 1, 'dlig' 1" }}
                >
                  B
                </span>
                <RevealAnimation animation="luxury-reveal" delay={120}>
                  <h1 className="relative z-10 font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.9] font-light mb-8 tracking-tight">
                    Bespoke Luxury <br />
                    <span className="italic">Redefined</span>
                  </h1>
                </RevealAnimation>
              </div>

              <RevealAnimation animation="fade-up" delay={250}>
                <p className="font-sans font-light text-base md:text-lg leading-relaxed max-w-lg mb-10 text-foreground/85">
                  Where architectural excellence meets uncompromising craftsmanship. Three decades of creating Palm Beach's
                  most distinguished estates — custom residences beginning at $5M and rising into the extraordinary.
                </p>
              </RevealAnimation>

              <RevealAnimation animation="fade-up" delay={400}>
                <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-10">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans text-[11px] uppercase tracking-[0.15em] font-semibold rounded-none px-8 md:px-10 py-4"
                    asChild
                  >
                    <Link to="/contact">Talk to Beau Monde</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans text-[11px] uppercase tracking-[0.15em] font-semibold rounded-none px-8 md:px-10 py-4"
                    asChild
                  >
                    <Link to="/projects">Find My Style</Link>
                  </Button>
                </div>
              </RevealAnimation>

              <RevealAnimation animation="fade-up" delay={550}>
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" strokeWidth={1.25} />
                    ))}
                  </div>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-foreground/60">
                    50+ Reviews · Google Verified
                  </span>
                </div>
              </RevealAnimation>
            </div>

            <div className="lg:col-span-5 relative lg:pb-28">
              {/* Interior — dominant */}
              <RevealAnimation animation="scale-in" delay={200}>
                <div className="relative">
                  <Parallax speed={0.08} className="block">
                    <img
                      src={bespokeDetail.url}
                      alt="Beau Monde interior — coffered ceilings, brass lanterns, marble island"
                      className="w-full aspect-[4/5] object-cover shadow-[40px_40px_80px_-20px_hsl(var(--primary)/0.25)]"
                      loading="lazy"
                    />
                    {/* engraved corner hairline (brass, bottom-right) */}
                    <span
                      aria-hidden
                      className="hidden lg:block absolute bottom-3 right-3 w-16 h-16 border-b border-r border-accent/70 pointer-events-none"
                    />
                  </Parallax>
                </div>
              </RevealAnimation>

              {/* Portrait — small offset counterpart, with caption tucked beneath */}
              <div className="mt-6 lg:mt-0 lg:absolute lg:bottom-[-3rem] lg:left-[-6rem] lg:w-[38%] lg:z-30">
                <RevealAnimation animation="fade-up" delay={420}>
                  <div className="relative">
                    <img
                      src={bespokePortrait.url}
                      alt="Portrait of a Beau Monde client — the life behind the residence"
                      className="w-full aspect-[3/4] object-cover shadow-[30px_30px_60px_-20px_hsl(var(--primary)/0.4)] ring-1 ring-accent/30"
                      loading="lazy"
                    />
                    <div className="hidden lg:block absolute -bottom-5 -right-6 z-10">
                      <p className="font-display italic text-sm text-accent bg-background px-4 py-2 border border-accent/40 shadow-md whitespace-nowrap">
                        Turning blueprints to fingerprints
                      </p>
                    </div>
                  </div>
                </RevealAnimation>
              </div>
            </div>
          </div>

          {/* Band 2 — Stats */}
          <div className="py-12 md:py-14 border-b border-accent/30">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-accent/20">
              {[
                { v: "30+", l: "Years Excellence" },
                { v: "$150M+", l: "Project Value" },
                { v: "25+", l: "Estate Homes" },
                { v: "100%", l: "Client Satisfaction" },
              ].map((s, i) => (
                <RevealAnimation key={s.l} animation="fade-up" delay={i * 120}>
                  <div className="text-center first:border-l-0">
                    <div className="font-display text-4xl md:text-5xl font-light mb-1">{s.v}</div>
                    <div className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-accent">
                      {s.l}
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Renovations — NEW announcement + three-commitment treatment */}
      <section className="relative bg-background text-foreground overflow-hidden border-t border-accent/20">
        {/* Navy announcement strip */}
        <RevealAnimation animation="fade-up">
          <div className="relative bg-primary text-primary-foreground">
            <div className="absolute inset-0 silk-grain opacity-[0.05] pointer-events-none" />
            <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-6 md:py-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center">
              <span className="inline-flex items-center font-sans text-[10px] tracking-[0.35em] uppercase border border-accent text-accent px-3 py-1.5">
                New · 2026
              </span>
              <span className="font-sans text-[10px] md:text-xs tracking-[0.35em] uppercase text-primary-foreground/85">
                Beau Monde is now offering
              </span>
              <span className="font-display italic text-xl md:text-2xl leading-none text-primary-foreground">
                Renovations.
              </span>
            </div>
          </div>
        </RevealAnimation>

        {/* Full-bleed cinematic hero */}
        <RevealAnimation animation="fade-in">
          <div className="relative w-full overflow-hidden">
            <div className="relative w-full aspect-[4/5] md:aspect-[3/2] lg:aspect-[16/9] xl:aspect-[2/1] min-h-[600px] md:min-h-[720px] lg:min-h-[820px] overflow-hidden">
              <img
                src={renovationHero.url}
                alt="Beau Monde Builders renovation — interior with marble kitchen, brass lanterns, and ocean view"
                className="cinema-image absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
              />
              {/* Navy scrim — soft, focused on bottom-left for headline legibility only */}
              <div className="cinema-veil absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary)/0.55),hsl(var(--primary)/0.18)_45%,transparent_70%)] pointer-events-none" />
              {/* Brass hairline frame — feathered top & bottom with corner ticks */}
              <div className="cinema-hairline absolute left-6 right-6 md:left-12 md:right-12 top-6 h-px bg-[linear-gradient(to_right,transparent,hsl(var(--accent)/0.55)_18%,hsl(var(--accent)/0.55)_82%,transparent)] pointer-events-none" />
              <div className="cinema-hairline absolute left-6 right-6 md:left-12 md:right-12 bottom-6 h-px bg-[linear-gradient(to_right,transparent,hsl(var(--accent)/0.55)_18%,hsl(var(--accent)/0.55)_82%,transparent)] pointer-events-none" />
              {/* Engraved corner ticks */}
              <div className="cinema-hairline absolute left-6 md:left-12 top-6 w-px h-3 bg-accent/70 pointer-events-none" />
              <div className="cinema-hairline absolute right-6 md:right-12 top-6 w-px h-3 bg-accent/70 pointer-events-none" />
              <div className="cinema-hairline absolute left-6 md:left-12 bottom-6 w-px h-3 bg-accent/70 pointer-events-none" />
              <div className="cinema-hairline absolute right-6 md:right-12 bottom-6 w-px h-3 bg-accent/70 pointer-events-none" />

              {/* Headline overlay — bottom-left */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 md:p-16 lg:p-20">
                <div className="max-w-3xl">
                  <RevealAnimation animation="fade-up" delay={450}>
                    <span className="block font-sans text-[10px] md:text-xs tracking-[0.35em] uppercase text-accent mb-5 md:mb-6">
                      A New Beau Monde Offering
                    </span>
                  </RevealAnimation>
                  <RevealAnimation animation="luxury-reveal" delay={650}>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-primary-foreground mb-8 md:mb-10">
                      Renovations <span className="hidden md:inline">at the </span>
                      <span className="md:hidden"><br />at the </span>
                      <span className="italic">same standard.</span>
                    </h2>
                  </RevealAnimation>
                  <RevealAnimation animation="fade-up" delay={950}>
                    <Link
                      to="/renovations"
                      className="group/cta relative inline-flex items-center gap-4 pl-7 pr-8 md:pl-8 md:pr-10 py-5 md:py-[1.35rem] font-sans text-[11px] uppercase tracking-[0.32em] font-medium text-primary-foreground bg-transparent transition-colors duration-[600ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:bg-primary/35"
                    >
                      {/* Brass hairline frame */}
                      <span aria-hidden className="pointer-events-none absolute inset-0 border border-accent/55 group-hover/cta:border-accent/90 transition-colors duration-[600ms]" />
                      {/* Corner ticks */}
                      <span aria-hidden className="pointer-events-none absolute -top-px -left-px w-3 h-px bg-accent" />
                      <span aria-hidden className="pointer-events-none absolute -top-px -left-px h-3 w-px bg-accent" />
                      <span aria-hidden className="pointer-events-none absolute -top-px -right-px w-3 h-px bg-accent" />
                      <span aria-hidden className="pointer-events-none absolute -top-px -right-px h-3 w-px bg-accent" />
                      <span aria-hidden className="pointer-events-none absolute -bottom-px -left-px w-3 h-px bg-accent" />
                      <span aria-hidden className="pointer-events-none absolute -bottom-px -left-px h-3 w-px bg-accent" />
                      <span aria-hidden className="pointer-events-none absolute -bottom-px -right-px w-3 h-px bg-accent" />
                      <span aria-hidden className="pointer-events-none absolute -bottom-px -right-px h-3 w-px bg-accent" />
                      <span className="relative">Explore Renovations</span>
                      <span aria-hidden className="relative flex items-center">
                        <span className="block h-px w-6 bg-accent/70 origin-left transition-transform duration-[700ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/cta:scale-x-150" />
                        <ArrowRight className="ml-2 h-3.5 w-3.5 text-accent transition-transform duration-[700ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/cta:translate-x-1.5" strokeWidth={1.25} />
                      </span>
                    </Link>
                  </RevealAnimation>
                </div>
              </div>

              {/* Beau Monde wordmark — bottom-right signature */}
              <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 hidden md:block pointer-events-none">
                <span className="font-wordmark text-xl md:text-2xl lg:text-3xl text-primary-foreground/55 tracking-wide">
                  Beau Monde
                </span>
              </div>
              <div className="absolute bottom-3 left-0 right-0 md:hidden text-center pointer-events-none">
                <span className="font-wordmark text-base text-primary-foreground/55 tracking-wide">
                  Beau Monde
                </span>
              </div>
            </div>
          </div>
        </RevealAnimation>

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-20 md:py-28 lg:py-32">
          {/* Three commitments — applied to renovations */}
          <div className="relative">
            <div className="text-center mb-12 md:mb-14">
              <RevealAnimation animation="fade-up">
                <div className="flex items-center justify-center gap-4">
                  <span className="h-px w-10 md:w-14 bg-accent/50" />
                  <span className="font-sans text-[10px] md:text-xs tracking-[0.35em] uppercase text-accent">
                    One Standard · Applied to Renovation
                  </span>
                  <span className="h-px w-10 md:w-14 bg-accent/50" />
                </div>
              </RevealAnimation>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-accent/30">
              {[
                {
                  n: "I",
                  title: "Discretion",
                  body: "Worth Avenue addresses, historic estates, occupied condominiums — handled with the privacy our clients expect. Quiet site protocols, vetted crews, no public reels.",
                },
                {
                  n: "II",
                  title: "Continuity",
                  body: "We don't grind your home down to studs and disappear. The same project lead from walk-through to punch list, with disciplined sequencing that respects your life inside the building.",
                },
                {
                  n: "III",
                  title: "Same Standard",
                  body: "The trades, materials, and tolerances of a Beau Monde ground-up build — applied to a kitchen, a primary suite, a whole floor. No tier-down for the smaller scope.",
                },
              ].map((row, i) => (
                <RevealAnimation key={row.n} animation="fade-up" delay={i * 150}>
                  <article className="relative h-full p-8 md:p-10 border-b border-accent/30 md:border-b md:border-r md:[&:last-child]:border-r-0 flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <span className="font-display italic text-5xl md:text-6xl font-light text-accent leading-none">
                        {row.n}
                      </span>
                      <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-foreground/40 mt-2">
                        0{i + 1} / 03
                      </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-light leading-tight mb-4 text-primary">
                      {row.title}
                    </h3>
                    <p className="font-sans font-light text-[15px] leading-relaxed text-foreground/80">
                      {row.body}
                    </p>
                  </article>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy — lifted to top-level, seafoam editorial card */}
      <section className="relative bg-background text-foreground py-20 md:py-28 overflow-hidden border-t border-accent/20">
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          <RevealAnimation animation="luxury-reveal">
            <div className="relative bg-seafoam p-10 sm:p-14 lg:p-20 border border-accent/20 overflow-hidden">
              <div className="absolute inset-0 silk-grain opacity-[0.04] pointer-events-none select-none" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <span className="block font-sans text-[10px] tracking-[0.25em] text-accent uppercase mb-8 text-center">
                  Our Philosophy
                </span>
                <div className="relative flex justify-center min-h-[12rem] md:min-h-[16rem] items-center">
                  <span
                    aria-hidden
                    className="parallax-ligature-centered absolute top-1/2 left-1/2 font-display italic text-[12rem] md:text-[16rem] leading-none text-accent/10 pointer-events-none select-none"
                    style={{ fontFeatureSettings: "'swsh' 1, 'dlig' 1" }}
                  >
                    A
                  </span>
                  <h3 className="relative z-10 font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-8 md:mb-12 text-center italic text-primary">
                    Architectural mastery meets personal vision.
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 font-sans font-light text-[15px] leading-relaxed text-foreground/90">
                  <p>
                    Founded on the principle that a custom home is the ultimate expression of its owner, AJ Hoover has
                    spent three decades refining a hands-on approach that prioritizes the artisanal over the industrial.
                  </p>
                  <p>
                    By limiting our project count, we ensure that every stone, every beam, and every finish receives the
                    meticulous attention it deserves. Your vision is our blueprint; your satisfaction is our fingerprint.
                  </p>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* Our Marks — Emblem + FCMB merged editorial card */}
      <section className="relative bg-background text-foreground py-20 md:py-28 lg:py-32 overflow-hidden border-t border-accent/20">
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          <RevealAnimation animation="fade-up">
            <div className="text-center mb-14 md:mb-16">
              <span className="block font-sans text-[10px] tracking-[0.3em] uppercase text-accent mb-3">
                Our Marks
              </span>
              <p className="font-display italic text-lg md:text-xl text-foreground/70">
                The signs that stand behind the work.
              </p>
            </div>
          </RevealAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left — Emblem image and headline */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <RevealAnimation animation="fade-up">
                  <span className="block font-sans text-[10px] tracking-[0.25em] text-accent uppercase mb-6">
                    Our Emblem
                  </span>
                </RevealAnimation>

                <div className="relative">
                  <span
                    aria-hidden
                    className="parallax-ligature absolute -top-10 -left-6 md:-top-12 md:-left-8 font-display italic text-[10rem] md:text-[14rem] leading-none text-accent/15 pointer-events-none select-none"
                    style={{ fontFeatureSettings: "'swsh' 1, 'dlig' 1" }}
                  >
                    S
                  </span>
                  <RevealAnimation animation="luxury-reveal" delay={100}>
                    <h2 className="relative z-10 font-display text-4xl md:text-5xl font-light mb-8 leading-[1.05]">
                      The Symbols of <br />
                      <span className="italic">Beau Monde</span>
                    </h2>
                  </RevealAnimation>
                </div>

                <RevealAnimation animation="scale-in" delay={200}>
                  <Parallax speed={0.08}>
                    <div className="w-full aspect-square border border-accent/15 bg-card p-6 shadow-xl">
                      <img
                        src={logoSketch}
                        alt="Beau Monde Builders emblem — classical architecture with lions and palm trees"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </Parallax>
                </RevealAnimation>
              </div>
            </div>

            {/* Right — Meanings + FCMB credentials */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="space-y-10 md:space-y-12">
                {EMBLEM_MEANINGS.map((item, i) => (
                  <RevealAnimation key={item.title} animation="fade-up" delay={i * 100}>
                    <div>
                      <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-3 flex items-center gap-4 text-foreground">
                        <span className="w-8 h-px bg-accent" />
                        {item.title}
                      </h4>
                      <p className="font-sans font-light text-[15px] leading-relaxed text-foreground/80 pl-12">
                        {item.body}
                      </p>
                    </div>
                  </RevealAnimation>
                ))}
              </div>

              {/* Hairline divider into FCMB */}
              <div className="my-14 md:my-16 flex items-center gap-4">
                <span className="h-px flex-1 bg-accent/30" />
                <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-accent">
                  Elite Certification
                </span>
                <span className="h-px flex-1 bg-accent/30" />
              </div>

              {/* FCMB block */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-start">
                <RevealAnimation animation="scale-in" className="sm:col-span-4">
                  <Parallax speed={0.06}>
                    <img
                      src={fcmbLogo}
                      alt="Florida Certified Master Builder"
                      className="w-full max-w-[200px] mx-auto sm:mx-0 h-auto object-contain"
                    />
                  </Parallax>
                </RevealAnimation>

                <div className="sm:col-span-8">
                  <RevealAnimation animation="luxury-reveal" delay={120}>
                    <h3 className="font-display text-2xl md:text-3xl font-light leading-[1.1] mb-4 tracking-tight">
                      Florida Certified Master Builder — <span className="italic">held by the few.</span>
                    </h3>
                  </RevealAnimation>
                  <RevealAnimation animation="fade-up" delay={220}>
                    <p className="font-sans font-light text-[15px] leading-relaxed text-foreground/80 mb-6">
                      A voluntary credential awarded only to Florida builders with the experience, ethics, and record to
                      back it — the pinnacle of construction excellence in the state.
                    </p>
                  </RevealAnimation>
                  <RevealAnimation animation="fade-up" delay={320}>
                    <dl className="border-t border-accent/30">
                      {FCMB_CREDENTIALS.map((row) => (
                        <div
                          key={row.k}
                          className="grid grid-cols-12 gap-3 py-3 border-b border-accent/30"
                        >
                          <dt className="col-span-4 font-sans text-[10px] uppercase tracking-[0.25em] text-accent self-center">
                            {row.k}
                          </dt>
                          <dd className="col-span-8 font-sans font-light text-[14px] text-foreground/85 self-center">
                            {row.v}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </RevealAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Commitments — redesigned card grid */}
      <section className="relative bg-background text-foreground py-20 md:py-28 lg:py-32 overflow-hidden border-t border-accent/20">
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center mb-16 md:mb-20">
            <RevealAnimation animation="fade-up">
              <span className="block font-sans text-[10px] tracking-[0.25em] uppercase text-accent mb-4">
                Our Approach
              </span>
            </RevealAnimation>
            <div className="relative">
              <span
                aria-hidden
                className="parallax-ligature-centered absolute top-1/2 left-1/2 font-display italic text-[12rem] md:text-[16rem] leading-none text-accent/10 pointer-events-none select-none"
              >
                III
              </span>
              <RevealAnimation animation="luxury-reveal" delay={120}>
                <h2 className="relative z-10 font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight">
                  Three commitments, <br />
                  <span className="italic">one standard.</span>
                </h2>
              </RevealAnimation>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-accent/30 border border-accent/30">
            {COMMITMENTS.map((row, i) => (
              <RevealAnimation key={row.n} animation="fade-up" delay={i * 150}>
                <article className="group relative h-full bg-background p-8 md:p-10 lg:p-12 flex flex-col transition-all duration-500 hover:bg-seafoam/40">
                  {/* Top brass rule that fills navy on hover */}
                  <span aria-hidden className="absolute top-0 left-0 h-px w-12 bg-accent transition-all duration-500 group-hover:w-full group-hover:bg-primary" />

                  <div className="flex items-start justify-between mb-8">
                    <span className="font-display italic text-5xl md:text-6xl font-light text-accent leading-none">
                      {row.n}
                    </span>
                    <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-foreground/40 mt-2">
                      0{i + 1} / 03
                    </span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-light leading-tight mb-4 text-primary">
                    {row.title}
                  </h3>
                  <p className="font-sans font-light text-[15px] leading-relaxed text-foreground/80 flex-1">
                    {row.body}
                  </p>
                </article>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA — engraved invitation */}
      <RevealAnimation animation="fade-up">
        <section className="relative w-full bg-background py-24 md:py-32 px-6 flex justify-center overflow-hidden">
          <div className="relative z-10 max-w-3xl w-full text-center border border-accent/25 p-12 md:p-20">
            {/* Ornamental brass corners */}
            <span aria-hidden className="absolute top-4 left-4 w-8 h-8 border-t border-l border-accent/70" />
            <span aria-hidden className="absolute top-4 right-4 w-8 h-8 border-t border-r border-accent/70" />
            <span aria-hidden className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-accent/70" />
            <span aria-hidden className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-accent/70" />

            <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-accent font-medium mb-8">
              A Limited Engagement
            </span>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary font-light leading-[1.1] tracking-tight mb-10">
              Begin your journey to <br className="hidden md:block" />
              <span className="italic">architectural excellence</span>
            </h2>

            <div className="mx-auto mb-10 h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent" />

            <Button
              size="lg"
              className="group bg-primary text-primary-foreground hover:bg-primary/90 font-sans text-[11px] uppercase tracking-[0.25em] font-medium rounded-none px-10 py-5"
              asChild
            >
              <Link to="/contact">
                Talk to Beau Monde
                <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.25} />
              </Link>
            </Button>
          </div>
        </section>
      </RevealAnimation>

      <Footer />
      </div>
    </>
  );
};

export default Home;
