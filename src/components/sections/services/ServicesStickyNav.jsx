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

function ServiceSVG({ id, isActive }) {
  const containerClasses = `transition-all duration-300 ease-out flex items-center justify-center w-[18px] mr-2 ${
    isActive 
      ? 'opacity-100 scale-100 text-accent' 
      : 'opacity-0 scale-75 text-surface-variant/50 group-hover:opacity-100 group-hover:scale-100 group-hover:text-surface-variant'
  }`;

  return (
    <div className={containerClasses}>
      <div className="w-[18px] h-[18px] flex items-center justify-center flex-shrink-0">
        {id === 'spare-parts' && (
          <svg className="w-[16px] h-[16px] stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L3 7l9 5 9-5-9-5z" />
            <path d="M3 7v10l9 5V12L3 7z" />
            <path d="M21 7v10l-9 5" />
            <circle cx="17" cy="4.5" r="1.5" className="animate-pulse" />
          </svg>
        )}
        {id === 'preventive-maint' && (
          <svg className="w-[16px] h-[16px] stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="M7 12l3 3 7-7" />
          </svg>
        )}
        {id === 'performance-opt' && (
          <svg className="w-[16px] h-[16px] stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3.58 17.58A8 8 0 1 1 20.42 17.58" />
            <path d="M12 14l5-5" />
            <circle cx="12" cy="14" r="1.5" />
            <path d="M19 8h-4V4" />
            <path d="M20 3l-6 6" />
          </svg>
        )}
        {id === 'remote-services' && (
          <svg className="w-[16px] h-[16px] stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="18" r="1" />
            <path d="M12 17V8" />
            <path d="M17 12a5 5 0 0 0-10 0" />
            <path d="M20 9a9 9 0 0 0-16 0" />
          </svg>
        )}
        {id === 'project-commission' && (
          <svg className="w-[16px] h-[16px] stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
          </svg>
        )}
        {id === 'industrial-maint' && (
          <svg className="w-[16px] h-[16px] stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18M5 21V10l7 3V8l7 3v10" />
            <path d="M9 21v-4h6v4" />
            <path d="M7 6h2M15 4h2" />
          </svg>
        )}
        {id === 'ups-battery' && (
          <svg className="w-[16px] h-[16px] stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="6" width="16" height="12" rx="2" />
            <path d="M21 10v4M7 12h6M10 9v6" />
          </svg>
        )}
        {id === 'generator' && (
          <svg className="w-[16px] h-[16px] stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M13 8l-3 4h4l-3 4" />
          </svg>
        )}
        {id === 'liquid-cooling' && (
          <svg className="w-[16px] h-[16px] stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            <path d="M8 15h8M9 18h6" />
          </svg>
        )}
      </div>
    </div>
  );
}

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

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 120; // offset to account for header + sticky nav heights
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Duplicate for seamless infinite marquee (only shown when nothing is active)
  const doubled = [...services, ...services];

  return (
    <nav className="sticky top-[79px] z-40 bg-inverse-surface border-b border-secondary overflow-hidden">
      <div className="flex items-stretch">

        {/* Fixed label pill */}
        <div className="flex-shrink-0 flex items-center gap-3 px-6 md:px-10 bg-accent border-r border-accent/40">
          <span className="material-symbols-outlined text-on-primary text-[16px]">construction</span>
          <span className="font-label-caps text-[10px] text-on-primary tracking-[0.22em] uppercase whitespace-nowrap">
            Our Services
          </span>
        </div>

        {/* Scrollable clickable nav wrapper with gradient fades to gracefully mask scrolling edges */}
        <div className="relative flex items-stretch flex-grow overflow-hidden">
          {/* Left edge fade */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-inverse-surface to-transparent pointer-events-none z-10 select-none" />

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide flex-grow scroll-smooth"
          >
            {services.map((svc) => {
              const isActive = activeId === svc.id;
              return (
                <button
                  key={svc.id}
                  id={`nav-item-${svc.id}`}
                  onClick={(e) => handleNavClick(e, svc.id)}
                  className={`group relative flex items-center justify-start px-5 py-4 flex-shrink-0 border-r border-white/10 transition-all duration-300 outline-none ${
                    isActive ? 'bg-black/30' : 'hover:bg-white/5'
                  }`}
                >
                  {/* Active indicator bar */}
                  <div className={`absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-300 ${
                    isActive ? 'bg-accent' : 'bg-transparent group-hover:bg-white/20'
                  }`} />

                  {/* Corner bracket decorators */}
                  {isActive && (
                    <>
                      <span className="absolute top-1.5 left-1.5 font-mono text-[8px] text-accent/50 select-none">⌜</span>
                      <span className="absolute top-1.5 right-1.5 font-mono text-[8px] text-accent/50 select-none">⌝</span>
                      <span className="absolute bottom-1.5 left-1.5 font-mono text-[8px] text-accent/50 select-none">⌞</span>
                      <span className="absolute bottom-1.5 right-1.5 font-mono text-[8px] text-accent/50 select-none">⌟</span>
                    </>
                  )}

                  {/* Number */}
                  <span className={`font-mono text-[10px] tracking-wider transition-colors duration-300 mr-2 ${
                    isActive ? 'text-accent' : 'text-surface-variant/40 group-hover:text-accent/70'
                  }`}>
                    {svc.num}
                  </span>

                  {/* Divider dot */}
                  <span className={`w-1 h-1 rounded-full flex-shrink-0 transition-colors duration-300 mr-2 ${
                    isActive ? 'bg-accent/70' : 'bg-surface-variant/20'
                  }`} />

                  {/* Service Icon SVG */}
                  <ServiceSVG id={svc.id} isActive={isActive} />

                  {/* Label */}
                  <span className={`font-label-caps text-[10px] tracking-[0.18em] uppercase whitespace-nowrap transition-colors duration-300 ${
                    isActive ? 'text-inverse-on-surface' : 'text-surface-variant/70 group-hover:text-inverse-on-surface'
                  }`}>
                    {svc.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right edge fade */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-inverse-surface to-transparent pointer-events-none z-10 select-none" />
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
              <button
                onClick={(e) => handleNavClick(e, svc.id)}
                className={`font-label-caps text-[10px] tracking-[0.18em] uppercase transition-colors duration-200 outline-none ${
                  activeId === svc.id ? 'text-accent' : 'text-surface-variant/50 hover:text-accent'
                }`}
              >
                {svc.num} — {svc.label}
              </button>
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
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </nav>
  );
}

