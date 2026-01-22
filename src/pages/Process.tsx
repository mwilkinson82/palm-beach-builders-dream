import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RevealAnimation } from "@/components/RevealAnimation";

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "An intimate dialogue to understand your vision, lifestyle, and aspirations. This is where we begin crafting your dream into reality.",
  },
  {
    number: "02",
    title: "Site Selection & Feasibility",
    description: "Comprehensive analysis ensuring your chosen location aligns perfectly with your architectural vision and lifestyle requirements.",
  },
  {
    number: "03",
    title: "Design & Planning",
    description: "Collaboration with world-class architects and designers to develop bespoke plans that reflect your unique aesthetic sensibility.",
  },
  {
    number: "04",
    title: "Transparent Budgeting",
    description: "Detailed scope and cost analysis, ensuring complete clarity and confidence in your investment.",
  },
  {
    number: "05",
    title: "Permits & Approvals",
    description: "Seamless navigation of regulatory requirements, handled entirely by our experienced team.",
  },
  {
    number: "06",
    title: "Construction Excellence",
    description: "Meticulous execution by master craftsmen, with regular updates and quality assurance at every phase.",
  },
  {
    number: "07",
    title: "Custom Finishes",
    description: "Curated selection of premium materials, fixtures, and finishes that elevate your home to art.",
  },
  {
    number: "08",
    title: "Quality Assurance",
    description: "Thorough final walkthrough ensuring every detail meets our uncompromising standards of excellence.",
  },
  {
    number: "09",
    title: "Seamless Transition",
    description: "White-glove move-in support with ongoing commitment to your complete satisfaction.",
  },
];

const Process = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-background z-0" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-24 md:pt-32 pb-12 md:pb-20">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-accent font-light mb-4 md:mb-6">
              The Journey to Excellence
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-light text-foreground mb-6 md:mb-8 tracking-tight">
              Our <span className="font-serif italic">Process</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
              A meticulously orchestrated journey from vision to reality, guided by decades 
              of expertise in luxury homebuilding.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <RevealAnimation animation="luxury-reveal">
        <section className="py-16 md:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto space-y-16 md:space-y-32">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-start animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="lg:col-span-3">
                  <div className="text-6xl md:text-8xl lg:text-9xl font-display font-light text-accent/20">
                    {step.number}
                  </div>
                </div>
                
                <div className="lg:col-span-9 space-y-4 md:space-y-6 lg:pt-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-foreground">
                    {step.title}
                  </h3>
                  <div className="w-16 md:w-20 h-px bg-accent" />
                  <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </RevealAnimation>

      {/* CTA Section */}
      <RevealAnimation animation="fade-up" delay={100}>
        <section className="py-32 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIi8+PC9nPjwvc3ZnPg==')]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-display font-light tracking-tight">
              Begin Your Journey
            </h2>
            <p className="text-xl text-background/70 font-light leading-relaxed">
              Let us guide you through the creation of your bespoke Palm Beach residence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-accent text-accent hover:bg-accent hover:text-background transition-all duration-500"
                asChild
              >
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-background hover:text-accent transition-all duration-500"
                asChild
              >
                <Link to="/projects">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </RevealAnimation>

      <Footer />
    </div>
  );
};

export default Process;
