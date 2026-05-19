import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export function Hero() {
  const { scrollY } = useScroll();
  const imgRightY = useTransform(scrollY, [0, 600], [0, -60]);
  const imgLeftY  = useTransform(scrollY, [0, 600], [0, 80]);

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0a0a0a] flex flex-col"
      style={{ height: 'calc(100vh)', minHeight: '620px', maxHeight: '1000px' }}
    >
      {/* Ambient glow */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[60%] rounded-full bg-accent/15 blur-[130px]" />
        <div className="absolute -bottom-[15%] -right-[5%] w-[55%] h-[55%] rounded-full bg-blue-950/20 blur-[150px]" />
      </div>

      {/* Right decorative image */}
      <motion.div
        aria-hidden
        className="absolute top-[5%] right-[2%] md:right-[6%] z-[1] w-[130px] md:w-[190px] lg:w-[240px] h-[170px] md:h-[240px] lg:h-[300px] overflow-hidden border border-white/10 shadow-2xl"
        style={{ y: imgRightY, rotate: 5 }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.8, ease: [0.25, 1, 0.5, 1] }}
      >
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYzfnwnCVP9iBzA35pvF58Zbv6LpPN4QoLV5M6fqU1BLNzLEsmSLu5HPVPYfz9mcxzArrBz3WVniGQmCb9ZQPmx3f2D2kjq5mVNYoOEymJvHHxw9rVSgRQ_RV3cHYfVTj2AqyeRlyZAGRQL66qPukbhEn2gxpX51lEy0C52lkBz_V7d9k9FEZQuOcqj0S_hGjrzXgGpOZ_VWYQM-FfNCo-3M2-H-MOu2-sybDSu37IxEPxyE1S4HjBT79U9MMqnEiV0FoptlnVL50"
          alt="" className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-75 transition-all duration-700 pointer-events-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
      </motion.div>

      {/* Left decorative image */}
      <motion.div
        aria-hidden
        className="absolute bottom-[18%] left-[2%] md:left-[4%] z-[1] w-[120px] md:w-[175px] lg:w-[215px] h-[155px] md:h-[220px] lg:h-[265px] overflow-hidden border border-white/10 shadow-2xl hidden md:block"
        style={{ y: imgLeftY, rotate: -3 }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 1.0, ease: [0.25, 1, 0.5, 1] }}
      >
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaZXpdbjLr9LR1AZHlH13OoPIe3jejJ5QnOcZ65UtIXTYGB3FhPhWEysa5L62jlOrhOuIauc30AyV27W61lMnslCrsaPW-417zxIv6lwC0psaVj4kKhOln4z4KLECJ_PGSJfsImraGudDu7PWlQES3CGRX27W8z1SbOwyT-mkSui_n_DpRCHOZJdsdHcWZ0ezqLgJkCeCvxXO-YSfJ6mNTUN7OMzS2PFmVWdky77FtgjIaJHenC1H4lGTuyumwdjVpcqwEBdaHTa0"
          alt="" className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-75 transition-all duration-700 pointer-events-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
      </motion.div>

      {/* Stats badge */}
      <motion.div
        className="absolute right-[4%] lg:right-[8%] top-1/2 -translate-y-1/2 z-[5] hidden lg:flex items-center gap-3 bg-[#111]/90 backdrop-blur-md border border-white/10 px-4 py-3 shadow-2xl"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.6, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="w-9 h-9 bg-accent flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-white" style={{ fontSize: '16px' }}>public</span>
        </div>
        <div>
          <p className="font-label-caps text-[9px] text-accent tracking-[0.2em] uppercase mb-0.5">Global Scale</p>
          <p className="font-headline text-[12px] font-bold text-white leading-tight">500+ Projects Worldwide</p>
        </div>
      </motion.div>

      {/* CONTENT COLUMN */}
      <div className="relative z-[10] flex flex-col h-full w-full">

        {/* Top spacer */}
        <div className="flex-1" />

        {/* Headline block — centered */}
        <div className="flex flex-col items-center text-center px-4 pointer-events-none select-none">
          <div className="overflow-hidden mb-4">
            <motion.p
              className="font-label-caps text-[10px] tracking-[0.35em] text-accent/80 uppercase"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            >
              Established Engineering Excellence
            </motion.p>
          </div>

          {[
            { word: 'Powering', accent: false },
            { word: 'Critical', accent: true  },
            { word: 'Systems.', accent: false },
          ].map(({ word, accent }, i) => (
            <div key={word} className="overflow-hidden">
              <motion.h1
                className={[
                  'font-headline font-black uppercase tracking-tighter leading-[0.9] block',
                  'text-[44px] sm:text-[64px] md:text-[90px] lg:text-[112px] xl:text-[128px]',
                  accent
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-white via-white/85 to-white/35'
                    : 'text-white',
                ].join(' ')}
                initial={{ y: '108%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.18 + i * 0.12, ease: [0.25, 1, 0.5, 1] }}
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Bottom spacer */}
        <div className="flex-1" />

        {/* Bottom bar — always at bottom of flex column */}
        <motion.div
          className="w-full px-8 md:px-16 pb-10 md:pb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-5"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="max-w-[320px]">
            <div className="w-8 h-[2px] bg-accent mb-3" />
            <p className="font-body text-[13px] text-white/50 leading-relaxed">
              From Grid To Greatness — shaping the future of global energy systems and industrial infrastructure.
            </p>
          </div>

          <div className="flex flex-row items-center gap-5 pointer-events-auto">
            <Link to="/about">
              <Button variant="primary" size="lg" className="rounded-none shadow-2xl shadow-accent/20 text-[10px] tracking-[0.18em]">
                EXPLORE EXPERTISE
              </Button>
            </Link>
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 font-label-caps text-[10px] tracking-[0.18em] uppercase text-white/65 border-b border-white/25 hover:border-accent hover:text-accent pb-0.5 transition-all duration-300 group"
            >
              Get a Quote
              <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
