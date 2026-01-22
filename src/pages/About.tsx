import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RevealAnimation } from "@/components/RevealAnimation";
import { Award, Shield, Users, FileCheck, CheckCircle2 } from "lucide-react";
import ajImage from "@/assets/aj-hoover.png";
import fcmbLogo from "@/assets/fcmb-logo.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-background z-0" />
        <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <p className="text-sm uppercase tracking-[0.3em] text-accent font-light mb-6">
              The Visionary Behind Excellence
            </p>
            <h1 className="text-6xl md:text-8xl font-display font-light text-foreground mb-8 tracking-tight">
              AJ Hoover &<br />
              <span className="font-serif italic">Beau Monde Builders</span>
            </h1>
          </div>
        </div>
      </section>

      {/* AJ's Story */}
      <RevealAnimation animation="luxury-reveal">
        <section className="py-32 bg-background relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_50%,_var(--accent),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <div className="animate-slide-up order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/20 blur-2xl" />
                <img
                  src={ajImage}
                  alt="AJ Hoover, CEO of Beau Monde Builders"
                  className="rounded-none shadow-2xl w-full relative z-10"
                />
              </div>
            </div>
            
            <div className="space-y-8 animate-fade-in order-1 lg:order-2">
              <div>
                <h2 className="text-5xl md:text-6xl font-display font-light text-foreground mb-4 tracking-tight">
                  AJ Hoover
                </h2>
                <p className="text-sm uppercase tracking-[0.3em] text-accent font-light">
                  CEO & Founder
                </p>
              </div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg font-light">
                <p>
                  Under AJ Hoover's visionary leadership, Beau Monde Builders has emerged as 
                  Florida's preeminent custom luxury home builder, distinguished by uncompromising 
                  excellence and meticulous craftsmanship.
                </p>
                
                <p>
                  From humble beginnings in rural Upstate New York, AJ's journey embodies the 
                  quintessential American Dream. Raised in a single-parent household, he cultivated 
                  an unparalleled work ethic, mastering every construction trade through hands-on experience.
                </p>
                
                <p>
                  With unwavering vision, AJ committed himself to establishing a brand that would 
                  redefine luxury homebuilding standards. Through strategic relationship building 
                  with Florida's finest artisans and subcontractors, he launched Beau Monde Builders.
                </p>
                
                <p>
                  Today, AJ remains intimately involved in every project, ensuring each residence 
                  reflects the uncompromising quality synonymous with the Beau Monde Builders legacy.
                </p>
              </div>
              
              <div className="pt-6">
                <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-background transition-all duration-500" asChild>
                  <Link to="/contact">Schedule Private Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </RevealAnimation>

      {/* Philosophy */}
      <RevealAnimation animation="fade-up" delay={100}>
        <section className="py-32 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIi8+PC9nPjwvc3ZnPg==')]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-display font-light tracking-tight mb-8">
              Our Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="text-accent text-xl font-light tracking-[0.3em]">01</div>
                <h3 className="text-2xl font-serif italic">Excellence</h3>
                <p className="text-background/70 font-light leading-relaxed">
                  Unwavering commitment to perfection in every detail, ensuring each project 
                  exceeds the highest standards of luxury craftsmanship.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-accent text-xl font-light tracking-[0.3em]">02</div>
                <h3 className="text-2xl font-serif italic">Integrity</h3>
                <p className="text-background/70 font-light leading-relaxed">
                  Transparent relationships built on trust, honesty, and mutual respect 
                  throughout every phase of your building journey.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-accent text-xl font-light tracking-[0.3em]">03</div>
                <h3 className="text-2xl font-serif italic">Innovation</h3>
                <p className="text-background/70 font-light leading-relaxed">
                  Embracing cutting-edge technology and timeless design to create 
                  homes that are both contemporary and enduring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </RevealAnimation>

      {/* Florida Certified Master Builder Section */}
      <RevealAnimation animation="scale-in" delay={150}>
        <section className="py-32 bg-gradient-to-b from-muted to-background relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              {/* Certification Badge */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full scale-125" />
                  <div className="relative bg-white p-10 rounded-full shadow-2xl border border-border">
                    <img 
                      src={fcmbLogo} 
                      alt="Florida Certified Master Builder" 
                      className="w-56 h-56 md:w-72 md:h-72 object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-px w-16 bg-accent" />
                  <span className="text-sm uppercase tracking-[0.3em] text-accent font-medium">Elite Certification</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-display font-light text-foreground mb-6 leading-tight tracking-tight">
                  Florida Certified
                  <br />
                  <span className="font-serif italic text-muted-foreground">Master Builder</span>
                </h2>

                <p className="text-lg text-muted-foreground mb-8 font-light leading-relaxed">
                  AJ Hoover holds the prestigious Florida Certified Master Builder designation — 
                  an elite voluntary certification representing the pinnacle of construction excellence. 
                  This distinction is earned through decades of experience, impeccable ethics, and 
                  unwavering commitment to client satisfaction.
                </p>

                {/* Requirements Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                  <div className="flex items-start space-x-3 p-4 bg-background rounded-lg border border-border">
                    <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground text-sm mb-1">7+ Years Experience</h4>
                      <p className="text-xs text-muted-foreground">Proven industry expertise</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-background rounded-lg border border-border">
                    <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground text-sm mb-1">Clean Record</h4>
                      <p className="text-xs text-muted-foreground">No regulatory issues</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-background rounded-lg border border-border">
                    <Users className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground text-sm mb-1">Verified References</h4>
                      <p className="text-xs text-muted-foreground">Client & subcontractor approval</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-background rounded-lg border border-border">
                    <FileCheck className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground text-sm mb-1">Written Warranty</h4>
                      <p className="text-xs text-muted-foreground">Minimum 1-year guarantee</p>
                    </div>
                  </div>
                </div>

                {/* Verification badges */}
                <div className="flex flex-wrap gap-3">
                  {["Background Verified", "5+ Years Licensed", "Fully Insured", "Board Approved"].map((badge) => (
                    <div key={badge} className="flex items-center space-x-2 px-3 py-1.5 bg-accent/10 rounded-full">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span className="text-xs font-medium text-foreground">{badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealAnimation>

      {/* Team Section */}
      <RevealAnimation animation="luxury-reveal" delay={200}>
        <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-20 animate-fade-in">
            <p className="text-sm uppercase tracking-[0.3em] text-accent font-light mb-6">
              Expertise & Mastery
            </p>
            <h2 className="text-5xl md:text-7xl font-display font-light text-foreground tracking-tight">
              The Beau Monde <span className="font-serif italic">Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              { name: "John Colaiacovo", role: "Project Manager", experience: "Dedicated to delivering exceptional results" },
              { name: "Michelle Williams", role: "Financial Director", experience: "20+ years in luxury construction finance" },
              { name: "Linda Lucas", role: "Project Manager", experience: "25+ years transforming visions into reality" }
            ].map((member, index) => (
              <div key={index} className="text-center space-y-6 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="aspect-[3/4] bg-muted/30 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-foreground mb-2">{member.name}</h3>
                  <p className="text-xs uppercase tracking-[0.3em] text-accent font-light mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {member.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </RevealAnimation>

      <Footer />
    </div>
  );
};

export default About;
