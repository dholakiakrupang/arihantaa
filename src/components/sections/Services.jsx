import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    id: 'mepf-consultancy',
    title: 'MEPF Consultancy',
    desc: 'Integrated Mechanical, Electrical, Plumbing, and Fire Protection consultancy under BIM Level 2 coordination.',
    icon: 'architecture',
    image: '/images/service-mepf-consultancy.png',
    link: '/solutions/epc-mepf',
    specs: [
      { label: 'DISCIPLINE', value: 'M + E + P + F' },
      { label: 'FRAMEWORK', value: 'BIM Level 2' },
      { label: 'COMPLIANCE', value: 'NBC & IGBC' }
    ]
  },
  {
    id: 'epc-project-solutions',
    title: 'EPC Project Solutions',
    desc: 'Turnkey design-build electrical EPC with Class A License for government, PSU, and private projects.',
    icon: 'engineering',
    image: '/images/service-epc-solutions.png',
    link: '/solutions/epc-mepf',
    specs: [
      { label: 'LICENSE', value: 'Class A Electrical' },
      { label: 'CAPACITY', value: 'Up to 66kV Substations' },
      { label: 'EXECUTION', value: 'Turnkey Design-Build' }
    ]
  },
  {
    id: 'vertiv-partner',
    title: 'Vertiv Partner',
    desc: 'Authorised Vertiv Channel Partner supplying Liebert online UPS, DC systems, and thermal management units.',
    icon: 'verified',
    image: '/images/service-vertiv-partner.png',
    link: '/partners/vertiv',
    specs: [
      { label: 'PARTNERSHIP', value: 'Authorised Channel' },
      { label: 'SYSTEMS', value: 'UPS, DC, Thermal' },
      { label: 'ALIGNMENT', value: 'Engineering Supply' }
    ]
  },
  {
    id: 'capital-goods-supply',
    title: 'Capital Goods Supply',
    desc: 'Procurement & supply of switchgears, RMUs, CSS substations, cables, and transformers under consolidated PO.',
    icon: 'local_shipping',
    image: '/images/service-capital-goods.png',
    link: '/solutions/capital-goods',
    specs: [
      { label: 'BRANDS', value: 'Vertiv, L&T, Lucy Electric' },
      { label: 'CONSOLIDATION', value: 'Single PO Billing' },
      { label: 'OEM SUPPORT', value: 'Direct Factory Supply' }
    ]
  }
];

export function Services() {
  return (
    <section className="py-24 md:py-32 bg-surface relative overflow-hidden border-b border-outline-variant/30">
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
        
        {/* Header Block */}
        <div className="mb-16 md:mb-20 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
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
                Precision <br /> Solutions.
              </h2>
            </div>

            <p className="font-body text-[14px] md:text-[15px] text-secondary max-w-sm leading-relaxed text-left md:text-right">
              Delivering critical power, industrial ventilation, and cooling solutions for mission-critical sectors.
            </p>
          </div>
        </div>
        
        {/* Services 3-Column Single-Pixel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:border-t lg:border-l border-outline-variant/30">
          {SERVICES.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.25, 1, 0.5, 1] }}
              className="border lg:border-0 lg:border-r lg:border-b border-outline-variant/30 bg-surface flex flex-col justify-between group overflow-hidden relative"
            >
              {/* Overlay Link */}
              <Link to={srv.link} className="absolute inset-0 z-20" aria-label={`Explore ${srv.title}`} />
              
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col gap-6">
                
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
                      <span className="text-secondary/80 text-right font-medium max-w-[120px] sm:max-w-[150px] lg:max-w-none truncate">{spec.value}</span>
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
