import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RevealAnimation } from "@/components/RevealAnimation";
import { SEO } from "@/components/SEO";
import { ArrowRight, Building2, Home, Sparkles, Bath, ChefHat, Palette, Shield, CheckCircle2, MapPin } from "lucide-react";

const Renovations = () => {
  const services = [
    {
      icon: Building2,
      title: "Luxury Condo Transformations",
      description: "Complete reimagining of high-rise and beachfront condominiums in Palm Beach and West Palm Beach's most prestigious buildings.",
      features: ["Full gut renovations", "Oceanfront units", "Penthouse redesigns", "Building compliance expertise"]
    },
    {
      icon: Home,
      title: "Whole-Home Remodels",
      description: "Comprehensive estate renovations that breathe new life into existing properties while preserving their architectural heritage.",
      features: ["Historic preservation", "Modern upgrades", "Structural enhancements", "Smart home integration"]
    },
    {
      icon: ChefHat,
      title: "Gourmet Kitchen Design",
      description: "World-class culinary spaces featuring premium appliances, custom cabinetry, and timeless design suited for Palm Beach entertaining.",
      features: ["Custom cabinetry", "Premium appliances", "Island configurations", "Butler's pantries"]
    },
    {
      icon: Bath,
      title: "Spa-Inspired Bathrooms",
      description: "Luxurious retreats with imported stone, heated floors, and bespoke fixtures that rival the finest resorts.",
      features: ["Imported marble", "Steam showers", "Soaking tubs", "Radiant heating"]
    },
    {
      icon: Palette,
      title: "Interior Redesign",
      description: "Complete interior transformations including millwork, lighting design, and custom finishes that reflect your personal aesthetic.",
      features: ["Custom millwork", "Lighting design", "Flooring upgrades", "Ceiling treatments"]
    },
    {
      icon: Sparkles,
      title: "Turnkey Condo Packages",
      description: "Move-in ready luxury transformations for newly purchased condominiums, perfectly timed with your closing.",
      features: ["Pre-purchase planning", "Expedited timelines", "Furniture coordination", "White-glove delivery"]
    }
  ];

  return (
    <>
      <SEO 
        title="Luxury Renovations | Beau Monde Builders Palm Beach"
        canonical="/renovations"
        description="Palm Beach's premier luxury renovation specialists. Transform your condo or estate with full-service renovations including kitchens, bathrooms, and whole-home remodels by Florida Certified Master Builders."
      />
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary/90" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
          
          {/* Decorative elements */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <RevealAnimation animation="fade-up">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-px w-12 md:w-16 bg-accent" />
                  <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-accent font-light">Luxury Renovations</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin text-white mb-8 leading-[1.1]">
                  Reimagine Your
                  <br />
                  <span className="italic font-light text-accent">Palm Beach Residence</span>
                </h1>

                <p className="text-lg md:text-xl text-white/70 mb-10 font-light leading-relaxed max-w-2xl">
                  From iconic oceanfront condominiums to historic estates, we bring the same 
                  uncompromising craftsmanship and attention to detail that defines every Beau Monde project.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="group bg-accent hover:bg-accent/90 text-black font-medium tracking-wide"
                    asChild
                  >
                    <Link to="/contact">
                      START YOUR RENOVATION
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white/30 text-white hover:bg-white hover:text-black font-medium tracking-wide"
                    asChild
                  >
                    <Link to="/process">OUR PROCESS</Link>
                  </Button>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <RevealAnimation animation="luxury-reveal">
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-8 leading-tight">
                  Palm Beach's Finest
                  <br />
                  <span className="italic font-light text-muted-foreground">Renovation Specialists</span>
                </h2>
                
                <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
                  The same Florida Certified Master Builder excellence that creates Palm Beach's most 
                  distinguished new estates is now available for luxury renovations. Whether you've 
                  acquired a prestigious condominium on the island or are ready to transform your 
                  existing residence, Beau Monde brings three decades of expertise to every project.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-thin text-accent mb-2">50+</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Renovations Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-thin text-accent mb-2">30+</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-thin text-accent mb-2">100%</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-thin text-accent mb-2">A+</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">BBB Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealAnimation>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealAnimation animation="fade-up">
              <div className="text-center mb-12 md:mb-16">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <div className="h-px w-12 bg-accent" />
                  <span className="text-sm uppercase tracking-[0.3em] text-accent font-light">Full-Service Renovations</span>
                  <div className="h-px w-12 bg-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin text-white leading-tight">
                  Comprehensive Renovation
                  <br />
                  <span className="italic font-light text-white/70">Services</span>
                </h2>
              </div>
            </RevealAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <RevealAnimation key={service.title} animation="fade-up" delay={100 * (index % 3)}>
                  <div className="group relative h-full">
                    <div className="absolute -inset-0.5 bg-gradient-to-b from-accent/20 to-transparent rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                    
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 h-full transition-all duration-500 group-hover:bg-white/10 group-hover:border-accent/30">
                      <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-500">
                        <service.icon className="h-7 w-7 text-accent" />
                      </div>
                      
                      <h3 className="text-xl font-light text-white mb-3 tracking-wide">
                        {service.title}
                      </h3>
                      
                      <div className="h-px w-12 bg-accent/50 mb-4 group-hover:w-20 transition-all duration-500" />
                      
                      <p className="text-sm text-white/60 font-light leading-relaxed mb-6 group-hover:text-white/80 transition-colors duration-500">
                        {service.description}
                      </p>

                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-white/50">
                            <CheckCircle2 className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Condo Expertise Section */}
        <RevealAnimation animation="luxury-reveal">
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="h-px w-12 bg-accent" />
                    <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-light">Condo Expertise</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-8 leading-tight">
                    Palm Beach's Premier
                    <br />
                    <span className="italic font-light text-muted-foreground">Condo Specialists</span>
                  </h2>

                  <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
                    Renovating in a luxury condominium requires specialized expertise. We understand 
                    building regulations, work seamlessly with condo associations, and manage the 
                    unique logistics of high-rise construction—all while delivering the same 
                    exceptional quality that defines Beau Monde.
                  </p>

                  <div className="space-y-4">
                    {[
                      "Expert navigation of condo association requirements",
                      "Coordination with building management",
                      "Noise and schedule compliance",
                      "Material delivery logistics",
                      "Neighbor-conscious construction practices"
                    ].map((item) => (
                      <div key={item} className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full scale-75" />
                  <div className="relative bg-primary text-white border border-white/10 p-8 md:p-12 space-y-8">
                    {/* Property Types */}
                    <div>
                      <h3 className="text-lg font-light mb-4 text-accent">Property Types</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          "Luxury Condos",
                          "Residences",
                          "Oceanfront Condos",
                          "Penthouses",
                          "Historic Estates",
                          "Beachfront Residences"
                        ].map((item) => (
                          <div key={item} className="text-sm text-white/80 font-light py-1.5 flex items-center">
                            <CheckCircle2 className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Areas We Serve */}
                    <div className="border-t border-white/10 pt-6">
                      <h3 className="text-lg font-light mb-4 text-accent">Areas We Serve</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          "Palm Beach Island",
                          "West Palm Beach",
                          "Jupiter Island",
                          "Singer Island"
                        ].map((item) => (
                          <div key={item} className="text-sm text-white/80 font-light py-1.5 flex items-center">
                            <MapPin className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                      <div className="text-sm text-white/60 font-light italic mt-3">
                        And surrounding areas
                      </div>
                    </div>

                    {/* Our Process */}
                    <div className="border-t border-white/10 pt-6">
                      <h3 className="text-lg font-light mb-4 text-accent">Our Process</h3>
                      <div className="space-y-2">
                        {[
                          "Design Consultation",
                          "Permit Management",
                          "Quality Construction",
                          "Final Walkthrough"
                        ].map((item, index) => (
                          <div key={item} className="text-sm text-white/80 font-light py-1.5 flex items-center">
                            <span className="w-6 h-6 rounded-full bg-accent/20 text-accent text-xs flex items-center justify-center mr-2 flex-shrink-0">
                              {index + 1}
                            </span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealAnimation>

        {/* CTA Section */}
        <RevealAnimation animation="fade-up">
          <section className="relative py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-primary" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')] opacity-20" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-white mb-8 leading-tight">
                  Ready to transform
                  <br />
                  <span className="italic font-light text-accent">your residence?</span>
                </h2>

                <p className="text-lg text-white/70 mb-10 font-light">
                  Schedule a consultation to discuss your renovation vision with our team.
                </p>

                <Button 
                  variant="outline" 
                  size="lg"
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
    </>
  );
};

export default Renovations;
