import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { sectorsData, sectorExperts } from '../data/sectorsData';
import { Button } from '../components/ui/Button';

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];



const getProjectImage = (tag) => {
  const tagLower = tag.toLowerCase();
  if (tagLower.includes('health') || tagLower.includes('hospital')) {
    return "https://lh3.googleusercontent.com/aida-public/AB6AXuCYzfnwnCVP9iBzA35pvF58Zbv6LpPN4QoLV5M6fqU1BLNzLEsmSLu5HPVPYfz9mcxzArrBz3WVniGQmCb9ZQPmx3f2D2kjq5mVNYoOEymJvHHxw9rVSgRQ_RV3cHYfVTj2AqyeRlyZAGRQL66qPukbhEn2gxpX51lEy0C52lkBz_V7d9k9FEZQuOcqj0S_hGjrzXgGpOZ_VWYQM-FfNCo-3M2-H-MOu2-sybDSu37IxEPxyE1S4HjBT79U9MMqnEiV0FoptlnVL50";
  }
  if (tagLower.includes('infra') || tagLower.includes('airport')) {
    return "https://lh3.googleusercontent.com/aida-public/AB6AXuAH-XlVfiUims4FuvWQyfp3g5yMEYAXu5W8L_8uYh3Ih-vc25CLSwk9L91FOzpyjX9h727SvBUjEjzTBhCUqwDEK-faQqg481UUBnRtczffpJoLP1anXLQSjSbywiM4hLy9c-vAl8gzbbFVe31jx7-8HSB9kHwjLH0vRwKB0OyvY4pt3NC36MyAoa6pk4iMwlo0D_85spL5SOVT7mbLmZ7U2qyW31OsCPbgwf07HCkxHWpuRz8t4jdBA3Ls1Smb_5Z8nhRvbQ7fLOY";
  }
  if (tagLower.includes('trans') || tagLower.includes('metro') || tagLower.includes('port')) {
    return "https://lh3.googleusercontent.com/aida-public/AB6AXuBs7GWrmO_Y24aIx0d_M368iwbT45iHy_7DqpZ7nch4fGcArhsG3Sgv3kEZJrQgufY4RuhkBeG0nzAVuZdo9xFBim7nRUdHZtnsUXXvA4N-7-sezh59f9vX1KfadhdMLz0Uj-yIVnI5c3gseMueQqUedxsfbbqL5ecgnT83a3xHXTG3h3mwsSqZyjqYaqua9ahuVxPAZbAQY0-mdX7ZKunjvj7d0CRfydIP5nD9glow6KMU8SoKRHqFaWIZB41-0SRYLfF8zA12KHQ";
  }
  return "https://lh3.googleusercontent.com/aida-public/AB6AXuDaZXpdbjLr9LR1AZHlH13OoPIe3jejJ5QnOcZ65UtIXTYGB3FhPhWEysa5L62jlOrhOuIauc30AyV27W61lMnslCrsaPW-417zxIv6lwC0psaVj4kKhOln4z4KLECJ_PGSJfsImraGudDu7PWlQES3CGRX27W8z1SbOwyT-mkSui_n_DpRCHOZJdsdHcWZ0ezqLgJkCeCvxXO-YSfJ6mNTUN7OMzS2PFmVWdky77FtgjIaJHenC1H4lGTuyumwdjVpcqwEBdaHTa0";
};

const getProjectId = (idx, isFlagship = false) => {
  if (isFlagship) return 'p2';
  const ids = ['p4', 'p3', 'p5', 'p6', 'p2', 'p4', 'p2', 'p2'];
  return ids[idx] || 'p2';
};

/* ─── Floating badge (matches ProjectsHero structural pattern) ─────────── */
function Badge({ icon, label, value, delay, className }) {
  return (
    <motion.div
      className={`absolute z-20 flex items-center gap-3 bg-[#111]/90 backdrop-blur-xl border border-white/10 px-4 py-3 shadow-2xl ${className}`}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: [0.25, 1, 0.5, 1] }}
    >
      <div className="w-8 h-8 bg-accent flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-white" style={{ fontSize: '15px' }}>
          {icon}
        </span>
      </div>
      <div>
        <p className="font-label-caps text-[8px] text-accent tracking-[0.22em] uppercase leading-none mb-0.5">
          {label}
        </p>
        <p className="font-headline text-[11px] font-bold text-white leading-tight">{value}</p>
      </div>
    </motion.div>
  );
}

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
      <div className="flex items-center justify-center shrink-0 text-accent pt-0.5 select-none">
        <span className="material-symbols-outlined text-[26px] md:text-[30px] group-hover:scale-110 transition-transform duration-300">{prob.icon}</span>
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
  const telemetryNodes = sector?.telemetryNodes || [];
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
    
    // Dynamically set default projectType in local form based on sectorId
    let defaultType = 'Data Centre';
    if (sectorId === 'critical-power') defaultType = 'Data Centre';
    else if (sectorId === 'thermal-management') defaultType = 'Industrial';
    else if (sectorId === 'racks-enclosures') defaultType = 'Data Centre';
    else if (sectorId === 'monitoring-management') defaultType = 'Government';
    
    setFormState(prev => ({ ...prev, projectType: defaultType }));
  }, [sectorId]);

  const renderHeadlineLine = (line, orangeWord) => {
    if (!line) return null;
    if (!orangeWord) return <span className="text-white">{line}</span>;

    const orangeWordLower = orangeWord.toLowerCase();
    const lineLower = line.toLowerCase();
    
    // Check if orangeWord is present in any of the 3 lines of the headline
    const isOrangeWordPresent = [
      sector.heroHeadline.line1,
      sector.heroHeadline.line2,
      sector.heroHeadline.line3
    ].some(l => l && l.toLowerCase().includes(orangeWordLower));

    if (isOrangeWordPresent) {
      const idx = lineLower.indexOf(orangeWordLower);
      if (idx !== -1) {
        const before = line.substring(0, idx);
        const match = line.substring(idx, idx + orangeWord.length);
        const after = line.substring(idx + orangeWord.length);
        return (
          <>
            <span className="text-white">{before}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">{match}</span>
            <span className="text-white">{after}</span>
          </>
        );
      }
      return <span className="text-white">{line}</span>;
    } else {
      // Prepend behavior fallback for critical-power
      const isLastLine = line === sector.heroHeadline.line3;
      if (isLastLine) {
        return (
          <>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">{orangeWord}</span>{' '}
            <span className="text-white">{line.replace(orangeWord, '').trim()}</span>
          </>
        );
      }
      return <span className="text-white">{line}</span>;
    }
  };

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

  const heroImage = sector?.heroImage || "https://lh3.googleusercontent.com/aida-public/AB6AXuByKdJQFYxhdeQfgoVuKBQBOGbkiDqkvJ1yEAsBbhJ9sg9sFiJqCctfiINJaiAv94iEhcXGcpRnzFGFn9gONe81xv-Y8iRKVROHUjmbg4ddI6MuTm2pkSmGh2x9PQpS1JEEAsAYlWa_PqXB7q2C4z-xKqZg7pPbjHLb4-UA3qQqr-nVA6Zlqwe-QJo-fTSF1VnartNsKpc_aDC3Y0DHBaUcBOiEKo2qvUitDzVpykfjWSSiPGevQVfxSaGS4l6REQ6XvKZtkd4iRS4";

  return (
    <div className="font-body selection:bg-accent selection:text-white bg-surface">

      {/* Injecting Local Self-Contained Styles for HUD Animations */}
      <style>{`
        @keyframes hud-scan {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(380px); opacity: 0; }
        }
        @keyframes sonar-pulse {
          0% { transform: scale(0.6); opacity: 0.6; }
          50% { opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        .animate-hud-scan {
          animation: hud-scan 6s linear infinite;
        }
        .animate-sonar-pulse {
          animation: sonar-pulse 3s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
      `}</style>

      <section
        className="relative w-full bg-[#080808] overflow-hidden flex flex-col"
        style={{ minHeight: '100svh' }}
      >
        {/* ── Full-bleed right image panel */}
        <motion.div
          className="hidden lg:block absolute top-0 right-0 w-[48%] h-full z-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.img
            src={heroImage}
            alt={sector.title}
            className="absolute inset-0 w-full h-full object-cover object-center"
            initial={{ scale: 1.06 }}
            animate={{ scale: 1.02 }}
            transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
          />
          <div className="absolute inset-0 pointer-events-none z-10"
            style={{ background: 'linear-gradient(to right, rgba(8,8,8,0.78) 0%, rgba(8,8,8,0.2) 30%, transparent 60%)' }} />
          <div className="absolute inset-0 pointer-events-none z-10"
            style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.90) 0%, rgba(8,8,8,0.3) 28%, transparent 55%)' }} />
          <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-10"
            style={{ background: 'linear-gradient(to bottom, rgba(8,8,8,0.82) 0%, transparent 100%)' }} />

          {/* Image label overlay */}
          <motion.div
            className="absolute left-10 z-20"
            style={{ bottom: 'calc(72px + 28px)' }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-px bg-accent" />
              <span className="font-label-caps text-[9px] text-accent tracking-[0.22em] uppercase font-bold">{sector.tag}</span>
            </div>
            <p className="font-headline text-[20px] font-black uppercase text-white leading-tight tracking-tight max-w-[260px]">
              {sector.title}
            </p>
          </motion.div>
        </motion.div>

        {/* ── Vertical divider */}
        <div aria-hidden className="hidden lg:block absolute top-0 left-[52%] w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent z-20 pointer-events-none" />

        {/* ── Left content */}
        <div className="relative z-10 flex flex-col flex-1">
          <div className="min-h-[88px] md:min-h-[96px] shrink-0" />

          <div className="w-full flex flex-col flex-1">
            <div className="max-w-[1440px] mx-auto w-full flex flex-col flex-1 px-8 md:px-16">
              <div className="w-full lg:w-[52%] flex flex-col justify-center py-10 lg:py-16 flex-1 lg:pr-16">
                <div className="flex flex-col gap-0">

                  {/* Breadcrumb */}
                  <motion.nav
                    className="flex items-center gap-2 mb-6"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Link to="/" className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Home</Link>
                    <span className="material-symbols-outlined text-white/35 text-[14px]">chevron_right</span>
                    <Link to="/products" className="font-label-caps text-[10px] text-white/35 tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Products</Link>
                    <span className="material-symbols-outlined text-white/35 text-[14px]">chevron_right</span>
                    <span className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase font-bold">{sector.tag}</span>
                  </motion.nav>

                  {/* Eyebrow */}
                  <motion.div
                    className="flex items-center gap-3 mb-5"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
                  >
                    <div className="w-8 h-px bg-accent" />
                    <span className="font-label-caps text-[10px] text-accent tracking-[0.28em] uppercase font-bold">
                      Sector Expertise
                    </span>
                  </motion.div>

                  {/* Headline — word-by-word staggered reveal */}
                  <h1 className="font-headline font-black uppercase leading-[0.92] tracking-tighter mb-7">
                    {[sector.heroHeadline.line1, sector.heroHeadline.line2, sector.heroHeadline.line3].map((line, i) => (
                      <div key={i} className="overflow-hidden block w-max max-w-full">
                        <motion.span
                          className={[
                            'block text-[clamp(28px,4.5vw,68px)]',
                            (() => {
                              const orangeWord = sector.heroHeadline.orangeWord;
                              if (!line || !orangeWord) return 'text-white';
                              const isOrangeWordPresent = [
                                sector.heroHeadline.line1,
                                sector.heroHeadline.line2,
                                sector.heroHeadline.line3
                              ].some(l => l && l.toLowerCase().includes(orangeWord.toLowerCase()));
                              if (isOrangeWordPresent) {
                                  return line.toLowerCase().includes(orangeWord.toLowerCase()) ? '' : 'text-white';
                              }
                              return i === 2 ? '' : 'text-white';
                            })()
                          ].join(' ')}
                          initial={{ y: '110%', opacity: 0 }}
                          animate={{ y: '0%', opacity: 1 }}
                          transition={{ duration: 0.9, delay: 0.2 + i * 0.13, ease: [0.25, 1, 0.5, 1] }}
                        >
                          {renderHeadlineLine(line, sector.heroHeadline.orangeWord)}
                        </motion.span>
                      </div>
                    ))}
                  </h1>

                  {/* Description */}
                  <motion.p
                    className="font-body text-base md:text-lg text-white/50 leading-relaxed font-light w-full mb-9"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {sector.heroDescription}
                  </motion.p>

                  {/* Separator line */}
                  <motion.div
                    className="w-full h-px bg-white/8 mb-9"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                  />

                  {/* CTA Row */}
                  <motion.div
                    className="flex flex-wrap items-center gap-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.65 }}
                  >
                    <Button
                      onClick={() => document.getElementById('consult')?.scrollIntoView({ behavior: 'smooth' })}
                      variant="primary"
                      theme="dark"
                      sweepBg="bg-[#080808]"
                      size="lg"
                      className="rounded-none shadow-2xl shadow-accent/25 text-[10px] tracking-[0.2em] font-bold"
                    >
                      GET A FREE CONSULTATION
                    </Button>
                    <button
                      onClick={() => document.getElementById('proof')?.scrollIntoView({ behavior: 'smooth' })}
                      className="inline-flex items-center gap-2.5 font-label-caps text-[10px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-300 group"
                    >
                      <span className="relative overflow-hidden inline-block">
                        <span className="block group-hover:-translate-y-full transition-transform duration-300">VIEW PAST PROJECTS</span>
                        <span className="absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300 text-accent">VIEW PAST PROJECTS</span>
                      </span>
                      <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-y-1">
                        arrow_downward
                      </span>
                    </button>
                  </motion.div>

                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom Stats Bar */}
        <motion.div
          className="w-full border-t border-white/10 bg-[#080808]/95 backdrop-blur-md shrink-0 relative z-30"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
        >
          <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {sector.contextStats.map((stat, idx) => (
              <div key={idx} className="px-6 py-5 flex flex-col justify-center">
                <span className="font-headline text-[18px] md:text-[22px] font-black text-accent tracking-tight leading-none mb-1">
                  {stat.value}
                </span>
                <span className="font-label-caps text-[9px] text-white/40 tracking-wider uppercase leading-none">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════
          CHALLENGES — Sticky left heading + Zero-gap right grid
      ═══════════════════════════════════════════════════════════════════ */}
      <section ref={challengeSectionRef} className="relative py-28 md:py-36 bg-surface border-b border-outline-variant/30">

        {/* Giant watermark — wrapped in its own overflow-hidden container so it clips without breaking sticky */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
          <span className="absolute top-16 md:top-24 left-8 md:left-16 text-[120px] sm:text-[180px] md:text-[240px] lg:text-[280px] font-headline font-black text-outline-variant/10 leading-none tracking-tighter uppercase whitespace-nowrap">
            RISK
          </span>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            {/* ─── LEFT: Sticky heading panel ─── */}
            <div className="w-full lg:w-[38%] shrink-0 lg:sticky lg:top-[130px] lg:self-start lg:h-fit">
              <div>

                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-[2px] w-8 bg-accent" />
                  <span className="font-label-caps text-[11px] text-accent tracking-[0.2em] uppercase">Sector Challenges</span>
                </div>

                {/* Heading */}
                <h2 className="font-headline text-[32px] md:text-[46px] lg:text-[54px] leading-[1.05] font-black tracking-tighter text-on-surface mb-6">
                  {sector.problemHeader.headline}
                </h2>

                <p className="font-body text-[16px] leading-relaxed text-secondary mb-0 max-w-md">
                  {sector.problemHeader.subhead}
                </p>

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

        <div className="absolute top-16 md:top-24 right-8 md:right-16 pointer-events-none select-none z-0">
          <span className="text-[120px] sm:text-[180px] md:text-[240px] lg:text-[280px] font-headline font-black text-outline-variant/10 leading-none tracking-tighter uppercase whitespace-nowrap">
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

        <div className="absolute top-16 md:top-24 left-8 md:left-16 pointer-events-none select-none z-0">
          <span className="text-[120px] sm:text-[180px] md:text-[240px] lg:text-[280px] font-headline font-black text-outline-variant/10 leading-none tracking-tighter uppercase whitespace-nowrap">
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
                    <div className="flex items-center justify-center shrink-0 text-accent select-none">
                      <span className="material-symbols-outlined text-[26px] md:text-[30px] group-hover:scale-110 transition-transform duration-300">{node.icon}</span>
                    </div>
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
                <div className="flex items-start mb-6 text-accent select-none">
                  <span className="material-symbols-outlined text-[30px] md:text-[34px] group-hover:scale-110 transition-transform duration-300">{prod.icon}</span>
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

        <div className="absolute top-16 md:top-24 right-8 md:right-16 pointer-events-none select-none z-0">
          <span className="text-[120px] sm:text-[180px] md:text-[240px] lg:text-[280px] font-headline font-black text-outline-variant/10 leading-none tracking-tighter uppercase whitespace-nowrap">
            PROOF
          </span>
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

          {/* Flagship project card - Redesigned into clean, visually stunning layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="group relative bg-[#0d0d0d] text-white flex flex-col lg:flex-row mb-12 border border-outline-variant/30 overflow-hidden shadow-2xl"
          >
            {/* The clickable router overlay */}
            <Link to={`/projects/${getProjectId(0, true)}`} className="absolute inset-0 z-30" aria-label={`View details for ${sector.flagshipProject.name}`} />

            {/* Left: Beautiful zoom-enabled visual canvas */}
            <div className="w-full lg:w-[45%] relative min-h-[300px] lg:min-h-auto overflow-hidden border-b lg:border-b-0 lg:border-r border-outline-variant/30">
              <img 
                src={getProjectImage(sector.flagshipProject.tag || 'infra')}
                alt={sector.flagshipProject.name}
                className="w-full h-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
              
              {/* Floating tags */}
              <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                <span className="bg-accent text-white font-label-caps text-[9px] tracking-[0.2em] px-3.5 py-1.5 uppercase font-bold">
                  FLAGSHIP PROJECT
                </span>
              </div>

              <div className="absolute top-6 right-6 z-10 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/10">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-label-caps text-[8px] tracking-[0.15em] text-white font-bold">
                  ACTIVE PIPELINE
                </span>
              </div>

              {/* Bottom stats overlay on image */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="flex items-center gap-2 text-white/50 mb-1">
                  <span className="material-symbols-outlined text-[16px] text-accent">location_on</span>
                  <span className="font-label-caps text-[9px] tracking-[0.16em] uppercase">UTTARAKHAND, INDIA</span>
                </div>
                <h4 className="font-headline text-[13px] font-bold text-white tracking-[0.05em] uppercase">ARIHANTAA POWERTECH DIVISION</h4>
              </div>
            </div>

            {/* Right: Technical specifications and statistics */}
            <div className="w-full lg:w-[55%] p-8 md:p-12 flex flex-col justify-between space-y-8 bg-surface-container-lowest/15 relative z-10">
              <div>
                <span className="text-[10px] text-accent font-label-caps tracking-[0.25em] font-bold block mb-3">EXPERIENCE CASE STUDY</span>
                <h3 className="font-headline text-[22px] md:text-[28px] font-black tracking-tight text-white group-hover:text-accent transition-colors duration-300 leading-tight uppercase mb-4">
                  {sector.flagshipProject.name}
                </h3>
                <div className="font-label-caps text-[10px] text-white/50 uppercase tracking-[0.15em] border-b border-outline-variant/15 pb-4 mb-4">
                  Client: <span className="text-white font-bold">{sector.flagshipProject.client}</span>
                </div>
                <p className="font-body text-[14px] leading-relaxed text-white/60">
                  {sector.flagshipProject.scope}
                </p>
              </div>

              {/* Sub-grid with technical statistics */}
              <div className="grid grid-cols-3 gap-4 border-t border-b border-outline-variant/15 py-6">
                {sector.flagshipProject.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col justify-center">
                    <div className="font-headline text-[20px] md:text-[24px] text-accent font-black leading-none mb-1">{stat.value}</div>
                    <div className="font-label-caps text-[8px] text-white/40 uppercase tracking-[0.12em] font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Progress gauge metrics */}
              <div className="space-y-2 pt-2">
                <div className="w-full h-[4px] bg-white/10 relative overflow-hidden">
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: '95%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                </div>
                <div className="flex justify-between font-label-caps text-[9px] text-white/45 tracking-[0.16em]">
                  <span>CONTRACT SCHEDULE // LIVE</span>
                  <span className="text-accent font-bold">95% COMPLETE</span>
                </div>
              </div>

              {/* Action trigger bar */}
              <div className="pt-4 flex items-center justify-between border-t border-white/5">
                <span className="font-label-caps text-[9px] text-white/50 tracking-[0.16em] uppercase">EXPLORE FULL SCHEMATICS & SLA</span>
                <div className="w-10 h-10 border border-outline-variant/30 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                  <span className="material-symbols-outlined text-[20px] text-white group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5">arrow_forward</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Supporting project cards — Zero-gap visual grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-outline-variant/30 gap-0 bg-white shadow-2xl">
            {sector.supportingProjects.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.06, ease: [0.25, 1, 0.5, 1] }}
                className="group relative border-r border-b border-outline-variant/30 flex flex-col justify-between hover:bg-accent/[0.005] transition-all duration-300"
              >
                {/* Clickable router link overlay */}
                <Link to={`/projects/${getProjectId(idx, false)}`} className="absolute inset-0 z-20" aria-label={`View details for ${proj.name}`} />

                {/* Card Top: Visual Canvas */}
                <div className="relative h-44 overflow-hidden border-b border-outline-variant/20">
                  <img 
                    src={getProjectImage(proj.tag)}
                    alt={proj.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20 pointer-events-none" />

                  {/* Dynamic Category Badges */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-black/60 backdrop-blur-md text-white font-label-caps text-[8px] tracking-[0.16em] px-2 py-0.5 border border-white/10 uppercase">
                      {proj.tag.toUpperCase()}
                    </span>
                  </div>

                  {/* Mapped completion indicators */}
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 border border-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="font-label-caps text-[7.5px] tracking-[0.12em] text-white">
                      COMPLETED
                    </span>
                  </div>
                </div>

                {/* Card Middle: Rich Typography Metadata */}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Mapped Location with icon pin */}
                    <div className="flex items-center gap-1.5 text-secondary/60">
                      <span className="material-symbols-outlined text-[18px] text-accent">location_on</span>
                      <span className="font-label-caps text-[8px] tracking-[0.16em] uppercase">{proj.location.toUpperCase()}</span>
                    </div>

                    {/* Mapped Project Title */}
                    <h4 className="font-headline text-[14px] text-on-surface font-extrabold tracking-tight leading-snug group-hover:text-accent transition-colors duration-300 uppercase">
                      {proj.name}
                    </h4>

                    {/* Mapped Client detail */}
                    <div className="font-label-caps text-[8.5px] text-secondary uppercase tracking-wider">
                      Client: <span className="font-bold text-on-surface/80">{proj.client}</span>
                    </div>
                  </div>

                  {/* Card Bottom: Animated gauge bar + cost stats */}
                  <div className="space-y-4 pt-2">
                    <div className="flex justify-between text-[10px] font-body text-secondary border-t border-outline-variant/20 pt-3">
                      <span>PROJECT VALUE</span>
                      <span className="font-bold text-accent">{proj.cost}</span>
                    </div>

                    {/* Progress Gauge */}
                    <div className="space-y-1">
                      <div className="w-full h-[2px] bg-outline-variant/15 relative overflow-hidden">
                        <motion.div
                          className="absolute left-0 top-0 h-full bg-accent"
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.0, ease: 'easeOut', delay: 0.1 }}
                        />
                      </div>
                      <div className="flex justify-between font-label-caps text-[8px] text-secondary/40 tracking-[0.12em]">
                        <span>{proj.durationLabel.toUpperCase()}</span>
                        <span className="text-secondary/70">100% COMPLETE</span>
                      </div>
                    </div>

                    {/* Action trigger arrow */}
                    <div className="pt-2 flex items-center justify-between border-t border-outline-variant/10">
                      <span className="font-label-caps text-[8.5px] text-secondary/60 tracking-[0.14em]">VIEW DETAILS</span>
                      <div className="w-7 h-7 border border-outline-variant/40 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                        <span className="material-symbols-outlined text-[16px] text-secondary group-hover:text-white transition-colors duration-300">arrow_forward</span>
                      </div>
                    </div>
                  </div>
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
