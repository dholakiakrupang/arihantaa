import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Premium Clean Product Image Gallery (Refactored) ─────────────────────── 
   Features:
   - Zero image changing transition effects (swaps images instantly)
   - Sharp-box zero-radius B2B slide navigation arrows (rounded-none, border-accent)
   - Left/Right arrows aligned flush to the outer borders, completely outside the product image
   - Click-to-Enlarge Fullscreen LIGHT GLASSMORPHIC Blur Modal (cycles instantly)
   - High-contrast dark B2B controls and thumbnail strip inside the enlarge modal
   - React Portal mounting directly under document.body to resolve stacking contexts
   - Active scroll locks blocking smooth scroll propagation (Lenis compatible)
   - Borderless, completely transparent unselected thumbnails below
   ─────────────────────────────────────────────────────────────────────────── */

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
  const [isZoomed, setIsZoomed] = useState(false);
  const hasMultiple = gallery.length > 1;

  useEffect(() => {
    setActiveIndex(0);
    setImageErrors({});
    setIsZoomed(false);
  }, [imageSrc, images]);

  // Lock body scroll and intercept wheel/touch gestures (fully Lenis-compatible scroll-lock)
  useEffect(() => {
    if (!isZoomed) return;

    const preventScroll = (e) => {
      e.preventDefault();
    };

    // Force block active gestures on window levels
    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    };
  }, [isZoomed]);

  const handleImageError = useCallback((idx) => {
    setImageErrors(prev => ({ ...prev, [idx]: true }));
    if (onImageError) onImageError();
  }, [onImageError]);

  const goTo = useCallback((idx) => {
    setActiveIndex(idx);
  }, []);

  const goNext = useCallback(() => {
    if (!hasMultiple) return;
    setActiveIndex(prev => (prev + 1) % gallery.length);
  }, [hasMultiple, gallery.length]);

  const goPrev = useCallback(() => {
    if (!hasMultiple) return;
    setActiveIndex(prev => (prev - 1 + gallery.length) % gallery.length);
  }, [hasMultiple, gallery.length]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'Escape') setIsZoomed(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  const currentImage = gallery[activeIndex];
  const hasValidImage = currentImage && !imageErrors[activeIndex];

  return (
    <div className="w-full flex flex-col gap-0 relative group/gallery select-none">
      
      {/* ── Main Display Container (No borders, no white card, transparent background) ── */}
      <div className="relative w-full overflow-hidden flex items-center justify-center min-h-[360px] md:min-h-[440px] bg-transparent">
        
        {hasValidImage ? (
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* Left Floating Arrow (Sharp B2B Box flush against left line) */}
            {hasMultiple && (
              <button 
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-none flex items-center justify-center bg-white/80 hover:bg-accent border border-outline-variant/30 hover:border-accent text-secondary hover:text-white transition-all duration-300 shadow-sm opacity-100 lg:opacity-0 lg:group-hover/gallery:opacity-100"
                aria-label="Previous image"
              >
                <span className="material-symbols-outlined text-[22px] select-none">chevron_left</span>
              </button>
            )}

            {/* Right Floating Arrow (Sharp B2B Box flush against right line) */}
            {hasMultiple && (
              <button 
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-none flex items-center justify-center bg-white/80 hover:bg-accent border border-outline-variant/30 hover:border-accent text-secondary hover:text-white transition-all duration-300 shadow-sm opacity-100 lg:opacity-0 lg:group-hover/gallery:opacity-100"
                aria-label="Next image"
              >
                <span className="material-symbols-outlined text-[22px] select-none">chevron_right</span>
              </button>
            )}

            {/* Main Image (Swaps Instantly - No slide animation wrapper) */}
            <img
              src={currentImage.src}
              alt={currentImage.alt || `Product view ${activeIndex + 1}`}
              onClick={() => setIsZoomed(true)}
              className="w-full h-full max-h-[360px] md:max-h-[440px] object-contain select-none mix-blend-multiply cursor-zoom-in z-10 hover:scale-[1.015] transition-transform duration-300"
              onError={() => handleImageError(activeIndex)}
              draggable={false}
            />

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

      {/* ── Structured Thumbnail Strip (Clean, low-profile, completely transparent borderless buttons) ── */}
      {hasMultiple && (
        <div className="flex w-full items-center gap-2 overflow-x-auto hide-scrollbar justify-start sm:justify-center">
          {gallery.map((img, idx) => {
            const isActive = idx === activeIndex;
            const hasError = imageErrors[idx];
            return (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`relative shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-none transition-all duration-300 overflow-hidden flex items-center justify-center bg-transparent border ${
                  isActive 
                    ? 'border-accent opacity-100' 
                    : 'border-transparent opacity-60 hover:opacity-100 hover:border-outline-variant/30'
                }`}
                aria-label={`View thumbnail ${idx + 1}`}
              >
                {!hasError ? (
                  <img 
                    src={img.src} 
                    alt={img.alt || `Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500"
                    onError={() => handleImageError(idx)}
                    draggable={false}
                  />
                ) : (
                  <span className="material-symbols-outlined text-secondary/30 text-[18px]">broken_image</span>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* ── Premium Full-Screen Click-to-Enlarge Light-Box Modal (React Portal mounting to document.body) ── */}
      {createPortal(
        <AnimatePresence>
          {isZoomed && hasValidImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsZoomed(false)}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-2xl p-2 sm:p-4 md:p-6 cursor-zoom-out select-none"
            >
              {/* Modal Canvas Container */}
              <div 
                className="relative w-full max-w-4xl h-full flex flex-col items-center justify-between"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Top Control Bar (Only contains Close Button, aligned to the right) */}
                <div className="w-full flex justify-end pb-4 border-b border-black/5 shrink-0 select-none">
                  <button
                    onClick={() => setIsZoomed(false)}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-none bg-black/5 border border-black/10 text-secondary hover:bg-accent hover:border-accent hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center"
                    aria-label="Close zoomed view"
                  >
                    <span className="material-symbols-outlined text-[20px]">close</span>
                  </button>
                </div>

                {/* Enlarge Zoomed Image Display (Absolute positioned navigation arrows to maximize image sizing) */}
                <div className="w-full flex-1 flex items-center justify-center min-h-0 relative select-none">
                  {/* Left Navigation Arrow */}
                  {hasMultiple && (
                    <button
                      onClick={(e) => { e.stopPropagation(); goPrev(); }}
                      className="absolute left-2 sm:left-4 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-none bg-black/5 border border-black/10 hover:border-accent text-secondary hover:text-white hover:bg-accent hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center"
                      aria-label="Previous image"
                    >
                      <span className="material-symbols-outlined text-[20px] sm:text-[22px]">chevron_left</span>
                    </button>
                  )}

                  {/* Centered Image viewport with horizontal padding to guarantee zero arrow overlapping */}
                  <div className="w-full h-full flex items-center justify-center min-h-0 px-12 sm:px-16 md:px-20">
                    <img
                      src={currentImage.src}
                      alt={currentImage.alt || `Enlarged view`}
                      className="max-h-[78vh] md:max-h-[84vh] max-w-full object-contain filter drop-shadow-[0_16px_36px_rgba(0,0,0,0.06)] mix-blend-multiply select-none"
                      draggable={false}
                    />
                  </div>

                  {/* Right Navigation Arrow */}
                  {hasMultiple && (
                    <button
                      onClick={(e) => { e.stopPropagation(); goNext(); }}
                      className="absolute right-2 sm:right-4 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-none bg-black/5 border border-black/10 hover:border-accent text-secondary hover:text-white hover:bg-accent hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center"
                      aria-label="Next image"
                    >
                      <span className="material-symbols-outlined text-[20px] sm:text-[22px]">chevron_right</span>
                    </button>
                  )}
                </div>

                {/* Interactive Thumbnail Strip inside the Modal (Scrollable on small viewports, completely centered) */}
                {hasMultiple && (
                  <div className="w-full max-w-xl flex items-center justify-start sm:justify-center gap-2.5 pb-6 md:pb-8 shrink-0 overflow-x-auto hide-scrollbar px-4">
                    {gallery.map((img, idx) => {
                      const isActive = idx === activeIndex;
                      const hasError = imageErrors[idx];
                      return (
                        <button
                          key={idx}
                          onClick={(e) => { e.stopPropagation(); goTo(idx); }}
                          className={`relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-none transition-all duration-300 overflow-hidden flex items-center justify-center bg-black/5 border ${
                            isActive 
                              ? 'border-accent opacity-100 bg-white ring-1 ring-accent/10' 
                              : 'border-transparent opacity-45 hover:opacity-100 hover:border-black/20 hover:bg-white/80'
                          }`}
                          aria-label={`View thumbnail ${idx + 1}`}
                        >
                          {!hasError ? (
                            <img 
                              src={img.src} 
                              alt={img.alt || `Thumbnail ${idx + 1}`}
                              className="w-full h-full object-cover transition-transform duration-500"
                              onError={() => handleImageError(idx)}
                              draggable={false}
                            />
                          ) : (
                            <span className="material-symbols-outlined text-secondary/30 text-[18px]">broken_image</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Monospace HUD Telemetry Page Counter at bottom (Dark High-Contrast) */}
                {hasMultiple && (
                  <div className="pb-4 md:pb-6 text-[10px] font-mono text-secondary/60 select-none tracking-widest font-bold">
                    [{String(activeIndex + 1).padStart(2, '0')} // {String(gallery.length).padStart(2, '0')}]
                  </div>
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

    </div>
  );
}
