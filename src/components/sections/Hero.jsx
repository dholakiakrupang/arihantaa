import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

// ─── Technical Stats for Bottom Info Bar ──────────────────────────────────
const HERO_METRICS = [
  { value: 'ISO 9001:2015', label: 'CERTIFIED QUALITY' },
  { value: '₹315 CR+', label: 'ACTIVE WORK IN HAND' },
  { value: '10,000+', label: 'INSTALLATIONS DELIVERED' },
  { value: '9 STATES', label: 'ACTIVE PRESENCE' }
];

// ─── Flagship Capability Pillars for Interactive HUD ─────────────────────
const HERO_PILLARS = [
  {
    id: 'critical-power',
    index: '01',
    label: 'CRITICAL POWER',
    headline: 'Modular UPS & Grid Systems',
    description: 'Tier III & IV compliant setups featuring active-active N+1 redundancy, designed for zero downtime and total system isolation.',
    image: '/images/project-data-center.png',
    metrics: [
      { name: 'SYSTEM LOAD', value: '98.4%', progress: 98 },
      { name: 'POWER FACTOR', value: '0.99', progress: 99 },
      { name: 'BUS VOLTAGE', value: '415V', progress: 85 }
    ],
    hudData: {
      nodeId: 'PWR-GRID-01A',
      frequency: '50.02 Hz',
      efficiency: '97.2%',
      coor: 'SEC-A // 48.09.22',
      nodes: [
        { top: '32%', left: '45%', label: 'MAIN BUS A' },
        { top: '68%', left: '72%', label: 'UPS BYPASS' }
      ]
    }
  },
  {
    id: 'precision-cooling',
    index: '02',
    label: 'THERMAL FLUX',
    headline: 'High-Density Liquid Cooling',
    description: 'Advanced liquid cooling and close-coupled thermal solutions designed to regulate ultra-high density server rows and minimize PUE.',
    image: '/images/project-industrial.png',
    metrics: [
      { name: 'THERMAL CAP', value: '850 TR', progress: 78 },
      { name: 'TARGET PUE', value: '1.18', progress: 95 },
      { name: 'RETURN TEMP', value: '21.5°C', progress: 68 }
    ],
    hudData: {
      nodeId: 'COOL-NODE-04',
      frequency: '65.4 Hz',
      efficiency: 'EER 4.2',
      coor: 'ZONE-B // 29.11.84',
      nodes: [
        { top: '24%', left: '55%', label: 'CHILLED INLET' },
        { top: '55%', left: '30%', label: 'FLOW SENS 02' }
      ]
    }
  },
  {
    id: 'active-telemetry',
    index: '03',
    label: 'ACTIVE TELEMETRY',
    headline: '24/7/365 Real-Time NOC',
    description: 'Active monitoring of over 1,400+ operational nodes with automated predictive warning triggers and millisecond latency tracking.',
    image: '/images/philosophy-rigor.png',
    metrics: [
      { name: 'UPLINK LATENCY', value: '4.2ms', progress: 97 },
      { name: 'SENSOR NODES', value: '1,420+', progress: 92 },
      { name: 'TELEMETRY UPTIME', value: '99.999%', progress: 100 }
    ],
    hudData: {
      nodeId: 'NOC-CORE-SYS',
      frequency: '1.2 Gbps',
      efficiency: '99.999%',
      coor: 'SYS-C // 71.04.59',
      nodes: [
        { top: '42%', left: '25%', label: 'NOC FEED A' },
        { top: '78%', left: '62%', label: 'DB NODE 09' }
      ]
    }
  }
];

export function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  
  // Active capabilities pillar selector state
  const [activePillar, setActivePillar] = useState(0);

  // Scroll parallax transform
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const words = ['Powering', 'Critical', 'Infrastructure.'];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0a0a0a] overflow-hidden flex flex-col justify-between border-b border-white/10"
      style={{ minHeight: '100svh' }}
    >
      {/* ── Vertical divider line matching other heroes */}
      <div
        aria-hidden
        className="hidden lg:block absolute top-0 left-[52%] w-px h-full bg-gradient-to-b from-transparent via-white/8 to-transparent z-10 pointer-events-none"
      />

      <div className="relative z-10 flex flex-col flex-1">
        {/* Top Spacer for Fixed Header */}
        <div className="min-h-[88px] md:min-h-[96px]" />

        {/* Main Content Area (Unified Split flex layout) */}
        <div className="flex flex-col lg:flex-row flex-1 items-center max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-20 pb-16 gap-12 lg:gap-0 relative">
            
            {/* Left Column: Editorial & Copy (52% width split, matching subpage heroes) */}
            <motion.div
              className="w-full lg:w-[52%] flex flex-col gap-8 min-w-0 lg:pr-12 xl:pr-20"
              style={{ y: textY }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-accent" />
                <span className="font-label-caps text-[10px] text-accent tracking-[0.28em] uppercase font-bold">
                  ESTD. 1995 | SYSTEM INTEGRATION
                </span>
              </div>

              {/* Title Words */}
              <h1 className="font-headline font-black uppercase leading-[0.88] tracking-tighter">
                {words.map((word, i) => (
                  <div key={word} className="overflow-hidden block w-max">
                    <motion.span
                      className={[
                        'block text-[clamp(36px,4.8vw,72px)]',
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

              {/* Editorial Description */}
              <motion.p
                className="font-body text-base md:text-lg text-white/55 max-w-md leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                From modular high-efficiency UPS deployments to high-density precision thermal engineering — Arihantaa Powertech builds and monitors the physical backbone of India's mission-critical data centres and industrial networks.
              </motion.p>

              {/* Injecting Local Self-Contained Styles for HUD Animations */}
              <style>{`
                @keyframes hud-scan {
                  0% { transform: translateY(-100%); }
                  100% { transform: translateY(520px); }
                }
                @keyframes sonar-pulse {
                  0% { transform: scale(0.6); opacity: 0.6; }
                  50% { opacity: 0.8; }
                  100% { transform: scale(2.2); opacity: 0; }
                }
                .animate-hud-scan {
                  animation: hud-scan 5s linear infinite;
                }
                .animate-sonar-pulse {
                  animation: sonar-pulse 2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
                }
              `}</style>

              {/* Advanced Flagship Capabilities Tab Panel Selector */}
              <motion.div
                className="flex flex-col mt-4 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.75 }}
              >
                {/* Selector Header Bar */}
                <div className="flex gap-2 sm:gap-3 pb-3">
                  {HERO_PILLARS.map((pillar, index) => {
                    const isActive = activePillar === index;
                    return (
                      <button
                        key={pillar.id}
                        onClick={() => setActivePillar(index)}
                        className="flex-1 text-left relative py-2.5 px-3 border transition-all duration-300 group overflow-hidden bg-[#0d0d0d] hover:bg-[#111]"
                        style={{
                          borderColor: isActive ? '#ff6b00' : 'rgba(255,255,255,0.08)',
                        }}
                      >
                        {isActive && (
                          <div className="absolute top-0 left-0 w-full h-[2px] bg-accent" />
                        )}
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-headline font-black text-xs text-accent leading-none">
                            {pillar.index}
                          </span>
                          <span
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              isActive ? 'bg-accent shadow-[0_0_8px_#ff6b00]' : 'bg-white/15 group-hover:bg-white/30'
                            }`}
                          />
                        </div>
                        <span
                          className={`font-label-caps text-[9px] tracking-wider transition-colors duration-300 block font-bold leading-tight ${
                            isActive ? 'text-white' : 'text-white/45 group-hover:text-white/75'
                          }`}
                        >
                          {pillar.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Pillar Detailed Specs Card (Zero Shift) */}
                <div className="min-h-[190px] flex flex-col justify-between border border-white/10 p-4 bg-[#0d0d0d] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />

                  <div className="relative z-10">
                    <h3 className="font-headline text-sm font-extrabold uppercase text-white tracking-wide mb-1.5">
                      {HERO_PILLARS[activePillar].headline}
                    </h3>
                    <p className="font-body text-xs text-white/50 leading-relaxed max-w-[460px]">
                      {HERO_PILLARS[activePillar].description}
                    </p>
                  </div>

                  {/* Sleek Parameter Progression Rows */}
                  <div className="grid grid-cols-3 gap-3 relative z-10 pt-3 border-t border-white/5 mt-4">
                    {HERO_PILLARS[activePillar].metrics.map((metric, idx) => (
                      <div key={idx} className="flex flex-col gap-0.5">
                        <span className="font-label-caps text-[7px] text-white/35 tracking-widest uppercase">
                          {metric.name}
                        </span>
                        <span className="font-headline text-[13px] font-bold text-white leading-none">
                          {metric.value}
                        </span>
                        <div className="w-full h-[2px] bg-white/10 mt-1 relative overflow-hidden">
                          <motion.div
                            className="absolute top-0 left-0 h-full bg-accent"
                            initial={{ width: '0%' }}
                            animate={{ width: `${metric.progress}%` }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            key={`${activePillar}-${idx}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Action Buttons Row */}
              <motion.div
                className="flex flex-wrap items-center gap-5 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.85 }}
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
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2.5 font-label-caps text-[10px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-300 group"
                >
                  <span className="relative overflow-hidden inline-block">
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">EXPLORE PRODUCTS</span>
                    <span className="absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300 text-accent">EXPLORE PRODUCTS</span>
                  </span>
                  <span className="material-symbols-outlined text-[26px] group-hover:translate-x-1 transition-transform duration-300">
                    arrow_forward
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column: Highly Creative Interactive Telemetry Canvas (48% width split, matching subpage heroes) */}
            <div className="w-full lg:w-[48%] relative flex items-center justify-center lg:pl-12 xl:pl-20">
              <div className="relative w-full max-w-[560px] aspect-[6/5] border border-white/10 overflow-hidden bg-[#070707] group/hud">
                
                {/* 1. Dynamic Crossfading High-Quality Background Images */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePillar}
                      className="w-full h-full absolute inset-0"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                      <img
                        src={HERO_PILLARS[activePillar].image}
                        alt={HERO_PILLARS[activePillar].label}
                        className="w-full h-full object-cover select-none pointer-events-none"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* 2. HUD Aesthetics Overlays */}
                {/* Digital High-Tech Diagonal Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,#070707_98%)] pointer-events-none z-10" />

                {/* 3. Pulsing Interactive Radar Sensor Nodes */}
                <div className="absolute inset-0 z-20">
                  {HERO_PILLARS[activePillar].hudData.nodes.map((node, nIdx) => (
                    <div
                      key={nIdx}
                      className="absolute group/node select-none"
                      style={{ top: node.top, left: node.left }}
                    >
                      {/* Pulse circle elements */}
                      <span className="absolute -left-2 -top-2 w-4 h-4 rounded-full bg-accent/30 animate-sonar-pulse" />
                      <span className="relative block w-2 h-2 rounded-full bg-accent border border-white shadow-[0_0_6px_#ff6b00]" />
                      
                      {/* Hover Node Label */}
                      <div className="absolute top-1/2 left-3 -translate-y-1/2 bg-[#0d0d0d]/90 border border-white/10 px-2 py-0.5 whitespace-nowrap pointer-events-none shadow-lg">
                        <span className="font-label-caps text-[8px] text-white tracking-widest font-bold">
                          {node.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>

      {/* Bottom Info Bar: Structured Single-Pixel Divider */}
      <motion.div
        className="w-full border-t border-white/10 bg-[#0a0a0a] shrink-0"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.95 }}
      >
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {HERO_METRICS.map((metric, i) => (
            <div key={i} className="px-6 py-5 flex flex-col justify-center">
              <span className="font-headline text-[18px] md:text-[22px] font-black text-accent tracking-tight leading-none mb-1">
                {metric.value}
              </span>
              <span className="font-label-caps text-[9px] text-white/40 tracking-wider uppercase leading-none">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

