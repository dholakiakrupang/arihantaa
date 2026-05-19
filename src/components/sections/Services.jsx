import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'power-distribution',
    title: 'Power Systems',
    desc: 'Expert design and optimization for industrial-scale electrical grids and distribution networks.',
    icon: 'bolt',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaZXpdbjLr9LR1AZHlH13OoPIe3jejJ5QnOcZ65UtIXTYGB3FhPhWEysa5L62jlOrhOuIauc30AyV27W61lMnslCrsaPW-417zxIv6lwC0psaVj4kKhOln4z4KLECJ_PGSJfsImraGudDu7PWlQES3CGRX27W8z1SbOwyT-mkSui_n_DpRCHOZJdsdHcWZ0ezqLgJkCeCvxXO-YSfJ6mNTUN7OMzS2PFmVWdky77FtgjIaJHenC1H4lGTuyumwdjVpcqwEBdaHTa0'
  },
  {
    id: 'industrial-maint',
    title: 'M&E Design',
    desc: 'Seamless integration of mechanical and electrical systems for complex architectural structures.',
    icon: 'settings',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZe-CW38ZCZsbHjngWLUSfHW2T07R-V9uyQGo-8a8mLrsk8ZLB_fBc_kw3NqoxDwUV9-zBbMqsINg4-q9SNKBdeea2VCdrVhi7UecdP1CBQKjRO3ZohnWncrqBnSgnIJ_MjGLBdPR5Tai3PA_Qqq1nFQDjycUNEGaO-BPvHionFnlJeVCVwcPQyGdwH8iGXM1nEHGAn4oCVjisU3ZbVbiIC4MenAeYu-cywIHwUhkwaOgVtOFXagPpIkQ3jIsXjnW5wEeDcsCplgQ'
  },
  {
    id: 'performance-opt',
    title: 'Sustainability',
    desc: 'Engineering for the future with renewable energy integration and carbon-neutral strategies.',
    icon: 'energy_savings_leaf',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5FW8nf272gXSM_1xLQR9lKoi7xId3VLHIZFPFzZDDsZz-nkZBK2rLtsZtKJkruCgzVDafIT8sh-T2S4pquUpCFv5xVyBphjPjDfvrRtJhzcdElkAzpWf66KnClNbPqHBo7FDSKuqauWqmdmdjkPyWjklLYf1pyhqrHlKMFP7aTOT40qcirHI1QrKknjtv-vRFHkwL6Lqe96kLA6WOsS23v5Vqw3Ww0Ukxbs38PwDFBS-xum-nzeDdwKNE9LRjMiiG71SmAJODIrk'
  }
];

export function Services() {
  return (
    <section className="py-32 bg-inverse-surface relative overflow-hidden">
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16">
        
        {/* Header */}
        <div className="mb-20 md:mb-28 flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-3xl">
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-[2px] w-8 bg-accent" />
              <p className="font-label-caps text-[11px] text-accent tracking-[0.25em] uppercase">Core Capabilities</p>
            </motion.div>
            
            <motion.h2 
              className="font-headline text-[48px] md:text-[72px] lg:text-[88px] leading-[1.0] font-black text-on-primary tracking-tighter uppercase"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            >
              Precision <br/> Solutions.
            </motion.h2>
          </div>
          <motion.div 
            className="hidden md:block pb-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="font-body text-[16px] text-on-primary/60 max-w-sm text-right leading-relaxed">
              Delivering end-to-end electrical and mechanical consultancy for high-stakes, mission-critical environments worldwide.
            </p>
          </motion.div>
        </div>
        
        {/* Services Grid (Staggered) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {services.map((srv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 1, 0.5, 1] }}
            >
              <Link 
                to={`/services/${srv.id}`}
                className="group block relative h-[400px] lg:h-[500px] bg-white/5 border border-white/10 overflow-hidden hover:border-accent/50 transition-colors duration-500"
              >
                {/* Background Image Reveal */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={srv.image} 
                    alt={srv.title}
                    className="w-full h-full object-cover grayscale opacity-0 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-[0.25,1,0.5,1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="relative z-10 h-full p-8 lg:p-12 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="font-headline text-[48px] font-black text-on-primary/10 group-hover:text-accent transition-colors duration-500">
                      0{index + 1}
                    </span>
                    <span className="material-symbols-outlined text-[32px] text-accent opacity-50 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500">
                      {srv.icon}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="font-headline text-[32px] lg:text-[40px] font-bold text-on-primary mb-4 leading-tight group-hover:-translate-y-2 transition-transform duration-500">
                      {srv.title}
                    </h3>
                    <p className="font-body text-[15px] text-on-primary/60 mb-6 max-w-sm group-hover:text-on-primary/90 group-hover:-translate-y-2 transition-all duration-500 delay-75">
                      {srv.desc}
                    </p>
                    <div className="flex items-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      <span className="font-label-caps text-[11px] uppercase tracking-[0.2em] text-accent">Explore Service</span>
                      <span className="material-symbols-outlined text-[16px] text-accent">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
