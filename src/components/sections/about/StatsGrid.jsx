import { motion } from 'framer-motion';

const stats = [
  { value: '30+', label: 'Years Experience', icon: 'history' },
  { value: '500+', label: 'Projects Delivered', icon: 'engineering' },
  { value: '₹80Cr+', label: 'Annual Turnover', icon: 'trending_up' },
  { value: '100+', label: 'Elite Professionals', icon: 'groups' },
];

export function StatsGrid() {
  return (
    <section className="bg-inverse-surface py-20 border-y border-white/5">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px w-10 bg-accent" />
          <span className="font-label-caps text-[11px] text-accent tracking-[0.25em] uppercase">By The Numbers</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-white/10 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-inverse-surface p-8 md:p-10 border-r border-b border-white/10 flex flex-col gap-4 group hover:bg-white/5 transition-colors duration-300 rounded-none"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="flex items-center justify-between">
                <span className="material-symbols-outlined text-accent text-[22px] group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </span>
                <div className="w-6 h-6 border border-accent/30 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                  <div className="w-1.5 h-1.5 bg-accent" />
                </div>
              </div>
              <div>
                <p className="font-headline text-[48px] md:text-[64px] font-black text-accent leading-none tracking-tighter">
                  {stat.value}
                </p>
                <p className="font-label-caps text-[11px] text-surface-variant tracking-[0.18em] uppercase mt-2">
                  {stat.label}
                </p>
              </div>
              {/* Animated bottom border */}
              <div className="h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
