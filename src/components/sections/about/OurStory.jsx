import { motion } from 'framer-motion';

export function OurStory() {
  return (
    <section className="py-16 md:py-24 bg-surface overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">

          {/* ── Image stack ──────────────────────────────────────────── */}
          <motion.div
            className="w-full md:w-[45%] relative flex-shrink-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          >
            {/* Corner brackets */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-[3px] border-l-[3px] border-accent z-10" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-[3px] border-r-[3px] border-accent z-10" />

            <div className="overflow-hidden">
              <img
                src="/images/project-industrial.png"
                alt="Arihantaa engineering team at work"
                className="w-full h-[420px] md:h-[520px] object-cover transition-all duration-700"
                loading="lazy" decoding="async"
              />
            </div>

            {/* Floating inset image */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 w-36 sm:w-48 md:w-64 border-4 border-surface shadow-2xl overflow-hidden block">
              <img
                src="/images/project-data-center.png"
                alt="Data center infrastructure"
                className="w-full h-24 sm:h-32 md:h-40 object-cover transition-all duration-700"
                loading="lazy" decoding="async"
              />
            </div>
          </motion.div>

          {/* ── Content ──────────────────────────────────────────────── */}
          <motion.div
            className="w-full md:flex-1 mt-10 md:mt-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[2px] w-8 bg-accent" />
              <span className="font-label-caps text-[11px] text-accent tracking-[0.22em] uppercase">Our Story</span>
            </div>

            <h2 className="font-headline text-[34px] md:text-[50px] leading-[1.05] font-black tracking-tighter text-on-surface mb-5">
              Who We Are
            </h2>

            <motion.div className="h-[3px] w-16 bg-accent mb-7"
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.25 }}
              style={{ originX: 0 }} />

            <div className="space-y-5 mb-10">
              <p className="font-body text-[16px] leading-relaxed text-secondary">
                Founded and headquartered in Ahmedabad, Gujarat, Arihantaa Powertech was built on a singular belief — that India's infrastructure deserves engineering partners who combine technical depth with execution integrity.
              </p>
              <p className="font-body text-[15px] leading-relaxed text-secondary/80">
                From complex power distribution systems to integrated building services, we bring together the right brands, the right partnerships, and the right expertise to deliver projects that stand the test of time. We are not just a supplier or a consultant — we are a full-spectrum powertech company, bridging the gap between quality electrical infrastructure products and smart, sustainable building engineering services.
              </p>
              <p className="font-body text-[15px] leading-relaxed text-secondary/80 italic">
                Our philosophy is simple: every grid we strengthen, every building we service, and every project we deliver is a step from Grid to Greatness.
              </p>
            </div>

            {/* Key pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-outline-variant/30 gap-0">
              {['Technical Integrity', 'Pan-India Expertise', 'Certified Excellence', 'Sustainability First'].map((pillar, i) => (
                <motion.div key={pillar}
                  className="border-r border-b border-outline-variant/30 p-3.5 flex items-center gap-3.5 hover:bg-accent/[0.015] transition-all duration-300 group"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
                >
                  <span className="material-symbols-outlined text-[18px] text-accent group-hover:scale-110 transition-transform duration-300">check</span>
                  <span className="font-body text-[13px] font-semibold text-on-surface/80">{pillar}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
