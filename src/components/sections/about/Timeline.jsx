import { motion } from 'framer-motion';

const milestones = [
  { year: "'95", label: 'Founding',      desc: 'Establishment of Arihantaa with a focus on local power distribution and HV systems.',    active: false },
  { year: "'05", label: 'Expansion',     desc: 'Ventured into industrial engineering projects, high-voltage systems, and MEPF works.',          active: false },
  { year: "'15", label: 'Innovation',    desc: 'Implemented digital delivery, smart-grid integration, and BIM-driven design solutions.',    active: false },
  { year: "'20", label: 'Sustainability',desc: 'Launched renewable energy division, carbon management, and green infrastructure practice.', active: false },
  { year: "'25", label: 'Future Ready',  desc: 'Pan-India expansion with MEPF consultancy, strategic JV partnerships, and integrated powertech services.',    active: true  },
];

export function Timeline() {
  return (
    <section className="py-16 md:py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-accent" />
              <span className="font-label-caps text-[11px] text-accent tracking-[0.22em] uppercase">Evolution</span>
            </div>
            <h2 className="font-headline text-[34px] md:text-[50px] leading-[1.05] font-black tracking-tighter text-on-surface">
              The Path to Greatness
            </h2>
          </div>
          <p className="font-body text-[15px] text-secondary max-w-xs">
            30 years of milestones that shaped our journey from local expertise to a trusted pan-India engineering authority.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-outline-variant/30 gap-0">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              className={`p-6 lg:p-8 border-r border-b border-outline-variant/30 bg-surface hover:bg-accent/[0.015] transition-all duration-300 flex flex-col justify-start group min-h-[180px] sm:min-h-[200px] lg:min-h-[250px] rounded-none ${
                i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] }}
            >
              <span className={`block font-headline text-[38px] font-black leading-none tracking-tighter transition-colors duration-300 mb-4 sm:mb-6 shrink-0 ${
                m.active ? 'text-accent' : 'text-on-surface/20 group-hover:text-accent'
              }`}>
                {m.year}
              </span>

              <div className="flex flex-col justify-start flex-grow">
                <h4 className="font-headline text-[16px] lg:text-[17px] font-bold text-on-surface mb-2 min-h-[28px] flex items-start">{m.label}</h4>
                <p className="font-body text-[13.5px] leading-relaxed text-secondary font-light">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
