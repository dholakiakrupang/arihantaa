import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

// ─── Technical Stats for Bottom Info Bar ──────────────────────────────────
const HERO_METRICS = [
  { value: 'ISO 9001:2015', label: 'CERTIFIED QUALITY' },
  { value: '₹315 CR+', label: 'ACTIVE WORK IN HAND' },
  { value: '10,000+', label: 'INSTALLATIONS DELIVERED' },
  { value: '9 STATES', label: 'ACTIVE PRESENCE' }
];

// ─── Flagship Capability Pillars (Slideshow) ─────────────────────────────
const HERO_PILLARS = [
  {
    id: 'critical-power',
    index: '01',
    label: 'CRITICAL POWER',
    headline: 'Modular UPS & Grid Systems',
    description: 'Tier III & IV compliant setups featuring active-active N+1 redundancy, designed for zero downtime.',
    image: '/images/project-data-center.png',
  },
  {
    id: 'precision-cooling',
    index: '02',
    label: 'THERMAL FLUX',
    headline: 'High-Density Liquid Cooling',
    description: 'Advanced liquid cooling solutions designed to regulate ultra-high density server rows and minimize PUE.',
    image: '/images/project-industrial.png',
  },
  {
    id: 'active-telemetry',
    index: '03',
    label: 'ACTIVE TELEMETRY',
    headline: '24/7/365 Real-Time NOC',
    description: 'Active monitoring of over 1,400+ operational nodes with automated predictive warning triggers.',
    image: '/images/philosophy-rigor.png',
  }
];

const SLIDE_DURATION = 5000; // ms per slide

export function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '6%']);
  const imgY  = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

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
      setActiveIdx(prev => (prev + 1) % HERO_PILLARS.length);
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
      className="relative w-full bg-[#080808] overflow-hidden flex flex-col"
      style={{ minHeight: '100svh' }}
    >
      {/* ══════════════════════════════════════════════════
          RIGHT IMAGE PANEL — Absolutely positioned,
          covers full section height from very top (behind header)
      ══════════════════════════════════════════════════ */}
      <div className="hidden lg:block absolute top-0 right-0 w-[48%] h-full z-0 overflow-hidden">
        {/* Slideshow images — crossfade */}
        <AnimatePresence mode="sync">
          <motion.img
            key={currentPillar.id}
            src={currentPillar.image}
            alt={currentPillar.headline}
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ y: imgY }}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0, scale: 1.0 }}
            transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
          />
        </AnimatePresence>

        {/* Left-edge gradient — blends into dark bg */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to right, rgba(8,8,8,0.75) 0%, rgba(8,8,8,0.2) 30%, transparent 60%)'
          }}
        />
        {/* Bottom gradient — readability for label */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to top, rgba(8,8,8,0.90) 0%, rgba(8,8,8,0.3) 28%, transparent 55%)'
          }}
        />
        {/* Top gradient — blends behind header */}
        <div
          className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to bottom, rgba(8,8,8,0.80) 0%, transparent 100%)'
          }}
        />

        {/* ── Slide label — bottom left of image, clears stats bar */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPillar.id + '-label'}
            className="absolute left-10 z-20"
            style={{ bottom: 'calc(72px + 28px)' }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-px bg-accent" />
              <span className="font-label-caps text-[9px] text-accent tracking-[0.22em] uppercase font-bold">
                {currentPillar.label}
              </span>
            </div>
            <p className="font-headline text-[22px] font-black uppercase text-white leading-tight tracking-tight max-w-[280px]">
              {currentPillar.headline}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* ── Slide counter — top right */}
        <div className="absolute top-8 right-8 z-20 flex flex-col items-end gap-3">
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
                  style={{ width: i === activeIdx ? '28px' : '14px' }}
                >
                  {i === activeIdx && (
                    <div
                      className="h-full bg-accent origin-left"
                      style={{ width: `${progress}%`, transition: 'none' }}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Vertical divider line */}
      <div
        aria-hidden
        className="hidden lg:block absolute top-0 left-[52%] w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent z-20 pointer-events-none"
      />

      {/* ══════════════════════════════════════════════════
          LEFT CONTENT — aligned to footer container
      ══════════════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Header spacer */}
        <div className="min-h-[88px] md:min-h-[96px] shrink-0" />

        {/* Outer wrapper matches footer: max-w-[1440px] mx-auto px-8 md:px-16 */}
        <motion.div
          className="w-full flex flex-col flex-1"
          style={{ y: textY }}
        >
          <div className="max-w-[1440px] mx-auto w-full flex flex-col flex-1 px-8 md:px-16">
            {/* Inner left column — 52% width, right padding creates gap before divider */}
            <div className="w-full lg:w-[52%] flex flex-col justify-center py-10 lg:py-16 flex-1 lg:pr-16">

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
                    ESTD. 1995 | SYSTEM INTEGRATION
                  </span>
                </motion.div>

                {/* H1 — 2 lines: "Powering Critical" + "Infrastructure." */}
                <motion.h1
                  className="font-headline font-black uppercase leading-[0.92] tracking-tighter mb-7"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
                >
                  {/* Line 1: Powering + Critical on same line */}
                  <span className="block" style={{ fontSize: 'clamp(36px, 4.2vw, 68px)' }}>
                    <span className="text-white">Powering </span>
                    <span className="text-accent">Critical</span>
                  </span>
                  {/* Line 2: Infrastructure. */}
                  <span className="block text-white" style={{ fontSize: 'clamp(36px, 4.2vw, 68px)' }}>
                    Infrastructure.
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="font-body text-base md:text-lg text-white/50 leading-relaxed font-light w-full mb-9"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  From modular high-efficiency UPS deployments to high-density precision thermal engineering — Arihantaa Powertech builds and monitors the physical backbone of India's mission-critical data centres and industrial networks.
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
                      <span className="block group-hover:-translate-y-full transition-transform duration-300">EXPLORE PRODUCTS</span>
                      <span className="absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300 text-accent">EXPLORE PRODUCTS</span>
                    </span>
                    <span className="material-symbols-outlined text-[24px] group-hover:translate-x-1 transition-transform duration-300">
                      arrow_forward
                    </span>
                  </Link>
                </motion.div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Bottom Stats Bar */}
      <motion.div
        className="w-full border-t border-white/10 bg-[#080808]/95 backdrop-blur-md shrink-0 relative z-30"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.95 }}
      >
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {HERO_METRICS.map((metric, i) => (
            <div key={i} className="px-6 py-5 flex flex-col justify-center">
              <span className="font-headline text-[18px] md:text-[22px] font-black text-accent tracking-tight leading-none mb-1">
                {metric.value}
              </span>
              <span className="font-label-caps text-[9px] text-white/40 tracking-wider uppercase leading-none">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
