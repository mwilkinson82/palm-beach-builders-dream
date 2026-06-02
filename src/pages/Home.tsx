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
import { InterviewShowcase } from "@/components/InterviewShowcase";
import { Parallax } from "@/components/Parallax";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import fcmbLogo from "@/assets/fcmb-logo.png";
import logoSketch from "@/assets/beau-monde-logo-sketch.jpeg";
import renovationImage from "@/assets/projects/intracoastal-contemporary.jpg";

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

            <RevealAnimation animation="scale-in" delay={200} className="lg:col-span-5 relative">
              <div className="relative">
                <Parallax speed={0.08} className="block">
                  <img
                    src={heroImage}
                    alt="Ultra Luxury Palm Beach Custom Home by Beau Monde Builders"
                    className="w-full aspect-[4/5] object-cover shadow-[40px_40px_80px_-20px_hsl(var(--primary)/0.2)]"
                  />
                </Parallax>
                <div className="hidden lg:block absolute -bottom-8 -left-8">
                  <p className="font-display italic text-sm text-accent bg-background px-4 py-3 border border-accent/30 shadow-lg">
                    Turning blueprints to fingerprints
                  </p>
                </div>
              </div>
            </RevealAnimation>
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

          {/* Band 3 — Emblem */}
          <section className="py-20 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
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
                  <Parallax speed={0.1}>
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

            <div className="lg:col-span-7 flex flex-col justify-center space-y-14 md:space-y-16">
              {[
                {
                  title: "The Lions",
                  body: "Symbols of strength and leadership, reflecting our unwavering commitment to protecting the structural and financial integrity of your legacy home.",
                },
                {
                  title: "The Parthenon",
                  body: "Representing the golden ratio and timeless quality, ensuring that every residence transcends temporary trends to remain an architectural landmark.",
                },
                {
                  title: "Palm Trees",
                  body: "Our geographical stamp — the tranquility and exclusive heritage of Palm Beach living, woven into the very fabric of our design philosophy.",
                },
              ].map((item, i) => (
                <RevealAnimation key={item.title} animation="fade-up" delay={i * 100}>
                  <div>
                    <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] mb-4 flex items-center gap-4 text-foreground">
                      <span className="w-8 h-px bg-accent" />
                      {item.title}
                    </h4>
                    <p className="font-sans font-light text-base leading-relaxed text-foreground/80 pl-12">
                      {item.body}
                    </p>
                  </div>
                </RevealAnimation>
              ))}

              <RevealAnimation animation="fade-up" delay={300}>
                <div className="pl-12 pt-8 border-t border-accent/20">
                  <p className="font-display text-xl md:text-2xl font-light italic leading-snug text-foreground/90">
                    "We don't just build estates; we steward the vision of those who demand nothing less than extraordinary."
                  </p>
                </div>
              </RevealAnimation>
            </div>
          </section>

          {/* Band 4 — Philosophy */}
          <RevealAnimation animation="luxury-reveal">
            <section className="relative bg-seafoam p-10 sm:p-14 lg:p-20 border border-accent/20 overflow-hidden">
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
                    Founded on the principle that a custom home is the ultimate expression of its owner, AJ Hoover has spent three
                    decades refining a hands-on approach that prioritizes the artisanal over the industrial.
                  </p>
                  <p>
                    By limiting our project count, we ensure that every stone, every beam, and every finish receives the meticulous
                    attention it deserves. Your vision is our blueprint; your satisfaction is our fingerprint.
                  </p>
                </div>
              </div>
            </section>
          </RevealAnimation>
        </div>
      </section>

      {/* Florida Certified Master Builder — editorial pair */}
      <section className="relative bg-background text-foreground py-20 md:py-28 lg:py-32 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <RevealAnimation animation="scale-in" className="lg:col-span-5">
              <div>
                <Parallax speed={0.08}>
                  <img
                    src={fcmbLogo}
                    alt="Florida Certified Master Builder"
                    className="w-full max-w-[360px] mx-auto lg:mx-0 h-auto object-contain"
                  />
                </Parallax>
                <div className="mt-6 h-px w-full bg-accent/40" />
                <p className="mt-3 font-sans text-[10px] tracking-[0.25em] uppercase text-accent">
                  Florida Certified · Master Builder
                </p>
              </div>
            </RevealAnimation>

            <div className="lg:col-span-7">
              <RevealAnimation animation="fade-up">
                <span className="block font-sans text-[10px] tracking-[0.25em] uppercase text-accent mb-4">
                  Elite Certification
                </span>
              </RevealAnimation>
              <RevealAnimation animation="luxury-reveal" delay={120}>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] mb-8 tracking-tight">
                  An elite designation. <br />
                  <span className="italic">Held by the few.</span>
                </h2>
              </RevealAnimation>
              <RevealAnimation animation="fade-up" delay={250}>
                <p className="font-sans font-light text-base md:text-lg leading-relaxed text-foreground/85 max-w-xl mb-12">
                  A voluntary credential awarded only to Florida builders with the experience, ethics, and record to back
                  it. The pinnacle of construction excellence in the state.
                </p>
              </RevealAnimation>

              <RevealAnimation animation="fade-up" delay={350}>
                <dl className="border-t border-accent/30">
                  {[
                    { k: "Experience", v: "7+ years of proven industry practice" },
                    { k: "Record", v: "Clean regulatory and disciplinary history" },
                    { k: "References", v: "Verified by clients and subcontractors" },
                    { k: "Warranty", v: "Written, minimum one-year guarantee" },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="grid grid-cols-12 gap-4 py-5 border-b border-accent/30"
                    >
                      <dt className="col-span-12 sm:col-span-4 font-sans text-[10px] uppercase tracking-[0.25em] text-accent self-center">
                        {row.k}
                      </dt>
                      <dd className="col-span-12 sm:col-span-8 font-sans font-light text-base text-foreground/85 self-center">
                        {row.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Renovations — editorial pair, image right */}
      <section className="relative bg-background text-foreground py-20 md:py-28 lg:py-32 overflow-hidden border-t border-accent/20">
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 lg:order-1 order-2">
              <RevealAnimation animation="fade-up">
                <span className="block font-sans text-[10px] tracking-[0.25em] uppercase text-accent mb-4">
                  Now Offering
                </span>
              </RevealAnimation>
              <RevealAnimation animation="luxury-reveal" delay={120}>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] mb-8 tracking-tight">
                  Renovations, <br />
                  <span className="italic">at the same standard.</span>
                </h2>
              </RevealAnimation>
              <RevealAnimation animation="fade-up" delay={250}>
                <p className="font-sans font-light text-base md:text-lg leading-relaxed text-foreground/85 max-w-xl mb-10">
                  From oceanfront condominiums to historic Palm Beach estates, the same craftsmanship that defines a
                  Beau Monde build — brought to renovation.
                </p>
              </RevealAnimation>

              <RevealAnimation animation="fade-up" delay={350}>
                <ul className="border-t border-accent/30 mb-10">
                  {[
                    "Condominium Transformations",
                    "Kitchen & Bath",
                    "Whole-Home Remodels",
                    "Turnkey Packages",
                  ].map((label) => (
                    <li
                      key={label}
                      className="flex items-baseline justify-between gap-6 py-4 border-b border-accent/30 font-display text-xl md:text-2xl font-light"
                    >
                      <span>{label}</span>
                      <span aria-hidden className="font-sans text-[10px] tracking-[0.25em] uppercase text-accent">
                        Beau Monde
                      </span>
                    </li>
                  ))}
                </ul>
              </RevealAnimation>

              <RevealAnimation animation="fade-up" delay={450}>
                <Button
                  size="lg"
                  className="group bg-primary text-primary-foreground hover:bg-primary/90 font-sans text-[11px] uppercase tracking-[0.15em] font-semibold rounded-none px-8 md:px-10 py-4"
                  asChild
                >
                  <Link to="/renovations">
                    Explore Renovations
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.25} />
                  </Link>
                </Button>
              </RevealAnimation>
            </div>

            <RevealAnimation animation="scale-in" delay={200} className="lg:col-span-5 lg:order-2 order-1">
              <img
                src={renovationImage}
                alt="Beau Monde Builders renovation — intracoastal residence"
                className="w-full aspect-[4/5] object-cover shadow-[40px_40px_80px_-20px_hsl(var(--primary)/0.2)]"
              />
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* The Beau Monde Difference — three editorial rows */}
      <section className="relative bg-background text-foreground py-20 md:py-28 lg:py-32 overflow-hidden border-t border-accent/20">
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
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

          <div className="border-t border-accent/30">
            {[
              {
                n: "01",
                title: "Bespoke Design",
                body: "We collaborate with renowned architects to shape a home that embodies your aesthetic and the way you actually live.",
              },
              {
                n: "02",
                title: "Precision Execution",
                body: "Disciplined project management. On time, on budget, beyond expectation — measured by the detail you notice last.",
              },
              {
                n: "03",
                title: "Lifetime Commitment",
                body: "The relationship outlives the build. Comprehensive warranty support and ongoing care for the home and the investment.",
              },
            ].map((row, i) => (
              <RevealAnimation key={row.n} animation="fade-up" delay={i * 120}>
                <div className="grid grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 border-b border-accent/30 items-baseline">
                  <div className="col-span-12 md:col-span-2 font-sans text-[10px] uppercase tracking-[0.25em] text-accent">
                    {row.n}
                  </div>
                  <h3 className="col-span-12 md:col-span-4 font-display text-3xl md:text-4xl font-light leading-tight">
                    {row.title}
                  </h3>
                  <p className="col-span-12 md:col-span-6 font-sans font-light text-base md:text-lg leading-relaxed text-foreground/85">
                    {row.body}
                  </p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA — restrained navy band */}
      <RevealAnimation animation="fade-up">
        <section className="relative bg-primary text-primary-foreground py-20 md:py-32 overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
            <span className="block font-sans text-[10px] tracking-[0.25em] uppercase text-accent mb-6">
              Begin
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight mb-8">
              Begin your journey to <br />
              <span className="italic text-primary-foreground/80">architectural excellence.</span>
            </h2>
            <div className="mx-auto h-px w-16 bg-accent/60 mb-8" />
            <p className="font-sans font-light text-base md:text-lg text-primary-foreground/70 mb-12">
              205 Worth Avenue · Palm Beach, Florida
            </p>
            <Button
              size="lg"
              className="group bg-background text-primary hover:bg-background/90 font-sans text-[11px] uppercase tracking-[0.15em] font-semibold rounded-none px-10 py-4"
              asChild
            >
              <Link to="/contact">
                Schedule Your Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.25} />
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
