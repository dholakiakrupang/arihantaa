import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Premium Clean Product Image Gallery ───────────────────────────────────── 
   Light, structured, clean industrial design matching Vertiv/premium B2B sites.
   Features:
   - Clean white/light grey background (no dark patches, no grids)
   - Sharp/slight rounded corners for structural integrity
   - Minimalist thumbnails cleanly separated below
   - Refined hover arrows
   ─────────────────────────────────────────────────────────────────────────────── */

export function ProductImageGallery({ 
  images = [],
  imageSrc,
  categoryIcon,
  onImageError 
}) {
  const gallery = images.length > 0
    ? images
    : imageSrc
      ? [{ src: imageSrc, alt: 'Product image' }]
      : [];

  const [activeIndex, setActiveIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState({});
  const [direction, setDirection] = useState(1);
  const hasMultiple = gallery.length > 1;

  useEffect(() => {
    setActiveIndex(0);
    setImageErrors({});
  }, [imageSrc, images]);

  const handleImageError = useCallback((idx) => {
    setImageErrors(prev => ({ ...prev, [idx]: true }));
    if (onImageError) onImageError();
  }, [onImageError]);

  const goTo = useCallback((idx) => {
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
  }, [activeIndex]);

  const goNext = useCallback(() => {
    if (!hasMultiple) return;
    setDirection(1);
    setActiveIndex(prev => (prev + 1) % gallery.length);
  }, [hasMultiple, gallery.length]);

  const goPrev = useCallback(() => {
    if (!hasMultiple) return;
    setDirection(-1);
    setActiveIndex(prev => (prev - 1 + gallery.length) % gallery.length);
  }, [hasMultiple, gallery.length]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  const currentImage = gallery[activeIndex];
  const hasValidImage = currentImage && !imageErrors[activeIndex];

  // Slide animation variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    exit: (dir) => ({
      x: dir < 0 ? 40 : -40,
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
    })
  };

  return (
    <div className="w-full flex flex-col gap-4 relative group">
      
      {/* ── Main Display Container ── */}
      <div className="bg-white rounded-none border border-surface-variant/60 overflow-hidden relative min-h-[400px] md:min-h-[500px] flex items-center justify-center group/main transition-colors duration-500">
        
        {/* Clean, subtle depth background (No grid, no dark colors) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-surface-container-lowest to-surface-container-low/40 pointer-events-none" />

        {hasValidImage ? (
          <div className="relative w-full h-full p-6 md:p-8 flex flex-col items-center justify-center">
            
            {/* Minimalist Counter Badge (Box-aligned to Top-Right) */}
            {hasMultiple && (
              <div className="absolute top-0 right-0 px-4 py-2 bg-white border-b border-l border-surface-variant/60 text-[10px] font-label-caps text-secondary font-bold tracking-[0.15em] z-20 select-none">
                {String(activeIndex + 1).padStart(2, '0')} <span className="text-secondary/40 mx-1">/</span> {String(gallery.length).padStart(2, '0')}
              </div>
            )}

            {/* Animated Main Image (Increased max-h to fill space) */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                src={currentImage.src}
                alt={currentImage.alt || `Product view ${activeIndex + 1}`}
                className="max-h-[380px] md:max-h-[460px] w-auto object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.06)] mix-blend-multiply select-none cursor-grab active:cursor-grabbing z-10"
                onError={() => handleImageError(activeIndex)}
                draggable={false}
              />
            </AnimatePresence>

            {/* Clean Box-aligned Controls (Bottom-Right) */}
            {hasMultiple && (
              <div className="absolute bottom-0 right-0 z-20 flex bg-white border-t border-l border-surface-variant/60">
                <button 
                  onClick={(e) => { e.stopPropagation(); goPrev(); }}
                  className="w-12 h-12 flex items-center justify-center text-secondary hover:text-accent hover:bg-surface border-r border-surface-variant/60 transition-colors duration-300"
                  aria-label="Previous image"
                >
                  <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); goNext(); }}
                  className="w-12 h-12 flex items-center justify-center text-secondary hover:text-accent hover:bg-surface transition-colors duration-300"
                  aria-label="Next image"
                >
                  <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          /* ── Icon Fallback ── */
          <div className="flex flex-col justify-center items-center gap-6 py-16 relative z-10">
            <span
              className="material-symbols-outlined text-[100px] text-secondary/20 select-none relative z-10"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {categoryIcon || 'settings_input_component'}
            </span>
          </div>
        )}
      </div>

      {/* ── Structured Thumbnail Strip ── */}
      {hasMultiple && (
        <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar py-1">
          {gallery.map((img, idx) => {
            const isActive = idx === activeIndex;
            const hasError = imageErrors[idx];
            return (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`relative shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-none border transition-all duration-300 overflow-hidden flex items-center justify-center bg-white ${
                  isActive 
                    ? 'border-accent ring-1 ring-accent/20' 
                    : 'border-surface-variant/60 opacity-60 hover:opacity-100 hover:border-secondary/40'
                }`}
                aria-label={`View thumbnail ${idx + 1}`}
              >
                {!hasError ? (
                  <img 
                    src={img.src} 
                    alt={img.alt || `Thumbnail ${idx + 1}`}
                    className="w-full h-full object-contain p-3 mix-blend-multiply transition-transform duration-500"
                    onError={() => handleImageError(idx)}
                    draggable={false}
                  />
                ) : (
                  <span className="material-symbols-outlined text-secondary/30 text-[20px]">broken_image</span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
