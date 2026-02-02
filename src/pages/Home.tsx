import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RevealAnimation } from "@/components/RevealAnimation";
import { SplashScreen } from "@/components/SplashScreen";
import { SEO } from "@/components/SEO";
import { ArrowRight, Award, Building2, Sparkles, CheckCircle2, Shield, Users, FileCheck, Star } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import fcmbLogo from "@/assets/fcmb-logo.png";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showSplash, setShowSplash] = useState(true);
  const philosophyRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (philosophyRef.current) {
        const rect = philosophyRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Only update when section is in view
        if (rect.top < windowHeight && rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SEO 
        canonical="/"
        description="Beau Monde Builders Palm Beach - Florida's premier custom luxury home builder. Three decades of excellence crafting oceanfront estates and bespoke residences on Worth Avenue for discerning clients."
      />
      
      {/* Splash Screen */}
      {showSplash && (
        <SplashScreen 
          duration={10000} 
          onComplete={() => setShowSplash(false)} 
        />
      )}
      
      <div className="min-h-screen bg-background">
        <Navigation />

      {/* Hero Section - Full Screen Immersive */}
      <section className="relative h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Ultra Luxury Palm Beach Custom Home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 md:mb-8 animate-fade-in">
              <div className="flex items-center space-x-2 text-accent">
                <div className="h-px w-8 md:w-12 bg-accent" />
                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-light">Palm Beach, Florida</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-thin text-white mb-6 md:mb-8 leading-[0.95] tracking-tight animate-slide-up">
              BESPOKE
              <br />
              <span className="font-light italic">Luxury</span>
              <br />
              REDEFINED
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 md:mb-12 max-w-2xl font-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Where architectural excellence meets uncompromising craftsmanship.
              Three decades of creating Palm Beach's most distinguished estates.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                variant="default" 
                size="lg" 
                className="group bg-accent hover:bg-accent/90 text-black font-medium tracking-wide text-sm md:text-base"
                asChild
              >
                <Link to="/contact">
                  TALK TO BEAU MONDE
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-black font-medium tracking-wide text-sm md:text-base"
                asChild
              >
                <Link to="/projects">FIND MY STYLE</Link>
              </Button>
            </div>
          </div>

          {/* Google Reviews Badge */}
          <div className="absolute bottom-24 md:bottom-32 right-4 sm:right-8 lg:right-16 animate-fade-in hidden sm:block" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 md:px-5 py-3 md:py-4 shadow-2xl">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-accent fill-accent" />
                  ))}
                </div>
                <div className="text-white">
                  <div className="text-sm md:text-lg font-semibold">50+ Reviews</div>
                  <div className="text-[10px] md:text-xs text-white/70 uppercase tracking-wider">Google Verified</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 animate-float hidden sm:flex">
          <div className="flex flex-col items-center text-white/60">
            <span className="text-[10px] md:text-xs uppercase tracking-widest mb-2">Scroll</span>
            <div className="w-px h-8 md:h-12 bg-gradient-to-b from-white/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <RevealAnimation animation="fade-in">
        <section className="bg-primary text-primary-foreground py-10 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center border-r border-white/10 last:border-r-0 py-2 md:py-0">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin mb-1 md:mb-2 text-accent">30+</div>
              <div className="text-[10px] sm:text-xs md:text-sm uppercase tracking-wider md:tracking-widest text-white/70">Years Excellence</div>
            </div>
            <div className="text-center border-r border-white/10 last:border-r-0 py-2 md:py-0">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin mb-1 md:mb-2 text-accent">$150M+</div>
              <div className="text-[10px] sm:text-xs md:text-sm uppercase tracking-wider md:tracking-widest text-white/70">Project Value</div>
            </div>
            <div className="text-center border-r border-white/10 last:border-r-0 py-2 md:py-0">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin mb-1 md:mb-2 text-accent">25+</div>
              <div className="text-[10px] sm:text-xs md:text-sm uppercase tracking-wider md:tracking-widest text-white/70">Estate Homes</div>
            </div>
            <div className="text-center py-2 md:py-0">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin mb-1 md:mb-2 text-accent">100%</div>
              <div className="text-[10px] sm:text-xs md:text-sm uppercase tracking-wider md:tracking-widest text-white/70">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
      </RevealAnimation>

      {/* Philosophy Section */}
      <RevealAnimation animation="luxury-reveal" delay={100}>
        <section ref={philosophyRef} className="relative py-16 md:py-32 overflow-hidden">
          {/* Layered textured background with parallax */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-secondary via-white to-secondary/80"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          />
          
          {/* Subtle diagonal lines texture with parallax */}
          <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                hsl(0, 0%, 5%),
                hsl(0, 0%, 5%) 1px,
                transparent 1px,
                transparent 40px
              )`,
              transform: `translateY(${scrollY * 0.02}px)`
            }} 
          />
          
          {/* Large decorative accent elements with parallax */}
          <div 
            className="absolute -top-32 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl transition-transform duration-100"
            style={{ transform: `translate(${scrollY * -0.03}px, ${scrollY * 0.08}px)` }}
          />
          <div 
            className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl transition-transform duration-100"
            style={{ transform: `translate(${scrollY * 0.04}px, ${scrollY * -0.06}px)` }}
          />
          
          {/* Elegant corner accents with subtle parallax */}
          <div 
            className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-accent/20"
            style={{ transform: `translate(${scrollY * -0.01}px, ${scrollY * -0.01}px)` }}
          />
          <div 
            className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-accent/20"
            style={{ transform: `translate(${scrollY * 0.01}px, ${scrollY * 0.01}px)` }}
          />
          
          {/* Floating decorative quote with parallax */}
          <div 
            className="absolute top-1/2 right-8 lg:right-16 xl:right-24 -translate-y-1/2 hidden md:block pointer-events-none select-none"
            style={{ transform: `translateY(${-50 + scrollY * -0.04}%)` }}
          >
            <div className="relative">
              {/* Large decorative quote mark */}
              <span 
                className="text-[12rem] lg:text-[16rem] font-serif text-accent/10 leading-none absolute -top-16 -left-8"
                style={{ transform: `translateY(${scrollY * 0.03}px)` }}
              >
                "
              </span>
              {/* Quote text */}
              <div 
                className="relative z-10 max-w-[200px] lg:max-w-[240px]"
                style={{ transform: `translateY(${scrollY * 0.02}px)` }}
              >
                <p className="text-lg lg:text-xl font-serif italic text-primary/40 leading-relaxed">
                  Turning blueprints to fingerprints
                </p>
                <div className="mt-4 h-px w-12 bg-accent/30" />
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center space-x-3 mb-4 md:mb-8">
                <div className="h-px w-12 md:w-16 bg-accent" />
                <span className="text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-muted-foreground font-light">Our Philosophy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-thin mb-8 md:mb-12 leading-tight">
                Architectural mastery<br />
                <span className="italic font-light text-muted-foreground">meets personal vision</span>
              </h2>

              <div className="relative">
                {/* Gold accent bar */}
                <div className="absolute -left-4 md:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/50 to-transparent hidden lg:block" />
                
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6 md:mb-8 font-light">
                  Every Beau Monde estate begins with a singular commitment: to transform your vision into an
                  architectural masterpiece that transcends time. We don't build houses—we craft legacies.
                </p>

                <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed font-light">
                  Under AJ Hoover's hands-on leadership, our team of master craftsmen, elite designers, and
                  seasoned project managers orchestrate every detail with precision that defines luxury living
                  in Palm Beach.
                </p>
              </div>

              {/* Mobile quote - centered below content */}
              <RevealAnimation animation="fade-up" delay={200}>
                <div className="mt-12 text-center md:hidden">
                  <span className="text-6xl font-serif text-accent/20 leading-none">"</span>
                  <p className="text-lg font-serif italic text-primary/50 leading-relaxed mt-2">
                    Turning blueprints to fingerprints
                  </p>
                  <div className="mt-4 h-px w-12 bg-accent/30 mx-auto" />
                </div>
              </RevealAnimation>
            </div>
          </div>
        </section>
      </RevealAnimation>

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
