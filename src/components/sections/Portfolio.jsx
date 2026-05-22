import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

const PROJECTS = [
  {
    id: 'fp2',
    title: 'Rajkot Greenfield Airport',
    category: 'AVIATION INFRASTRUCTURE',
    desc: 'Critical grid synchronization and backup systems for mission-critical runway systems.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkInl42zXNVIWA3ZfUuLsDnIl_Ac_MEGuhYLB10fp4tWFh1fQP6rta5kamJqlrOt3FSvbsYoxlZglkQQMtcqHd-wA-AC8aLpRMLkoWJeEKtOCRQrkqKeCZFw0BxvyVyfrld13toSWIdAtZDTEIbIqAhgDvdWDM8_laDGE3P0avilUwYRJXRsnmyaRFLlYzbvlzT3uYHZuFwM7TuUPjdhsZnZA92fSj8IUkG0gTJC2GJfPW45wQktfElrSVCd7ZXZvLbzxezeOXSG8',
    stats: [
      { label: 'CLIENT', value: 'AAI / Aviation Board' },
      { label: 'VALUE', value: '₹63.62 Cr' },
      { label: 'STATUS', value: 'Completed' }
    ]
  },
  {
    id: 'fp1',
    title: 'Haridwar Medical Campus',
    category: 'HEALTHCARE ENGINEERING',
    desc: 'Life-support systems resilience and robust electrical architecture for emergency wings.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpihFLVV6wKn7670_6DmS7XNcVvlUyfjsT-s_HBNkBsozyGH4bMXeqGtQMNH7bMwqYu3TRcPMbaKV1EIXVhUub8-x6ccuHneZBe1fVt5PQ9xJD_LkFYz8dr2kJMzpfCX6neBbnM80KdnfuZaNg6Arb0prKpuGcBZfP5pnvtJ4aCYlRYpfJ1Xt4e3x08a7odv3_ryQJtYfOSZLLsK6uVp-xkmkcBpRa77HgT-4vVU2E1ftV0g2pFbseFqv4x1-8o879ciIClYNFeFY',
    stats: [
      { label: 'CLIENT', value: 'State Health Authority' },
      { label: 'VALUE', value: '₹97.53 Cr' },
      { label: 'STATUS', value: 'Completed' }
    ]
  }
];

export function Portfolio() {
  return (
    <section className="py-24 md:py-32 bg-surface border-b border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Asymmetric Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 md:mb-20">
          <div className="lg:col-span-8">
            <motion.div 
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-px w-6 bg-accent" />
              <span className="font-label-caps text-[10px] text-accent tracking-[0.25em] uppercase font-bold">
                LANDMARKS | GLOBAL SCALE
              </span>
            </motion.div>
            
            <h2 className="font-headline text-[38px] sm:text-[48px] lg:text-[60px] leading-[1.0] font-black text-on-surface tracking-tighter uppercase">
              Featured Work.
            </h2>
          </div>
          
          <div className="lg:col-span-4 lg:text-right">
            <Link to="/projects">
              <Button 
                variant="outline" 
                className="border-outline-variant font-bold text-[10px] tracking-[0.2em]"
              >
                VIEW FULL PORTFOLIO
              </Button>
            </Link>
          </div>
        </div>

        {/* Stacked Asymmetric Layout */}
        <div className="flex flex-col gap-10">
          {PROJECTS.map((proj, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                className={`border border-outline-variant/30 bg-surface flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-0 overflow-hidden`}
              >
                {/* Visual Image Box with Zoom (60% width on desktop) */}
                <div className="w-full lg:w-[55%] aspect-[16/10] overflow-hidden bg-surface-container-low relative group">
                  <Link to={`/projects/${proj.id}`} className="absolute inset-0 z-10" />
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-[1000ms] group-hover:scale-105"
                  />
                </div>

                {/* Content & Metadata Table (45% width on desktop) */}
                <div className="w-full lg:w-[45%] flex flex-col justify-between p-8 md:p-10">
                  <div>
                    {/* Category */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1.5 h-1.5 bg-accent" />
                      <span className="font-label-caps text-[9px] text-accent tracking-widest font-bold uppercase">
                        {proj.category}
                      </span>
                    </div>

                    {/* Title */}
                    <Link 
                      to={`/projects/${proj.id}`} 
                      className="font-headline text-[24px] md:text-[30px] font-black text-on-surface hover:text-accent transition-colors duration-300 leading-tight uppercase block mb-4"
                    >
                      {proj.title}
                    </Link>

                    {/* Description */}
                    <p className="font-body text-[14px] text-secondary leading-relaxed mb-6">
                      {proj.desc}
                    </p>

                    {/* Specifications Grid Table */}
                    <div className="border-t border-l border-outline-variant/30 grid grid-cols-3 mb-6">
                      {proj.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="border-r border-b border-outline-variant/30 p-3 flex flex-col justify-between">
                          <span className="font-label-caps text-[8px] text-secondary/40 tracking-wider uppercase block mb-1">
                            {stat.label}
                          </span>
                          <span className="font-body text-[12px] font-bold text-on-surface truncate">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA link */}
                  <div>
                    <Link to={`/projects/${proj.id}`}>
                      <Button 
                        variant="outline" 
                        className="rounded-none font-bold text-[10px] tracking-[0.2em] w-full sm:w-auto hover:text-accent hover:border-accent"
                      >
                        VIEW DETAILS
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
