import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

function AnimatedCounter({ value, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = value / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export function Stats() {
  const statsData = [
    { value: 29, suffix: "+", label: "YEARS OF RIGOR" },
    { value: 500, suffix: "+", label: "COMPLETED PROJECTS" },
    { value: 12, suffix: "", label: "GLOBAL FOOTPRINT" },
  ];

  return (
    <section className="bg-surface relative z-20 -mt-20">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 bg-surface-container-lowest shadow-2xl border border-outline-variant/30">
          
          {statsData.map((stat, i) => (
            <motion.div 
              key={i}
              className={`group relative p-12 lg:p-16 flex flex-col justify-center items-center text-center overflow-hidden border-b md:border-b-0 md:border-r border-outline-variant/40 last:border-0`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
            >
              {/* Hover background fill */}
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.25,1,0.5,1] z-0" />
              
              <div className="relative z-10">
                <div className="font-headline text-[64px] md:text-[80px] lg:text-[96px] font-light text-on-surface group-hover:text-on-primary transition-colors duration-500 leading-none tracking-tighter mb-4 flex justify-center">
                  <AnimatedCounter value={stat.value} />
                  <span className="text-accent group-hover:text-on-primary transition-colors duration-500">{stat.suffix}</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="h-[2px] w-4 bg-accent group-hover:bg-on-primary/50 transition-colors duration-500" />
                  <span className="font-label-caps text-[11px] lg:text-[12px] text-secondary group-hover:text-on-primary uppercase tracking-[0.2em] transition-colors duration-500">
                    {stat.label}
                  </span>
                  <div className="h-[2px] w-4 bg-accent group-hover:bg-on-primary/50 transition-colors duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
