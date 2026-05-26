import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../../../ui/Button';

export function ProjectDetailHero({ project }) {
  if (!project) return null;

  const { title, hero } = project;
  const { tag, titleLines, desc, metaData } = hero;

  return (
    <section
      className="relative w-full bg-[#080808] overflow-hidden flex flex-col justify-between border-b border-white/10"
      style={{ minHeight: '100svh' }}
    >
      {/* Two-Tone Sunset Orange & Cobalt Blue Ambient Spotlight System */}
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute -top-[15%] -left-[8%] w-[55%] h-[65%] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(233,101,43,0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-[20%] -right-[5%] w-[50%] h-[60%] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      {/* Top spacer */}
      <div className="min-h-[88px] md:min-h-[96px]" />

      <div className="flex flex-col lg:flex-row flex-1 items-center max-w-[1440px] mx-auto w-full px-4 sm:px-8 md:px-16 pb-8 md:pb-16 gap-8 lg:gap-16 relative z-10">
        
        {/* Left Column (65%) */}
        <div className="w-full lg:w-[65%] flex flex-col gap-6 min-w-0">
          {/* Breadcrumb Navigation inside Hero */}
          <motion.nav
            className="flex items-center gap-2 mb-2"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Home</Link>
            <span className="material-symbols-outlined text-white/35 text-[14px] select-none flex items-center justify-center">chevron_right</span>
            <Link to="/projects" className="font-label-caps text-[10px] text-white/35 tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Projects</Link>
            <span className="material-symbols-outlined text-white/35 text-[14px] select-none flex items-center justify-center">chevron_right</span>
            <span className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase">{title}</span>
          </motion.nav>

          {/* Eyebrow / Tag */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="w-8 h-px bg-accent" />
            <span className="font-label-caps text-[10px] text-accent tracking-[0.28em] uppercase font-bold">
              {tag}
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="font-headline font-black text-[36px] md:text-[56px] lg:text-[68px] leading-[0.98] tracking-tighter uppercase mb-2">
            {titleLines.map((line, i) => (
              <div key={i} className="overflow-hidden block pb-1">
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

          {/* Sub-copy */}
          <motion.p 
            className="font-body text-base md:text-lg text-white/55 max-w-xl leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
          >
            {desc}
          </motion.p>
        </div>

        {/* Right Column (35%) */}
        <motion.div 
          className="w-full lg:w-[35%] bg-white/[0.03] backdrop-blur-md border border-white/10 p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative shadow-[0_12px_40px_rgba(0,0,0,0.2)]"
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
        >
          {/* L-shaped orange ticks for aesthetic matching with other widgets */}
          <div className="absolute top-[-1px] left-[-1px] w-3.5 h-3.5 border-t-2 border-l-2 border-accent pointer-events-none" />
          <div className="absolute top-[-1px] right-[-1px] w-3.5 h-3.5 border-t-2 border-r-2 border-accent pointer-events-none" />
          <div className="absolute bottom-[-1px] right-[-1px] w-3.5 h-3.5 border-b-2 border-r-2 border-accent pointer-events-none" />
          <div className="absolute bottom-[-1px] left-[-1px] w-3.5 h-3.5 border-b-2 border-l-2 border-accent pointer-events-none" />

          <div className="flex flex-col mb-8">
            {metaData.map((item, i) => (
              <div key={i} className="flex justify-between items-start py-3.5 border-b border-white/10 last:border-0 group">
                <span className="font-label-caps text-[9px] text-white/40 tracking-[0.2em] uppercase w-1/3 pt-1 group-hover:text-accent transition-colors">
                  {item.label}
                </span>
                <span className="font-body text-[13px] text-white/80 text-right w-2/3 leading-snug">
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
              className="w-full justify-center shadow-2xl shadow-accent/20 rounded-none text-[10px] tracking-[0.2em] font-bold"
            >
              DOWNLOAD FULL BRIEF .PDF
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
