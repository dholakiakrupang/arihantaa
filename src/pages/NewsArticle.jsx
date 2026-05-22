import { motion, useScroll, useSpring } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

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
    <div className="bg-surface text-on-surface font-body min-h-screen pt-20">
      
      {/* Reading Progress Bar */}
      <motion.div 
        className="fixed top-20 left-0 right-0 h-1 bg-accent z-40 origin-left"
        style={{ scaleX }}
      />

      <main className="flex-grow">
        <article className="max-w-[1280px] mx-auto px-8 md:px-16 pt-16 pb-32">
          
          {/* ── Header Section ──────────────────────────────────────────────── */}
          <header className="mb-16 max-w-[900px]">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 mb-8 text-secondary font-label-caps text-[11px] tracking-[0.1em] uppercase">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              <Link to="/news" className="hover:text-accent transition-colors">News Hub</Link>
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              <span className="text-on-surface">Press Release</span>
            </div>

            {/* Tags */}
            <motion.div 
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-surface-variant text-on-surface-variant font-label-caps text-[10px] tracking-[0.15em] px-4 py-2 uppercase">
                Press Release
              </span>
              <span className="border border-outline-variant text-secondary font-label-caps text-[10px] tracking-[0.15em] px-4 py-2 uppercase">
                Critical Power
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              className="font-headline text-[32px] md:text-[56px] leading-[1.1] font-bold text-on-surface mb-8 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Industrial Authority Signs ₹240 Cr. Infrastructure Contract for Eastern Grid Expansion
            </motion.h1>

            {/* Meta data */}
            <motion.div 
              className="flex items-center gap-2 text-secondary font-label-caps text-[11px] tracking-[0.1em] uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="material-symbols-outlined text-[20px]">calendar_today</span>
              <span>October 24, 2026</span>
              <span className="mx-3 text-outline-variant">|</span>
              <span className="material-symbols-outlined text-[20px]">schedule</span>
              <span>6 min read</span>
            </motion.div>
          </header>

          {/* ── Hero Image ─────────────────────────────────────────────────── */}
          <motion.div 
            className="w-full mb-16 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="overflow-hidden bg-surface-container-low max-h-[600px] border border-outline-variant/30">
              <img 
                alt="Massive industrial electrical substation" 
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3LAEI6CRn5IIILEjifzbbaLhYXGbuWVwYk_VDSIkDvIo1jzDxWBU7qLRp6ROjH0LMIDq1UX1f7Rigb_h4tMQp4toFyQTydTDdwq1olOh1VUesNHNMFsy1iJbqhvQpYDe0y8YlhCJ_5ZGPx_KGp80NrUsNPoeFrWbgSTr9fxndwmpVE1wpQnsGbK-GVGG0_TEyouXlNdPtECSHJ2IUZf640erkXOAtL3HarvdPW35IyCg8upQ1v8pcaoaZO4KLDiZebs5MM8ZewSo"
              />
            </div>
            <p className="mt-4 font-body text-[14px] text-secondary border-l-2 border-accent pl-4">
              Phase II of the Eastern Grid heavy systems installation, featuring dual 200kVA backup modules.
            </p>
          </motion.div>

          {/* ── Two Column Layout ──────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Main Content Column */}
            <div className="lg:col-span-8 max-w-[780px]">
              <motion.p 
                className="font-body text-[18px] md:text-[20px] text-on-surface mb-8 leading-relaxed font-medium"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-50px' }}
              >
                In a decisive move to fortify regional power stability, Industrial Authority Engineering has officially secured the Phase II contract for the Eastern Grid expansion project. The agreement, valued at a substantial ₹240 Crores, mandates the design, deployment, and structural integration of advanced Uninterruptible Power Supply (UPS) architecture and critical load balancing systems.
              </motion.p>
              
              <motion.h2 
                className="font-headline text-[28px] md:text-[36px] font-bold text-on-surface mt-16 mb-6"
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              >
                Strategic Redundancy Architecture
              </motion.h2>
              
              <motion.p 
                className="font-body text-[16px] md:text-[18px] text-secondary mb-8 leading-relaxed"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              >
                The scope of work encompasses the installation of a multi-tiered redundant power matrix. Engineered to withstand catastrophic grid failures, the system leverages high-capacity lithium-ion Battery Energy Storage Systems (BESS) coupled with dynamic rotary UPS units. This hybrid approach ensures seamless transition times sub-2 milliseconds, critical for the interconnected data centers reliant on this sub-station.
              </motion.p>

              {/* Stat Callout Box */}
              <motion.div 
                className="my-16 p-10 bg-surface-container-low border border-outline-variant/50 shadow-xl flex flex-col md:flex-row gap-8 justify-around items-center"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              >
                <div className="text-center group">
                  <div className="font-headline text-[48px] font-black text-accent group-hover:scale-110 transition-transform">200<span className="text-[24px]">kVA</span></div>
                  <div className="font-label-caps text-[10px] text-secondary tracking-[0.2em] uppercase mt-3">Peak Capacity per Module</div>
                </div>
                <div className="hidden md:block w-px h-16 bg-outline-variant"></div>
                <div className="text-center group">
                  <div className="font-headline text-[48px] font-black text-accent group-hover:scale-110 transition-transform">99.999%</div>
                  <div className="font-label-caps text-[10px] text-secondary tracking-[0.2em] uppercase mt-3">Targeted Uptime</div>
                </div>
                <div className="hidden md:block w-px h-16 bg-outline-variant"></div>
                <div className="text-center group">
                  <div className="font-headline text-[48px] font-black text-accent group-hover:scale-110 transition-transform">18</div>
                  <div className="font-label-caps text-[10px] text-secondary tracking-[0.2em] uppercase mt-3">Months to Delivery</div>
                </div>
              </motion.div>

              <motion.h2 
                className="font-headline text-[28px] md:text-[36px] font-bold text-on-surface mt-16 mb-6"
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              >
                Compliance and Environmental Impact
              </motion.h2>
              
              <motion.p 
                className="font-body text-[16px] md:text-[18px] text-secondary mb-8 leading-relaxed"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              >
                Beyond sheer power throughput, the project adheres to the stringent ISO 14001 environmental management standards. The integration of solid-state transformers aims to reduce ambient thermal waste by 14% compared to legacy installations.
              </motion.p>

              {/* Pull Quote */}
              <motion.blockquote 
                className="my-16 pl-6 md:pl-8 border-l-[4px] border-accent relative"
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              >
                <p className="font-headline text-[24px] md:text-[32px] text-on-surface font-medium italic leading-snug">
                  "This contract is not merely an installation; it is an architectural commitment to zero-downtime tolerance in an increasingly volatile energy landscape."
                </p>
                <footer className="mt-6 font-label-caps text-[11px] text-accent tracking-[0.15em] uppercase">
                  — Dr. Aris Thorne, Chief Engineer, Heavy Systems Div.
                </footer>
              </motion.blockquote>

              <motion.p 
                className="font-body text-[16px] md:text-[18px] text-secondary mb-8 leading-relaxed"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              >
                Procurement of the primary stator cores will commence immediately, with ground breaking scheduled for late Q4. Investors and stakeholders can track the milestone progress via the Live Projects dashboard.
              </motion.p>

              {/* Article Footer / Meta */}
              <motion.div 
                className="mt-24 pt-8 border-t border-outline-variant/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              >
                <div className="flex flex-wrap gap-3">
                  <span className="font-label-caps text-[10px] tracking-[0.1em] text-secondary bg-surface-container-low px-4 py-2 hover:bg-surface-variant transition-colors cursor-pointer">#UPS</span>
                  <span className="font-label-caps text-[10px] tracking-[0.1em] text-secondary bg-surface-container-low px-4 py-2 hover:bg-surface-variant transition-colors cursor-pointer">#DataCentre</span>
                  <span className="font-label-caps text-[10px] tracking-[0.1em] text-secondary bg-surface-container-low px-4 py-2 hover:bg-surface-variant transition-colors cursor-pointer">#GridExpansion</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-label-caps text-[11px] text-secondary uppercase tracking-[0.1em]">Share:</span>
                  <button className="w-10 h-10 border border-outline-variant/50 rounded-full flex items-center justify-center text-secondary hover:border-accent hover:text-accent transition-colors">
                    <span className="material-symbols-outlined text-[22px]">link</span>
                  </button>
                  <button className="w-10 h-10 border border-outline-variant/50 rounded-full flex items-center justify-center text-secondary hover:border-accent hover:text-accent transition-colors">
                    <span className="material-symbols-outlined text-[22px]">mail</span>
                  </button>
                </div>
              </motion.div>

              {/* Next / Prev Navigation */}
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Link to="#" className="p-8 border border-outline-variant/40 hover:border-accent bg-surface-container-lowest shadow-sm hover:shadow-xl group transition-all duration-300 flex flex-col gap-4">
                  <span className="font-label-caps text-[10px] text-secondary flex items-center gap-2 group-hover:text-accent transition-colors tracking-[0.2em] uppercase">
                    <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                    Previous Insight
                  </span>
                  <span className="font-headline text-[18px] text-on-surface font-semibold group-hover:text-accent transition-colors">
                    Q3 Maintenance Protocols Updated for Heavy Machinery
                  </span>
                </Link>
                <Link to="#" className="p-8 border border-outline-variant/40 hover:border-accent bg-surface-container-lowest shadow-sm hover:shadow-xl group transition-all duration-300 flex flex-col gap-4 sm:text-right">
                  <span className="font-label-caps text-[10px] text-secondary flex items-center sm:justify-end gap-2 group-hover:text-accent transition-colors tracking-[0.2em] uppercase">
                    Next Insight
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </span>
                  <span className="font-headline text-[18px] text-on-surface font-semibold group-hover:text-accent transition-colors">
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
                      <h3 className="font-headline text-[20px] font-bold text-on-surface">Marcus Vane</h3>
                      <p className="font-label-caps text-[10px] text-accent tracking-[0.1em] uppercase mt-1">Director of Comms</p>
                    </div>
                  </div>
                  <p className="font-body text-[14px] text-secondary leading-relaxed">
                    Marcus oversees strategic communications for Industrial Authority's global infrastructure projects, specializing in heavy systems deployment and grid integration reporting.
                  </p>
                </motion.div>

                {/* Related Articles */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }}
                >
                  <h3 className="font-label-caps text-[12px] text-on-surface tracking-[0.2em] uppercase mb-6 pb-3 border-b border-outline-variant/50">
                    Related Briefs
                  </h3>
                  <div className="flex flex-col gap-6">
                    <Link to="#" className="group flex gap-4 items-start">
                      <div className="overflow-hidden w-24 h-24 shrink-0 border border-outline-variant/50">
                        <img 
                          alt="Structural steel girders" 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRC9xTeqb1jOBt7AUEQdqooZJ1T_ieleAPf5F4M_HeTS4er7KS6kY7XTSRIrlMUKuxEM6a1JiMm5VFEz2lWx_1rjkbk3CmY9wvc-nvDeOKRSZOKRm-tugBgBV_eG7pJH__4UUSA1aHboOuawCGJA0-jV0podfkFq6DUaEwWDAFRlOFoZo4R-5xpCvSiwVNAgdsggpDcp2VaiSsYFvoMwwYfRDde7wtTiVHXRBcwMLqJUMQOsHn-bYy1EIbmO2pdLkYJjFiXvqUxrM"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-label-caps text-[10px] text-accent tracking-[0.15em] uppercase mb-2">Structural Integrity</p>
                        <h4 className="font-headline text-[15px] font-bold text-on-surface leading-snug group-hover:text-accent transition-colors">
                          Load Testing Commences on V-Series Anchors
                        </h4>
                      </div>
                    </Link>
                    
                    <Link to="#" className="group flex gap-4 items-start">
                      <div className="overflow-hidden w-24 h-24 shrink-0 border border-outline-variant/50">
                        <img 
                          alt="Microchip macro" 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDosgQmpsWd8Oz6FWXJ0z-VLMSXAzFQF6qwWEfwVEBcg_VZu3-m5ilY-05A38EwilLzByzrLjk4Viupp6fxw_ZP0iSD1tGXTqhpsDkVT016n47-jJ4mJk-Z7gE2hOZK4t55Mim6GwgzQa3M_DzjTq80d9NUZvfRB2kB9bRKEzIubCcLcHEqhPwjbI1lJCD4AhYi781glJ5uCS2PjLafrSf8vlZ5Fdz41-dfzjP05axa7AedfI7-hiUipKGkNYIxsy_OnxK632wooUI"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-label-caps text-[10px] text-accent tracking-[0.15em] uppercase mb-2">Automation</p>
                        <h4 className="font-headline text-[15px] font-bold text-on-surface leading-snug group-hover:text-accent transition-colors">
                          Firmware v4.2 Rollout for Rotary Systems
                        </h4>
                      </div>
                    </Link>
                  </div>
                </motion.div>

                {/* Highlighted Product */}
                <motion.div 
                  className="bg-inverse-surface p-8 relative overflow-hidden group"
                  initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }}
                >
                  <div className="absolute inset-0 bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 z-0 opacity-10" />
                  <div className="relative z-10">
                    <h3 className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase mb-4">
                      System Spotlight
                    </h3>
                    <h4 className="font-headline text-[24px] font-bold text-inverse-on-surface mb-3">
                      Orion BESS-500
                    </h4>
                    <p className="font-body text-[14px] text-inverse-on-surface/70 mb-8 leading-relaxed">
                      High-density lithium-ion utility scale storage designed for seamless grid transition.
                    </p>
                    <Link to="/products/power-distribution" className="inline-flex items-center gap-2 font-label-caps text-[11px] text-white hover:text-accent tracking-[0.1em] transition-colors uppercase border-b border-white/30 hover:border-accent pb-0.5">
                      View Technical Specs
                      <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </Link>
                  </div>
                </motion.div>

              </div>
            </aside>

          </div>
        </article>
      </main>
    </div>
  );
}
