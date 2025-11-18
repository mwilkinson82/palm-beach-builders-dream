import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

const Social = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-4">
              Connect With Us
            </p>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Follow Our <span className="italic text-primary">Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Stay connected with Beau Monde Builders through our social media channels. Get the latest
              updates on our projects, design inspiration, and behind-the-scenes insights into luxury
              homebuilding in Palm Beach.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Instagram */}
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-8 text-white space-y-6 hover:scale-105 transition-transform duration-300">
              <Instagram className="h-12 w-12" />
              <div>
                <h3 className="text-3xl font-serif font-bold mb-2">Instagram</h3>
                <p className="text-white/90 mb-6">
                  Explore our latest projects, design inspiration, and luxury home showcases.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    Follow Us
                  </a>
                </Button>
              </div>
            </div>

            {/* Facebook */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white space-y-6 hover:scale-105 transition-transform duration-300">
              <Facebook className="h-12 w-12" />
              <div>
                <h3 className="text-3xl font-serif font-bold mb-2">Facebook</h3>
                <p className="text-white/90 mb-6">
                  Join our community and stay updated on news, events, and client testimonials.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    Like Our Page
                  </a>
                </Button>
              </div>
            </div>

            {/* YouTube */}
            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 text-white space-y-6 hover:scale-105 transition-transform duration-300">
              <Youtube className="h-12 w-12" />
              <div>
                <h3 className="text-3xl font-serif font-bold mb-2">YouTube</h3>
                <p className="text-white/90 mb-6">
                  Watch virtual tours, construction updates, and educational content about homebuilding.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    Subscribe
                  </a>
                </Button>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 text-white space-y-6 hover:scale-105 transition-transform duration-300">
              <Linkedin className="h-12 w-12" />
              <div>
                <h3 className="text-3xl font-serif font-bold mb-2">LinkedIn</h3>
                <p className="text-white/90 mb-6">
                  Connect professionally and learn about career opportunities with our team.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    Connect
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Placeholder */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Latest From Instagram
            </h2>
            <p className="text-muted-foreground">
              @beaumondebuilders
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square bg-muted rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Social;
