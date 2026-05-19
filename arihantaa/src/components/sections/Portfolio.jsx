import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '../ui/Button';

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 1;

  return (
    <div className={`relative flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-0 mb-32 last:mb-0`}>
      
      {/* Image Container with Parallax Parallax */}
      <div className="w-full md:w-[65%] relative h-[500px] md:h-[700px] overflow-hidden group">
        <motion.img 
          className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-[0.25,1,0.5,1]" 
          alt={project.title} 
          src={project.image}
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        />
        {/* Decorative corner accent */}
        <div className={`absolute ${isEven ? 'top-0 right-0 border-t-[4px] border-r-[4px]' : 'bottom-0 left-0 border-b-[4px] border-l-[4px]'} w-16 h-16 border-accent z-20 pointer-events-none`} />
      </div>
      
      {/* Content Container */}
      <motion.div 
        className={`w-full md:w-[45%] relative z-10 ${isEven ? 'md:-mr-16 lg:-mr-32' : 'md:-ml-16 lg:-ml-32'}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="bg-surface-container-lowest p-10 md:p-14 border border-outline-variant/30 shadow-2xl relative overflow-hidden group">
          {/* Subtle accent hover effect */}
          <div className="absolute top-0 left-0 w-full h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-6 bg-accent" />
            <p className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase">{project.category}</p>
          </div>
          
          <h3 className="font-headline text-[36px] md:text-[48px] leading-[1.1] text-on-surface font-black tracking-tighter mb-6">
            {project.title}
          </h3>
          
          <p className="font-body text-[16px] leading-relaxed text-secondary mb-10">
            {project.description}
          </p>
          
          <Button variant="outline" className="group-hover:border-accent group-hover:text-accent transition-colors">
            VIEW PROJECT
          </Button>
        </div>
      </motion.div>
      
    </div>
  );
}

export function Portfolio() {
  const projects = [
    {
      title: 'Rajkot Greenfield Airport',
      category: 'AVIATION INFRASTRUCTURE',
      description: 'A masterclass in electrical grid stability and emergency power systems for high-traffic aviation hubs, ensuring zero downtime in mission-critical operations.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkInl42zXNVIWA3ZfUuLsDnIl_Ac_MEGuhYLB10fp4tWFh1fQP6rta5kamJqlrOt3FSvbsYoxlZglkQQMtcqHd-wA-AC8aLpRMLkoWJeEKtOCRQrkqKeCZFw0BxvyVyfrld13toSWIdAtZDTEIbIqAhgDvdWDM8_laDGE3P0avilUwYRJXRsnmyaRFLlYzbvlzT3uYHZuFwM7TuUPjdhsZnZA92fSj8IUkG0gTJC2GJfPW45wQktfElrSVCd7ZXZvLbzxezeOXSG8'
    },
    {
      title: 'Haridwar Medical Campus',
      category: 'HEALTHCARE ENGINEERING',
      description: 'Critical life-support systems integration and resilient power architecture for advanced medical research, where precision and reliability save lives.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpihFLVV6wKn7670_6DmS7XNcVvlUyfjsT-s_HBNkBsozyGH4bMXeqGtQMNH7bMwqYu3TRcPMbaKV1EIXVhUub8-x6ccuHneZBe1fVt5PQ9xJD_LkFYz8dr2kJMzpfCX6neBbnM80KdnfuZaNg6Arb0prKpuGcBZfP5pnvtJ4aCYlRYpfJ1Xt4e3x08a7odv3_ryQJtYfOSZLLsK6uVp-xkmkcBpRa77HgT-4vVU2E1ftV0g2pFbseFqv4x1-8o879ciIClYNFeFY'
    }
  ];

  return (
    <section className="py-24 md:py-40 bg-surface">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
          <div>
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-[2px] w-8 bg-accent" />
              <p className="font-label-caps text-[11px] text-accent tracking-[0.25em] uppercase">Featured Work</p>
            </motion.div>
            <motion.h2 
              className="font-headline text-[48px] md:text-[80px] leading-[1.0] font-black text-on-surface tracking-tighter uppercase"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Global <br/> Landmarks.
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="outline" className="border-outline-variant">
              VIEW FULL PORTFOLIO
            </Button>
          </motion.div>
        </div>
        
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
