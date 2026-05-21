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
  const x = useTransform(scrollYProgress, [0, 0.6], [60, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.92, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, x, scale }}
      className="relative pl-12 md:pl-16 pb-12 last:pb-0"
    >
      {/* Vertical timeline connector */}
      {idx < total - 1 && (
        <div className="absolute left-[18px] md:left-[22px] top-10 bottom-0 w-[1px] bg-outline-variant/30" />
      )}

      {/* Numbered circle on the timeline */}
      <div className="absolute left-0 top-0 w-9 h-9 md:w-11 md:h-11 bg-accent text-white font-headline font-bold text-[13px] md:text-[14px] flex items-center justify-center z-10">
        {String(idx + 1).padStart(2, '0')}
      </div>

      {/* Card body */}
      <div className="bg-white border border-outline-variant/30 p-6 md:p-8 hover:border-accent hover:shadow-md transition-all duration-300 group">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-accent/5 border border-accent/20 flex items-center justify-center shrink-0 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
            <span className="material-symbols-outlined text-[20px]">{prob.icon}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-headline text-[16px] md:text-[18px] text-on-surface font-bold tracking-tight mb-2">
              {prob.title}
            </h3>
            <p className="font-body text-[14px] md:text-[15px] text-secondary leading-relaxed">
              {prob.description}
            </p>
          </div>
        </div>
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
        <span className="material-symbols-outlined text-[64px] text-accent mb-6">engineering</span>
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
          HERO — Immersive split with diagonal divider, floating badges, scroll hint
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-inverse-surface overflow-hidden" style={{ minHeight: '100svh' }}>

        {/* ── Sharp geometric accents instead of round blobs ── */}
        <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-accent/5 to-transparent skew-x-12 origin-top-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          />
        </div>

        {/* ── Right side: Sector image with Philosophy corner brackets ── */}
        <div className="hidden md:block absolute top-0 right-0 bottom-0 w-[50%] z-0">
          {/* The image itself */}
          <img
            src={heroImage}
            alt={sector.title}
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.55) saturate(0.8)' }}
            loading="eager"
          />
          {/* Gradient overlays for text protection */}
          <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface via-inverse-surface/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-inverse-surface/20" />

          {/* Philosophy corner brackets on the image area */}
          <motion.div
            className="absolute top-10 right-10 w-16 h-16 border-t-[3px] border-r-[3px] border-accent z-20"
            initial={{ opacity: 0, x: 20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
          <motion.div
            className="absolute bottom-32 left-10 w-16 h-16 border-b-[3px] border-l-[3px] border-accent z-20"
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          />
        </div>

        {/* ── Diagonal clip divider (ServicesHero pattern) ── */}
        <div
          className="hidden md:block absolute top-0 bottom-0 left-[46%] w-[100px] bg-inverse-surface z-10"
          style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
        />

        {/* ── Mobile image (above content, visible only on small screens) ── */}
        <div className="md:hidden relative w-full h-[280px] overflow-hidden">
          <img
            src={heroImage}
            alt={sector.title}
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.45) saturate(0.7)' }}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/50 to-transparent" />
        </div>

        {/* ── Content layer ── */}
        <div className="relative z-10 flex flex-col" style={{ minHeight: 'calc(100svh - 280px)' }}>
          {/* Top spacer for header clearance */}
          <div className="hidden md:block flex-1 min-h-[120px]" />

          {/* ── Left content panel ── */}
          <div className="max-w-[1440px] mx-auto w-full px-8 md:px-16 py-10 md:py-0 md:pb-12">
            <div className="w-full md:w-[52%] lg:w-[48%]">

              {/* Breadcrumb */}
              <motion.nav
                className="flex items-center gap-2 mb-8"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link to="/" className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Home</Link>
                <span className="material-symbols-outlined text-surface-variant text-[14px]">chevron_right</span>
                <Link to="/products" className="font-label-caps text-[10px] text-surface-variant tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Products</Link>
                <span className="material-symbols-outlined text-surface-variant text-[14px]">chevron_right</span>
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

              {/* Headline — word-by-word staggered reveal (Hero.jsx DNA) */}
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
                className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-12"
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
                  <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform duration-300">
                    arrow_forward
                  </span>
                </button>
              </motion.div>
            </div>
          </div>

          {/* Bottom spacer */}
          <div className="hidden md:block flex-1 min-h-[60px]" />

          {/* ── Stats ticker strip (anchored to bottom) ── */}
          <motion.div
            className="border-t border-white/10 py-4 mt-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <div className="max-w-[1440px] mx-auto px-8 md:px-16">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
                {sector.contextStats.map((stat, idx) => (
                  <div key={idx} className="lg:px-8 first:lg:pl-0 last:lg:pr-0">
                    <div className="font-headline text-[28px] md:text-[36px] text-accent font-black leading-none mb-1">{stat.value}</div>
                    <div className="font-label-caps text-[9px] text-white/45 tracking-[0.2em] uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Floating badge: ISO (Hero.jsx DNA) ── */}
        <motion.div
          className="absolute z-20 flex items-center gap-3 bg-[#111]/90 backdrop-blur-xl border border-white/10 px-4 py-3 shadow-2xl bottom-[120px] md:bottom-[100px] right-6 md:right-[8%] hidden md:flex"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="w-8 h-8 bg-accent flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-white" style={{ fontSize: '15px' }}>verified</span>
          </div>
          <div>
            <p className="font-label-caps text-[8px] text-accent tracking-[0.22em] uppercase leading-none mb-0.5">Certified Quality</p>
            <p className="font-headline text-[11px] font-bold text-white leading-tight">ISO 9001 : 2015</p>
          </div>
        </motion.div>

        {/* ── Floating badge: Sector-specific (Hero.jsx DNA) ── */}
        <motion.div
          className="absolute z-20 flex items-center gap-3 bg-[#111]/90 backdrop-blur-xl border border-white/10 px-4 py-3 shadow-2xl top-[25%] right-6 md:right-[6%] hidden lg:flex"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="w-8 h-8 bg-accent flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-white" style={{ fontSize: '15px' }}>electric_bolt</span>
          </div>
          <div>
            <p className="font-label-caps text-[8px] text-accent tracking-[0.22em] uppercase leading-none mb-0.5">{sector.tag}</p>
            <p className="font-headline text-[11px] font-bold text-white leading-tight">Specialist Division</p>
          </div>
        </motion.div>

        {/* ── Vertical scroll hint (Hero.jsx DNA) ── */}
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
          CHALLENGES — Sticky left heading + Scroll-animated right cards
      ═══════════════════════════════════════════════════════════════════ */}
      <section ref={challengeSectionRef} className="relative py-28 md:py-36 bg-surface overflow-hidden">

        {/* Giant watermark */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 pointer-events-none select-none z-0">
          <span className="text-[200px] md:text-[300px] font-headline font-black text-outline-variant/20 leading-none tracking-tighter uppercase whitespace-nowrap">
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

            {/* ─── RIGHT: Scroll-linked animated cards ─── */}
            <div className="flex-1">
              {sector.problems.map((prob, idx) => (
                <ChallengeCard key={idx} prob={prob} idx={idx} total={sector.problems.length} />
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════
          SOLUTIONS — Accordion explorer
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="solutions" className="relative py-28 md:py-36 bg-surface-container-low border-t border-outline-variant/30 overflow-hidden">

        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none z-0">
          <span className="text-[200px] md:text-[300px] font-headline font-black text-outline-variant/20 leading-none tracking-tighter uppercase whitespace-nowrap">
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

          {/* Accordion */}
          <div className="bg-white border border-outline-variant/30 divide-y divide-outline-variant/30 shadow-sm">
            {sector.solutions.map((sol, idx) => {
              const isOpen = openAccordionIdx === idx;
              return (
                <div key={idx}>
                  <h3>
                    <button onClick={() => toggleAccordion(idx)} className="w-full py-7 px-6 md:px-10 text-left flex items-center justify-between hover:bg-surface-container-low/50 transition-colors focus:outline-none">
                      <div className="flex items-center gap-5 md:gap-8 flex-1 pr-6">
                        <span className="font-headline text-[16px] text-accent font-black">{String(idx + 1).padStart(2, '0')}</span>
                        <span className="font-headline text-[17px] md:text-[20px] text-on-surface font-extrabold tracking-tight">{sol.tag}</span>
                      </div>
                      <span className="material-symbols-outlined text-[24px] text-secondary/50">{isOpen ? 'remove' : 'add'}</span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: EASE_OUT_EXPO }} className="overflow-hidden">
                        <div className="px-6 pb-10 md:px-10 md:pb-12 border-t border-outline-variant/10">
                          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 pt-6">
                            <div className="w-full lg:w-[45%]">
                              <h4 className="font-headline text-[18px] text-on-surface font-extrabold tracking-tight mb-4">{sol.title}</h4>
                              <p className="font-body text-[15px] leading-relaxed text-secondary">{sol.description}</p>
                            </div>
                            <div className="flex-1">
                              <div className="font-label-caps text-[10px] text-secondary font-bold tracking-wider mb-5">Key Capabilities:</div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {sol.deliverables.map((del, dIdx) => (
                                  <div key={dIdx} className="flex items-center gap-2.5">
                                    <div className="w-5 h-5 bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0">
                                      <span className="material-symbols-outlined text-[12px] text-accent">check</span>
                                    </div>
                                    <span className="font-body text-[13px] font-semibold text-on-surface/80">{del}</span>
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
          PRODUCTS — Power chain + product grid
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-28 md:py-36 bg-surface overflow-hidden">

        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 pointer-events-none select-none z-0">
          <span className="text-[200px] md:text-[300px] font-headline font-black text-outline-variant/20 leading-none tracking-tighter uppercase whitespace-nowrap">
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

          {/* Power Chain Flow — 5-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
            {sector.powerChain.map((node, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-white p-6 border border-outline-variant/30 flex flex-col hover:border-accent transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0 text-accent">
                    <span className="material-symbols-outlined text-[20px]">{node.icon}</span>
                  </span>
                  <span className="font-label-caps text-[9px] text-secondary uppercase tracking-[0.15em] font-bold">Stage {idx + 1}</span>
                </div>
                <h4 className="font-headline text-[13px] text-on-surface font-black uppercase tracking-[0.05em] mb-4 border-b border-outline-variant/20 pb-3">{node.title}</h4>
                <div className="space-y-1.5">
                  {node.examples.map((ex, eIdx) => (
                    <div key={eIdx} className="font-body text-[11px] text-secondary font-medium leading-tight">{ex}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Product Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sector.productCategories.map((prod, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 3) * 0.06 }}
                className="bg-white border border-outline-variant/30 p-8 flex flex-col h-full hover:shadow-md hover:border-accent transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-surface-container-low border border-outline-variant/30 flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-[24px]">{prod.icon}</span>
                </div>
                <h4 className="font-headline text-[17px] text-on-surface font-bold tracking-tight mb-2">{prod.title}</h4>
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
          EXECUTION — Dark section with process steps
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-28 md:py-36 bg-[#080808] text-white overflow-hidden">

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

          {/* Horizontal process line (desktop) */}
          <div className="hidden md:block relative mb-20">
            <div className="absolute top-5 left-0 w-full h-[2px] bg-white/10 z-0" />
            <div className="grid grid-cols-5 gap-6 relative z-10">
              {sector.executionSteps.map((step, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08 }} className="flex flex-col">
                  <div className="w-10 h-10 bg-accent text-white font-headline font-bold flex items-center justify-center mb-6 text-[14px] relative z-10">
                    {idx + 1}
                  </div>
                  <h4 className="font-headline text-[14px] text-white font-bold tracking-tight mb-3">{step.title}</h4>
                  <ul className="space-y-2 pt-3 border-t border-white/10">
                    {step.activities.map((act, aIdx) => (
                      <li key={aIdx} className="font-body text-[11.5px] text-white/60 leading-relaxed flex items-start gap-2">
                        <span className="w-1 h-1 bg-accent mt-1.5 shrink-0" />
                        {act}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: stacked cards */}
          <div className="md:hidden space-y-4 mb-20">
            {sector.executionSteps.map((step, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.06 }} className="bg-white/5 border border-white/10 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 bg-accent text-white font-headline font-bold flex items-center justify-center text-[13px]">{idx + 1}</div>
                  <h4 className="font-headline text-[14px] text-white font-bold">{step.title}</h4>
                </div>
                <ul className="space-y-2 pl-12">
                  {step.activities.map((act, aIdx) => (
                    <li key={aIdx} className="font-body text-[12px] text-white/60 leading-relaxed flex items-start gap-2">
                      <span className="w-1 h-1 bg-accent mt-1.5 shrink-0" />{act}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Commitment callout */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/5 border-l-[3px] border-accent p-8 md:p-10">
            <span className="block font-label-caps text-[9px] text-accent uppercase tracking-[0.25em] font-bold mb-4">Our Commitment to Clients</span>
            <p className="font-body text-[16px] md:text-[18px] text-white/80 leading-relaxed max-w-4xl">
              Arihantaa Powertech does not subcontract the core electrical scope. Every cable terminated, every panel energised, every relay set — by our own certified engineers.
            </p>
          </motion.div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════
          EXPERIENCE — Featured project + supporting grid
      ═══════════════════════════════════════════════════════════════════ */}
      <section id="proof" className="relative py-28 md:py-36 bg-surface overflow-hidden">

        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none z-0">
          <span className="text-[200px] md:text-[300px] font-headline font-black text-outline-variant/20 leading-none tracking-tighter uppercase whitespace-nowrap">PROOF</span>
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

          {/* Flagship project card */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative bg-inverse-surface text-white flex flex-col lg:flex-row mb-12 shadow-sm">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-[3px] border-l-[3px] border-accent z-20" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[3px] border-r-[3px] border-accent z-20" />

            <div className="w-full lg:w-[65%] p-8 md:p-14 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
              <span className="inline-block self-start border border-accent text-accent font-label-caps text-[9px] uppercase tracking-[0.22em] font-bold px-3 py-1 mb-6">Featured Project</span>
              <h3 className="font-headline text-[24px] md:text-[32px] font-black tracking-tight mb-4 leading-tight">{sector.flagshipProject.name}</h3>
              <div className="font-label-caps text-[10px] text-white/50 uppercase tracking-[0.15em] mb-6">Client: <span className="text-white font-bold">{sector.flagshipProject.client}</span></div>
              <p className="font-body text-[15px] leading-relaxed text-white/70">{sector.flagshipProject.scope}</p>
            </div>

            <div className="w-full lg:w-[35%] flex flex-col justify-center bg-white/[0.02] divide-y divide-white/10">
              {sector.flagshipProject.stats.map((stat, idx) => (
                <div key={idx} className="p-8 flex flex-col justify-center hover:bg-white/[0.04] transition-colors">
                  <div className="font-headline text-[28px] md:text-[34px] text-accent font-black leading-none mb-1">{stat.value}</div>
                  <div className="font-label-caps text-[9px] text-white/60 uppercase tracking-[0.15em] font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Supporting project cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sector.supportingProjects.map((proj, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: (idx % 4) * 0.06 }} className="bg-white border border-outline-variant/30 p-6 flex flex-col justify-between hover:border-accent transition-all group">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-outline-variant/20">
                    <span className="font-label-caps text-[9px] text-secondary font-bold uppercase tracking-wider">{proj.tag}</span>
                    <span className="font-label-caps text-[9px] text-accent tracking-wider uppercase font-bold">{proj.location}</span>
                  </div>
                  <h4 className="font-headline text-[15px] text-on-surface font-extrabold tracking-tight mb-3 leading-snug group-hover:text-accent transition-colors">{proj.name}</h4>
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
          WHY ARIHANTAA + CONTACT
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

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-left">
              {sector.differentiators.map((diff, idx) => (
                <div key={idx} className="flex flex-col pt-6 border-t border-white/10 hover:border-accent transition-colors group">
                  <div className="font-headline text-[14px] text-accent font-black mb-3">{String(idx + 1).padStart(2, '0')}</div>
                  <h4 className="font-headline text-[14px] text-white font-bold tracking-tight mb-3 leading-snug">{diff.title}</h4>
                  <p className="font-body text-[13px] text-white/50 leading-relaxed group-hover:text-white/80 transition-colors">{diff.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating contact card */}
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 -mt-36 relative z-10">
          <div className="bg-white border border-outline-variant/40 shadow-xl flex flex-col lg:flex-row overflow-hidden">

            {/* Left: Expert contacts */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="lg:w-1/2 p-8 md:p-14 border-b lg:border-b-0 lg:border-r border-outline-variant/40 bg-surface-container-lowest">
              <span className="block font-label-caps text-[9px] text-accent uppercase tracking-[0.22em] font-bold mb-4">Speak to the Partners Directly</span>
              <h2 className="font-headline text-[26px] md:text-[32px] text-on-surface font-black tracking-tight leading-[1.1] mb-4">
                Direct accountability.<br />No sales desks.
              </h2>
              <p className="font-body text-[15px] leading-relaxed text-secondary mb-10 max-w-md">Both partners personally review project enquiries and technical scoping. Contact them directly for estimates, site visits, or bid submissions.</p>

              <div className="space-y-4">
                {sectorExperts.map((exp, idx) => (
                  <div key={idx} className="bg-white p-5 flex items-center gap-5 border border-outline-variant/30 hover:border-accent transition-all">
                    <div className="w-12 h-12 bg-accent/5 text-accent font-headline font-bold flex items-center justify-center shrink-0 text-[18px] border border-outline-variant/30">{exp.avatar}</div>
                    <div>
                      <h4 className="font-body text-[15px] text-on-surface font-bold tracking-tight">{exp.name}</h4>
                      <div className="font-label-caps text-[9px] text-secondary uppercase tracking-widest mb-2 font-bold">{exp.role}</div>
                      <div className="flex gap-4 font-body text-[12px] text-on-surface font-medium">
                        <a href="tel:+91" className="flex items-center gap-1.5 hover:text-accent transition-colors"><span className="material-symbols-outlined text-[13px] text-accent">phone</span> Phone</a>
                        <a href="mailto:info@" className="flex items-center gap-1.5 hover:text-accent transition-colors"><span className="material-symbols-outlined text-[13px] text-accent">mail</span> Email</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Contact form */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="lg:w-1/2 p-8 md:p-14 relative bg-white">
              <div className="mb-8">
                <span className="block font-label-caps text-[9px] text-accent uppercase tracking-[0.22em] font-bold mb-3">Send a Project Enquiry</span>
                <h3 className="font-headline text-[22px] text-on-surface font-bold tracking-tight">Tell us what you need.</h3>
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
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-secondary pointer-events-none">expand_more</span>
                </div>
                <textarea name="message" value={formState.message} onChange={handleInputChange} placeholder="Project Brief / Equipment Required *" rows="4" className="w-full bg-surface border border-outline-variant/60 px-4 py-3.5 font-body text-[14px] text-on-surface placeholder:text-secondary/60 focus:outline-none focus:border-accent transition-all resize-none" />

                <div className="relative pt-2">
                  <Button onClick={handleSubmit} disabled={isSubmitting} variant="primary" theme="light" className="w-full" showArrow={false}>
                    {isSubmitting ? 'SENDING...' : 'SEND ENQUIRY'}
                  </Button>
                  <AnimatePresence>
                    {submitSuccess && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-white border border-[#16a34a] flex items-center justify-center gap-2 text-[#16a34a] shadow-lg">
                        <span className="material-symbols-outlined text-[20px] font-bold">check_circle</span>
                        <span className="font-label-caps text-[12px] font-bold uppercase tracking-wider">Received. We will contact you.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="text-center pt-2">
                  <span className="font-label-caps text-[9px] text-secondary uppercase tracking-[0.15em] flex items-center justify-center gap-1.5">
                    <span className="material-symbols-outlined text-[12px]">schedule</span> All enquiries acknowledged within 1 business day
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
