import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { EngineeredSolutionCard } from '../../ui/EngineeredSolutionCard';
import { Button } from '../../ui/Button';

import { engineeredServicesData as solutionsData } from '../../../data/engineeredServicesData';

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
  
  const [searchQuery, setSearchQuery] = useState('');
  // Applied states (used for filtering the actual array)
  const [appliedInfra, setAppliedInfra] = useState(null);
  const [appliedEfficiency, setAppliedEfficiency] = useState(null);
  // Pending states (used inside the dropdown until "APPLY FILTERS" is clicked)
  const [tempInfra, setTempInfra] = useState(null);
  const [tempEfficiency, setTempEfficiency] = useState(null);

  const [sortBy, setSortBy] = useState('LATEST'); // 'LATEST' | 'EFFICIENCY'

  const categoryInfo = categoryMap[categoryId] || { title: 'Engineered Solutions', desc: 'Our portfolio of high-performance infrastructure services, designed for integration into mission-critical environments.' };

  const handleToggleFilterDropdown = () => {
    if (!isFilterOpen) {
      // Sync temp state with applied state upon opening
      setTempInfra(appliedInfra);
      setTempEfficiency(appliedEfficiency);
    }
    setIsFilterOpen(!isFilterOpen);
  };

  const handleCloseDropdowns = () => {
    setIsFilterOpen(false);
    setIsSortOpen(false);
    // Reset temp states to last applied states
    setTempInfra(appliedInfra);
    setTempEfficiency(appliedEfficiency);
  };

  const handleApplyFilters = () => {
    setAppliedInfra(tempInfra);
    setAppliedEfficiency(tempEfficiency);
    setIsFilterOpen(false);
  };

  const handleResetFilters = () => {
    setTempInfra(null);
    setTempEfficiency(null);
  };

  const filteredSolutions = solutionsData
    .filter(item => {
      // 0. Filter by active categoryId
      if (categoryId && item.categoryId !== categoryId) {
        return false;
      }

      // 1. Search filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesTag = item.tag.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesTag) {
          return false;
        }
      }
      
      // 2. Infrastructure filter
      if (appliedInfra === 'high') {
        const isHV = item.tag.includes('INDUSTRIAL') || item.tag.includes('GENERATOR') || item.tag.includes('COMMISSIONING') || item.tag.includes('PROJECT');
        if (!isHV) return false;
      } else if (appliedInfra === 'low') {
        const isHV = item.tag.includes('INDUSTRIAL') || item.tag.includes('GENERATOR') || item.tag.includes('COMMISSIONING') || item.tag.includes('PROJECT');
        if (isHV) return false;
      }
      
      // 3. Efficiency filter
      if (appliedEfficiency === 'ultra') {
        if (item.scorePercentage < 97) return false;
      } else if (appliedEfficiency === 'standard') {
        if (item.scorePercentage >= 97) return false;
      }
      
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'EFFICIENCY') {
        return b.scorePercentage - a.scorePercentage;
      }
      return a.title.localeCompare(b.title);
    });

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


        </div>
      </div>

      {/* ── Industrial Smart Sticky Toolbar ────────────────────────────────────────── */}
      <div className="relative md:sticky md:top-[80px] top-0 z-40 bg-surface/85 backdrop-blur-xl border-b border-outline/50 transition-all duration-300">
        
        {/* Invisible Click-Outside Detector (No blur or dimming) */}
        <AnimatePresence>
          {(isFilterOpen || isSortOpen) && (
            <div 
              className="fixed inset-0 bg-transparent z-0"
              onClick={handleCloseDropdowns}
            />
          )}
        </AnimatePresence>

        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-stretch border-x border-outline/30 relative z-10">
          
          {/* Filter Button (Sharp, rigid) */}
          <div className="relative border-b md:border-b-0 border-r-0 md:border-r border-outline/30 flex-shrink-0">
            <button 
              onClick={handleToggleFilterDropdown}
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
                  className="absolute top-[100%] left-[-1px] w-[calc(100%+2px)] md:w-[600px] bg-surface border border-outline/40 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] z-50 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-accent" />
                  <div className="flex flex-col md:flex-row pt-1">
                    <div className="flex-1 p-6 md:p-8 border-b md:border-b-0 md:border-r border-outline/30">
                      <h4 className="font-label-caps text-[10px] tracking-[0.2em] uppercase text-accent mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent"></span>
                        Infrastructure Type
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setTempInfra(tempInfra === 'high' ? null : 'high')}>
                          <div className={`w-5 h-5 border transition-colors flex items-center justify-center ${tempInfra === 'high' ? 'border-accent bg-accent/10' : 'border-outline group-hover:border-accent'}`}>
                            {tempInfra === 'high' && <span className="w-2.5 h-2.5 bg-accent"></span>}
                          </div>
                          <span className={`font-body text-[13px] transition-colors ${tempInfra === 'high' ? 'text-secondary font-semibold' : 'text-secondary/70 group-hover:text-accent'}`}>High Voltage Solutions</span>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setTempInfra(tempInfra === 'low' ? null : 'low')}>
                          <div className={`w-5 h-5 border transition-colors flex items-center justify-center ${tempInfra === 'low' ? 'border-accent bg-accent/10' : 'border-outline group-hover:border-accent'}`}>
                            {tempInfra === 'low' && <span className="w-2.5 h-2.5 bg-accent"></span>}
                          </div>
                          <span className={`font-body text-[13px] transition-colors ${tempInfra === 'low' ? 'text-secondary font-semibold' : 'text-secondary/70 group-hover:text-accent'}`}>Low Voltage Distribution</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 p-6 md:p-8">
                      <h4 className="font-label-caps text-[10px] tracking-[0.2em] uppercase text-accent mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent"></span>
                        Efficiency Rating
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setTempEfficiency(tempEfficiency === 'standard' ? null : 'standard')}>
                          <div className={`w-5 h-5 border transition-colors flex items-center justify-center ${tempEfficiency === 'standard' ? 'border-accent bg-accent/10' : 'border-outline group-hover:border-accent'}`}>
                            {tempEfficiency === 'standard' && <span className="w-2.5 h-2.5 bg-accent"></span>}
                          </div>
                          <span className={`font-body text-[13px] transition-colors ${tempEfficiency === 'standard' ? 'text-secondary font-semibold' : 'text-secondary/70 group-hover:text-accent'}`}>Standard Efficiency</span>
                        </div>
                        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setTempEfficiency(tempEfficiency === 'ultra' ? null : 'ultra')}>
                          <div className={`w-5 h-5 border transition-colors flex items-center justify-center ${tempEfficiency === 'ultra' ? 'border-accent bg-accent/10' : 'border-outline group-hover:border-accent'}`}>
                            {tempEfficiency === 'ultra' && <span className="material-symbols-outlined text-[14px] text-accent">check</span>}
                          </div>
                          <span className={`font-body text-[13px] transition-colors ${tempEfficiency === 'ultra' ? 'text-secondary font-semibold' : 'text-secondary/70 group-hover:text-accent'}`}>Ultra High (97%+)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button onClick={handleApplyFilters} variant="primary" theme="light" className="flex-1 rounded-none w-full" showArrow={false}>APPLY FILTERS</Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Results Context */}
          <div className="hidden lg:flex items-center justify-center px-8 border-r border-outline/30 flex-grow">
            <span className="font-label-caps text-[10px] tracking-[0.1em] text-secondary/60">
              DATABASE QUERY: <span className="text-accent font-bold ml-2">{filteredSolutions.length} {filteredSolutions.length === 1 ? 'MATCH' : 'MATCHES'} FOUND</span>
            </span>
          </div>

          {/* Search Input */}
          <div className="flex-1 lg:flex-grow-0 lg:w-[300px] border-b md:border-b-0 border-r-0 md:border-r border-outline/30 group/search flex items-center bg-transparent relative overflow-hidden transition-all hover:bg-surface-container">
            <span className="material-symbols-outlined absolute left-6 text-secondary/40 text-[18px]">search</span>
            <input 
              type="text" 
              placeholder="ENTER SERIAL OR NAME..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
                <span className="font-label-caps text-[11px] tracking-[0.1em] font-bold text-secondary group-hover/sort:text-accent transition-colors">{sortBy}</span>
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
                  className="absolute top-[100%] right-[-1px] w-[calc(100%+2px)] md:w-[240px] bg-surface border border-outline/50 shadow-xl z-50 overflow-hidden"
                >
                  <button 
                    onClick={() => { setSortBy('LATEST'); setIsSortOpen(false); }}
                    className={`w-full text-left px-6 py-4 font-label-caps text-[10px] tracking-[0.15em] flex justify-between items-center border-b border-outline/30 transition-colors ${sortBy === 'LATEST' ? 'font-bold text-accent bg-accent/5' : 'text-secondary/70 hover:bg-surface-container hover:text-secondary'}`}
                  >
                    LATEST ENGINEERING {sortBy === 'LATEST' && <span className="material-symbols-outlined text-[14px]">check</span>}
                  </button>
                  <button 
                    onClick={() => { setSortBy('EFFICIENCY'); setIsSortOpen(false); }}
                    className={`w-full text-left px-6 py-4 font-label-caps text-[10px] tracking-[0.15em] flex justify-between items-center transition-colors ${sortBy === 'EFFICIENCY' ? 'font-bold text-accent bg-accent/5' : 'text-secondary/70 hover:bg-surface-container hover:text-secondary'}`}
                  >
                    ENERGY EFFICIENCY {sortBy === 'EFFICIENCY' && <span className="material-symbols-outlined text-[14px]">check</span>}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* ── Cards Grid ──────────────────────────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-20 space-y-16">
        {filteredSolutions.length > 0 ? (
          filteredSolutions.map((solution, idx) => (
            <EngineeredSolutionCard key={solution.id} index={idx} type="service" {...solution} />
          ))
        ) : (
          <div className="py-20 text-center border border-dashed border-outline/30 bg-surface-container/10">
            <span className="material-symbols-outlined text-[48px] text-secondary/30 mb-4 block">search_off</span>
            <p className="font-headline text-[18px] text-secondary tracking-wide uppercase">No Engineering Solutions Found</p>
            <p className="font-body text-[13px] text-secondary/50 mt-2">Try adjusting your filters or search query to find compatible specifications.</p>
          </div>
        )}
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
