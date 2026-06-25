import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../../ui/Button";

export function ServicesHero() {
  return (
    <section
      className="relative w-full bg-[#080808] overflow-hidden"
    >
      <div className="max-w-[1920px] mx-auto relative w-full flex flex-col lg:block">
      <motion.div
        className="relative w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-full mt-10 lg:mt-0 z-10 order-2 lg:order-none lg:absolute lg:top-0 lg:right-0 lg:w-[50%] overflow-hidden bg-[#080808]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.img
          src="/images/services-hero.png"
          alt="Engineering facility"
          className="absolute inset-0 w-full h-full object-cover object-center z-10"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
        />
        {/* Left-edge blend */}
        <div
          className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#080808] to-transparent z-20 hidden lg:block pointer-events-none"
          style={{ width: "12%" }}
        />
        {/* Bottom blend */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent z-20 lg:hidden pointer-events-none" />

        {/* Top blend behind sticky header */}
        <div
          className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-20"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,8,8,0.82) 0%, transparent 100%)",
          }}
        />

        {/* Image label overlay */}
        <motion.div
          className="absolute left-6 bottom-6 lg:left-10 lg:bottom-[100px] z-30"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-px bg-accent" />
            <span className="font-label-caps text-[9px] text-accent tracking-[0.22em] uppercase font-bold">
              AUTHORIZED VERTIV PARTNER
            </span>
          </div>
          <p className="font-headline text-[20px] font-black uppercase text-white leading-tight tracking-tight max-w-[280px]">
            Enterprise Solutions Delivery
          </p>
        </motion.div>
      </motion.div>

      {/* Vertical divider */}
      <div
        aria-hidden
        className="hidden lg:block absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent z-20 pointer-events-none"
      />

      {/* Left content */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full flex flex-col px-6 sm:px-8 lg:px-16 order-1 lg:order-none">
        <div className="min-h-[88px] md:min-h-[96px] shrink-0" />

        <div className="w-full lg:w-[52%] flex flex-col justify-center py-10 lg:py-16 flex-grow lg:pr-16">
          <div className="flex flex-col gap-0">
            {/* Breadcrumb */}
            <motion.nav
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/"
                className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
              >
                Home
              </Link>
              <span className="material-symbols-outlined text-white/35 text-[14px]">
                chevron_right
              </span>
              <span className="font-label-caps text-[10px] text-white/35 tracking-[0.2em] uppercase">
                Services
              </span>
            </motion.nav>

            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-3 mb-5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="w-8 h-px bg-accent" />
              <span className="font-label-caps text-[10px] text-accent tracking-[0.28em] uppercase font-bold">
                Service Portfolio
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              className="font-headline font-black uppercase leading-[1.0] sm:leading-[0.92] tracking-tighter mb-7 text-[32px] sm:text-[44px] md:text-[56px] lg:text-[68px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                ease: [0.25, 1, 0.5, 1],
                delay: 0.15,
              }}
            >
              <span className="block text-white">Engineering &</span>
              <span className="block text-accent">Consulting</span>
              <span className="block text-white/60 text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold mt-2">
                Delivered Turnkey
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="font-body text-base md:text-lg text-white/50 leading-relaxed font-light w-full mb-9"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From custom structural switchgear enclosures to high-voltage panel boards, Ring Main Units, compact substations, and MEPF design, we are your single accountability partner.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.65 }}
            >
              <Link to="/contact">
                <Button
                  variant="primary"
                  theme="dark"
                  size="lg"
                  className="rounded-none shadow-sm text-[10px] tracking-[0.2em] font-bold"
                >
                  GET A FREE CONSULTATION
                </Button>
              </Link>
              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2.5 font-label-caps text-[10px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-300 group"
              >
                <span className="relative overflow-hidden inline-block">
                  <span className="block group-hover:-translate-y-full transition-transform duration-300">
                    VIEW EXPERTISE
                  </span>
                  <span className="absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300 text-accent">
                    VIEW EXPERTISE
                  </span>
                </span>
                <span className="material-symbols-outlined text-[24px] group-hover:translate-y-1 transition-transform duration-300">
                  arrow_downward
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
