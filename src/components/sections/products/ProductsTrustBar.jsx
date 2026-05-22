import { motion } from 'framer-motion';
import { trustStats } from '../../../data/productsData';

const icons = {
  "Products": "precision_manufacturing",
  "Uptime Reliability": "bolt",
  "Countries Served": "public"
};

/**
 * ProductsTrustBar
 * Redesigned in a unified premium wireframe layout container.
 * Combines fixed typos, removed redundant stats, and the industries ticker.
 */
export function ProductsTrustBar() {
  return (
    <section className="bg-surface border-b border-outline-variant/30 relative z-20 py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        
        {/* Unified 3-Column Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-outline-variant/30 gap-0">
          {trustStats.map((stat, i) => {
            const icon = icons[stat.label] || "verified";
            return (
              <motion.div
                key={stat.label}
                className="p-8 md:p-12 border-r border-b border-outline-variant/30 bg-surface relative group overflow-hidden transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] }}
              >
                {/* Corner wireframe decorator */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-outline-variant/20 group-hover:border-accent group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="absolute top-[-2px] right-[-2px] w-[5px] h-[5px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Dynamic left accent bar */}
                <div className="absolute left-0 top-8 bottom-8 w-[3px] bg-accent/30 origin-center group-hover:bg-accent group-hover:top-0 group-hover:bottom-0 transition-all duration-500" />

                {/* Icon */}
                <span className="material-symbols-outlined text-accent/60 text-[26px] mb-6 block group-hover:text-accent group-hover:scale-110 transition-all duration-300">
                  {icon}
                </span>

                {/* Big Stat Value */}
                <span className="font-headline text-[48px] md:text-[60px] leading-none font-black text-on-surface tracking-tighter block group-hover:text-accent transition-colors duration-300">
                  {stat.value}
                </span>

                {/* Label */}
                <span className="font-label-caps text-[11px] text-secondary uppercase tracking-[0.18em] mt-3 block group-hover:text-on-surface transition-colors duration-300">
                  {stat.label}
                </span>

                {/* Bottom highlight bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent w-0 group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
