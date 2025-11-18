import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold">BEAU MONDE</span>
              <span className="text-xs tracking-[0.3em] text-primary-foreground/80 uppercase">Builders</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Florida's premier custom luxury home builder, crafting bespoke residences with three decades of excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Palm Beach Office</h3>
            <address className="not-italic space-y-2 text-sm text-primary-foreground/80">
              <p>205 Worth Avenue, Suite 120</p>
              <p>Palm Beach, FL 33480</p>
              <p className="pt-2">
                <a href="tel:+15555551234" className="hover:text-primary-foreground transition-colors">
                  (555) 555-1234
                </a>
              </p>
              <p>
                <a href="mailto:info@beaumondebuilders.com" className="hover:text-primary-foreground transition-colors">
                  info@beaumondebuilders.com
                </a>
              </p>
            </address>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Beau Monde Builders. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
