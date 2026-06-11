import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const services = [
  { id: 'electrical-infra',    num: '01', label: 'Electrical Infrastructure' },
  { id: 'mepf-consultancy',    num: '02', label: 'MEPF Consultancy' },
  { id: 'epc-contracting',     num: '03', label: 'EPC Contracting' },
  { id: 'project-supervision',  num: '04', label: 'Project Supervision' },
];

const telemetryData = {
  'electrical-infra': {
    status: 'ACTIVE',
    readout: 'GRID_INT: 100% NOMINAL // COMPLIANCE: ISO 9001',
    ticker: '■ L&T TTA PANEL: CERTIFIED ■ LUCY RMU: 11kV/33kV SF6 ■ LUCY CSS: WEATHERPROOF ■ ERECTION: ONGOING ■ WARRANTY: 5 YRS ■ BANK SOLVENCY: 7 CR ■'
  },
  'mepf-consultancy': {
    status: 'COMPLIANT',
    readout: 'BIM_READY: ACTIVE // STANDARDS: NBC & LEED',
    ticker: '■ HVAC FLOW: OPTIMAL ■ LIGHTING: LED SPEC ■ PLUMBING: DRAINAGE STAGE 2 ■ FIRE SPRINKLERS: PRESSURE OK ■ NBC 2016: VALIDATED ■ LEED GOLD: ALIGNED ■'
  },
  'epc-contracting': {
    status: 'LIVE',
    readout: 'CLASS A LICENSED JV // CONTRACT: ACTIVE',
    ticker: '■ PROJECT CAPEX: SECURED ■ PROCUREMENT: 88% COMPLETE ■ CREW: DEPLOYED ■ OVERHEAD LINES: LIVE ■ TRANSFORMER FEED: COMMISSIONED ■ SITE SAFETY: 100% ■'
  },
  'project-supervision': {
    status: 'STABLE',
    readout: 'SUPERVISION: ACTIVE // QA PROTOCOL: ENGAGED',
    ticker: '■ FAT TEST: SIGNED OFF ■ SAT TEST: COMPLETION ■ RELAY CALIBRATION: STABLE ■ HANDOVER DOCS: GENERATED ■ AS-BUILT DRAWINGS: VERIFIED ■ SLA: 24/7 SUPPORT ■'
  }
};

const defaultTelemetry = {
  status: 'ONLINE',
  readout: 'ARIHANTAA SERVICES CONSOLE // DISCIPLINES ACTIVE...',
  ticker: '■ ELECTRICAL INFRASTRUCTURE ■ MEPF CONSULTANCY ■ EPC CONTRACTING ■ PROJECT SUPERVISION ■ SYSTEM HANDOVER ■'
};

const renderTickerText = (tickerText) => {
  const parts = tickerText.split('■').map(p => p.trim()).filter(Boolean);
  return (
    <>
      {parts.map((part, index) => (
        <span key={index} className="inline-flex items-center gap-3">
          <span className="text-accent text-[11px] md:text-[13px] select-none animate-pulse">■</span>
          <span className="text-white font-mono text-[10.5px] md:text-[12px] tracking-[0.18em] uppercase font-semibold">
            {part}
          </span>
        </span>
      ))}
      <span className="text-accent text-[11px] md:text-[13px] select-none animate-pulse ml-3">■</span>
    </>
  );
};

function ServiceSVG({ id, isActive }) {
  const containerClasses = `transition-all duration-300 ease-out flex items-center justify-center w-[18px] mr-2 ${
    isActive 
      ? 'opacity-100 scale-100 text-accent' 
      : 'opacity-0 scale-75 text-surface-variant/50 group-hover:opacity-100 group-hover:scale-100 group-hover:text-surface-variant'
  }`;

  return (
    <div className={containerClasses}>
      <div className="w-[18px] h-[18px] flex items-center justify-center flex-shrink-0">
        {id === 'electrical-infra' && (
          <svg className="w-[16px] h-[16px] stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="6" width="16" height="12" rx="2" />
            <path d="M21 10v4M7 12h6M10 9v6" />
          </svg>
        )}
        {id === 'mepf-consultancy' && (
          <svg className="w-[16px] h-[16px] stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18M9 21V9l3-3 3 3v12" />
            <path d="M5 21V13l2-2 2 2v8" />
            <path d="M19 21V13l-2-2-2 2v8" />
          </svg>
        )}
        {id === 'epc-contracting' && (
          <svg className="w-[16px] h-[16px] stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18M5 21V10l7 3V8l7 3v10" />
            <path d="M9 21v-4h6v4" />
            <path d="M7 6h2M15 4h2" />
          </svg>
        )}
        {id === 'project-supervision' && (
          <svg className="w-[16px] h-[16px] stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
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
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      const threshold = isMobile ? 125 : isTablet ? 140 : 145;

      services.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - threshold) current = id;
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
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      let offset = 140;
      if (isMobile) {
        offset = 120;
      } else if (isTablet) {
        offset = 136;
      } else {
        offset = 140;
      }

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

  const doubled = [...services, ...services, ...services, ...services];

  return (
    <nav className="sticky top-[64px] md:top-[80px] z-40 bg-inverse-surface border-b border-secondary overflow-hidden">
      <div className="flex items-stretch h-[54px] md:h-[58px]">
        {/* Fixed label pill — hidden below lg */}
        <div className="hidden lg:flex flex-shrink-0 items-center gap-3 px-6 md:px-10 bg-accent border-r border-accent/40">
          <span className="material-symbols-outlined text-on-primary text-[14px] lg:text-[16px] !font-normal">construction</span>
          <span className="font-label-caps text-[9px] lg:text-[10px] text-on-primary tracking-[0.22em] uppercase whitespace-nowrap">
            Our Services
          </span>
        </div>

        {/* Scrollable clickable nav wrapper with gradient fades to gracefully mask scrolling edges */}
        <div className="relative flex items-stretch flex-grow overflow-hidden">
          {/* Left edge fade — hidden below lg to prevent overlaying the orange mobile/tablet starting pill */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-inverse-surface to-transparent pointer-events-none z-10 select-none" />

          <div
            ref={scrollContainerRef}
            className="flex lg:grid lg:grid-cols-4 flex-grow overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {/* Mobile-only label pill inside the scroll list */}
            <div className="flex lg:hidden items-center gap-2 px-5 bg-accent border-r border-accent/40 flex-shrink-0 select-none">
              <span className="material-symbols-outlined text-on-primary text-[14px] !font-normal">construction</span>
              <span className="font-label-caps text-[9px] text-on-primary tracking-[0.22em] uppercase whitespace-nowrap">
                Our Services
              </span>
            </div>

            {services.map((svc) => {
              const isActive = activeId === svc.id;
              return (
                <button
                  key={svc.id}
                  id={`nav-item-${svc.id}`}
                  onClick={(e) => handleNavClick(e, svc.id)}
                  className={`group relative flex items-center justify-start lg:justify-center px-4 lg:px-6 py-4 flex-shrink-0 border-r border-white/10 transition-all duration-300 outline-none ${
                    isActive ? 'bg-black/30' : 'hover:bg-white/5'
                  }`}
                >
                  {/* Active indicator bar */}
                  <div className={`absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-300 ${
                    isActive ? 'bg-accent' : 'bg-transparent group-hover:bg-white/20'
                  }`} />

                  {/* Number */}
                  <span className={`font-mono text-[10px] tracking-wider transition-colors duration-300 mr-2 ${
                    isActive ? 'text-accent' : 'text-surface-variant/40 group-hover:text-accent/70'
                  }`}>
                    {svc.num}
                  </span>

                  {/* Divider square */}
                  <span className={`w-1 h-1 rounded-none flex-shrink-0 transition-colors duration-300 mr-2 ${
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
              <span className="text-accent/30 text-[10px] select-none">■</span>
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

