import { motion } from 'framer-motion';
import { StatCard } from '../ui/StatCard';

const STATS_DATA = [
  {
    value: "30+",
    label: "YEARS OF RIGOR",
    desc: "Active M&E consulting and engineering systems delivery since 1995.",
    indicator: "EST. 1995 | BASE"
  },
  {
    value: "500+",
    label: "COMPLETED PROJECTS",
    desc: "Critical power, cooling, and infrastructure packages commissioned.",
    indicator: "OPS | DEPLOYED"
  },
  {
    value: "Pan-India",
    label: "PROJECT REACH",
    desc: "Delivering electrical infrastructure and MEPF consultancy across India.",
    indicator: "NATIONAL | COVERAGE"
  }
];

export function Stats() {
  return (
    <section className="bg-surface border-b border-outline-variant/30 relative z-20">
      <div className="max-w-[1440px] mx-auto">
        
        {/* 3-Column Structured Single-Pixel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-x border-outline-variant/30">
          {STATS_DATA.map((stat, i) => (
            <div 
              key={i} 
              className="border-r border-b md:border-b-0 last:border-b-0 md:last:border-b-0 border-outline-variant/30 last:border-r-0 md:last:border-r-0 flex flex-col justify-between p-7 md:p-8 lg:p-12 hover:bg-accent/[0.01] transition-all duration-500 group"
            >
              {/* Big Animated Value */}
              <div>
                <StatCard
                  value={stat.value}
                  label={stat.label}
                  delay={i * 0.08}
                  centered={false}
                  className="border-0 p-0 hover:bg-transparent bg-transparent"
                />

                {/* Subtitle / Desc */}
                <p className="font-body text-[13px] text-secondary/70 leading-relaxed mt-3 md:mt-3 lg:mt-4 max-w-xs group-hover:text-on-surface transition-colors duration-300">
                  {stat.desc}
                </p>
              </div>

              {/* Accent Line Indicator */}
              <div className="w-full h-px bg-outline-variant/20 mt-5 md:mt-5 lg:mt-8 overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-0 group-hover:w-full bg-accent transition-all duration-500 ease-out" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
