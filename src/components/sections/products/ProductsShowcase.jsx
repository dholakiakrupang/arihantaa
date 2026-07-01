import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button';

const FEATURED_PRODUCTS = [
  {
    id: 'vertiv-liebert-exl-s1-ups',
    categoryId: 'ups',
    title: 'Vertiv™ Liebert® EXL S1 UPS',
    category: 'CRITICAL POWER CONTINUITY',
    desc: 'Monolithic double-conversion online UPS system engineered for high-density compute, data centers, and healthcare environments.',
    image: 'https://www.vertiv.com/49841c/globalassets/products/critical-power/uninterruptible-power-supplies-ups/vertiv-liebert-exl-s1-ups/cp-ups-na-508x635-42362-exl-s1-ups.jpg',
    stats: [
      { label: 'CAPACITY', value: '300-1200 kW' },
      { label: 'EFFICIENCY', value: 'Up to 99%' },
      { label: 'VOLTAGE', value: '400V 3-Phase' }
    ]
  },
  {
    id: 'synchro-pcc',
    categoryId: 'lt-tta-panel',
    title: 'PCC Panel (Power Control Centre)',
    category: 'INDUSTRIAL POWER DISTRIBUTION',
    desc: 'Main power control centre panels engineered for safe and centralized power distribution in industrial plants, featuring robust busbars and reliable switchgear.',
    image: '/images/products/synchro/pcc.jpg',
    stats: [
      { label: 'VOLTAGE', value: 'Up to 690V' },
      { label: 'JV SUPPLY', value: 'Synchro Electricals' },
      { label: 'STANDARDS', value: 'IS/IEC Compliant' }
    ]
  },
  {
    id: 'lucy-sabre-vrn2a',
    categoryId: 'lucy-rmu',
    title: 'Lucy Sabre VRN2a RMU',
    category: 'MEDIUM VOLTAGE SWITCHGEAR',
    desc: 'Sealed, maintenance-free medium voltage Ring Main Unit switchgear board for smart, safe power distribution grids.',
    image: '/images/products/Products-LUCY-BRAND-RMU.png',
    stats: [
      { label: 'VOLTAGE RANGE', value: '11 kV' },
      { label: 'INSULATION', value: 'SF6 Gas' },
      { label: 'COMPLIANCE', value: 'IEC 62271-200' }
    ]
  }
];

export function ProductsShowcase() {
  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 bg-surface border-b border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-16">
        
        {/* Asymmetric Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-end mb-12 sm:mb-16 md:mb-20">
          <div className="lg:col-span-8">
            <motion.div 
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-px w-6 bg-accent" />
              <span className="font-label-caps text-[10px] text-accent tracking-[0.25em] uppercase font-bold">
                ENGINEERED SOLUTIONS | CAPITAL SUPPLY
              </span>
            </motion.div>
            
            <h2 className="font-headline text-[30px] sm:text-[38px] md:text-[48px] lg:text-[60px] leading-[1.05] sm:leading-[1.0] font-black text-on-surface tracking-tighter uppercase">
              Capital Goods.
            </h2>
          </div>
          
          <div className="lg:col-span-4 lg:text-right">
            <Link to="/products">
              <Button 
                variant="outline" 
                className="border-outline-variant font-bold text-[10px] tracking-[0.2em]"
              >
                BROWSE FULL CATALOG
              </Button>
            </Link>
          </div>
        </div>

        {/* Stacked Asymmetric Layout */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
          {FEATURED_PRODUCTS.map((prod, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                className={`border border-outline-variant/30 bg-surface flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-0 overflow-hidden`}
              >
                {/* Visual Image Box */}
                <div className="w-full lg:w-[55%] aspect-[16/9] sm:aspect-[16/10] overflow-hidden bg-surface-container-low relative group">
                  <Link to={`/products/${prod.categoryId}/${prod.id}`} className="absolute inset-0 z-10" />
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="w-full h-full object-cover transition-transform duration-[1000ms] group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = '/images/project-industrial.png';
                    }}
                  />
                </div>

                {/* Content & Metadata Table */}
                <div className="w-full lg:w-[45%] flex flex-col justify-between p-5 sm:p-6 md:p-10">
                  <div>
                    {/* Category */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 bg-accent" />
                      <span className="font-label-caps text-[9px] text-accent tracking-widest font-bold uppercase">
                        {prod.category}
                      </span>
                    </div>

                    {/* Title */}
                    <Link 
                      to={`/products/${prod.categoryId}/${prod.id}`}
                      className="font-headline text-[20px] sm:text-[24px] md:text-[30px] font-black text-on-surface hover:text-accent transition-colors duration-300 leading-tight uppercase block mb-2 sm:mb-3"
                    >
                      {prod.title}
                    </Link>

                    {/* Description */}
                    <p className="font-body text-[12px] sm:text-[13px] md:text-[14px] text-secondary leading-relaxed mb-4 sm:mb-5 line-clamp-3">
                      {prod.desc}
                    </p>

                    {/* Specifications Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 border border-outline-variant/30 mb-4 sm:mb-5">
                      {prod.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="p-2.5 sm:p-3 flex flex-row sm:flex-col justify-between sm:justify-start gap-1 sm:gap-2 border-b sm:border-b-0 sm:border-r border-outline-variant/30 last:border-0">
                          <span className="font-label-caps text-[7.5px] sm:text-[8px] text-secondary/40 tracking-wider uppercase">
                            {stat.label}
                          </span>
                          <span className="font-body text-[12px] sm:text-[12px] font-bold text-on-surface text-right sm:text-left">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA link */}
                  <div>
                    <Link to={`/products/${prod.categoryId}/${prod.id}`}>
                      <Button 
                        variant="outline" 
                        className="rounded-none font-bold text-[10px] tracking-[0.2em] w-full sm:w-auto hover:text-accent hover:border-accent"
                      >
                        TECHNICAL SPECIFICATIONS
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
