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
import { ArrowRight, Award, Building2, Sparkles, CheckCircle2, Shield, Users, FileCheck, Star } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import fcmbLogo from "@/assets/fcmb-logo.png";
import logoSketch from "@/assets/beau-monde-logo-sketch.jpeg";

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

      {/* New Delivery Showcase */}
      <DeliveryShowcase />

      {/* Editorial Sequence — Bespoke / Stats / Emblem / Philosophy */}
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
                <img
                  src={heroImage}
                  alt="Ultra Luxury Palm Beach Custom Home by Beau Monde Builders"
                  className="w-full aspect-[4/5] object-cover shadow-[40px_40px_80px_-20px_hsl(var(--primary)/0.2)]"
                />
                <div className="hidden lg:block absolute -bottom-8 -left-8">
                  <p className="font-display italic text-sm text-accent bg-background px-4 py-3 border border-accent/30 shadow-lg">
                    Turning blueprints to fingerprints
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Band 2 — Stats */}
          <RevealAnimation animation="fade-up">
            <div className="py-12 md:py-14 border-b border-accent/30">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-accent/20">
                {[
                  { v: "30+", l: "Years Excellence" },
                  { v: "$150M+", l: "Project Value" },
                  { v: "25+", l: "Estate Homes" },
                  { v: "100%", l: "Client Satisfaction" },
                ].map((s) => (
                  <div key={s.l} className="text-center first:border-l-0">
                    <div className="font-display text-4xl md:text-5xl font-light mb-1">{s.v}</div>
                    <div className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-accent">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>

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
                  <div className="w-full aspect-square border border-accent/15 bg-card p-6 shadow-xl">
                    <img
                      src={logoSketch}
                      alt="Beau Monde Builders emblem — classical architecture with lions and palm trees"
                      className="w-full h-full object-contain"
                    />
                  </div>
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

      {/* Florida Certified Master Builder Section */}
      <RevealAnimation animation="luxury-reveal" delay={150}>
        <section className="py-16 md:py-32 bg-gradient-to-b from-primary to-primary/95 relative overflow-hidden">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')] opacity-30" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Certification Badge */}
              <div className="flex justify-center lg:justify-end order-1 lg:order-1">
                <div className="relative">
                  {/* Glowing background effect */}
                  <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-150" />
                  <div className="relative bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-full border border-white/20 shadow-2xl">
                    <img 
                      src={fcmbLogo} 
                      alt="Florida Certified Master Builder" 
                      className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-white order-2 lg:order-2">
                <div className="flex items-center space-x-3 mb-4 md:mb-6">
                  <div className="h-px w-12 md:w-16 bg-accent" />
                  <span className="text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-accent font-medium">Elite Certification</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin mb-4 md:mb-6 leading-tight">
                  Florida Certified
                  <br />
                  <span className="italic font-light text-accent">Master Builder</span>
                </h2>

                <p className="text-base md:text-lg lg:text-xl text-white/80 mb-6 md:mb-10 font-light leading-relaxed">
                  An elite designation held by only the finest builders in Florida. This voluntary certification 
                  represents the pinnacle of construction excellence, requiring decades of experience, 
                  impeccable ethics, and unwavering commitment to client satisfaction.
                </p>

                {/* Requirements Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-10">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm md:text-base mb-0.5 md:mb-1">7+ Years Experience</h4>
                      <p className="text-xs md:text-sm text-white/60 font-light">Proven industry expertise</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm md:text-base mb-0.5 md:mb-1">Clean Record</h4>
                      <p className="text-xs md:text-sm text-white/60 font-light">No regulatory issues</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm md:text-base mb-0.5 md:mb-1">Verified References</h4>
                      <p className="text-xs md:text-sm text-white/60 font-light">Client & subcontractor approval</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <FileCheck className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm md:text-base mb-0.5 md:mb-1">Written Warranty</h4>
                      <p className="text-xs md:text-sm text-white/60 font-light">Minimum 1-year guarantee</p>
                    </div>
                  </div>
                </div>

                {/* Additional highlights */}
                <div className="border-t border-white/10 pt-6 md:pt-8">
                  <div className="flex flex-wrap gap-2 md:gap-4">
                    <div className="flex items-center space-x-1.5 md:space-x-2 text-white/70">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                      <span className="text-xs md:text-sm font-light">Background Verified</span>
                    </div>
                    <div className="flex items-center space-x-1.5 md:space-x-2 text-white/70">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                      <span className="text-xs md:text-sm font-light">5+ Years Licensed</span>
                    </div>
                    <div className="flex items-center space-x-1.5 md:space-x-2 text-white/70">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                      <span className="text-xs md:text-sm font-light">Fully Insured</span>
                    </div>
                    <div className="flex items-center space-x-1.5 md:space-x-2 text-white/70">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                      <span className="text-xs md:text-sm font-light">Board Approved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealAnimation>

      {/* Luxury Renovations Section */}
      <RevealAnimation animation="luxury-reveal" delay={100}>
        <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Content */}
              <div>
                <div className="flex items-center space-x-3 mb-4 md:mb-6">
                  <div className="h-px w-12 md:w-16 bg-accent" />
                  <span className="text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-muted-foreground font-light">Now Offering</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin mb-6 md:mb-8 leading-tight">
                  Luxury
                  <br />
                  <span className="italic font-light text-muted-foreground">Renovations</span>
                </h2>

                <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 font-light leading-relaxed">
                  From iconic oceanfront condominiums to historic Palm Beach estates, 
                  we bring the same uncompromising craftsmanship and Florida Certified 
                  Master Builder excellence to every renovation project.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm text-muted-foreground font-light">Condo Transformations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm text-muted-foreground font-light">Kitchen & Bath</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm text-muted-foreground font-light">Whole-Home Remodels</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm text-muted-foreground font-light">Turnkey Packages</span>
                  </div>
                </div>

                <Button 
                  variant="default" 
                  size="lg" 
                  className="group bg-accent hover:bg-accent/90 text-black font-medium tracking-wide text-sm md:text-base"
                  asChild
                >
                  <Link to="/renovations">
                    EXPLORE RENOVATIONS
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              {/* Stats/Highlights Card */}
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/10 blur-2xl rounded-lg" />
                <div className="relative bg-primary text-white p-8 md:p-12 border border-white/10">
                  <h3 className="text-xl md:text-2xl font-light mb-8 text-center">
                    Palm Beach & West Palm Beach
                    <br />
                    <span className="text-accent italic">Condo Specialists</span>
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm text-white/80 font-light">Full Gut Renovations</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm text-white/80 font-light">Gourmet Kitchen Design</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm text-white/80 font-light">Spa-Inspired Bathrooms</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm text-white/80 font-light">Turnkey Move-In Packages</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm text-white/80 font-light">Smart Home Integration</span>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <div className="flex flex-wrap justify-center gap-3">
                      <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-white/5 rounded border border-white/10">
                        <Shield className="w-4 h-4 text-accent" />
                        <span className="text-xs text-white/70 font-light">Fully Insured</span>
                      </div>
                      <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-white/5 rounded border border-white/10">
                        <Shield className="w-4 h-4 text-accent" />
                        <span className="text-xs text-white/70 font-light">Licensed</span>
                      </div>
                      <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-white/5 rounded border border-white/10">
                        <Award className="w-4 h-4 text-accent" />
                        <span className="text-xs text-white/70 font-light">FCMB Certified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealAnimation>

      {/* Services Section - Redesigned */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        {/* Background with texture */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-primary/95" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-20">
            <div className="flex items-center justify-center space-x-3 mb-4 md:mb-6">
              <div className="h-px w-8 md:w-12 bg-accent" />
              <span className="text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-accent font-light">Our Approach</span>
              <div className="h-px w-8 md:w-12 bg-accent" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-white leading-tight">
              The Beau Monde<br />
              <span className="italic font-light text-white/70">Difference</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
            {/* Service 1 */}
            <RevealAnimation animation="fade-up" delay={100}>
              <div className="group relative">
                {/* Card glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-b from-accent/20 to-transparent rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 md:p-10 lg:p-12 h-full transition-all duration-500 group-hover:bg-white/10 group-hover:border-accent/30">
                  {/* Number accent */}
                  <span className="absolute top-4 md:top-6 right-4 md:right-6 text-5xl md:text-7xl font-thin text-white/5 group-hover:text-accent/10 transition-colors duration-500">01</span>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-accent/20 transition-colors duration-500">
                      <Sparkles className="h-6 w-6 md:h-7 md:w-7 text-accent" />
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-light text-white mb-3 md:mb-4 tracking-wide">
                      BESPOKE DESIGN
                    </h3>
                    
                    <div className="h-px w-12 bg-accent/50 mb-4 md:mb-6 group-hover:w-20 transition-all duration-500" />
                    
                    <p className="text-sm md:text-base text-white/60 font-light leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                      Collaborate with renowned architects to create a home that embodies your unique aesthetic and lifestyle aspirations.
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>

            {/* Service 2 */}
            <RevealAnimation animation="fade-up" delay={200}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-b from-accent/20 to-transparent rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 md:p-10 lg:p-12 h-full transition-all duration-500 group-hover:bg-white/10 group-hover:border-accent/30">
                  <span className="absolute top-4 md:top-6 right-4 md:right-6 text-5xl md:text-7xl font-thin text-white/5 group-hover:text-accent/10 transition-colors duration-500">02</span>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-accent/20 transition-colors duration-500">
                      <Building2 className="h-6 w-6 md:h-7 md:w-7 text-accent" />
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-light text-white mb-3 md:mb-4 tracking-wide">
                      PRECISION EXECUTION
                    </h3>
                    
                    <div className="h-px w-12 bg-accent/50 mb-4 md:mb-6 group-hover:w-20 transition-all duration-500" />
                    
                    <p className="text-sm md:text-base text-white/60 font-light leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                      State-of-the-art project management ensures flawless execution, on time and beyond expectations.
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>

            {/* Service 3 */}
            <RevealAnimation animation="fade-up" delay={300}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-b from-accent/20 to-transparent rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 md:p-10 lg:p-12 h-full transition-all duration-500 group-hover:bg-white/10 group-hover:border-accent/30">
                  <span className="absolute top-4 md:top-6 right-4 md:right-6 text-5xl md:text-7xl font-thin text-white/5 group-hover:text-accent/10 transition-colors duration-500">03</span>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-accent/20 transition-colors duration-500">
                      <Award className="h-6 w-6 md:h-7 md:w-7 text-accent" />
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-light text-white mb-3 md:mb-4 tracking-wide">
                      LIFETIME COMMITMENT
                    </h3>
                    
                    <div className="h-px w-12 bg-accent/50 mb-4 md:mb-6 group-hover:w-20 transition-all duration-500" />
                    
                    <p className="text-sm md:text-base text-white/60 font-light leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                      Our relationship extends beyond completion with comprehensive warranty support and ongoing care for your investment.
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <RevealAnimation animation="fade-up" delay={300}>
        <section className="relative py-20 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')] opacity-20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-thin text-white mb-6 md:mb-8 leading-tight">
              Begin your journey to
              <br />
              <span className="italic font-light text-accent">architectural excellence</span>
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-white/70 mb-8 md:mb-12 font-light px-4">
              205 Worth Avenue, Suite 120 · Palm Beach, Florida 33480
            </p>

            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-black font-medium tracking-wide text-sm md:text-base"
              asChild
            >
              <Link to="/contact">
                SCHEDULE YOUR CONSULTATION
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      </RevealAnimation>

      <Footer />
      </div>
    </>
  );
};

export default Home;
