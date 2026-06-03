import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RevealAnimation } from "@/components/RevealAnimation";
import { SEO } from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import { RenovationsHero } from "@/components/RenovationsHero";
import renovationMoment from "@/assets/projects/renovation-hero.jpg.asset.json";
import fcmbLogo from "@/assets/fcmb-logo.png";
import nahbBadge from "@/assets/nahb-master-building-professional.png.asset.json";
import renovationBefore from "@/assets/renovation-before.jpg.asset.json";
import renovationAfter from "@/assets/renovation-after.jpg.asset.json";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

const services = [
  {
    title: "Luxury Condo Transformations",
    description:
      "Complete reimagining of high-rise and beachfront condominiums in Palm Beach and West Palm Beach's most prestigious buildings.",
    keywords: ["Full gut renovations", "Oceanfront units", "Penthouse redesigns", "Building compliance"],
  },
  {
    title: "Whole-Home Remodels",
    description:
      "Comprehensive estate renovations that breathe new life into existing properties while preserving their architectural heritage.",
    keywords: ["Historic preservation", "Modern upgrades", "Structural enhancements", "Smart-home integration"],
  },
  {
    title: "Gourmet Kitchen Design",
    description:
      "World-class culinary spaces with premium appliances, custom cabinetry, and timeless detailing suited to Palm Beach entertaining.",
    keywords: ["Custom cabinetry", "Premium appliances", "Island configurations", "Butler's pantries"],
  },
  {
    title: "Spa-Inspired Bathrooms",
    description:
      "Quiet retreats with imported stone, heated floors, and bespoke fixtures that rival the finest resorts on the island.",
    keywords: ["Imported marble", "Steam showers", "Soaking tubs", "Radiant heating"],
  },
  {
    title: "Interior Redesign",
    description:
      "Complete interior transformations including millwork, lighting design, and custom finishes attuned to your personal aesthetic.",
    keywords: ["Custom millwork", "Lighting design", "Flooring upgrades", "Ceiling treatments"],
  },
  {
    title: "Turnkey Condo Packages",
    description:
      "Move-in-ready luxury transformations for newly acquired condominiums, timed precisely with your closing.",
    keywords: ["Pre-purchase planning", "Expedited timelines", "Furniture coordination", "White-glove delivery"],
  },
];

const hoaCapabilities = [
  "Expert navigation of condo association requirements",
  "Coordination with building management",
  "Noise and schedule compliance",
  "Material delivery logistics",
  "Neighbor-conscious construction practices",
];

const propertyTypes = [
  "Luxury Condos",
  "Oceanfront Condos",
  "Penthouses",
  "Historic Estates",
  "Beachfront Residences",
  "Private Residences",
];

const areasServed = ["Palm Beach Island", "West Palm Beach", "Jupiter Island", "Singer Island"];

const processSteps = [
  "Design Consultation",
  "Permit Management",
  "Quality Construction",
  "Final Walkthrough",
];

const fcmbCredentials = [
  { k: "Experience", v: "Three decades of Palm Beach building" },
  { k: "Record", v: "Clean regulatory and disciplinary history" },
  { k: "References", v: "Verified by clients and subcontractors" },
  { k: "Warranty", v: "Written, minimum one-year guarantee" },
];

const ctaClass =
  "group relative inline-flex items-center justify-center bg-primary text-primary-foreground px-12 md:px-16 py-5 text-[10px] md:text-[11px] font-sans font-light tracking-[0.3em] uppercase ring-1 ring-inset ring-accent/30 hover:ring-accent/60 transition-all duration-500 hover:-translate-y-px hover:shadow-[0_18px_40px_-20px_hsl(var(--primary)/0.55)]";

const Renovations = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://bmbpalmbeach.com/" },
      { "@type": "ListItem", position: 2, name: "Renovations", item: "https://bmbpalmbeach.com/renovations" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Luxury Renovation",
    provider: { "@id": "https://bmbpalmbeach.com/#localbusiness" },
    areaServed: areasServed.map((a) => ({ "@type": "Place", name: a })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Renovation Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.description },
      })),
    },
  };

  return (
    <>
      <SEO
        title="Luxury Renovations | Beau Monde Builders Palm Beach"
        canonical="/renovations"
        description="Palm Beach's premier luxury renovation specialists. Discreet, full-service condominium and estate renovations by Florida Certified Master Builders."
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        <RenovationsHero />

        {/* Cinematic renovation moment */}
        <section className="relative">
          <RevealAnimation animation="fade-up">
            <figure className="relative w-full overflow-hidden">
              <img
                src={renovationMoment.url}
                alt="A reimagined Palm Beach interior by Beau Monde Builders"
                className="w-full h-[60vh] md:h-[80vh] object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent" />
              <figcaption className="absolute bottom-6 left-4 sm:left-8 lg:left-16 flex items-center space-x-3 text-white/85">
                <div className="h-px w-8 md:w-12 bg-accent" />
                <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-sans font-light">
                  A residence, reimagined
                </span>
              </figcaption>
            </figure>
          </RevealAnimation>
        </section>

        {/* Before / After slider */}
        <section className="py-24 md:py-32 border-t border-accent/15">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <RevealAnimation animation="fade-up">
              <div className="flex items-center space-x-3 mb-10 md:mb-14">
                <div className="h-px w-10 bg-accent" />
                <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-accent font-sans font-light">
                  A residence, transformed
                </span>
              </div>
            </RevealAnimation>

            <RevealAnimation animation="fade-up" delay={120}>
              <BeforeAfterSlider
                beforeSrc={renovationBefore.url}
                afterSrc={renovationAfter.url}
                beforeAlt="Original residence before Beau Monde renovation"
                afterAlt="Same residence after Beau Monde renovation"
              />
            </RevealAnimation>

            <RevealAnimation animation="fade-up" delay={220}>
              <div className="mt-10 md:mt-12 flex flex-col md:flex-row md:items-end gap-8 md:gap-12 border-t border-primary/10 pt-8">
                <div>
                  <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent mb-2">
                    Project Scope
                  </p>
                  <p className="font-display text-xl md:text-2xl text-primary leading-snug">
                    Full Architectural Overhaul
                  </p>
                </div>
                <div>
                  <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent mb-2">
                    Building Type
                  </p>
                  <p className="font-display text-xl md:text-2xl text-primary leading-snug">
                    Oceanfront Residence
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </section>

        {/* Text hero */}
        <section className="pt-20 pb-20 md:pt-28 md:pb-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealAnimation animation="fade-up">
              <div className="max-w-4xl">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="h-px w-12 bg-accent" />
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-accent font-sans font-light">
                    Renovations
                  </span>
                </div>

                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.05] mb-10">
                  <span className="italic">Reimagine</span> your
                  <br />
                  Palm Beach residence.
                </h1>

                <p className="font-sans font-light text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12">
                  Three decades of discreet, master-built craftsmanship — now applied to the
                  residences you already love. Every renovation is led personally, scheduled
                  around your life, and finished to the same standard as our ground-up estates.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <Link to="/contact" className={ctaClass}>
                    <span className="relative">
                      Talk to Beau Monde
                      <span className="pointer-events-none absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                    </span>
                  </Link>
                  <Link
                    to="/process"
                    className="group inline-flex items-center text-[10px] md:text-xs uppercase tracking-[0.4em] font-sans font-light text-primary"
                  >
                    <span className="relative pb-1">
                      View Our Process
                      <span className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-accent/40 group-hover:bg-accent transition-colors duration-500" />
                    </span>
                    <span className="ml-3 text-accent">→</span>
                  </Link>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </section>

        {/* Editorial intro */}
        <section className="py-20 md:py-28 border-t border-accent/15">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <RevealAnimation animation="fade-up" className="lg:col-span-7">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-px w-10 bg-accent" />
                  <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-sans font-light">
                    The Standard
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary leading-[1.1] mb-8">
                  Palm Beach's finest
                  <br />
                  <span className="italic text-muted-foreground">renovation specialists.</span>
                </h2>
                <p className="font-sans font-light text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  The same Florida Certified Master Builder excellence that produces Palm
                  Beach's most distinguished new estates is available, quietly, for the
                  residences our clients already own.
                </p>
                <p className="font-sans font-light text-base md:text-lg text-muted-foreground leading-relaxed">
                  Whether you've acquired a prestigious condominium on the island or you're
                  ready to transform your existing home, Beau Monde brings three decades of
                  expertise — and absolute discretion — to every project.
                </p>
              </RevealAnimation>

              <RevealAnimation animation="fade-up" delay={150} className="lg:col-span-5">
                <div className="border-l border-accent/30 pl-8 space-y-8">
                  {[
                    { label: "Credentials", value: "Florida Certified Master Builder" },
                    { label: "Experience", value: "Three decades of Palm Beach building" },
                    { label: "Office", value: "205 Worth Avenue, Palm Beach" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="text-[10px] uppercase tracking-[0.4em] text-accent font-sans font-light mb-2">
                        {item.label}
                      </div>
                      <div className="font-display text-xl md:text-2xl text-primary leading-snug">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </RevealAnimation>
            </div>
          </div>
        </section>

        {/* FCMB credentials band */}
        <section className="py-20 md:py-28 border-t border-accent/15 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <RevealAnimation animation="fade-up">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <span className="h-px w-8 bg-accent" />
                <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-accent">
                  Heritage &amp; Accreditation
                </span>
                <span className="h-px w-8 bg-accent" />
              </div>
            </RevealAnimation>
            <RevealAnimation animation="fade-up" delay={100}>
              <h2 className="font-display italic text-3xl md:text-4xl lg:text-5xl text-primary text-center leading-[1.05] mb-12 md:mb-14">
                Master-builder credentials.
              </h2>
            </RevealAnimation>

            <RevealAnimation animation="fade-up" delay={160}>
              <div className="flex flex-col items-center gap-1.5 mb-12 md:mb-14">
                <div className="w-full h-px bg-accent/25" />
                <div className="w-full h-[3px] bg-accent" />
                <div className="w-full h-px bg-accent/25" />
              </div>
            </RevealAnimation>

            <RevealAnimation animation="scale-in" delay={220}>
              <div className="flex justify-center mb-12 md:mb-14">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-10 md:gap-12 w-full max-w-2xl">
                  <div className="flex flex-col items-center gap-5">
                    <div className="relative">
                      <span aria-hidden className="absolute inset-0 translate-x-2 translate-y-2 border border-accent/25" />
                      <div className="relative bg-card border border-accent/25 p-5 shadow-[0_20px_40px_-18px_rgba(15,42,61,0.3)]">
                        <img
                          src={fcmbLogo}
                          alt="Florida Certified Master Builder"
                          className="h-24 md:h-28 w-auto object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary text-center max-w-[200px] leading-snug">
                      Florida Certified Master Builder
                    </span>
                  </div>

                  <span aria-hidden className="hidden md:block h-24 w-px bg-accent/40" />

                  <div className="flex flex-col items-center gap-5">
                    <div className="relative">
                      <span aria-hidden className="absolute inset-0 translate-x-2 translate-y-2 border border-accent/25" />
                      <div className="relative bg-card border border-accent/25 p-5 shadow-[0_20px_40px_-18px_rgba(15,42,61,0.3)]">
                        <img
                          src={nahbBadge.url}
                          alt="NAHB Certified Master Building Professional"
                          className="h-24 md:h-28 w-auto object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary text-center max-w-[200px] leading-snug">
                      NAHB Certified Master Building Professional
                    </span>
                  </div>
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation animation="fade-up" delay={300}>
              <p className="font-sans font-light text-[15px] md:text-base leading-relaxed text-primary/80 text-center max-w-2xl mx-auto mb-12 md:mb-14">
                Two voluntary credentials awarded only to builders with the experience, ethics, and record
                to back them — together they represent the pinnacle of professional standing in both Florida
                and national residential construction.
              </p>
            </RevealAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 mb-12 md:mb-14">
              {fcmbCredentials.map((row, i) => (
                <RevealAnimation key={row.k} animation="fade-up" delay={360 + i * 60}>
                  <div className="flex items-baseline justify-between gap-4 border-b border-accent/25 pb-2.5">
                    <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent shrink-0">
                      {row.k}
                    </span>
                    <span className="font-sans font-light text-[13px] text-primary/85 text-right">
                      {row.v}
                    </span>
                  </div>
                </RevealAnimation>
              ))}
            </div>

            <RevealAnimation animation="fade-up" delay={560}>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-full h-px bg-accent/25" />
                <div className="w-full h-[3px] bg-accent" />
                <div className="w-full h-px bg-accent/25" />
              </div>
            </RevealAnimation>
          </div>
        </section>

        {/* Services — editorial list */}
        <section className="py-20 md:py-28 border-t border-accent/15">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealAnimation animation="fade-up">
              <div className="max-w-3xl mb-16 md:mb-20">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-px w-10 bg-accent" />
                  <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-sans font-light">
                    Full-Service Renovations
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary leading-[1.1]">
                  A complete
                  <br />
                  <span className="italic text-muted-foreground">range of work.</span>
                </h2>
              </div>
            </RevealAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
              {services.map((service, index) => (
                <RevealAnimation
                  key={service.title}
                  animation="fade-up"
                  delay={(index % 2) * 100}
                >
                  <article className="group py-10 border-t border-accent/15">
                    <div className="flex items-baseline gap-6 mb-5">
                      <span className="font-sans font-light text-[10px] tracking-[0.4em] text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl text-primary leading-snug">
                        {service.title}
                      </h3>
                    </div>
                    <p className="font-sans font-light text-base text-muted-foreground leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <div className="font-sans font-light text-[11px] uppercase tracking-[0.25em] text-primary/60">
                      {service.keywords.join(" · ")}
                    </div>
                  </article>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Condo expertise — single navy band */}
        <section className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <RevealAnimation animation="fade-up">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-px w-10 bg-accent" />
                  <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-sans font-light">
                    Condo Expertise
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground leading-[1.1] mb-8">
                  Palm Beach's premier
                  <br />
                  <span className="italic text-primary-foreground/70">condo specialists.</span>
                </h2>
                <p className="font-sans font-light text-base md:text-lg text-primary-foreground/70 leading-relaxed mb-10 max-w-xl">
                  Renovating in a luxury condominium asks for a specific kind of expertise. We
                  understand building regulations, work seamlessly with associations, and manage
                  the logistics of high-rise construction without ever compromising the standard.
                </p>

                <ul className="space-y-0">
                  {hoaCapabilities.map((item) => (
                    <li
                      key={item}
                      className="py-4 border-t border-primary-foreground/10 font-sans font-light text-base text-primary-foreground/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </RevealAnimation>

              <RevealAnimation animation="fade-up" delay={150}>
                <div className="border border-accent/25 p-10 md:p-12 space-y-10">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.4em] text-accent font-sans font-light mb-5">
                      Property Types
                    </div>
                    <ul className="grid grid-cols-2 gap-y-2 font-sans font-light text-sm text-primary-foreground/85">
                      {propertyTypes.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-primary-foreground/10 pt-10">
                    <div className="text-[10px] uppercase tracking-[0.4em] text-accent font-sans font-light mb-5">
                      Areas We Serve
                    </div>
                    <ul className="grid grid-cols-2 gap-y-2 font-sans font-light text-sm text-primary-foreground/85">
                      {areasServed.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                    <div className="font-sans font-light italic text-xs text-primary-foreground/50 mt-3">
                      And surrounding areas.
                    </div>
                  </div>

                  <div className="border-t border-primary-foreground/10 pt-10">
                    <div className="text-[10px] uppercase tracking-[0.4em] text-accent font-sans font-light mb-5">
                      Our Process
                    </div>
                    <ol className="space-y-3">
                      {processSteps.map((step, i) => (
                        <li
                          key={step}
                          className="flex items-baseline gap-4 font-sans font-light text-sm text-primary-foreground/85"
                        >
                          <span className="text-accent text-[10px] tracking-[0.3em]">
                            0{i + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-24 md:py-32">
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
                  Ready to <span className="italic text-muted-foreground">begin?</span>
                </h2>
                <p className="font-sans font-light text-base md:text-lg text-muted-foreground leading-relaxed mb-12 max-w-xl mx-auto">
                  A short conversation is the best way to understand the work. We'll listen
                  first, then walk you through what's possible in your residence.
                </p>
                <Link to="/contact" className={ctaClass}>
                  <span className="relative">
                    Talk to Beau Monde
                    <span className="pointer-events-none absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                  </span>
                </Link>
              </div>
            </RevealAnimation>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Renovations;
