import React from 'react';
import { motion } from 'framer-motion';
import { turnoverChartData } from '../../../data/projectsData';

const MAX_VALUE = 100; // chart ceiling in Cr

const barVariants = {
  hidden: { scaleY: 0 },
  visible: (i) => ({
    scaleY: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1],
      delay: i * 0.08,
    },
  }),
};

export function AnnualTurnoverChart() {
  return (
    <section className="bg-inverse-surface py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-accent" />
              <span className="font-label-caps text-[10px] text-accent tracking-[0.26em]">FINANCIAL PERFORMANCE</span>
            </div>
            <h2 className="font-headline font-black uppercase text-4xl md:text-5xl text-inverse-on-surface tracking-tighter leading-none">
              Growth Trajectory
            </h2>
          </div>
          <p className="font-body text-sm text-inverse-on-surface/50 max-w-xs leading-relaxed font-light">
            Consistent year-on-year growth reflecting our expanding execution capacity and trusted delivery.
          </p>
        </div>

        {/* Scroll wrapper for mobile responsiveness */}
        <div className="overflow-x-auto overflow-y-hidden pb-4 -mx-6 px-6 md:mx-0 md:px-0">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative flex items-end justify-around gap-1 md:gap-3 h-72 md:h-96 border-b border-white/10 pl-12 pb-0 w-full min-w-0"
          >

            {/* Y-axis vertical line */}
            <div className="absolute left-12 top-0 bottom-0 w-px bg-white/10" />

            {/* Y-axis labels centered on grid lines */}
            {[
              { value: '100 Cr', pct: 100 },
              { value: '75 Cr', pct: 75 },
              { value: '50 Cr', pct: 50 },
              { value: '25 Cr', pct: 25 },
              { value: '0', pct: 0 },
            ].map((item) => (
              <span
                key={item.value}
                className="absolute left-0 font-label-caps text-[9px] text-inverse-on-surface/25 tracking-widest text-right w-10 -translate-y-1/2 leading-none"
                style={{ bottom: `${item.pct}%` }}
              >
                {item.value}
              </span>
            ))}

            {/* Horizontal grid lines */}
            {[25, 50, 75, 100].map((pct) => (
              <div
                key={pct}
                className="absolute left-12 right-0 h-px bg-white/5"
                style={{ bottom: `${pct}%` }}
              />
            ))}

            {/* Bars */}
            {turnoverChartData.map((bar, i) => {
              const heightPct = (bar.value / MAX_VALUE) * 100;
              const isHighlight = bar.isHighlight;

              return (
                <div key={bar.year} className="group flex flex-col items-center flex-1 h-full justify-end relative z-10">
                  {/* Value tooltip - custom slide-up hover interaction */}
                  <span
                    className={`font-label-caps text-[9px] mb-2 tracking-widest transition-all duration-300 transform ${
                      isHighlight
                        ? 'text-accent translate-y-0 opacity-100'
                        : 'text-inverse-on-surface/40 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
                    }`}
                  >
                    ₹{bar.value}
                  </span>

                  {/* Bar */}
                  <div className="w-6 sm:w-12 md:w-16 max-w-[64px] relative overflow-hidden rounded-t-sm" style={{ height: `${heightPct}%` }}>
                    <motion.div
                      custom={i}
                      variants={barVariants}
                      className={`absolute inset-0 origin-bottom rounded-t-sm ${
                        isHighlight
                          ? 'bg-gradient-to-t from-accent/90 to-accent'
                          : 'bg-gradient-to-t from-white/[0.04] to-white/[0.12] group-hover:from-white/[0.08] group-hover:to-white/[0.2]'
                      } transition-all duration-300`}
                    />
                  </div>

                  {/* Year label */}
                  <span className={`font-label-caps text-[9px] mt-3 tracking-widest ${isHighlight ? 'text-accent' : 'text-inverse-on-surface/30'}`}>
                    {bar.year}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Peak callout */}
        <div className="flex items-center gap-4 mt-8">
          <div className="w-3 h-3 bg-accent" />
          <span className="font-label-caps text-[10px] text-inverse-on-surface/50 tracking-[0.18em]">
            PEAK TURNOVER: ₹80.18 CR (FY 2023–24)
          </span>
        </div>
      </div>
    </section>
  );
}
