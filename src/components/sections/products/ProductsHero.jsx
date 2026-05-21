import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button';

/**
 * ProductsHero — clean split-screen, no grid lines, no overlap.
 */
export function ProductsHero() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] flex flex-col md:flex-row bg-inverse-surface overflow-hidden">

      {/* ── Left: Dark text panel ───────────────────────────────────────────── */}
      <div className="relative w-full md:w-[55%] flex items-center px-8 py-16 md:py-24 md:pl-16 md:pr-20 bg-inverse-surface z-10">

        <div className="w-full max-w-[520px]">

          {/* Breadcrumb */}
          <motion.nav
            className="flex items-center gap-2 mb-8"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Home</Link>
            <span className="material-symbols-outlined text-surface-variant text-[14px]">chevron_right</span>
            <span className="font-label-caps text-[10px] text-surface-variant tracking-[0.2em] uppercase">Products</span>
          </motion.nav>

          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="h-[2px] w-10 bg-accent" />
            <span className="font-label-caps text-[11px] text-accent tracking-[0.25em] uppercase">
              Our Solutions
            </span>
          </motion.div>

          {/* Hero Heading */}
          <motion.h1
            className="font-headline text-[38px] md:text-[60px] lg:text-[72px] leading-[1.0] font-black text-inverse-on-surface uppercase tracking-tighter mb-6"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          >
            Engineering the Infrastructure of Tomorrow
          </motion.h1>

          {/* Accent divider */}
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
            style={{ originX: 0 }}
          >
            <div className="h-[2px] w-full max-w-[200px] bg-accent" />
          </motion.div>

          {/* Sub-copy */}
          <motion.p
            className="font-body text-[15px] md:text-[17px] leading-relaxed text-surface-variant/80 max-w-md mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          >
            Precision-engineered products designed to ensure absolute reliability
            in the most demanding industrial environments globally.
          </motion.p>

          {/* CTA */}
          <Button 
            to="#sectors" 
            variant="primary" 
            size="lg" 
            icon="arrow_downward"
            sweepBg="bg-inverse-surface"
            className="rounded-none mt-4"
          >
            Explore Products
          </Button>
        </div>
      </div>

      {/* ── Diagonal Divider ────────────────────────────────────────────────── */}
      <div
        className="hidden md:block absolute top-0 bottom-0 left-[49%] w-[80px] bg-inverse-surface z-10"
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
      />

      {/* ── Right: Industrial Photo ──────────────────────────────────────────── */}
      <div className="w-full md:w-[55%] md:absolute md:right-0 md:top-0 md:bottom-0 h-[300px] md:h-full z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYzfnwnCVP9iBzA35pvF58Zbv6LpPN4QoLV5M6fqU1BLNzLEsmSLu5HPVPYfz9mcxzArrBz3WVniGQmCb9ZQPmx3f2D2kjq5mVNYoOEymJvHHxw9rVSgRQ_RV3cHYfVTj2AqyeRlyZAGRQL66qPukbhEn2gxpX51lEy0C52lkBz_V7d9k9FEZQuOcqj0S_hGjrzXgGpOZ_VWYQM-FfNCo-3M2-H-MOu2-sybDSu37IxEPxyE1S4HjBT79U9MMqnEiV0FoptlnVL50"
          alt="Modern industrial infrastructure"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        {/* Left fade to blend with the diagonal */}
        <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface via-inverse-surface/30 to-transparent" />
      </div>
    </section>
  );
}
