import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { EngineeredSolutionCard } from '../../ui/EngineeredSolutionCard';
import { Button } from '../../ui/Button';

import { engineeredServicesData as solutionsData } from '../../../data/engineeredServicesData';
import { SpecificServicesCTA } from './SpecificServicesCTA';

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
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12">
          
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
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 sticky top-[80px] z-40 mb-14">
        
        {/* Invisible Click-Outside Detector (No blur or dimming) */}
        <AnimatePresence>
          {(isFilterOpen || isSortOpen) && (
            <div 
              className="fixed inset-0 bg-transparent z-0"
              onClick={handleCloseDropdowns}
            />
          )}
        </AnimatePresence>

        <div className="bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.04)] relative z-10 flex flex-col md:flex-row items-stretch min-h-[56px]">
          
          {/* Left: Breadcrumb context + count */}
          <div className="flex items-center gap-2 text-[11px] font-medium text-secondary min-w-0 flex-grow px-4 md:px-6 py-3.5">
            <span className="material-symbols-outlined text-[18px] text-accent/60">folder_open</span>
            <span className="hidden sm:inline whitespace-nowrap">Services</span>
            <span className="material-symbols-outlined text-[14px] text-secondary/30 hidden sm:inline select-none">chevron_right</span>
            <span className="font-semibold text-on-surface truncate">{categoryInfo.title}</span>
            <span className="text-secondary/40 hidden md:inline">·</span>
            <span className="text-accent font-bold hidden md:inline whitespace-nowrap">{filteredSolutions.length} {filteredSolutions.length === 1 ? 'match' : 'matches'}</span>
          </div>

          {/* Right: Action controls (Search, Filter, Sort) in segmented box structure */}
          <div className="flex items-stretch flex-shrink-0 border-t md:border-t-0 md:border-l border-outline-variant/30 divide-x divide-outline-variant/30">
            
            {/* Box 1: Search Container */}
            <div className="relative flex items-center bg-transparent px-3 focus-within:px-4 focus-within:bg-surface-container/20 transition-all duration-300 min-w-[110px] md:min-w-[220px] flex-grow md:flex-grow-0">
              <span className="material-symbols-outlined text-[16px] text-secondary/40 mr-2 flex-shrink-0">search</span>
              <input 
                type="text" 
                placeholder="SEARCH CATALOG..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-[10px] font-label-caps tracking-[0.05em] text-secondary placeholder:text-secondary/30 focus:outline-none w-full py-3.5"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="text-secondary/40 hover:text-accent transition-colors flex items-center justify-center ml-2">
                  <span className="material-symbols-outlined text-[14px]">close</span>
                </button>
              )}
            </div>

            {/* Box 2: Filter Button & Dropdown */}
            <div className="relative flex items-stretch">
              <button
                onClick={() => { setIsFilterOpen(!isFilterOpen); setIsSortOpen(false); }}
                className={`group relative flex items-center gap-2 px-5 py-3.5 font-label-caps text-[10px] tracking-[0.12em] font-bold whitespace-nowrap transition-all duration-300 hover:bg-surface-container/20 ${
                  isFilterOpen || appliedInfra || appliedEfficiency
                    ? 'text-accent'
                    : 'text-secondary hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">filter_list</span>
                <span className="hidden sm:inline">FILTER</span>
                {(appliedInfra || appliedEfficiency) && (
                  <span className="absolute top-[12px] right-[12px] w-1.5 h-1.5 rounded-full bg-accent" />
                )}
              </button>

              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
                    className="absolute top-full right-0 mt-0.5 w-[280px] bg-surface border border-outline-variant/40 shadow-2xl z-50 overflow-hidden"
                  >
                    {/* Popup header */}
                    <div className="px-5 py-3 border-b border-outline-variant/20 flex items-center justify-between">
                      <span className="font-label-caps text-[9px] tracking-[0.2em] text-secondary/60">FILTER BY</span>
                      {(tempInfra || tempEfficiency) && (
                        <button 
                          onClick={handleResetFilters}
                          className="font-label-caps text-[9px] tracking-[0.14em] text-accent hover:text-accent/80 transition-colors"
                        >
                          CLEAR
                        </button>
                      )}
                    </div>
                    
                    {/* Infrastructure & Efficiency selection list */}
                    <div className="p-4 space-y-4 border-b border-outline-variant/20">
                      <div>
                        <span className="font-label-caps text-[8px] tracking-[0.15em] text-secondary/40 block mb-2">INFRASTRUCTURE</span>
                        <div className="space-y-2">
                          <button 
                            onClick={() => setTempInfra(tempInfra === 'high' ? null : 'high')}
                            className={`w-full flex items-center justify-between text-left font-label-caps text-[9px] tracking-[0.15em] font-bold p-2 transition-all border border-outline-variant/10 ${
                              tempInfra === 'high' ? 'text-accent bg-accent/5 border-accent/30' : 'text-secondary hover:text-on-surface hover:bg-surface-container-lowest'
                            }`}
                          >
                            <span>HIGH VOLTAGE SOLUTIONS</span>
                            {tempInfra === 'high' && <span className="material-symbols-outlined text-[14px]">check</span>}
                          </button>
                          <button 
                            onClick={() => setTempInfra(tempInfra === 'low' ? null : 'low')}
                            className={`w-full flex items-center justify-between text-left font-label-caps text-[9px] tracking-[0.15em] font-bold p-2 transition-all border border-outline-variant/10 ${
                              tempInfra === 'low' ? 'text-accent bg-accent/5 border-accent/30' : 'text-secondary hover:text-on-surface hover:bg-surface-container-lowest'
                            }`}
                          >
                            <span>LOW VOLTAGE DISTRIBUTION</span>
                            {tempInfra === 'low' && <span className="material-symbols-outlined text-[14px]">check</span>}
                          </button>
                        </div>
                      </div>

                      <div>
                        <span className="font-label-caps text-[8px] tracking-[0.15em] text-secondary/40 block mb-2">EFFICIENCY</span>
                        <div className="space-y-2">
                          <button 
                            onClick={() => setTempEfficiency(tempEfficiency === 'standard' ? null : 'standard')}
                            className={`w-full flex items-center justify-between text-left font-label-caps text-[9px] tracking-[0.15em] font-bold p-2 transition-all border border-outline-variant/10 ${
                              tempEfficiency === 'standard' ? 'text-accent bg-accent/5 border-accent/30' : 'text-secondary hover:text-on-surface hover:bg-surface-container-lowest'
                            }`}
                          >
                            <span>STANDARD EFFICIENCY</span>
                            {tempEfficiency === 'standard' && <span className="material-symbols-outlined text-[14px]">check</span>}
                          </button>
                          <button 
                            onClick={() => setTempEfficiency(tempEfficiency === 'ultra' ? null : 'ultra')}
                            className={`w-full flex items-center justify-between text-left font-label-caps text-[9px] tracking-[0.15em] font-bold p-2 transition-all border border-outline-variant/10 ${
                              tempEfficiency === 'ultra' ? 'text-accent bg-accent/5 border-accent/30' : 'text-secondary hover:text-on-surface hover:bg-surface-container-lowest'
                            }`}
                          >
                            <span>ULTRA HIGH (97%+)</span>
                            {tempEfficiency === 'ultra' && <span className="material-symbols-outlined text-[14px]">check</span>}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Action button inside dropdown */}
                    <div className="p-3 bg-surface-container-lowest">
                      <button 
                        onClick={handleApplyFilters}
                        className="w-full py-2 bg-accent text-white font-label-caps text-[9px] tracking-[0.15em] font-bold hover:bg-accent/90 transition-colors flex items-center justify-center rounded-sm"
                      >
                        APPLY FILTERS
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Box 3: Sort Button & Dropdown */}
            <div className="relative flex items-stretch">
              <button
                onClick={() => { setIsSortOpen(!isSortOpen); setIsFilterOpen(false); }}
                className={`group relative flex items-center gap-2 px-5 py-3.5 font-label-caps text-[10px] tracking-[0.12em] font-bold whitespace-nowrap transition-all duration-300 hover:bg-surface-container/20 ${
                  isSortOpen || sortBy !== 'LATEST'
                    ? 'text-accent'
                    : 'text-secondary hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">swap_vert</span>
                <span className="hidden sm:inline">SORT</span>
                {sortBy !== 'LATEST' && (
                  <span className="absolute top-[12px] right-[12px] w-1.5 h-1.5 rounded-full bg-accent" />
                )}
              </button>

              <AnimatePresence>
                {isSortOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
                    className="absolute top-full right-0 mt-0.5 w-[220px] bg-surface border border-outline-variant/40 shadow-2xl z-50 overflow-hidden"
                  >
                      <div className="px-5 py-3 border-b border-outline-variant/20 flex items-center justify-between">
                        <span className="font-label-caps text-[9px] tracking-[0.2em] text-secondary/60">ORDER BY</span>
                        {sortBy !== 'LATEST' && (
                          <button 
                            onClick={() => { setSortBy('LATEST'); setIsSortOpen(false); }}
                            className="font-label-caps text-[9px] tracking-[0.14em] text-accent hover:text-accent/80 transition-colors"
                          >
                            RESET
                          </button>
                        )}
                      </div>
                      <button
                        onClick={() => {
                          setSortBy('LATEST');
                          setIsSortOpen(false);
                        }}
                        className={`w-full h-[44px] px-5 text-left font-label-caps text-[10px] tracking-[0.14em] font-bold transition-all duration-200 flex items-center justify-between border-b border-outline-variant/10 last:border-b-0 ${
                          sortBy === 'LATEST'
                            ? 'bg-accent/8 text-accent'
                            : 'text-secondary hover:bg-surface-container-lowest hover:text-on-surface'
                        }`}
                      >
                        <span>LATEST</span>
                        {sortBy === 'LATEST' && (
                          <span className="material-symbols-outlined text-[16px] text-accent">check</span>
                        )}
                      </button>
                      <button
                        onClick={() => {
                          setSortBy('EFFICIENCY');
                          setIsSortOpen(false);
                        }}
                        className={`w-full h-[44px] px-5 text-left font-label-caps text-[10px] tracking-[0.14em] font-bold transition-all duration-200 flex items-center justify-between border-b border-outline-variant/10 last:border-b-0 ${
                          sortBy === 'EFFICIENCY'
                            ? 'bg-accent/8 text-accent'
                            : 'text-secondary hover:bg-surface-container-lowest hover:text-on-surface'
                        }`}
                      >
                        <span>ENERGY EFFICIENCY</span>
                        {sortBy === 'EFFICIENCY' && (
                          <span className="material-symbols-outlined text-[16px] text-accent">check</span>
                        )}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>

      {/* ── Cards Grid ──────────────────────────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-20 space-y-16">
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
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 pb-32 flex items-center justify-center gap-8">
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

      <SpecificServicesCTA />

    </section>
  );
}
