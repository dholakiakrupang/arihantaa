import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

// ─── Technical Stats for Bottom Info Bar ──────────────────────────────────
const HERO_METRICS = [
  { value: "ISO 9001:2015", label: "CERTIFIED QUALITY" },
  { value: "Vertiv", label: "AUTHORIZED PARTNER" },
  { value: "500+", label: "PROJECTS DELIVERED" },
  { value: "Pan India Presence", label: "ACTIVE ACROSS INDIA" },
];

// ─── Flagship Capability Pillars (Slideshow) ─────────────────────────────
const HERO_PILLARS = [
  {
    id: "vertiv-partner",
    index: "01",
    label: "VERTIV PARTNER",
    headline: "Authorized Channel Partnership",
    description:
      "Direct OEM warranty, factory-trained installation, and genuine spare parts access for all Vertiv products.",
    image: "/images/project-data-center.png",
    link: "/partners/vertiv",
  },
  {
    id: "capital-goods",
    index: "02",
    label: "CAPITAL GOODS",
    headline: "All Products Under One Roof",
    description:
      "L&T TTA Panels, Lucy RMU, Lucy CSS, Vertiv UPS, switchgear, transformers — one purchase order, one contact.",
    image: "/images/hero-capital-goods.png",
    link: "/solutions/capital-goods",
  },
  {
    id: "epc-mepf",
    index: "03",
    label: "EPC + MEPF",
    headline: "Complete Project Solutions",
    description:
      "When your engineering consultant and EPC contractor are the same company — no gaps, no rework.",
    image: "/images/hero-epc-mepf.png",
    link: "/solutions/epc-mepf",
  },
];

// ─── 4 Pillar Tags for Homepage ─────────────────────────────────────────
const FOUR_PILLARS = [
  {
    icon: "bolt",
    label: "Electrical EPC",
    link: "/solutions/epc-mepf",
  },
  {
    icon: "inventory_2",
    label: "Capital Goods Trading",
    link: "/solutions/capital-goods",
  },
  {
    icon: "power",
    label: "Critical Power",
    link: "/partners/vertiv",
  },
  {
    icon: "architecture",
    label: "MEPF Consultancy",
    link: "/solutions/epc-mepf",
  },
];

// ─── Trust Indicators ───────────────────────────────────────────────────
const TRUST_INDICATORS = [
  "Vertiv Authorised Channel Partner",
  "L&T JV Partner",
  "Pan India Presence",
  "MEPF Certified",
];

// ─── Bottom Bar Pillar Icons ────────────────────────────────────────────
const HERO_PILLAR_ICONS = [
  {
    icon: "bolt",
    label: "Electrical EPC",
    sub: "Turnkey Delivery",
    link: "/solutions/epc-mepf",
  },
  {
    icon: "inventory_2",
    label: "Capital Goods Trading",
    sub: "Under One Roof",
    link: "/solutions/capital-goods",
  },
  {
    icon: "power",
    label: "Critical Power",
    sub: "Vertiv Partner",
    link: "/partners/vertiv",
  },
  {
    icon: "architecture",
    label: "MEPF Consultancy",
    sub: "Design & Engineering",
    link: "/solutions/epc-mepf",
  },
];

const SLIDE_DURATION = 5000; // ms per slide

export function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-advance slideshow + progress bar
  useEffect(() => {
    setProgress(0);
    const startTime = Date.now();

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setProgress(Math.min((elapsed / SLIDE_DURATION) * 100, 100));
    }, 30);

    const slideTimer = setTimeout(() => {
      setActiveIdx((prev) => (prev + 1) % HERO_PILLARS.length);
    }, SLIDE_DURATION);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(slideTimer);
    };
  }, [activeIdx]);

  const currentPillar = HERO_PILLARS[activeIdx];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#080808] overflow-hidden"
    >
      <div className="max-w-[1920px] mx-auto relative w-full flex flex-col lg:block">
      {/* ══════════════════════════════════════════════════
          RIGHT IMAGE PANEL — Absolutely positioned,
          covers full section height from very top (behind header)
      ══════════════════════════════════════════════════ */}
      <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-full mt-8 sm:mt-10 lg:mt-0 z-10 order-2 lg:order-none lg:absolute lg:top-0 lg:right-0 lg:w-[50%] overflow-hidden bg-[#080808]">
        {/* Slideshow images — crossfade */}
        <AnimatePresence mode="sync">
          <motion.div
            key={currentPillar.id}
            className="absolute inset-0 w-full h-full z-10"
            style={{ y: imgY }}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0, scale: 1.0 }}
            transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
          >
            <img
              src={currentPillar.image}
              alt={currentPillar.headline}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Left-edge gradient — blends into dark bg */}
            <div
              className="absolute inset-0 pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(to right, rgba(8,8,8,1) 0%, rgba(8,8,8,0.2) 30%, transparent 60%)",
              }}
            />
            {/* Bottom gradient — readability for label */}
            <div
              className="absolute inset-0 pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(to top, rgba(8,8,8,0.90) 0%, rgba(8,8,8,0.3) 28%, transparent 55%)",
              }}
            />
            {/* Top gradient — blends behind header */}
            <div
              className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(8,8,8,0.80) 0%, transparent 100%)",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* ── Slide label — bottom left of image, clears stats bar on desktop */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPillar.id + "-label"}
            className="absolute left-5 bottom-5 sm:left-6 sm:bottom-6 lg:left-10 lg:bottom-[100px] z-30"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
          >
            <Link
              to={currentPillar.link}
              className="block group/slide hover:opacity-90 transition-opacity"
            >
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5 md:mb-2">
                <div className="w-3 sm:w-4 md:w-5 h-px bg-accent group-hover/slide:w-7 transition-all duration-300" />
                <span className="font-label-caps text-[7.5px] sm:text-[8px] md:text-[9px] text-accent tracking-[0.22em] uppercase font-bold">
                  {currentPillar.label}
                </span>
              </div>
              <p className="font-headline text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] font-black uppercase text-white leading-tight tracking-tight max-w-[180px] sm:max-w-[220px] md:max-w-[280px] group-hover/slide:text-accent transition-colors duration-300">
                {currentPillar.headline}
              </p>
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* ── Slide counter — bottom right */}
        <div className="hidden lg:block absolute bottom-[100px] right-10 z-30 flex flex-col items-end gap-3">
          {/* Number */}
          <AnimatePresence mode="wait">
            <motion.span
              key={activeIdx}
              className="font-headline font-black text-[42px] leading-none text-white/10 select-none"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {currentPillar.index}
            </motion.span>
          </AnimatePresence>

          {/* Dot indicators */}
          <div className="flex flex-col gap-1.5">
            {HERO_PILLARS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className="group relative flex items-center gap-2 cursor-pointer"
                aria-label={`Go to slide ${i + 1}`}
              >
                <div
                  className="h-[2px] transition-all duration-400 rounded-full overflow-hidden bg-white/15"
                  style={{ width: i === activeIdx ? "28px" : "14px" }}
                >
                  {i === activeIdx && (
                    <div
                      className="h-full bg-accent origin-left"
                      style={{ width: `${progress}%`, transition: "none" }}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          LEFT CONTENT — aligned to footer container
      ══════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full flex flex-col px-5 sm:px-8 lg:px-16 order-1 lg:order-none">
        {/* Header spacer */}
        <div className="min-h-[72px] sm:min-h-[80px] md:min-h-[96px] shrink-0" />

        {/* Outer wrapper matches footer: max-w-[1440px] mx-auto px-8 md:px-16 */}
        <motion.div
          className="w-full flex flex-col flex-grow"
          style={{ y: textY }}
        >
          {/* Inner left column — Strictly lg:w-[48%] so it NEVER overlaps the right 50% image panel */}
          <div className="w-full lg:w-[48%] xl:w-[48%] flex flex-col justify-center py-8 sm:py-10 lg:py-14 xl:py-16 flex-grow lg:pr-4 xl:pr-6">
            {/* Single unified content block */}
            <div className="flex flex-col gap-0">
              {/* Eyebrow */}
              <motion.div
                className="flex items-center gap-2.5 sm:gap-3 mb-3.5 sm:mb-4 lg:mb-5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
              >
                <div className="w-6 sm:w-8 h-px bg-accent" />
                <span className="font-label-caps text-[9px] sm:text-[10px] text-accent tracking-[0.22em] sm:tracking-[0.28em] uppercase font-bold">
                  FROM GRID TO GREATNESS
                </span>
              </motion.div>

              {/* H1 — Exactly 2 lines: "ONE PARTNER." + "COMPLETE EPC SOLUTIONS." */}
              <motion.h1
                className="font-headline font-black uppercase leading-[1.05] sm:leading-[0.98] md:leading-[0.94] tracking-tighter mb-4 sm:mb-5 md:mb-6 text-[28px] sm:text-[38px] md:text-[46px] lg:text-[50px] xl:text-[58px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.25, 1, 0.5, 1],
                  delay: 0.15,
                }}
              >
                <span className="block text-white">One Partner.</span>
                <span className="block text-accent">Complete EPC Solutions.</span>
              </motion.h1>

              {/* Four Pillar Tags — Strictly 1 single line inside 48% width without banner overlap */}
              <motion.div
                className="flex flex-wrap lg:flex-nowrap items-center gap-1 sm:gap-1.5 lg:gap-1.5 xl:gap-2 mb-5 sm:mb-6 lg:mb-7"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {FOUR_PILLARS.map((pillar, i) => (
                  <Link
                    key={i}
                    to={pillar.link}
                    className="group inline-flex items-center gap-1 sm:gap-1.5 bg-white/[0.04] border border-white/10 hover:border-accent/40 hover:bg-accent/[0.06] px-2 sm:px-2.5 lg:px-2 xl:px-3 py-1.5 transition-all duration-300 whitespace-nowrap shrink-0"
                  >
                    <span className="material-symbols-outlined text-accent text-[14px] sm:text-[15px] lg:text-[15px] xl:text-[16px] group-hover:scale-110 transition-transform duration-300">
                      {pillar.icon}
                    </span>
                    <span className="font-label-caps text-[7.5px] sm:text-[8px] lg:text-[7.5px] xl:text-[8.5px] text-white/80 tracking-[0.04em] sm:tracking-[0.06em] xl:tracking-[0.08em] uppercase font-bold group-hover:text-white transition-colors duration-300">
                      {pillar.label}
                    </span>
                  </Link>
                ))}
              </motion.div>

              {/* Description */}
              <motion.p
                className="font-body text-[13px] sm:text-[14.5px] md:text-[15px] text-white/55 leading-relaxed font-light w-full mb-5 sm:mb-6"
                style={{ lineHeight: 1.6 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Arihantaa Powertech delivers reliable Engineering, Procurement, MEPF Consultancy, and supply solutions through strategic partnerships with leading global OEMs. We help industries execute projects with confidence — from concept to commissioning.
              </motion.p>

              {/* Separator */}
              <motion.div
                className="w-full h-px bg-white/8 mb-5 sm:mb-6"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              />

              {/* CTA buttons */}
              <motion.div
                className="flex flex-wrap items-center gap-3.5 sm:gap-4 lg:gap-5 mb-5 sm:mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.65 }}
              >
                {/* Primary: filled orange button — Explore Our Services */}
                <Link to="/services">
                  <Button
                    variant="primary"
                    theme="dark"
                    size="lg"
                    className="rounded-none shadow-sm text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.2em] font-bold"
                  >
                    EXPLORE OUR SERVICES
                  </Button>
                </Link>

                {/* Ghost: animated text-slide link with arrow — Contact Us */}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 sm:gap-2.5 font-label-caps text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-300 group"
                >
                  <span className="relative overflow-hidden inline-block">
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">
                      CONTACT US
                    </span>
                    <span className="absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300 text-accent">
                      CONTACT US
                    </span>
                  </span>
                  <span className="material-symbols-outlined text-[20px] sm:text-[24px] group-hover:translate-x-1 transition-transform duration-300">
                    arrow_forward
                  </span>
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                {TRUST_INDICATORS.map((indicator, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 font-label-caps text-[7px] sm:text-[8px] text-white/30 tracking-[0.12em] uppercase"
                  >
                    <span className="material-symbols-outlined text-accent/40 text-[12px] sm:text-[14px]">
                      verified
                    </span>
                    {indicator}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      </div>

      {/* ── Bottom Stats Bar */}
      <motion.div
        className="w-full border-t border-white/10 bg-[#080808]/95 backdrop-blur-md shrink-0 relative z-30 order-3 lg:order-none"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.95 }}
      >
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4">
          {HERO_PILLAR_ICONS.map((pillar, i) => (
            <Link
              key={i}
              to={pillar.link}
              className={`px-3 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 flex items-center gap-2.5 sm:gap-3 md:gap-4 border-white/10 hover:bg-white/[0.02] transition-colors group cursor-pointer ${
                i < 2 ? "border-b border-white/10 md:border-b-0" : ""
              } ${i % 2 === 0 ? "border-r" : ""} ${
                i < 3 ? "md:border-r" : "md:border-r-0"
              }`}
            >
              <span className="material-symbols-outlined text-accent text-[20px] sm:text-[24px] md:text-[28px] shrink-0 select-none group-hover:scale-110 transition-transform">
                {pillar.icon}
              </span>
              <div className="flex flex-col justify-center min-w-0">
                <span className="font-label-caps text-[7.5px] sm:text-[9px] md:text-[10px] text-white/80 tracking-wider uppercase leading-snug font-black group-hover:text-accent transition-colors">
                  {pillar.label}
                </span>
                <span className="font-label-caps text-[6.5px] sm:text-[7px] md:text-[7.5px] text-white/40 tracking-widest uppercase mt-0.5 leading-none block">
                  {pillar.sub}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
