import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sectors = [
  { id: 'critical-power', num: '01', label: 'Critical Power', icon: 'bolt' },
  { id: 'thermal-management', num: '02', label: 'Thermal Management', icon: 'thermostat' },
  { id: 'racks-enclosures', num: '03', label: 'Racks & Enclosures', icon: 'grid_view' },
  { id: 'monitoring-management', num: '04', label: 'Monitoring & Mgmt', icon: 'monitoring' },
];

const telemetryData = {
  'critical-power': {
    status: 'ACTIVE',
    readout: 'SYS_LOAD: 100% NOMINAL // STABILITY: 99.999%',
    ticker: '◆ SYS_LOAD: 100% NOMINAL ◆ GRID_VOLTAGE: 415V AC ◆ FREQ: 50.00Hz ◆ BYPASS: STANDBY ◆ THD: <1.5% ◆ BATTERY: CHARGING (100%) ◆ UPS_TEMP: 32°C ◆ DC_BUS: 540V ◆ COPIES ACTIVE: 3 ◆ EMERGENCY_STOP: READY ◆'
  },
  'thermal-management': {
    status: 'COMPLIANT',
    readout: 'THERMO_LOAD: COMPLIANT // COOLING PUE: 1.12',
    ticker: '◆ THERMO_LOAD: OPTIMAL ◆ PUE: 1.12 ◆ FAN_SPEED: 82% ◆ COMPRESSOR: STAGE_2 ◆ HUMIDITY: 45.2% ◆ CHILLER_TEMP: 7.2°C ◆ AIRFLOW: 1450 CFM ◆ COOLANT_PRESS: 3.2 BAR ◆ LEAK_DETECTION: NEGATIVE ◆'
  },
  'racks-enclosures': {
    status: 'SECURE',
    readout: 'ENCLOSURE: IP66 RATED // STRUCT_INTEGRITY: 100%',
    ticker: '◆ ACCESS: ENGAGED ◆ IP_CLASS: IP66 ◆ STRUCTURAL_LOAD: 1250KG/1500KG ◆ DOOR_SENSORS: SECURED ◆ THERMOSTAT_1: 22.4°C ◆ THERMOSTAT_2: 24.1°C ◆ GROUNDING_RES: <0.1Ω ◆ VIBRATION: NONE ◆'
  },
  'monitoring-management': {
    status: 'SYNCED',
    readout: 'TELEMETRY: LINK ACTIVE // DATA SYNC: 100%',
    ticker: '◆ TELEMETRY: CONNECTED ◆ PING: 1.2ms ◆ CPU_UTIL: 14.2% ◆ RAM: 4.2GB/16GB ◆ DATA_SYNC: 100% ◆ NETWORK_BW: 10Gbps ◆ DB_LATENCY: 2ms ◆ API_CALLS: 240/sec ◆ PACKET_LOSS: 0.00% ◆'
  }
};

const defaultTelemetry = {
  status: 'ONLINE',
  readout: 'ARIHANTAA CORE SYSTEM // CONNECTING TO GRID...',
  ticker: '◆ ARIHANTAA DIGITAL CONSOLE v2.10 ◆ READY TO ESTABLISH LINK ◆ CRITICAL POWER ◆ THERMAL MANAGEMENT ◆ RACKS & ENCLOSURES ◆ MONITORING & MANAGEMENT ◆ SELECT UNIT TO INSPECT'
};

function SectorSVG({ id, isActive }) {
  const containerClasses = `transition-all duration-300 ease-out flex items-center justify-center w-[18px] mr-2 ${
    isActive 
      ? 'opacity-100 scale-100 text-accent' 
      : 'opacity-0 scale-75 text-surface-variant/50 group-hover:opacity-100 group-hover:scale-100 group-hover:text-surface-variant'
  }`;

  return (
    <div className={containerClasses}>
      <div className="w-[18px] h-[18px] flex items-center justify-center flex-shrink-0">
        {id === 'critical-power' && (
          <svg className="w-[16px] h-[16px] stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
            <rect x="6" y="6" width="12" height="14" rx="1.5" />
            <path d="M10 2h4M12 10l-2 3h4l-2 3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {id === 'thermal-management' && (
          <svg className="w-[16px] h-[16px] stroke-current fill-none animate-[spin_8s_linear_infinite]" viewBox="0 0 24 24" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="2" />
            <path d="M12 9c2-2 4-1 4-1s-1 3-3 3M12 15c-2 2-4 1-4 1s1-3 3-3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 12c2 2 1 4 1 4s-3-1-3-3M9 12c-2-2-1-4-1-4s3 1 3 3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {id === 'racks-enclosures' && (
          <svg className="w-[16px] h-[16px] stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
            <rect x="4" y="3" width="16" height="18" rx="1.5" />
            <path d="M7 7h10M7 11h10M7 15h10M7 19h10" strokeLinecap="round" />
            <circle cx="5.5" cy="7" r="0.5" fill="currentColor" />
            <circle cx="5.5" cy="11" r="0.5" fill="currentColor" />
            <circle cx="5.5" cy="15" r="0.5" fill="currentColor" />
            <circle cx="5.5" cy="19" r="0.5" fill="currentColor" />
          </svg>
        )}
        {id === 'monitoring-management' && (
          <svg className="w-[16px] h-[16px] stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
            <rect x="3" y="4" width="18" height="13" rx="1.5" />
            <path d="M8 20h8M12 17v3" strokeLinecap="round" />
            <path d="M6 12l3-3 4 4 5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
    </div>
  );
}

export function ProductsStickyNav() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      sectors.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) {
          current = id;
        }
      });
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollContainerRef = useRef(null);

  // Keep active nav link in view inside the horizontal scrolling bar
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

  const currentTelemetry = telemetryData[activeId] || defaultTelemetry;

  return (
    <nav className="sticky top-[79px] z-40 bg-inverse-surface border-b border-secondary overflow-hidden">
      <div className="flex items-stretch h-[54px] md:h-[58px]">
        {/* Fixed label pill */}
        <div className="flex-shrink-0 flex items-center gap-3 px-6 md:px-10 bg-accent border-r border-accent/40">
          <span className="material-symbols-outlined text-on-primary text-[16px]">inventory_2</span>
          <span className="font-label-caps text-[10px] text-on-primary tracking-[0.22em] uppercase whitespace-nowrap">
            Our Products
          </span>
        </div>

        {/* Scrollable Clickable Nav Items */}
        <div ref={scrollContainerRef} className="flex md:grid md:grid-cols-4 flex-grow overflow-x-auto scrollbar-hide">
          {sectors.map((sec) => {
            const isActive = activeId === sec.id;
            return (
              <button
                key={sec.id}
                id={`nav-item-${sec.id}`}
                onClick={(e) => handleNavClick(e, sec.id)}
                className={`group relative flex items-center justify-start md:justify-center px-4 md:px-6 py-4 flex-shrink-0 border-r border-white/10 transition-all duration-300 text-left outline-none ${
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

                {/* Index number */}
                <span className={`font-mono text-[10px] tracking-wider transition-colors duration-300 mr-2 ${
                  isActive ? 'text-accent' : 'text-surface-variant/40 group-hover:text-accent/70'
                }`}>
                  {sec.num}
                </span>

                {/* Divider dot */}
                <span className={`w-1 h-1 rounded-full flex-shrink-0 transition-colors duration-300 mr-2 ${
                  isActive ? 'bg-accent/70' : 'bg-surface-variant/20'
                }`}></span>

                {/* Sector Icon SVG */}
                <SectorSVG id={sec.id} isActive={isActive} />

                {/* Label */}
                <span className={`font-label-caps text-[10px] tracking-[0.18em] uppercase whitespace-nowrap transition-colors duration-300 ${
                  isActive ? 'text-inverse-on-surface' : 'text-surface-variant/70 group-hover:text-inverse-on-surface'
                }`}>
                  {sec.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Telemetry Scrolling Stripe */}
      <div className="overflow-hidden border-t border-white/5 py-1 bg-black/45">
        <div className="relative flex items-center overflow-hidden h-[18px]">
          <div
            className="flex gap-16 items-center whitespace-nowrap w-max"
            style={{ animation: 'productsMarquee 30s linear infinite' }}
          >
            <span className="font-mono text-[9px] tracking-[0.15em] text-accent/60 uppercase">
              {currentTelemetry.ticker}
            </span>
            <span className="font-mono text-[9px] tracking-[0.15em] text-accent/60 uppercase">
              {currentTelemetry.ticker}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes productsMarquee {
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
