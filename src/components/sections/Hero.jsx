import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

/* ─── Stats ticker data ─────────────────────────────────────────────────── */
const STATS = [
  { value: '29+', label: 'Years of Expertise' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '12', label: 'Countries Served' },
  { value: '99.9%', label: 'Uptime Guaranteed' },
];

/* ─── Animated number strip ─────────────────────────────────────────────── */
function StatsTicker() {
  return (
    <div className="relative overflow-hidden border-t border-b border-white/10 py-4">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      >
        {[...STATS, ...STATS].map((s, i) => (
          <div key={i} className="flex items-center gap-4 shrink-0">
            <span className="font-headline text-[28px] font-black text-accent tracking-tighter">
              {s.value}
            </span>
            <span className="font-label-caps text-[10px] text-white/45 uppercase tracking-[0.2em]">
              {s.label}
            </span>
            <span className="text-white/20 text-lg ml-4">·</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}


/* ─── Floating badge ────────────────────────────────────────────────────── */
function FloatingBadge({ icon, title, sub, delay, className }) {
  return (
    <motion.div
      className={`absolute z-20 flex items-center gap-3 bg-[#111]/90 backdrop-blur-xl border border-white/10 px-4 py-3 shadow-2xl ${className}`}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: [0.25, 1, 0.5, 1] }}
    >
      <div className="w-8 h-8 bg-accent flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-white" style={{ fontSize: '15px' }}>
          {icon}
        </span>
      </div>
      <div>
        <p className="font-label-caps text-[8px] text-accent tracking-[0.22em] uppercase leading-none mb-0.5">
          {title}
        </p>
        <p className="font-headline text-[11px] font-bold text-white leading-tight">{sub}</p>
      </div>
    </motion.div>
  );
}

/* ─── Main Hero ─────────────────────────────────────────────────────────── */
export function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });

  // Parallax transforms
  const bgY      = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY    = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  // Mouse-follow subtle tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const tiltX  = useSpring(useTransform(mouseY, [-300, 300], [3, -3]), { stiffness: 80, damping: 20 });
  const tiltY  = useSpring(useTransform(mouseX, [-600, 600], [-3, 3]), { stiffness: 80, damping: 20 });

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mouseX, mouseY]);

  // Stagger headline words
  const words = ['Powering', 'Critical', 'Infrastructure.'];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#080808] overflow-hidden flex flex-col"
      style={{ minHeight: '100svh' }}
    >
      {/* ── Ambient gradient blobs ───────────────────────────────────────── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute -top-[15%] -left-[8%] w-[55%] h-[65%] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(233,101,43,0.14) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-[10%] -right-[5%] w-[60%] h-[60%] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(163,56,0,0.10) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
      </div>


      {/* ── Background image (right half) ───────────────────────────────── */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[52%] z-0">
        <motion.div
          className="w-full h-full"
          style={{ scale: imgScale, rotateX: tiltX, rotateY: tiltY, transformPerspective: 1200 }}
        >
          <img
            src="/banner.webp"
            alt="Arihantaa Powertech infrastructure"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.35) saturate(0.7)' }}
          />
        </motion.div>
        {/* Gradient fade from left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-[#080808]/20" />
        {/* Gradient fade from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
      </div>

      {/* ── Diagonal accent line ─────────────────────────────────────────── */}
      <div
        aria-hidden
        className="hidden lg:block absolute top-0 right-[50%] w-[1px] h-full bg-gradient-to-b from-transparent via-white/8 to-transparent z-10"
      />

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col flex-1">

        {/* Top spacer to push content below header */}
        <div className="flex-1 min-h-[100px] md:min-h-[120px]" />

        {/* ── Left content panel ─────────────────────────────────────────── */}
        <motion.div
          className="px-6 md:px-12 lg:px-20 w-full md:w-[62%] lg:w-[58%] xl:w-[54%]"
          style={{ y: textY }}
        >
          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="h-[1px] w-8 bg-accent" />
            <span className="font-label-caps text-[10px] text-accent tracking-[0.3em] uppercase">
              Established Engineering Excellence
            </span>
          </motion.div>

          {/* Headline words */}
          <h1 className="font-headline font-black uppercase leading-[0.88] tracking-tighter mb-8">
            {words.map((word, i) => (
              <div key={word} className="overflow-hidden block">
                <motion.span
                  className={[
                    'block whitespace-nowrap',
                    'text-[32px] sm:text-[42px] md:text-[46px] lg:text-[52px] xl:text-[62px] 2xl:text-[74px]',
                    i === 1 ? 'text-accent' : 'text-white',
                  ].join(' ')}
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{
                    duration: 1.0,
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
            className="font-body text-[15px] md:text-[17px] text-white/50 leading-relaxed max-w-[430px] mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.25, 1, 0.5, 1] }}
          >
            From grid-scale UPS deployment to high-density thermal management — Arihantaa Powertech engineers the backbone of tomorrow's industry.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.78, ease: [0.25, 1, 0.5, 1] }}
          >
            <Link to="/contact">
              <Button
                variant="primary"
                theme="black"
                size="lg"
                className="rounded-none shadow-2xl shadow-accent/25 text-[10px] tracking-[0.2em] font-bold"
              >
                GET A FREE CONSULTATION
              </Button>
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2.5 font-label-caps text-[10px] tracking-[0.2em] uppercase text-white/55 hover:text-white transition-colors duration-300 group"
            >
              <span className="relative overflow-hidden inline-block">
                <span className="block group-hover:-translate-y-full transition-transform duration-300">EXPLORE PRODUCTS</span>
                <span className="absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300 text-accent">EXPLORE PRODUCTS</span>
              </span>
              <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform duration-300">
                arrow_forward
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Bottom spacer ───────────────────────────────────────────────── */}
        <div className="flex-1 min-h-[60px]" />

        {/* ── Stats ticker ────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <StatsTicker />
        </motion.div>
      </div>

      {/* ── Floating badge: ISO ──────────────────────────────────────────── */}
      <FloatingBadge
        icon="verified"
        title="Certified Quality"
        sub="ISO 9001 : 2015"
        delay={1.2}
        className="bottom-[120px] md:bottom-[100px] right-6 md:right-[8%]"
      />

      {/* ── Floating badge: Global ───────────────────────────────────────── */}
      <FloatingBadge
        icon="public"
        title="Global Scale"
        sub="500+ Projects Worldwide"
        delay={1.4}
        className="top-[22%] right-6 md:right-[5%] hidden md:flex"
      />

      {/* ── Vertical scroll hint ─────────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-[68px] left-6 md:left-20 z-20 flex flex-col items-center gap-2 hidden md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
        <span className="font-label-caps text-[8px] text-white/30 tracking-[0.3em] uppercase rotate-90 origin-center mt-2">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
