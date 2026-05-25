import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SECTORS = [
  { icon: 'local_hospital', title: 'Healthcare', count: '12 Projects', desc: 'Super Specialty Hospitals, Medical Colleges, Government Health Campuses.' },
  { icon: 'flight_takeoff', title: 'Aviation', count: '4 Projects', desc: 'Greenfield Airports, Terminal Buildings, Air Traffic Control Centers.' },
  { icon: 'train', title: 'Transport', count: '6 Projects', desc: 'Metro Rail Depots, Railway Electrification, Tunnel Lighting Systems.' },
  { icon: 'dns', title: 'Data Centers', count: '8 Projects', desc: 'Mission-Critical Colocation Facilities, Edge Computing, Hyperscale Parks.' },
  { icon: 'factory', title: 'Industrial', count: '15 Projects', desc: 'GIDC Estates, Manufacturing Units, Dam & Canal Infrastructure.' },
  { icon: 'account_balance', title: 'Public Works', count: '9 Projects', desc: 'Government Civic Centers, Religious Corridors, Public Utilities.' },
];

export function SectorSummaryStrip() {
  return (
    <section className="bg-surface py-16 md:py-20 px-6 md:px-12 lg:px-20 border-t border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-accent" />
              <span className="font-label-caps text-[10px] text-accent tracking-[0.26em]">SECTORS WE SERVE</span>
            </div>
            <h2 className="font-headline font-black uppercase text-4xl md:text-5xl text-on-surface tracking-tighter leading-none">
              Areas of Expertise
            </h2>
          </div>
          <p className="font-body text-sm text-secondary max-w-xs leading-relaxed font-light">
            Arihantaa delivers critical electrical infrastructure across India's most demanding sectors.
          </p>
        </div>

        {/* Grid Container with Single-Pixel Borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-outline-variant/30">
          {SECTORS.map((sector, i) => (
            <motion.div
              key={sector.title}
              className="border-r border-b border-outline-variant/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={`/sectors/${sector.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="group h-full bg-surface p-6 flex flex-col gap-4 hover:bg-surface-container-lowest transition-colors duration-300 block"
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div className="text-secondary group-hover:text-accent group-hover:scale-105 transition-all duration-300 select-none">
                    <span className="material-symbols-outlined text-[28px] md:text-[32px]">
                      {sector.icon}
                    </span>
                  </div>
                  <span className="font-label-caps text-[9px] text-secondary/50 tracking-[0.16em]">
                    {sector.count.toUpperCase()}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-headline font-semibold text-xl text-on-surface group-hover:text-accent transition-colors duration-300 uppercase tracking-tight">
                  {sector.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-secondary leading-relaxed font-light">
                  {sector.desc}
                </p>

                {/* Arrow */}
                <div className="mt-auto flex items-center gap-2 text-secondary/40 group-hover:text-accent transition-colors">
                  <div className="h-px w-6 bg-current" />
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
