import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ALLIANCES = [
  {
    title: 'Vertiv Channel Partner',
    role: 'AUTHORIZED CHANNEL PARTNER',
    desc: 'Official direct supply, factory-trained technical installation support, and OEM warranties across all Liebert UPS and thermal cooling cabinets.',
    link: '/partners/vertiv',
    badge: 'OEM AUTHORIZED',
    badgeColor: 'text-accent border-accent/30 bg-accent/5',
    details: ['Genuine Spare Parts', 'Liebert UPS Systems', 'Precision Thermal Systems']
  },
  {
    title: 'L&T Switchgear Panels',
    role: 'VIRTUAL JOINT VENTURE',
    desc: 'Supplying automatic power transfer switch panels and switchgears via our specialized JV with Synchro Electricals Pvt. Ltd.',
    link: '/products/lt-tta-panel',
    badge: 'STRATEGIC JV',
    badgeColor: 'text-white/60 border-white/10 bg-white/[0.02]',
    details: ['TTA-630 & TTA-1600 Panels', 'Synchro Electricals Alliance', 'IS/IEC Standards Compliant']
  },
  {
    title: 'Lucy Electric Supply',
    role: 'DIRECT BRAND SUPPLY',
    desc: 'Procurement channel supply routing for sealed, maintenance-free Ring Main Units (Sabre/Aegis RMUs) and Compact Secondary Substations.',
    link: '/products/lucy-rmu',
    badge: 'OFFICIAL SOURCE',
    badgeColor: 'text-white/60 border-white/10 bg-white/[0.02]',
    details: ['Sabre VRN2a Ring Main Unit', 'Compact Secondary Substation', 'Medium Voltage Switching']
  }
];

export function PartnershipShowcase() {
  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-[#080808] border-t border-white/10 overflow-hidden relative">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] max-w-[768px] max-h-[768px] pointer-events-none z-0" style={{
        background: 'radial-gradient(ellipse at top right, rgba(233,101,43,0.04) 0%, transparent 70%)',
        filter: 'blur(70px)',
      }} />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] max-w-[768px] max-h-[768px] pointer-events-none z-0" style={{
        background: 'radial-gradient(ellipse at bottom left, rgba(233,101,43,0.03) 0%, transparent 70%)',
        filter: 'blur(70px)',
      }} />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-16 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-16 md:mb-20">
          <div className="max-w-2xl">
            <motion.div 
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-px w-6 bg-accent" />
              <span className="font-label-caps text-[10px] text-accent tracking-[0.25em] uppercase font-bold">
                CREDENTIALS | OEM ALLIANCES
              </span>
            </motion.div>
            
            <h2 className="font-headline text-[30px] sm:text-[38px] md:text-[48px] lg:text-[60px] leading-[1.05] sm:leading-[1.0] font-black text-white tracking-tighter uppercase">
              Strategic Alliances.
            </h2>
          </div>
          <p className="font-body text-[13px] sm:text-[14px] md:text-[14.5px] text-white/50 max-w-sm leading-relaxed">
            We leverage direct manufacturer partnerships and joint ventures to secure official spare parts, certified commissioning, and statutory compliance.
          </p>
        </div>

        {/* 3-Column Equal-Height Single-Pixel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10 gap-0 bg-[#0a0a0a]">
          {ALLIANCES.map((alliance, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.25, 1, 0.5, 1] }}
              className={`border-r border-b border-white/10 bg-[#0a0a0a] hover:bg-accent/[0.008] transition-colors duration-300 flex flex-col justify-between group relative min-h-[300px] sm:min-h-[340px] lg:min-h-[380px] ${
                idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Entire Card Clickable Link */}
              <Link to={alliance.link} className="absolute inset-0 z-20" />
              
              <div className="p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between h-full flex-grow">
                
                {/* Upper Content */}
                <div className="space-y-5">
                  {/* Badges */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className={`border px-2 py-0.5 text-center font-label-caps text-[8px] tracking-widest font-bold self-start ${alliance.badgeColor}`}>
                      {alliance.badge}
                    </span>
                    <span className="font-mono text-[8.5px] text-white/30 uppercase tracking-wider">{alliance.role}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-headline text-[18px] sm:text-[20px] md:text-[22px] font-black text-white leading-tight uppercase group-hover:text-accent transition-colors duration-300">
                    {alliance.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-[12px] sm:text-[13px] lg:text-[13.5px] leading-relaxed text-white/50">
                    {alliance.desc}
                  </p>
                </div>

                {/* Lower Content */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/5 space-y-3 sm:space-y-4">
                  {/* Specs / Details */}
                  <div className="space-y-2">
                    {alliance.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-[11px] text-white/40">
                        <span className="w-1.5 h-1.5 bg-accent mt-[5px] shrink-0" />
                        <span className="leading-snug">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Arrow Link block */}
                  <div className="flex items-center justify-between font-label-caps text-[9px] tracking-[0.2em] text-accent font-bold group-hover:text-accent/80 transition-colors duration-300 pt-2">
                    <span>EXPLORE ALLIANCE</span>
                    <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1.5 transition-transform duration-300">
                      arrow_forward
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
