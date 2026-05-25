import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectCategories, projectBoardData } from '../../../data/projectsData';

function ProjectCard({ project, index }) {
  const isCompleted = project.status === 'Completed';

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.25, 1, 0.5, 1] }}
      className="group flex flex-col bg-surface border border-outline-variant/30 transition-all duration-300 relative hover:border-accent/30"
    >
      <Link to={`/projects/${project.id}`} className="absolute inset-0 z-20" aria-label={`View details for ${project.title}`} />
      
      {/* Visual Image Canvas */}
      <div className="relative h-52 overflow-hidden border-b border-outline-variant/30">
        {/* Real project image */}
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-surface-container-lowest" />
        )}
        
        {/* Gradient overlay for badge readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30 pointer-events-none" />

        {/* Category & Highlight badges */}
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          <span className="bg-black/60 backdrop-blur-md text-white font-label-caps text-[9px] tracking-[0.18em] px-2.5 py-1 border border-white/10">
            {project.categoryLabel.toUpperCase()}
          </span>
          {project.isHighlighted && (
            <span className="bg-accent text-white font-label-caps text-[9px] tracking-[0.18em] px-2.5 py-1">
              FLAGSHIP
            </span>
          )}
        </div>

        {/* Status indicator */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2.5 py-1 border border-white/10">
          <div className={`w-1.5 h-1.5 rounded-full ${isCompleted ? 'bg-green-400' : 'bg-accent animate-pulse'}`} />
          <span className="font-label-caps text-[8px] tracking-[0.15em] text-white">
            {project.status.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-1 space-y-4 justify-between">
        <div className="space-y-3">
          {/* Location */}
          <div className="flex items-center gap-1.5 text-secondary/60">
            <span className="material-symbols-outlined text-[22px]">location_on</span>
            <span className="font-label-caps text-[9px] tracking-[0.16em]">{project.location.toUpperCase()}</span>
          </div>

          {/* Title */}
          <h3 className="font-headline text-[18px] font-bold text-on-surface group-hover:text-accent transition-colors duration-300 leading-tight">
            {project.title}
          </h3>
        </div>

        <div className="space-y-4 pt-2">
          {/* Client & Value details */}
          <div className="flex justify-between text-[11px] font-body text-secondary border-t border-outline-variant/30 pt-3">
            <span className="truncate max-w-[150px]">{project.client}</span>
            <span className="font-bold text-accent">{project.value}</span>
          </div>

          {/* Progress gauge */}
          <div className="space-y-1.5">
            <div className="w-full h-[3px] bg-outline-variant/20 relative overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-accent"
                initial={{ width: 0 }}
                whileInView={{ width: `${project.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
              />
            </div>
            <div className="flex justify-between font-label-caps text-[9px] text-secondary/50 tracking-[0.14em]">
              <span>{project.duration}</span>
              <span>{project.progress}% COMPLETE</span>
            </div>
          </div>

          {/* Action Trigger */}
          <div className="pt-2 flex items-center justify-between border-t border-outline-variant/10">
            <span className="font-label-caps text-[9px] text-secondary/60 tracking-[0.16em]">VIEW DETAILS</span>
            <div className="w-8 h-8 border border-outline-variant/50 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300">
              <span className="material-symbols-outlined text-[22px] text-secondary group-hover:text-white transition-colors">arrow_forward</span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectBoard() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [tempCategory, setTempCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const sortOptions = [
    { id: 'value-desc', label: 'Value: High → Low' },
    { id: 'value-asc', label: 'Value: Low → High' },
    { id: 'progress-desc', label: 'Progress: High → Low' },
    { id: 'progress-asc', label: 'Progress: Low → High' },
    { id: 'name-asc', label: 'Name: A → Z' },
  ];

  const handleToggleFilterDropdown = () => {
    if (!filterOpen) {
      setTempCategory(activeCategory);
    }
    setFilterOpen(!filterOpen);
    setSortOpen(false);
  };

  const handleCloseDropdowns = () => {
    setFilterOpen(false);
    setSortOpen(false);
    setTempCategory(activeCategory);
  };

  const handleApplyFilters = () => {
    setActiveCategory(tempCategory);
    setFilterOpen(false);
  };

  const handleResetFilters = () => {
    setTempCategory('all');
  };

  const filtered = projectBoardData
    .filter((p) => {
      // 1. Category Filter
      if (activeCategory !== 'all' && p.category !== activeCategory) {
        return false;
      }
      // 2. Search Query Filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(query);
        const matchesLocation = p.location.toLowerCase().includes(query);
        const matchesClient = p.client.toLowerCase().includes(query);
        const matchesCategory = p.categoryLabel.toLowerCase().includes(query);
        if (!matchesTitle && !matchesLocation && !matchesClient && !matchesCategory) {
          return false;
        }
      }
      return true;
    })
    .sort((a, b) => {
      const parseValue = (v) => parseFloat(v.replace(/[₹, Cr+]/g, '')) || 0;
      switch (sortBy) {
        case 'value-desc': return parseValue(b.value) - parseValue(a.value);
        case 'value-asc': return parseValue(a.value) - parseValue(b.value);
        case 'progress-desc': return b.progress - a.progress;
        case 'progress-asc': return a.progress - b.progress;
        case 'name-asc': return a.title.localeCompare(b.title);
        default: return 0;
      }
    });

  const activeCategoryLabel = projectCategories.find(c => c.id === activeCategory)?.label || 'All Projects';
  const activeSortLabel = sortOptions.find(s => s.id === sortBy)?.label || 'Default';

  return (
    <section className="bg-surface py-24 px-6 md:px-12 lg:px-20 border-t border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-accent" />
              <span className="font-label-caps text-[10px] text-accent tracking-[0.26em]">PROJECT PORTFOLIO</span>
            </div>
            <h2 className="font-headline font-black uppercase text-4xl md:text-5xl text-on-surface tracking-tighter leading-none">
              All Projects
            </h2>
          </div>
        </div>

        {/* ── Sticky Toolbar — EngineeredSolutions-inspired ── */}
        <div className="bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/30 sticky top-[80px] z-40 shadow-[0_1px_8px_rgba(0,0,0,0.04)] mb-14">
          
          {/* Invisible Click-Outside Detector (No blur or dimming) */}
          <AnimatePresence>
            {(filterOpen || sortOpen) && (
              <div 
                className="fixed inset-0 bg-transparent z-0"
                onClick={handleCloseDropdowns}
              />
            )}
          </AnimatePresence>

          <div className="relative z-10 flex flex-col md:flex-row items-stretch min-h-[56px]">

            {/* Left: Breadcrumb context + count */}
            <div className="flex items-center gap-2 text-[11px] font-medium text-secondary min-w-0 flex-grow px-4 md:px-6 py-3.5">
              <span className="material-symbols-outlined text-[18px] text-accent/60">folder_open</span>
              <span className="hidden sm:inline whitespace-nowrap">Portfolio</span>
              <span className="material-symbols-outlined text-[14px] text-secondary/30 hidden sm:inline select-none">chevron_right</span>
              <span className="font-semibold text-on-surface truncate">{activeCategoryLabel}</span>
              <span className="text-secondary/40 hidden md:inline">·</span>
              <span className="text-accent font-bold hidden md:inline whitespace-nowrap">{filtered.length} {filtered.length === 1 ? 'project' : 'projects'}</span>
            </div>

            {/* Right: Action controls (Search, Filter, Sort) in segmented box structure */}
            <div className="flex items-stretch flex-shrink-0 border-t md:border-t-0 md:border-l border-outline-variant/30 divide-x divide-outline-variant/30">

              {/* Box 1: Search Container */}
              <div className="relative flex items-center bg-transparent px-4 focus-within:bg-surface-container/20 transition-all duration-300 min-w-[200px] md:min-w-[220px] flex-grow md:flex-grow-0">
                <span className="material-symbols-outlined text-[16px] text-secondary/40 mr-2 flex-shrink-0">search</span>
                <input 
                  type="text" 
                  placeholder="SEARCH PROJECTS..." 
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
                  onClick={handleToggleFilterDropdown}
                  className={`group relative flex items-center gap-2 px-5 py-3.5 font-label-caps text-[10px] tracking-[0.12em] font-bold whitespace-nowrap transition-all duration-300 hover:bg-surface-container/20 ${
                    filterOpen || activeCategory !== 'all'
                      ? 'text-accent'
                      : 'text-secondary hover:text-on-surface'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">filter_list</span>
                  <span className="hidden sm:inline">FILTER</span>
                  {activeCategory !== 'all' && (
                    <span className="absolute top-[12px] right-[12px] w-1.5 h-1.5 rounded-full bg-accent" />
                  )}
                </button>

                <AnimatePresence>
                  {filterOpen && (
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
                        {tempCategory !== 'all' && (
                          <button 
                            onClick={handleResetFilters}
                            className="font-label-caps text-[9px] tracking-[0.14em] text-accent hover:text-accent/80 transition-colors"
                          >
                            CLEAR
                          </button>
                        )}
                      </div>
                      
                      {/* Category selection list */}
                      <div className="p-4 space-y-4 border-b border-outline-variant/20">
                        <div>
                          <span className="font-label-caps text-[8px] tracking-[0.15em] text-secondary/40 block mb-2">SECTOR</span>
                          <div className="space-y-2">
                            {projectCategories.map((cat) => (
                              <button 
                                key={cat.id}
                                onClick={() => setTempCategory(tempCategory === cat.id ? 'all' : cat.id)}
                                className={`w-full flex items-center justify-between text-left font-label-caps text-[9px] tracking-[0.15em] font-bold p-2 transition-all border border-outline-variant/10 ${
                                  tempCategory === cat.id ? 'text-accent bg-accent/5 border-accent/30' : 'text-secondary hover:text-on-surface hover:bg-surface-container-lowest'
                                }`}
                              >
                                <span>{cat.label.toUpperCase()}</span>
                                {tempCategory === cat.id && <span className="material-symbols-outlined text-[14px]">check</span>}
                              </button>
                            ))}
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
                  onClick={() => { setSortOpen(!sortOpen); setFilterOpen(false); }}
                  className={`group relative flex items-center gap-2 px-5 py-3.5 font-label-caps text-[10px] tracking-[0.12em] font-bold whitespace-nowrap transition-all duration-300 hover:bg-surface-container/20 ${
                    sortOpen || sortBy !== 'default'
                      ? 'text-accent'
                      : 'text-secondary hover:text-on-surface'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">swap_vert</span>
                  <span className="hidden sm:inline">SORT</span>
                  {sortBy !== 'default' && (
                    <span className="absolute top-[12px] right-[12px] w-1.5 h-1.5 rounded-full bg-accent" />
                  )}
                </button>

                <AnimatePresence>
                  {sortOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
                      className="absolute top-full right-0 mt-0.5 w-[220px] bg-surface border border-outline-variant/40 shadow-2xl z-50 overflow-hidden"
                    >
                      <div className="px-5 py-3 border-b border-outline-variant/20 flex items-center justify-between">
                        <span className="font-label-caps text-[9px] tracking-[0.2em] text-secondary/60">ORDER BY</span>
                        {sortBy !== 'default' && (
                          <button 
                            onClick={() => { setSortBy('default'); setSortOpen(false); }}
                            className="font-label-caps text-[9px] tracking-[0.14em] text-accent hover:text-accent/80 transition-colors"
                          >
                            RESET
                          </button>
                        )}
                      </div>
                      {sortOptions.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => {
                            setSortBy(opt.id);
                            setSortOpen(false);
                          }}
                          className={`w-full h-[44px] px-5 text-left font-label-caps text-[10px] tracking-[0.14em] font-bold transition-all duration-200 flex items-center justify-between border-b border-outline-variant/10 last:border-b-0 ${
                            sortBy === opt.id
                              ? 'bg-accent/8 text-accent'
                              : 'text-secondary hover:bg-surface-container-lowest hover:text-on-surface'
                          }`}
                        >
                          <span>{opt.label.toUpperCase()}</span>
                          {sortBy === opt.id && (
                            <span className="material-symbols-outlined text-[16px] text-accent">check</span>
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
