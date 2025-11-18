import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-4">
              Our Portfolio
            </p>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Luxury Homes <span className="italic text-primary">Crafted with Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our collection of bespoke custom homes throughout Palm Beach and Florida,
              each one a testament to our commitment to architectural excellence and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-12 h-12 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            
            <h2 className="text-4xl font-serif font-bold text-foreground">
              Portfolio Coming Soon
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're currently curating our portfolio of exceptional custom homes. Check back soon
              to see our latest projects showcasing the finest in luxury homebuilding throughout
              Palm Beach and Florida.
            </p>
            
            <div className="pt-8">
              <Button variant="default" size="lg" className="bg-accent hover:bg-accent/90 text-black" asChild>
                <Link to="/contact">Discuss Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Temporary Placeholder Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-[4/3] bg-muted rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
