import { motion, useScroll, useSpring } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { UnifiedCTA } from '../components/sections/UnifiedCTA';

export function NewsArticle() {
  const { articleId } = useParams();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  // Reading progress bar setup
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-background text-on-background font-body min-h-screen">
      
      {/* Reading Progress Bar */}
      <motion.div 
        className="fixed top-20 left-0 right-0 h-1 bg-accent z-40 origin-left"
        style={{ scaleX }}
      />

      <main className="flex-grow">
        
        {/* ── High-Profile Cinematic Dark Hero Header ───────────────────── */}
        <section 
          className="relative bg-[#08090c] text-white pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden border-b border-outline-variant/30 flex flex-col justify-center"
          style={{ minHeight: '65svh' }}
        >
          {/* Two-Tone Sunset Orange & Cobalt Blue Ambient Spotlight System */}
          <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
            <motion.div
              className="absolute -top-[30%] -left-[10%] w-[65%] h-[80%] rounded-full"
              style={{
                background: 'radial-gradient(ellipse, rgba(233,101,43,0.14) 0%, transparent 75%)',
                filter: 'blur(90px)',
              }}
              animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[80%] rounded-full"
              style={{
                background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)',
                filter: 'blur(100px)',
              }}
              animate={{ scale: [1, 1.12, 1], opacity: [0.7, 0.9, 0.7] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
          </div>

          <div className="max-w-[1440px] mx-auto relative z-10 w-full px-8 md:px-16 flex flex-col gap-6">
            
            {/* Breadcrumb Navigation */}
            <motion.nav
              className="flex items-center gap-2 mb-2"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Home</Link>
              <span className="material-symbols-outlined text-white/35 text-[14px] select-none flex items-center justify-center">chevron_right</span>
              <Link to="/news" className="font-label-caps text-[10px] text-white/35 tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">News Hub</Link>
              <span className="material-symbols-outlined text-white/35 text-[14px] select-none flex items-center justify-center">chevron_right</span>
              <span className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase">Press Release</span>
            </motion.nav>

            {/* Tags */}
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-block font-label-caps text-[10px] text-accent uppercase tracking-[0.2em] border border-accent/30 px-4 py-1.5 bg-accent/5 backdrop-blur-md">
                Press Release
              </span>
              <span className="inline-block font-label-caps text-[10px] text-white/50 uppercase tracking-[0.2em] border border-white/10 px-4 py-1.5">
                Critical Power
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              className="font-headline text-[36px] md:text-[56px] lg:text-[68px] leading-[1.08] font-black tracking-tighter uppercase max-w-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-white">Eastern Grid Expansion:</span><br />
              <span className="text-white">Securing ₹240 Cr. </span>
              <span className="text-accent whitespace-nowrap">Infrastructure Contract</span>
            </motion.h1>

            {/* Meta Data */}
            <motion.div 
              className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-white/50 font-label-caps text-[10px] tracking-[0.2em] uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-accent">calendar_today</span>
                October 24, 2026
              </span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-accent">schedule</span>
                6 min read
              </span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-accent">category</span>
                Grid Systems
              </span>
            </motion.div>
          </div>
        </section>

        {/* ── Article Body Container ────────────────────────────────────── */}
        <article className="max-w-[1440px] mx-auto px-8 md:px-16 pt-16 pb-24 relative z-10">
          
          {/* ── Featured Substation Image with B2B Border Ticks ──────────── */}
          <motion.div 
            className="w-full mb-16 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="relative overflow-hidden bg-surface-container-low max-h-[600px] border border-outline-variant/30">
              {/* Console corner ticks */}
              <div className="absolute top-[-1px] left-[-1px] w-3.5 h-3.5 border-t-2 border-l-2 border-accent pointer-events-none z-10" />
              <div className="absolute top-[-1px] right-[-1px] w-3.5 h-3.5 border-t-2 border-r-2 border-accent pointer-events-none z-10" />
              <div className="absolute bottom-[-1px] right-[-1px] w-3.5 h-3.5 border-b-2 border-r-2 border-accent pointer-events-none z-10" />
              <div className="absolute bottom-[-1px] left-[-1px] w-3.5 h-3.5 border-b-2 border-l-2 border-accent pointer-events-none z-10" />

              <img 
                alt="Massive industrial electrical substation" 
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3LAEI6CRn5IIILEjifzbbaLhYXGbuWVwYk_VDSIkDvIo1jzDxWBU7qLRp6ROjH0LMIDq1UX1f7Rigb_h4tMQp4toFyQTydTDdwq1olOh1VUesNHNMFsy1iJbqhvQpYDe0y8YlhCJ_5ZGPx_KGp80NrUsNPoeFrWbgSTr9fxndwmpVE1wpQnsGbK-GVGG0_TEyouXlNdPtECSHJ2IUZf640erkXOAtL3HarvdPW35IyCg8upQ1v8pcaoaZO4KLDiZebs5MM8ZewSo"
              />
            </div>
            <p className="mt-4 font-body text-[14px] text-secondary border-l-2 border-accent pl-4 font-light">
              Phase II of the Eastern Grid heavy systems installation, featuring dual 200kVA backup modules.
            </p>
          </motion.div>

          {/* ── Two Column Article Layout ──────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Main Content Column */}
            <div className="lg:col-span-8 max-w-[800px] space-y-8">
              <motion.p 
                className="font-body text-[18px] md:text-[20px] text-on-surface leading-relaxed font-light text-justify"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }}
              >
                In a decisive move to fortify regional power stability, Industrial Authority Engineering has officially secured the Phase II contract for the Eastern Grid expansion project. The agreement, valued at a substantial ₹240 Crores, mandates the design, deployment, and structural integration of advanced Uninterruptible Power Supply (UPS) architecture and critical load balancing systems.
              </motion.p>
              
              <motion.h2 
                className="font-headline text-[28px] md:text-[36px] font-black text-on-surface uppercase tracking-tight pt-6 border-b border-outline-variant/30 pb-3"
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              >
                Strategic Redundancy Architecture
              </motion.h2>
              
              <motion.p 
                className="font-body text-[15px] md:text-[17px] text-secondary leading-relaxed font-light text-justify"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              >
                The scope of work encompasses the installation of a multi-tiered redundant power matrix. Engineered to withstand catastrophic grid failures, the system leverages high-capacity lithium-ion Battery Energy Storage Systems (BESS) coupled with dynamic rotary UPS units. This hybrid approach ensures seamless transition times sub-2 milliseconds, critical for the interconnected data centers reliant on this sub-station.
              </motion.p>

              {/* Stat Callout Box in premium console look */}
              <motion.div 
                className="my-16 p-8 bg-white/[0.02] border border-outline-variant/40 shadow-2xl flex flex-col md:flex-row gap-8 justify-around items-center relative overflow-hidden backdrop-blur-md"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              >
                {/* L-shaped accents */}
                <div className="absolute top-[-1px] left-[-1px] w-3 h-3 border-t-2 border-l-2 border-accent pointer-events-none" />
                <div className="absolute top-[-1px] right-[-1px] w-3 h-3 border-t-2 border-r-2 border-accent pointer-events-none" />
                <div className="absolute bottom-[-1px] right-[-1px] w-3 h-3 border-b-2 border-r-2 border-accent pointer-events-none" />
                <div className="absolute bottom-[-1px] left-[-1px] w-3 h-3 border-b-2 border-l-2 border-accent pointer-events-none" />

                <div className="text-center group">
                  <div className="font-headline text-[44px] font-black text-accent group-hover:scale-105 transition-transform duration-300">200<span className="text-[20px]">kVA</span></div>
                  <div className="font-label-caps text-[9px] text-secondary tracking-[0.2em] uppercase mt-2">Peak Capacity / Module</div>
                </div>
                <div className="hidden md:block w-px h-12 bg-outline-variant/50"></div>
                <div className="text-center group">
                  <div className="font-headline text-[44px] font-black text-accent group-hover:scale-105 transition-transform duration-300">99.999%</div>
                  <div className="font-label-caps text-[9px] text-secondary tracking-[0.2em] uppercase mt-2">Targeted Uptime</div>
                </div>
                <div className="hidden md:block w-px h-12 bg-outline-variant/50"></div>
                <div className="text-center group">
                  <div className="font-headline text-[44px] font-black text-accent group-hover:scale-105 transition-transform duration-300">18</div>
                  <div className="font-label-caps text-[9px] text-secondary tracking-[0.2em] uppercase mt-2">Months to Delivery</div>
                </div>
              </motion.div>

              <motion.h2 
                className="font-headline text-[28px] md:text-[36px] font-black text-on-surface uppercase tracking-tight pt-6 border-b border-outline-variant/30 pb-3"
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              >
                Compliance & Environmental Impact
              </motion.h2>
              
              <motion.p 
                className="font-body text-[15px] md:text-[17px] text-secondary leading-relaxed font-light text-justify"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              >
                Beyond sheer power throughput, the project adheres to the stringent ISO 14001 environmental management standards. The integration of solid-state transformers aims to reduce ambient thermal waste by 14% compared to legacy installations.
              </motion.p>

              {/* Pull Quote */}
              <motion.blockquote 
                className="my-16 pl-6 md:pl-8 border-l-[3px] border-accent relative"
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              >
                <p className="font-headline text-[22px] md:text-[28px] text-on-surface font-medium italic leading-snug">
                  "This contract is not merely an installation; it is an architectural commitment to zero-downtime tolerance in an increasingly volatile energy landscape."
                </p>
                <footer className="mt-4 font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase font-bold">
                  — Dr. Aris Thorne, Chief Engineer, Heavy Systems Div.
                </footer>
              </motion.blockquote>

              <motion.p 
                className="font-body text-[15px] md:text-[17px] text-secondary leading-relaxed font-light text-justify"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              >
                Procurement of the primary stator cores will commence immediately, with ground breaking scheduled for late Q4. Investors and stakeholders can track the milestone progress via the Live Projects dashboard.
              </motion.p>

              {/* Article Footer / Meta */}
              <motion.div 
                className="mt-20 pt-8 border-t border-outline-variant/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              >
                <div className="flex flex-wrap gap-2">
                  <span className="font-label-caps text-[9px] tracking-[0.15em] text-secondary bg-surface-container-low px-4 py-2 hover:bg-accent hover:text-white transition-colors cursor-pointer uppercase">#UPS</span>
                  <span className="font-label-caps text-[9px] tracking-[0.15em] text-secondary bg-surface-container-low px-4 py-2 hover:bg-accent hover:text-white transition-colors cursor-pointer uppercase">#DataCentre</span>
                  <span className="font-label-caps text-[9px] tracking-[0.15em] text-secondary bg-surface-container-low px-4 py-2 hover:bg-accent hover:text-white transition-colors cursor-pointer uppercase">#GridExpansion</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-label-caps text-[10px] text-secondary uppercase tracking-[0.2em] font-bold">Share:</span>
                  <button className="w-9 h-9 border border-outline-variant/50 rounded-none flex items-center justify-center text-secondary hover:border-accent hover:text-accent transition-colors">
                    <span className="material-symbols-outlined text-[18px]">link</span>
                  </button>
                  <button className="w-9 h-9 border border-outline-variant/50 rounded-none flex items-center justify-center text-secondary hover:border-accent hover:text-accent transition-colors">
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                  </button>
                </div>
              </motion.div>

              {/* Next / Prev Navigation */}
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-outline-variant/30">
                <Link to="#" className="p-6 border border-outline-variant/40 hover:border-accent bg-surface-container-lowest shadow-sm hover:shadow-xl group transition-all duration-300 flex flex-col gap-3 relative">
                  <div className="absolute top-[-1px] left-[-1px] w-2 h-2 border-t border-l border-accent/0 group-hover:border-accent/40 pointer-events-none" />
                  <div className="absolute bottom-[-1px] right-[-1px] w-2 h-2 border-b border-r border-accent/0 group-hover:border-accent/40 pointer-events-none" />
                  
                  <span className="font-label-caps text-[9px] text-secondary flex items-center gap-2 group-hover:text-accent transition-colors tracking-[0.2em] uppercase font-bold">
                    <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                    Previous Insight
                  </span>
                  <span className="font-headline text-[16px] text-on-surface font-bold group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                    Q3 Maintenance Protocols Updated for Heavy Machinery
                  </span>
                </Link>
                <Link to="#" className="p-6 border border-outline-variant/40 hover:border-accent bg-surface-container-lowest shadow-sm hover:shadow-xl group transition-all duration-300 flex flex-col gap-3 sm:text-right relative">
                  <div className="absolute top-[-1px] right-[-1px] w-2 h-2 border-t border-r border-accent/0 group-hover:border-accent/40 pointer-events-none" />
                  <div className="absolute bottom-[-1px] left-[-1px] w-2 h-2 border-b border-l border-accent/0 group-hover:border-accent/40 pointer-events-none" />

                  <span className="font-label-caps text-[9px] text-secondary flex items-center sm:justify-end gap-2 group-hover:text-accent transition-colors tracking-[0.2em] uppercase font-bold">
                    Next Insight
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </span>
                  <span className="font-headline text-[16px] text-on-surface font-bold group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                    New Material Tolerances in Turbine Construction
                  </span>
                </Link>
              </div>

            </div>

            {/* ── Sidebar ──────────────────────────────────────────────────────── */}
            <aside className="lg:col-span-4 relative mt-16 lg:mt-0">
              <div className="sticky top-32 flex flex-col gap-12">
                
                {/* Author Bio Box */}
                <motion.div 
                  className="p-8 bg-surface-container-lowest border border-outline-variant/30 shadow-2xl relative overflow-hidden"
                  initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      alt="Marcus Vane" 
                      className="w-16 h-16 object-cover rounded-full border border-outline-variant p-0.5" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrQc39LqvlgVcSa-S26XUCnQexwclV6hw0j4wKz_Csm1Ml95ihfgH9VS680NuH2frs-Rl4h9kDmHvZdpoT3MWZANCjrSy1ef0FyjwlnHyRIGHN_3VwudoGPwGf5JkKb5XIiruDkorJyPuGJTX-BcjABtEXbgDTLx5Vb1mrUrUU6QsKPQLAJ3kNPRFI_e6i1Ub4DpNcVd2ZR0mSwaqK4kzhgAU79HARAdKwmTIzqnrQnT7F5ipsm_oMYOCrgvjNNTpcLq77K20EgDE"
                    />
                    <div>
                      <h3 className="font-headline text-[18px] font-black text-on-surface">Marcus Vane</h3>
                      <p className="font-label-caps text-[9px] text-accent tracking-[0.2em] uppercase font-bold mt-1">Director of Comms</p>
                    </div>
                  </div>
                  <p className="font-body text-[14px] text-secondary leading-relaxed font-light">
                    Marcus oversees strategic communications for Industrial Authority's global infrastructure projects, specializing in heavy systems deployment and grid integration reporting.
                  </p>
                </motion.div>

                {/* Related Articles */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }}
                >
                  <h3 className="font-label-caps text-[11px] text-on-surface tracking-[0.25em] uppercase mb-6 pb-3 border-b border-accent/20 font-bold">
                    Related Briefs
                  </h3>
                  <div className="flex flex-col gap-6">
                    <Link to="#" className="group flex gap-4 items-start">
                      <div className="overflow-hidden w-20 h-20 shrink-0 border border-outline-variant/50 relative">
                        <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/40 transition-colors pointer-events-none z-10" />
                        <img 
                          alt="Structural steel girders" 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-550" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRC9xTeqb1jOBt7AUEQdqooZJ1T_ieleAPf5F4M_HeTS4er7KS6kY7XTSRIrlMUKuxEM6a1JiMm5VFEz2lWx_1rjkbk3CmY9wvc-nvDeOKRSZOKRm-tugBgBV_eG7pJH__4UUSA1aHboOuawCGJA0-jV0podfkFq6DUaEwWDAFRlOFoZo4R-5xpCvSiwVNAgdsggpDcp2VaiSsYFvoMwwYfRDde7wtTiVHXRBcwMLqJUMQOsHn-bYy1EIbmO2pdLkYJjFiXvqUxrM"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-label-caps text-[8.5px] text-accent tracking-[0.2em] uppercase mb-1 font-bold">Structural Integrity</p>
                        <h4 className="font-headline text-[14px] font-bold text-on-surface leading-snug group-hover:text-accent transition-colors line-clamp-2">
                          Load Testing Commences on V-Series Anchors
                        </h4>
                      </div>
                    </Link>
                    
                    <Link to="#" className="group flex gap-4 items-start">
                      <div className="overflow-hidden w-20 h-20 shrink-0 border border-outline-variant/50 relative">
                        <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/40 transition-colors pointer-events-none z-10" />
                        <img 
                          alt="Microchip macro" 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-550" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDosgQmpsWd8Oz6FWXJ0z-VLMSXAzFQF6qwWEfwVEBcg_VZu3-m5ilY-05A38EwilLzByzrLjk4Viupp6fxw_ZP0iSD1tGXTqhpsDkVT016n47-jJ4mJk-Z7gE2hOZK4t55Mim6GwgzQa3M_DzjTq80d9NUZvfRB2kB9bRKEzIubCcLcHEqhPwjbI1lJCD4AhYi781glJ5uCS2PjLafrSf8vlZ5Fdz41-dfzjP05axa7AedfI7-hiUipKGkNYIxsy_OnxK632wooUI"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-label-caps text-[8.5px] text-accent tracking-[0.2em] uppercase mb-1 font-bold">Automation</p>
                        <h4 className="font-headline text-[14px] font-bold text-on-surface leading-snug group-hover:text-accent transition-colors line-clamp-2">
                          Firmware v4.2 Rollout for Rotary Systems
                        </h4>
                      </div>
                    </Link>
                  </div>
                </motion.div>

                {/* Highlighted Product */}
                <motion.div 
                  className="bg-inverse-surface p-8 relative overflow-hidden group border border-white/5"
                  initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }}
                >
                  {/* Console ticks */}
                  <div className="absolute top-[-1px] left-[-1px] w-2.5 h-2.5 border-t border-l border-accent pointer-events-none" />
                  <div className="absolute top-[-1px] right-[-1px] w-2.5 h-2.5 border-t border-r border-accent pointer-events-none" />
                  <div className="absolute bottom-[-1px] right-[-1px] w-2.5 h-2.5 border-b border-r border-accent pointer-events-none" />
                  <div className="absolute bottom-[-1px] left-[-1px] w-2.5 h-2.5 border-b border-l border-accent pointer-events-none" />

                  <div className="absolute inset-0 bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 z-0 opacity-[0.04]" />
                  <div className="relative z-10">
                    <h3 className="font-label-caps text-[9px] text-accent tracking-[0.25em] uppercase mb-3 font-bold">
                      System Spotlight
                    </h3>
                    <h4 className="font-headline text-[22px] font-black text-inverse-on-surface mb-2 uppercase tracking-tight">
                      Orion BESS-500
                    </h4>
                    <p className="font-body text-[13.5px] text-inverse-on-surface/60 mb-8 leading-relaxed font-light">
                      High-density lithium-ion utility scale storage designed for seamless grid transition.
                    </p>
                    <Link to="/products" className="inline-flex items-center gap-2 font-label-caps text-[10px] text-white hover:text-accent tracking-[0.15em] transition-colors uppercase border-b border-white/20 hover:border-accent pb-0.5 font-bold">
                      View Technical Specs
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                  </div>
                </motion.div>

              </div>
            </aside>

          </div>
        </article>

        {/* ── Modern Unified CTA Footer ─────────────────────────────────── */}
        <UnifiedCTA 
          heading="Want to track grid-scale innovations?"
          accent="Get in touch."
          subtitle="Consult with our engineering division on upcoming substation and high-voltage grid projects."
          primaryText="CONNECT WITH US"
          primaryTo="/contact?inquiry=sales"
          outlineText="EXPLORE ALL NEWS"
          outlineTo="/news"
          uppercase={true}
        />
      </main>
    </div>
  );
}
