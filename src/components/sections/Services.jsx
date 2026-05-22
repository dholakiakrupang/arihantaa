import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    id: 'power-distribution',
    title: 'Power Systems',
    desc: 'Design and optimization for high-density power grids and double-conversion distribution networks.',
    icon: 'bolt',
    image: '/project_datacenter.png',
    specs: [
      { label: 'DELIVERY', value: 'HT/LT Substations & Switchgear' },
      { label: 'STANDARDS', value: 'IEEE / IEC / NEC Compliant' },
      { label: 'REDUNDANCY', value: 'N+1 & 2N Design Capability' }
    ]
  },
  {
    id: 'industrial-maint',
    title: 'M&E Design',
    desc: 'Seamless integration of complex mechanical ventilation, thermal control, and electrical loads.',
    icon: 'settings',
    image: '/project_industrial.png',
    specs: [
      { label: 'DYNAMICS', value: 'HVAC & Fluid Flow Modeling' },
      { label: 'COORDINATION', value: 'BIM Level 2 Integrated' },
      { label: 'COMPLIANCE', value: 'NBC & local fire norms' }
    ]
  },
  {
    id: 'performance-opt',
    title: 'Sustainability',
    desc: 'Engineering solutions targeting lower PUE with solar integration and heat recovery techniques.',
    icon: 'energy_savings_leaf',
    image: '/project_hospital.png',
    specs: [
      { label: 'PUE TARGET', value: 'Sub-1.2 Operating Profile' },
      { label: 'INTEGRATION', value: 'BESS & Renewable Sync' },
      { label: 'METRICS', value: 'ASHRAE thermal guidelines' }
    ]
  }
];

export function Services() {
  return (
    <section className="py-24 md:py-32 bg-surface relative overflow-hidden border-b border-outline-variant/30">
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header Block */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-xl">
            <motion.div 
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-px w-6 bg-accent" />
              <span className="font-label-caps text-[10px] text-accent tracking-[0.25em] uppercase font-bold">
                CORE CAPABILITIES | SOLUTIONS
              </span>
            </motion.div>
            
            <h2 className="font-headline text-[38px] sm:text-[48px] lg:text-[60px] leading-[1.0] font-black text-on-surface tracking-tighter uppercase">
              Precision <br/> Solutions.
            </h2>
          </div>

          <p className="font-body text-[14px] md:text-[15px] text-secondary max-w-sm md:text-right leading-relaxed">
            Delivering critical power, industrial ventilation, and cooling solutions for mission-critical sectors.
          </p>
        </div>
        
        {/* Services 3-Column Single-Pixel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-outline-variant/30">
          {SERVICES.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.25, 1, 0.5, 1] }}
              className="border-r border-b border-outline-variant/30 bg-surface flex flex-col justify-between group overflow-hidden relative"
            >
              {/* Overlay Link */}
              <Link to={`/services`} className="absolute inset-0 z-20" aria-label={`Explore ${srv.title}`} />
              
              <div className="p-8 lg:p-10 flex flex-col gap-6">
                
                {/* Header (Icon Only) */}
                <div className="flex justify-start items-center">
                  <span className="material-symbols-outlined text-[35px] text-accent opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    {srv.icon}
                  </span>
                </div>
                
                {/* Title & Desc */}
                <div>
                  <h3 className="font-headline text-[22px] font-bold text-on-surface group-hover:text-accent transition-colors duration-300 leading-tight mb-2">
                    {srv.title}
                  </h3>
                  <p className="font-body text-[13.5px] text-secondary leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                {/* Structured Metadata Specifications Table */}
                <div className="border-t border-outline-variant/20 pt-4 flex flex-col gap-2">
                  {srv.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex justify-between items-baseline text-[11px] font-body">
                      <span className="font-label-caps text-[8.5px] text-secondary/40 tracking-wider uppercase">{spec.label}</span>
                      <span className="text-secondary/80 text-right font-medium max-w-[170px] truncate">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Structured Button */}
                <div className="mt-4 pt-4 border-t border-outline-variant/20">
                  <div className="inline-flex items-center justify-between w-full font-label-caps text-[10px] tracking-[0.2em] text-accent font-bold group-hover:text-accent/80 transition-colors duration-300">
                    <span>EXPLORE SERVICE</span>
                    <span className="material-symbols-outlined text-[23px] group-hover:translate-x-1.5 transition-transform duration-300">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>

              {/* Lower Section: Full-Width Image Block */}
              <div className="relative h-52 border-t border-outline-variant/30 overflow-hidden bg-surface-container-low shrink-0">
                <img 
                  src={srv.image} 
                  alt={srv.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                />
              </div>

            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
