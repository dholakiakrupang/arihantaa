import { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Constants ──────────────────────────────────────────────────────────────
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];
const EASE_OUT_QUART = [0.25, 1, 0.5, 1];
const EASE_IN_OUT_EXPO = [0.87, 0, 0.13, 1];

// ─── Senior Level Animated Quote Button ──────────────────────────────────────
function AnimatedQuoteButton({ onClick, className = '' }) {
  const text = "GET A QUOTE";
  return (
    <Link
      to="/contact"
      onClick={onClick}
      className={`group relative flex items-center justify-center overflow-hidden border border-accent/20 px-6 py-2.5 min-w-[150px] bg-transparent transition-colors duration-500 ${className}`}
    >
      {/* Sweep backgrounds (Diagonal slice effect) */}
      <div className="absolute inset-0 bg-secondary -translate-x-[120%] group-hover:translate-x-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] z-0 skew-x-12 scale-110 origin-left" />
      <div className="absolute inset-0 bg-accent -translate-x-[120%] group-hover:translate-x-0 transition-transform duration-[600ms] delay-[50ms] ease-[cubic-bezier(0.76,0,0.24,1)] z-0" />

      {/* Staggered text roll-up */}
      <div className="relative z-10 flex overflow-hidden font-label-caps text-[11px] tracking-[0.2em] font-semibold text-accent">
        {text.split('').map((char, i) => (
          <div key={i} className="relative flex flex-col items-center justify-center">
            <span 
              className="inline-block transition-transform duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[150%]"
              style={{ transitionDelay: `${i * 0.02}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
            <span 
              className="absolute top-full left-0 text-white inline-block transition-transform duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
              style={{ transitionDelay: `${i * 0.02}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          </div>
        ))}
      </div>
      
      {/* Right arrow icon pushes in */}
      <div className="relative z-10 ml-2 overflow-hidden flex items-center h-[14px]">
        <span className="material-symbols-outlined text-[13px] text-accent group-hover:text-white -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-[400ms] delay-300 ease-[cubic-bezier(0.76,0,0.24,1)]">
          arrow_forward
        </span>
      </div>
    </Link>
  );
}

// ─── Animated SVG Icons ────────────────────────────────────────────────────
function IconBolt({ active }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <motion.path
        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
        animate={active ? { pathLength: [0, 1] } : { pathLength: 1 }}
        transition={{ duration: 0.5 }}
      />
    </svg>
  );
}
function IconThermo({ active }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <motion.path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"
        animate={active ? { scale: [1, 1.1, 1] } : { scale: 1 }}
        transition={{ duration: 0.4 }}
      />
    </svg>
  );
}
function IconServer({ active }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <motion.line x1="6" y1="6" x2="6.01" y2="6"
        animate={active ? { opacity: [1, 0, 1] } : { opacity: 1 }}
        transition={{ duration: 0.6, repeat: active ? Infinity : 0 }}
      />
      <motion.line x1="6" y1="18" x2="6.01" y2="18"
        animate={active ? { opacity: [1, 0, 1] } : { opacity: 1 }}
        transition={{ duration: 0.6, repeat: active ? Infinity : 0, delay: 0.3 }}
      />
    </svg>
  );
}
function IconMonitor({ active }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <motion.path d="M8 21h8M12 17v4"
        animate={active ? { opacity: [0, 1] } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </svg>
  );
}
function IconWrench({ active }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <motion.path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
        animate={active ? { rotate: [0, 15, -15, 0] } : { rotate: 0 }}
        transition={{ duration: 0.5 }}
      />
    </svg>
  );
}
function IconConstruction({ active }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <motion.path d="M2 20h20M17 20V8M12 20V4M7 20v-8"
        animate={active ? { scaleY: [0, 1] } : { scaleY: 1 }}
        transition={{ duration: 0.5 }}
        style={{ transformOrigin: 'bottom' }}
      />
    </svg>
  );
}
function IconGlobe({ active }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <motion.path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
        animate={active ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 2, ease: 'linear', repeat: active ? Infinity : 0 }}
        style={{ transformOrigin: 'center' }}
      />
    </svg>
  );
}

// ─── Mega menu data ────────────────────────────────────────────────────────
const MEGA_MENUS = {
  Products: {
    sections: [
      {
        id: 'critical-power',
        title: 'Critical Power',
        Icon: IconBolt,
        link: '/sectors/critical-power',
        items: [
          { label: 'Uninterruptible Power Supplies (UPS)', link: '/products/ups' },
          { label: 'DC Power Systems', link: '/products/dc-power' },
          { label: 'Power Transfer Switches', link: '/products/power-distribution' },
        ],
      },
      {
        id: 'thermal',
        title: 'Thermal Management',
        Icon: IconThermo,
        link: '/sectors/thermal-management',
        items: [
          { label: 'Perimeter Cooling Systems', link: '/products/enclosure-cooling' },
          { label: 'In-Row Cooling Units', link: '/products/enclosure-cooling' },
          { label: 'Direct Liquid Cooling', link: '/products/liquid-cooling' },
        ],
      },
      {
        id: 'racks',
        title: 'Racks & Enclosures',
        Icon: IconServer,
        link: '/sectors/racks-enclosures',
        items: [
          { label: 'Open-Frame Server Racks', link: '/products/integrated-solutions' },
          { label: 'IP-Rated Industrial Cabinets', link: '/products/integrated-solutions' },
          { label: 'Micro-Data Centre Pods', link: '/products/integrated-solutions' },
        ],
      },
      {
        id: 'monitoring',
        title: 'Monitoring & Management',
        Icon: IconMonitor,
        link: '/sectors/monitoring-management',
        items: [
          { label: 'Data Centre Infrastructure Mgmt', link: '/products/digital-infrastructure' },
          { label: 'Intelligent PDUs & Smart Sensors', link: '/products/digital-infrastructure' },
          { label: 'Building Management Systems', link: '/products/digital-infrastructure' },
        ],
      },
    ],
    cta: { label: 'View All Products', link: '/products' },
  },
  Services: {
    sections: [
      {
        id: 'maintenance',
        title: 'Maintenance',
        Icon: IconWrench,
        link: '/services/spare-parts',
        items: [
          { label: 'Spare Parts & Parts Management', link: '/services/spare-parts' },
          { label: 'Preventive Maintenance', link: '/services/preventive-maint' },
          { label: 'UPS & Battery Services', link: '/services/ups-battery' },
          { label: 'Preventive Maint. for Industrial', link: '/services/industrial-maint' },
        ],
      },
      {
        id: 'project',
        title: 'Project Services',
        Icon: IconConstruction,
        link: '/services/project-commission',
        items: [
          { label: 'Project & Commissioning Services', link: '/services/project-commission' },
          { label: 'Performance Optimization', link: '/services/performance-opt' },
          { label: 'Generator & Switchgear Services', link: '/services/generator' },
        ],
      },
      {
        id: 'remote',
        title: 'Remote & Specialised',
        Icon: IconGlobe,
        link: '/services/remote-services',
        items: [
          { label: 'Remote Services (24/7 NOC)', link: '/services/remote-services' },
          { label: 'Liquid Cooling Services', link: '/services/liquid-cooling' },
        ],
      },
    ],
    cta: { label: 'View All Services', link: '/services' },
  },
};

const NAV_LINKS = [
  { label: 'Home',     to: '/' },
  { label: 'Products', to: '/products', hasMega: true },
  { label: 'Services', to: '/services', hasMega: true },
  { label: 'Projects', to: '/projects' },
  { label: 'News',     to: '/news' },
  { label: 'About',    to: '/about' },
];

// ─── Animated Hamburger Icon (premium 2-line → X morph) ───────────────────
function HamburgerButton({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center justify-center w-11 h-11 md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={isOpen}
    >
      <span className="relative w-[22px] h-[14px] block">
        {/* Top line */}
        <span
          className={`block absolute left-0 h-[1.5px] bg-on-surface transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            isOpen ? 'w-[22px] top-1/2 -translate-y-1/2 rotate-45' : 'w-[22px] top-0'
          }`}
        />
        {/* Bottom line — shorter by default, same length on X */}
        <span
          className={`block absolute left-0 h-[1.5px] bg-on-surface transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            isOpen ? 'w-[22px] top-1/2 -translate-y-1/2 -rotate-45' : 'w-[14px] bottom-0'
          }`}
        />
      </span>
    </button>
  );
}

// ─── Mobile Accordion Section ──────────────────────────────────────────────
function MobileAccordion({ label, index, sections, cta, onNavigate, isActive }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between py-5 min-h-[56px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-inset"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-5">
          <span className={`font-headline text-[11px] font-light tabular-nums w-5 ${isActive ? 'text-accent' : 'text-white/20'}`}>
            0{index + 1}
          </span>
          <span className={`font-headline text-[18px] sm:text-[20px] font-semibold uppercase tracking-[0.02em] ${isActive ? 'text-accent' : 'text-white'}`}>
            {label}
          </span>
        </div>
        <motion.span
          className="material-symbols-outlined text-white/25 text-[18px]"
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.2, ease: EASE_OUT_QUART }}
        >
          add
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_OUT_QUART }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-10 space-y-5">
              {sections.map((section) => (
                <div key={section.id}>
                  <Link
                    to={section.link}
                    onClick={onNavigate}
                    className="flex items-center gap-2.5 mb-3 group/sec"
                  >
                    <span className="text-accent/50 group-hover/sec:text-accent transition-colors">
                      <section.Icon active={false} />
                    </span>
                    <span className="font-label-caps text-[9px] font-bold tracking-[0.22em] uppercase text-white/50 group-hover/sec:text-accent transition-colors">
                      {section.title}
                    </span>
                  </Link>
                  <ul className="pl-7 border-l border-white/[0.06]">
                    {section.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          to={item.link}
                          onClick={onNavigate}
                          className="flex items-center font-body text-[13px] text-white/40 hover:text-white/80 py-2.5 min-h-[40px] transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <Link
                to={cta.link}
                onClick={onNavigate}
                className="inline-flex items-center gap-1.5 font-label-caps text-[9px] tracking-[0.2em] uppercase text-accent/70 hover:text-accent transition-colors pl-7"
              >
                {cta.label}
                <span className="material-symbols-outlined text-[11px]">arrow_forward</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Mobile Drawer ─────────────────────────────────────────────────────────
function MobileDrawer({ isOpen, onClose }) {
  const drawerRef = useRef(null);
  const location = useLocation();

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !drawerRef.current) return;
    const drawer = drawerRef.current;
    const focusable = drawer.querySelectorAll(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length > 0) focusable[0].focus();

    const handleTab = (e) => {
      if (e.key !== 'Tab') return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  const linkVariants = {
    hidden: { opacity: 0, x: 24 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.08 + i * 0.04,
        duration: 0.4,
        ease: EASE_OUT_EXPO,
      },
    }),
    exit: { opacity: 0, x: 12, transition: { duration: 0.1 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[95] bg-black/70 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            ref={drawerRef}
            className="fixed top-0 right-0 bottom-0 z-[96] w-full max-w-[380px] bg-[#080808] md:hidden flex flex-col overflow-hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-[50%] h-[25%] pointer-events-none z-0" style={{
              background: 'radial-gradient(ellipse at top right, rgba(233,101,43,0.06) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }} />

            {/* Corner marks */}
            <div className="absolute top-3 right-3 w-4 h-4 pointer-events-none z-[1]">
              <svg viewBox="0 0 16 16" fill="none"><path d="M0 16 L0 0 L16 0" stroke="rgba(233,101,43,0.3)" strokeWidth="1" /></svg>
            </div>
            <div className="absolute bottom-3 left-3 w-4 h-4 pointer-events-none z-[1] rotate-180">
              <svg viewBox="0 0 16 16" fill="none"><path d="M0 16 L0 0 L16 0" stroke="rgba(233,101,43,0.3)" strokeWidth="1" /></svg>
            </div>

            {/* ── Header ── */}
            <div className="relative z-10 flex items-center justify-between px-6 py-5 shrink-0">
              <Link to="/" onClick={onClose} className="inline-block">
                <img
                  src="/arihantaa-vertical-logo.png"
                  alt="Arihantaa Powertech Logo"
                  className="h-[44px] w-auto object-contain brightness-200"
                />
              </Link>
              <button
                onClick={onClose}
                className="flex items-center justify-center w-10 h-10 border border-white/[0.08] text-white/40 hover:text-white hover:border-white/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Close navigation menu"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            {/* Accent line */}
            <div className="mx-6 h-px bg-gradient-to-r from-accent/40 via-white/[0.06] to-transparent" />

            {/* ── Navigation ── */}
            <div className="relative z-10 flex-1 overflow-y-auto px-6 pt-5 pb-6 overscroll-contain">
              <nav aria-label="Mobile navigation">
                {/* Section label */}
                <motion.div
                  className="flex items-center gap-2.5 mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.12, duration: 0.3 }}
                >
                  <div className="w-3 h-px bg-accent/40" />
                  <span className="font-label-caps text-[8px] text-white/20 tracking-[0.3em] uppercase">Menu</span>
                </motion.div>

                <ul>
                  {NAV_LINKS.map(({ label, to, hasMega }, i) => {
                    if (hasMega) {
                      const menu = MEGA_MENUS[label];
                      return (
                        <motion.li
                          key={label}
                          custom={i}
                          variants={linkVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <MobileAccordion
                            label={label}
                            index={i}
                            sections={menu.sections}
                            cta={menu.cta}
                            onNavigate={onClose}
                            isActive={isActive(to)}
                          />
                        </motion.li>
                      );
                    }
                    return (
                      <motion.li
                        key={label}
                        custom={i}
                        variants={linkVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="border-b border-white/[0.06]"
                      >
                        <Link
                          to={to}
                          onClick={onClose}
                          className="flex items-center justify-between py-5 min-h-[56px]"
                        >
                          <div className="flex items-center gap-5">
                            <span className={`font-headline text-[11px] font-light tabular-nums w-5 ${isActive(to) ? 'text-accent' : 'text-white/20'}`}>
                              0{i + 1}
                            </span>
                            <span className={`font-headline text-[18px] sm:text-[20px] font-semibold uppercase tracking-[0.02em] ${isActive(to) ? 'text-accent' : 'text-white'}`}>
                              {label}
                            </span>
                          </div>
                          {isActive(to) && (
                            <span className="material-symbols-outlined text-accent/30 text-[14px]">arrow_forward</span>
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* ── Bottom Bar ── */}
            <motion.div
              className="relative z-10 shrink-0 border-t border-white/[0.06] bg-[#060606]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.35, ease: EASE_OUT_EXPO }}
            >
              <Link
                to="/contact"
                onClick={onClose}
                className="group relative flex items-center justify-center gap-2.5 w-full bg-accent text-white font-label-caps text-[10px] uppercase tracking-[0.18em] py-[18px] min-h-[52px] overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 -translate-x-[120%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] skew-x-12 scale-110" />
                <span className="relative z-10">Get a Quote</span>
                <span className="material-symbols-outlined text-[14px] relative z-10 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>

              <div className="flex items-center justify-between px-5 py-2.5 bg-[#050505]">
                <span className="font-label-caps text-[7px] text-white/15 tracking-[0.25em] uppercase">Arihantaa Powertech</span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=22.6708056,71.5723889"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-label-caps text-[7px] text-white/15 hover:text-accent/40 tracking-[0.15em] transition-colors"
                >
                  22°40′N 71°34′E
                </a>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Section card inside desktop mega menu ──────────────────────────────────
function MegaSection({ section, onClick, index }) {
  const [hovered, setHovered] = useState(false);
  const { Icon, title, items, link } = section;

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, delay: 0.04 + index * 0.05, ease: EASE_OUT_QUART }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Category header */}
      <Link
        to={link}
        onClick={onClick}
        className="flex items-center gap-2.5 mb-4 group/header"
      >
        <span className={`transition-colors duration-200 ${hovered ? 'text-accent' : 'text-on-surface/40'}`}>
          <Icon active={hovered} />
        </span>
        <span className="font-label-caps text-[10px] font-bold tracking-[0.22em] uppercase text-on-surface group-hover/header:text-accent transition-colors duration-200">
          {title}
        </span>
        <span className="material-symbols-outlined text-[12px] text-on-surface/30 group-hover/header:text-accent group-hover/header:translate-x-0.5 transition-all duration-200 ml-auto">
          arrow_forward
        </span>
      </Link>

      {/* Items */}
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              to={item.link}
              onClick={onClick}
              className="flex items-center gap-2 font-body text-[13px] text-secondary hover:text-on-surface py-1 pl-1 group/item hover:pl-2.5 transition-all duration-200"
            >
              <span className="w-[3px] h-[3px] rounded-full bg-outline-variant group-hover/item:bg-accent transition-colors shrink-0" />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// ─── Header ────────────────────────────────────────────────────────────────
export function Header() {
  const location   = useLocation();
  const [open, setOpen] = useState(null);        // desktop mega menu
  const [mobileOpen, setMobileOpen] = useState(false); // mobile drawer
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef(null);
  const headerRef  = useRef(null);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpen(null);
  }, [location.pathname]);

  // Track scroll for border/shadow on header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  const handleEnter = (label) => {
    clearTimeout(closeTimer.current);
    setOpen(label);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  };
  const close = useCallback(() => setOpen(null), []);
  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const toggleMobile = useCallback(() => setMobileOpen((prev) => !prev), []);

  const menu = open ? MEGA_MENUS[open] : null;
  const headerH = headerRef.current?.offsetHeight ?? 64;

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? 'bg-surface/95 backdrop-blur-xl border-b border-outline-variant/40 shadow-sm'
            : 'bg-surface border-b border-outline-variant/30'
        }`}
      >
        {/* Responsive padding: tighter on mobile, wider on desktop */}
        <nav className="flex justify-between items-center w-full px-4 sm:px-6 md:px-8 py-2 md:py-3 max-w-[1440px] mx-auto">

          {/* Logo — responsive sizing */}
          <Link
            to="/"
            className="flex items-center flex-shrink-0 relative h-10 sm:h-12 md:h-14 w-[100px] sm:w-[120px] md:w-[160px]"
            onClick={() => { close(); closeMobile(); }}
          >
            <img
              src="/arihantaa-vertical-logo.png"
              alt="Arihantaa Powertech Logo"
              className="absolute top-1/2 -translate-y-1/2 left-0 h-[60px] sm:h-[75px] md:h-[100px] w-auto object-contain max-w-none"
            />
          </Link>

          {/* ── Desktop Nav links (hidden below md) ── */}
          <div className="hidden md:flex gap-1 items-center">
            {NAV_LINKS.map(({ label, to, hasMega }) => (
              <div
                key={label}
                className="relative"
                onMouseEnter={() => hasMega && handleEnter(label)}
                onMouseLeave={() => hasMega && handleLeave()}
              >
                <Link
                  to={to}
                  onClick={close}
                  className={[
                    'font-label-caps text-label-caps px-3 lg:px-4 py-2.5 flex items-center gap-1 transition-colors duration-200 relative group min-h-[44px]',
                    isActive(to)
                      ? 'text-accent'
                      : 'text-secondary hover:text-on-surface',
                  ].join(' ')}
                  aria-expanded={hasMega ? open === label : undefined}
                  aria-haspopup={hasMega ? 'true' : undefined}
                >
                  {/* Active/hover underline */}
                  <span className={`absolute bottom-0 left-3 right-3 lg:left-4 lg:right-4 h-[2px] bg-accent transition-transform duration-200 origin-left ${
                    isActive(to) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                  {label}
                  {hasMega && (
                    <motion.span
                      className="inline-flex items-center justify-center w-4 h-4 text-[16px] font-light leading-none"
                      animate={{ rotate: open === label ? 45 : 0 }}
                      transition={{ duration: 0.22, ease: EASE_OUT_QUART }}
                    >
                      +
                    </motion.span>
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* ── Right actions ── */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
            {/* Expandable search — desktop only */}
            <div className="relative group/search hidden lg:block overflow-hidden transition-all duration-500 w-9 h-9 focus-within:w-52 border border-outline-variant/40 bg-surface-container-highest cursor-pointer">
              <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-secondary group-focus-within/search:text-accent transition-colors pointer-events-none" style={{ fontSize: '1.1rem' }}>
                search
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-full pl-8 pr-3 bg-transparent text-sm font-body text-on-surface placeholder:text-secondary focus:outline-none opacity-0 group-focus-within/search:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* Desktop CTA — hidden on mobile */}
            <AnimatedQuoteButton onClick={close} className="hidden sm:flex" />

            {/* Hamburger — visible only on mobile */}
            <HamburgerButton isOpen={mobileOpen} onClick={toggleMobile} />
          </div>
        </nav>
      </header>

      {/* ── Mobile Drawer ─────────────────────────────────────────────────── */}
      <MobileDrawer isOpen={mobileOpen} onClose={closeMobile} />

      {/* ── Desktop Mega Menu Panel ───────────────────────────────────────── */}
      <AnimatePresence>
        {open && menu && (
          <motion.div
            key={open}
            className="fixed left-0 right-0 z-[90] bg-surface border-b border-outline-variant/40 shadow-2xl overflow-hidden hidden md:block"
            style={{ top: headerH }}
            onMouseEnter={() => handleEnter(open)}
            onMouseLeave={handleLeave}
            initial={{ opacity: 0, y: -10, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, y: -10, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.3, ease: EASE_OUT_QUART }}
          >
            {/* Accent top border */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-primary to-accent/30" />

            <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-10">
              {/* Header row */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-5 bg-accent" />
                  <span className="font-label-caps text-[10px] text-accent tracking-[0.3em] uppercase">
                    {open === 'Products' ? 'Product Categories' : 'Service Categories'}
                  </span>
                </div>
                <Link
                  to={menu.cta.link}
                  onClick={close}
                  className="inline-flex items-center gap-2 font-label-caps text-[10px] tracking-[0.18em] uppercase text-secondary hover:text-accent border-b border-outline-variant hover:border-accent pb-0.5 transition-all duration-200 group"
                >
                  {menu.cta.label}
                  <span className="material-symbols-outlined text-[13px] group-hover:translate-x-0.5 transition-transform duration-200">
                    arrow_forward
                  </span>
                </Link>
              </div>

              {/* Section columns */}
              <div className={`grid gap-x-8 gap-y-8 ${
                open === 'Products'
                  ? 'grid-cols-2 md:grid-cols-4'
                  : 'grid-cols-1 md:grid-cols-3'
              }`}>
                {menu.sections.map((section, i) => (
                  <MegaSection
                    key={section.id}
                    section={section}
                    onClick={close}
                    index={i}
                  />
                ))}
              </div>

              {/* Bottom strip */}
              <div className="mt-8 pt-6 border-t border-outline-variant/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="font-body text-[13px] text-secondary">
                  {open === 'Products'
                    ? 'Looking for a specific solution? Our engineers can help you choose.'
                    : 'Need a custom service plan? We tailor every engagement to your needs.'}
                </p>
                <Link
                  to="/contact"
                  onClick={close}
                  className="shrink-0 inline-flex items-center gap-2 bg-accent text-white font-label-caps text-[10px] uppercase tracking-[0.16em] px-6 py-3 min-h-[44px] hover:bg-primary transition-colors duration-200"
                >
                  Talk to a Specialist
                  <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Mega Menu Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] bg-black/15 backdrop-blur-[2px] hidden md:block"
            style={{ top: headerH }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          />
        )}
      </AnimatePresence>
    </>
  );
}
