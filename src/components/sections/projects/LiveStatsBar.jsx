import { motion, useInView, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { projectsStats } from '../../../data/projectsData';

/* ── Animated number that counts up on scroll-into-view ─────────────────── */
function AnimatedValue({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  // Extract numeric part and prefix/suffix strings
  const match = value.match(/^([₹\s]*)(\d[\d,.]*)([\w\s+]*?)$/);
  const prefix = match ? match[1] : '';
  const numStr = match ? match[2].replace(/[,]/g, '') : '';
  const suffix = match ? match[3] : '';
  const numericVal = parseFloat(numStr) || 0;
  const isDecimal = numStr.includes('.');

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const node = ref.current;
    const ctrl = animate(0, numericVal, {
      duration: 1.8,
      ease: [0.25, 1, 0.5, 1],
      onUpdate: (v) => {
        node.textContent = prefix + (isDecimal ? v.toFixed(2) : Math.round(v)) + suffix;
      },
    });
    return ctrl.stop;
  }, [isInView, numericVal, prefix, suffix, isDecimal]);

  return (
    <span ref={ref}>
      {value}
    </span>
  );
}

const STATS = [
  { value: '₹315 Cr+', label: 'Active Work in Hand', icon: 'trending_up' },
  { value: '₹80.18 Cr', label: 'Peak Annual Turnover', icon: 'bar_chart' },
  { value: '1995', label: 'Year Established', icon: 'history' },
  { value: '22+', label: 'Active Projects', icon: 'construction' },
  { value: '10,000+', label: 'Installations Delivered', icon: 'bolt' },
  { value: '9 States', label: 'GST Active Presence', icon: 'location_on' },
];

export function LiveStatsBar() {
  return (
    <section className="bg-surface border-b border-outline overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-outline">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              className="group relative flex flex-col justify-between px-6 py-10 overflow-hidden cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] }}
            >
              {/* Hover accent fill from bottom */}
              <div className="absolute inset-0 bg-surface-variant translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" />

              {/* Top: icon */}
              <div className="relative z-10 mb-6">
                <span
                  className="material-symbols-outlined text-accent opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ fontSize: '18px' }}
                >
                  {stat.icon}
                </span>
              </div>

              {/* Middle: big value */}
              <div className="relative z-10">
                <div className="font-headline font-light text-[28px] md:text-[32px] text-secondary leading-none mb-3 group-hover:text-secondary transition-colors">
                  <AnimatedValue value={stat.value} />
                </div>
                <div className="font-label-caps text-[9px] text-on-surface-variant/60 tracking-[0.2em] leading-relaxed group-hover:text-on-surface-variant transition-colors">
                  {stat.label.toUpperCase()}
                </div>
              </div>

              {/* Bottom: accent line that grows on hover */}
              <div className="relative z-10 mt-8 h-px w-full bg-outline overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-0 group-hover:w-full bg-accent transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
