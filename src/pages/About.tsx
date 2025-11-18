import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ajImage from "@/assets/aj-hoover.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              About AJ & <span className="italic text-primary">Beau Monde Builders</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Under the leadership and vision of AJ Hoover, Beau Monde Builders has risen to become
              Florida's premier custom luxury home builder.
            </p>
          </div>
        </div>
      </section>

      {/* AJ's Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-slide-up">
              <img
                src={ajImage}
                alt="AJ Hoover, CEO of Beau Monde Builders"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                AJ Hoover
              </h2>
              <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">
                CEO, Beau Monde Builders
              </p>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Under the leadership and vision of AJ Hoover, Beau Monde Builders has risen to become
                  Florida's premier custom luxury home builder, renowned for excellence, craftsmanship,
                  and an unwavering commitment to client satisfaction. AJ Hoover's journey epitomizes
                  the entrepreneurial spirit and the realization of the American Dream.
                </p>
                
                <p>
                  Raised in rural Upstate New York in a single-parent household, AJ's work ethic was
                  honed early on. He cut his teeth in the construction industry by working hands-on
                  across nearly every trade, mastering each aspect with determination and precision.
                  His practical experience became the bedrock of his expertise and fueled his drive
                  to achieve more.
                </p>
                
                <p>
                  With a clear vision, AJ committed himself to establishing a brand that would elevate
                  the standards of custom luxury home building. Saving diligently, building credit, and
                  fostering relationships with the finest subcontractors in Florida, he took the leap
                  to earn his contractor's license, launching Beau Monde Builders.
                </p>
                
                <p>
                  Today, AJ remains personally involved in every project from start to finish, ensuring
                  that each home reflects the uncompromising quality and attention to detail that has
                  become synonymous with the Beau Monde Builders name.
                </p>
              </div>
              
              <div className="pt-6">
                <Button variant="luxury" size="lg" asChild>
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-primary-foreground/80">
              The principles that guide every project we undertake
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-serif font-bold">Excellence</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                We never compromise on quality, ensuring every detail meets the highest standards
                of craftsmanship and design.
              </p>
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-2xl font-serif font-bold">Integrity</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Transparency and honesty guide our relationships with clients, subcontractors,
                and partners throughout every phase.
              </p>
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-2xl font-serif font-bold">Innovation</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                We embrace cutting-edge technology and design trends to create homes that are
                both timeless and forward-thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-4">
              Our Team
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              The Experts of <span className="italic text-primary">Beau Monde Builders</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Building custom homes in Palm Beach requires someone with the necessary expertise.
              We have the best people in the game on our side.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <div className="aspect-square bg-muted rounded-lg mb-4" />
              <h3 className="text-2xl font-serif font-bold text-foreground">Melissa Rahal</h3>
              <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">
                Project Manager
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over 20 years of experience in construction, ensuring every project detail is executed flawlessly.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="aspect-square bg-muted rounded-lg mb-4" />
              <h3 className="text-2xl font-serif font-bold text-foreground">Michelle Williams</h3>
              <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">
                Office Manager/Financials
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over 20 years in accounting, specializing in residential construction financial management.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="aspect-square bg-muted rounded-lg mb-4" />
              <h3 className="text-2xl font-serif font-bold text-foreground">Linda Lucas</h3>
              <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">
                Project Manager
              </p>
              <p className="text-muted-foreground leading-relaxed">
                25+ years transforming blueprints into reality with unparalleled skill and commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
