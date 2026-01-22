import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RevealAnimation } from "@/components/RevealAnimation";
import { ArrowRight, Award, Building2, Sparkles, CheckCircle2, Shield, Users, FileCheck, Star } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import fcmbLogo from "@/assets/fcmb-logo.png";

const Home = () => {
  return (
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
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block mb-8 animate-fade-in">
              <div className="flex items-center space-x-2 text-accent">
                <div className="h-px w-12 bg-accent" />
                <span className="text-xs uppercase tracking-[0.3em] font-light">Palm Beach, Florida</span>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-thin text-white mb-8 leading-[0.9] tracking-tight animate-slide-up">
              BESPOKE
              <br />
              <span className="font-light italic">Luxury</span>
              <br />
              REDEFINED
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl font-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Where architectural excellence meets uncompromising craftsmanship.
              Three decades of creating Palm Beach's most distinguished estates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                variant="default" 
                size="xl" 
                className="group bg-accent hover:bg-accent/90 text-black font-medium tracking-wide"
                asChild
              >
                <Link to="/contact">
                  SCHEDULE CONSULTATION
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                className="border-white/30 text-white hover:bg-white hover:text-black font-medium tracking-wide"
                asChild
              >
                <Link to="/projects">EXPLORE PORTFOLIO</Link>
              </Button>
            </div>
          </div>

          {/* Google Reviews Badge */}
          <div className="absolute bottom-32 right-8 lg:right-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                <div className="text-white">
                  <div className="text-lg font-semibold">50+ Reviews</div>
                  <div className="text-xs text-white/70 uppercase tracking-wider">Google Verified</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center text-white/60">
            <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <RevealAnimation animation="fade-in">
        <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center border-r border-white/10 last:border-r-0">
              <div className="text-5xl md:text-6xl font-thin mb-2 text-accent">30+</div>
              <div className="text-sm uppercase tracking-widest text-white/70">Years Excellence</div>
            </div>
            <div className="text-center border-r border-white/10 last:border-r-0">
              <div className="text-5xl md:text-6xl font-thin mb-2 text-accent">$150M+</div>
              <div className="text-sm uppercase tracking-widest text-white/70">Project Value</div>
            </div>
            <div className="text-center border-r border-white/10 last:border-r-0">
              <div className="text-5xl md:text-6xl font-thin mb-2 text-accent">25+</div>
              <div className="text-sm uppercase tracking-widest text-white/70">Estate Homes</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-thin mb-2 text-accent">100%</div>
              <div className="text-sm uppercase tracking-widest text-white/70">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
      </RevealAnimation>

      {/* Philosophy Section */}
      <RevealAnimation animation="luxury-reveal" delay={100}>
        <section className="relative py-32 overflow-hidden">
          {/* Layered textured background */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-white to-secondary/80" />
          
          {/* Subtle diagonal lines texture */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              hsl(0, 0%, 5%),
              hsl(0, 0%, 5%) 1px,
              transparent 1px,
              transparent 40px
            )`
          }} />
          
          {/* Large decorative accent elements */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          
          {/* Elegant corner accents */}
          <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-accent/20" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-accent/20" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center space-x-3 mb-8">
                <div className="h-px w-16 bg-accent" />
                <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-light">Our Philosophy</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-thin mb-12 leading-tight">
                Architectural mastery<br />
                <span className="italic font-light text-muted-foreground">meets personal vision</span>
              </h2>

              <div className="relative">
                {/* Gold accent bar */}
                <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/50 to-transparent hidden lg:block" />
                
                <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-light">
                  Every Beau Monde estate begins with a singular commitment: to transform your vision into an
                  architectural masterpiece that transcends time. We don't build houses—we craft legacies.
                </p>

                <p className="text-xl text-muted-foreground leading-relaxed font-light">
                  Under AJ Hoover's hands-on leadership, our team of master craftsmen, elite designers, and
                  seasoned project managers orchestrate every detail with precision that defines luxury living
                  in Palm Beach.
                </p>
              </div>
            </div>
          </div>
        </section>
      </RevealAnimation>

      {/* Florida Certified Master Builder Section */}
      <RevealAnimation animation="luxury-reveal" delay={150}>
        <section className="py-32 bg-gradient-to-b from-primary to-primary/95 relative overflow-hidden">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')] opacity-30" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Certification Badge */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Glowing background effect */}
                  <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-150" />
                  <div className="relative bg-white/10 backdrop-blur-sm p-12 rounded-full border border-white/20 shadow-2xl">
                    <img 
                      src={fcmbLogo} 
                      alt="Florida Certified Master Builder" 
                      className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-white">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-px w-16 bg-accent" />
                  <span className="text-sm uppercase tracking-[0.3em] text-accent font-medium">Elite Certification</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin mb-6 leading-tight">
                  Florida Certified
                  <br />
                  <span className="italic font-light text-accent">Master Builder</span>
                </h2>

                <p className="text-xl text-white/80 mb-10 font-light leading-relaxed">
                  An elite designation held by only the finest builders in Florida. This voluntary certification 
                  represents the pinnacle of construction excellence, requiring decades of experience, 
                  impeccable ethics, and unwavering commitment to client satisfaction.
                </p>

                {/* Requirements Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">7+ Years Experience</h4>
                      <p className="text-sm text-white/60 font-light">Proven industry expertise</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Clean Record</h4>
                      <p className="text-sm text-white/60 font-light">No regulatory issues</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Verified References</h4>
                      <p className="text-sm text-white/60 font-light">Client & subcontractor approval</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <FileCheck className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Written Warranty</h4>
                      <p className="text-sm text-white/60 font-light">Minimum 1-year guarantee</p>
                    </div>
                  </div>
                </div>

                {/* Additional highlights */}
                <div className="border-t border-white/10 pt-8">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2 text-white/70">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="text-sm font-light">Background Verified</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white/70">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="text-sm font-light">5+ Years Licensed</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white/70">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="text-sm font-light">Fully Insured</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white/70">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="text-sm font-light">Board Approved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealAnimation>
      <RevealAnimation animation="scale-in" delay={200}>
        <section className="py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border">
            {/* Service 1 */}
            <div className="bg-background p-12 group hover:bg-primary transition-all duration-500">
              <Sparkles className="h-10 w-10 mb-6 text-accent group-hover:text-accent transition-colors" />
              <h3 className="text-2xl font-medium mb-4 group-hover:text-white transition-colors">
                BESPOKE DESIGN
              </h3>
              <p className="text-muted-foreground group-hover:text-white/80 transition-colors font-light leading-relaxed">
                Collaborate with renowned architects to create a home that embodies your unique aesthetic
                and lifestyle aspirations.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-background p-12 group hover:bg-primary transition-all duration-500">
              <Building2 className="h-10 w-10 mb-6 text-accent group-hover:text-accent transition-colors" />
              <h3 className="text-2xl font-medium mb-4 group-hover:text-white transition-colors">
                PRECISION EXECUTION
              </h3>
              <p className="text-muted-foreground group-hover:text-white/80 transition-colors font-light leading-relaxed">
                State-of-the-art project management ensures flawless execution, on time and beyond
                expectations.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-background p-12 group hover:bg-primary transition-all duration-500">
              <Award className="h-10 w-10 mb-6 text-accent group-hover:text-accent transition-colors" />
              <h3 className="text-2xl font-medium mb-4 group-hover:text-white transition-colors">
                LIFETIME COMMITMENT
              </h3>
              <p className="text-muted-foreground group-hover:text-white/80 transition-colors font-light leading-relaxed">
                Our relationship extends beyond completion with comprehensive warranty support and ongoing
                care for your investment.
              </p>
            </div>
          </div>
        </div>
      </section>
      </RevealAnimation>

      {/* CTA Section */}
      <RevealAnimation animation="fade-up" delay={300}>
        <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')] opacity-20" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-thin text-white mb-8 leading-tight">
              Begin your journey to
              <br />
              <span className="italic font-light text-accent">architectural excellence</span>
            </h2>

            <p className="text-xl text-white/70 mb-12 font-light">
              205 Worth Avenue, Suite 120 · Palm Beach, Florida 33480
            </p>

            <Button 
              variant="outline" 
              size="xl"
              className="border-accent text-accent hover:bg-accent hover:text-black font-medium tracking-wide"
              asChild
            >
              <Link to="/contact">
                SCHEDULE YOUR CONSULTATION
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      </RevealAnimation>

      <Footer />
    </div>
  );
};

export default Home;
