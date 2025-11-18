import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Newspaper, Award, TrendingUp } from "lucide-react";

const Press = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-4">
              In The Media
            </p>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Press & <span className="italic text-primary">Recognition</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Beau Monde Builders continues to receive recognition from industry leaders and media outlets
              for our commitment to excellence in luxury custom homebuilding.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Recognition */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center space-y-4 p-8 bg-muted/30 rounded-lg">
                <Award className="h-12 w-12 text-accent mx-auto" />
                <h3 className="text-2xl font-serif font-bold text-foreground">Industry Awards</h3>
                <p className="text-muted-foreground">
                  Recognized for excellence in custom homebuilding
                </p>
              </div>

              <div className="text-center space-y-4 p-8 bg-muted/30 rounded-lg">
                <Newspaper className="h-12 w-12 text-accent mx-auto" />
                <h3 className="text-2xl font-serif font-bold text-foreground">Media Features</h3>
                <p className="text-muted-foreground">
                  Featured in leading publications and media outlets
                </p>
              </div>

              <div className="text-center space-y-4 p-8 bg-muted/30 rounded-lg">
                <TrendingUp className="h-12 w-12 text-accent mx-auto" />
                <h3 className="text-2xl font-serif font-bold text-foreground">Industry Leadership</h3>
                <p className="text-muted-foreground">
                  Setting standards in luxury homebuilding
                </p>
              </div>
            </div>

            {/* Coming Soon */}
            <div className="text-center space-y-6 py-16">
              <h2 className="text-4xl font-serif font-bold text-foreground">
                Press Coverage Coming Soon
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're currently compiling our latest press features and industry recognition.
                Stay tuned for updates on our media appearances and awards.
              </p>
              <div className="pt-8">
                <Button variant="luxury" size="lg" asChild>
                  <Link to="/contact">Contact Press Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Inquiries */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Media Inquiries</h2>
            <p className="text-xl text-primary-foreground/80">
              For press inquiries, interviews, or media requests, please contact our communications team.
            </p>
            <div className="pt-4">
              <a
                href="mailto:press@beaumondebuilders.com"
                className="text-accent hover:text-accent/80 transition-colors text-lg font-semibold"
              >
                press@beaumondebuilders.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Press;
