import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function NewsSnippet() {
  const news = [
    {
      title: 'Arihantaa expands infrastructure consulting arm in the Middle East',
      date: 'OCT 24, 2026',
      tag: 'PRESS RELEASE'
    },
    {
      title: 'Next-Generation Liquid Cooling standard adopted for new data centers',
      date: 'NOV 02, 2026',
      tag: 'INNOVATION'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-surface-container-low border-t border-outline-variant/20">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-4">
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-[2px] w-8 bg-accent" />
              <p className="font-label-caps text-[11px] text-accent tracking-[0.25em] uppercase">Intelligence</p>
            </motion.div>
            
            <motion.h2 
              className="font-headline text-[48px] md:text-[64px] leading-[1.05] font-black text-on-surface tracking-tighter mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              News & Insights
            </motion.h2>

            <motion.p 
              className="font-body text-[16px] text-secondary mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Stay informed on our latest engineering breakthroughs and project milestones shaping the global infrastructure landscape.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/news" className="inline-flex items-center gap-3 font-label-caps text-[11px] tracking-[0.15em] uppercase text-accent border-b border-accent pb-0.5 hover:gap-5 transition-all duration-300">
                VISIT NEWS HUB
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </motion.div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="flex flex-col border-t border-outline-variant/40">
              {news.map((item, i) => (
                <motion.div 
                  key={i}
                  className="group relative border-b border-outline-variant/40 hover:border-accent transition-colors duration-300"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + (i * 0.15) }}
                >
                  <Link to="/news/eastern-grid-expansion" className="block py-10 md:py-14 lg:pl-10 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      
                      <div className="flex flex-col gap-4 max-w-2xl">
                        <div className="flex items-center gap-4">
                          <span className="font-label-caps text-[10px] text-accent tracking-[0.2em]">{item.tag}</span>
                          <span className="w-1 h-1 bg-outline rounded-full" />
                          <span className="font-label-caps text-[10px] text-secondary tracking-[0.2em]">{item.date}</span>
                        </div>
                        <h3 className="font-headline text-[24px] md:text-[32px] font-bold text-on-surface leading-tight group-hover:text-accent transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      
                      <div className="w-14 h-14 rounded-full border border-outline flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:border-accent transition-colors duration-300">
                        <span className="material-symbols-outlined text-on-surface group-hover:text-on-primary group-hover:rotate-[-45deg] transition-all duration-300">
                          arrow_forward
                        </span>
                      </div>
                      
                    </div>
                  </Link>
                  {/* Subtle hover background */}
                  <div className="absolute inset-0 bg-accent/[0.02] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 z-0" />
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
