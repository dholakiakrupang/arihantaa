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
    <section className="bg-inverse-surface py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-10">
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

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-white/10">
                {['#', 'Project', 'Client', 'Value', 'Duration', 'Status'].map((h) => (
                  <th key={h} className={`pb-4 font-label-caps text-[9px] text-inverse-on-surface/30 tracking-[0.2em] font-normal ${h === 'Value' || h === 'Status' ? 'text-right' : 'text-left'} ${h !== '#' ? 'px-4' : ''}`}>
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
                  <td className="py-6 font-headline font-light text-2xl text-inverse-on-surface/15 w-10">
                    {String(i + 1).padStart(2, '0')}
                  </td>
                  <td className="py-6 px-4">
                    <span className="font-headline text-lg text-inverse-on-surface group-hover:text-accent transition-colors">
                      {row.name}
                    </span>
                  </td>
                  <td className="py-6 px-4 font-body text-sm text-inverse-on-surface/50 font-light">{row.client}</td>
                  <td className="py-6 px-4 text-right font-headline text-lg text-inverse-on-surface font-light">{row.value}</td>
                  <td className="py-6 px-4 font-body text-sm text-inverse-on-surface/50 font-light">{row.duration}</td>
                  <td className="py-6 pl-4 text-right">
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
