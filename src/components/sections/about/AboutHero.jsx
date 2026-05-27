import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function AboutHero() {
  return (
    <section
      className="relative w-full bg-[#080808] overflow-hidden flex flex-col lg:min-h-screen"
      style={{ minHeight: '100svh' }}
    >
      {/* ── Full-bleed right image panel (same as home hero) */}
      <motion.div
        className="relative w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-full mt-10 lg:mt-0 z-10 order-2 lg:order-none lg:absolute lg:top-0 lg:right-0 lg:w-[48%] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.img
          src="/images/philosophy-rigor.png"
          alt="Arihantaa Powertech — Substation Infrastructure"
          className="absolute inset-0 w-full h-full object-cover object-center"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
        />
        {/* Left-edge blend */}
        <div className="absolute inset-0 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to right, rgba(8,8,8,0.78) 0%, rgba(8,8,8,0.2) 30%, transparent 60%)' }} />
        {/* Bottom gradient */}
        <div className="absolute inset-0 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.90) 0%, rgba(8,8,8,0.3) 28%, transparent 55%)' }} />
        {/* Top gradient — behind header */}
        <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to bottom, rgba(8,8,8,0.82) 0%, transparent 100%)' }} />

        {/* Image label overlay */}
        <motion.div
          className="absolute left-6 bottom-6 lg:left-10 lg:bottom-[100px] z-20"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-px bg-accent" />
            <span className="font-label-caps text-[9px] text-accent tracking-[0.22em] uppercase font-bold">EST. 1995</span>
          </div>
          <p className="font-headline text-[20px] font-black uppercase text-white leading-tight tracking-tight max-w-[260px]">
            Three Decades of Engineering Excellence
          </p>
        </motion.div>
      </motion.div>

      {/* ── Vertical divider */}
      <div aria-hidden className="hidden lg:block absolute top-0 left-[52%] w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent z-20 pointer-events-none" />

      {/* ── Left content */}
      <div className="relative z-10 flex flex-col flex-grow order-1 lg:order-none">
        <div className="min-h-[88px] md:min-h-[96px] shrink-0" />

        <motion.div className="w-full flex flex-col flex-1" style={{}}>
          <div className="max-w-[1440px] mx-auto w-full flex flex-col flex-1 px-6 sm:px-8 lg:px-16">
            <div className="w-full lg:w-[52%] flex flex-col justify-center py-10 lg:py-16 flex-1 lg:pr-16">
              <div className="flex flex-col gap-0">

                {/* Breadcrumb */}
                <motion.nav
                  className="flex items-center gap-2 mb-6"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link to="/" className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Home</Link>
                  <span className="material-symbols-outlined text-white/35 text-[14px]">chevron_right</span>
                  <span className="font-label-caps text-[10px] text-white/35 tracking-[0.2em] uppercase">About Us</span>
                </motion.nav>

                {/* Eyebrow */}
                <motion.div
                  className="flex items-center gap-3 mb-5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                >
                  <div className="w-8 h-px bg-accent" />
                  <span className="font-label-caps text-[10px] text-accent tracking-[0.28em] uppercase font-bold">Our Identity — EST. 1995</span>
                </motion.div>

                {/* H1 */}
                <motion.h1
                  className="font-headline font-black uppercase leading-[1.0] sm:leading-[0.92] tracking-tighter mb-7 text-[32px] sm:text-[44px] md:text-[56px] lg:text-[68px]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
                >
                  <span className="block">
                    <span className="text-white">Engineering </span>
                    <span className="text-accent">Global</span>
                  </span>
                  <span className="block text-white">Excellence.</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="font-body text-base md:text-lg text-white/50 leading-relaxed font-light w-full mb-9"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Three decades of precision-engineered solutions powering infrastructure, energy, and high-voltage systems across India and globally.
                </motion.p>

                {/* Separator */}
                <motion.div
                  className="w-full h-px bg-white/8 mb-9"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                />

                {/* Credential strip */}
                <motion.div
                  className="grid grid-cols-2 gap-6"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.65 }}
                >
                  <div>
                    <span className="block font-label-caps text-[9px] text-white/35 tracking-[0.18em] uppercase mb-1">Sector Focus</span>
                    <p className="font-body text-[13px] text-white/70 font-medium">Infrastructure, Energy &amp; High-Voltage Systems</p>
                  </div>
                  <div>
                    <span className="block font-label-caps text-[9px] text-white/35 tracking-[0.18em] uppercase mb-1">Commitment</span>
                    <p className="font-body text-[13px] text-white/70 font-medium">Sustainability-driven engineering for a resilient future</p>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
