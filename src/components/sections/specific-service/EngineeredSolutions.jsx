import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { EngineeredSolutionCard } from '../../ui/EngineeredSolutionCard';

const solutionsData = [
  {
    id: 1,
    tag: "POWER RELIABILITY",
    title: "Vertiv™ Liebert® EXM2 UPS",
    scoreLabel: "SUSTAINABILITY SCORE",
    scorePercentage: 94,
    description: "The EXM2 offers high efficiency in a compact footprint, specifically engineered for mid-size mission-critical applications across various industry verticals including healthcare and IT.",
    features: [
      "Double Conversion Mode",
      "Fault Tolerant Architecture",
      "Smart-Grid Ready",
      "Eco-Mode Operation"
    ],
    stats: [
      { label: "EFFICIENCY", value: "97.2%" },
      { label: "SCALABILITY", value: "100-250kW" }
    ],
    imageSrc: "/images/products/ups.png",
    imageAlt: "Data Center Ecosystem",
    primaryAction: { label: "REQUEST CONSULTATION", onClick: () => {} },
    secondaryAction: { label: "DATASHEET", onClick: () => {} }
  },
  {
    id: 2,
    tag: "HT/LT INFRASTRUCTURE",
    title: "Custom Switchgear Solutions",
    scoreLabel: "DEPLOYMENT SCALE",
    scorePercentage: 85,
    description: "Bespoke electrical distribution panels engineered for heavy industrial loads, featuring integrated surge protection and advanced thermal monitoring.",
    features: [
      "High Interruption Capacity",
      "Modbus Connectivity",
      "Arc Flash Mitigation",
      "IP54 Rated Enclosures"
    ],
    stats: [
      { label: "RATED VOLTAGE", value: "Up to 33kV" },
      { label: "MONITORING", value: "IoT Enabled" }
    ],
    imageSrc: "/images/products/switchgear.png",
    imageAlt: "Switchgear Solutions",
    primaryAction: { label: "REQUEST CONSULTATION", onClick: () => {} },
    secondaryAction: { label: "CASE STUDY", onClick: () => {} }
  }
];

const categoryMap = {
  'spare-parts': { title: 'Spare Parts & Management', desc: 'Genuine OEM and high-compatibility spare parts sourced globally.' },
  'preventive-maint': { title: 'Preventive Maintenance', desc: 'Structured, scheduled maintenance programmes to resolve potential failures.' },
  'performance-opt': { title: 'Performance Optimization', desc: 'Data-driven performance tuning that extracts maximum efficiency.' },
  'remote-services': { title: 'Remote Services', desc: '24/7 remote monitoring and support providing instant visibility.' },
  'project-commission': { title: 'Project & Commissioning', desc: 'End-to-end project management from design to handover.' },
  'industrial-maint': { title: 'Industrial Maintenance', desc: 'Specialised maintenance programmes for heavy industrial environments.' },
  'ups-battery': { title: 'UPS & Battery Services', desc: 'Comprehensive lifecycle management for UPS systems and battery banks.' },
  'generator': { title: 'Generator & Switchgear', desc: 'Full-spectrum generator and switchgear servicing to maintain reliable power.' },
  'liquid-cooling': { title: 'Liquid Cooling Services', desc: 'Advanced liquid cooling installation, commissioning, and maintenance.' }
};

export function EngineeredSolutions() {
  const { categoryId } = useParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  const categoryInfo = categoryMap[categoryId] || { title: 'Engineered Solutions', desc: 'Our portfolio of high-performance infrastructure services, designed for integration into mission-critical environments.' };

  return (
    <section className="bg-surface min-h-screen">
      
      {/* ── Compact Category Strip (Gridless) ────────────────────────────────────────── */}
      <div className="relative pt-8 pb-8 bg-inverse-surface border-b border-outline/30 z-10">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12">
          
          {/* Left Column: Navigation & Identification */}
          <div className="flex-1 min-w-0">
            <motion.nav 
              className="flex items-center gap-2 mb-3.5"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Home</Link>
              <span className="material-symbols-outlined text-surface-variant text-[14px] select-none flex items-center justify-center">chevron_right</span>
              <Link to="/services" className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Services</Link>
              <span className="material-symbols-outlined text-surface-variant text-[14px] select-none flex items-center justify-center">chevron_right</span>
              <span className="font-label-caps text-[10px] text-surface-variant tracking-[0.2em] uppercase">{categoryInfo.title}</span>
            </motion.nav>

            <motion.h1 
              className="font-headline text-[28px] md:text-[36px] lg:text-[40px] leading-[1.05] font-black tracking-tight text-inverse-on-surface uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {categoryInfo.title}
            </motion.h1>
          </div>

          {/* Right Column: Context & Metadata */}
          <motion.div 
            className="md:max-w-[400px] lg:max-w-[480px] border-l-2 border-accent pl-6 py-0 flex flex-col justify-center shrink-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="block font-label-caps text-[10px] tracking-[0.25em] text-accent uppercase font-bold mb-2 leading-none">Category Overview</span>
            <p className="font-body text-[13px] text-inverse-on-surface/75 leading-relaxed text-left">
              {categoryInfo.desc}
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Industrial Smart Sticky Toolbar ────────────────────────────────────────── */}
      <div className="sticky top-[64px] md:top-[80px] z-40 bg-surface/85 backdrop-blur-xl border-b border-outline/50 transition-all duration-300">
        
        {/* Invisible Click-Outside Detector (No blur or dimming) */}
        <AnimatePresence>
          {(isFilterOpen || isSortOpen) && (
            <div 
              className="fixed inset-0 bg-transparent z-0"
              onClick={() => { setIsFilterOpen(false); setIsSortOpen(false); }}
            />
          )}
        </AnimatePresence>

        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-stretch border-x border-outline/30 relative z-10">
          
          {/* Filter Button (Sharp, rigid) */}
          <div className="relative border-b md:border-b-0 border-r border-outline/30 flex-shrink-0">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`w-full md:w-auto h-full min-h-[56px] md:min-h-[64px] px-6 md:px-8 flex items-center justify-between md:justify-start gap-4 font-label-caps text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 ${isFilterOpen ? 'bg-accent text-white' : 'bg-transparent text-secondary hover:bg-surface-container'}`}
            >
              <div className="flex items-center gap-4">
                <div className="relative w-4 h-4 overflow-hidden flex items-center justify-center">
                  <span className={`material-symbols-outlined absolute transition-transform duration-300 text-[18px] ${isFilterOpen ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>tune</span>
                  <span className={`material-symbols-outlined absolute transition-transform duration-300 text-[18px] ${isFilterOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>close</span>
                </div>
                <span className="font-bold">Filter Parameters</span>
              </div>
            </button>
 
            {/* Structured Mega Filter Dropdown */}
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                  className="absolute top-[100%] left-[-1px] w-[100vw] md:w-[600px] bg-surface border border-outline/40 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] z-50 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-accent" />
                  <div className="flex flex-col md:flex-row pt-1">
                    <div className="flex-1 p-6 md:p-8 border-b md:border-b-0 md:border-r border-outline/30">
                      <h4 className="font-label-caps text-[10px] tracking-[0.2em] uppercase text-accent mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent"></span>
                        Infrastructure Type
                      </h4>
                      <div className="space-y-4">
                        <label className="flex items-center gap-4 cursor-pointer group">
                          <div className="w-5 h-5 border border-outline group-hover:border-accent transition-colors flex items-center justify-center"></div>
                          <span className="font-body text-[13px] text-secondary group-hover:text-accent transition-colors">High Voltage Solutions</span>
                        </label>
                        <label className="flex items-center gap-4 cursor-pointer group">
                          <div className="w-5 h-5 border border-accent bg-accent/10 flex items-center justify-center">
                            <span className="w-2.5 h-2.5 bg-accent"></span>
                          </div>
                          <span className="font-body text-[13px] text-secondary font-semibold">Low Voltage Distribution</span>
                        </label>
                      </div>
                    </div>
                    <div className="flex-1 p-6 md:p-8">
                      <h4 className="font-label-caps text-[10px] tracking-[0.2em] uppercase text-accent mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent"></span>
                        Efficiency Rating
                      </h4>
                      <div className="space-y-4">
                        <label className="flex items-center gap-4 cursor-pointer group">
                          <div className="w-5 h-5 border border-outline group-hover:border-accent transition-colors flex items-center justify-center"></div>
                          <span className="font-body text-[13px] text-secondary group-hover:text-accent transition-colors">Standard Efficiency</span>
                        </label>
                        <label className="flex items-center gap-4 cursor-pointer group">
                          <div className="w-5 h-5 border border-accent bg-accent flex items-center justify-center">
                            <span className="material-symbols-outlined text-[14px] text-white">check</span>
                          </div>
                          <span className="font-body text-[13px] text-secondary font-semibold">Ultra High (97%+)</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex border-t border-outline/30 bg-surface">
                    <button onClick={() => setIsFilterOpen(false)} className="flex-1 py-4 font-label-caps text-[10px] tracking-[0.2em] hover:bg-surface-container transition-colors text-secondary/70">RESET ALL</button>
                    <button onClick={() => setIsFilterOpen(false)} className="flex-1 py-4 font-label-caps text-[10px] tracking-[0.2em] text-surface bg-accent hover:bg-accent/90 transition-colors font-bold">APPLY FILTERS</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Results Context */}
          <div className="hidden lg:flex items-center px-8 border-r border-outline/30 flex-grow">
            <span className="font-label-caps text-[10px] tracking-[0.1em] text-secondary/60">
              DATABASE QUERY: <span className="text-accent font-bold ml-2">2 MATCHES FOUND</span>
            </span>
          </div>

          {/* Search Input */}
          <div className="flex-1 lg:flex-grow-0 lg:w-[300px] border-b md:border-b-0 border-r border-outline/30 group/search flex items-center bg-transparent relative overflow-hidden transition-colors hover:bg-surface-container/50">
            <span className="material-symbols-outlined absolute left-6 text-secondary/40 text-[18px]">search</span>
            <input 
              type="text" 
              placeholder="ENTER SERIAL OR NAME..." 
              className="w-full bg-transparent h-full min-h-[56px] md:min-h-[64px] pl-14 pr-6 font-label-caps text-[10px] tracking-[0.1em] text-secondary placeholder:text-secondary/30 focus:outline-none"
            />
            {/* Animated bottom border on focus */}
            <div className="absolute bottom-0 left-0 h-[2px] bg-accent w-0 group-focus-within/search:w-full transition-all duration-500 ease-out"></div>
          </div>

          {/* Sort Dropdown */}
          <div className="relative flex-shrink-0">
            <button 
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="w-full h-full min-h-[56px] md:min-h-[64px] px-6 md:px-8 flex items-center justify-between gap-4 bg-transparent hover:bg-surface-container transition-colors group/sort"
            >
              <div className="flex items-center gap-2">
                <span className="font-label-caps text-[10px] tracking-[0.1em] text-secondary/50">SORT:</span>
                <span className="font-label-caps text-[11px] tracking-[0.1em] font-bold text-secondary group-hover/sort:text-accent transition-colors">LATEST</span>
              </div>
              <span className={`material-symbols-outlined text-[16px] text-secondary/50 transition-transform duration-300 ${isSortOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </button>
            <AnimatePresence>
              {isSortOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-[100%] right-[-1px] w-[100vw] md:w-[240px] bg-surface border border-outline/50 shadow-xl z-50 overflow-hidden"
                >
                  <button className="w-full text-left px-6 py-4 font-label-caps text-[10px] tracking-[0.15em] font-bold text-accent bg-accent/5 flex justify-between items-center border-b border-outline/30">
                    LATEST ENGINEERING <span className="material-symbols-outlined text-[14px]">check</span>
                  </button>
                  <button className="w-full text-left px-6 py-4 font-label-caps text-[10px] tracking-[0.15em] text-secondary/70 hover:bg-surface-container hover:text-secondary transition-colors">
                    ENERGY EFFICIENCY
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* ── Cards Grid ──────────────────────────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-20 space-y-16">
        {solutionsData.map((solution, idx) => (
          <EngineeredSolutionCard key={solution.id} index={idx} {...solution} />
        ))}
      </div>

      {/* ── Premium Pagination ──────────────────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 pb-32 flex items-center justify-center gap-8">
        <button className="w-12 h-12 flex items-center justify-center border border-outline text-secondary hover:border-accent hover:text-accent transition-colors rounded-full" aria-label="Previous">
          <span className="material-symbols-outlined">west</span>
        </button>
        <div className="flex items-center gap-6">
          <span className="font-headline font-bold text-accent text-2xl">01</span>
          <div className="w-16 h-[2px] bg-outline relative overflow-hidden">
            <motion.div 
              className="absolute inset-y-0 left-0 bg-accent"
              initial={{ width: "0%" }}
              whileInView={{ width: "33%" }}
              transition={{ duration: 1 }}
            />
          </div>
          <span className="font-headline text-secondary/40 text-xl">03</span>
        </div>
        <button className="w-12 h-12 flex items-center justify-center border border-outline text-secondary hover:border-accent hover:text-accent transition-colors rounded-full" aria-label="Next">
          <span className="material-symbols-outlined">east</span>
        </button>
      </div>

    </section>
  );
}
