import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button';

export function ServicesHero() {
  return (
    <section
      className="relative w-full bg-[#080808] overflow-hidden flex flex-col"
      style={{ minHeight: '100svh' }}
    >
      {/* ── Full-bleed right image panel */}
      <motion.div
        className="hidden lg:block absolute top-0 right-0 w-[48%] h-full z-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.img
          src="/images/project-data-center.png"
          alt="Industrial engineering facility"
          className="absolute inset-0 w-full h-full object-cover object-center"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
        />
        <div className="absolute inset-0 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to right, rgba(8,8,8,0.78) 0%, rgba(8,8,8,0.2) 30%, transparent 60%)' }} />
        <div className="absolute inset-0 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.90) 0%, rgba(8,8,8,0.3) 28%, transparent 55%)' }} />
        <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to bottom, rgba(8,8,8,0.82) 0%, transparent 100%)' }} />

        {/* Image label overlay */}
        <motion.div
          className="absolute left-10 z-20"
          style={{ bottom: 'calc(72px + 28px)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-px bg-accent" />
            <span className="font-label-caps text-[9px] text-accent tracking-[0.22em] uppercase font-bold">SERVICE PORTFOLIO</span>
          </div>
          <p className="font-headline text-[20px] font-black uppercase text-white leading-tight tracking-tight max-w-[260px]">
            Turnkey Engineering Delivery
          </p>
        </motion.div>
      </motion.div>

      {/* ── Vertical divider */}
      <div aria-hidden className="hidden lg:block absolute top-0 left-[52%] w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent z-20 pointer-events-none" />

      {/* ── Left content */}
      <div className="relative z-10 flex flex-col flex-1">
        <div className="min-h-[88px] md:min-h-[96px] shrink-0" />

        <div className="w-full flex flex-col flex-1">
          <div className="max-w-[1440px] mx-auto w-full flex flex-col flex-1 px-8 md:px-16">
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
                  <span className="font-label-caps text-[10px] text-white/35 tracking-[0.2em] uppercase">Services</span>
                </motion.nav>

                {/* Eyebrow */}
                <motion.div
                  className="flex items-center gap-3 mb-5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                >
                  <div className="w-8 h-px bg-accent" />
                  <span className="font-label-caps text-[10px] text-accent tracking-[0.28em] uppercase font-bold">Service Portfolio</span>
                </motion.div>

                {/* H1 */}
                <motion.h1
                  className="font-headline font-black uppercase leading-[0.92] tracking-tighter mb-7"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
                >
                  <span className="block" style={{ fontSize: 'clamp(36px, 4.2vw, 68px)' }}>
                    <span className="text-white">Turnkey </span>
                    <span className="text-accent">Engineering</span>
                  </span>
                  <span className="block text-white" style={{ fontSize: 'clamp(36px, 4.2vw, 68px)' }}>Services.</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="font-body text-base md:text-lg text-white/50 leading-relaxed font-light w-full mb-9"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  From high-tension electrical systems to data centre precision cooling — integrated, certified, and delivered turnkey for global excellence.
                </motion.p>

                {/* Separator */}
                <motion.div
                  className="w-full h-px bg-white/8 mb-9"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                />

                {/* CTA */}
                <motion.div
                  className="flex flex-wrap items-center gap-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.65 }}
                >
                  <Link to="/contact">
                    <Button variant="primary" theme="dark" size="lg" className="rounded-none shadow-sm text-[10px] tracking-[0.2em] font-bold">
                      GET A FREE CONSULTATION
                    </Button>
                  </Link>
                  <Link
                    to="#services"
                    className="inline-flex items-center gap-2.5 font-label-caps text-[10px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-300 group"
                  >
                    <span className="relative overflow-hidden inline-block">
                      <span className="block group-hover:-translate-y-full transition-transform duration-300">VIEW EXPERTISE</span>
                      <span className="absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300 text-accent">VIEW EXPERTISE</span>
                    </span>
                    <span className="material-symbols-outlined text-[24px] group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
                  </Link>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
