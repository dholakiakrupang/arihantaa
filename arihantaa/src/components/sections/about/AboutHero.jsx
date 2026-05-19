import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function AboutHero() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] flex flex-col md:flex-row bg-inverse-surface overflow-hidden">

      {/* ── Left: Dark text panel ─────────────────────────────────────── */}
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
            <span className="font-label-caps text-[10px] text-surface-variant tracking-[0.2em] uppercase">About Us</span>
          </motion.nav>

          {/* Eyebrow */}
          <motion.div className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}>
            <div className="h-[2px] w-10 bg-accent" />
            <span className="font-label-caps text-[11px] text-accent tracking-[0.25em] uppercase">Our Identity</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="font-headline text-[38px] md:text-[60px] lg:text-[72px] leading-[1.0] font-black text-inverse-on-surface uppercase tracking-tighter mb-6"
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}>
            Engineering Global Excellence Since <span className="text-accent">1995</span>
          </motion.h1>

          {/* Accent line */}
          <motion.div className="mb-6"
            initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }} style={{ originX: 0 }}>
            <div className="h-[2px] w-[200px] bg-accent" />
          </motion.div>

          {/* Sub-copy */}
          <motion.p
            className="font-body text-[15px] md:text-[17px] leading-relaxed text-surface-variant/80 max-w-md mb-10"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}>
            Three decades of precision-engineered solutions powering infrastructure, energy, and high-voltage systems across the globe.
          </motion.p>

          {/* Two pills */}
          <motion.div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}>
            <div>
              <span className="block font-label-caps text-[10px] text-surface-variant/60 tracking-[0.18em] uppercase mb-1">Sector Focus</span>
              <p className="font-body text-[13px] text-inverse-on-surface/80 font-medium">Infrastructure, Energy & High-Voltage Systems</p>
            </div>
            <div>
              <span className="block font-label-caps text-[10px] text-surface-variant/60 tracking-[0.18em] uppercase mb-1">Commitment</span>
              <p className="font-body text-[13px] text-inverse-on-surface/80 font-medium">Sustainability-driven engineering for a resilient future</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Diagonal Divider ──────────────────────────────────────────── */}
      <div className="hidden md:block absolute top-0 bottom-0 left-[49%] w-[80px] bg-inverse-surface z-10"
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />

      {/* ── Right: Photo ──────────────────────────────────────────────── */}
      <div className="w-full md:w-[55%] md:absolute md:right-0 md:top-0 md:bottom-0 h-[300px] md:h-full z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8Ju3nfzYO0xZRXnoXEctzelT8KtX2mJdzYiJxUBlzHB_YqhVj5aceIPOf01VzBlHhHxQyp9go0foHDDXLX287OhE2GkTxEf1zr9Av2lnr7oFILJfAa0W1xPDM_ZYfft7ayQ2NTvk7saJ6czm28ilkoOfWSrlPY4xkh4HxlwIyv20BcbhICR5H6WRUTaiN2-sJ6ai8a2nxY0KuL8ms1WgD3-j-DFsZqcibUqLLVHnGIzYjnhcdTyidbfeG7sR1emqjBxaVZdkBb2k"
          alt="Arihantaa Powertech — Substation Infrastructure"
          className="w-full h-full object-cover object-center"
          loading="eager" decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface via-inverse-surface/30 to-transparent" />
      </div>
    </section>
  );
}
