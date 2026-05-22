import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { sectorsData, sectorExperts } from '../data/sectorsData';
import { Button } from '../components/ui/Button';

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

const sectorHeroImages = {
  'critical-power': "https://lh3.googleusercontent.com/aida-public/AB6AXuCYzfnwnCVP9iBzA35pvF58Zbv6LpPN4QoLV5M6fqU1BLNzLEsmSLu5HPVPYfz9mcxzArrBz3WVniGQmCb9ZQPmx3f2D2kjq5mVNYoOEymJvHHxw9rVSgRQ_RV3cHYfVTj2AqyeRlyZAGRQL66qPukbhEn2gxpX51lEy0C52lkBz_V7d9k9FEZQuOcqj0S_hGjrzXgGpOZ_VWYQM-FfNCo-3M2-H-MOu2-sybDSu37IxEPxyE1S4HjBT79U9MMqnEiV0FoptlnVL50",
  'thermal-management': "https://lh3.googleusercontent.com/aida-public/AB6AXuBs7GWrmO_Y24aIx0d_M368iwbT45iHy_7DqpZ7nch4fGcArhsG3Sgv3kEZJrQgufY4RuhkBeG0nzAVuZdo9xFBim7nRUdHZtnsUXXvA4N-7-sezh59f9vX1KfadhdMLz0Uj-yIVnI5c3gseMueQqUedxsfbbqL5ecgnT83a3xHXTG3h3mwsSqZyjqYaqua9ahuVxPAZbAQY0-mdX7ZKunjvj7d0CRfydIP5nD9glow6KMU8SoKRHqFaWIZB41-0SRYLfF8zA12KHQ",
  'racks-enclosures': "https://lh3.googleusercontent.com/aida-public/AB6AXuDaZXpdbjLr9LR1AZHlH13OoPIe3jejJ5QnOcZ65UtIXTYGB3FhPhWEysa5L62jlOrhOuIauc30AyV27W61lMnslCrsaPW-417zxIv6lwC0psaVj4kKhOln4z4KLECJ_PGSJfsImraGudDu7PWlQES3CGRX27W8z1SbOwyT-mkSui_n_DpRCHOZJdsdHcWZ0ezqLgJkCeCvxXO-YSfJ6mNTUN7OMzS2PFmVWdky77FtgjIaJHenC1H4lGTuyumwdjVpcqwEBdaHTa0",
  'monitoring-management': "https://lh3.googleusercontent.com/aida-public/AB6AXuAH-XlVfiUims4FuvWQyfp3g5yMEYAXu5W8L_8uYh3Ih-vc25CLSwk9L91FOzpyjX9h727SvBUjEjzTBhCUqwDEK-faQqg481UUBnRtczffpJoLP1anXLQSjSbywiM4hLy9c-vAl8gzbbFVe31jx7-8HSB9kHwjLH0vRwKB0OyvY4pt3NC36MyAoa6pk4iMwlo0D_85spL5SOVT7mbLmZ7U2qyW31OsCPbgwf07HCkxHWpuRz8t4jdBA3Ls1Smb_5Z8nhRvbQ7fLOY"
};

/* ─── Scroll-Linked Challenge Card ────────────────────────────────────── */
function ChallengeCard({ prob, idx, total }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.15, 1]);
  const y = useTransform(scrollYProgress, [0, 0.6], [30, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.96, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, y, scale }}
      className="border-r border-b border-outline-variant/30 p-6 md:p-8 bg-white hover:bg-accent/[0.015] transition-colors duration-300 flex items-start gap-5 relative group"
    >
      {/* Monospace numeric index badge */}
      <div className="font-mono text-[14px] text-accent font-bold pt-1 shrink-0 select-none">
        {String(idx + 1).padStart(2, '0')}
      </div>
      
      {/* Icon badge */}
      <div className="w-10 h-10 bg-accent/5 border border-accent/20 flex items-center justify-center shrink-0 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
        <span className="material-symbols-outlined text-[22px]">{prob.icon}</span>
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-headline text-[16px] md:text-[18px] text-on-surface font-bold tracking-tight mb-2 uppercase">
          {prob.title}
        </h3>
        <p className="font-body text-[14px] text-secondary leading-relaxed">
          {prob.description}
        </p>
      </div>
    </motion.div>
  );
}

export function SpecificSector() {
  const { sectorId } = useParams();
  const sector = sectorsData[sectorId];
  const [openAccordionIdx, setOpenAccordionIdx] = useState(0);
  const challengeSectionRef = useRef(null);

  const [formState, setFormState] = useState({
    name: '', company: '', email: '', projectType: 'Hospital', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Scroll progress for challenges section progress bar
  const { scrollYProgress: challengeProgress } = useScroll({
    target: challengeSectionRef,
    offset: ["start end", "end start"]
  });
  const progressHeight = useTransform(challengeProgress, [0.1, 0.85], ["0%", "100%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpenAccordionIdx(0);
  }, [sectorId]);

  if (!sector) {
    return (
      <div className="bg-[#080808] min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 text-center pt-[80px]">
        <span className="material-symbols-outlined text-[68px] text-accent mb-6">engineering</span>
        <h1 className="font-headline text-[32px] font-black text-white uppercase tracking-tight mb-4">Sector Not Found</h1>
        <Link to="/products">
          <Button variant="primary" theme="dark" className="rounded-none">
            Back to Sectors
          </Button>
        </Link>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: '', company: '', email: '', projectType: 'Hospital', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const toggleAccordion = (idx) => {
    setOpenAccordionIdx(openAccordionIdx === idx ? null : idx);
  };

  const heroImage = sectorHeroImages[sectorId] || "https://lh3.googleusercontent.com/aida-public/AB6AXuByKdJQFYxhdeQfgoVuKBQBOGbkiDqkvJ1yEAsBbhJ9sg9sFiJqCctfiINJaiAv94iEhcXGcpRnzFGFn9gONe81xv-Y8iRKVROHUjmbg4ddI6MuTm2pkSmGh2x9PQpS1JEEAsAYlWa_PqXB7q2C4z-xKqZg7pPbjHLb4-UA3qQqr-nVA6Zlqwe-QJo-fTSF1VnartNsKpc_aDC3Y0DHBaUcBOiEKo2qvUitDzVpykfjWSSiPGevQVfxSaGS4l6REQ6XvKZtkd4iRS4";

  return (
    <div className="font-body selection:bg-accent selection:text-white bg-surface">

      {/* ═══════════════════════════════════════════════════════════════════
          HERO — Immersive split with 1px border grid, floating badges, scroll hint
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-inverse-surface overflow-hidden border-b border-white/10" style={{ minHeight: '100svh' }}>

        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-12 border-l border-white/10 gap-0 relative z-10">

          {/* Left Column (Content & CTAs) */}
          <div className="col-span-12 md:col-span-7 border-r border-b border-white/10 p-8 md:p-16 pt-[120px] md:pt-[140px] flex flex-col justify-center relative z-10">
            
            {/* Breadcrumb */}
            <motion.nav
              className="flex items-center gap-2 mb-8"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Home</Link>
              <span className="material-symbols-outlined text-surface-variant text-[17px]">chevron_right</span>
              <Link to="/products" className="font-label-caps text-[10px] text-surface-variant tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Products</Link>
              <span className="material-symbols-outlined text-surface-variant text-[17px]">chevron_right</span>
              <span className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase font-bold">{sector.tag}</span>
            </motion.nav>

            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="h-[1px] w-8 bg-accent" />
              <span className="font-label-caps text-[10px] text-accent tracking-[0.3em] uppercase">
                Sector Expertise
              </span>
            </motion.div>

            {/* Headline — word-by-word staggered reveal */}
            <h1 className="font-headline font-black uppercase leading-[0.92] tracking-tighter mb-8">
              {[sector.heroHeadline.line1, sector.heroHeadline.line2, sector.heroHeadline.line3].map((line, i) => (
                <div key={i} className="overflow-hidden block">
                  <motion.span
                    className={`block whitespace-nowrap text-[30px] sm:text-[38px] md:text-[44px] lg:text-[52px] xl:text-[62px] ${
                      i === 2 ? '' : 'text-inverse-on-surface'
                    }`}
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{ duration: 1.0, delay: 0.2 + i * 0.13, ease: [0.25, 1, 0.5, 1] }}
                  >
                    {i === 2 ? (
                      <>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">{sector.heroHeadline.orangeWord}</span>{' '}
                        <span className="text-inverse-on-surface">{line.replace(sector.heroHeadline.orangeWord, '').trim()}</span>
                      </>
                    ) : line}
                  </motion.span>
                </div>
              ))}
            </h1>

            {/* Accent underline */}
            <motion.div
              className="h-[3px] w-16 bg-accent mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{ originX: 0 }}
            />

            {/* Description */}
            <motion.p
              className="font-body text-[15px] md:text-[17px] text-surface-variant/80 leading-relaxed max-w-[430px] mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.25, 1, 0.5, 1] }}
            >
              {sector.heroDescription}
            </motion.p>

            {/* CTA Row */}
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
            >
              <Button
                onClick={() => document.getElementById('consult')?.scrollIntoView({ behavior: 'smooth' })}
                variant="primary"
                size="lg"
                className="rounded-none shadow-2xl shadow-accent/25 text-[10px] tracking-[0.2em] font-bold"
              >
                GET A FREE CONSULTATION
              </Button>
              <button
                onClick={() => document.getElementById('proof')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2.5 font-label-caps text-[10px] tracking-[0.2em] uppercase text-white/55 hover:text-white transition-colors duration-300 group"
              >
                <span className="relative overflow-hidden inline-block">
                  <span className="block group-hover:-translate-y-full transition-transform duration-300">VIEW PAST PROJECTS</span>
                  <span className="absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300 text-accent">VIEW PAST PROJECTS</span>
                </span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform duration-300">
                  arrow_forward
                </span>
              </button>
            </motion.div>
          </div>

          {/* Right Column (Image & Floating Badges) */}
          <div className="col-span-12 md:col-span-5 border-r border-b border-white/10 relative h-[380px] md:h-auto overflow-hidden bg-surface-container-low/10">
            {/* The image itself */}
            <img
              src={heroImage}
              alt={sector.title}
              className="w-full h-full object-cover object-center"
              style={{ filter: 'brightness(0.55) saturate(0.8)' }}
              loading="eager"
            />
            {/* Gradient overlays for protection */}
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-inverse-surface/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface/20 via-transparent to-transparent" />

            {/* Floating badge: ISO */}
            <motion.div
              className="absolute z-20 flex items-center gap-3 bg-[#111]/90 backdrop-blur-xl border border-white/10 px-4 py-3 shadow-2xl bottom-6 right-6 hidden sm:flex"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="w-8 h-8 bg-accent flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-white" style={{ fontSize: '18px' }}>verified</span>
              </div>
              <div>
                <p className="font-label-caps text-[8px] text-accent tracking-[0.22em] uppercase leading-none mb-0.5">Certified Quality</p>
                <p className="font-headline text-[11px] font-bold text-white leading-tight">ISO 9001 : 2015</p>
              </div>
            </motion.div>

            {/* Floating badge: Sector-specific */}
            <motion.div
              className="absolute z-20 flex items-center gap-3 bg-[#111]/90 backdrop-blur-xl border border-white/10 px-4 py-3 shadow-2xl top-6 right-6 hidden sm:flex"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="w-8 h-8 bg-accent flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-white" style={{ fontSize: '18px' }}>electric_bolt</span>
              </div>
              <div>
                <p className="font-label-caps text-[8px] text-accent tracking-[0.22em] uppercase leading-none mb-0.5">{sector.tag}</p>
                <p className="font-headline text-[11px] font-bold text-white leading-tight">Specialist Division</p>
              </div>
            </motion.div>
          </div>

          {/* Full-width Stats Ticker Grid Row */}
          <div className="col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-0">
            {sector.contextStats.map((stat, idx) => (
              <div key={idx} className="border-r border-b border-white/10 p-6 md:p-8 hover:bg-white/[0.02] transition-colors duration-300">
                <div className="font-headline text-[28px] md:text-[36px] text-accent font-black leading-none mb-1">{stat.value}</div>
                <div className="font-label-caps text-[9px] text-white/45 tracking-[0.2em] uppercase">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>

        {/* ── Vertical scroll hint ── */}
        <motion.div
          className="absolute bottom-[68px] left-6 md:left-20 z-20 flex-col items-center gap-2 hidden md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <motion.div
            className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
          />
          <span className="font-label-caps text-[8px] text-white/30 tracking-[0.3em] uppercase rotate-90 origin-center mt-2">
            Scroll
          </span>
        </motion.div>

      </section>


      {/* ═══════════════════════════════════════════════════════════════════
          CHALLENGES — Sticky left heading + Zero-gap right grid
      ═══════════════════════════════════════════════════════════════════ */}
      <section ref={challengeSectionRef} className="relative py-28 md:py-36 bg-surface overflow-hidden border-b border-outline-variant/30">

        {/* Giant watermark */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 pointer-events-none select-none z-0">
          <span className="text-[200px] md:text-[300px] font-headline font-black text-outline-variant/10 leading-none tracking-tighter uppercase whitespace-nowrap">
            RISK
          </span>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            {/* ─── LEFT: Sticky heading panel ─── */}
            <div className="w-full lg:w-[38%] shrink-0">
              <div className="lg:sticky lg:top-28">

                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-[2px] w-8 bg-accent" />
                  <span className="font-label-caps text-[11px] text-accent tracking-[0.2em] uppercase">Sector Challenges</span>
                </div>

                {/* Heading */}
                <h2 className="font-headline text-[32px] md:text-[46px] lg:text-[54px] leading-[1.05] font-black tracking-tighter text-on-surface mb-6">
                  {sector.problemHeader.headline}
                </h2>

                <p className="font-body text-[16px] leading-relaxed text-secondary mb-10 max-w-md">
                  {sector.problemHeader.subhead}
                </p>

                {/* Scroll progress indicator (desktop only) */}
                <div className="hidden lg:flex items-center gap-4">
                  <div className="relative w-[3px] h-[120px] bg-outline-variant/20 overflow-hidden">
                    <motion.div className="absolute top-0 left-0 w-full bg-accent origin-top" style={{ height: progressHeight }} />
                  </div>
                  <div>
                    <div className="font-headline text-[36px] text-accent font-black leading-none">{sector.problems.length}</div>
                    <div className="font-label-caps text-[9px] text-secondary tracking-[0.2em] uppercase mt-1">Critical Risks</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── RIGHT: Zero-gap card grid ─── */}
            <div className="flex-1 grid grid-cols-1 border-t border-l border-outline-variant/30 gap-0 bg-white shadow-sm">
              {sector.problems.map((prob, idx) => (
                <ChallengeCard key={idx} prob={prob} idx={idx} total={sector.problems.length} />
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════
          SOLUTIONS — Accordion explorer with sub-grids
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="solutions" className="relative py-28 md:py-36 bg-surface-container-low border-b border-outline-variant/30 overflow-hidden">

        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none z-0">
          <span className="text-[200px] md:text-[300px] font-headline font-black text-outline-variant/10 leading-none tracking-tighter uppercase whitespace-nowrap">
            SOLVE
          </span>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[2px] w-8 bg-accent" />
              <span className="font-label-caps text-[11px] text-accent tracking-[0.2em] uppercase">Our Capabilities</span>
            </div>
            <h2 className="font-headline text-[32px] md:text-[46px] lg:text-[54px] leading-[1.05] font-black tracking-tighter text-on-surface mb-4 max-w-3xl">
              {sector.solutionHeader.headline}
            </h2>
            <p className="font-body text-[16px] leading-relaxed text-secondary max-w-2xl">{sector.solutionHeader.subhead}</p>
          </div>

          {/* Redesigned Grid-Based Accordion */}
          <div className="border-t border-l border-outline-variant/30 gap-0 bg-white shadow-sm">
            {sector.solutions.map((sol, idx) => {
              const isOpen = openAccordionIdx === idx;
              return (
                <div key={idx} className="border-r border-b border-outline-variant/30">
                  <h3>
                    <button onClick={() => toggleAccordion(idx)} className="w-full py-7 px-6 md:px-10 text-left flex items-center justify-between hover:bg-accent/[0.015] transition-colors duration-300 focus:outline-none">
                      <div className="flex items-center gap-5 md:gap-8 flex-1 pr-6">
                        <span className="font-mono text-[14px] text-accent font-bold">{String(idx + 1).padStart(2, '0')}</span>
                        <span className="font-headline text-[17px] md:text-[20px] text-on-surface font-extrabold tracking-tight uppercase">{sol.tag}</span>
                      </div>
                      <span className="material-symbols-outlined text-[28px] text-secondary/50">{isOpen ? 'remove' : 'add'}</span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: EASE_OUT_EXPO }} className="overflow-hidden">
                        <div className="px-6 pb-10 md:px-10 md:pb-12 border-t border-outline-variant/10 pt-8 bg-surface-container-lowest/30">
                          {/* Inside block sub-grid layout */}
                          <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-l border-outline-variant/20 gap-0 bg-white">
                            <div className="col-span-12 lg:col-span-6 border-r border-b border-outline-variant/20 p-6 md:p-8">
                              <h4 className="font-headline text-[16px] text-on-surface font-extrabold tracking-tight mb-4 uppercase">{sol.title}</h4>
                              <p className="font-body text-[14px] leading-relaxed text-secondary">{sol.description}</p>
                            </div>
                            <div className="col-span-12 lg:col-span-6 border-r border-b border-outline-variant/20 p-6 md:p-8 bg-surface-container-low/10">
                              <div className="font-label-caps text-[9px] text-secondary font-bold tracking-widest uppercase mb-5">Key Capabilities</div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                {sol.deliverables.map((del, dIdx) => (
                                  <div key={dIdx} className="flex items-center gap-2.5">
                                    <div className="w-5 h-5 bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0">
                                      <span className="material-symbols-outlined text-[13px] text-accent">check</span>
                                    </div>
                                    <span className="font-body text-[12.5px] font-semibold text-on-surface/80">{del}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════
          PRODUCTS — Power chain + product grid using zero-gap systems
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-28 md:py-36 bg-surface overflow-hidden border-b border-outline-variant/30">

        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 pointer-events-none select-none z-0">
          <span className="text-[200px] md:text-[300px] font-headline font-black text-outline-variant/10 leading-none tracking-tighter uppercase whitespace-nowrap">
            BUILD
          </span>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">

          {/* Section Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[2px] w-8 bg-accent" />
              <span className="font-label-caps text-[11px] text-accent tracking-[0.2em] uppercase">Products & Systems</span>
            </div>
            <h2 className="font-headline text-[32px] md:text-[46px] lg:text-[54px] leading-[1.05] font-black tracking-tighter text-on-surface mb-4">
              What we install. Where it sits.
            </h2>
            <p className="font-body text-[16px] leading-relaxed text-secondary max-w-2xl">
              High-performance physical and digital components mapped to critical infrastructure points.
            </p>
          </div>

          {/* Power Chain Flow — 5-column zero-gap grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-outline-variant/30 gap-0 mb-20 bg-white shadow-sm">
            {sector.powerChain.map((node, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="p-6 md:p-8 border-r border-b border-outline-variant/30 flex flex-col justify-between hover:bg-accent/[0.015] transition-colors duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-10 h-10 bg-accent/5 border border-accent/20 flex items-center justify-center shrink-0 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined text-[22px]">{node.icon}</span>
                    </span>
                    <span className="font-mono text-[12px] text-accent/60 font-bold select-none">{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  <h4 className="font-headline text-[13px] text-on-surface font-black uppercase tracking-[0.05em] mb-4 border-b border-outline-variant/20 pb-3">{node.title}</h4>
                  <div className="space-y-2">
                    {node.examples.map((ex, eIdx) => (
                      <div key={eIdx} className="font-body text-[12px] text-secondary font-medium leading-tight flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 bg-accent/30 mt-1.5 shrink-0" />
                        {ex}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Product Categories Grid — 3-column zero-gap grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-outline-variant/30 gap-0 bg-white shadow-sm">
            {sector.productCategories.map((prod, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 3) * 0.06 }}
                className="border-r border-b border-outline-variant/30 p-8 flex flex-col h-full hover:bg-accent/[0.015] transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-surface-container-low border border-outline-variant/30 flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-[26px]">{prod.icon}</span>
                </div>
                <h4 className="font-headline text-[17px] text-on-surface font-extrabold tracking-tight mb-3 uppercase">{prod.title}</h4>
                <p className="font-body text-[14px] text-secondary mb-6 flex-grow leading-relaxed">{prod.desc}</p>
                <div className="mt-auto pt-4 border-t border-outline-variant/20">
                  <span className="font-label-caps text-[9px] text-secondary uppercase tracking-[0.15em] font-bold">{prod.environments}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════
          EXECUTION — Zero-gap 5-column process grid
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-28 md:py-36 bg-[#080808] text-white overflow-hidden border-b border-white/10">

        <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
          <motion.div className="absolute top-0 right-[20%] w-[1px] h-full bg-white/5" />
          <motion.div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">

          <div className="mb-20">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[2px] w-8 bg-accent" />
              <span className="font-label-caps text-[11px] text-accent tracking-[0.2em] uppercase">Our Execution Protocol</span>
            </div>
            <h2 className="font-headline text-[32px] md:text-[46px] lg:text-[54px] leading-[1.05] font-black tracking-tighter text-white mb-4 max-w-3xl">
              From contract signing to live commissioning — one accountable process.
            </h2>
            <p className="font-body text-[16px] leading-relaxed text-white/50 max-w-2xl">
              We manage the entire engineering, procurement, and deployment timeline internally.
            </p>
          </div>

          {/* Zero-gap Execution Process Grid (Responsive) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 border-t border-l border-white/10 gap-0 mb-20 bg-transparent">
            {sector.executionSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="border-r border-b border-white/10 p-8 hover:bg-white/[0.02] transition-colors duration-300 flex flex-col justify-between min-h-[280px] group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[14px] text-accent/60 font-bold select-none">{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  <h4 className="font-headline text-[15px] text-white font-bold tracking-tight mb-4 uppercase group-hover:text-accent transition-colors">{step.title}</h4>
                  <ul className="space-y-2.5 pt-4 border-t border-white/5">
                    {step.activities.map((act, aIdx) => (
                      <li key={aIdx} className="font-body text-[12px] text-white/50 leading-relaxed flex items-start gap-2 group-hover:text-white/70 transition-colors">
                        <span className="w-1 h-1 bg-accent mt-2 shrink-0" />
                        {act}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Commitment callout */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/5 border border-white/10 border-l-[3px] border-l-accent p-8 md:p-10 hover:bg-white/[0.01] transition-colors duration-300">
            <span className="block font-label-caps text-[9px] text-accent uppercase tracking-[0.25em] font-bold mb-4">Our Commitment to Clients</span>
            <p className="font-body text-[16px] md:text-[18px] text-white/80 leading-relaxed max-w-4xl">
              Arihantaa Powertech does not subcontract the core electrical scope. Every cable terminated, every panel energised, every relay set — by our own certified engineers.
            </p>
          </motion.div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════
          EXPERIENCE — Featured project + Zero-gap supporting grid
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="proof" className="relative py-28 md:py-36 bg-surface overflow-hidden border-b border-outline-variant/30">

        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none z-0">
          <span className="text-[200px] md:text-[300px] font-headline font-black text-outline-variant/10 leading-none tracking-tighter uppercase whitespace-nowrap">PROOF</span>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">

          <div className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[2px] w-8 bg-accent" />
              <span className="font-label-caps text-[11px] text-accent tracking-[0.2em] uppercase">Our Experience</span>
            </div>
            <h2 className="font-headline text-[32px] md:text-[46px] lg:text-[54px] leading-[1.05] font-black tracking-tighter text-on-surface mb-4">
              We have done this. Here is where.
            </h2>
            <p className="font-body text-[16px] leading-relaxed text-secondary max-w-2xl">Selected from our active and completed {sector.title.toLowerCase()} portfolio.</p>
          </div>

          {/* Flagship project card - Redesigned into clean grid layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-inverse-surface text-white flex flex-col lg:flex-row mb-12 border-t border-l border-white/10 gap-0 shadow-sm"
          >
            <div className="w-full lg:w-[65%] p-8 md:p-14 flex flex-col justify-center border-r border-b border-white/10">
              <span className="inline-block self-start border border-accent text-accent font-label-caps text-[9px] uppercase tracking-[0.22em] font-bold px-3 py-1 mb-6">Featured Project</span>
              <h3 className="font-headline text-[24px] md:text-[32px] font-black tracking-tight mb-4 leading-tight uppercase">{sector.flagshipProject.name}</h3>
              <div className="font-label-caps text-[10px] text-white/50 uppercase tracking-[0.15em] mb-6">Client: <span className="text-white font-bold">{sector.flagshipProject.client}</span></div>
              <p className="font-body text-[15px] leading-relaxed text-white/70">{sector.flagshipProject.scope}</p>
            </div>

            <div className="w-full lg:w-[35%] flex flex-col justify-center bg-white/[0.01]">
              {sector.flagshipProject.stats.map((stat, idx) => (
                <div key={idx} className="p-8 flex flex-col justify-center border-r border-b border-white/10 hover:bg-white/[0.03] transition-colors duration-300">
                  <div className="font-headline text-[28px] md:text-[34px] text-accent font-black leading-none mb-1">{stat.value}</div>
                  <div className="font-label-caps text-[9px] text-white/60 uppercase tracking-[0.15em] font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Supporting project cards — Zero-gap layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-outline-variant/30 gap-0 bg-white shadow-sm">
            {sector.supportingProjects.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.06 }}
                className="border-r border-b border-outline-variant/30 p-6 md:p-8 flex flex-col justify-between hover:bg-accent/[0.015] transition-colors duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-outline-variant/20">
                    <span className="font-label-caps text-[9px] text-secondary font-bold uppercase tracking-wider">{proj.tag}</span>
                    <span className="font-label-caps text-[9px] text-accent tracking-wider uppercase font-bold">{proj.location}</span>
                  </div>
                  <h4 className="font-headline text-[15px] text-on-surface font-extrabold tracking-tight mb-3 leading-snug group-hover:text-accent transition-colors uppercase">{proj.name}</h4>
                  <div className="font-label-caps text-[9px] text-secondary uppercase mb-6">Client: <span className="font-medium">{proj.client}</span></div>
                </div>
                <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                  <span className="font-headline text-[14px] text-on-surface font-bold">{proj.cost}</span>
                  <span className="font-label-caps text-[8px] text-secondary tracking-widest uppercase font-bold">{proj.durationLabel}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════
          WHY ARIHANTAA + CONTACT (Redesigned Zero-Gap Forms)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-surface pb-32">

        {/* Dark upper block */}
        <div className="bg-[#080808] pt-28 pb-56 px-8 md:px-16 relative overflow-hidden">
          <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-0 left-[10%] w-[1px] h-full bg-white/5" />
            <div className="absolute top-0 right-[10%] w-[1px] h-full bg-white/5" />
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[2px] w-8 bg-accent" />
              <span className="font-label-caps text-[11px] text-accent tracking-[0.2em] uppercase">Why Arihantaa</span>
            </div>
            <h2 className="font-headline text-[32px] md:text-[46px] lg:text-[54px] leading-[1.05] font-black tracking-tighter text-white mb-4 max-w-3xl">
              Five reasons procurement teams choose us for {sector.title.toLowerCase()}.
            </h2>
            <p className="font-body text-[16px] leading-relaxed text-white/50 max-w-2xl mb-20">We design and construct reliable infrastructure with dedicated engineering support.</p>

            {/* Why Arihantaa Zero-Gap Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-white/10 gap-0">
              {sector.differentiators.map((diff, idx) => (
                <div
                  key={idx}
                  className="flex flex-col p-8 border-r border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-300 group"
                >
                  <div className="font-mono text-[14px] text-accent font-bold mb-4 select-none">{String(idx + 1).padStart(2, '0')}</div>
                  <h4 className="font-headline text-[14px] text-white font-bold tracking-tight mb-3 leading-snug uppercase group-hover:text-accent transition-colors">{diff.title}</h4>
                  <p className="font-body text-[13px] text-white/50 leading-relaxed group-hover:text-white/80 transition-colors">{diff.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating contact card - Redesigned to 2-column zero-gap layout */}
        <div id="consult" className="max-w-[1440px] mx-auto px-8 md:px-16 -mt-36 relative z-10">
          <div className="border-t border-l border-outline-variant/30 bg-white gap-0 flex flex-col lg:flex-row shadow-sm">

            {/* Left: Expert contacts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2 p-8 md:p-14 border-r border-b border-outline-variant/30 bg-surface-container-lowest flex flex-col justify-between"
            >
              <div>
                <span className="block font-label-caps text-[9px] text-accent uppercase tracking-[0.22em] font-bold mb-4">Speak to the Partners Directly</span>
                <h2 className="font-headline text-[26px] md:text-[32px] text-on-surface font-black tracking-tight leading-[1.1] mb-4 uppercase">
                  Direct accountability.<br />No sales desks.
                </h2>
                <p className="font-body text-[15px] leading-relaxed text-secondary mb-10 max-w-md">Both partners personally review project enquiries and technical scoping. Contact them directly for estimates, site visits, or bid submissions.</p>

                <div className="space-y-4">
                  {sectorExperts.map((exp, idx) => (
                    <div key={idx} className="bg-white p-5 flex items-center gap-5 border border-outline-variant/30 hover:border-accent transition-all">
                      <div className="w-12 h-12 bg-accent/5 text-accent font-headline font-bold flex items-center justify-center shrink-0 text-[18px] border border-outline-variant/30 select-none">{exp.avatar}</div>
                      <div>
                        <h4 className="font-body text-[15px] text-on-surface font-bold tracking-tight">{exp.name}</h4>
                        <div className="font-label-caps text-[9px] text-secondary uppercase tracking-widest mb-2 font-bold">{exp.role}</div>
                        <div className="flex gap-4 font-body text-[12px] text-on-surface font-medium">
                          <a href="tel:+91" className="flex items-center gap-1.5 hover:text-accent transition-colors"><span className="material-symbols-outlined text-[16px] text-accent">phone</span> Phone</a>
                          <a href="mailto:info@" className="flex items-center gap-1.5 hover:text-accent transition-colors"><span className="material-symbols-outlined text-[16px] text-accent">mail</span> Email</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:w-1/2 p-8 md:p-14 relative bg-white border-r border-b border-outline-variant/30"
            >
              <div className="mb-8">
                <span className="block font-label-caps text-[9px] text-accent uppercase tracking-[0.22em] font-bold mb-3">Send a Project Enquiry</span>
                <h3 className="font-headline text-[22px] text-on-surface font-bold tracking-tight uppercase">Tell us what you need.</h3>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input type="text" name="name" value={formState.name} onChange={handleInputChange} placeholder="Full Name *" className="w-full bg-surface border border-outline-variant/60 px-4 py-3.5 font-body text-[14px] text-on-surface placeholder:text-secondary/60 focus:outline-none focus:border-accent transition-all" />
                  <input type="text" name="company" value={formState.company} onChange={handleInputChange} placeholder="Company Name" className="w-full bg-surface border border-outline-variant/60 px-4 py-3.5 font-body text-[14px] text-on-surface placeholder:text-secondary/60 focus:outline-none focus:border-accent transition-all" />
                </div>
                <input type="email" name="email" value={formState.email} onChange={handleInputChange} placeholder="Email Address *" className="w-full bg-surface border border-outline-variant/60 px-4 py-3.5 font-body text-[14px] text-on-surface placeholder:text-secondary/60 focus:outline-none focus:border-accent transition-all" />
                <div className="relative">
                  <select name="projectType" value={formState.projectType} onChange={handleInputChange} className="w-full bg-surface border border-outline-variant/60 px-4 py-3.5 font-body text-[14px] text-on-surface focus:outline-none focus:border-accent transition-all appearance-none cursor-pointer">
                    <option value="Hospital">Hospital / Healthcare</option>
                    <option value="Data Centre">Data Centre</option>
                    <option value="Airport">Airport / Transit</option>
                    <option value="Industrial">Industrial Plant</option>
                    <option value="Government">Government Complex</option>
                    <option value="Heritage">Heritage / Solar</option>
                    <option value="Other">Other</option>
                  </select>
                  <span className="material-symbols-outlined text-[20px] absolute right-4 top-1/2 -translate-y-1/2 text-secondary pointer-events-none">expand_more</span>
                </div>
                <textarea name="message" value={formState.message} onChange={handleInputChange} placeholder="Project Brief / Equipment Required *" rows="4" className="w-full bg-surface border border-outline-variant/60 px-4 py-3.5 font-body text-[14px] text-on-surface placeholder:text-secondary/60 focus:outline-none focus:border-accent transition-all resize-none" />

                <div className="relative pt-2">
                  <Button onClick={handleSubmit} disabled={isSubmitting} variant="primary" theme="light" className="w-full" showArrow={false}>
                    {isSubmitting ? 'SENDING...' : 'SEND ENQUIRY'}
                  </Button>
                  <AnimatePresence>
                    {submitSuccess && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-white border border-[#16a34a] flex items-center justify-center gap-2 text-[#16a34a] shadow-lg">
                        <span className="material-symbols-outlined text-[24px] font-bold">check_circle</span>
                        <span className="font-label-caps text-[12px] font-bold uppercase tracking-wider">Received. We will contact you.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="text-center pt-2">
                  <span className="font-label-caps text-[9px] text-secondary uppercase tracking-[0.15em] flex items-center justify-center gap-1.5 select-none">
                    <span className="material-symbols-outlined text-[15px]">schedule</span> All enquiries acknowledged within 1 business day
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </section>

    </div>
  );
}
