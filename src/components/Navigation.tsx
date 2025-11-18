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
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="group">
            <div className="flex flex-col">
              <span className={`text-2xl font-display font-bold tracking-tight transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}>
                BEAU MONDE
              </span>
              <span className={`text-[10px] tracking-[0.4em] uppercase transition-colors ${
                isScrolled ? "text-muted-foreground" : "text-white/70"
              }`}>
                Builders
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/about" 
              className={`text-sm uppercase tracking-widest font-light transition-all hover:text-accent ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              About
            </Link>
            <Link 
              to="/process" 
              className={`text-sm uppercase tracking-widest font-light transition-all hover:text-accent ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Process
            </Link>
            <Link 
              to="/projects" 
              className={`text-sm uppercase tracking-widest font-light transition-all hover:text-accent ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Portfolio
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm uppercase tracking-widest font-light transition-all hover:text-accent ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant={isScrolled ? "default" : "outline"} 
              size="lg"
              className={`uppercase tracking-widest text-xs font-medium ${
                isScrolled 
                  ? "bg-accent hover:bg-accent/90 text-black" 
                  : "border-white/30 text-white hover:bg-white hover:text-black"
              }`}
              asChild
            >
              <Link to="/contact">Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-8 space-y-6 bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
            <Link
              to="/"
              className="block text-sm uppercase tracking-widest font-light text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-sm uppercase tracking-widest font-light text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/process"
              className="block text-sm uppercase tracking-widest font-light text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Process
            </Link>
            <Link
              to="/projects"
              className="block text-sm uppercase tracking-widest font-light text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="block text-sm uppercase tracking-widest font-light text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4">
              <Button 
                variant="default"
                size="lg" 
                className="w-full bg-accent hover:bg-accent/90 text-black uppercase tracking-widest text-xs font-medium"
                asChild
              >
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
