import React from 'react';
import { motion } from 'framer-motion';

export function EpcLifecycleSection() {
  const lifecycleSteps = [
    { number: "1", title: "Feasibility Study", desc: "Technical feasibility, capacity load mapping, and grid interconnection audits." },
    { number: "2", title: "Engineering Design", desc: "Detailed BIM/CAD electrical layouts, single line diagrams (SLD), and structural designs." },
    { number: "3", title: "BOQ & Tender", desc: "Accurate Bill of Quantities, manufacturer sourcing schedules, and project budgeting." },
    { number: "4", title: "Procurement", desc: "Direct OEM supply chain routing for Vertiv UPS, Lucy switchgear, L&T panels, and cables." },
    { number: "5", title: "Site Execution", desc: "Civil works, cable trenching, equipment erection, structural routing, and mounting." },
    { number: "6", title: "Testing & Inspection", desc: "Dielectric insulation audits, relay calibration, thermal imaging, and pressure checks." },
    { number: "7", title: "Commissioning", desc: "Safe grid synchronization, site acceptance testing (SAT), and dynamic load runs." },
    { number: "8", title: "Handover & AMC", desc: "Handover of CAD/PDF drawings, safety certificates, operator training, and preventive AMC." }
  ];

  return (
    <section className="py-20 md:py-28 bg-surface-container-low border-b border-outline-variant/30 overflow-hidden relative">
      {/* Background blueprint elements for engineering aesthetic */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-accent" />
              <span className="font-label-caps text-[11px] text-accent tracking-[0.22em] uppercase font-bold">Lifecycle Timeline</span>
            </div>
            <h2 className="font-headline text-[32px] sm:text-[44px] md:text-[52px] leading-[1.05] font-black text-on-surface tracking-tighter uppercase mb-5">
              EPC Project <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-on-surface via-on-surface/85 to-on-surface/50">Execution Lifecycle.</span>
            </h2>
          </div>
          <p className="font-body text-[14.5px] text-secondary max-w-sm leading-relaxed">
            Our systematic, 8-step project lifecycle ensures end-to-end alignment from initial feasibility to active grid handover and AMC.
          </p>
        </div>

        {/* 8-Step Timeline Horizontal Grid (collapses to 1 column on mobile, 2 on tablet, 4 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l border-outline-variant/30 gap-0 bg-surface shadow-sm">
          {lifecycleSteps.map((step, idx) => (
            <motion.div
              key={idx}
              className="border-r border-b border-outline-variant/30 p-6 md:p-8 hover:bg-accent/[0.015] transition-all duration-400 flex flex-col justify-start group min-h-[240px] lg:min-h-[270px] relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              {/* Step number watermark inside card */}
              <div className="flex items-center justify-between mb-8 shrink-0">
                <span className="font-headline text-2xl font-black text-accent/80 group-hover:scale-110 transition-transform duration-300">
                  {`0${step.number}`}
                </span>
                <div className="w-2 h-2 bg-outline-variant/35 group-hover:bg-accent rounded-full transition-colors" />
              </div>

              <div className="flex flex-col justify-start flex-grow">
                <h3 className="font-headline text-[15px] font-bold text-on-surface mb-3 uppercase tracking-tight leading-snug group-hover:text-accent transition-colors duration-300 min-h-[44px] flex items-start">
                  {step.title}
                </h3>
                <p className="font-body text-[13px] leading-relaxed text-secondary group-hover:text-on-surface/90 transition-colors duration-300 font-light">
                  {step.desc}
                </p>
              </div>

              {/* Animated bottom accent strip */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
