import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, MapPin, Pencil, FileCheck, Building, Hammer, Palette, CheckCircle, Home } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "The journey begins with an in-depth consultation to understand your vision, lifestyle, and specific needs for your custom luxury home. This is where the Beau Monde Builders team listens, guides, and helps you bring your dream home ideas to life.",
    icon: Users,
  },
  {
    number: "02",
    title: "Site Selection & Feasibility Analysis",
    description: "Whether you have a plot of land or need assistance in selecting one, Beau Monde Builders conducts a comprehensive feasibility analysis. This ensures the chosen site aligns with your vision and meets all requirements for building your custom home.",
    icon: MapPin,
  },
  {
    number: "03",
    title: "Design & Planning Phase",
    description: "Collaborating with top architects and designers, Beau Monde Builders develops detailed architectural and interior plans. During this phase, clients are engaged in every decision to ensure each feature and space reflects their unique style and preferences.",
    icon: Pencil,
  },
  {
    number: "04",
    title: "Budgeting & Contract Finalization",
    description: "After finalizing the design, Beau Monde Builders provides a transparent, detailed scope of work, contract specifications and cost of construction. This ensures clients understand all costs and scope associated with the project.",
    icon: FileCheck,
  },
  {
    number: "05",
    title: "Permits & Approvals",
    description: "Navigating the complexities of permits and regulatory approvals can be daunting. Beau Monde Builders handles all necessary paperwork and coordinates with local authorities to secure the required approvals.",
    icon: Building,
  },
  {
    number: "06",
    title: "Construction Phase",
    description: "The actual building process begins, managed by experienced project managers and superintendents. Clients can expect regular updates, site visits, and quality checks to ensure every detail meets Beau Monde Builders' high standards.",
    icon: Hammer,
  },
  {
    number: "07",
    title: "Interior Design & Custom Finishes",
    description: "As construction progresses, Beau Monde Builders works with you to select custom finishes, fixtures, and interior designs. Each choice is tailored to reflect your style, ensuring that every element aligns with your vision.",
    icon: Palette,
  },
  {
    number: "08",
    title: "Final Walkthrough & Quality Assurance",
    description: "Once construction is complete, Beau Monde Builders conducts a thorough walkthrough with the client. Any final adjustments are made to ensure the home meets all expectations for quality and craftsmanship.",
    icon: CheckCircle,
  },
  {
    number: "09",
    title: "Move-In & Post-Construction Support",
    description: "After final approvals, it's time for the big move! Beau Monde Builders' commitment doesn't end at completion; we provide ongoing support for workmanship and manufacturer warranties, ensuring complete satisfaction with your new home.",
    icon: Home,
  },
];

const Process = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-4">
              How We Build Your Dream Home
            </p>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              The <span className="italic text-primary">Beau Monde Builders</span> Home Building Journey
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              As trusted homebuilders in Palm Beach, we guide you through every step of the custom
              home-building process—from site selection to design and budgeting—ensuring your new home
              reflects your unique style and meets our high standards of quality.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start gap-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full flex-shrink-0">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <span className="text-5xl font-serif font-bold text-muted-foreground/30">
                      {step.number}
                    </span>
                  </div>
                  
                  <div className="lg:col-span-9 space-y-4">
                    <h3 className="text-3xl font-serif font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and how we can bring your dream home to life in Palm Beach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button variant="secondary" size="xl" asChild>
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Process;
