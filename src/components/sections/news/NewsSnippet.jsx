import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NEWS_DATA = [
  {
    id: 'eastern-grid-expansion',
    title: 'Arihantaa expands infrastructure consulting arm in the Middle East',
    date: 'OCT 24, 2026',
    tag: 'PRESS RELEASE',
    desc: 'Deploying direct local advisory and validation engineering to grid authorities in high-density compute markets.',
    readTime: '3 min read'
  },
  {
    id: 'liquid-cooling-standard',
    title: 'Next-Generation Liquid Cooling standard adopted for new data centers',
    date: 'NOV 02, 2026',
    tag: 'INNOVATION',
    desc: 'Implementing advanced standard operating procedures for direct-to-chip and immersion cooling frameworks.',
    readTime: '4 min read'
  }
];

export function NewsSnippet() {
  return (
    <section className="py-24 md:py-32 bg-surface border-t border-outline-variant/30 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* ── Left Column: Section Info (4 cols) ── */}
          <div className="lg:col-span-4">
            <motion.div 
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-px w-6 bg-accent" />
              <span className="font-label-caps text-[10px] text-accent tracking-[0.25em] uppercase font-bold">
                INTELLIGENCE | PRESS
              </span>
            </motion.div>
            
            <h2 className="font-headline text-[38px] sm:text-[48px] leading-[1.05] font-black text-on-surface tracking-tighter uppercase mb-6">
              News & <br/> Insights.
            </h2>

            <p className="font-body text-[14.5px] text-secondary leading-relaxed mb-8 max-w-sm">
              Stay informed on our latest engineering breakthroughs and project milestones shaping the global infrastructure landscape.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/news" 
                className="inline-flex items-center gap-3 font-label-caps text-[10px] tracking-[0.2em] uppercase text-accent border-b border-accent pb-0.5 hover:gap-5 transition-all duration-300 font-bold"
              >
                VISIT NEWS HUB
                <span className="material-symbols-outlined text-[19px]">arrow_forward</span>
              </Link>
            </motion.div>
          </div>
          
          {/* ── Right Column: Structured News Feed (8 cols) ── */}
          <div className="lg:col-span-8">
            <div className="flex flex-col border-t border-l border-outline-variant/30">
              {NEWS_DATA.map((item, i) => (
                <motion.div 
                  key={i}
                  className="group relative border-r border-b border-outline-variant/30 bg-surface hover:bg-accent/[0.005] transition-colors duration-300"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + (i * 0.12), ease: [0.25, 1, 0.5, 1] }}
                >
                  <Link to={`/news/${item.id}`} className="block p-8 md:p-10 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                      
                      {/* Left: Article Details */}
                      <div className="flex flex-col gap-3 max-w-2xl">
                        
                        {/* Meta Tags */}
                        <div className="flex items-center gap-3 font-mono text-[9px]">
                          <span className="font-label-caps text-[9px] text-accent tracking-wider font-bold">{item.tag}</span>
                          <span className="w-1 h-1 bg-outline-variant rounded-full" />
                          <span className="text-secondary/50">{item.date}</span>
                          <span className="w-1 h-1 bg-outline-variant rounded-full" />
                          <span className="text-secondary/40 font-sans italic">{item.readTime}</span>
                        </div>

                        {/* Title */}
                        <h3 className="font-headline text-[20px] md:text-[24px] font-bold text-on-surface leading-tight group-hover:text-accent transition-colors duration-300 uppercase">
                          {item.title}
                        </h3>

                        {/* Snippet Description */}
                        <p className="font-body text-[13.5px] text-secondary leading-relaxed mt-1">
                          {item.desc}
                        </p>
                      </div>
                      
                      {/* Right: Technical Arrow Indicator */}
                      <div className="w-12 h-12 border border-outline-variant/40 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:border-accent transition-colors duration-300">
                        <span className="material-symbols-outlined text-[22px] text-secondary group-hover:text-white group-hover:-rotate-45 transition-all duration-300">
                          arrow_forward
                        </span>
                      </div>
                      
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
