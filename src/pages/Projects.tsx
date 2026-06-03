import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SEO, BreadcrumbSchema } from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import oceanfrontEstate from "@/assets/projects/oceanfront-estate.jpg";
import worthAvenueResidence from "@/assets/projects/worth-avenue-residence.jpg";
import intracoastalContemporary from "@/assets/projects/intracoastal-contemporary.jpg";
import mediterraneanVilla from "@/assets/projects/mediterranean-villa.jpg";
import modernMinimalist from "@/assets/projects/modern-minimalist.jpg";
import classicEstate from "@/assets/projects/classic-estate.jpg";
import bermudaColonial from "@/assets/projects/bermuda-colonial.jpg.asset.json";
import angloCaribbean from "@/assets/projects/anglo-caribbean.jpg.asset.json";
import transitional from "@/assets/projects/transitional.jpg.asset.json";

type Style = {
  name: string;
  descriptor: string;
  image?: string;
};

const STYLES: Style[] = [
  {
    name: "Oceanfront",
    descriptor:
      "Sun-bleached limestone, deep verandas, and the quiet authority of a house built to outlast the salt.",
    image: oceanfrontEstate,
  },
  {
    name: "Urban Classical",
    descriptor:
      "Palm Beach gentility in town clothes — symmetry, scaled cornices, and rooms that know how to host.",
    image: worthAvenueResidence,
  },
  {
    name: "Waterfront Contemporary",
    descriptor:
      "Glass framed in pale stone, set lightly against the Intracoastal, scaled for the boat at the dock.",
    image: intracoastalContemporary,
  },
  {
    name: "Mediterranean",
    descriptor:
      "Tile, terracotta, and shaded loggias — the old island idiom done with restraint and proportion.",
    image: mediterraneanVilla,
  },
  {
    name: "Modern Coastal",
    descriptor:
      "Quiet lines, ivory walls, and rooms that hand the view over to the water without competing.",
    image: modernMinimalist,
  },
  {
    name: "Traditional Estate",
    descriptor:
      "Hipped roofs, hand-set masonry, deep eaves — the kind of house that reads as inherited from the first day.",
    image: classicEstate,
  },
  {
    name: "Bermuda / British Colonial",
    descriptor:
      "White stucco, hipped tile, louvered shutters, deep verandas — the island idiom done with proportion and restraint.",
    image: bermudaColonial.url,
  },
  {
    name: "Anglo-Caribbean / West Indies",
    descriptor:
      "Pecky cypress, coral stone, plantation shutters — a quieter, more breeze-cooled coastal language.",
    image: angloCaribbean.url,
  },
  {
    name: "Transitional",
    descriptor:
      "Traditional bones, modern interiors — the way most Palm Beach houses live today.",
    image: transitional.url,
  },
  {
    name: "Regency / Georgian",
    descriptor:
      "Symmetry, fanlights, refined townhouse vocabulary in the Mizner lineage.",
  },
];

const TOTAL = STYLES.length + 1; // +1 for the "Yours." closer

const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Beau Monde Builders — Style Studies",
  description:
    "Ten design idioms — from Oceanfront to Regency — that shape Beau Monde's bespoke Palm Beach residences.",
  itemListElement: STYLES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Thing",
      name: s.name,
      description: s.descriptor,
    },
  })),
};

const Hero = () => (
  <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 border-b border-accent/20">
    <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="h-px w-10 bg-accent" />
        <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-accent">
          A Film of Styles
        </span>
        <span className="h-px w-10 bg-accent" />
      </div>
      <h1 className="font-display italic font-light text-primary text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight">
        Find Your Style.
      </h1>
      <p className="font-sans font-light text-base md:text-lg text-primary/75 max-w-2xl mx-auto mt-8 leading-relaxed">
        Ten aesthetic worlds we know intimately — and one that's yours alone. Find the one that
        already feels like home; we'll take it from there.
      </p>
    </div>
  </section>
);

const StylePanel = ({ s, index }: { s: Style; index: number }) => {
  const flipped = index % 2 === 1;
  return (
    <section className="snap-start min-h-screen flex items-center border-b border-accent/15">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-20 items-center py-20">
        <div
          className={`lg:col-span-3 ${flipped ? "lg:order-2" : "lg:order-1"}`}
        >
          <div className="aspect-[16/11] overflow-hidden shadow-[0_40px_80px_-30px_hsl(var(--primary)/0.35)]">
            {s.image ? (
              <img
                src={s.image}
                alt={s.name}
                loading={index < 1 ? "eager" : "lazy"}
                decoding="async"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-card border border-accent/30 flex flex-col items-center justify-center text-center px-6">
                <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent mb-3">
                  Plate Forthcoming
                </span>
                <span className="font-display italic font-light text-primary/40 text-3xl md:text-4xl">
                  {s.name}
                </span>
              </div>
            )}
          </div>
        </div>
        <div
          className={`lg:col-span-2 ${flipped ? "lg:order-1" : "lg:order-2"}`}
        >
          <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-accent mb-6">
            {String(index + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
          </p>
          <h2 className="font-display italic font-light text-primary text-5xl md:text-6xl lg:text-7xl leading-[1.02] mb-8">
            {s.name}
          </h2>
          <span className="block w-24 h-px bg-accent mb-8" />
          <p className="font-sans font-light text-base md:text-lg text-primary/75 leading-relaxed max-w-md">
            {s.descriptor}
          </p>
        </div>
      </div>
    </section>
  );
};

const YoursPanel = () => (
  <section className="snap-start min-h-screen flex items-center border-b border-accent/15">
    <div className="w-full max-w-3xl mx-auto px-6 text-center py-20">
      <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-accent mb-8">
        {String(TOTAL).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")} — One of One
      </p>
      <div className="border-y border-accent/40 py-14 md:py-20">
        <h2 className="font-display italic font-light text-primary text-6xl md:text-7xl lg:text-8xl leading-none mb-10">
          Yours.
        </h2>
        <span className="block w-16 h-px bg-accent mx-auto mb-10" />
        <p className="font-sans font-light text-base md:text-lg text-primary/75 leading-relaxed max-w-xl mx-auto">
          If none of these is quite it, that's the point. The most memorable Beau Monde houses
          begin with a vision no catalogue could hold.
        </p>
      </div>
    </div>
  </section>
);

const ClosingPlinth = () => (
  <section className="border-t border-accent/20 py-24 md:py-32">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <div className="flex items-center justify-center gap-3 mb-5">
        <span className="h-px w-8 bg-accent" />
        <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent">
          Found your style
        </span>
        <span className="h-px w-8 bg-accent" />
      </div>
      <h2 className="font-display italic font-light text-primary text-4xl md:text-5xl mb-10">
        Let's build the one you'll keep.
      </h2>
      <Button asChild size="lg" className="px-10">
        <Link to="/contact">Talk to Beau Monde</Link>
      </Button>
    </div>
  </section>
);

const Projects = () => (
  <>
    <SEO
      title="Find Your Style — Palm Beach Design Studies"
      description="Ten design idioms — Oceanfront, Mediterranean, Bermuda Colonial, Transitional and more — that shape Beau Monde's bespoke Palm Beach residences."
      canonical="/projects"
    />
    <BreadcrumbSchema items={[
      { name: "Home", url: "/" },
      { name: "Find Your Style", url: "/projects" }
    ]} />
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(projectsSchema)}
      </script>
    </Helmet>
    <div className="min-h-screen bg-background text-primary">
      <Navigation />
      <Hero />
      <div className="snap-y snap-mandatory">
        {STYLES.map((s, i) => (
          <StylePanel key={s.name} s={s} index={i} />
        ))}
        <YoursPanel />
      </div>
      <ClosingPlinth />
      <Footer />
    </div>
  </>
);

export default Projects;