import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import oceanfrontEstate from "@/assets/projects/oceanfront-estate.jpg";
import worthAvenueResidence from "@/assets/projects/worth-avenue-residence.jpg";
import intracoastalContemporary from "@/assets/projects/intracoastal-contemporary.jpg";
import mediterraneanVilla from "@/assets/projects/mediterranean-villa.jpg";
import modernMinimalist from "@/assets/projects/modern-minimalist.jpg";
import classicEstate from "@/assets/projects/classic-estate.jpg";

type Style = {
  name: string;
  roman: string;
  descriptor: string;
  image: string;
};

const STYLES: Style[] = [
  {
    name: "Oceanfront",
    roman: "I",
    descriptor:
      "Sun-bleached limestone, deep verandas, and the quiet authority of a house built to outlast the salt.",
    image: oceanfrontEstate,
  },
  {
    name: "Urban Classical",
    roman: "II",
    descriptor:
      "Palm Beach gentility in town clothes — symmetry, scaled cornices, and rooms that know how to host.",
    image: worthAvenueResidence,
  },
  {
    name: "Waterfront Contemporary",
    roman: "III",
    descriptor:
      "Glass framed in pale stone, set lightly against the Intracoastal, scaled for the boat at the dock.",
    image: intracoastalContemporary,
  },
  {
    name: "Mediterranean",
    roman: "IV",
    descriptor:
      "Tile, terracotta, and shaded loggias — the old island idiom done with restraint and proportion.",
    image: mediterraneanVilla,
  },
  {
    name: "Modern Coastal",
    roman: "V",
    descriptor:
      "Quiet lines, ivory walls, and rooms that hand the view over to the water without competing.",
    image: modernMinimalist,
  },
  {
    name: "Traditional Estate",
    roman: "VI",
    descriptor:
      "Hipped roofs, hand-set masonry, deep eaves — the kind of house that reads as inherited from the first day.",
    image: classicEstate,
  },
];

type Variant = "A" | "B" | "C";

/* ---------------- Shared chrome ---------------- */

const Hero = ({ subtitle }: { subtitle: string }) => (
  <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 border-b border-accent/20">
    <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="h-px w-10 bg-accent" />
        <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-accent">
          {subtitle}
        </span>
        <span className="h-px w-10 bg-accent" />
      </div>
      <h1 className="font-display italic font-light text-primary text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight">
        Find Your Style.
      </h1>
      <p className="font-sans font-light text-base md:text-lg text-primary/75 max-w-2xl mx-auto mt-8 leading-relaxed">
        Six aesthetic worlds we know intimately. Find the one that already feels like yours —
        we'll take it from there.
      </p>
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

/* ---------------- A — Editorial Plate Book ---------------- */

const EditorialPlateBook = () => (
  <>
    <Hero subtitle="Vol. I — Style Studies" />
    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
      {STYLES.map((s, i) => {
        const flipped = i % 2 === 1;
        return (
          <article
            key={s.name}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center py-20 lg:py-28 border-b border-accent/15 last:border-b-0"
          >
            <div
              className={`lg:col-span-7 ${flipped ? "lg:order-2" : "lg:order-1"}`}
            >
              <div className="aspect-[4/5] overflow-hidden shadow-[0_30px_60px_-30px_rgba(15,42,61,0.3)]">
                <img
                  src={s.image}
                  alt={s.name}
                  loading={i < 2 ? "eager" : "lazy"}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div
              className={`lg:col-span-5 ${flipped ? "lg:order-1 lg:pr-8" : "lg:order-2 lg:pl-8"}`}
            >
              <div className="font-display italic text-7xl md:text-8xl text-accent/30 leading-none mb-6 select-none">
                {s.roman}
              </div>
              <span className="block w-16 h-px bg-accent mb-6" />
              <h3 className="font-display italic font-light text-primary text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6">
                {s.name}
              </h3>
              <p className="font-sans font-light text-[15px] md:text-base text-primary/75 leading-relaxed max-w-md">
                {s.descriptor}
              </p>
            </div>
          </article>
        );
      })}
    </div>
    <ClosingPlinth />
  </>
);

/* ---------------- B — Museum Wall ---------------- */

const MuseumPlate = ({
  s,
  aspect,
  priority,
}: {
  s: Style;
  aspect: string;
  priority?: boolean;
}) => (
  <div className="flex flex-col">
    <div className="border border-accent/30 p-3 bg-card shadow-[0_20px_40px_-20px_rgba(15,42,61,0.25)]">
      <div className={`${aspect} overflow-hidden`}>
        <img
          src={s.image}
          alt={s.name}
          loading={priority ? "eager" : "lazy"}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <div className="mt-5 pt-4 border-t border-accent/30">
      <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-accent mb-2">
        {s.name}
      </p>
      <p className="font-sans font-light text-[13px] text-primary/75 leading-relaxed">
        {s.descriptor}
      </p>
    </div>
  </div>
);

const MuseumWall = () => (
  <>
    <Hero subtitle="The Gallery — Style Studies" />
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Hand-placed asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-14">
          {/* Row 1: tall + (square stacked) */}
          <div className="md:col-span-7">
            <MuseumPlate s={STYLES[0]} aspect="aspect-[4/5]" priority />
          </div>
          <div className="md:col-span-5 md:pt-16">
            <MuseumPlate s={STYLES[1]} aspect="aspect-square" priority />
          </div>

          {/* Row 2: wide + tall */}
          <div className="md:col-span-5">
            <MuseumPlate s={STYLES[2]} aspect="aspect-[4/5]" />
          </div>
          <div className="md:col-span-7 md:pt-24">
            <MuseumPlate s={STYLES[3]} aspect="aspect-[5/4]" />
          </div>

          {/* Row 3: square + tall */}
          <div className="md:col-span-6">
            <MuseumPlate s={STYLES[4]} aspect="aspect-square" />
          </div>
          <div className="md:col-span-6 md:pt-12">
            <MuseumPlate s={STYLES[5]} aspect="aspect-[4/5]" />
          </div>
        </div>
      </div>
    </section>
    <ClosingPlinth />
  </>
);

/* ---------------- C — Cinematic Scroll ---------------- */

const CinematicScroll = () => (
  <>
    <Hero subtitle="A Film of Styles" />
    <div className="snap-y snap-mandatory">
      {STYLES.map((s, i) => {
        const flipped = i % 2 === 1;
        return (
          <section
            key={s.name}
            className="snap-start min-h-screen flex items-center border-b border-accent/15"
          >
            <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-20 items-center py-20">
              <div
                className={`lg:col-span-3 ${flipped ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="aspect-[16/11] overflow-hidden shadow-[0_40px_80px_-30px_rgba(15,42,61,0.35)]">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading={i < 1 ? "eager" : "lazy"}
                    className="w-full h-full object-cover will-change-transform"
                  />
                </div>
              </div>
              <div
                className={`lg:col-span-2 ${flipped ? "lg:order-1" : "lg:order-2"}`}
              >
                <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-accent mb-6">
                  {String(i + 1).padStart(2, "0")} / {String(STYLES.length).padStart(2, "0")}
                </p>
                <h3 className="font-display italic font-light text-primary text-6xl md:text-7xl lg:text-8xl leading-[1] mb-8">
                  {s.name}
                </h3>
                <span className="block w-24 h-px bg-accent mb-8" />
                <p className="font-sans font-light text-base md:text-lg text-primary/75 leading-relaxed max-w-md">
                  {s.descriptor}
                </p>
              </div>
            </div>
          </section>
        );
      })}
    </div>
    <ClosingPlinth />
  </>
);

/* ---------------- Switcher ---------------- */

const Switcher = ({
  value,
  onChange,
}: {
  value: Variant;
  onChange: (v: Variant) => void;
}) => {
  const opts: { key: Variant; label: string }[] = [
    { key: "A", label: "A · Editorial" },
    { key: "B", label: "B · Museum" },
    { key: "C", label: "C · Cinematic" },
  ];
  return (
    <div className="fixed top-24 right-6 z-[60] hidden md:flex flex-col gap-1 bg-background border border-accent/40 p-2 shadow-[0_20px_40px_-20px_rgba(15,42,61,0.35)]">
      <p className="font-sans text-[9px] tracking-[0.35em] uppercase text-accent text-center mb-1 px-2 pt-1">
        Direction
      </p>
      {opts.map((o) => {
        const active = value === o.key;
        return (
          <button
            key={o.key}
            onClick={() => onChange(o.key)}
            className={`font-sans text-[11px] tracking-[0.2em] uppercase px-4 py-2 transition-colors ${
              active
                ? "bg-primary text-background"
                : "text-primary hover:bg-card"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
};

/* ---------------- Page ---------------- */

const ProjectsPreview = () => {
  const [variant, setVariant] = useState<Variant>("A");

  return (
    <div className="min-h-screen bg-background text-primary">
      <Navigation />
      <Switcher value={variant} onChange={setVariant} />
      {variant === "A" && <EditorialPlateBook />}
      {variant === "B" && <MuseumWall />}
      {variant === "C" && <CinematicScroll />}
      <Footer />
    </div>
  );
};

export default ProjectsPreview;