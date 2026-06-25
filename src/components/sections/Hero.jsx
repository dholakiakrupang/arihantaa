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
  { value: "Vertiv", label: "AUTHORISED PARTNER" },
  { value: "500+", label: "PROJECTS DELIVERED" },
  { value: "Pan India Presence", label: "ACTIVE ACROSS INDIA" },
];

// ─── Flagship Capability Pillars (Slideshow) ─────────────────────────────
const HERO_PILLARS = [
  {
    id: "vertiv-partner",
    index: "01",
    label: "VERTIV PARTNER",
    headline: "Authorised Channel Partnership",
    description:
      "Direct OEM warranty, factory-trained installation, and genuine spare parts access for all Vertiv products.",
    image: "/images/hero-vertiv-datacenter.png",
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

// ─── 4 Pillar Icons for Homepage ─────────────────────────────────────────
const HERO_PILLAR_ICONS = [
  {
    icon: "verified",
    label: "Vertiv Authorised Partner",
    link: "/partners/vertiv",
  },
  {
    icon: "inventory_2",
    label: "All Capital Goods",
    link: "/solutions/capital-goods",
  },
  { icon: "engineering", label: "EPC Solutions", link: "/solutions/epc-mepf" },
  {
    icon: "architecture",
    label: "MEPF Consultancy",
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
      <div className="relative max-w-[1440px] mx-auto w-full flex flex-col px-6 sm:px-8 lg:px-16">
      {/* ══════════════════════════════════════════════════
          RIGHT IMAGE PANEL — Absolutely positioned,
          covers full section height from very top (behind header)
      ══════════════════════════════════════════════════ */}
      <div className="relative w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-full mt-10 lg:mt-0 z-10 order-2 lg:order-none lg:absolute lg:top-0 lg:right-16 lg:w-[48%] overflow-hidden bg-[#080808]">
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
            className="absolute left-6 bottom-6 lg:left-10 lg:bottom-[100px] z-30"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
          >
            <Link
              to={currentPillar.link}
              className="block group/slide hover:opacity-90 transition-opacity"
            >
              <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                <div className="w-4 sm:w-5 h-px bg-accent group-hover/slide:w-7 transition-all duration-300" />
                <span className="font-label-caps text-[8px] sm:text-[9px] text-accent tracking-[0.22em] uppercase font-bold">
                  {currentPillar.label}
                </span>
              </div>
              <p className="font-headline text-[16px] sm:text-[20px] lg:text-[22px] font-black uppercase text-white leading-tight tracking-tight max-w-[200px] sm:max-w-[280px] group-hover/slide:text-accent transition-colors duration-300">
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
      <div className="relative z-10 flex flex-col flex-grow order-1 lg:order-none">
        {/* Header spacer */}
        <div className="min-h-[88px] md:min-h-[96px] shrink-0" />

        {/* Outer wrapper matches footer: max-w-[1440px] mx-auto px-8 md:px-16 */}
        <motion.div
          className="w-full flex flex-col flex-grow"
          style={{ y: textY }}
        >
          {/* Inner left column — 52% width, right padding creates gap before divider */}
          <div className="w-full lg:w-[52%] flex flex-col justify-center py-10 lg:py-16 flex-grow lg:pr-16">
            {/* Single unified content block */}
            <div className="flex flex-col gap-0">
              {/* Eyebrow */}
              <motion.div
                className="flex items-center gap-3 mb-5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
              >
                <div className="w-8 h-px bg-accent" />
                <span className="font-label-caps text-[10px] text-accent tracking-[0.28em] uppercase font-bold">
                  FROM GRID TO GREATNESS
                </span>
              </motion.div>

              {/* H1 — 2 lines: "Powering Critical" + "Infrastructure." */}
              <motion.h1
                className="font-headline font-black uppercase leading-[1.0] sm:leading-[0.92] tracking-tighter mb-7 text-[32px] sm:text-[44px] md:text-[56px] lg:text-[68px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.25, 1, 0.5, 1],
                  delay: 0.15,
                }}
              >
                <span className="block">
                  <span className="text-white">One Company.</span>
                </span>
                <span className="block">
                  <span className="text-white">Every </span>
                  <span className="text-accent">Solution</span>
                </span>
                <span className="block text-white/60 text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold mt-1">
                  Under One Roof.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="font-body text-base md:text-lg text-white/50 leading-relaxed font-light w-full mb-9"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Arihantaa Powertech is your single point of contact for all
                capital goods supply, EPC project execution, and MEPF
                consultancy — backed by an authorised Vertiv channel
                partnership.
              </motion.p>

              {/* Separator */}
              <motion.div
                className="w-full h-px bg-white/8 mb-9"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              />

              {/* CTA buttons — original style from git */}
              <motion.div
                className="flex flex-wrap items-center gap-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.65 }}
              >
                {/* Primary: filled orange button */}
                <Link to="/contact">
                  <Button
                    variant="primary"
                    theme="dark"
                    size="lg"
                    className="rounded-none shadow-sm text-[10px] tracking-[0.2em] font-bold"
                  >
                    GET A FREE CONSULTATION
                  </Button>
                </Link>

                {/* Ghost: animated text-slide link with arrow */}
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2.5 font-label-caps text-[10px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-300 group"
                >
                  <span className="relative overflow-hidden inline-block">
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">
                      EXPLORE PRODUCTS
                    </span>
                    <span className="absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300 text-accent">
                      EXPLORE PRODUCTS
                    </span>
                  </span>
                  <span className="material-symbols-outlined text-[24px] group-hover:translate-x-1 transition-transform duration-300">
                    arrow_forward
                  </span>
                </Link>
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
              className={`px-6 py-5 flex items-center gap-4 border-white/10 hover:bg-white/[0.02] transition-colors group cursor-pointer ${
                i < 2 ? "border-b border-white/10 md:border-b-0" : ""
              } ${i % 2 === 0 ? "border-r" : ""} ${
                i < 3 ? "md:border-r" : "md:border-r-0"
              }`}
            >
              <span className="material-symbols-outlined text-accent text-[28px] shrink-0 select-none group-hover:scale-110 transition-transform">
                {pillar.icon}
              </span>
              <div className="flex flex-col justify-center min-w-0">
                <span className="font-label-caps text-[10px] text-white/80 tracking-wider uppercase leading-tight font-black truncate group-hover:text-accent transition-colors">
                  {pillar.label}
                </span>
                <span className="font-label-caps text-[7.5px] text-white/40 tracking-widest uppercase mt-0.5 leading-none">
                  {i === 0
                    ? "Authorised Channel"
                    : i === 1
                      ? "Under One Roof"
                      : i === 2
                        ? "Turnkey Delivery"
                        : "Design & Engineering"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
