import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Star, Lightbulb, ClipboardCheck, Heart } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80 z-10" />
        <img
          src={heroImage}
          alt="Luxury Palm Beach Custom Home"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <Star className="h-5 w-5 text-accent fill-accent" />
              <Star className="h-5 w-5 text-accent fill-accent" />
              <Star className="h-5 w-5 text-accent fill-accent" />
              <Star className="h-5 w-5 text-accent fill-accent" />
              <Star className="h-5 w-5 text-accent fill-accent" />
              <span className="text-primary-foreground/90 text-sm ml-2">50+ Customers Rated</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
              The Benchmark for{" "}
              <span className="italic text-accent">Bespoke Homebuilding</span> in Palm Beach
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              At Beau Monde Builders, we redefine custom homebuilding in Palm Beach and surrounding areas.
              With three decades of experience and an unwavering commitment to excellence, we bring clarity
              to your vision and perfection to its execution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button variant="secondary" size="xl" asChild>
                <Link to="/projects">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Discover the Key Features of Our
            </h2>
            <p className="text-2xl md:text-3xl font-serif italic text-accent">
              Custom Home Building Process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/15 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-6">
                  <Lightbulb className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary-foreground">
                  Transform Your Vision into Reality
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  Our design consultation ensures your ideas are seamlessly integrated into your dream home.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/15 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-6">
                  <ClipboardCheck className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary-foreground">
                  Comprehensive Project Management
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  We handle every detail, keeping your project on track and on budget.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/15 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-6">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary-foreground">
                  Post-Construction Support
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  Our commitment continues after construction, ensuring your home meets your expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Start Your <span className="italic text-accent">Dream Home</span> Journey With The Best
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to explore your custom home building options and schedule a consultation.
          </p>
          <Button variant="gold" size="xl" asChild>
            <Link to="/contact">Get In Touch Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
