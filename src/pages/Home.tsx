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

      {/* New Delivery Showcase */}
      <DeliveryShowcase />

      {/* Brand Statement - Editorial "Act Two" */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Copy */}
          <div className="relative py-16 md:py-28 lg:py-36 px-6 sm:px-10 lg:px-20 flex flex-col justify-center">
            <RevealAnimation animation="fade-up" delay={0}>
              <div className="flex items-center space-x-3 mb-6 md:mb-8">
                <div className="h-px w-12 md:w-16 bg-accent" />
                <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-accent font-light">
                  The Beau Monde Standard
                </span>
              </div>
            </RevealAnimation>

            <RevealAnimation animation="luxury-reveal" delay={150}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-thin text-white mb-6 md:mb-8 leading-[0.95] tracking-tight">
                BESPOKE
                <br />
                <span className="font-light italic text-accent">Luxury</span>
                <br />
                REDEFINED
              </h1>
            </RevealAnimation>

            <RevealAnimation animation="fade-up" delay={350}>
              <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 md:mb-12 max-w-xl font-light leading-relaxed">
                Where architectural excellence meets uncompromising craftsmanship.
                Three decades of creating Palm Beach's most distinguished estates —
                custom residences beginning at $5M and rising into the extraordinary.
              </p>
            </RevealAnimation>

            <RevealAnimation animation="fade-up" delay={500}>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
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
                <Link to="/projects">VIEW THE PORTFOLIO</Link>
              </Button>
              </div>
            </RevealAnimation>

            {/* Google Reviews Badge */}
            <RevealAnimation animation="fade-up" delay={650}>
              <div className="mt-10 md:mt-14 inline-flex">
              <div className="bg-white/5 border border-white/10 px-4 md:px-5 py-3 md:py-4 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-accent fill-accent" />
                    ))}
                  </div>
                  <div className="text-white">
                    <div className="text-sm md:text-base font-medium">50+ Reviews</div>
                    <div className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider">Google Verified</div>
                  </div>
                </div>
              </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Right: Editorial image */}
          <RevealAnimation animation="scale-in" delay={200} className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-full">
            <div className="relative h-full w-full min-h-[320px] sm:min-h-[420px] lg:min-h-[700px]">
              <img
                src={heroImage}
                alt="Ultra Luxury Palm Beach Custom Home by Beau Monde Builders"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/40 lg:to-primary/60" />
            </div>
          </RevealAnimation>
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

      {/* Logo Story Section */}
      <RevealAnimation animation="luxury-reveal" delay={100}>
        <section className="py-16 md:py-32 bg-[#f8f6f1] relative overflow-hidden">
          {/* Subtle decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="h-px w-12 bg-accent" />
                <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-light">Our Emblem</span>
                <div className="h-px w-12 bg-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin leading-tight">
                The Beau Monde
                <br />
                <span className="italic font-light text-muted-foreground">Symbol</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Logo Image */}
              <div className="flex justify-center lg:sticky lg:top-32">
                <div className="relative">
                  <div className="absolute -inset-8 bg-accent/10 blur-3xl rounded-full" />
                  <img
                    src={logoSketch}
                    alt="Beau Monde Builders Logo - Classical architecture with lions and palm trees"
                    className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain"
                  />
                </div>
              </div>

              {/* Description Content */}
              <div className="space-y-10">
                {/* Intro */}
                <div>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    The Beau Monde Builders logo is a powerful emblem that speaks to the essence of the company's philosophy, expertise, and dedication to excellence in luxury home building. Every element within the logo has been carefully chosen to represent the characteristics that Beau Monde Builders brings to each project.
                  </p>
                </div>

                {/* The Lions */}
                <div className="border-l-2 border-accent pl-6">
                  <h3 className="text-xl md:text-2xl font-light mb-4">
                    The Lions
                    <span className="block text-sm text-accent uppercase tracking-widest mt-1">Symbols of Strength & Leadership</span>
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    The lions in the Beau Monde Builders logo are more than just a nod to nature's royalty—they embody the qualities of a true leader. As the "King of the Jungle," the lion symbolizes strength, steadfastness, and vigilance. These traits mirror the approach Beau Monde Builders takes on each project: approaching each challenge with confidence, meeting every detail with unwavering attention, and leading every build with integrity. The lions also represent resilience and power, reminding clients that Beau Monde Builders will guide and safeguard their vision through every phase of construction.
                  </p>
                </div>

                {/* The Parthenon */}
                <div className="border-l-2 border-accent pl-6">
                  <h3 className="text-xl md:text-2xl font-light mb-4">
                    The Parthenon Structure
                    <span className="block text-sm text-accent uppercase tracking-widest mt-1">Timeless Quality & Architectural Excellence</span>
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    The Parthenon structure in the logo speaks to Beau Monde Builders' commitment to creating homes that are both enduring and visually stunning. Modeled after one of history's architectural masterpieces, the Parthenon symbolizes timelessness, durability, and aesthetic perfection. Much like this ancient structure, Beau Monde Builders designs homes that are built to last—homes that combine beauty, quality, and functionality to stand the test of time. The Parthenon also signifies an alignment with the highest standards of craftsmanship, emphasizing Beau Monde Builders' pursuit of architectural excellence.
                  </p>
                </div>

                {/* The Palm Trees */}
                <div className="border-l-2 border-accent pl-6">
                  <h3 className="text-xl md:text-2xl font-light mb-4">
                    The Palm Trees
                    <span className="block text-sm text-accent uppercase tracking-widest mt-1">Our Geographical Stamp</span>
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    The Beau Monde Builders palm trees are not only a geographical marker but throughout history have represented tranquility, peace and security, making it an appropriate element to the Beau Monde philosophy of not just creating lasting and beautiful project builds but actually becoming an oasis of peace and tranquility for your family to lay their heads and make a true home and respite from the day to day chaos and stress of the world.
                  </p>
                </div>

                {/* Vision Summary */}
                <div className="bg-primary text-white p-8 md:p-10 mt-8">
                  <h3 className="text-xl md:text-2xl font-light mb-4 text-accent">
                    A Vision Guided by Excellence
                  </h3>
                  <p className="text-white/80 font-light leading-relaxed">
                    The symbolism within the Beau Monde Builders logo reflects the core values that guide every project. Like the lion, Beau Monde Builders is committed to leadership, ensuring every project is executed with strength, diligence, and pride. The Parthenon serves as a constant reminder of the quality and precision that Beau Monde Builders brings to each home it builds—homes that are not only structurally sound but also masterpieces of aesthetic and functional design. And the Palm Trees create a peaceful and tranquil home for your family.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealAnimation>

      {/* Philosophy Section */}
      <RevealAnimation animation="luxury-reveal" delay={100}>
        <section className="relative py-16 md:py-32 overflow-hidden bg-gradient-to-br from-secondary via-white to-secondary/80">
          {/* Subtle diagonal lines texture */}
          <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                hsl(0, 0%, 5%),
                hsl(0, 0%, 5%) 1px,
                transparent 1px,
                transparent 40px
              )`
            }} 
          />
          
          {/* Large decorative accent elements */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          
          {/* Elegant corner accents */}
          <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-accent/20" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-accent/20" />
          
          {/* Floating decorative quote */}
          <div className="absolute top-1/2 right-8 lg:right-16 xl:right-24 -translate-y-1/2 hidden md:block pointer-events-none select-none">
            <div className="relative">
              {/* Large decorative quote mark */}
              <span className="text-[12rem] lg:text-[16rem] font-serif text-accent/10 leading-none absolute -top-16 -left-8">
                "
              </span>
              {/* Quote text */}
              <div className="relative z-10 max-w-[200px] lg:max-w-[240px]">
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
