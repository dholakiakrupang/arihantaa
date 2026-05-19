import React from 'react';
import { motion } from 'framer-motion';
import { turnoverChartData } from '../../../data/projectsData';

const MAX_VALUE = 100; // chart ceiling in Cr

export function AnnualTurnoverChart() {
  return (
    <section className="bg-inverse-surface py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-10">
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

        {/* Chart container */}
        <div className="relative flex items-end gap-2 md:gap-3 h-72 md:h-96 border-b border-white/10 border-l border-white/10 pl-12 pb-0">

          {/* Y-axis */}
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between pb-0 pt-0">
            {['100 Cr', '75 Cr', '50 Cr', '25 Cr', '0'].map((label) => (
              <span key={label} className="font-label-caps text-[9px] text-inverse-on-surface/25 tracking-widest text-right w-10 leading-none">
                {label}
              </span>
            ))}
          </div>

          {/* Horizontal grid lines */}
          {[0, 25, 50, 75].map((pct) => (
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
              <div key={bar.year} className="group flex flex-col items-center flex-1 h-full justify-end">
                {/* Value tooltip */}
                <motion.span
                  className={`font-label-caps text-[9px] mb-2 tracking-widest ${isHighlight ? 'text-accent' : 'text-inverse-on-surface/0 group-hover:text-inverse-on-surface/60'} transition-colors`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                >
                  ₹{bar.value}
                </motion.span>

                {/* Bar */}
                <div className="w-full relative overflow-hidden" style={{ height: `${heightPct}%` }}>
                  <motion.div
                    className={`absolute inset-0 origin-bottom ${isHighlight ? 'bg-accent' : 'bg-white/10 group-hover:bg-white/20'} transition-colors duration-300`}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: i * 0.08 }}
                  />
                </div>

                {/* Year label */}
                <span className={`font-label-caps text-[9px] mt-3 tracking-widest ${isHighlight ? 'text-accent' : 'text-inverse-on-surface/30'}`}>
                  {bar.year}
                </span>
              </div>
            );
          })}
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
