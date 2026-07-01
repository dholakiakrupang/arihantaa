import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const sectors = [
  {
    id: "l-t-tta-switchgear-panels",
    num: "01",
    label: "L&T TTA Panel",
    icon: "electric_bolt",
  },
  {
    id: "lucy-electric-ring-main-units",
    num: "02",
    label: "Lucy RMU",
    icon: "hub",
  },
  {
    id: "lucy-electric-compact-substations",
    num: "03",
    label: "Lucy CSS",
    icon: "domain",
  },
  {
    id: "vertiv-liebert-ups-systems",
    num: "04",
    label: "Vertiv UPS",
    icon: "battery_charging_full",
  },
  {
    id: "capital-goods-solutions",
    num: "05",
    label: "Capital Goods",
    icon: "settings_input_component",
  },
];

const doubledSectors = [...sectors, ...sectors, ...sectors, ...sectors];

function SectorSVG({ id, isActive }) {
  const containerClasses = `transition-all duration-300 ease-out flex items-center justify-center w-[18px] mr-2 ${
    isActive
      ? "opacity-100 scale-100 text-accent"
      : "opacity-0 scale-75 text-surface-variant/50 group-hover:opacity-100 group-hover:scale-100 group-hover:text-surface-variant"
  }`;

  return (
    <div className={containerClasses}>
      <div className="w-[18px] h-[18px] flex items-center justify-center flex-shrink-0">
        {id === "l-t-tta-switchgear-panels" && (
          <svg
            className="w-[16px] h-[16px] stroke-current fill-none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
          >
            <path
              d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {id === "lucy-electric-ring-main-units" && (
          <svg
            className="w-[16px] h-[16px] stroke-current fill-none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
          >
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
            <line x1="6" y1="6" x2="6.01" y2="6" />
            <line x1="6" y1="18" x2="6.01" y2="18" />
          </svg>
        )}
        {id === "lucy-electric-compact-substations" && (
          <svg
            className="w-[16px] h-[16px] stroke-current fill-none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
          >
            <path d="M2 20h20M17 20V8M12 20V4M7 20v-8" strokeLinecap="round" />
          </svg>
        )}
        {id === "vertiv-liebert-ups-systems" && (
          <svg
            className="w-[16px] h-[16px] stroke-current fill-none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
          >
            <rect x="6" y="6" width="12" height="14" rx="1.5" />
            <path
              d="M10 2h4M12 10l-2 3h4l-2 3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {id === "capital-goods-solutions" && (
          <svg
            className="w-[16px] h-[16px] stroke-current fill-none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path
              d="M8 21h8M12 17v4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </div>
  );
}

export function ProductsStickyNav() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      const threshold = isMobile ? 136 : isTablet ? 140 : 142;

      sectors.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - threshold) {
          current = id;
        }
      });
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollContainerRef = useRef(null);

  // Keep active nav link in view inside the horizontal scrolling bar
  useEffect(() => {
    if (activeId && scrollContainerRef.current) {
      const activeEl = document.getElementById(`nav-item-${activeId}`);
      if (activeEl) {
        activeEl.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeId]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      let offset = 138;
      if (isMobile) {
        offset = 134;
      } else if (isTablet) {
        offset = 138;
      } else {
        offset = 138;
      }

      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-[80px] z-40 bg-inverse-surface border-b border-secondary overflow-hidden">
      <div className="flex items-stretch h-[54px] md:h-[58px]">
        {/* Fixed label pill — hidden below lg */}
        <div className="hidden lg:flex flex-shrink-0 items-center gap-3 px-6 lg:px-10 bg-accent border-r border-accent/40">
          <span className="material-symbols-outlined text-on-primary text-[14px] lg:text-[16px] !font-normal">
            inventory_2
          </span>
          <span className="font-label-caps text-[9px] lg:text-[10px] text-on-primary tracking-[0.22em] uppercase whitespace-nowrap font-bold">
            Our Products
          </span>
        </div>

        {/* Scrollable Clickable Nav Items */}
        <div
          ref={scrollContainerRef}
          className="flex lg:grid lg:grid-cols-5 flex-grow overflow-x-auto scrollbar-hide"
        >
          {/* Mobile-only label pill inside the scroll list */}
          <div className="flex lg:hidden items-center gap-2 px-5 bg-accent border-r border-accent/40 flex-shrink-0 select-none">
            <span className="material-symbols-outlined text-on-primary text-[14px] !font-normal">
              inventory_2
            </span>
            <span className="font-label-caps text-[9px] text-on-primary tracking-[0.22em] uppercase whitespace-nowrap font-bold">
              Our Products
            </span>
          </div>

          {sectors.map((sec) => {
            const isActive = activeId === sec.id;
            return (
              <button
                key={sec.id}
                id={`nav-item-${sec.id}`}
                onClick={(e) => handleNavClick(e, sec.id)}
                className={`group relative flex items-center justify-start lg:justify-center px-4 lg:px-6 py-4 flex-shrink-0 border-r border-white/10 transition-all duration-300 text-left outline-none ${
                  isActive ? "bg-black/30" : "hover:bg-white/5"
                }`}
              >
                {/* Active indicator bar */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-300 ${
                    isActive
                      ? "bg-accent"
                      : "bg-transparent group-hover:bg-white/20"
                  }`}
                />

                {/* Index number */}
                <span
                  className={`font-mono text-[10px] tracking-wider transition-colors duration-300 mr-2 ${
                    isActive
                      ? "text-accent"
                      : "text-surface-variant/40 group-hover:text-accent/70"
                  }`}
                >
                  {sec.num}
                </span>

                {/* Divider square */}
                <span
                  className={`w-1 h-1 rounded-none flex-shrink-0 transition-colors duration-300 mr-2 ${
                    isActive ? "bg-accent/70" : "bg-surface-variant/20"
                  }`}
                ></span>

                {/* Sector Icon SVG */}
                <SectorSVG id={sec.id} isActive={isActive} />

                {/* Label */}
                <span
                  className={`font-label-caps text-[10px] tracking-[0.18em] uppercase whitespace-nowrap transition-colors duration-300 ${
                    isActive
                      ? "text-inverse-on-surface"
                      : "text-surface-variant/70 group-hover:text-inverse-on-surface"
                  }`}
                >
                  {sec.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Subtle marquee ticker at the bottom — purely decorative, shows all product sector names looping */}
      <div className="overflow-hidden border-t border-white/5 py-1.5 bg-inverse-surface/80">
        <div
          className="flex gap-8 items-center whitespace-nowrap w-max"
          style={{ animation: "productsMarquee 35s linear infinite" }}
        >
          {doubledSectors.map((sec, i) => (
            <span key={i} className="flex items-center gap-8">
              <button
                onClick={(e) => handleNavClick(e, sec.id)}
                className={`font-label-caps text-[10px] tracking-[0.18em] uppercase transition-colors duration-200 ${
                  activeId === sec.id
                    ? "text-accent"
                    : "text-surface-variant/50 hover:text-accent"
                }`}
              >
                {sec.num} — {sec.label}
              </button>
              <span className="text-accent/30 text-[10px] select-none font-bold">
                ■
              </span>
            </span>
          ))}
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
