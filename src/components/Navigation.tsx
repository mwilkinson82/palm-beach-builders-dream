import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border/60 shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="group">
            <div className="flex flex-col">
              <span className={`text-2xl md:text-[28px] font-wordmark tracking-tight leading-none transition-colors ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}>
                Beau Monde
              </span>
              <span className={`mt-1 text-[10px] tracking-[0.3em] uppercase font-light transition-colors ${
                isScrolled ? "text-muted-foreground" : "text-primary-foreground/70"
              }`}>
                Builders · Palm Beach
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/about" 
              className={`text-xs uppercase tracking-[0.25em] font-normal transition-all hover:text-accent ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              About
            </Link>
            <Link 
              to="/process" 
              className={`text-xs uppercase tracking-[0.25em] font-normal transition-all hover:text-accent ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Process
            </Link>
            <Link 
              to="/projects" 
              className={`text-xs uppercase tracking-[0.25em] font-normal transition-all hover:text-accent ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Your Style
            </Link>
            <Link 
              to="/renovations" 
              className={`text-xs uppercase tracking-[0.25em] font-normal transition-all hover:text-accent ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Renovations
            </Link>
            <Link 
              to="/contact" 
              className={`text-xs uppercase tracking-[0.25em] font-normal transition-all hover:text-accent ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant={isScrolled ? "default" : "outline"} 
              size="lg"
              className={`uppercase tracking-[0.25em] text-xs font-medium ${
                isScrolled 
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
              }`}
              asChild
            >
              <Link to="/contact">Talk to Beau Monde</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-8 space-y-6 bg-background/95 backdrop-blur-md border-t border-border/60 animate-fade-in px-2">
            <Link
              to="/"
              className="block text-xs uppercase tracking-[0.25em] text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-xs uppercase tracking-[0.25em] text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/process"
              className="block text-xs uppercase tracking-[0.25em] text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Process
            </Link>
            <Link
              to="/projects"
              className="block text-xs uppercase tracking-[0.25em] text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Your Style
            </Link>
            <Link
              to="/renovations"
              className="block text-xs uppercase tracking-[0.25em] text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Renovations
            </Link>
            <Link
              to="/contact"
              className="block text-xs uppercase tracking-[0.25em] text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4">
              <Button 
                variant="default"
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-[0.25em] text-xs font-medium"
                asChild
              >
                <Link to="/contact">Talk to Beau Monde</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
