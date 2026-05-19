import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * ProductCard
 * Reusable card for the Products page.
 * Uses a fixed min-height instead of aspect-ratio to avoid overflow on mobile.
 */
export function ProductCard({ id, category, title, description, imageSrc, imageAlt, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
    >
      <Link 
        to={`/products/${id}`}
        className="block group/card relative bg-surface overflow-hidden border border-surface-variant cursor-pointer"
        style={{ minHeight: '380px', height: 'clamp(380px, 45vw, 520px)' }}
      >
      {/* Top-right arrow badge — appears on hover */}
      <div
        className="absolute top-0 right-0 w-14 h-14 bg-accent z-20 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
      >
        <span className="material-symbols-outlined text-on-primary absolute top-2 right-2 text-[16px]">
          arrow_outward
        </span>
      </div>

      {/* Image with zoom-on-hover */}
      <img
        src={imageSrc}
        alt={imageAlt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
      />

      {/* Dark gradient overlay — always present, deepens on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/50 to-transparent opacity-80 group-hover/card:opacity-100 transition-opacity duration-300" />

      {/* Content pinned to bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        {/* Expanding accent line */}
        <div className="w-8 h-[3px] bg-accent mb-3 origin-left transition-transform duration-300 group-hover/card:scale-x-[2]" />

        {/* Eyebrow */}
        <span className="block font-label-caps text-[11px] text-accent tracking-[0.18em] uppercase mb-1.5">
          {category}
        </span>

        {/* Title */}
        <h3 className="font-headline text-[19px] md:text-[22px] leading-[1.2] font-bold text-inverse-on-surface mb-0 group-hover/card:text-accent transition-colors duration-300">
          {title}
        </h3>

        {/* Description — slides in on hover */}
        <p className="font-body text-[13px] leading-relaxed text-surface-variant mt-0 max-h-0 overflow-hidden opacity-0 group-hover/card:mt-3 group-hover/card:max-h-24 group-hover/card:opacity-100 transition-all duration-500">
          {description}
        </p>
      </div>
      </Link>
    </motion.div>
  );
}
