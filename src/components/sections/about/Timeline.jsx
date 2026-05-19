import { motion } from 'framer-motion';

const milestones = [
  { year: "'95", label: 'Founding',      desc: 'Establishment of Arihantaa with a focus on local power distribution and HV systems.',    active: false },
  { year: "'05", label: 'Expansion',     desc: 'Ventured into industrial turnkey projects, high-voltage systems, and MEPF works.',          active: false },
  { year: "'15", label: 'Innovation',    desc: 'Implemented digital delivery, smart-grid integration, and BIM-driven design solutions.',    active: false },
  { year: "'20", label: 'Sustainability',desc: 'Launched renewable energy division, carbon management, and green infrastructure practice.', active: false },
  { year: "'25", label: 'Future Ready',  desc: 'Global consultancy expansion with AI-driven engineering and predictive infrastructure.',    active: true  },
];

export function Timeline() {
  return (
    <section className="py-24 md:py-32 bg-surface-container-low overflow-hidden">
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
            30 years of milestones that shaped our journey from local expertise to global engineering authority.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[52px] left-0 right-0 h-px bg-outline-variant/30" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                className="relative z-10"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
              >
                {/* Year box */}
                <div className={`w-[88px] h-[88px] flex items-center justify-center mb-6 border-2 transition-all duration-300 ${
                  m.active
                    ? 'bg-accent border-accent shadow-lg shadow-accent/20'
                    : 'bg-surface border-outline-variant/30 hover:border-accent group'
                }`}>
                  <span className={`font-headline text-[30px] font-black leading-none tracking-tighter ${
                    m.active ? 'text-on-primary' : 'text-on-surface/40 group-hover:text-accent transition-colors'
                  }`}>
                    {m.year}
                  </span>
                </div>

                <h4 className="font-headline text-[17px] font-bold text-on-surface mb-2">{m.label}</h4>
                <p className="font-body text-[13px] leading-relaxed text-secondary">{m.desc}</p>

                {/* Active indicator dot */}
                {m.active && (
                  <div className="absolute top-[88px] left-[44px] -translate-x-1/2 w-2 h-2 bg-accent rounded-full hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
