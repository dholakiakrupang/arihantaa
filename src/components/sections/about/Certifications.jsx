import { motion } from 'framer-motion';
import { Reveal } from '../../ui/Reveal';

export function Certifications() {
  return (
    <section className="py-16 md:py-24 bg-inverse-surface">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        <Reveal>
          <h3 className="font-headline text-3xl md:text-5xl font-bold text-white max-w-xl">
            Certified Excellence in Global Engineering.
          </h3>
        </Reveal>
        
        <div className="grid grid-cols-2 border-t border-l border-white/10 w-full lg:w-auto gap-0">
          <motion.div 
            className="p-8 border-r border-b border-white/10 bg-white/[0.02] text-center hover:bg-white/[0.04] transition-colors duration-300 rounded-none min-w-[150px] sm:min-w-[200px]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="material-symbols-outlined text-[40px] text-accent mb-4 block">workspace_premium</span>
            <p className="eyebrow !text-white !mb-1 text-sm md:text-base">ISO 9001:2015</p>
            <p className="text-[10px] text-white/40 uppercase tracking-tighter">Quality Systems</p>
          </motion.div>
          
          <motion.div 
            className="p-8 border-r border-b border-white/10 bg-white/[0.02] text-center hover:bg-white/[0.04] transition-colors duration-300 rounded-none min-w-[150px] sm:min-w-[200px]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <span className="material-symbols-outlined text-[40px] text-accent mb-4 block">gavel</span>
            <p className="eyebrow !text-white !mb-1 text-sm md:text-base">Class 'A'</p>
            <p className="text-[10px] text-white/40 uppercase tracking-tighter">Electrical Contractor</p>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
