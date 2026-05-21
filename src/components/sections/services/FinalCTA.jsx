import { motion } from 'framer-motion';
import { Button } from '../../ui/Button';

export function FinalCTA() {
  return (
    <section className="relative py-32 md:py-48 px-8 md:px-16 lg:px-24 bg-surface-container-lowest overflow-hidden">
      
      {/* Structural Top & Bottom Borders */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-outline-variant to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-outline-variant to-transparent opacity-30" />
      
      {/* Massive Background Typography Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none">
        <span className="font-headline font-black text-[120px] md:text-[220px] lg:text-[320px] text-surface-container-highest/40 tracking-tighter leading-none whitespace-nowrap">
          ENGINEER
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        
        {/* Left: Massive Statement */}
        <div className="lg:col-span-8">
          <motion.div 
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="w-12 h-[2px] bg-accent" />
            <span className="font-label-caps text-[11px] text-accent tracking-[0.3em] font-bold uppercase">
              Ready to Innovate
            </span>
          </motion.div>
          
          <motion.h2 
            className="font-headline font-black text-[50px] md:text-[72px] lg:text-[84px] xl:text-[96px] leading-[0.95] text-on-surface tracking-tighter uppercase"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          >
            Partner with <br />
            Engineering <br />
            <span className="text-accent">Experts.</span>
          </motion.h2>
        </div>

        {/* Right: Context & Action */}
        <div className="lg:col-span-4 flex flex-col items-start text-left border-t lg:border-t-0 lg:border-l border-outline-variant/60 pt-10 lg:pt-0 lg:pl-12 lg:py-8">
          <motion.p 
            className="font-body text-[16px] md:text-[18px] text-secondary leading-relaxed mb-10 max-w-sm"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          >
            Discuss your infrastructure requirements with our specialist engineering teams today. We deliver turnkey solutions designed for resilience, efficiency, and scale.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="w-full sm:w-auto"
          >
            <Button to="/contact" variant="primary" theme="light" size="lg" className="w-full sm:w-auto shadow-2xl shadow-accent/20">
              CONSULT AN EXPERT
            </Button>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
