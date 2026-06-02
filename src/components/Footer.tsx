import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Shield } from "lucide-react";
import fcmbLogo from "@/assets/fcmb-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-16 mb-12 md:mb-16">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-4 space-y-4 md:space-y-6">
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-display tracking-tight leading-none text-primary-foreground">
                Beau Monde
              </span>
              <span className="mt-1 text-xs tracking-[0.3em] uppercase text-primary-foreground/60">
                Builders · Palm Beach
              </span>
            </div>
            <p className="text-primary-foreground/65 font-light leading-relaxed max-w-sm">
              Creating Palm Beach's most distinguished estates through architectural excellence
              and uncompromising craftsmanship since 1994.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.3em] font-medium mb-6 text-primary-foreground">Explore</h3>
            <ul className="space-y-4">
              {[
                { label: "About", path: "/about" },
                { label: "Process", path: "/process" },
                { label: "Find My Style", path: "/projects" },
                { label: "Renovations", path: "/renovations" },
                { label: "Press", path: "/press" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-primary-foreground/65 hover:text-accent transition-colors font-light text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.3em] font-medium mb-6 text-primary-foreground">Services</h3>
            <ul className="space-y-4">
              <li className="text-primary-foreground/65 font-light text-sm">Custom Home Design</li>
              <li className="text-primary-foreground/65 font-light text-sm">Architectural Planning</li>
              <li className="text-primary-foreground/65 font-light text-sm">Luxury Construction</li>
              <li className="text-primary-foreground/65 font-light text-sm">Project Management</li>
              <li className="text-primary-foreground/65 font-light text-sm">Interior Design</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.3em] font-medium mb-6 text-primary-foreground">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-primary-foreground/65 font-light text-sm">
                  205 Worth Avenue, Suite 120<br />
                  Palm Beach, FL 33480
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:+15616468992" className="text-primary-foreground/65 hover:text-accent transition-colors font-light text-sm">
                  (561) 646-8992
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:ajhoover@mac.com" className="text-primary-foreground/65 hover:text-accent transition-colors font-light text-sm">
                  ajhoover@mac.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="pt-6 md:pt-8 border-t border-primary-foreground/10 mb-8 md:mb-12">
          <div className="flex flex-col items-center space-y-4 md:space-y-6">
            <h3 className="text-xs uppercase tracking-[0.3em] font-medium text-primary-foreground/60">Certified Excellence</h3>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              {/* FCMB Badge */}
              <div className="bg-primary-foreground/10 backdrop-blur-sm p-3 md:p-4 border border-primary-foreground/10 hover:border-accent/50 transition-colors">
                <img 
                  src={fcmbLogo} 
                  alt="Florida Certified Master Builder" 
                  className="h-14 w-14 md:h-20 md:w-20 object-contain"
                />
              </div>
              
              {/* Additional Trust Badges */}
              <div className="flex items-center space-x-2 px-3 md:px-4 py-2 md:py-3 bg-primary-foreground/5 border border-primary-foreground/10">
                <Shield className="h-4 w-4 md:h-5 md:w-5 text-accent flex-shrink-0" />
                <span className="text-xs md:text-sm text-primary-foreground/75 font-light whitespace-nowrap">Fully Insured</span>
              </div>
              
              <div className="flex items-center space-x-2 px-3 md:px-4 py-2 md:py-3 bg-primary-foreground/5 border border-primary-foreground/10">
                <Shield className="h-4 w-4 md:h-5 md:w-5 text-accent flex-shrink-0" />
                <span className="text-xs md:text-sm text-primary-foreground/75 font-light whitespace-nowrap">Licensed Contractor</span>
              </div>
              
              <div className="flex items-center space-x-2 px-3 md:px-4 py-2 md:py-3 bg-primary-foreground/5 border border-primary-foreground/10">
                <Shield className="h-4 w-4 md:h-5 md:w-5 text-accent flex-shrink-0" />
                <span className="text-xs md:text-sm text-primary-foreground/75 font-light whitespace-nowrap">30+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-primary-foreground/45 font-light gap-4">
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
