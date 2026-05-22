import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

const TENETS = [
  {
    num: "01",
    title: "RIGOR",
    desc: "Unyielding precision in systems configuration, validation, and execution."
  },
  {
    num: "02",
    title: "RESILIENCY",
    desc: "Building N+1 and 2N redundant architectures that guarantee business continuity."
  },
  {
    num: "03",
    title: "SUSTAINABILITY",
    desc: "Integrating liquid cooling and energy-efficient strategies for modern PUE targets."
  }
];

export function Philosophy() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 bg-surface overflow-hidden border-b border-outline-variant/30">
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* ── Left Column: Premium Photo (5 cols) ── */}
          <div className="lg:col-span-5 relative w-full aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] max-h-[640px] border border-outline-variant/30 overflow-hidden bg-surface-container-low">
            {/* Scroll Parallax Raw Image */}
            <motion.img 
              style={{ y: yImage, scale: 1.2 }}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-125" 
              alt="Engineering Defined by Rigor" 
              src="/images/philosophy-rigor.png"
            />
          </div>
          
          {/* ── Right Column: Editorial & Tenets Grid (7 cols) ── */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Header */}
            <div>
              <motion.div 
                className="flex items-center gap-3 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
              >
                <div className="h-px w-6 bg-accent" />
                <span className="font-label-caps text-[10px] text-accent tracking-[0.25em] uppercase font-bold">
                  PHILOSOPHY | OPERATION METHOD
                </span>
              </motion.div>

              <motion.h2 
                className="font-headline text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.0] font-black text-on-surface tracking-tighter uppercase"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
              >
                Engineering <br />
                Defined by <span className="text-accent">Rigor.</span>
              </motion.h2>
            </div>

            {/* Description Paragraph */}
            <motion.p 
              className="font-body text-[15px] md:text-[16px] leading-relaxed text-secondary max-w-xl"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              We maximize the benefits of engineering projects by considering the intricate connections they have with the world around them. By working to enhance economic, environmental, and social outcomes, we deliver transformational improvements for critical infrastructure.
            </motion.p>

            {/* Tenets Single-Pixel Table */}
            <motion.div 
              className="border-t border-outline-variant/30 flex flex-col"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {TENETS.map((t, idx) => (
                <div 
                  key={idx}
                  className="border-b border-outline-variant/30 py-4 flex items-start gap-6 group hover:bg-accent/[0.005] transition-colors duration-300"
                >
                  <span className="font-mono text-[14px] text-accent/60 font-bold pt-0.5">{t.num}</span>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 flex-grow">
                    <span className="font-label-caps text-[11px] font-bold text-on-surface tracking-widest sm:w-1/4 uppercase">
                      {t.title}
                    </span>
                    <span className="font-body text-[13px] text-secondary/80 sm:w-3/4">
                      {t.desc}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Link to="/about">
                <Button 
                  variant="outline"
                  size="lg"
                  className="rounded-none font-bold text-[10px] tracking-[0.2em]"
                >
                  READ OUR IMPACT STORY
                </Button>
              </Link>
            </motion.div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
