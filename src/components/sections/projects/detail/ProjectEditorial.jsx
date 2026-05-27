import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function ProjectEditorial({ editorial }) {
  const [activeSection, setActiveSection] = useState('project-overview');

  // Precision Scroll Spy using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -55% 0px', // Target middle quadrant of screen
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll('article[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -130; // Offset breathing room below global header
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Auto horizontal scroll to keep active tab centered in mobile/tablet view
  useEffect(() => {
    const container = document.getElementById('mobile-nav-container');
    const activeBtn = container?.querySelector(`[data-id="${activeSection}"]`);
    if (container && activeBtn) {
      const containerWidth = container.clientWidth;
      const btnOffsetLeft = activeBtn.offsetLeft;
      const btnWidth = activeBtn.clientWidth;
      
      container.scrollTo({
        left: btnOffsetLeft - (containerWidth / 2) + (btnWidth / 2),
        behavior: 'smooth'
      });
    }
  }, [activeSection]);

  const navItems = [
    { id: 'project-overview', label: 'Project Overview' },
    { id: 'the-challenge', label: 'The Challenge' },
    { id: 'our-scope', label: 'Our Scope' },
    { id: 'execution-approach', label: 'Execution Approach' },
    { id: 'key-outcomes', label: 'Key Outcomes' },
  ];

  if (!editorial) return null;

  const { overview, challenge, scope, execution, outcomes } = editorial;

  // Resolve custom inline SVGs dynamically
  const getChallengeIcon = (iconId) => {
    switch (iconId) {
      case 'bolt':
        return (
          <svg className="w-8 h-8 text-secondary group-hover:text-accent transition-colors duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        );
      case 'fan':
        return (
          <svg className="w-8 h-8 text-secondary group-hover:text-accent transition-colors duration-500 animate-[spin_12s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2v20M2 12h20M12 12m-3 0a3 3 0 1 0 6 0 3 3 0 1 0 -6 0" />
            <path d="M7.5 7.5l9 9M16.5 7.5l-9 9" />
          </svg>
        );
      case 'nodes':
      default:
        return (
          <svg className="w-8 h-8 text-secondary group-hover:text-accent transition-colors duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="5" r="2.5" />
            <circle cx="5" cy="19" r="2.5" />
            <circle cx="19" cy="19" r="2.5" />
            <path d="M12 7.5V14M12 14l-4.5 2.5M12 14l4.5 2.5" />
          </svg>
        );
    }
  };

  return (
    <div className="w-full bg-surface relative z-10 border-b border-outline-variant/30">
      
      {/* ── Mobile Nav Pill Row (Sticky Below Header) ── */}
      <div id="mobile-nav-container" className="lg:hidden w-full overflow-x-auto no-scrollbar flex gap-4 border-b border-outline-variant/40 py-4 sticky top-[64px] md:top-[80px] bg-surface/90 backdrop-blur-md z-50 px-4 sm:px-8 md:px-16">
        {navItems.map((item) => (
          <button
            key={item.id}
            data-id={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative whitespace-nowrap font-label-caps text-[10px] tracking-[0.18em] uppercase transition-colors py-2 px-3 ${
              activeSection === item.id ? 'text-accent font-bold' : 'text-secondary hover:text-on-surface'
            }`}
          >
            {item.label}
            {activeSection === item.id && (
              <motion.div
                layoutId="activeHorizontalLine"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 px-4 sm:px-8 md:px-16 py-16 md:py-24 relative">
        
        {/* ── Desktop Sticky Left Sidebar (Asymmetric 3-Column) ── */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-[140px] h-fit self-start pl-2">
          <div className="relative border-l border-outline-variant/30 py-2">
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative text-left pl-8 font-label-caps text-[11px] tracking-[0.2em] uppercase transition-all duration-300 py-1 ${
                      isActive 
                        ? 'text-accent font-bold translate-x-1.5' 
                        : 'text-secondary hover:text-on-surface hover:translate-x-0.5'
                    }`}
                  >
                    {/* Active vertical bar on the timeline line */}
                    {isActive && (
                      <motion.div
                        layoutId="activeVerticalIndicator"
                        className="absolute left-[-2.5px] top-1/2 -translate-y-1/2 w-[4px] h-6 bg-accent rounded-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                      />
                    )}
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>
 
        {/* ── Main Editorial Content Column (9-Column) ── */}
        <main className="w-full lg:col-span-9 flex flex-col gap-16 md:gap-24">
          
          {/* Sub-section 01: Project Overview */}
          <article id="project-overview" className="scroll-mt-36">
            {/* Visual Chapter Opener */}
            <div className="flex flex-col gap-4 mb-16">
              <div className="flex items-center gap-4">
                <span className="font-headline font-black text-2xl md:text-3xl text-accent tracking-tighter">01 /</span>
                <span className="font-label-caps text-[11px] tracking-[0.25em] text-secondary uppercase font-bold">{overview.badge}</span>
              </div>
              <div className="w-full h-px bg-gradient-to-r from-outline-variant/60 via-outline-variant/30 to-transparent" />
            </div>

            <motion.h2 
              className="font-headline font-semibold text-[38px] md:text-[52px] text-secondary tracking-tighter leading-[1.05] mb-12"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              {overview.headline}
            </motion.h2>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 font-body text-[16px] md:text-[17px] text-on-surface-variant leading-[1.85] font-light"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="lg:col-span-7">
                <p className="first-letter:text-6xl first-letter:font-black first-letter:text-accent first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] first-letter:pt-1">
                  {overview.p1}
                </p>
              </div>
              <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-outline-variant/40 pt-8 lg:pt-0 lg:pl-10">
                <p>
                  {overview.p2}
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative mt-16 bg-inverse-surface text-white p-8 md:p-12 overflow-hidden"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="absolute right-0 bottom-0 text-[100px] sm:text-[140px] md:text-[180px] font-black text-white/[0.02] select-none leading-none translate-y-1/3 translate-x-10 font-headline pointer-events-none">
                {overview.watermark}
              </div>
              <span className="material-symbols-outlined text-accent text-5xl mb-6 select-none">format_quote</span>
              <div className="relative z-10 pl-4 md:pl-8 border-l-2 border-accent/80 py-1">
                <p className="font-headline font-semibold text-[22px] md:text-[28px] text-white tracking-tight leading-[1.4] mb-6">
                  {overview.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-accent" />
                  <span className="font-label-caps text-[9px] tracking-[0.25em] text-white/50 uppercase font-bold">
                    {overview.quoteAuthor || 'Project Directorate'}
                  </span>
                </div>
              </div>
            </motion.div>
          </article>

          {/* Sub-section 02: The Challenge */}
          <article id="the-challenge" className="scroll-mt-36">
            {/* Visual Chapter Opener */}
            <div className="flex flex-col gap-4 mb-16">
              <div className="flex items-center gap-4">
                <span className="font-headline font-black text-2xl md:text-3xl text-accent tracking-tighter">02 /</span>
                <span className="font-label-caps text-[11px] tracking-[0.25em] text-secondary uppercase font-bold">{challenge.badge}</span>
              </div>
              <div className="w-full h-px bg-gradient-to-r from-outline-variant/60 via-outline-variant/30 to-transparent" />
            </div>
            
            <motion.h3 
              className="font-headline font-semibold text-[32px] md:text-[40px] text-secondary leading-[1.15] tracking-tight mb-12 max-w-3xl"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              {challenge.headline}
            </motion.h3>

            <motion.div 
              className="pl-6 md:pl-10 border-l-2 border-accent/30 mb-20 max-w-4xl"
              initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="font-body text-[18px] md:text-[21px] text-on-surface-variant leading-[1.65] font-light">
                {challenge.desc}
              </p>
            </motion.div>

            {/* Grid of complexity factors */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {challenge.items.map((item, i) => (
                <motion.div 
                  key={i}
                  className="bg-surface-container-lowest border border-outline-variant/40 p-6 md:p-8 flex flex-col justify-between group hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 relative"
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      {getChallengeIcon(item.iconId)}
                      <span className="font-headline font-black text-[24px] text-outline-variant/60 group-hover:text-accent/30 transition-colors duration-500 leading-none select-none">
                        {item.num}
                      </span>
                    </div>
                    <h4 className="font-headline font-semibold text-[18px] text-secondary leading-tight mb-4 group-hover:text-accent transition-colors duration-300">{item.title}</h4>
                    <p className="font-body text-[14px] text-on-surface-variant/80 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </article>

          {/* Sub-section 03: Our Scope */}
          <article id="our-scope" className="scroll-mt-36">
            {/* Visual Chapter Opener */}
            <div className="flex flex-col gap-4 mb-16">
              <div className="flex items-center gap-4">
                <span className="font-headline font-black text-2xl md:text-3xl text-accent tracking-tighter">03 /</span>
                <span className="font-label-caps text-[11px] tracking-[0.25em] text-secondary uppercase font-bold">{scope.badge}</span>
              </div>
              <div className="w-full h-px bg-gradient-to-r from-outline-variant/60 via-outline-variant/30 to-transparent" />
            </div>

            <motion.h2 
              className="font-headline font-semibold text-[38px] md:text-[52px] text-secondary tracking-tighter leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              {scope.headline}
            </motion.h2>
            <motion.p 
              className="font-body text-[17px] text-on-surface-variant leading-relaxed font-light mb-16 max-w-2xl"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              {scope.desc}
            </motion.p>
            
            <div className="flex flex-col gap-8">
              {scope.blocks.map((block, i) => (
                <motion.div 
                  key={i}
                  className="bg-surface-container-lowest border border-outline-variant/30 p-6 sm:p-8 md:p-12 group hover:border-accent/30 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    {/* Left side: Tag and Context */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                      <span className="font-label-caps text-[10px] tracking-[0.2em] font-black text-accent block">
                        [{block.code}]
                      </span>
                      <h3 className="font-headline font-bold text-[26px] md:text-[30px] text-secondary tracking-tight leading-none group-hover:text-accent transition-colors duration-300">
                        {block.title}
                      </h3>
                      <p className="font-body text-[14px] text-on-surface-variant font-light leading-relaxed">
                        {block.desc}
                      </p>
                    </div>
                    
                    {/* Right side: Checklist Grid */}
                    <div className="lg:col-span-7 flex items-center">
                      <ul className="w-full flex flex-col gap-0 border-t lg:border-t-0 lg:border-l border-outline-variant/30 pt-6 lg:pt-0 lg:pl-10">
                        {block.points.map((point, j) => (
                          <li key={j} className="relative py-3.5 font-label-caps text-[10px] md:text-[11px] text-secondary uppercase tracking-[0.16em] border-b border-outline-variant/30 last:border-0 flex items-center gap-4 group/item">
                            <div className="w-5 h-5 bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0 group-hover/item:bg-accent transition-colors duration-300">
                              <span className="material-symbols-outlined text-[12px] text-accent group-hover/item:text-on-primary transition-colors duration-300">
                                check
                              </span>
                            </div>
                            <span className="group-hover/item:text-on-surface transition-colors">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </article>

          {/* Sub-section 04: Execution Approach */}
          <article id="execution-approach" className="scroll-mt-36">
            {/* Visual Chapter Opener */}
            <div className="flex flex-col gap-4 mb-16">
              <div className="flex items-center gap-4">
                <span className="font-headline font-black text-2xl md:text-3xl text-accent tracking-tighter">04 /</span>
                <span className="font-label-caps text-[11px] tracking-[0.25em] text-secondary uppercase font-bold">{execution.badge}</span>
              </div>
              <div className="w-full h-px bg-gradient-to-r from-outline-variant/60 via-outline-variant/30 to-transparent" />
            </div>

            <motion.h2 
              className="font-headline font-semibold text-[38px] md:text-[52px] text-secondary tracking-tighter leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              {execution.headline}
            </motion.h2>
            <motion.p 
              className="font-body text-[17px] text-on-surface-variant leading-relaxed font-light mb-16 max-w-2xl"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              {execution.desc}
            </motion.p>

            {/* Timeline Tree */}
            <div className="relative border-l border-outline-variant/40 pl-6 md:pl-10 ml-4 py-2 space-y-12">
              {execution.steps.map((step, i) => (
                <motion.div 
                  key={i} 
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  {/* Outer timeline indicator node */}
                  <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border border-accent bg-surface flex items-center justify-center z-10 group-hover:bg-accent transition-colors duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-surface transition-colors" />
                  </div>

                  <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 md:p-8 hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                    <span className="font-label-caps text-[9px] tracking-[0.2em] font-black text-accent block mb-2">
                      {step.phase}
                    </span>
                    <h3 className="font-headline font-semibold text-[18px] md:text-[20px] text-secondary leading-tight mb-4 group-hover:text-accent transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="font-body text-[14px] text-on-surface-variant font-light leading-relaxed mb-6">
                      {step.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.tags.map((tag, tIndex) => (
                        <span key={tIndex} className="bg-surface-container text-secondary font-label-caps text-[8px] tracking-[0.15em] px-2.5 py-1 uppercase rounded-none">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </article>
          
          {/* Sub-section 05: Key Outcomes */}
          <article id="key-outcomes" className="scroll-mt-36">
            {/* Visual Chapter Opener */}
            <div className="flex flex-col gap-4 mb-16">
              <div className="flex items-center gap-4">
                <span className="font-headline font-black text-2xl md:text-3xl text-accent tracking-tighter">05 /</span>
                <span className="font-label-caps text-[11px] tracking-[0.25em] text-secondary uppercase font-bold">{outcomes.badge}</span>
              </div>
              <div className="w-full h-px bg-gradient-to-r from-outline-variant/60 via-outline-variant/30 to-transparent" />
            </div>

            <motion.h2 
              className="font-headline font-semibold text-[38px] md:text-[52px] text-secondary tracking-tighter leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              {outcomes.headline}
            </motion.h2>
            <motion.p 
              className="font-body text-[17px] text-on-surface-variant leading-relaxed font-light mb-16 max-w-2xl"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              {outcomes.desc}
            </motion.p>

            {/* Metrics Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {outcomes.metrics.map((metric, i) => (
                <motion.div 
                  key={i}
                  className="bg-surface-container-lowest border border-outline-variant/30 p-8 flex flex-col justify-between group hover:border-accent/30 hover:shadow-lg transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div>
                    <span className="font-headline font-black text-4xl md:text-5xl lg:text-6xl text-accent tracking-tightest mb-6 block group-hover:scale-105 origin-left transition-transform duration-300 select-none">
                      {metric.value}
                    </span>
                    <h4 className="font-label-caps text-[10px] tracking-[0.2em] text-secondary font-bold mb-4 uppercase leading-relaxed">
                      {metric.label}
                    </h4>
                    <p className="font-body text-[14px] text-on-surface-variant font-light leading-relaxed">
                      {metric.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </article>

        </main>
      </div>
    </div>
  );
}
