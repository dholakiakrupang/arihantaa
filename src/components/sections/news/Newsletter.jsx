import { motion } from 'framer-motion';

export function Newsletter() {
  return (
    <section className="bg-surface-container-low border-t border-outline-variant/40 py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ── Left Content ────────────────────────────────────────────── */}
          <div className="lg:col-span-5">
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}
            >
              <div className="h-[2px] w-8 bg-accent" />
              <span className="font-label-caps text-[11px] text-accent tracking-[0.25em] uppercase">Briefings</span>
            </motion.div>

            <motion.h2 
              className="font-headline text-[38px] md:text-[56px] leading-tight font-black text-on-surface mb-6 tracking-tighter"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay: 0.1 }}
            >
              Stay Synchronized.
            </motion.h2>

            <motion.p 
              className="font-body text-[16px] text-secondary leading-relaxed md:pr-8"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay: 0.2 }}
            >
              Receive highly technical briefings, project milestones, and industry analysis directly to your inbox. Configured exclusively for engineering professionals.
            </motion.p>
          </div>

          {/* ── Right Form ──────────────────────────────────────────────── */}
          <div className="lg:col-span-7 relative">
            {/* Accent border top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
            
            <motion.div 
              className="bg-surface p-8 md:p-12 shadow-2xl border border-outline-variant/30"
              initial={{ opacity: 0, scale: 0.98, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay: 0.2 }}
            >
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                
                {/* Interest Sectors */}
                <div>
                  <label className="block font-label-caps text-[10px] text-on-surface mb-4 uppercase tracking-[0.2em]">Select Interest Sectors</label>
                  <div className="flex flex-wrap gap-3">
                    {['Renewables', 'Heavy Industry', 'Grid Tech', 'Civil Eng'].map((sector, i) => (
                      <label key={sector} className="cursor-pointer group">
                        <input type="checkbox" className="peer sr-only" defaultChecked={i === 0 || i === 2} />
                        <span className="inline-block px-6 py-3 border border-outline-variant/60 text-secondary bg-surface peer-checked:bg-accent peer-checked:text-on-primary peer-checked:border-accent transition-all duration-300 font-label-caps text-[10px] uppercase tracking-[0.18em] group-hover:border-accent">
                          {sector}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Email Input */}
                <div className="flex flex-col sm:flex-row group border border-outline-variant/60 focus-within:border-accent transition-colors duration-300 bg-surface-container-lowest">
                  <input 
                    type="email" 
                    placeholder="Corporate Email Address" 
                    required 
                    className="flex-grow bg-transparent px-6 py-4 md:py-5 text-[15px] font-body text-on-surface placeholder:text-secondary/50 focus:outline-none"
                  />
                  <button 
                    type="submit" 
                    className="bg-on-surface text-surface px-8 md:px-12 py-4 md:py-5 font-label-caps text-[11px] tracking-[0.2em] uppercase hover:bg-accent hover:text-on-primary transition-colors duration-300 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
                
                <p className="font-body text-[12px] text-secondary/60">
                  By subscribing, you agree to our <a href="#" className="underline hover:text-accent transition-colors">Privacy Policy</a>. We strictly protect your corporate data.
                </p>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
