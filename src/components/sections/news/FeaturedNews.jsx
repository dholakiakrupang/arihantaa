import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button';

const newsItems = [
  {
    id: 'eastern-grid-expansion',
    title: "Industrial Authority Signs ₹240 Cr. Infrastructure Contract",
    category: "Press Release",
    date: "Oct 24, 2026",
    readTime: "6 Min Read",
    desc: "In a decisive move to fortify regional power stability, Industrial Authority Engineering has officially secured the Phase II contract for the Eastern Grid expansion project, mandating advanced UPS architecture.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3LAEI6CRn5IIILEjifzbbaLhYXGbuWVwYk_VDSIkDvIo1jzDxWBU7qLRp6ROjH0LMIDq1UX1f7Rigb_h4tMQp4toFyQTydTDdwq1olOh1VUesNHNMFsy1iJbqhvQpYDe0y8YlhCJ_5ZGPx_KGp80NrUsNPoeFrWbgSTr9fxndwmpVE1wpQnsGbK-GVGG0_TEyouXlNdPtECSHJ2IUZf640erkXOAtL3HarvdPW35IyCg8upQ1v8pcaoaZO4KLDiZebs5MM8ZewSo",
    colSpan: "lg:col-span-8",
    isFeatured: true
  },
  {
    id: 2,
    title: "Optimizing Thermal Efficiency in Substations",
    category: "Technical Report",
    date: "Oct 12, 2026",
    readTime: "4 Min Read",
    desc: "Analysis of modern cooling methodologies in high-capacity transformer bays, exploring fluid dynamics.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXTaHZF2s9EkzujqLkbFGry7vOKPsNt08rADHH8cldx-PLWVBfX6u0hGiYUoZNcAzNC7Ehmw_-X_0QdDoUMyXBrLLW4L3pc4TwlDscR-6KnEo4MAuCKMiAUOkXHJK7_poGE5pNs4aOMu6CiUavm8gA9runwJkVJYn8vVZtdTud_VMyk0H3whG-zl4t0dvS1KnNhOUcLUA4dQzngEUerTrLQRsMQJ-ii3RggnHmSOMnNymRLZzcoxHoPn8v4HmkDrrCIGwITFcCyr4",
    colSpan: "lg:col-span-4",
    isFeatured: false
  },
  {
    id: 3,
    title: "Hydro-Electric Stress Testing Protocols",
    category: "Whitepaper",
    date: "Sep 28, 2026",
    readTime: "8 Min Read",
    desc: "Methodologies for simulating 100-year flow events on infrastructure. A detailed breakdown of fluid mechanics.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5FW8nf272gXSM_1xLQR9lKoi7xId3VLHIZFPFzZDDsZz-nkZBK2rLtsZtKJkruCgzVDafIT8sh-T2S4pquUpCFv5xVyBphjPjDfvrRtJhzcdElkAzpWf66KnClNbPqHBo7FDSKuqauWqmdmdjkPyWjklLYf1pyhqrHlKMFP7aTOT40qcirHI1QrKknjtv-vRFHkwL6Lqe96kLA6WOsS23v5Vqw3Ww0Ukxbs38PwDFBS-xum-nzeDdwKNE9LRjMiiG71SmAJODIrk",
    colSpan: "lg:col-span-4",
    isFeatured: false
  },
  {
    id: 4,
    title: "Alpha Solar Array Substation Progress",
    category: "Project Update",
    date: "Sep 15, 2026",
    readTime: "3 Min Read",
    desc: "Integration of a 500MW solar farm into the national grid with advanced voltage regulation.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAH-XlVfiUims4FuvWQyfp3g5yMEYAXu5W8L_8uYh3Ih-vc25CLSwk9L91FOzpyjX9h727SvBUjEjzTBhCUqwDEK-faQqg481UUBnRtczffpJoLP1anXLQSjSbywiM4hLy9c-vAl8gzbbFVe31jx7-8HSB9kHwjLH0vRwKB0OyvY4pt3NC36MyAoa6pk4iMwlo0D_85spL5SOVT7mbLmZ7U2qyW31OsCPbgwf07HCkxHWpuRz8t4jdBA3Ls1Smb_5Z8nhRvbQ7fLOY",
    colSpan: "lg:col-span-4",
    isFeatured: false
  },
  {
    id: 5,
    title: "Steelworks Power Upgrade Phase 2",
    category: "Project Update",
    date: "Aug 30, 2026",
    readTime: "4 Min Read",
    desc: "Overhaul of internal distribution network to support new electric arc furnaces.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs7GWrmO_Y24aIx0d_M368iwbT45iHy_7DqpZ7nch4fGcArhsG3Sgv3kEZJrQgufY4RuhkBeG0nzAVuZdo9xFBim7nRUdHZtnsUXXvA4N-7-sezh59f9vX1KfadhdMLz0Uj-yIVnI5c3gseMueQqUedxsfbbqL5ecgnT83a3xHXTG3h3mwsSqZyjqYaqua9ahuVxPAZbAQY0-mdX7ZKunjvj7d0CRfydIP5nD9glow6KMU8SoKRHqFaWIZB41-0SRYLfF8zA12KHQ",
    colSpan: "lg:col-span-4",
    isFeatured: false
  }
];

export function FeaturedNews() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [tempCategory, setTempCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'All', label: 'All Articles' },
    { id: 'Reports', label: 'Reports & Whitepapers' },
    { id: 'Projects', label: 'Project Updates' },
    { id: 'Press', label: 'Press Releases' },
  ];

  const filterOptions = [
    { id: 'Reports', label: 'Reports & Whitepapers' },
    { id: 'Projects', label: 'Project Updates' },
    { id: 'Press', label: 'Press Releases' },
  ];

  const sortOptions = [
    { id: 'date-desc', label: 'Date: Newest First' },
    { id: 'date-asc', label: 'Date: Oldest First' },
    { id: 'read-desc', label: 'Read Time: Long → Short' },
    { id: 'read-asc', label: 'Read Time: Short → Long' },
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
    setTempCategory('All');
  };

  const parseDate = (dStr) => new Date(dStr).getTime() || 0;
  const parseReadTime = (rStr) => parseInt(rStr.replace(/[^\d]/g, '')) || 0;

  const filtered = newsItems
    .filter(item => {
      // 1. Category Filter
      if (activeCategory !== 'All') {
        let isMatch = false;
        if (activeCategory === 'Reports') {
          isMatch = item.category.toLowerCase().includes('report') || 
                  item.category.toLowerCase().includes('whitepaper');
        } else if (activeCategory === 'Projects') {
          isMatch = item.category.toLowerCase().includes('project') || 
                  item.category.toLowerCase().includes('update');
        } else if (activeCategory === 'Press') {
          isMatch = item.category.toLowerCase().includes('press') || 
                  item.category.toLowerCase().includes('release');
        }
        if (!isMatch) return false;
      }
      
      // 2. Search Query Filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesDesc = item.desc.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesCategory) {
          return false;
        }
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date-desc': return parseDate(b.date) - parseDate(a.date);
        case 'date-asc': return parseDate(a.date) - parseDate(b.date);
        case 'read-desc': return parseReadTime(b.readTime) - parseReadTime(a.readTime);
        case 'read-asc': return parseReadTime(a.readTime) - parseReadTime(b.readTime);
        default: return 0;
      }
    });

  const activeCategoryLabel = categories.find(c => c.id === activeCategory)?.label || 'All Articles';

  return (
    <section className="py-24 bg-surface border-t border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-6 bg-accent" />
              <span className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase">Latest Updates</span>
            </div>
            <h2 className="font-headline text-[32px] md:text-[40px] font-black text-on-surface tracking-tighter uppercase leading-none">
              Media & Insights
            </h2>
          </div>
        </div>

        {/* ── Sticky Category/Sort Toolbar — EngineeredSolutions-inspired ── */}
        <div className="bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/30 sticky top-[80px] z-30 shadow-[0_1px_8px_rgba(0,0,0,0.04)] mb-12">
          
          {/* Invisible Click-Outside Detector (No blur or dimming) */}
          <AnimatePresence>
            {(filterOpen || sortOpen) && (
              <div 
                className="fixed inset-0 bg-transparent z-0"
                onClick={handleCloseDropdowns}
              />
            )}
          </AnimatePresence>

          <div className="bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.04)] relative z-10 flex flex-col md:flex-row items-stretch min-h-[56px]">

            {/* Left: Breadcrumb context + count */}
            <div className="flex items-center gap-2 text-[11px] font-medium text-secondary min-w-0 flex-grow px-4 md:px-6 py-3.5">
              <span className="material-symbols-outlined text-[18px] text-accent/60">feed</span>
              <span className="hidden sm:inline whitespace-nowrap">Insights</span>
              <span className="material-symbols-outlined text-[14px] text-secondary/30 hidden sm:inline select-none">chevron_right</span>
              <span className="font-semibold text-on-surface truncate">{activeCategoryLabel}</span>
              <span className="text-secondary/40 hidden md:inline">·</span>
              <span className="text-accent font-bold hidden md:inline whitespace-nowrap">
                {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
              </span>
            </div>

            {/* Right: Action controls (Search, Filter, Sort) in segmented box structure */}
            <div className="flex items-stretch flex-shrink-0 border-t md:border-t-0 md:border-l border-outline-variant/30 divide-x divide-outline-variant/30">

              {/* Box 1: Search Container */}
              <div className="relative flex items-center bg-transparent px-4 focus-within:bg-surface-container/20 transition-all duration-300 min-w-[200px] md:min-w-[220px] flex-grow md:flex-grow-0">
                <span className="material-symbols-outlined text-[16px] text-secondary/40 mr-2 flex-shrink-0">search</span>
                <input 
                  type="text" 
                  placeholder="SEARCH NEWS..." 
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
                    filterOpen || activeCategory !== 'All'
                      ? 'text-accent'
                      : 'text-secondary hover:text-on-surface'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">filter_list</span>
                  <span className="hidden sm:inline">FILTER</span>
                  {activeCategory !== 'All' && (
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
                        {tempCategory !== 'All' && (
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
                          <span className="font-label-caps text-[8px] tracking-[0.15em] text-secondary/40 block mb-2">CATEGORY</span>
                          <div className="space-y-2">
                            {filterOptions.map((cat) => (
                              <button 
                                key={cat.id}
                                onClick={() => setTempCategory(tempCategory === cat.id ? 'All' : cat.id)}
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

        {/* News Grid - Box Layout with Single-Pixel Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 border-t border-l border-outline-variant/30">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                className={`${item.colSpan} group flex flex-col bg-surface border-r border-b border-outline-variant/30 p-8`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 1, 0.5, 1] }}
              >
                <Link to={`/news/${item.id}`} className="flex flex-col h-full justify-between">
                  <div>
                    {/* Image Box */}
                    <div className={`relative w-full overflow-hidden bg-surface-container mb-6 border border-outline-variant/30 ${
                      item.isFeatured ? 'aspect-[16/9] md:aspect-[2/1] lg:aspect-[16/7]' : 'aspect-[4/3]'
                    }`}>
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        loading={i === 0 ? "eager" : "lazy"} 
                        decoding="async"
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-surface/90 text-on-surface border border-outline-variant/30 backdrop-blur-sm px-3 py-1 font-label-caps text-[9px] uppercase tracking-[0.15em]">
                        {item.category}
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-3 font-label-caps text-[10px] uppercase tracking-wider text-secondary">
                      <span className="text-accent font-bold">{item.date}</span>
                      <span className="w-1.5 h-1.5 bg-outline-variant rounded-full"></span>
                      <span>{item.readTime}</span>
                    </div>

                    {/* Title & Desc */}
                    <h3 className={`font-headline font-black text-on-surface mb-3 group-hover:text-accent transition-colors duration-300 leading-[1.2] ${
                      item.isFeatured ? 'text-[24px] md:text-[32px] tracking-tight' : 'text-[20px] md:text-[24px]'
                    }`}>
                      {item.title}
                    </h3>
                    
                    <p className={`font-body text-secondary leading-relaxed mb-6 ${
                      item.isFeatured ? 'text-[15px] max-w-2xl' : 'text-[14px] line-clamp-3'
                    }`}>
                      {item.desc}
                    </p>
                  </div>

                  {/* CTA */}
                  <div>
                    <span className="inline-flex items-center gap-2 font-label-caps text-[10px] tracking-[0.15em] uppercase text-accent border-b border-accent/30 pb-0.5 group-hover:gap-4 group-hover:border-accent transition-all duration-300">
                      Read Article
                      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button variant="outline" theme="light" showArrow icon="arrow_downward" className="border-outline-variant/50">
            Load More News
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
