import React from 'react';
import { motion } from 'framer-motion';

// Updated for new data format
const pipeline = [
  { id: 'cp1', name: 'Haridwar Medical Campus', client: 'Govt. of Uttarakhand', value: '₹97.53 Cr', duration: '36 Months' },
  { id: 'cp2', name: 'Rajkot Greenfield Airport', client: 'AAI', value: '₹63.62 Cr', duration: '24 Months' },
  { id: 'cp3', name: 'GMERS Sola Super Specialty', client: 'PIU, Gujarat', value: '₹69.19 Cr', duration: '24 Months' },
  { id: 'cp4', name: 'Surat Metro Rail Depot', client: 'GMRC', value: '₹42.10 Cr', duration: '18 Months' },
  { id: 'cp5', name: 'Civil Hospital, Ahmedabad', client: 'PIU', value: '₹28.45 Cr', duration: '24 Months' },
];

export function CurrentPipeline() {
  return (
    <section className="bg-inverse-surface py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-accent" />
              <span className="font-label-caps text-[10px] text-accent tracking-[0.26em]">WORK IN HAND</span>
            </div>
            <h2 className="font-headline font-black uppercase text-4xl md:text-5xl text-inverse-on-surface tracking-tighter leading-none">
              Active Pipeline
            </h2>
          </div>
          <div className="text-right">
            <div className="font-headline font-light text-3xl text-inverse-on-surface">₹315 Cr+</div>
            <div className="font-label-caps text-[10px] text-inverse-on-surface/40 tracking-[0.16em] mt-1">TOTAL ACTIVE VALUE</div>
          </div>
        </div>

        {/* Mobile Stacked List (scrollbar-free) */}
        <div className="md:hidden space-y-4">
          {pipeline.map((row, i) => (
            <motion.div
              key={row.id}
              className="bg-white/[0.02] border border-white/5 p-4 flex flex-col gap-3 group hover:bg-white/[0.04] transition-colors"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Header: Number, Name, Status */}
              <div className="flex justify-between items-start gap-4">
                <div className="flex items-start gap-3">
                  <span className="font-headline font-light text-xl text-inverse-on-surface/30 mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-headline text-[15px] text-inverse-on-surface group-hover:text-accent transition-colors leading-snug">
                    {row.name}
                  </h3>
                </div>
                <div className="inline-flex items-center gap-1.5 shrink-0 bg-accent/10 px-2 py-0.5 border border-accent/20">
                  <div className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                  <span className="font-label-caps text-[8px] text-accent tracking-[0.12em]">LIVE</span>
                </div>
              </div>

              {/* Grid: Client, Value, Duration */}
              <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-3">
                <div>
                  <span className="font-label-caps text-[8px] text-inverse-on-surface/20 tracking-wider block mb-0.5">CLIENT</span>
                  <span className="font-body text-[11px] text-inverse-on-surface/50 leading-tight block truncate max-w-[100px]">{row.client}</span>
                </div>
                <div>
                  <span className="font-label-caps text-[8px] text-inverse-on-surface/20 tracking-wider block mb-0.5">VALUE</span>
                  <span className="font-headline text-[13px] text-accent font-semibold block">{row.value}</span>
                </div>
                <div>
                  <span className="font-label-caps text-[8px] text-inverse-on-surface/20 tracking-wider block mb-0.5">DURATION</span>
                  <span className="font-body text-[11px] text-inverse-on-surface/50 block">{row.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop/Tablet Table layout */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full min-w-full">
            <thead>
              <tr className="border-b border-white/10">
                {['#', 'Project', 'Client', 'Value', 'Duration', 'Status'].map((h) => (
                  <th key={h} className={`pb-3 font-label-caps text-[9px] text-inverse-on-surface/30 tracking-[0.2em] font-normal ${h === 'Value' || h === 'Status' ? 'text-right' : 'text-left'} ${h !== '#' ? 'px-4' : ''}`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pipeline.map((row, i) => (
                <motion.tr
                  key={row.id}
                  className="border-b border-white/5 group hover:bg-white/[0.02] transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <td className="py-4 font-headline font-light text-2xl text-inverse-on-surface/15 w-10">
                    {String(i + 1).padStart(2, '0')}
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-headline text-lg text-inverse-on-surface group-hover:text-accent transition-colors">
                      {row.name}
                    </span>
                  </td>
                  <td className="py-4 px-4 font-body text-sm text-inverse-on-surface/50 font-light">{row.client}</td>
                  <td className="py-4 px-4 text-right font-headline text-lg text-inverse-on-surface font-light whitespace-nowrap">{row.value}</td>
                  <td className="py-4 px-4 font-body text-sm text-inverse-on-surface/50 font-light whitespace-nowrap">{row.duration}</td>
                  <td className="py-4 px-4 text-right whitespace-nowrap">
                    <div className="inline-flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-ring" />
                      <span className="font-label-caps text-[9px] text-accent tracking-[0.16em]">LIVE</span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
