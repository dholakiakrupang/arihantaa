import { useRef, useEffect, useState } from 'react';
import { Button } from '../../ui/Button';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  animate,
} from 'framer-motion';
import { Link } from 'react-router-dom';

/* ─── Marquee data ───────────────────────────────────────────────────────── */
const MARQUEE = [
  'Haridwar Medical Campus · ₹97.53 Cr',
  'Rajkot Greenfield Airport · ₹63.62 Cr',
  'GMERS Sola Super Specialty · ₹69.19 Cr',
  'Surat Metro Rail Depot · ₹42.10 Cr',
  'GIDC Industrial Estate · ₹45.2 Cr',
  'Civil Hospital Ahmedabad · ₹28.45 Cr',
];

/* ─── Floating badge (matches home hero pattern) ─────────────────────────── */
function Badge({ icon, label, value, delay, className }) {
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
          {label}
        </p>
        <p className="font-headline text-[12px] font-bold text-white leading-tight">{value}</p>
      </div>
    </motion.div>
  );
}

/* ─── Animated SVG: Circuit / Schematic board ────────────────────────────── */
function CircuitSVG({ isMobile }) {
  return (
    <svg
      viewBox="0 0 600 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden
    >
      {/* ── Grid dots */}
      {Array.from({ length: 10 }, (_, row) =>
        Array.from({ length: 12 }, (_, col) => {
          if (isMobile) {
            return (
              <circle
                key={`dot-${row}-${col}`}
                cx={col * 52 + 20}
                cy={row * 52 + 20}
                r={1.5}
                fill="rgba(255,255,255,0.12)"
              />
            );
          }
          return (
            <motion.circle
              key={`dot-${row}-${col}`}
              cx={col * 52 + 20}
              cy={row * 52 + 20}
              r={1.5}
              fill="rgba(255,255,255,0.12)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.6, 0.12] }}
              transition={{ duration: 2, delay: (row + col) * 0.04, repeat: Infinity, repeatDelay: 4 }}
            />
          );
        })
      )}

      {/* ── Horizontal trace lines */}
      {[80, 170, 260, 360, 450].map((y, i) => (
        <motion.line
          key={`hline-${i}`}
          x1="20" y1={y} x2="580" y2={y}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 + i * 0.15 }}
        />
      ))}

      {/* ── Vertical trace lines */}
      {[100, 200, 310, 420, 520].map((x, i) => (
        <motion.line
          key={`vline-${i}`}
          x1={x} y1="20" x2={x} y2="500"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 + i * 0.12 }}
        />
      ))}

      {/* ── Main accent circuit path */}
      <motion.path
        d="M 20 260 H 100 V 170 H 200 V 80 H 310 V 170 H 420 V 260 H 520 V 360 H 420 V 450 H 310 V 360 H 200 V 450 H 100 V 360 H 20 Z"
        stroke="rgba(233,101,43,0.35)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="8 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, delay: 0.8, ease: 'easeInOut' }}
      />

      {/* ── Moving signal pulse on main path */}
      <motion.circle
        cx={0} cy={0} r={4}
        fill="#E9652B"
        filter="url(#glow)"
        animate={{
          offsetDistance: ['0%', '100%'],
          opacity: [0, 1, 1, 0],
        }}
        style={{ offsetPath: "path('M 20 260 H 100 V 170 H 200 V 80 H 310 V 170 H 420 V 260 H 520 V 360 H 420 V 450 H 310 V 360 H 200 V 450 H 100 V 360 H 20 Z')" }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear', delay: 2 }}
      />

      {/* ── Node circles at intersections */}
      {[
        [100, 170], [200, 80], [310, 80], [420, 170],
        [520, 260], [420, 360], [310, 450], [200, 360],
        [100, 260], [310, 260],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={`node-${i}`}
          cx={cx} cy={cy} r={5}
          stroke="rgba(233,101,43,0.7)"
          strokeWidth="1.5"
          fill="rgba(233,101,43,0.15)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 + i * 0.1, type: 'spring' }}
        />
      ))}

      {/* ── Center element — UPS / Transformer icon */}
      <motion.rect
        x="270" y="220" width="80" height="80" rx="0"
        stroke="rgba(233,101,43,0.8)"
        strokeWidth="2"
        fill="rgba(233,101,43,0.08)"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.8, type: 'spring' }}
      />
      <motion.text
        x="310" y="267" textAnchor="middle" dominantBaseline="middle"
        fill="rgba(233,101,43,0.9)"
        fontFamily="monospace"
        fontSize="11"
        fontWeight="bold"
        letterSpacing="2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        UPS
      </motion.text>
      <motion.text
        x="310" y="283" textAnchor="middle" dominantBaseline="middle"
        fill="rgba(233,101,43,0.5)"
        fontFamily="monospace"
        fontSize="8"
        letterSpacing="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
      >
        CRITICAL PWR
      </motion.text>

      {/* ── Mini sub-circuits branching off */}
      {/* Top-left branch */}
      <motion.path
        d="M 100 170 H 50 V 120 H 20"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
      />
      <motion.rect x="14" y="112" width="12" height="16" rx="0"
        stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
      />

      {/* Top-right branch */}
      <motion.path
        d="M 420 170 H 470 V 120 H 540"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
      />
      <motion.rect x="536" y="112" width="12" height="16" rx="0"
        stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1 }}
      />

      {/* ── Blinking status indicators */}
      {[[55, 80], [540, 80], [55, 430], [540, 430]].map(([cx, cy], i) => (
        <g key={`status-${i}`}>
          <motion.circle
            cx={cx} cy={cy} r={4}
            fill="rgba(233,101,43,0.8)"
            animate={{ opacity: [0.4, 1, 0.4], r: [4, 5.5, 4] }}
            transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
          />
          <motion.circle
            cx={cx} cy={cy} r={9}
            stroke="rgba(233,101,43,0.3)"
            strokeWidth="1"
            fill="none"
            animate={{ opacity: [0, 0.8, 0], r: [6, 14, 6] }}
            transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
          />
        </g>
      ))}

      {/* ── Voltage / waveform line */}
      <motion.path
        d="M 20 450 L 60 450 L 80 420 L 100 480 L 120 420 L 140 480 L 160 450 L 580 450"
        stroke="rgba(233,101,43,0.4)"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 2.5 }}
      />

      {/* ── Glow filter */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

/* ─── Animated counter ───────────────────────────────────────────────────── */
function AnimCount({ to, suffix = '', duration = 2 }) {
  const nodeRef = useRef(null);
  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;
    const ctrl = animate(0, to, {
      duration,
      ease: [0.25, 1, 0.5, 1],
      onUpdate: (v) => { node.textContent = Math.round(v) + suffix; },
    });
    return ctrl.stop;
  }, [to, suffix, duration]);
  return <span ref={nodeRef}>0{suffix}</span>;
}

/* ─── Main component ─────────────────────────────────────────────────────── */
export function ProjectsHero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const textY   = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const svgY    = useTransform(scrollYProgress, [0, 1], ['0%', '-6%']);
  const svgOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.3]);

  // Screen size detection for mobile performance optimization
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mouse-tilt on SVG panel
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-300, 300], [4, -4]), { stiffness: 80, damping: 25 });
  const rotY = useSpring(useTransform(mx, [-500, 500], [-5, 5]), { stiffness: 80, damping: 25 });

  useEffect(() => {
    if (isMobile) return;
    const move = (e) => {
      mx.set(e.clientX - window.innerWidth / 2);
      my.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mx, my, isMobile]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#080808] overflow-hidden flex flex-col"
      style={{ minHeight: '100svh' }}
    >
      {/* ── Ambient gradient blobs (matches home hero) */}
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
        <motion.div
          className="absolute -bottom-[10%] right-[30%] w-[50%] h-[55%] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(163,56,0,0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      {/* ── Vertical divider line */}
      <div
        aria-hidden
        className="hidden lg:block absolute top-0 left-[52%] w-px h-full bg-gradient-to-b from-transparent via-white/8 to-transparent z-10"
      />

      {/* ── Main layout: left text / right SVG */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Top spacer */}
        <div className="min-h-[88px] md:min-h-[96px]" />

        <div className="flex flex-col lg:flex-row flex-1 items-center max-w-[1440px] mx-auto w-full px-8 md:px-16 pb-16 gap-12 lg:gap-0">

          {/* ── LEFT: Text content */}
          <motion.div
            className="w-full lg:w-[52%] flex flex-col gap-8 min-w-0"
            style={{ y: textY }}
          >
            {/* Breadcrumb */}
            <motion.nav
              className="flex items-center gap-2 mb-8"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Home</Link>
              <span className="material-symbols-outlined text-surface-variant text-[14px]">chevron_right</span>
              <span className="font-label-caps text-[10px] text-surface-variant tracking-[0.2em] uppercase">Projects</span>
            </motion.nav>

            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="w-8 h-px bg-accent" />
              <span className="font-label-caps text-[10px] text-accent tracking-[0.28em]">
                OUR PORTFOLIO — EST. 1995
              </span>
            </motion.div>

            {/* Headline — staggered words like home hero */}
            <h1 className="font-headline font-black uppercase leading-[0.88] tracking-tighter">
              {['Engineering', 'Excellence', 'Delivered.'].map((word, i) => (
                <div key={word} className="overflow-hidden block w-max max-w-full">
                  <motion.span
                    className={[
                      'block',
                      'text-[clamp(28px,4.8vw,72px)]',
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

            {/* Body copy */}
            <motion.p
              className="font-body text-base md:text-lg text-white/55 max-w-md leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              From ₹15 Cr dam illuminations to ₹97 Cr hospital campuses —
              Arihantaa Powertech has powered India's most demanding electrical
              infrastructure across 9 states for three decades.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.75 }}
            >
              <Button to="/contact" variant="primary" theme="dark" size="lg" className="rounded-none shadow-2xl shadow-accent/25 text-[10px] tracking-[0.2em] font-bold">
                GET A QUOTE
              </Button>
              <button
                onClick={() => document.getElementById('project-board')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2.5 font-label-caps text-[10px] tracking-[0.2em] uppercase text-white/55 hover:text-white transition-colors duration-300 group"
              >
                <span className="relative overflow-hidden inline-block">
                  <span className="block group-hover:-translate-y-full transition-transform duration-300">EXPLORE ALL</span>
                  <span className="absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300 text-accent">EXPLORE ALL</span>
                </span>
                <span className="material-symbols-outlined text-[14px] group-hover:translate-y-1 transition-transform duration-300">
                  arrow_downward
                </span>
              </button>
            </motion.div>

            {/* Compact credential strip */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 md:gap-x-6 pt-4 border-t border-white/8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              {['₹315 Cr+ Active', '22+ Live Projects', '9 States'].map((t, i) => (
                <div key={t} className="flex items-center gap-4 md:gap-6">
                  <span className="font-label-caps text-[9px] md:text-[10px] text-white/35 tracking-[0.16em] whitespace-nowrap">{t}</span>
                  {i < 2 && <div className="w-px h-3 bg-white/15" />}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Animated SVG schematic */}
          <motion.div
            className="relative w-full lg:w-[48%] flex items-center justify-center lg:pl-12 xl:pl-20"
            style={{ 
              y: svgY, 
              opacity: svgOpacity, 
              ...(isMobile ? {} : { rotateX: rotX, rotateY: rotY, transformPerspective: 1000 }) 
            }}
          >
            {/* Outer glow frame */}
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

              {/* Panel label */}
              <motion.div
                className="absolute -top-6 left-0 font-label-caps text-[9px] text-white/25 tracking-[0.25em]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                ELECTRICAL SCHEMATIC — REV. 3.1
              </motion.div>

              {/* SVG */}
              <CircuitSVG isMobile={isMobile} />

              {/* Floating badges */}
              <Badge
                icon="bolt"
                label="Critical Power"
                value="10 MVA UPS Systems"
                delay={2.2}
                className="top-[12%] left-3 sm:left-4 md:-left-4 lg:-left-12"
              />
              <Badge
                icon="done_all"
                label="Completed"
                value="GMERS Sola — ₹69.19 Cr"
                delay={2.5}
                className="bottom-[18%] right-3 sm:right-4 md:-right-4 lg:-right-10"
              />
              <Badge
                icon="construction"
                label="In Progress"
                value="22 Active Projects"
                delay={2.8}
                className="bottom-[2%] left-3 sm:left-[6%] md:left-[8%]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom ticker (matches home hero StatsTicker) */}
      <div className="relative overflow-hidden border-t border-white/8 py-4 bg-[#080808]/80 backdrop-blur-sm z-10">
        <motion.div
          className="flex gap-14 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        >
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <div key={i} className="flex items-center gap-14 shrink-0">
              <span className="font-label-caps text-[10px] text-white/35 tracking-[0.22em]">{item}</span>
              <span className="text-accent/40 text-sm">·</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
