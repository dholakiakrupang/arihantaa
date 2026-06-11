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
        
        <div className="grid grid-cols-1 md:grid-cols-12 border-t border-l border-outline-variant/30 gap-0 mt-12">
          
          {/* Anish Shah — Founder & CEO */}
          <motion.div
            className="md:col-span-12 lg:col-span-8 border-r border-b border-outline-variant/30 p-6 md:p-8 lg:p-12 hover:bg-accent/[0.01] transition-all duration-300 flex flex-col lg:flex-row gap-6 lg:gap-10 items-start bg-surface rounded-none"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
          >
            {/* Photo placeholder */}
            <div className="w-full sm:w-[200px] shrink-0 aspect-[3/4] overflow-hidden transition-all duration-700 border border-outline-variant/20 bg-surface-container-low relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-surface-container to-accent/5 flex items-center justify-center">
                <span className="material-symbols-outlined text-accent/40 text-[64px]">person</span>
              </div>
              {/* Photo placeholder text */}
              <div className="absolute bottom-0 left-0 right-0 bg-inverse-surface/90 backdrop-blur-sm px-3 py-2">
                <span className="font-label-caps text-[8px] text-white/60 tracking-[0.15em] uppercase">Photo pending</span>
              </div>
            </div>

            <div className="flex-1 pt-2">
              <h4 className="font-headline text-2xl md:text-3xl font-bold mb-1 text-on-surface">Anish Shah</h4>
              <p className="font-label-caps text-[11px] text-accent tracking-[0.15em] uppercase mb-5">Founder & CEO, Arihantaa Powertech</p>
              <p className="text-sm md:text-[15px] text-secondary leading-relaxed mb-6">
                Anish Shah is the Founder & CEO of Arihantaa Powertech. With a strong foundation in electrical infrastructure and a vision for integrated engineering solutions, Anish established Arihantaa Powertech to address the growing demand for reliable, end-to-end powertech services in India. He leads the company's strategic alliances, project delivery, and expansion across MEPF consultancy and power distribution sectors — anchored by the ethos of engineering excellence and trusted partnerships.
              </p>
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-6 bg-accent" />
                <span className="font-label-caps text-[10px] text-accent tracking-[0.18em] uppercase font-bold">From Grid to Greatness</span>
              </div>
            </div>
          </motion.div>

          {/* Credential side panel */}
          <motion.div
            className="md:col-span-12 lg:col-span-4 border-r border-b border-outline-variant/30 p-6 md:p-8 lg:p-10 bg-surface hover:bg-accent/[0.01] transition-all duration-300 flex flex-col justify-between rounded-none"
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
