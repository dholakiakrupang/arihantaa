import { motion } from 'framer-motion';

export function OurStory() {
  return (
    <section className="py-24 md:py-32 bg-surface overflow-hidden">
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjIzFc35WCu9a88tEE6NLkBo11OsGpGHbr6K5VT8d8DeXEAKQGBfMNQrDG7kVDoaTQ-D48xScJE2PHRCICOYol5h5aJFlvh4c-t-bC40CdqPqun55bXrwS354qWaVhhYqtqH3PbzP5E7jKBPTKmzP9REmTy0LvACgZ15QhVpPK4c3c74GEWJoYmrBkmH5PkzQ-0zXGneDOdan2f8sqIklAMWzsTBe3aSbcogmtoABjWVtM4lPVd82cHHbEM5M9GDerTNmf2Io2WnY"
                alt="Arihantaa team at work"
                className="w-full h-[420px] md:h-[520px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy" decoding="async"
              />
            </div>

            {/* Floating inset image */}
            <div className="absolute -bottom-8 -right-8 w-48 md:w-64 border-4 border-surface shadow-2xl overflow-hidden hidden md:block">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg7rBZUOD8vyQzqX-9ckm2CxVg9Q_nUG_deLFiaHjcLnyt3EwgE-8o0oK63jpFs2mq1crW8BkQ8I1qXQ-ZaRe3V-SB2z-0V--RrTzOdmvmELjRUqfBYYtL107PQMEnxOk3qEHfHkddMpD7MBfu6ybtY4kfcJEkO93zilPC0YjI7J0-4F2N_RL15Pu7oT4s06r7rsWTgtmjiuy2bKANJSHH4Uu9C7sgCo0wgzEBAH0cLGyb1CwtTTe-t9stbkbL25vVwmEfdBjBBS0"
                alt="Precision blueprints"
                className="w-full h-32 md:h-40 object-cover grayscale"
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
              Three Decades of Precision Engineering
            </h2>

            <motion.div className="h-[3px] w-16 bg-accent mb-7"
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.25 }}
              style={{ originX: 0 }} />

            <div className="space-y-5 mb-10">
              <p className="font-body text-[16px] leading-relaxed text-secondary">
                Founded in 1995, Arihantaa Powertech began as a vision to revolutionize the electrical engineering landscape. For nearly 30 years, we have scaled complex challenges, delivering over 500 projects that form the backbone of modern infrastructure.
              </p>
              <p className="font-body text-[15px] leading-relaxed text-secondary/80">
                Our journey from a local consultancy to a global engineering authority is built on the unwavering principles of technical integrity. We don't just build systems — we engineer legacies that sustain communities and power progress.
              </p>
            </div>

            {/* Key pillars */}
            <div className="grid grid-cols-2 gap-4">
              {['Technical Integrity', 'Global Expertise', 'Certified Excellence', 'Sustainability First'].map((pillar, i) => (
                <motion.div key={pillar}
                  className="flex items-center gap-2.5 group"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}>
                  <div className="w-5 h-5 bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                    <span className="material-symbols-outlined text-[12px] text-accent group-hover:text-on-primary transition-colors duration-300">check</span>
                  </div>
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
