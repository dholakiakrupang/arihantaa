import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { productsData } from '../../../data/productsData';
import { ProductCard } from '../../ui/ProductCard';

/**
 * SectorRow — creative sector header design:
 * - Chapter number is in its own clearly separated column/row
 * - Title is clickable → navigates to product family page (like mega menu routing)
 * - Hover shows an arrow icon on the title
 * - Cards sit fully below the header, no clip issues
 */
function SectorRow({ sector, index }) {
  const isEven = index % 2 === 1;
  // slug: "Critical Power" → "critical-power"
  const slug = sector.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  return (
    <div id={slug} className="relative scroll-mt-[120px] md:scroll-mt-[136px] lg:scroll-mt-[140px]">

      {/* ── Top separator line ─────────────────────────────────────────────── */}
      <motion.div
        className="w-full h-px bg-outline-variant/40 mb-16 md:mb-24"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        style={{ originX: isEven ? 1 : 0 }}
      />

      {/* ── Sector header block ────────────────────────────────────────────── */}
      <div className={`flex flex-col md:flex-row items-start gap-8 md:gap-16 mb-12 md:mb-16 ${isEven ? 'md:flex-row-reverse' : ''}`}>

        {/* Chapter badge — fixed size, never overlaps */}
        <motion.div
          className="flex-shrink-0 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
        >
          {/* Chapter number inside a square accent box */}
          <div className="relative w-20 h-20 md:w-28 md:h-28 bg-accent flex items-end justify-end p-2 md:p-3 overflow-hidden">
            {/* Subtle inner grid texture */}
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 16px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 16px)',
              }}
            />
            <span className="relative font-headline text-[40px] md:text-[56px] font-black text-on-primary leading-none tracking-tighter select-none">
              {sector.chapterNumber}
            </span>
          </div>
          {/* Label below badge */}
          <span className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase mt-2">
            {sector.eyebrow}
          </span>
        </motion.div>

        {/* Title + description — separate column, no overlap */}
        <div className={`flex-1 pt-1 ${isEven ? 'md:text-right md:flex md:flex-col md:items-end' : ''}`}>
          {/* ── Clickable title with hover arrow ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.25, 1, 0.5, 1] }}
          >
            <Link
              to={sector.familyLink}
              className="group/title inline-flex items-center gap-3 md:gap-5 mb-4 transition-colors duration-300 hover:text-accent"
            >
              <h2 className="font-headline text-[26px] sm:text-[34px] md:text-[42px] lg:text-[52px] xl:text-[64px] leading-tight md:leading-[1.0] font-black text-on-surface uppercase tracking-tighter group-hover/title:text-accent transition-colors duration-300">
                {sector.title}
              </h2>
              {/* Arrow — hidden by default, appears on hover */}
              <span className="material-symbols-outlined text-[28px] md:text-[40px] text-accent opacity-0 -translate-x-3 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all duration-300 flex-shrink-0">
                arrow_forward
              </span>
            </Link>
          </motion.div>

          <motion.div
            className={`flex items-center gap-3 mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ originX: isEven ? 1 : 0 }}
          >
            <div className="h-[2px] w-16 bg-accent" />
          </motion.div>

          <motion.p
            className="font-body text-[15px] md:text-[17px] leading-relaxed text-secondary max-w-xl"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
          >
            {sector.description}
          </motion.p>
        </div>
      </div>

      {/* ── Product cards grid ─────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-24">
        {sector.cards.slice(0, 3).map((card, cardIndex) => (
          <div key={card.id} className={cardIndex === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}>
            <ProductCard
              id={card.id}
              categoryId={card.categoryId}
              category={card.category}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              index={cardIndex}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * ProductSectors — maps data into creative, responsive sector rows.
 */
export function ProductSectors() {
  return (
    <section
      id="sectors"
      className="py-16 md:py-24 max-w-[1440px] mx-auto px-6 sm:px-8 md:px-16 scroll-mt-20"
    >
      {productsData.map((sector, i) => (
        <SectorRow key={sector.id} sector={sector} index={i} />
      ))}
    </section>
  );
}
