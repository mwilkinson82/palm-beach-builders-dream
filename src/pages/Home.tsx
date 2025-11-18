import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, Award, Building2, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

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
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center border-r border-white/10 last:border-r-0">
              <div className="text-5xl md:text-6xl font-thin mb-2 text-accent">30+</div>
              <div className="text-sm uppercase tracking-widest text-white/70">Years Excellence</div>
            </div>
            <div className="text-center border-r border-white/10 last:border-r-0">
              <div className="text-5xl md:text-6xl font-thin mb-2 text-accent">$500M+</div>
              <div className="text-sm uppercase tracking-widest text-white/70">Project Value</div>
            </div>
            <div className="text-center border-r border-white/10 last:border-r-0">
              <div className="text-5xl md:text-6xl font-thin mb-2 text-accent">50+</div>
              <div className="text-sm uppercase tracking-widest text-white/70">Estate Homes</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-thin mb-2 text-accent">100%</div>
              <div className="text-sm uppercase tracking-widest text-white/70">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center space-x-3 mb-8">
              <div className="h-px w-16 bg-accent" />
              <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-light">Our Philosophy</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-thin mb-12 leading-tight">
              Architectural mastery<br />
              <span className="italic font-light text-muted-foreground">meets personal vision</span>
            </h2>

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
      </section>

      {/* Services Grid */}
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

      {/* CTA Section */}
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

      <Footer />
    </div>
  );
};

export default Home;
