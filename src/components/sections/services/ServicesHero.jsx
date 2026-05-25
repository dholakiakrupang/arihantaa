import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button';

export function ServicesHero() {
  const words = ['Turnkey', 'Engineering', 'Services.'];

  return (
    <section
      className="relative w-full bg-[#080808] overflow-hidden flex flex-col"
      style={{ minHeight: '100svh' }}
    >
      {/* Ambient gradients */}
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute -top-[15%] -left-[8%] w-[55%] h-[65%] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(233,101,43,0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Vertical divider line */}
      <div
        aria-hidden
        className="hidden lg:block absolute top-0 left-[52%] w-px h-full bg-gradient-to-b from-transparent via-white/8 to-transparent z-10 pointer-events-none"
      />

      <div className="relative z-10 flex flex-col flex-1">
        {/* Top spacer */}
        <div className="min-h-[88px] md:min-h-[96px]" />

        <div className="flex flex-col lg:flex-row flex-1 items-center max-w-[1440px] mx-auto w-full px-8 md:px-16 pb-16 gap-12 lg:gap-0">
          
          {/* LEFT: Text content (52% width) */}
          <motion.div 
            className="w-full lg:w-[52%] flex flex-col gap-8 min-w-0 lg:pr-12 xl:pr-20"
          >
            {/* Breadcrumb */}
            <motion.nav
              className="flex items-center gap-2 mb-2"
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
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="w-8 h-px bg-accent" />
              <span className="font-label-caps text-[10px] text-accent tracking-[0.28em] uppercase font-bold">
                Service Portfolio
              </span>
            </motion.div>

            {/* Headline — staggered words */}
            <h1 className="font-headline font-black uppercase leading-[0.88] tracking-tighter">
              {words.map((word, i) => (
                <div key={word} className="overflow-hidden block w-max max-w-full">
                  <motion.span
                    className={[
                      'block text-[clamp(28px,4.8vw,72px)]',
                      i === 1 ? 'text-accent' : 'text-white',
                    ].join(' ')}
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.2 + i * 0.13,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
            </h1>

            {/* Sub-copy */}
            <motion.p
              className="font-body text-base md:text-lg text-white/55 max-w-md leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              From high-tension electrical systems to data centre precision cooling — integrated, certified, and delivered turnkey for global excellence.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.75 }}
            >
              <Button 
                to="#services" 
                variant="primary" 
                theme="dark"
                size="lg" 
                icon="arrow_downward"
                className="rounded-none shadow-sm text-[10px] tracking-[0.2em] font-bold"
              >
                VIEW SECTOR EXPERTISE
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT: Visual area (48% width) */}
          <motion.div 
            className="relative w-full lg:w-[48%] flex items-center justify-center lg:pl-12 xl:pl-20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full max-w-[560px] aspect-[6/5]">
              {/* Corner accent marks */}
              {['top-0 left-0', 'top-0 right-0 rotate-90', 'bottom-0 right-0 rotate-180', 'bottom-0 left-0 -rotate-90'].map((pos, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${pos} w-6 h-6`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, type: 'spring' }}
                >
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M0 24 L0 0 L24 0" stroke="rgba(233,101,43,0.6)" strokeWidth="2" />
                  </svg>
                </motion.div>
              ))}

              <img
                src="/images/project-data-center.png"
                alt="Industrial engineering facility"
                className="w-full h-full object-cover border border-white/10"
                loading="eager" 
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
