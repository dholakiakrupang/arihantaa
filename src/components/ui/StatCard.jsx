import { motion, useInView, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { cn } from '../../lib/utils';

export function AnimatedValue({ value, duration = 1.8 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Handle both numbers and formatted strings like "₹315 Cr+"
  const stringValue = String(value);
  const match = stringValue.match(/^([₹\s]*)(\d[\d,.]*)([\w\s+]*?)$/);
  
  const prefix = match ? match[1] : '';
  const numStr = match ? match[2].replace(/[,]/g, '') : '';
  const suffix = match ? match[3] : '';
  const numericVal = parseFloat(numStr) || 0;
  const isDecimal = numStr.includes('.');

  useEffect(() => {
    if (!isInView || !ref.current || !match) return;
    
    const node = ref.current;
    const ctrl = animate(0, numericVal, {
      duration,
      ease: [0.25, 1, 0.5, 1],
      onUpdate: (v) => {
        node.textContent = prefix + (isDecimal ? v.toFixed(2) : Math.round(v)) + suffix;
      },
    });
    return ctrl.stop;
  }, [isInView, numericVal, prefix, suffix, isDecimal, duration, match]);

  // If it doesn't match a numeric format, just render as text
  if (!match) return <span>{value}</span>;

  return <span ref={ref}>{value}</span>;
}

export function StatCard({ 
  icon, 
  value, 
  label, 
  delay = 0,
  centered = false,
  className
}) {
  return (
    <motion.div
      className={cn(
        "group relative flex flex-col overflow-hidden cursor-default transition-all border-r border-b border-outline-variant/30 bg-surface hover:bg-accent/[0.015] duration-300",
        centered ? "justify-center items-center text-center p-12 lg:p-16" 
                 : "justify-between px-6 py-10",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay, ease: [0.25, 1, 0.5, 1] }}
    >
      {/* Top: icon (if provided) */}
      {icon && (
        <div className={cn("relative z-10", centered ? "mb-4" : "mb-6")}>
          <span
            className="material-symbols-outlined text-accent opacity-60 group-hover:opacity-100 transition-all duration-300"
            style={{ fontSize: '24px' }}
          >
            {icon}
          </span>
        </div>
      )}

      {/* Middle: big value and label */}
      <div className="relative z-10 w-full">
        <div className={cn(
          "font-headline font-light text-on-surface group-hover:text-accent leading-none mb-3 transition-colors duration-500",
          centered ? "text-[64px] md:text-[80px] lg:text-[96px] tracking-tighter" : "text-[28px] md:text-[32px]"
        )}>
          <AnimatedValue value={value} />
        </div>
        
        {centered ? (
          <div className="flex items-center justify-center gap-3">
            <div className="h-[2px] w-4 bg-accent transition-colors duration-500" />
            <span className="font-label-caps text-[11px] lg:text-[12px] text-secondary group-hover:text-on-surface uppercase tracking-[0.2em] transition-colors duration-500">
              {label}
            </span>
            <div className="h-[2px] w-4 bg-accent transition-colors duration-500" />
          </div>
        ) : (
          <div className="font-label-caps text-[9px] text-secondary tracking-[0.2em] leading-relaxed transition-colors duration-500 uppercase">
            {label}
          </div>
        )}
      </div>

    </motion.div>
  );
}
