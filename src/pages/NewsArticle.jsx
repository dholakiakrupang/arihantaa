import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UnifiedCTA } from '../components/sections/UnifiedCTA';
import { newsArticlesData } from '../data/newsArticlesData';

export function NewsArticle() {
  const { articleId } = useParams();

  // Scroll to top on article change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  // Find the current article dynamically (fallback to the first one)
  const currentArticle = newsArticlesData.find(
    (item) => item.id.toString() === articleId?.toString()
  ) || newsArticlesData[0];

  // Calculate dynamic Previous and Next articles based on sorting in database
  const currentIndex = newsArticlesData.findIndex(
    (item) => item.id.toString() === currentArticle.id.toString()
  );
  const prevArticle = currentIndex > 0 ? newsArticlesData[currentIndex - 1] : null;
  const nextArticle = currentIndex < newsArticlesData.length - 1 ? newsArticlesData[currentIndex + 1] : null;

  const [activePopup, setActivePopup] = useState(null); // 'link' | 'mail' | null
  const [copied, setCopied] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState('');
  const [shareUrl, setShareUrl] = useState('');

  // Handle URL fetch in effect to prevent SSR mismatch
  useEffect(() => {
    setShareUrl(window.location.href);
  }, [articleId]);

  // Click outside to close active popup
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (activePopup && !e.target.closest('.share-container')) {
        setActivePopup(null);
      }
    };
    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, [activePopup]);

  const handleCopyLink = () => {
    if (shareUrl) {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Arihantaa Insight: ${currentArticle.title}`);
    const body = encodeURIComponent(`Check out this article: "${currentArticle.title}"\n\nRead more here: ${shareUrl}`);
    const emailTo = recipientEmail ? encodeURIComponent(recipientEmail) : '';
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
    setActivePopup(null);
    setRecipientEmail('');
  };

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
        className="fixed top-[64px] md:top-[80px] left-0 right-0 h-1 bg-accent z-40 origin-left"
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

          <div className="max-w-[1440px] mx-auto relative z-10 w-full px-4 sm:px-8 md:px-16 flex flex-col gap-6">
            
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
              <span className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase">{currentArticle.badge}</span>
            </motion.nav>

            {/* Tags */}
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {currentArticle.tags.map((tag, tIdx) => (
                <span 
                  key={tIdx} 
                  className={`inline-block font-label-caps text-[10px] uppercase tracking-[0.2em] border px-4 py-1.5 ${
                    tIdx === 0 
                      ? 'text-accent border-accent/30 bg-accent/5 backdrop-blur-md'
                      : 'text-white/50 border-white/10'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Headline */}
            <motion.h1 
              className="font-headline text-[30px] sm:text-[36px] md:text-[56px] lg:text-[68px] leading-[1.08] font-black tracking-tighter uppercase max-w-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {currentArticle.headlineLines.map((line, lIdx) => (
                <span key={lIdx}>
                  <span className={lIdx === currentArticle.headlineLines.length - 1 ? 'text-accent' : 'text-white'}>
                    {line}
                  </span>
                  {lIdx < currentArticle.headlineLines.length - 1 && <br />}
                </span>
              ))}
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
                {currentArticle.date}
              </span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-accent">schedule</span>
                {currentArticle.readTime}
              </span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-accent">category</span>
                {currentArticle.category}
              </span>
            </motion.div>
          </div>
        </section>

        {/* ── Article Body Container ────────────────────────────────────── */}
        <article className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 pt-16 pb-24 relative z-10">
          
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
                alt={currentArticle.title} 
                className="w-full h-full object-cover brightness-95 transition-all duration-1000" 
                src={currentArticle.img}
              />
            </div>
            <p className="mt-4 font-body text-[14px] text-secondary border-l-2 border-accent pl-4 font-light">
              {currentArticle.title}
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
                {currentArticle.p1}
              </motion.p>
              
              <motion.h2 
                className="font-headline text-[28px] md:text-[36px] font-black text-on-surface uppercase tracking-tight pt-6 border-b border-outline-variant/30 pb-3"
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              >
                {currentArticle.headlineLines[1]}
              </motion.h2>
              
              <motion.p 
                className="font-body text-[15px] md:text-[17px] text-secondary leading-relaxed font-light text-justify"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              >
                {currentArticle.p2}
              </motion.p>

              {/* Stat Callout Box in premium console look */}
              <motion.div 
                className="my-8 md:my-16 p-6 sm:p-8 bg-white/[0.02] border border-outline-variant/40 shadow-2xl flex flex-col md:flex-row gap-8 justify-around items-center relative overflow-hidden backdrop-blur-md"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              >
                {/* L-shaped accents */}
                <div className="absolute top-[-1px] left-[-1px] w-3 h-3 border-t-2 border-l-2 border-accent pointer-events-none" />
                <div className="absolute top-[-1px] right-[-1px] w-3 h-3 border-t-2 border-r-2 border-accent pointer-events-none" />
                <div className="absolute bottom-[-1px] right-[-1px] w-3 h-3 border-b-2 border-r-2 border-accent pointer-events-none" />
                <div className="absolute bottom-[-1px] left-[-1px] w-3 h-3 border-b-2 border-l-2 border-accent pointer-events-none" />

                <div className="text-center group">
                  <div className="font-headline text-[44px] font-black text-accent group-hover:scale-105 transition-transform duration-300">{currentArticle.statValue1}</div>
                  <div className="font-label-caps text-[9px] text-secondary tracking-[0.2em] uppercase mt-2">{currentArticle.statLabel1}</div>
                </div>
                <div className="hidden md:block w-px h-12 bg-outline-variant/50"></div>
                <div className="text-center group">
                  <div className="font-headline text-[44px] font-black text-accent group-hover:scale-105 transition-transform duration-300">{currentArticle.statValue2}</div>
                  <div className="font-label-caps text-[9px] text-secondary tracking-[0.2em] uppercase mt-2">{currentArticle.statLabel2}</div>
                </div>
                <div className="hidden md:block w-px h-12 bg-outline-variant/50"></div>
                <div className="text-center group">
                  <div className="font-headline text-[44px] font-black text-accent group-hover:scale-105 transition-transform duration-300">{currentArticle.statValue3}</div>
                  <div className="font-label-caps text-[9px] text-secondary tracking-[0.2em] uppercase mt-2">{currentArticle.statLabel3}</div>
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
                {currentArticle.p3}
              </motion.p>

              {/* Pull Quote */}
              <motion.blockquote 
                className="my-8 md:my-16 pl-6 md:pl-8 border-l-[3px] border-accent relative"
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              >
                <p className="font-headline text-[18px] sm:text-[22px] md:text-[28px] text-on-surface font-medium italic leading-snug">
                  "{currentArticle.quote}"
                </p>
                <footer className="mt-4 font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase font-bold">
                  — {currentArticle.quoteAuthor}
                </footer>
              </motion.blockquote>

              <motion.p 
                className="font-body text-[15px] md:text-[17px] text-secondary leading-relaxed font-light text-justify"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              >
                {currentArticle.p4}
              </motion.p>

              {/* Article Footer / Meta */}
              <motion.div 
                className="mt-10 md:mt-20 pt-8 border-t border-outline-variant/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              >
                <div className="flex flex-wrap gap-2">
                  {currentArticle.hashtags.map((ht, hIdx) => (
                    <span key={hIdx} className="font-label-caps text-[9px] tracking-[0.15em] text-secondary bg-surface-container-low px-4 py-2 hover:bg-accent hover:text-white transition-colors cursor-pointer uppercase">{ht}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4 share-container">
                  <span className="font-label-caps text-[10px] text-secondary uppercase tracking-[0.2em] font-bold">Share:</span>
                  
                  {/* Share Link Button & Popup */}
                  <div className="relative">
                    <button 
                      onClick={() => setActivePopup(activePopup === 'link' ? null : 'link')}
                      className={`w-9 h-9 border rounded-none flex items-center justify-center transition-colors ${
                        activePopup === 'link' 
                          ? 'border-accent text-accent bg-accent/5' 
                          : 'border-outline-variant/50 text-secondary hover:border-accent hover:text-accent'
                      }`}
                      aria-label="Copy share link"
                    >
                      <span className="material-symbols-outlined text-[18px]">link</span>
                    </button>

                    <AnimatePresence>
                      {activePopup === 'link' && (
                        <>
                          {/* Mobile View: Centered Modal with Blur Backdrop */}
                          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 sm:hidden">
                            <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              transition={{ duration: 0.2 }}
                              className="w-full max-w-[320px] bg-white border border-outline-variant/60 shadow-2xl p-6 text-left text-neutral-900 relative"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {/* Corner accents */}
                              <div className="absolute top-[-1px] left-[-1px] w-2.5 h-2.5 border-t-2 border-l-2 border-accent pointer-events-none" />
                              <div className="absolute top-[-1px] right-[-1px] w-2.5 h-2.5 border-t-2 border-r-2 border-accent pointer-events-none" />
                              <div className="absolute bottom-[-1px] right-[-1px] w-2.5 h-2.5 border-b-2 border-r-2 border-accent pointer-events-none" />
                              <div className="absolute bottom-[-1px] left-[-1px] w-2.5 h-2.5 border-b-2 border-l-2 border-accent pointer-events-none" />

                              <div className="flex justify-between items-center mb-3">
                                <span className="font-label-caps text-[10px] tracking-[0.2em] text-accent font-bold">SHARE LINK</span>
                                <button 
                                  onClick={() => setActivePopup(null)}
                                  className="text-neutral-500 hover:text-neutral-900 transition-colors"
                                >
                                  <span className="material-symbols-outlined text-[20px]">close</span>
                                </button>
                              </div>
                              
                              <p className="font-body text-[13px] text-neutral-600 mb-4 font-light leading-snug">
                                Copy this URL to share this insight with your team.
                              </p>

                              <div className="flex flex-col gap-3">
                                <input 
                                  type="text" 
                                  readOnly 
                                  value={shareUrl}
                                  className="w-full bg-neutral-50 border border-neutral-200 px-3 py-2 text-[12px] text-neutral-800 font-mono focus:outline-none select-all"
                                />
                                <button 
                                  onClick={handleCopyLink}
                                  className="w-full bg-accent text-white font-label-caps text-[10px] tracking-[0.15em] font-bold py-2.5 hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
                                >
                                  {copied ? (
                                    <>
                                      <span className="material-symbols-outlined text-[16px]">check</span>
                                      LINK COPIED
                                    </>
                                  ) : (
                                    <>
                                      <span className="material-symbols-outlined text-[16px]">content_copy</span>
                                      COPY LINK
                                    </>
                                  )}
                                </button>
                              </div>
                            </motion.div>
                          </div>

                          {/* Desktop/Tablet View: Right-aligned Popover */}
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
                            className="hidden sm:block absolute bottom-full right-0 mb-3 w-[290px] bg-white border border-outline-variant/60 shadow-2xl z-50 p-5 text-left text-neutral-900"
                          >
                            {/* Corner accents */}
                            <div className="absolute top-[-1px] left-[-1px] w-2.5 h-2.5 border-t border-l border-accent pointer-events-none z-10" />
                            <div className="absolute top-[-1px] right-[-1px] w-2.5 h-2.5 border-t border-r border-accent pointer-events-none z-10" />
                            <div className="absolute bottom-[-1px] right-[-1px] w-2.5 h-2.5 border-b border-r border-accent pointer-events-none z-10" />
                            <div className="absolute bottom-[-1px] left-[-1px] w-2.5 h-2.5 border-b border-l border-accent pointer-events-none z-10" />

                            {/* Downward indicator arrow pointing exactly to button */}
                            <div className="absolute top-[calc(100%-6px)] right-[12px] w-3 h-3 bg-white border-r border-b border-outline-variant/60 rotate-45 z-0" />

                            <div className="flex justify-between items-center mb-3 relative z-10">
                              <span className="font-label-caps text-[9px] tracking-[0.2em] text-accent font-bold">SHARE LINK</span>
                              <button 
                                onClick={() => setActivePopup(null)}
                                className="text-neutral-500 hover:text-neutral-900 transition-colors"
                              >
                                <span className="material-symbols-outlined text-[16px]">close</span>
                              </button>
                            </div>
                            
                            <p className="font-body text-[12px] text-neutral-600 mb-3 font-light leading-snug relative z-10">
                              Copy this URL to share this insight with your team.
                            </p>

                            <div className="flex gap-2 relative z-10">
                              <input 
                                type="text" 
                                readOnly 
                                value={shareUrl}
                                className="flex-1 bg-neutral-50 border border-neutral-200 px-3 py-1.5 text-[11px] text-neutral-800 font-mono focus:outline-none select-all"
                              />
                              <button 
                                onClick={handleCopyLink}
                                className="bg-accent text-white font-label-caps text-[9px] tracking-[0.15em] font-bold px-3 py-1.5 hover:bg-accent/90 transition-colors flex items-center gap-1"
                              >
                                {copied ? (
                                  <>
                                    <span className="material-symbols-outlined text-[13px]">check</span>
                                    COPIED
                                  </>
                                ) : (
                                  <>
                                    <span className="material-symbols-outlined text-[13px]">content_copy</span>
                                    COPY
                                  </>
                                )}
                              </button>
                            </div>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Share Email Button & Popup */}
                  <div className="relative">
                    <button 
                      onClick={() => setActivePopup(activePopup === 'mail' ? null : 'mail')}
                      className={`w-9 h-9 border rounded-none flex items-center justify-center transition-colors ${
                        activePopup === 'mail' 
                          ? 'border-accent text-accent bg-accent/5' 
                          : 'border-outline-variant/50 text-secondary hover:border-accent hover:text-accent'
                      }`}
                      aria-label="Share via email"
                    >
                      <span className="material-symbols-outlined text-[18px]">mail</span>
                    </button>

                    <AnimatePresence>
                      {activePopup === 'mail' && (
                        <>
                          {/* Mobile View: Centered Modal with Blur Backdrop */}
                          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 sm:hidden">
                            <motion.div
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              transition={{ duration: 0.2 }}
                              className="w-full max-w-[320px] bg-white border border-outline-variant/60 shadow-2xl p-6 text-left text-neutral-900 relative"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {/* Corner accents */}
                              <div className="absolute top-[-1px] left-[-1px] w-2.5 h-2.5 border-t-2 border-l-2 border-accent pointer-events-none" />
                              <div className="absolute top-[-1px] right-[-1px] w-2.5 h-2.5 border-t-2 border-r-2 border-accent pointer-events-none" />
                              <div className="absolute bottom-[-1px] right-[-1px] w-2.5 h-2.5 border-b-2 border-r-2 border-accent pointer-events-none" />
                              <div className="absolute bottom-[-1px] left-[-1px] w-2.5 h-2.5 border-b-2 border-l-2 border-accent pointer-events-none" />

                              <div className="flex justify-between items-center mb-3">
                                <span className="font-label-caps text-[10px] tracking-[0.2em] text-accent font-bold">SHARE VIA EMAIL</span>
                                <button 
                                  onClick={() => setActivePopup(null)}
                                  className="text-neutral-500 hover:text-neutral-900 transition-colors"
                                >
                                  <span className="material-symbols-outlined text-[20px]">close</span>
                                </button>
                              </div>
                              
                              <form onSubmit={handleSendEmail} className="space-y-4">
                                <div>
                                  <label className="block font-label-caps text-[9px] tracking-[0.15em] text-neutral-500 mb-1.5 uppercase font-bold">Recipient Email</label>
                                  <input 
                                    type="email" 
                                    placeholder="name@example.com"
                                    value={recipientEmail}
                                    onChange={(e) => setRecipientEmail(e.target.value)}
                                    className="w-full bg-neutral-50 border border-neutral-200 px-3 py-2 text-[12px] text-neutral-900 font-sans focus:outline-none focus:border-accent transition-colors rounded-none placeholder:text-neutral-400"
                                    required
                                  />
                                </div>

                                <button 
                                  type="submit"
                                  className="w-full bg-accent text-white font-label-caps text-[10px] tracking-[0.15em] font-bold py-2.5 hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
                                >
                                  <span className="material-symbols-outlined text-[16px]">send</span>
                                  LAUNCH EMAIL CLIENT
                                </button>
                              </form>
                            </motion.div>
                          </div>

                          {/* Desktop/Tablet View: Right-aligned Popover */}
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
                            className="hidden sm:block absolute bottom-full right-0 mb-3 w-[290px] bg-white border border-outline-variant/60 shadow-2xl z-50 p-5 text-left text-neutral-900"
                          >
                            {/* Corner accents */}
                            <div className="absolute top-[-1px] left-[-1px] w-2.5 h-2.5 border-t border-l border-accent pointer-events-none z-10" />
                            <div className="absolute top-[-1px] right-[-1px] w-2.5 h-2.5 border-t border-r border-accent pointer-events-none z-10" />
                            <div className="absolute bottom-[-1px] right-[-1px] w-2.5 h-2.5 border-b border-r border-accent pointer-events-none z-10" />
                            <div className="absolute bottom-[-1px] left-[-1px] w-2.5 h-2.5 border-b border-l border-accent pointer-events-none z-10" />

                            {/* Downward indicator arrow pointing exactly to button */}
                            <div className="absolute top-[calc(100%-6px)] right-[12px] w-3 h-3 bg-white border-r border-b border-outline-variant/60 rotate-45 z-0" />

                            <div className="flex justify-between items-center mb-3 relative z-10">
                              <span className="font-label-caps text-[9px] tracking-[0.2em] text-accent font-bold">SHARE VIA EMAIL</span>
                              <button 
                                onClick={() => setActivePopup(null)}
                                className="text-neutral-500 hover:text-neutral-900 transition-colors"
                              >
                                <span className="material-symbols-outlined text-[16px]">close</span>
                              </button>
                            </div>
                            
                            <form onSubmit={handleSendEmail} className="space-y-3 relative z-10">
                              <div>
                                <label className="block font-label-caps text-[8.5px] tracking-[0.15em] text-neutral-500 mb-1.5 uppercase font-bold">Recipient Email</label>
                                <input 
                                  type="email" 
                                  placeholder="name@example.com"
                                  value={recipientEmail}
                                  onChange={(e) => setRecipientEmail(e.target.value)}
                                  className="w-full bg-neutral-50 border border-neutral-200 px-3 py-2 text-[11px] text-neutral-900 font-sans focus:outline-none focus:border-accent transition-colors rounded-none placeholder:text-neutral-400"
                                />
                              </div>

                              <button 
                                type="submit"
                                className="w-full bg-accent text-white font-label-caps text-[9px] tracking-[0.15em] font-bold py-2 hover:bg-accent/90 transition-colors flex items-center justify-center gap-1.5"
                              >
                                <span className="material-symbols-outlined text-[14px]">send</span>
                                LAUNCH MAIL CLIENT
                              </button>
                            </form>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>

              {/* Next / Prev Navigation */}
              <div className="mt-8 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-outline-variant/30">
                {prevArticle ? (
                  <Link to={`/news/${prevArticle.id}`} className="p-6 border border-outline-variant/40 hover:border-accent bg-surface-container-lowest shadow-sm hover:shadow-xl group transition-all duration-300 flex flex-col gap-3 relative">
                    <div className="absolute top-[-1px] left-[-1px] w-2 h-2 border-t border-l border-accent/0 group-hover:border-accent/40 pointer-events-none" />
                    <div className="absolute bottom-[-1px] right-[-1px] w-2 h-2 border-b border-r border-accent/0 group-hover:border-accent/40 pointer-events-none" />
                    
                    <span className="font-label-caps text-[9px] text-secondary flex items-center gap-2 group-hover:text-accent transition-colors tracking-[0.2em] uppercase font-bold">
                      <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                      Previous Insight
                    </span>
                    <span className="font-headline text-[16px] text-on-surface font-bold group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                      {prevArticle.title}
                    </span>
                  </Link>
                ) : (
                  <div className="p-6 border border-outline-variant/20 bg-surface-container-low/20 opacity-40 flex flex-col gap-3 relative select-none">
                    <span className="font-label-caps text-[9px] text-secondary/60 flex items-center gap-2 tracking-[0.2em] uppercase font-bold">
                      <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                      Previous Insight
                    </span>
                    <span className="font-headline text-[16px] text-secondary/60 font-bold line-clamp-2 leading-snug">
                      No previous articles
                    </span>
                  </div>
                )}
                
                {nextArticle ? (
                  <Link to={`/news/${nextArticle.id}`} className="p-6 border border-outline-variant/40 hover:border-accent bg-surface-container-lowest shadow-sm hover:shadow-xl group transition-all duration-300 flex flex-col gap-3 sm:text-right relative">
                    <div className="absolute top-[-1px] right-[-1px] w-2 h-2 border-t border-r border-accent/0 group-hover:border-accent/40 pointer-events-none" />
                    <div className="absolute bottom-[-1px] left-[-1px] w-2 h-2 border-b border-l border-accent/0 group-hover:border-accent/40 pointer-events-none" />

                    <span className="font-label-caps text-[9px] text-secondary flex items-center sm:justify-end gap-2 group-hover:text-accent transition-colors tracking-[0.2em] uppercase font-bold">
                      Next Insight
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </span>
                    <span className="font-headline text-[16px] text-on-surface font-bold group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                      {nextArticle.title}
                    </span>
                  </Link>
                ) : (
                  <div className="p-6 border border-outline-variant/20 bg-surface-container-low/20 opacity-40 flex flex-col gap-3 sm:text-right relative select-none">
                    <span className="font-label-caps text-[9px] text-secondary/60 flex items-center sm:justify-end gap-2 tracking-[0.2em] uppercase font-bold">
                      Next Insight
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </span>
                    <span className="font-headline text-[16px] text-secondary/60 font-bold line-clamp-2 leading-snug">
                      No next articles
                    </span>
                  </div>
                )}
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
                      alt={currentArticle.authorName} 
                      className="w-16 h-16 object-cover rounded-full border border-outline-variant p-0.5" 
                      src={currentArticle.authorImg}
                    />
                    <div>
                      <h3 className="font-headline text-[18px] font-black text-on-surface">{currentArticle.authorName}</h3>
                      <p className="font-label-caps text-[9px] text-accent tracking-[0.2em] uppercase font-bold mt-1">{currentArticle.authorTitle}</p>
                    </div>
                  </div>
                  <p className="font-body text-[14px] text-secondary leading-relaxed font-light">
                    {currentArticle.authorDesc}
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
                    <Link to="/news/2" className="group flex gap-4 items-start">
                      <div className="overflow-hidden w-20 h-20 shrink-0 border border-outline-variant/50 relative">
                        <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/40 transition-colors pointer-events-none z-10" />
                        <img 
                          alt="Substation thermal efficiency" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-550" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXTaHZF2s9EkzujqLkbFGry7vOKPsNt08rADHH8cldx-PLWVBfX6u0hGiYUoZNcAzNC7Ehmw_-X_0QdDoUMyXBrLLW4L3pc4TwlDscR-6KnEo4MAuCKMiAUOkXHJK7_poGE5pNs4aOMu6CiUavm8gA9runwJkVJYn8vVZtdTud_VMyk0H3whG-zl4t0dvS1KnNhOUcLUA4dQzngEUerTrLQRsMQJ-ii3RggnHmSOMnNymRLZzcoxHoPn8v4HmkDrrCIGwITFcCyr4"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-label-caps text-[8.5px] text-accent tracking-[0.2em] uppercase mb-1 font-bold">Technical Report</p>
                        <h4 className="font-headline text-[14px] font-bold text-on-surface leading-snug group-hover:text-accent transition-colors line-clamp-2">
                          Optimizing Thermal Efficiency in Substations
                        </h4>
                      </div>
                    </Link>
                    
                    <Link to="/news/3" className="group flex gap-4 items-start">
                      <div className="overflow-hidden w-20 h-20 shrink-0 border border-outline-variant/50 relative">
                        <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/40 transition-colors pointer-events-none z-10" />
                        <img 
                          alt="Hydro-electric stress testing" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-550" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5FW8nf272gXSM_1xLQR9lKoi7xId3VLHIZFPFzZDDsZz-nkZBK2rLtsZtKJkruCgzVDafIT8sh-T2S4pquUpCFv5xVyBphjPjDfvrRtJhzcdElkAzpWf66KnClNbPqHBo7FDSKuqauWqmdmdjkPyWjklLYf1pyhqrHlKMFP7aTOT40qcirHI1QrKknjtv-vRFHkwL6Lqe96kLA6WOsS23v5Vqw3Ww0Ukxbs38PwDFBS-xum-nzeDdwKNE9LRjMiiG71SmAJODIrk"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-label-caps text-[8.5px] text-accent tracking-[0.2em] uppercase mb-1 font-bold">Whitepaper</p>
                        <h4 className="font-headline text-[14px] font-bold text-on-surface leading-snug group-hover:text-accent transition-colors line-clamp-2">
                          Hydro-Electric Stress Testing Protocols
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
          primaryTo={`/contact?inquiry=sales&item=${encodeURIComponent(currentArticle.title)}`}
          outlineText="EXPLORE ALL NEWS"
          outlineTo="/news"
          uppercase={true}
        />
      </main>
    </div>
  );
}
