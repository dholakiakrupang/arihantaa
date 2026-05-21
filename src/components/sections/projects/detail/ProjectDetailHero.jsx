import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../../../ui/Button';

export function ProjectDetailHero({ project }) {
  if (!project) return null;

  const { title, hero } = project;
  const { tag, titleLines, desc, metaData } = hero;

  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="w-full px-6 md:px-12 lg:px-20 py-4 bg-surface border-b border-outline-variant/30">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center gap-2 font-label-caps text-[10px] tracking-[0.2em] text-secondary uppercase">
          <Link to="/" className="hover:text-on-surface transition-colors">Home</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <Link to="/projects" className="hover:text-on-surface transition-colors">Projects</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-accent">{title}</span>
        </div>
      </div>

      {/* ── Hero Content ── */}
      <section className="relative w-full bg-inverse-surface text-white px-6 md:px-12 lg:px-20 pt-20 pb-16 border-b border-accent">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-12">
          
          {/* Left Column (65%) */}
          <div className="w-full lg:w-[65%] flex flex-col justify-start">
            <motion.div 
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="w-6 h-[2px] bg-accent" />
              <span className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase font-bold">
                {tag}
              </span>
            </motion.div>

            <h1 className="font-headline font-black text-[40px] md:text-[56px] lg:text-[68px] xl:text-[76px] leading-[0.98] tracking-tighter uppercase mb-8">
              {titleLines.map((line, i) => (
                <div key={i} className="overflow-hidden block pb-2">
                  <motion.span
                    className="block text-white"
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease: [0.25, 1, 0.5, 1] }}
                  >
                    {line}
                  </motion.span>
                </div>
              ))}
            </h1>

            <motion.p 
              className="font-body text-[16px] md:text-[18px] text-white/60 max-w-2xl leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
            >
              {desc}
            </motion.p>
          </div>

          {/* Right Column (35%) */}
          <motion.div 
            className="w-full lg:w-[35%] bg-surface-container-highest/10 border border-white/10 p-8 lg:p-10 flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="flex flex-col mb-10">
              {metaData.map((item, i) => (
                <div key={i} className="flex justify-between items-start py-3.5 border-b border-white/10 last:border-0 group">
                  <span className="font-label-caps text-[9px] text-white/40 tracking-[0.2em] uppercase w-1/3 pt-1 group-hover:text-accent transition-colors">
                    {item.label}
                  </span>
                  <span className="font-body text-[14px] text-white text-right w-2/3 leading-snug">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col mt-4">
              <Button 
                variant="primary" 
                theme="dark" 
                size="lg" 
                icon="download"
                iconPosition="left"
                className="w-full justify-center shadow-2xl shadow-accent/20"
              >
                DOWNLOAD FULL BRIEF .PDF
              </Button>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
