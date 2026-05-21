import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button';

const newsItems = [
  {
    id: 'eastern-grid-expansion',
    title: "Industrial Authority Signs ₹240 Cr. Infrastructure Contract",
    category: "Press Release",
    date: "Oct 24, 2026",
    readTime: "6 Min Read",
    desc: "In a decisive move to fortify regional power stability, Industrial Authority Engineering has officially secured the Phase II contract for the Eastern Grid expansion project, mandating advanced UPS architecture.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3LAEI6CRn5IIILEjifzbbaLhYXGbuWVwYk_VDSIkDvIo1jzDxWBU7qLRp6ROjH0LMIDq1UX1f7Rigb_h4tMQp4toFyQTydTDdwq1olOh1VUesNHNMFsy1iJbqhvQpYDe0y8YlhCJ_5ZGPx_KGp80NrUsNPoeFrWbgSTr9fxndwmpVE1wpQnsGbK-GVGG0_TEyouXlNdPtECSHJ2IUZf640erkXOAtL3HarvdPW35IyCg8upQ1v8pcaoaZO4KLDiZebs5MM8ZewSo",
    colSpan: "lg:col-span-8",
    isFeatured: true
  },
  {
    id: 2,
    title: "Optimizing Thermal Efficiency in Substations",
    category: "Technical Report",
    date: "Oct 12, 2026",
    readTime: "4 Min Read",
    desc: "Analysis of modern cooling methodologies in high-capacity transformer bays, exploring fluid dynamics.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXTaHZF2s9EkzujqLkbFGry7vOKPsNt08rADHH8cldx-PLWVBfX6u0hGiYUoZNcAzNC7Ehmw_-X_0QdDoUMyXBrLLW4L3pc4TwlDscR-6KnEo4MAuCKMiAUOkXHJK7_poGE5pNs4aOMu6CiUavm8gA9runwJkVJYn8vVZtdTud_VMyk0H3whG-zl4t0dvS1KnNhOUcLUA4dQzngEUerTrLQRsMQJ-ii3RggnHmSOMnNymRLZzcoxHoPn8v4HmkDrrCIGwITFcCyr4",
    colSpan: "lg:col-span-4",
    isFeatured: false
  },
  {
    id: 3,
    title: "Hydro-Electric Stress Testing Protocols",
    category: "Whitepaper",
    date: "Sep 28, 2026",
    readTime: "8 Min Read",
    desc: "Methodologies for simulating 100-year flow events on infrastructure. A detailed breakdown of fluid mechanics.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5FW8nf272gXSM_1xLQR9lKoi7xId3VLHIZFPFzZDDsZz-nkZBK2rLtsZtKJkruCgzVDafIT8sh-T2S4pquUpCFv5xVyBphjPjDfvrRtJhzcdElkAzpWf66KnClNbPqHBo7FDSKuqauWqmdmdjkPyWjklLYf1pyhqrHlKMFP7aTOT40qcirHI1QrKknjtv-vRFHkwL6Lqe96kLA6WOsS23v5Vqw3Ww0Ukxbs38PwDFBS-xum-nzeDdwKNE9LRjMiiG71SmAJODIrk",
    colSpan: "lg:col-span-4",
    isFeatured: false
  },
  {
    id: 4,
    title: "Alpha Solar Array Substation Progress",
    category: "Project Update",
    date: "Sep 15, 2026",
    readTime: "3 Min Read",
    desc: "Integration of a 500MW solar farm into the national grid with advanced voltage regulation.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAH-XlVfiUims4FuvWQyfp3g5yMEYAXu5W8L_8uYh3Ih-vc25CLSwk9L91FOzpyjX9h727SvBUjEjzTBhCUqwDEK-faQqg481UUBnRtczffpJoLP1anXLQSjSbywiM4hLy9c-vAl8gzbbFVe31jx7-8HSB9kHwjLH0vRwKB0OyvY4pt3NC36MyAoa6pk4iMwlo0D_85spL5SOVT7mbLmZ7U2qyW31OsCPbgwf07HCkxHWpuRz8t4jdBA3Ls1Smb_5Z8nhRvbQ7fLOY",
    colSpan: "lg:col-span-4",
    isFeatured: false
  },
  {
    id: 5,
    title: "Steelworks Power Upgrade Phase 2",
    category: "Project Update",
    date: "Aug 30, 2026",
    readTime: "4 Min Read",
    desc: "Overhaul of internal distribution network to support new electric arc furnaces.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs7GWrmO_Y24aIx0d_M368iwbT45iHy_7DqpZ7nch4fGcArhsG3Sgv3kEZJrQgufY4RuhkBeG0nzAVuZdo9xFBim7nRUdHZtnsUXXvA4N-7-sezh59f9vX1KfadhdMLz0Uj-yIVnI5c3gseMueQqUedxsfbbqL5ecgnT83a3xHXTG3h3mwsSqZyjqYaqua9ahuVxPAZbAQY0-mdX7ZKunjvj7d0CRfydIP5nD9glow6KMU8SoKRHqFaWIZB41-0SRYLfF8zA12KHQ",
    colSpan: "lg:col-span-4",
    isFeatured: false
  }
];

export function FeaturedNews() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-6 bg-accent" />
              <span className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase">Latest Updates</span>
            </div>
            <h2 className="font-headline text-[32px] md:text-[40px] font-black text-on-surface tracking-tighter">
              Media & Insights
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-4">
            {['All', 'Reports', 'Projects', 'Press'].map((filter, i) => (
              <button 
                key={filter} 
                className={`font-label-caps text-[10px] uppercase tracking-[0.15em] pb-1 border-b-2 transition-colors ${
                  i === 0 ? 'text-accent border-accent' : 'text-secondary border-transparent hover:text-on-surface'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {newsItems.map((item, i) => (
            <motion.div
              key={item.id}
              className={`${item.colSpan} group flex flex-col`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
            >
              <Link to={`/news/${item.id}`} className="flex flex-col h-full cursor-pointer">
              {/* Image Box */}
              <div className={`relative w-full overflow-hidden bg-surface-container-low mb-6 ${
                item.isFeatured ? 'aspect-[16/9] md:aspect-[2/1] lg:aspect-[16/7]' : 'aspect-[4/3]'
              }`}>
                {/* Accent corner bracket top-left (only on featured) */}
                {item.isFeatured && (
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-[3px] border-l-[3px] border-accent z-10" />
                )}
                
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading={i === 0 ? "eager" : "lazy"} 
                  decoding="async"
                />
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 ${
                  item.isFeatured ? 'bg-accent text-on-primary' : 'bg-surface/90 text-on-surface backdrop-blur-sm'
                } px-3 py-1.5 font-label-caps text-[9px] uppercase tracking-[0.15em] shadow-sm`}>
                  {item.category}
                </div>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-3 font-label-caps text-[10px] uppercase tracking-wider text-secondary">
                <span className={`${item.isFeatured ? 'text-accent font-bold' : ''}`}>{item.date}</span>
                <span className="w-1 h-1 bg-outline rounded-none"></span>
                <span>{item.readTime}</span>
              </div>

              {/* Title & Desc */}
              <h3 className={`font-headline font-black text-on-surface mb-3 group-hover:text-accent transition-colors duration-300 leading-[1.2] ${
                item.isFeatured ? 'text-[28px] md:text-[36px] tracking-tight' : 'text-[20px] md:text-[24px]'
              }`}>
                {item.title}
              </h3>
              
              <p className={`font-body text-secondary leading-relaxed mb-6 ${
                item.isFeatured ? 'text-[15px] max-w-2xl' : 'text-[14px] line-clamp-3'
              }`}>
                {item.desc}
              </p>

              {/* CTA */}
              <div className="mt-auto">
                <span className="inline-flex items-center gap-2 font-label-caps text-[10px] tracking-[0.15em] uppercase text-accent border-b border-accent/30 pb-0.5 group-hover:gap-4 group-hover:border-accent transition-all duration-300">
                  Read Article
                  <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
                </span>
              </div>
              </Link>
            </motion.div>
          ))}
          
        </div>

        {/* Load More */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button variant="outline" icon="expand_more">
            Load More News
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
