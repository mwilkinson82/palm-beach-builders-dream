import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import oceanfrontEstate from "@/assets/projects/oceanfront-estate.jpg";
import worthAvenueResidence from "@/assets/projects/worth-avenue-residence.jpg";
import intracoastalContemporary from "@/assets/projects/intracoastal-contemporary.jpg";
import mediterraneanVilla from "@/assets/projects/mediterranean-villa.jpg";
import modernMinimalist from "@/assets/projects/modern-minimalist.jpg";
import classicEstate from "@/assets/projects/classic-estate.jpg";

const ProjectImage = ({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  // If the image comes from cache, onLoad may not fire reliably.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <>
      <img
        ref={imgRef}
        src={hasError ? "/placeholder.svg" : src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
          setIsLoaded(true);
        }}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {!isLoaded && (
        <Skeleton className="absolute inset-0 w-full h-full pointer-events-none" />
      )}
    </>
  );
};
const projects = [{
  id: 1,
  title: "Palm Beach Oceanfront Estate",
  location: "Palm Beach, FL",
  category: "Oceanfront",
  sqft: "12,500",
  bedrooms: 6,
  year: 2024,
  image: oceanfrontEstate
}, {
  id: 2,
  title: "Worth Avenue Residence",
  location: "Palm Beach, FL",
  category: "Urban Luxury",
  sqft: "8,200",
  bedrooms: 5,
  year: 2024,
  image: worthAvenueResidence
}, {
  id: 3,
  title: "Intracoastal Contemporary",
  location: "Palm Beach, FL",
  category: "Waterfront",
  sqft: "10,800",
  bedrooms: 5,
  year: 2023,
  image: intracoastalContemporary
}, {
  id: 4,
  title: "Mediterranean Villa",
  location: "Palm Beach, FL",
  category: "Estate",
  sqft: "15,000",
  bedrooms: 7,
  year: 2023,
  image: mediterraneanVilla
}, {
  id: 5,
  title: "Modern Minimalist Haven",
  location: "Palm Beach, FL",
  category: "Contemporary",
  sqft: "9,500",
  bedrooms: 4,
  year: 2024,
  image: modernMinimalist
}, {
  id: 6,
  title: "Classic Palm Beach Estate",
  location: "Palm Beach, FL",
  category: "Traditional",
  sqft: "11,200",
  bedrooms: 6,
  year: 2023,
  image: classicEstate
}];
const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Oceanfront", "Waterfront", "Estate", "Contemporary", "Traditional"];
  return <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-background z-0" />
        <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <p className="text-sm uppercase tracking-[0.3em] text-accent font-light mb-6">DESIGN & BUILD STYLE</p>
            <h1 className="text-6xl md:text-8xl font-display font-light text-foreground mb-8 tracking-tight">
              Find Your <span className="font-serif italic">Style</span>
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
              Explore our signature design styles below. Each represents the caliber of craftsmanship 
              we bring to every Beau Monde residence. Find the aesthetic that speaks to you, 
              and let's discuss bringing your dream home to life.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-12 border-y border-border/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map(category => <button key={category} onClick={() => setFilter(category)} className={`text-sm uppercase tracking-[0.2em] font-light transition-all duration-500 pb-1 ${filter === category ? "text-accent border-b border-accent" : "text-muted-foreground hover:text-foreground"}`}>
                {category}
              </button>)}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {projects.filter(project => filter === "All" || project.category === filter).map((project, index) => <div key={project.id} className="group animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                  <div className="aspect-[4/5] mb-6 relative overflow-hidden">
                    <ProjectImage src={project.image} alt={project.title} priority={index < 2} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 z-10">
                      <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black transition-all duration-500" asChild>
                        <Link to={`/projects/${project.id}`}>View Project</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-accent font-light">
                      {project.category}
                    </p>
                    <h3 className="text-3xl font-serif text-foreground group-hover:text-accent transition-colors duration-500">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground font-light">
                      <span>{project.sqft} SQ FT</span>
                      <span>•</span>
                      <span>{project.bedrooms} BEDROOMS</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIi8+PC9nPjwvc3ZnPg==')]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-display font-light tracking-tight">
              Found Your Style?
            </h2>
            <p className="text-xl text-background/70 font-light leading-relaxed">
              Whether you're drawn to one of these designs or have a unique vision of your own, 
              we're ready to craft your bespoke Palm Beach residence.
            </p>
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-background transition-all duration-500" asChild>
              <Link to="/contact">Talk to Beau Monde</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Projects;