import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export function Philosophy() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 bg-surface overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 pointer-events-none select-none z-0">
        <span className="text-[200px] md:text-[300px] font-headline font-black text-outline-variant/20 leading-none tracking-tighter uppercase whitespace-nowrap">
          RIGOR
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* ── Image Side ──────────────────────────────────────────────── */}
        <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px]">
          {/* Accent corner bracket top-left */}
          <motion.div 
            className="absolute top-0 left-0 w-12 h-12 border-t-[4px] border-l-[4px] border-accent z-20"
            initial={{ opacity: 0, x: -20, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
          {/* Accent corner bracket bottom-right */}
          <motion.div 
            className="absolute bottom-0 right-0 w-12 h-12 border-b-[4px] border-r-[4px] border-accent z-20"
            initial={{ opacity: 0, x: 20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          <div className="absolute inset-4 md:inset-6 overflow-hidden bg-surface-container-low shadow-2xl">
            <motion.img 
              style={{ y: yImage, scale: 1.15 }}
              className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000" 
              alt="Engineering Defined by Rigor" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZe-CW38ZCZsbHjngWLUSfHW2T07R-V9uyQGo-8a8mLrsk8ZLB_fBc_kw3NqoxDwUV9-zBbMqsINg4-q9SNKBdeea2VCdrVhi7UecdP1CBQKjRO3ZohnWncrqBnSgnIJ_MjGLBdPR5Tai3PA_Qqq1nFQDjycUNEGaO-BPvHionFnlJeVCVwcPQyGdwH8iGXM1nEHGAn4oCVjisU3ZbVbiIC4MenAeYu-cywIHwUhkwaOgVtOFXagPpIkQ3jIsXjnW5wEeDcsCplgQ"
            />
          </div>
        </div>
        
        {/* ── Content Side ────────────────────────────────────────────── */}
        <div className="w-full lg:w-1/2 pt-8 lg:pt-0">
          <motion.div 
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-[2px] w-8 bg-accent" />
            <span className="font-label-caps text-[11px] text-accent tracking-[0.25em] uppercase">Our Philosophy</span>
          </motion.div>

          <motion.h2 
            className="font-headline text-[40px] md:text-[56px] lg:text-[72px] leading-[1.0] font-black text-on-surface tracking-tighter mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          >
            Engineering <br className="hidden lg:block"/>
            Defined by <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">Rigor.</span>
          </motion.h2>

          <motion.p 
            className="font-body text-[16px] md:text-[18px] leading-relaxed text-secondary mb-10 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          >
            We maximize the benefits of engineering projects by considering the intricate connections they have with the world around them. By working to enhance economic, environmental, and social outcomes, we deliver transformational improvements for critical infrastructure.
          </motion.p>

          <Link to="/about">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            >
              <Button 
                variant="outline"
                size="lg"
                className="rounded-none font-bold"
              >
                READ OUR IMPACT STORY
              </Button>
            </motion.div>
          </Link>
        </div>
        
      </div>
    </section>
  );
}
