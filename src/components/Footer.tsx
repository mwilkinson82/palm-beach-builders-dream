import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Linkedin, Mail, Phone, MapPin, Shield } from "lucide-react";
const fcmbLogo = "/images/fcmb-certification.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold tracking-tight text-white">
                BEAU MONDE
              </span>
              <span className="text-xs tracking-[0.4em] uppercase text-white/60">
                Builders
              </span>
            </div>
            <p className="text-white/60 font-light leading-relaxed max-w-sm">
              Creating Palm Beach's most distinguished estates through architectural excellence
              and uncompromising craftsmanship since 1994.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-accent transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm uppercase tracking-widest font-medium mb-6 text-white">Explore</h3>
            <ul className="space-y-4">
              {["About", "Process", "Portfolio", "Press", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase() === "portfolio" ? "projects" : item.toLowerCase()}`}
                    className="text-white/60 hover:text-accent transition-colors font-light text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm uppercase tracking-widest font-medium mb-6 text-white">Services</h3>
            <ul className="space-y-4">
              <li className="text-white/60 font-light text-sm">Custom Home Design</li>
              <li className="text-white/60 font-light text-sm">Architectural Planning</li>
              <li className="text-white/60 font-light text-sm">Luxury Construction</li>
              <li className="text-white/60 font-light text-sm">Project Management</li>
              <li className="text-white/60 font-light text-sm">Interior Design</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm uppercase tracking-widest font-medium mb-6 text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-white/60 font-light text-sm">
                  205 Worth Avenue, Suite 120<br />
                  Palm Beach, FL 33480
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:+15555551234" className="text-white/60 hover:text-accent transition-colors font-light text-sm">
                  (555) 555-1234
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:info@beaumondebuilders.com" className="text-white/60 hover:text-accent transition-colors font-light text-sm">
                  info@beaumondebuilders.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="pt-8 border-t border-white/10 mb-12">
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-sm uppercase tracking-widest font-medium text-white/60">Certified Excellence</h3>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {/* FCMB Badge */}
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:border-accent/50 transition-colors">
                <img 
                  src={fcmbLogo} 
                  alt="Florida Certified Master Builder" 
                  className="h-20 w-20 object-contain"
                />
              </div>
              
              {/* Additional Trust Badges */}
              <div className="flex items-center space-x-2 px-4 py-3 bg-white/5 rounded-lg border border-white/10">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-sm text-white/70 font-light">Fully Insured</span>
              </div>
              
              <div className="flex items-center space-x-2 px-4 py-3 bg-white/5 rounded-lg border border-white/10">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-sm text-white/70 font-light">Licensed Contractor</span>
              </div>
              
              <div className="flex items-center space-x-2 px-4 py-3 bg-white/5 rounded-lg border border-white/10">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-sm text-white/70 font-light">30+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/40 font-light">
            <p>&copy; {new Date().getFullYear()} Beau Monde Builders. All rights reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-accent transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-accent transition-colors">
                Terms
              </Link>
              <Link to="/sitemap" className="hover:text-accent transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
