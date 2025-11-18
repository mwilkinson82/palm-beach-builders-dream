import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-primary">BEAU MONDE</span>
              <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Builders</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/process" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Process
            </Link>
            <Link to="/projects" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <Link to="/press" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Press
            </Link>
            <Link to="/social" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Social
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="luxury" size="lg" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-4 animate-fade-in">
            <Link
              to="/"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/process"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Process
            </Link>
            <Link
              to="/projects"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/press"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Press
            </Link>
            <Link
              to="/social"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Social
            </Link>
            <div className="pt-4">
              <Button variant="luxury" size="lg" className="w-full" asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
