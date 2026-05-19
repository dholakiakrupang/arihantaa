import { motion } from 'framer-motion';
import { trustStats } from '../../../data/productsData';

/**
 * ProductsTrustBar
 * Full-width stats row with 4 key metrics, each accented with a
 * left border in the brand's accent colour.
 */
export function ProductsTrustBar() {
  return (
    <section className="bg-surface border-y border-outline-variant/30 py-16 relative z-20">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {trustStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex flex-col items-center md:items-start border-l-4 border-accent pl-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
          >
            <span className="font-headline text-[40px] md:text-[56px] leading-none font-black text-on-surface tracking-tighter">
              {stat.value}
            </span>
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mt-2">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
