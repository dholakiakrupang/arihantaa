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
    <div className="w-full border-t border-b border-white/10 bg-[#080808]/95 backdrop-blur-md shrink-0 relative z-30" style={{ opacity: 1, transform: 'none' }}>
      <div className="max-w-[1440px] mx-auto grid grid-cols-3 divide-x divide-white/10">
        {stats.map((item, idx) => (
          <div key={idx} className="px-6 py-5 flex flex-col justify-center">
            <span className="font-headline text-[18px] md:text-[22px] font-black text-accent tracking-tight leading-none mb-1">
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
            </span>
            <span className="font-label-caps text-[9px] text-white/40 tracking-wider uppercase leading-none">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
