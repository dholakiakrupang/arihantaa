import { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

// ─── Constants ──────────────────────────────────────────────────────────────
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];
const EASE_OUT_QUART = [0.25, 1, 0.5, 1];
const EASE_IN_OUT_EXPO = [0.87, 0, 0.13, 1];

// ─── Senior Level Animated Quote Button ──────────────────────────────────────
function AnimatedQuoteButton({ onClick, className = '' }) {
  return (
    <Button
      to="/contact"
      onClick={onClick}
      variant="nav"
      className={`w-auto min-w-[160px] rounded-none ${className}`}
    >
      GET A QUOTE
    </Button>
  );
}

// ─── Animated SVG Icons ────────────────────────────────────────────────────
function IconBolt({ active }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <motion.path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"
        animate={active ? { scale: [1, 1.1, 1] } : { scale: 1 }}
        transition={{ duration: 0.4 }}
      />
    </svg>
  );
}
function IconServer({ active }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    <div className="border-b border-white/[0.12]">
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
          className="material-symbols-outlined text-white/25 text-[30px]"
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
                <span className="material-symbols-outlined text-[22px]">arrow_forward</span>
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
                <span className="material-symbols-outlined text-[30px]">close</span>
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
                        className="border-b border-white/[0.12]"
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
                            <span className="material-symbols-outlined text-accent/30 text-[26px]">arrow_forward</span>
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
              <Button
                to="/contact"
                onClick={onClose}
                variant="primary"
                theme="black"
                size="lg"
                className="w-full rounded-none"
              >
                Get a Quote
              </Button>

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
      className="group border-r border-b border-outline-variant/30 p-8 hover:bg-accent/[0.015] transition-colors duration-300 flex flex-col justify-between"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, delay: 0.04 + index * 0.05, ease: EASE_OUT_QUART }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        {/* Category header */}
        <Link
          to={link}
          onClick={onClick}
          className="flex items-center gap-3 mb-6 group/header"
        >
          <span className={`transition-colors duration-200 ${hovered ? 'text-accent' : 'text-on-surface/40'}`}>
            <Icon active={hovered} />
          </span>
          <span className="font-label-caps text-[11px] font-bold tracking-[0.22em] uppercase text-on-surface group-hover/header:text-accent transition-colors duration-200">
            {title}
          </span>
          <span className="material-symbols-outlined text-[26px] text-on-surface/30 group-hover/header:text-accent group-hover/header:translate-x-0.5 transition-all duration-200 ml-auto">
            arrow_forward
          </span>
        </Link>

        {/* Items */}
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.label}>
              <Link
                to={item.link}
                onClick={onClick}
                className="flex items-center gap-2.5 font-body text-[13px] text-secondary hover:text-on-surface py-1 pl-1 group/item hover:pl-2.5 transition-all duration-200"
              >
                <span className="w-[4px] h-[4px] rounded-full bg-outline-variant group-hover/item:bg-accent transition-colors shrink-0" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// ─── Search Data ──────────────────────────────────────────────────────────
// All items are flat — each has a `type` tag and a `link` to the real route.
const ALL_SEARCH_ITEMS = [
  // ── Products ──────────────────────────────────────────────────────────
  { type: 'product', icon: 'bolt',            label: 'Uninterruptible Power Supplies (UPS)', desc: 'Double-conversion enterprise backup power for mission-critical infrastructure',  link: '/products/ups' },
  { type: 'product', icon: 'power',           label: 'DC Power Systems',                    desc: 'Highly reliable DC power for telecom & industrial continuity',                   link: '/products/dc-power' },
  { type: 'product', icon: 'electric_bolt',   label: 'Power Distribution',                  desc: 'Optimise power delivery to your critical IT equipment',                          link: '/products/power-distribution' },
  { type: 'product', icon: 'factory',         label: 'Industrial AC & DC Systems',          desc: 'Robust power systems engineered for harsh industrial environments',               link: '/products/industrial-ac-dc' },
  { type: 'product', icon: 'water_drop',      label: 'Liquid Cooling Solutions',            desc: 'Next-gen direct liquid cooling for ultra-high-density GPU & AI clusters',        link: '/products/liquid-cooling' },
  { type: 'product', icon: 'thermostat',      label: 'Enclosure Cooling',                   desc: 'Precision thermal management for electrical enclosures & cabinets',              link: '/products/enclosure-cooling' },
  { type: 'product', icon: 'dns',             label: 'Integrated Solutions',                desc: 'Fully integrated rack, power & cooling turnkey infrastructure',                  link: '/products/integrated-solutions' },
  { type: 'product', icon: 'monitor_heart',   label: 'Digital Infrastructure Solutions',   desc: 'Complete DCIM monitoring & management platforms',                               link: '/products/digital-infrastructure' },
  // ── Services ──────────────────────────────────────────────────────────
  { type: 'service', icon: 'inventory_2',     label: 'Spare Parts & Management',            desc: 'Genuine OEM and high-compatibility parts sourced globally',                      link: '/services/spare-parts' },
  { type: 'service', icon: 'build_circle',    label: 'Preventive Maintenance',              desc: 'Structured scheduled maintenance programmes to resolve potential failures',       link: '/services/preventive-maint' },
  { type: 'service', icon: 'speed',           label: 'Performance Optimization',            desc: 'Data-driven performance tuning that extracts maximum efficiency',               link: '/services/performance-opt' },
  { type: 'service', icon: 'router',          label: 'Remote Services (24/7 NOC)',          desc: '24/7 remote monitoring and instant incident response',                          link: '/services/remote-services' },
  { type: 'service', icon: 'engineering',     label: 'Project & Commissioning',             desc: 'End-to-end project management from design to handover',                         link: '/services/project-commission' },
  { type: 'service', icon: 'precision_manufacturing', label: 'Industrial Maintenance',      desc: 'Specialised maintenance for heavy industrial environments',                      link: '/services/industrial-maint' },
  { type: 'service', icon: 'battery_full',    label: 'UPS & Battery Services',              desc: 'Comprehensive lifecycle management for UPS systems and battery banks',           link: '/services/ups-battery' },
  { type: 'service', icon: 'settings',        label: 'Generator & Switchgear',              desc: 'Full-spectrum generator and switchgear servicing for reliable power',            link: '/services/generator' },
  { type: 'service', icon: 'water',           label: 'Liquid Cooling Services',             desc: 'Advanced liquid cooling installation, commissioning & maintenance',              link: '/services/liquid-cooling' },
  // ── Sectors ───────────────────────────────────────────────────────────
  { type: 'sector',  icon: 'bolt',            label: 'Critical Power',                      desc: 'UPS, DC systems & power transfer for uptime-critical environments',              link: '/sectors/critical-power' },
  { type: 'sector',  icon: 'thermostat',      label: 'Thermal Management',                  desc: 'In-row cooling, liquid cooling & perimeter climate control',                     link: '/sectors/thermal-management' },
  { type: 'sector',  icon: 'dns',             label: 'Racks & Enclosures',                  desc: 'Server racks, IP-rated cabinets & micro data centre pods',                       link: '/sectors/racks-enclosures' },
  { type: 'sector',  icon: 'monitor_heart',   label: 'Monitoring & DCIM',                   desc: 'Intelligent PDUs, DCIM platforms & BMS integration',                            link: '/sectors/monitoring-management' },
  // ── Projects ──────────────────────────────────────────────────────────
  { type: 'project', icon: 'local_hospital',  label: 'Haridwar Medical College',            desc: 'Complete HT/LT Installation',                                                   link: '/projects' },
  { type: 'project', icon: 'engineering',     label: 'GMERS Sola',                          desc: 'Maintenance & Support Services',                                                link: '/projects' },
  { type: 'project', icon: 'local_airport',   label: 'Rajkot Airport',                      desc: 'Aviation Infrastructure Backbone',                                              link: '/projects' },
  { type: 'project', icon: 'subway',          label: 'Surat Metro',                         desc: 'Ongoing Power Grid Project',                                                    link: '/projects' },
];

const TYPE_META = {
  product: { label: 'Product',  accent: 'bg-accent/20 text-accent',          icon: 'category' },
  service: { label: 'Service',  accent: 'bg-blue-500/20 text-blue-300',      icon: 'build' },
  sector:  { label: 'Sector',   accent: 'bg-emerald-500/20 text-emerald-300', icon: 'hub' },
  project: { label: 'Project',  accent: 'bg-purple-500/20 text-purple-300',  icon: 'apartment' },
};

function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery]     = useState('');
  const [activeIdx, setActiveIdx] = useState(-1);
  const inputRef  = useRef(null);
  const listRef   = useRef(null);
  const navigate  = useNavigate();

  const q = query.toLowerCase().trim();

  // Filter items matching query
  const filtered = q
    ? ALL_SEARCH_ITEMS.filter(i =>
        i.label.toLowerCase().includes(q) ||
        i.desc.toLowerCase().includes(q)  ||
        i.type.toLowerCase().includes(q)
      )
    : [];

  // Group results
  const grouped = {
    product: filtered.filter(i => i.type === 'product'),
    service: filtered.filter(i => i.type === 'service'),
    sector:  filtered.filter(i => i.type === 'sector'),
    project: filtered.filter(i => i.type === 'project'),
  };

  // Flattened results for unified keyboard navigation matching actual displayed order
  const flatResults = [
    ...grouped.product,
    ...grouped.service,
    ...grouped.sector,
    ...grouped.project
  ];

  const hasResults = flatResults.length > 0;

  // Reset active on query change
  useEffect(() => { setActiveIdx(-1); }, [query]);

  // ESC + keyboard nav
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (!q) return; // Disable keyboard nav on empty state

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIdx(prev => Math.min(prev + 1, flatResults.length - 1));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIdx(prev => Math.max(prev - 1, -1));
      }
      if (e.key === 'Enter' && activeIdx >= 0 && flatResults[activeIdx]) {
        navigate(flatResults[activeIdx].link);
        onClose();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose, flatResults, activeIdx, navigate, q]);

  // Auto-scroll active item into view
  useEffect(() => {
    if (activeIdx < 0 || !listRef.current) return;
    const el = listRef.current.querySelector(`[data-idx="${activeIdx}"]`);
    el?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [activeIdx]);

  // Focus + reset on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
      setQuery('');
      setActiveIdx(-1);
    }
  }, [isOpen]);

  // Body lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Text highlight helper
  const highlight = (text) => {
    if (!q) return text;
    const idx = text.toLowerCase().indexOf(q);
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <span className="text-accent font-bold">{text.slice(idx, idx + q.length)}</span>
        {text.slice(idx + q.length)}
      </>
    );
  };

  const ResultCard = ({ item }) => {
    const flatIndex = flatResults.findIndex(r => r.link === item.link && r.label === item.label);
    const isKeyActive = flatIndex === activeIdx;
    const meta = TYPE_META[item.type];
    return (
      <Link
        data-idx={flatIndex}
        to={item.link}
        onClick={onClose}
        onMouseEnter={() => setActiveIdx(flatIndex)}
        className={`flex items-center gap-4 p-4 rounded-none border transition-all duration-300 ${
          isKeyActive 
            ? 'bg-[#1a1e2f]/90 border-accent/80' 
            : 'bg-[#121520]/75 border-white/[0.08] hover:bg-[#151928]/80 hover:border-white/20'
        }`}
      >
        {/* Left Icon */}
        <div className={`w-9 h-9 flex items-center justify-center shrink-0 border rounded-none transition-all duration-300 ${
          isKeyActive
            ? 'bg-accent/10 border-accent/30 text-accent'
            : 'bg-white/[0.02] border-white/10 text-white/40'
        }`}>
          <span className="material-symbols-outlined text-[30px]">
            {item.icon}
          </span>
        </div>

        {/* Text Details */}
        <div className="flex-grow min-w-0">
          <div className="flex items-center justify-between gap-2 mb-0.5">
            <h4 className={`font-headline text-[13px] font-bold tracking-tight truncate transition-colors duration-300 ${
              isKeyActive ? 'text-accent' : 'text-white'
            }`}>
              {highlight(item.label)}
            </h4>
            <span className={`font-label-caps text-[8px] tracking-[0.15em] px-1.5 py-0.5 rounded-none shrink-0 border ${
              isKeyActive 
                ? 'bg-accent/10 border-accent/20 text-accent' 
                : 'bg-white/[0.03] border-white/[0.06] text-white/30'
            }`}>
              {meta.label.toUpperCase()}
            </span>
          </div>
          <p className="font-body text-[11px] text-white/35 leading-snug truncate">
            {item.desc}
          </p>
        </div>

        {/* Right Arrow */}
        <span className={`material-symbols-outlined text-[27px] shrink-0 transition-all duration-300 ${
          isKeyActive ? 'text-accent translate-x-1' : 'text-white/20'
        }`}>
          arrow_forward
        </span>
      </Link>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Glassmorphism Backdrop — page blurs through ── */}
          <motion.div
            className="fixed inset-0 z-[150] pointer-events-auto"
            style={{
              backdropFilter: 'blur(16px) saturate(0.6) brightness(0.4)',
              WebkitBackdropFilter: 'blur(16px) saturate(0.6) brightness(0.4)',
              background: 'rgba(6, 8, 12, 0.7)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* ── Spotlight Center-Aligned Command Palette ── */}
          <motion.div
            className="fixed left-1/2 z-[151] flex flex-col pointer-events-auto rounded-none border border-white/20 overflow-hidden"
            style={{
              x: '-50%',
              width: '90dvw',
              maxWidth: '680px',
              maxHeight: '70dvh',
              background: '#0a0a0a',
              boxShadow: 'none',
            }}
            initial={{ scale: 0.96, opacity: 0, y: '30vh' }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              y: q ? '12vh' : '28vh' // Slides up when typing to reveal results below
            }}
            exit={{ scale: 0.96, opacity: 0, y: '30vh' }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top orange glow strip */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-accent to-transparent shrink-0 opacity-80" />

            {/* ── Search Input Block ── */}
            <div className="relative flex items-center h-[72px] px-5 bg-white/[0.01] border-b border-white/10">
              <span className="material-symbols-outlined text-accent animate-pulse shrink-0 mr-4" style={{ fontSize: '34px' }}>search</span>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type to search products, services, cases..."
                className="flex-1 h-full bg-transparent border-none text-white text-[16px] font-body placeholder:text-white/20 focus:outline-none focus:ring-0"
                style={{ caretColor: '#E9652B' }}
                autoComplete="off"
              />
              <div className="flex items-center gap-3 shrink-0 ml-3">
                {query && (
                  <button 
                    onClick={() => { setQuery(''); inputRef.current?.focus(); }} 
                    className="p-1 rounded-none text-white/30 hover:text-white/70 hover:bg-white/[0.05] transition-all"
                  >
                    <span className="material-symbols-outlined text-[29px]">close</span>
                  </button>
                )}
                <span className="font-label-caps text-[8px] text-white/25 border border-white/15 px-1.5 py-0.5 rounded-none tracking-wider select-none uppercase">ESC</span>
              </div>
            </div>

            {/* ── Results Dropdown Panel (Only visible when q is entered) ── */}
            {q && (
              <div 
                ref={listRef} 
                className="flex-grow overflow-y-auto border-t border-white/[0.06] bg-black/[0.15]" 
                style={{ scrollbarWidth: 'none', maxHeight: 'calc(70dvh - 74px)' }}
              >
                {/* Case 1: No matches */}
                {!hasResults && (
                  <div className="flex flex-col items-center justify-center py-12 gap-2.5">
                    <span className="material-symbols-outlined text-[56px] text-white/10">search_off</span>
                    <p className="font-body text-[13px] text-white/30">No matches found for <span className="text-accent">"{query}"</span></p>
                  </div>
                )}

                {/* Case 2: Structured Card Grid Results */}
                {hasResults && (
                  <div className="flex flex-col gap-6 p-5">
                    
                    {/* Products Group */}
                    {grouped.product.length > 0 && (
                      <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-3 select-none">
                          <span className="font-label-caps text-[10px] text-accent tracking-[0.25em] uppercase font-bold">Products</span>
                          <span className="h-[1px] flex-grow bg-accent/10" />
                          <span className="font-label-caps text-[9px] text-white/30 tracking-[0.1em]">{grouped.product.length}</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {grouped.product.map((item) => (
                            <ResultCard key={item.link + item.label} item={item} />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Services Group */}
                    {grouped.service.length > 0 && (
                      <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-3 select-none">
                          <span className="font-label-caps text-[10px] text-blue-400 tracking-[0.25em] uppercase font-bold">Services</span>
                          <span className="h-[1px] flex-grow bg-blue-500/10" />
                          <span className="font-label-caps text-[9px] text-white/30 tracking-[0.1em]">{grouped.service.length}</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {grouped.service.map((item) => (
                            <ResultCard key={item.link + item.label} item={item} />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Sectors Group */}
                    {grouped.sector.length > 0 && (
                      <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-3 select-none">
                          <span className="font-label-caps text-[10px] text-emerald-400 tracking-[0.25em] uppercase font-bold">Sectors</span>
                          <span className="h-[1px] flex-grow bg-emerald-500/10" />
                          <span className="font-label-caps text-[9px] text-white/30 tracking-[0.1em]">{grouped.sector.length}</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {grouped.sector.map((item) => (
                            <ResultCard key={item.link + item.label} item={item} />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Projects Group */}
                    {grouped.project.length > 0 && (
                      <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-3 select-none">
                          <span className="font-label-caps text-[10px] text-purple-400 tracking-[0.25em] uppercase font-bold">Projects</span>
                          <span className="h-[1px] flex-grow bg-purple-500/10" />
                          <span className="font-label-caps text-[9px] text-white/30 tracking-[0.1em]">{grouped.project.length}</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {grouped.project.map((item) => (
                            <ResultCard key={item.link + item.label} item={item} />
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                )}
                
                {/* Result count strip at bottom */}
                {hasResults && (
                  <div className="px-5 py-2.5 bg-[#0d0d0d] border-t border-white/10 flex justify-between items-center select-none shrink-0">
                    <span className="font-label-caps text-[8px] text-white/15 tracking-[0.15em] uppercase">
                      Use <span className="border border-white/10 px-1 py-0.2 rounded-none">↑↓</span> to navigate • <span className="border border-white/10 px-1 py-0.2 rounded-none">↵</span> to open
                    </span>
                    <span className="font-label-caps text-[8px] text-white/25 tracking-[0.15em] uppercase">
                      {flatResults.length} matches found
                    </span>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

}


// ─── Header ────────────────────────────────────────────────────────────────
export function Header() {
  const location   = useLocation();
  const [open, setOpen] = useState(null);        // desktop mega menu
  const [mobileOpen, setMobileOpen] = useState(false); // mobile drawer
  const [searchOpen, setSearchOpen] = useState(false);  // search overlay
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
  const openSearch  = useCallback(() => { setOpen(null); setMobileOpen(false); setSearchOpen(true); }, []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

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
        {/* Responsive padding aligned to standard B2B grid lines */}
        <nav className="flex justify-between items-center w-full px-8 md:px-16 py-2 md:py-3 max-w-[1440px] mx-auto">

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
                      className="inline-flex items-center justify-center w-4 h-4 text-[20px] font-light leading-none"
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
            {/* Search trigger */}
            <button
              onClick={openSearch}
              aria-label="Open search"
              className="relative flex items-center justify-center w-9 h-9 border border-outline-variant/40 text-secondary hover:text-accent hover:border-accent/50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent group"
            >
              <span className="material-symbols-outlined transition-transform duration-200 group-hover:scale-110" style={{ fontSize: '1.1rem' }}>search</span>
            </button>

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

            <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-10">
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
                  <span className="material-symbols-outlined text-[24px] group-hover:translate-x-0.5 transition-transform duration-200">
                    arrow_forward
                  </span>
                </Link>
              </div>

              {/* Section columns */}
              <div className={`grid border-t border-l border-outline-variant/30 ${
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
                <Button
                  to="/contact"
                  onClick={close}
                  variant="primary"
                  theme="light"
                  className="shrink-0 rounded-none h-[44px]"
                >
                  TALK TO A SPECIALIST
                </Button>
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

      {/* ── Search Overlay ──────────────────────────────────────────────────── */}
      <SearchOverlay isOpen={searchOpen} onClose={closeSearch} />
    </>
  );
}
