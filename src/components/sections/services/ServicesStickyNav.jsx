import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const services = [
  { id: 'spare-parts',        num: '01', label: 'Spare Parts & Parts Management' },
  { id: 'preventive-maint',   num: '02', label: 'Preventive Maintenance' },
  { id: 'performance-opt',    num: '03', label: 'Performance Optimization' },
  { id: 'remote-services',    num: '04', label: 'Remote Services' },
  { id: 'project-commission', num: '05', label: 'Project & Commissioning' },
  { id: 'industrial-maint',   num: '06', label: 'Industrial Maintenance' },
  { id: 'ups-battery',        num: '07', label: 'UPS & Battery Services' },
  { id: 'generator',          num: '08', label: 'Generator & Switchgear' },
  { id: 'liquid-cooling',     num: '09', label: 'Liquid Cooling Services' },
];

export function ServicesStickyNav() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      services.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) current = id;
      });
      setActiveId(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollContainerRef = useRef(null);

  // Automatically scroll the horizontal nav to keep the active item in view
  useEffect(() => {
    if (activeId && scrollContainerRef.current) {
      const activeEl = document.getElementById(`nav-item-${activeId}`);
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeId]);

  // Duplicate for seamless infinite marquee (only shown when nothing is active)
  const doubled = [...services, ...services];

  return (
    <nav className="sticky top-[62px] md:top-[66px] z-40 bg-inverse-surface border-b border-secondary overflow-hidden">
      <div className="flex items-stretch">

        {/* Fixed label pill */}
        <div className="flex-shrink-0 flex items-center gap-3 px-6 md:px-10 bg-accent border-r border-accent/40">
          <span className="material-symbols-outlined text-on-primary text-[16px]">construction</span>
          <span className="font-label-caps text-[10px] text-on-primary tracking-[0.22em] uppercase whitespace-nowrap">
            Our Services
          </span>
        </div>

        {/* Scrollable clickable nav */}
        <div ref={scrollContainerRef} className="flex overflow-x-auto scrollbar-hide">
          {services.map((svc) => {
            const isActive = activeId === svc.id;
            return (
              <Link
                key={svc.id}
                id={`nav-item-${svc.id}`}
                to={`/services/${svc.id}`}
                className={`group relative flex items-center gap-2.5 px-5 py-4 flex-shrink-0 border-b-[3px] transition-all duration-300 ${
                  isActive
                    ? 'border-accent bg-white/5'
                    : 'border-transparent hover:bg-white/5 hover:border-white/30'
                }`}
              >
                {/* Number */}
                <span className={`font-headline text-[11px] font-black tracking-widest transition-colors duration-300 ${
                  isActive ? 'text-accent' : 'text-surface-variant group-hover:text-accent'
                }`}>
                  {svc.num}
                </span>

                {/* Divider dot */}
                <span className="w-1 h-1 rounded-full bg-surface-variant/50 flex-shrink-0" />

                {/* Label */}
                <span className={`font-body text-[12px] font-semibold whitespace-nowrap transition-colors duration-300 ${
                  isActive ? 'text-inverse-on-surface' : 'text-surface-variant group-hover:text-inverse-on-surface'
                }`}>
                  {svc.label}
                </span>

                {/* Active accent dot */}
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Subtle marquee ticker at the bottom — purely decorative, shows all service names looping */}
      <div className="overflow-hidden border-t border-white/5 py-1.5 bg-inverse-surface/80">
        <div
          className="flex gap-8 items-center whitespace-nowrap w-max"
          style={{ animation: 'servicesMarquee 35s linear infinite' }}
        >
          {doubled.map((svc, i) => (
            <span key={i} className="flex items-center gap-8">
              <Link
                to={`/services/${svc.id}`}
                className={`font-label-caps text-[10px] tracking-[0.18em] uppercase transition-colors duration-200 ${
                  activeId === svc.id ? 'text-accent' : 'text-surface-variant/50 hover:text-accent'
                }`}
              >
                {svc.num} — {svc.label}
              </Link>
              <span className="text-accent/30 text-[10px] select-none">◆</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes servicesMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </nav>
  );
}
