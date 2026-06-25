import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { EngineeredSolutionCard } from '../../ui/EngineeredSolutionCard';
import { Button } from '../../ui/Button';

import { engineeredProductsData as productsData } from '../../../data/engineeredProductsData';
import { SpecificProductsCTA } from './SpecificProductsCTA';

const categoryMap = {
  'ups': { title: 'UPS Systems — Vertiv Brand', desc: 'Deliver secure power while providing first-class load protection.' },
  'lt-tta-panel': { title: 'L&T TTA Panel — Triple Throw Automatic Transfer Switch', desc: 'Reliable Triple Throw Automatic Transfer Switch Panels from L&T, supplied through Virtual JV with Synchro Electricals.' },
  'lucy-rmu': { title: 'Lucy Electric RMU — Ring Main Unit', desc: 'Compact, sealed, maintenance-free medium voltage switchgear for urban and industrial distribution networks.' },
  'lucy-css': { title: 'Lucy Electric CSS — Compact Secondary Substation', desc: 'Factory-assembled Compact Secondary Substations integrating MV switchgear, transformer, and LV distribution.' },
  'enclosure-cooling': { title: 'Enclosure Cooling', desc: 'Precision cooling for electrical enclosures and cabinets.' },
  'integrated-solutions': { title: 'Integrated Solutions', desc: 'Fully integrated rack, power, and cooling solutions.' },
  'digital-infrastructure': { title: 'Digital Infrastructure Solutions', desc: 'Complete monitoring and management for your infrastructure.' },
  'capital-goods': { title: 'Capital Goods & Solutions', desc: 'A comprehensive portfolio of secondary capital goods and support infrastructure including thermal cooling, integrated rack systems, and DCIM monitoring platforms.' }
};

export function EngineeredProducts() {
  const { categoryId } = useParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  // Applied states (used for filtering the actual array)
  const [appliedCategory, setAppliedCategory] = useState(null); // 'critical' | 'thermal' | null
  const [appliedCooling, setAppliedCooling] = useState(null); // 'chilled' | 'dx' | null
  // Pending states (used inside the dropdown until "APPLY FILTERS" is clicked)
  const [tempCategory, setTempCategory] = useState(null);
  const [tempCooling, setTempCooling] = useState(null);
  const [sortBy, setSortBy] = useState('POPULARITY'); // 'POPULARITY' | 'AZ'
  const [visibleCount, setVisibleCount] = useState(9);

  const isValidCategory = categoryId in categoryMap;

  if (!isValidCategory) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-[64px] text-secondary/30 mb-6 block">search_off</span>
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-3">Category Not Found</h2>
          <p className="text-secondary mb-8 text-[15px]">The requested product category could not be located.</p>
          <Link to="/products">
            <Button variant="primary" theme="light" icon="arrow_forward" iconPosition="right">
              RETURN TO PRODUCTS
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const categoryInfo = categoryMap[categoryId];

  const handleToggleFilterDropdown = () => {
    if (!isFilterOpen) {
      // Sync temp state with applied state upon opening
      setTempCategory(appliedCategory);
      setTempCooling(appliedCooling);
    }
    setIsFilterOpen(!isFilterOpen);
  };

  const handleCloseDropdowns = () => {
    setIsFilterOpen(false);
    setIsSortOpen(false);
    // Reset temp states to last applied states
    setTempCategory(appliedCategory);
    setTempCooling(appliedCooling);
  };

  const handleApplyFilters = () => {
    setAppliedCategory(tempCategory);
    setAppliedCooling(tempCooling);
    setIsFilterOpen(false);
    setVisibleCount(9);
  };

  const handleResetFilters = () => {
    setTempCategory(null);
    setTempCooling(null);
    setVisibleCount(9);
  };

  const filteredProducts = productsData
    .filter(item => {
      // 0. Filter by active URL parameter categoryId
      if (categoryId === 'capital-goods') {
        const isCapitalGoodProduct = item.categoryId === 'enclosure-cooling' || 
                                     item.categoryId === 'integrated-solutions' || 
                                     item.categoryId === 'digital-infrastructure';
        if (!isCapitalGoodProduct) {
          return false;
        }
      } else if (categoryId && item.categoryId !== categoryId) {
        return false;
      }

      // 1. Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesTag = item.tag.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesTag) {
          return false;
        }
      }
      
      // 2. Category filter (represented in the UI)
      if (appliedCategory === 'critical') {
        const isCritical = item.tag === 'CRITICAL POWER' || item.tag === 'DC POWER SYSTEMS' || item.tag === 'POWER DISTRIBUTION' || item.tag === 'INDUSTRIAL AC & DC';
        if (!isCritical) return false;
      } else if (appliedCategory === 'thermal') {
        const isThermal = item.tag === 'THERMAL MANAGEMENT' || item.tag === 'LIQUID COOLING' || item.tag === 'ENCLOSURE COOLING';
        if (!isThermal) return false;
      }
      
      // 3. Cooling filter
      if (appliedCooling === 'chilled') {
        const hasChilled = item.features.some(f => f.toLowerCase().includes('chilled') || f.toLowerCase().includes('liquid') || f.toLowerCase().includes('coolant')) || 
                           item.title.toLowerCase().includes('chilled') ||
                           item.description.toLowerCase().includes('chilled');
        if (!hasChilled) return false;
      } else if (appliedCooling === 'dx') {
        const hasDX = item.features.some(f => f.toLowerCase().includes('dx') || f.toLowerCase().includes('direct expansion') || f.toLowerCase().includes('refrigerant') || f.toLowerCase().includes('split')) || 
                      item.title.toLowerCase().includes('dx') ||
                      item.description.toLowerCase().includes('dx');
        if (!hasDX) return false;
      }
      
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'AZ') {
        return a.title.localeCompare(b.title);
      }
      return b.scorePercentage - a.scorePercentage;
    });

  return (
    <section className="bg-surface">
      
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
              <Link to="/products" className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Products</Link>
              <span className="material-symbols-outlined text-surface-variant text-[14px] select-none flex items-center justify-center">chevron_right</span>
              <span className="font-label-caps text-[10px] text-surface-variant tracking-[0.2em] uppercase">{categoryInfo.title}</span>
            </motion.nav>

            <motion.h1 
              className="font-headline text-[28px] md:text-[36px] lg:text-[40px] leading-[1.05] font-black tracking-tight text-inverse-on-surface uppercase flex flex-col items-start gap-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span>{categoryInfo.title}</span>
              {categoryId === 'ups' && (
                <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 border border-accent/30 bg-accent/10 select-none rounded-none">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="font-label-caps text-[8.5px] text-accent tracking-widest uppercase font-bold">Vertiv Authorised Channel Partner</span>
                </div>
              )}
            </motion.h1>
          </div>


        </div>
      </div>

      {/* ── Industrial Smart Sticky Toolbar ────────────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 sticky top-[64px] md:top-[80px] z-40 mb-8 md:mb-14">
        
        {/* Invisible Click-Outside Detector (No blur or dimming) */}
        <AnimatePresence>
          {(isFilterOpen || isSortOpen) && (
            <div 
              className="fixed inset-0 bg-transparent z-0"
              onClick={handleCloseDropdowns}
            />
          )}
        </AnimatePresence>

        <div className="bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.04)] relative z-10 flex flex-col lg:flex-row items-stretch">
          
          {/* Left: Breadcrumb context + count */}
          <div className="flex items-center gap-2 text-[11px] font-medium text-secondary min-w-0 flex-grow px-4 lg:px-6 py-3.5">
            <span className="material-symbols-outlined text-[18px] text-accent/60">folder_open</span>
            <span className="hidden sm:inline whitespace-nowrap">Products</span>
            <span className="material-symbols-outlined text-[14px] text-secondary/30 hidden sm:inline select-none">chevron_right</span>
            <span className="font-semibold text-on-surface truncate">
              {categoryInfo.title}
              <span className="text-accent font-bold ml-1.5 whitespace-nowrap">({filteredProducts.length})</span>
            </span>
          </div>

          {/* Right: Action controls (Search, Filter, Sort) in segmented box structure */}
          <div className="flex items-stretch flex-shrink-0 border-t lg:border-t-0 lg:border-l border-outline-variant/30 divide-x divide-outline-variant/30">
            
            {/* Box 1: Search Container */}
            <div className="relative flex items-center bg-transparent px-3 focus-within:px-4 focus-within:bg-surface-container/20 transition-all duration-300 min-w-[110px] lg:min-w-[220px] flex-grow lg:flex-grow-0">
              <span className="material-symbols-outlined text-[18px] text-secondary/40 mr-2 flex-shrink-0">search</span>
              <input 
                type="text" 
                placeholder="SEARCH CATALOG..." 
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(9); }}
                className="bg-transparent text-[10px] font-label-caps tracking-[0.05em] text-secondary placeholder:text-secondary/30 focus:outline-none w-full py-3.5"
              />
              {searchQuery && (
                <button onClick={() => { setSearchQuery(''); setVisibleCount(9); }} className="text-secondary/40 hover:text-accent transition-colors flex items-center justify-center ml-2">
                  <span className="material-symbols-outlined text-[14px]">close</span>
                </button>
              )}
            </div>

            {/* Box 2: Filter Button & Dropdown */}
            <div className="relative flex items-stretch">
              <button
                onClick={() => { setIsFilterOpen(!isFilterOpen); setIsSortOpen(false); }}
                className={`group relative flex items-center gap-2 px-5 py-3.5 font-label-caps text-[10px] tracking-[0.12em] font-bold whitespace-nowrap transition-all duration-300 hover:bg-surface-container/20 ${
                  isFilterOpen || appliedCategory || appliedCooling
                    ? 'text-accent'
                    : 'text-secondary hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">filter_list</span>
                <span className="hidden sm:inline">FILTER</span>
                {(appliedCategory || appliedCooling) && (
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
                      {(tempCategory || tempCooling) && (
                        <button 
                          onClick={handleResetFilters}
                          className="font-label-caps text-[9px] tracking-[0.14em] text-accent hover:text-accent/80 transition-colors"
                        >
                          CLEAR
                        </button>
                      )}
                    </div>
                    
                    {/* Category & Cooling selection list */}
                    <div className="p-4 space-y-4 border-b border-outline-variant/20">
                      <div>
                        <span className="font-label-caps text-[8px] tracking-[0.15em] text-secondary/40 block mb-2">CATEGORY</span>
                        <div className="space-y-2">
                          <button 
                            onClick={() => setTempCategory(tempCategory === 'critical' ? null : 'critical')}
                            className={`w-full flex items-center justify-between text-left font-label-caps text-[9px] tracking-[0.15em] font-bold p-2 transition-all border border-outline-variant/10 ${
                              tempCategory === 'critical' ? 'text-accent bg-accent/5 border-accent/30' : 'text-secondary hover:text-on-surface hover:bg-surface-container-lowest'
                            }`}
                          >
                            <span>CRITICAL POWER</span>
                            {tempCategory === 'critical' && <span className="material-symbols-outlined text-[14px]">check</span>}
                          </button>
                          <button 
                            onClick={() => setTempCategory(tempCategory === 'thermal' ? null : 'thermal')}
                            className={`w-full flex items-center justify-between text-left font-label-caps text-[9px] tracking-[0.15em] font-bold p-2 transition-all border border-outline-variant/10 ${
                              tempCategory === 'thermal' ? 'text-accent bg-accent/5 border-accent/30' : 'text-secondary hover:text-on-surface hover:bg-surface-container-lowest'
                            }`}
                          >
                            <span>THERMAL MANAGEMENT</span>
                            {tempCategory === 'thermal' && <span className="material-symbols-outlined text-[14px]">check</span>}
                          </button>
                        </div>
                      </div>

                      <div>
                        <span className="font-label-caps text-[8px] tracking-[0.15em] text-secondary/40 block mb-2">COOLING</span>
                        <div className="space-y-2">
                          <button 
                            onClick={() => setTempCooling(tempCooling === 'chilled' ? null : 'chilled')}
                            className={`w-full flex items-center justify-between text-left font-label-caps text-[9px] tracking-[0.15em] font-bold p-2 transition-all border border-outline-variant/10 ${
                              tempCooling === 'chilled' ? 'text-accent bg-accent/5 border-accent/30' : 'text-secondary hover:text-on-surface hover:bg-surface-container-lowest'
                            }`}
                          >
                            <span>CHILLED WATER</span>
                            {tempCooling === 'chilled' && <span className="material-symbols-outlined text-[14px]">check</span>}
                          </button>
                          <button 
                            onClick={() => setTempCooling(tempCooling === 'dx' ? null : 'dx')}
                            className={`w-full flex items-center justify-between text-left font-label-caps text-[9px] tracking-[0.15em] font-bold p-2 transition-all border border-outline-variant/10 ${
                              tempCooling === 'dx' ? 'text-accent bg-accent/5 border-accent/30' : 'text-secondary hover:text-on-surface hover:bg-surface-container-lowest'
                            }`}
                          >
                            <span>DIRECT EXPANSION (DX)</span>
                            {tempCooling === 'dx' && <span className="material-symbols-outlined text-[14px]">check</span>}
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
                  isSortOpen || sortBy !== 'POPULARITY'
                    ? 'text-accent'
                    : 'text-secondary hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">swap_vert</span>
                <span className="hidden sm:inline">SORT</span>
                {sortBy !== 'POPULARITY' && (
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
                        {sortBy !== 'POPULARITY' && (
                          <button 
                            onClick={() => { setSortBy('POPULARITY'); setIsSortOpen(false); setVisibleCount(9); }}
                            className="font-label-caps text-[9px] tracking-[0.14em] text-accent hover:text-accent/80 transition-colors"
                          >
                            RESET
                          </button>
                        )}
                      </div>
                      <button
                        onClick={() => {
                          setSortBy('POPULARITY');
                          setIsSortOpen(false);
                          setVisibleCount(9);
                        }}
                        className={`w-full h-[44px] px-5 text-left font-label-caps text-[10px] tracking-[0.14em] font-bold transition-all duration-200 flex items-center justify-between border-b border-outline-variant/10 last:border-b-0 ${
                          sortBy === 'POPULARITY'
                            ? 'bg-accent/8 text-accent'
                            : 'text-secondary hover:bg-surface-container-lowest hover:text-on-surface'
                        }`}
                      >
                        <span>POPULARITY</span>
                        {sortBy === 'POPULARITY' && (
                          <span className="material-symbols-outlined text-[16px] text-accent">check</span>
                        )}
                      </button>
                      <button
                        onClick={() => {
                          setSortBy('AZ');
                          setIsSortOpen(false);
                          setVisibleCount(9);
                        }}
                        className={`w-full h-[44px] px-5 text-left font-label-caps text-[10px] tracking-[0.14em] font-bold transition-all duration-200 flex items-center justify-between border-b border-outline-variant/10 last:border-b-0 ${
                          sortBy === 'AZ'
                            ? 'bg-accent/8 text-accent'
                            : 'text-secondary hover:bg-surface-container-lowest hover:text-on-surface'
                        }`}
                      >
                        <span>A-Z (ASCENDING)</span>
                        {sortBy === 'AZ' && (
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
      <motion.div layout className="max-w-[1440px] mx-auto px-8 md:px-16 py-10 md:py-20 space-y-10 md:space-y-16">
        <AnimatePresence mode="popLayout">
          {filteredProducts.length > 0 ? (
            filteredProducts.slice(0, visibleCount).map((product, idx) => (
              <EngineeredSolutionCard key={product.id} index={idx} {...product} />
            ))
          ) : (
            <motion.div 
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-20 text-center border border-dashed border-outline/30 bg-surface-container/10 w-full"
            >
              <span className="material-symbols-outlined text-[48px] text-secondary/30 mb-4 block">search_off</span>
              <p className="font-headline text-[18px] text-secondary tracking-wide uppercase">No Engineering Products Found</p>
              <p className="font-body text-[13px] text-secondary/50 mt-2">Try adjusting your filters or search query to find compatible specifications.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ── Creative Load More Section ────────────────────────────────────────── */}
      {filteredProducts.length > 0 && (
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 pb-16 md:pb-32 flex flex-col items-center">
          {/* Progress Indicator */}
          <div className="flex items-center gap-4 mb-4 text-secondary/60">
            <span className="font-label-caps text-[10px] tracking-[0.15em] uppercase">
              Showing <span className="font-bold text-accent">{Math.min(visibleCount, filteredProducts.length)}</span> of <span className="font-bold text-on-surface">{filteredProducts.length}</span> products
            </span>
          </div>

          {/* Progress Bar (Visual indicator of what is loaded) */}
          <div className="w-48 h-[2px] bg-outline-variant/30 relative overflow-hidden mb-8 rounded-full">
            <motion.div 
              className="absolute inset-y-0 left-0 bg-accent"
              initial={{ width: 0 }}
              animate={{ width: `${(Math.min(visibleCount, filteredProducts.length) / filteredProducts.length) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>

          {/* Load More Trigger */}
          {visibleCount < filteredProducts.length ? (
            <Button
              variant="outline"
              theme="light"
              showArrow
              icon="arrow_downward"
              onClick={() => setVisibleCount(prev => prev + 9)}
              className="border-outline-variant/50 min-w-[200px]"
            >
              LOAD MORE
            </Button>
          ) : (
            <div className="inline-flex items-center gap-2 border border-outline-variant/20 bg-surface-container-lowest/50 px-6 py-2.5 rounded-sm font-label-caps text-[9px] tracking-[0.15em] text-secondary/40 select-none uppercase font-bold">
              <span className="material-symbols-outlined text-[16px] text-accent/50">check_circle</span>
              ALL PRODUCTS LOADED
            </div>
          )}
        </div>
      )}

      <SpecificProductsCTA />

    </section>
  );
}
