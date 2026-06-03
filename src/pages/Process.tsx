import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { RevealAnimation } from "@/components/RevealAnimation";
import { SEO, BreadcrumbSchema, ServicePageSchema } from "@/components/SEO";
import { Helmet } from "react-helmet-async";

const phases = [
  {
    phase: "I",
    label: "Vision",
    summary: "Quiet conversations that shape the brief before a single line is drawn.",
    steps: [
      {
        number: "01",
        title: "Initial Consultation",
        description:
          "An unhurried dialogue to understand your life, your land, and the residence you imagine.",
      },
      {
        number: "02",
        title: "Site Selection & Feasibility",
        description:
          "A measured study of orientation, structure, and code — so the architecture begins on certain ground.",
      },
    ],
  },
  {
    phase: "II",
    label: "Design",
    summary: "World-class architects and a transparent budget, shaped in lockstep.",
    steps: [
      {
        number: "03",
        title: "Design & Planning",
        description:
          "Bespoke drawings developed with a select circle of architects and interior designers who share our standard.",
      },
      {
        number: "04",
        title: "Transparent Budgeting",
        description:
          "A complete scope and cost framework, presented openly — no surprises later in the build.",
      },
      {
        number: "05",
        title: "Permits & Approvals",
        description:
          "Town of Palm Beach review, HOA navigation, and every approval — handled discreetly on your behalf.",
      },
    ],
  },
  {
    phase: "III",
    label: "Build",
    summary: "Master-built construction, led personally, never delegated.",
    steps: [
      {
        number: "06",
        title: "Construction Excellence",
        description:
          "A single Florida Certified Master Builder on site, leading a trusted bench of trades through every phase.",
      },
      {
        number: "07",
        title: "Custom Finishes",
        description:
          "Stone, millwork, hardware, and finish work selected and installed with the patience of an atelier.",
      },
    ],
  },
  {
    phase: "IV",
    label: "Delivery",
    summary: "The final hand-off — measured, complete, and quietly enduring.",
    steps: [
      {
        number: "08",
        title: "Quality Assurance",
        description:
          "A meticulous walkthrough against our own standard, well above the building code minimum.",
      },
      {
        number: "09",
        title: "Seamless Transition",
        description:
          "White-glove move-in support and an ongoing relationship long after the keys are placed in your hand.",
      },
    ],
  },
];

const allSteps = phases.flatMap((p) => p.steps);

const ctaClass =
  "group relative inline-flex items-center justify-center bg-primary text-primary-foreground px-12 md:px-16 py-5 text-[10px] md:text-[11px] font-sans font-light tracking-[0.3em] uppercase ring-1 ring-inset ring-accent/30 hover:ring-accent/60 transition-all duration-500 hover:-translate-y-px hover:shadow-[0_18px_40px_-20px_hsl(var(--primary)/0.55)]";

// HowTo schema for the construction process
const processSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Beau Monde Builders 9-Step Custom Home Building Process",
  description: "A meticulously orchestrated journey from vision to reality, guided by decades of expertise in luxury homebuilding.",
  totalTime: "PT12M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: "Varies by project scope"
  },
  step: allSteps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.title,
    text: step.description
  }))
};

const Process = () => {
  return (
    <>
      <SEO 
        title="Our 9-Step Building Process"
        description="Discover Beau Monde Builders' meticulous 9-step custom home building process. From initial consultation to seamless move-in, we guide you through every phase."
        canonical="/process"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Process", url: "/process" }
      ]} />
      <ServicePageSchema 
        serviceName="Custom Luxury Home Building Process"
        description="Our comprehensive 9-step process ensures your vision becomes reality with precision and excellence."
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(processSchema)}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Editorial Hero */}
        <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 bg-background overflow-hidden">
          <div aria-hidden className="absolute inset-x-0 top-0 h-[60vh] bg-gradient-to-b from-[hsl(var(--seafoam))]/45 via-[hsl(var(--seafoam))]/15 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <RevealAnimation animation="fade-up">
              <div className="max-w-4xl">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="h-px w-12 bg-accent" />
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-accent font-sans font-light">
                    The Process
                  </span>
                </div>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.05] mb-10">
                  Nine measured steps,
                  <br />
                  <span className="italic text-muted-foreground">one quiet standard.</span>
                </h1>
                <p className="font-sans font-light text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  From the first private conversation to the final hand-off of the keys,
                  every Beau Monde residence is guided by the same unhurried, master-built
                  process — refined over three decades on Palm Beach island.
                </p>
              </div>
            </RevealAnimation>
          </div>
        </section>

        {/* Phases */}
        {phases.map((phase, phaseIndex) => (
          <section
            key={phase.phase}
            className={`py-20 md:py-28 border-t border-accent/15 ${phaseIndex % 2 === 1 ? "bg-[hsl(var(--seafoam))]/35" : ""}`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                <RevealAnimation animation="fade-up" className="lg:col-span-4 lg:sticky lg:top-32 self-start">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="h-px w-10 bg-accent" />
                    <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-sans font-light">
                      Phase {phase.phase}
                    </span>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl text-primary leading-[1.05] mb-6">
                    <span className="italic">{phase.label}</span>
                  </h2>
                  <p className="font-sans font-light text-base text-muted-foreground leading-relaxed max-w-sm">
                    {phase.summary}
                  </p>
                </RevealAnimation>

                <div className="lg:col-span-8">
                  {phase.steps.map((step, i) => (
                    <RevealAnimation key={step.number} animation="fade-up" delay={i * 100}>
                      <article className="group relative py-8 md:py-10 border-t border-accent/15 first:border-t-0">
                        <div className="flex items-baseline gap-6 md:gap-10">
                          <span className="font-display text-3xl md:text-4xl text-accent/70 leading-none shrink-0 w-12 md:w-14">
                            {step.number}
                          </span>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-display text-2xl md:text-3xl lg:text-[34px] text-primary leading-snug mb-3">
                              <span className="relative inline">
                                {step.title}
                                <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                              </span>
                            </h3>
                            <p className="font-sans font-light text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </article>
                    </RevealAnimation>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Closing CTA */}
        <section className="py-24 md:py-32 border-t border-accent/15">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealAnimation animation="fade-up">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <div className="h-px w-10 bg-accent" />
                  <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-sans font-light">
                    Begin
                  </span>
                  <div className="h-px w-10 bg-accent" />
                </div>
                <h2 className="font-display text-3xl md:text-5xl text-primary leading-[1.1] mb-8">
                  Begin your <span className="italic text-muted-foreground">residence.</span>
                </h2>
                <p className="font-sans font-light text-base md:text-lg text-muted-foreground leading-relaxed mb-12 max-w-xl mx-auto">
                  A short, private conversation is the right place to start. We'll listen
                  first, then walk you through how this process applies to your project.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link to="/contact" className={ctaClass}>
                    <span className="relative">
                      Talk to Beau Monde
                      <span className="pointer-events-none absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                    </span>
                  </Link>
                  <Link
                    to="/projects"
                    className="group inline-flex items-center text-[10px] md:text-xs uppercase tracking-[0.4em] font-sans font-light text-primary"
                  >
                    <span className="relative pb-1">
                      Find My Style
                      <span className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-accent/40 group-hover:bg-accent transition-colors duration-500" />
                    </span>
                    <span className="ml-3 text-accent">→</span>
                  </Link>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </section>

      <Footer />
      </div>
    </>
  );
};

export default Process;
