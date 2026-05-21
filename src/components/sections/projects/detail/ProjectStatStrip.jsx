import { useRef, useEffect } from 'react';
import { useInView, animate } from 'framer-motion';

function AnimCount({ to, prefix = '', suffix = '', duration = 2, decimals = 0 }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: '-50px' });

  useEffect(() => {
    const node = nodeRef.current;
    if (!node || !isInView) return;
    
    const ctrl = animate(0, to, {
      duration,
      ease: [0.25, 1, 0.5, 1],
      onUpdate: (v) => { 
        node.textContent = prefix + v.toFixed(decimals) + suffix; 
      },
    });
    return ctrl.stop;
  }, [to, prefix, suffix, duration, decimals, isInView]);

  return <span ref={nodeRef}>{prefix}0{suffix}</span>;
}

export function ProjectStatStrip({ stats }) {
  if (!stats || stats.length === 0) return null;

  return (
    <section className="w-full bg-surface py-16 px-6 md:px-12 lg:px-20 border-b border-outline-variant/30 relative z-20">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-outline-variant/50">
        
        {stats.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center text-center px-6 py-4 md:py-0">
            <div className="font-headline font-black text-[50px] md:text-[56px] text-accent leading-none tracking-tighter">
              {item.to !== undefined ? (
                <AnimCount 
                  to={item.to} 
                  prefix={item.prefix} 
                  suffix={item.suffix} 
                  decimals={item.decimals} 
                />
              ) : (
                item.value
              )}
            </div>
            <div className="font-label-caps text-[11px] text-secondary tracking-[0.2em] mt-4 uppercase font-bold">
              {item.label}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
