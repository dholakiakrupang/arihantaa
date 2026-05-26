import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button';
import { newsArticlesData } from '../../../data/newsArticlesData';

// Map newsArticlesData into grid items with colSpan and desc from p1
const newsItems = newsArticlesData.map((article, i) => ({
  id: article.id,
  title: article.title,
  category: article.category,
  date: article.date,
  readTime: article.readTime,
  desc: article.p1.slice(0, 160) + '…',
  img: article.img,
  colSpan: i === 0 ? 'lg:col-span-8' : 'lg:col-span-4',
  isFeatured: i === 0,
}));

export function FeaturedNews({ activeCategory, setActiveCategory }) {
  const [tempCategory, setTempCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(3);

  const categories = [
    { id: 'All', label: 'All Articles' },
    { id: 'Reports', label: 'Reports & Whitepapers' },
    { id: 'Project Updates', label: 'Project Updates' },
    { id: 'Press', label: 'Press Releases' },
  ];

  const filterOptions = [
    { id: 'Reports', label: 'Reports & Whitepapers' },
    { id: 'Project Updates', label: 'Project Updates' },
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
    setVisibleCount(3);
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
        } else if (activeCategory === 'Project Updates') {
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
  const visible = filtered.slice(0, visibleCount);

  return (
    <section id="news" className="py-24 bg-surface border-t border-outline-variant/30">
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

        {/* ── Sticky Category/Sort Toolbar ── */}
        <div className="sticky top-[64px] md:top-[80px] z-40 mb-12">

          {/* Invisible Click-Outside Detector */}
          <AnimatePresence>
            {(filterOpen || sortOpen) && (
              <div
                className="fixed inset-0 bg-transparent z-0"
                onClick={handleCloseDropdowns}
              />
            )}
          </AnimatePresence>

          <div className="bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.04)] relative z-10 flex flex-col md:flex-row items-stretch">

            {/* Left: context + count */}
            <div className="flex items-center gap-2 text-[11px] font-medium text-secondary min-w-0 flex-grow px-4 md:px-6 py-3.5">
              <span className="material-symbols-outlined text-[18px] text-accent/60">feed</span>
              <span className="whitespace-nowrap">Insights</span>
              <span className="material-symbols-outlined text-[14px] text-secondary/30 select-none">chevron_right</span>
              <span className="font-semibold text-on-surface truncate">
                {activeCategoryLabel}
                <span className="text-accent font-bold ml-1.5">({filtered.length})</span>
              </span>
            </div>

            {/* Right: Search, Filter, Sort */}
            <div className="flex items-stretch flex-shrink-0 border-t md:border-t-0 md:border-l border-outline-variant/30 divide-x divide-outline-variant/30">

              {/* Search */}
              <div className="relative flex items-center bg-transparent px-3 md:px-4 focus-within:bg-surface-container/20 transition-all duration-300 min-w-0 flex-1 md:min-w-[220px] md:flex-initial md:flex-grow-0">
                <span className="material-symbols-outlined text-[18px] text-secondary/40 mr-2 flex-shrink-0">search</span>
                <input
                  type="text"
                  placeholder="SEARCH NEWS..."
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(3); }}
                  className="bg-transparent text-[10px] font-label-caps tracking-[0.05em] text-secondary placeholder:text-secondary/30 focus:outline-none w-full py-3.5"
                />
                {searchQuery && (
                  <button onClick={() => { setSearchQuery(''); setVisibleCount(3); }} className="text-secondary/40 hover:text-accent transition-colors flex items-center justify-center ml-2">
                    <span className="material-symbols-outlined text-[14px]">close</span>
                  </button>
                )}
              </div>

              {/* Filter */}
              <div className="relative flex items-stretch">
                <button
                  onClick={handleToggleFilterDropdown}
                  className={`group relative flex items-center gap-2 px-3 sm:px-5 py-3.5 font-label-caps text-[10px] tracking-[0.12em] font-bold whitespace-nowrap transition-all duration-300 hover:bg-surface-container/20 ${
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

              {/* Sort */}
              <div className="relative flex items-stretch">
                <button
                  onClick={() => { setSortOpen(!sortOpen); setFilterOpen(false); }}
                  className={`group relative flex items-center gap-2 px-3 sm:px-5 py-3.5 font-label-caps text-[10px] tracking-[0.12em] font-bold whitespace-nowrap transition-all duration-300 hover:bg-surface-container/20 ${
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
                            onClick={() => { setSortBy('default'); setSortOpen(false); setVisibleCount(3); }}
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
                            setVisibleCount(3);
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
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 border-t border-l border-outline-variant/30">
            <AnimatePresence mode="popLayout">
              {visible.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  className={`${item.isFeatured && i === 0 ? 'lg:col-span-8' : 'lg:col-span-4'} group flex flex-col bg-surface border-r border-b border-outline-variant/30 p-8`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                >
                  <Link to={`/news/${item.id}`} className="flex flex-col h-full justify-between">
                    <div>
                      {/* Image Box */}
                      <div className={`relative w-full overflow-hidden bg-surface-container mb-6 border border-outline-variant/30 ${
                        item.isFeatured && i === 0 ? 'aspect-[16/9] md:aspect-[2/1] lg:aspect-[16/7]' : 'aspect-[4/3]'
                      }`}>
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                          loading={i === 0 ? 'eager' : 'lazy'}
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
                        item.isFeatured && i === 0 ? 'text-[24px] md:text-[32px] tracking-tight' : 'text-[20px] md:text-[24px]'
                      }`}>
                        {item.title}
                      </h3>

                      <p className={`font-body text-secondary leading-relaxed mb-6 ${
                        item.isFeatured && i === 0 ? 'text-[15px] max-w-2xl' : 'text-[14px] line-clamp-3'
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
        ) : (
          <div className="py-20 text-center border border-dashed border-outline/30 bg-surface-container/10">
            <span className="material-symbols-outlined text-[48px] text-secondary/30 mb-4 block">search_off</span>
            <p className="font-headline text-[18px] text-secondary tracking-wide uppercase">No Articles Found</p>
            <p className="font-body text-[13px] text-secondary/50 mt-2">Try adjusting your filters or search query.</p>
          </div>
        )}

        {/* ── Creative Load More Section ── */}
        {filtered.length > 0 && (
          <div className="mt-16 flex flex-col items-center">
            {/* Progress Indicator */}
            <div className="flex items-center gap-4 mb-4 text-secondary/60">
              <span className="font-label-caps text-[10px] tracking-[0.15em] uppercase">
                Showing <span className="font-bold text-accent">{Math.min(visibleCount, filtered.length)}</span> of <span className="font-bold text-on-surface">{filtered.length}</span> articles
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-48 h-[2px] bg-outline-variant/30 relative overflow-hidden mb-8 rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${(Math.min(visibleCount, filtered.length) / filtered.length) * 100}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>

            {/* Load More Trigger */}
            {visibleCount < filtered.length ? (
              <Button
                variant="outline"
                theme="light"
                showArrow
                icon="arrow_downward"
                onClick={() => setVisibleCount(prev => prev + 3)}
                className="border-outline-variant/50 min-w-[200px]"
              >
                LOAD MORE
              </Button>
            ) : (
              <div className="inline-flex items-center gap-2 border border-outline-variant/20 bg-surface-container-lowest/50 px-6 py-2.5 rounded-sm font-label-caps text-[9px] tracking-[0.15em] text-secondary/40 select-none uppercase font-bold">
                <span className="material-symbols-outlined text-[16px] text-accent/50">check_circle</span>
                ALL NEWS LOADED
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
