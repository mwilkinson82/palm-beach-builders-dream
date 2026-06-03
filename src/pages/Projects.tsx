import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import HTMLFlipBook from "react-pageflip";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SEO, BreadcrumbSchema } from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import oceanfront from "@/assets/projects/oceanfront.jpg.asset.json";
import urbanClassical from "@/assets/projects/urban-classical.jpg.asset.json";
import waterfrontContemporary from "@/assets/projects/waterfront-contemporary.jpg.asset.json";
import mediterranean from "@/assets/projects/mediterranean.jpg.asset.json";
import modernCoastal from "@/assets/projects/modern-coastal.jpg.asset.json";
import traditionalEstate from "@/assets/projects/traditional-estate.jpg.asset.json";
import bermudaColonial from "@/assets/projects/bermuda-colonial.jpg.asset.json";
import angloCaribbean from "@/assets/projects/anglo-caribbean.jpg.asset.json";
import transitional from "@/assets/projects/transitional.jpg.asset.json";
import regencyGeorgian from "@/assets/projects/regency-georgian.jpg.asset.json";

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
    image: oceanfront.url,
  },
  {
    name: "Urban Classical",
    descriptor:
      "Palm Beach gentility in town clothes — symmetry, scaled cornices, and rooms that know how to host.",
    image: urbanClassical.url,
  },
  {
    name: "Waterfront Contemporary",
    descriptor:
      "Glass framed in pale stone, set lightly against the Intracoastal, scaled for the boat at the dock.",
    image: waterfrontContemporary.url,
  },
  {
    name: "Mediterranean",
    descriptor:
      "Tile, terracotta, and shaded loggias — the old island idiom done with restraint and proportion.",
    image: mediterranean.url,
  },
  {
    name: "Modern Coastal",
    descriptor:
      "Quiet lines, ivory walls, and rooms that hand the view over to the water without competing.",
    image: modernCoastal.url,
  },
  {
    name: "Traditional Estate",
    descriptor:
      "Hipped roofs, hand-set masonry, deep eaves — the kind of house that reads as inherited from the first day.",
    image: traditionalEstate.url,
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
    image: regencyGeorgian.url,
  },
];

const TOTAL = STYLES.length + 1; // +1 for the "Yours." closer

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

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

// ---------- Reveal variants ----------

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};
const fadeImg = {
  hidden: { opacity: 0, scale: 1.04 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.95, ease: EASE } },
};
const drawX = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.6, ease: EASE } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.18 } },
};

// ---------- Page wrapper (forwardRef for react-pageflip) ----------

type PageProps = {
  children: React.ReactNode;
  visible: boolean;
  hardCover?: boolean;
};

const Page = forwardRef<HTMLDivElement, PageProps>(
  ({ children, visible, hardCover }, ref) => (
    <div
      ref={ref}
      className="bg-background overflow-hidden"
      data-density={hardCover ? "hard" : "soft"}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={visible ? "show" : "hidden"}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  )
);
Page.displayName = "Page";

// ---------- Plate compositions ----------

const CoverPlate = () => (
  <div className="w-full h-full flex flex-col items-center justify-center text-center px-8 sm:px-12 py-12 bg-card border border-accent/30">
    <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
      <span className="h-px w-8 bg-accent" />
      <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent">
        A Film of Styles
      </span>
      <span className="h-px w-8 bg-accent" />
    </motion.div>
    <motion.h1
      variants={fadeUp}
      className="font-display italic font-light text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight"
    >
      Find Your Style.
    </motion.h1>
    <motion.span variants={drawX} className="block w-16 h-px bg-accent mt-8 mb-8 origin-center" />
    <motion.p
      variants={fadeUp}
      className="font-sans font-light text-sm md:text-base text-primary/75 leading-relaxed max-w-md"
    >
      Ten aesthetic worlds we know intimately — and one that's yours alone.
      Turn the page.
    </motion.p>
    <motion.p
      variants={fadeUp}
      className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent mt-12"
    >
      Turn →
    </motion.p>
  </div>
);

const StylePlate = ({ s, index }: { s: Style; index: number }) => (
  <div className="w-full h-full flex flex-col p-5 sm:p-8 lg:p-10">
    <motion.p
      variants={fadeUp}
      className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent"
    >
      {String(index + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
    </motion.p>
    <motion.div
      variants={fadeImg}
      className="mt-4 sm:mt-6 aspect-[16/11] overflow-hidden shadow-[0_24px_60px_-30px_hsl(var(--primary)/0.4)]"
    >
      {s.image ? (
        <img
          src={s.image}
          alt={s.name}
          loading={index < 2 ? "eager" : "lazy"}
          decoding="async"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-card border border-accent/30 flex items-center justify-center">
          <span className="font-display italic font-light text-primary/40 text-2xl">
            {s.name}
          </span>
        </div>
      )}
    </motion.div>
    <motion.h2
      variants={fadeUp}
      className="font-display italic font-light text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.05] mt-5 sm:mt-6"
    >
      {s.name}
    </motion.h2>
    <motion.span
      variants={drawX}
      className="block w-14 h-px bg-accent mt-3 sm:mt-4 origin-left"
    />
    <motion.p
      variants={fadeUp}
      className="font-sans font-light text-[13px] sm:text-sm md:text-base text-primary/75 leading-relaxed mt-3 sm:mt-4 max-w-md"
    >
      {s.descriptor}
    </motion.p>
    <motion.div variants={fadeUp} className="mt-auto pt-5 sm:pt-6">
      <Link
        to={`/contact?style=${slugify(s.name)}`}
        className="group inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.3em] uppercase text-accent"
      >
        <span className="relative">
          Build in this idiom
          <span className="absolute left-0 -bottom-1 h-px w-full bg-accent origin-right scale-x-0 transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
        </span>
        <span aria-hidden>⟶</span>
      </Link>
    </motion.div>
  </div>
);

const YoursPlate = ({ onRestart }: { onRestart: () => void }) => (
  <div className="w-full h-full flex flex-col items-center justify-center text-center px-6 sm:px-10 py-10 bg-card">
    <motion.p
      variants={fadeUp}
      className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent mb-8"
    >
      {String(TOTAL).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")} — One of One
    </motion.p>
    <motion.span variants={drawX} className="block w-full h-px bg-accent origin-center" />
    <div className="py-10 sm:py-14">
      <motion.h2
        variants={fadeUp}
        className="font-display italic font-light text-primary text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none"
      >
        Yours.
      </motion.h2>
      <motion.span
        variants={drawX}
        className="block w-16 h-px bg-accent mx-auto my-8 origin-center"
      />
      <motion.p
        variants={fadeUp}
        className="font-sans font-light text-sm md:text-base text-primary/75 leading-relaxed max-w-md mx-auto"
      >
        If none of these is quite it, that's the point. The most memorable Beau
        Monde houses begin with a vision no catalogue could hold.
      </motion.p>
      <motion.div variants={fadeUp} className="mt-10">
        <Button asChild size="lg" className="px-10">
          <Link to="/contact">Talk to Beau Monde</Link>
        </Button>
      </motion.div>
      <motion.button
        variants={fadeUp}
        onClick={onRestart}
        className="group mt-6 inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.3em] uppercase text-accent"
      >
        <span aria-hidden>←</span>
        <span className="relative">
          Browse the ten idioms again
          <span className="absolute left-0 -bottom-1 h-px w-full bg-accent origin-right scale-x-0 transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
        </span>
      </motion.button>
    </div>
    <motion.span variants={drawX} className="block w-full h-px bg-accent origin-center" />
  </div>
);

// ---------- Flip-book shell ----------

const Book = HTMLFlipBook as unknown as React.ForwardRefExoticComponent<any>;

const FlipBookView = () => {
  const bookRef = useRef<any>(null);
  const [vp, setVp] = useState({ w: 1200, h: 800, portrait: false });
  const [page, setPage] = useState(0);

  useEffect(() => {
    const recompute = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setVp({ w, h, portrait: w < 1024 });
    };
    recompute();
    window.addEventListener("resize", recompute);
    return () => window.removeEventListener("resize", recompute);
  }, []);

  const totalPages = STYLES.length + 2; // cover + idioms + yours

  const visibleSet = useMemo(() => {
    if (vp.portrait) return new Set([page]);
    // desktop spread with showCover: cover (0) sits alone on the right;
    // subsequent spreads pair odd-left + even-right (1+2, 3+4, …).
    if (page === 0) return new Set([0]);
    const left = page % 2 === 1 ? page : page - 1;
    return new Set([left, left + 1]);
  }, [page, vp.portrait]);

  const handleRestart = () => {
    bookRef.current?.pageFlip?.()?.turnToPage(0);
  };

  // base ratio ~ 3:4 portrait page
  const baseW = 600;
  const baseH = 820;

  return (
    <div className="relative w-full" style={{ height: "calc(100dvh - 6rem)" }}>
      <div className="absolute inset-0 flex items-center justify-center px-2 sm:px-6">
        <Book
          ref={bookRef}
          width={baseW}
          height={baseH}
          size="stretch"
          minWidth={300}
          maxWidth={720}
          minHeight={420}
          maxHeight={980}
          maxShadowOpacity={0.35}
          drawShadow
          showCover
          usePortrait={vp.portrait}
          flippingTime={900}
          mobileScrollSupport={false}
          className="bm-flipbook"
          style={{}}
          startPage={0}
          onFlip={(e: any) => setPage(e.data)}
        >
          <Page visible={visibleSet.has(0)} hardCover>
            <CoverPlate />
          </Page>
          {STYLES.map((s, i) => (
            <Page key={s.name} visible={visibleSet.has(i + 1)}>
              <StylePlate s={s} index={i} />
            </Page>
          ))}
          <Page visible={visibleSet.has(STYLES.length + 1)} hardCover>
            <YoursPlate onRestart={handleRestart} />
          </Page>
        </Book>
      </div>

      {/* Page counter */}
      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
        <span className="inline-block bg-background/90 border border-accent/40 px-4 py-1.5 font-sans text-[10px] tracking-[0.3em] uppercase text-primary/70">
          {String(page + 1).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
        </span>
      </div>

      {/* Nav arrows */}
      <button
        onClick={() => bookRef.current?.pageFlip?.()?.flipPrev()}
        aria-label="Previous page"
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center text-primary/50 hover:text-accent transition-colors"
      >
        <span className="font-display text-3xl">‹</span>
      </button>
      <button
        onClick={() => bookRef.current?.pageFlip?.()?.flipNext()}
        aria-label="Next page"
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center text-primary/50 hover:text-accent transition-colors"
      >
        <span className="font-display text-3xl">›</span>
      </button>
    </div>
  );
};

// ---------- Scroll fallback (reduced-motion + SEO surface) ----------

const ScrollFallback = () => (
  <div className="pt-32 pb-24">
    <header className="max-w-4xl mx-auto px-6 text-center mb-16">
      <h1 className="font-display italic font-light text-primary text-5xl md:text-7xl leading-[1.02]">
        Find Your Style.
      </h1>
      <p className="font-sans font-light text-base md:text-lg text-primary/75 max-w-2xl mx-auto mt-6 leading-relaxed">
        Ten aesthetic worlds we know intimately — and one that's yours alone.
      </p>
    </header>
    <div className="max-w-4xl mx-auto px-6 space-y-20">
      {STYLES.map((s, i) => (
        <article key={s.name}>
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent mb-4">
            {String(i + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
          </p>
          {s.image && (
            <img
              src={s.image}
              alt={s.name}
              loading="lazy"
              decoding="async"
              className="w-full aspect-[16/11] object-cover mb-6"
            />
          )}
          <h2 className="font-display italic font-light text-primary text-4xl md:text-5xl mb-4">
            {s.name}
          </h2>
          <span className="block w-16 h-px bg-accent mb-4" />
          <p className="font-sans font-light text-base text-primary/75 leading-relaxed max-w-2xl">
            {s.descriptor}
          </p>
        </article>
      ))}
      <article className="text-center border-y border-accent/40 py-16">
        <h2 className="font-display italic font-light text-primary text-6xl md:text-8xl mb-8">
          Yours.
        </h2>
        <p className="font-sans font-light text-base text-primary/75 leading-relaxed max-w-md mx-auto mb-8">
          The most memorable Beau Monde houses begin with a vision no catalogue
          could hold.
        </p>
        <Button asChild size="lg" className="px-10">
          <Link to="/contact">Talk to Beau Monde</Link>
        </Button>
      </article>
    </div>
  </div>
);

const Projects = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <SEO
        title="Find Your Style — Palm Beach Design Studies"
        description="Ten design idioms — Oceanfront, Mediterranean, Bermuda Colonial, Transitional and more — that shape Beau Monde's bespoke Palm Beach residences."
        canonical="/projects"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Find Your Style", url: "/projects" },
        ]}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(projectsSchema)}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background text-primary">
        <Navigation />
        <main className="pt-20 md:pt-24">
          {prefersReducedMotion ? <ScrollFallback /> : <FlipBookView />}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Projects;