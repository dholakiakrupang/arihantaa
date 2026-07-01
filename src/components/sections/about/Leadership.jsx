import { motion } from 'framer-motion';

export function Leadership() {
  return (
    <section className="py-16 md:py-24 bg-surface-container">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-[2px] w-8 bg-accent" />
          <span className="font-label-caps text-[11px] text-accent tracking-[0.22em] uppercase">Leadership</span>
        </div>
        <h2 className="font-headline text-4xl md:text-6xl font-bold mb-16">Leadership</h2>
        
        <div className="grid grid-cols-1 xl:grid-cols-12 border-t border-l border-outline-variant/30 gap-0 mt-12">
          
          {/* Anish Shah — Founder & CEO */}
          <motion.div
            className="col-span-12 xl:col-span-8 border-r border-b border-outline-variant/30 p-6 md:p-8 lg:p-12 hover:bg-accent/[0.01] transition-all duration-300 flex flex-col md:flex-row gap-6 md:gap-10 items-start bg-surface rounded-none"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
          >
            {/* Premium Photo placeholder */}
            <div className="w-full sm:w-[200px] shrink-0 aspect-[3/4] overflow-hidden border border-outline-variant/30 bg-surface-container-high relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/15 via-surface-container-high to-accent/5 flex flex-col items-center justify-center p-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-500">
                  <span className="text-accent font-headline font-black text-xl">AS</span>
                </div>
                <span className="font-label-caps text-[9px] text-on-surface/40 tracking-[0.1em] uppercase">Executive Profile</span>
              </div>
              {/* Photo pending label */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#080808]/90 backdrop-blur-md px-3 py-2 border-t border-white/5">
                <span className="font-label-caps text-[8px] text-accent tracking-[0.15em] uppercase font-bold block text-center">Photo pending</span>
              </div>
            </div>

            <div className="flex-1 pt-2">
              <h4 className="font-headline text-2xl md:text-3xl font-bold mb-1 text-on-surface">Anish Shah</h4>
              <p className="font-label-caps text-[11px] text-accent tracking-[0.15em] uppercase mb-5">Founder & CEO, Arihantaa Powertech</p>
              <p className="text-sm md:text-[15px] text-secondary leading-relaxed mb-6">
                Anish Shah is the Founder & CEO of Arihantaa Powertech. With a strong foundation in electrical infrastructure and a vision for integrated engineering solutions, Anish established Arihantaa Powertech to address the growing demand for reliable, end-to-end powertech services in India. He leads the company's strategic alliances, project delivery, and expansion across MEPF consultancy, capital goods supply, and EPC project execution — anchored by the ethos of engineering excellence and trusted partnerships.
              </p>
              <div className="mt-6 pt-4 border-t border-outline-variant/10 flex items-center gap-3">
                <div className="h-[2px] w-6 bg-accent" />
                <span className="font-body text-xs italic text-accent font-medium">"From Grid to Greatness"</span>
              </div>
            </div>
          </motion.div>

          {/* Credential side panel */}
          <motion.div
            className="col-span-12 xl:col-span-4 border-r border-b border-outline-variant/30 p-6 md:p-8 lg:p-10 bg-surface hover:bg-accent/[0.01] transition-all duration-300 flex flex-col justify-between rounded-none"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          >
            <div>
              <span className="material-symbols-outlined text-accent text-[36px] mb-6 block">verified</span>
              <h4 className="font-headline text-[17px] font-bold text-on-surface mb-3">Vision & Mission</h4>
              <p className="font-body text-[13px] text-secondary leading-relaxed">
                Building India's power infrastructure with precision and purpose — bridging the gap between quality electrical infrastructure products and smart, sustainable building engineering services.
              </p>
            </div>
            <div className="h-[2px] w-0 bg-accent mt-8 group-hover:w-full transition-all duration-500" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
