import { motion } from 'framer-motion';

const stats = [
  { value: 'Pan-India', label: 'Project Reach', icon: 'public' },
  { value: '6+', label: 'Sectors Served', icon: 'category' },
  { value: '3', label: 'Strategic JV Partners', icon: 'handshake' },
  { value: 'MEPF', label: 'Full Consultancy', icon: 'architecture' },
];

export function StatsGrid() {
  return (
    <section className="bg-[#080808] py-20 md:py-28 border-y border-white/5 relative overflow-hidden">
      {/* Subtle blueprint grid pattern in background for engineering theme */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-10">
          <div className="h-[2px] w-8 bg-accent" />
          <span className="font-label-caps text-[11px] text-accent tracking-[0.25em] uppercase font-bold">By The Numbers</span>
        </div>

        {/* 1/2/4 Grid with single-pixel border treatment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10 gap-0">
          {stats.map((stat, i) => {
            const isLongVal = stat.value.length > 3;
            return (
              <motion.div
                key={stat.label}
                className="relative bg-[#080808] p-8 md:p-10 border-r border-b border-white/10 flex flex-col justify-between min-h-[220px] group hover:bg-white/[0.02] transition-colors duration-300 rounded-none overflow-hidden"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] }}
              >
                {/* Icon wrapper */}
                <div className="mb-6">
                  <span 
                    className="material-symbols-outlined text-accent !text-[28px] group-hover:scale-110 transition-transform duration-300 block w-fit" 
                    style={{ fontSize: '28px' }}
                  >
                    {stat.icon}
                  </span>
                </div>

                {/* Values & Labels */}
                <div className="mt-auto">
                  <h3 className={`font-headline font-black text-accent leading-none tracking-tighter whitespace-nowrap mb-2 ${
                    isLongVal 
                      ? 'text-[22px] sm:text-[26px] md:text-[24px] lg:text-[36px] xl:text-[44px]' 
                      : 'text-[36px] sm:text-[44px] md:text-[38px] lg:text-[60px] xl:text-[68px]'
                  }`}>
                    {stat.value}
                  </h3>
                  <p className="font-label-caps text-[9.5px] sm:text-[10px] text-white/45 tracking-[0.2em] uppercase">
                    {stat.label}
                  </p>
                </div>

                {/* Absolutely positioned animated bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] w-0 bg-accent group-hover:w-full transition-all duration-500 ease-out" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
