import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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

// ─── Mega menu data – sourced from actual Products & Services content ──────
const MEGA_MENUS = {
  Products: {
    sections: [
      {
        id: 'critical-power',
        title: 'Critical Power',
        Icon: IconBolt,
        link: '/products/ups',
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
        link: '/products/liquid-cooling',
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
        link: '/products/integrated-solutions',
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
        link: '/products/digital-infrastructure',
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
  { label: 'About',    to: '/about' },
  { label: 'News',     to: '/news' },
];

// ─── Section card inside mega menu ─────────────────────────────────────────
function MegaSection({ section, onClick, index }) {
  const [hovered, setHovered] = useState(false);
  const { Icon, title, items, link } = section;

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, delay: 0.04 + index * 0.05, ease: [0.25, 1, 0.5, 1] }}
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
  const [open, setOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef(null);
  const headerRef  = useRef(null);

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
  const close = () => setOpen(null);

  const menu = open ? MEGA_MENUS[open] : null;
  const headerH = headerRef.current?.offsetHeight ?? 64;

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface/95 backdrop-blur-xl border-b border-outline-variant/40 shadow-sm'
            : 'bg-surface border-b border-outline-variant/30'
        }`}
      >
        <nav className="flex justify-between items-center w-full px-8 py-2 md:py-3 max-w-[1440px] mx-auto">

          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 relative h-12 md:h-14 w-[120px] md:w-[160px]" onClick={close}>
            <img
              src="/arihantaa-vertical-logo.png"
              alt="Arihantaa Powertech Logo"
              className="absolute top-1/2 -translate-y-1/2 left-0 h-[75px] md:h-[100px] w-auto object-contain max-w-none"
            />
          </Link>

          {/* Nav links */}
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
                    'font-label-caps text-label-caps px-4 py-2.5 flex items-center gap-1 transition-colors duration-200 relative group',
                    isActive(to)
                      ? 'text-accent'
                      : 'text-secondary hover:text-on-surface',
                  ].join(' ')}
                >
                  {/* Active/hover underline */}
                  <span className={`absolute bottom-0 left-4 right-4 h-[2px] bg-accent transition-transform duration-200 origin-left ${
                    isActive(to) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                  {label}
                  {hasMega && (
                    <motion.span
                      className="inline-flex items-center justify-center w-4 h-4 text-[16px] font-light leading-none"
                      animate={{ rotate: open === label ? 45 : 0 }}
                      transition={{ duration: 0.22, ease: [0.25, 1, 0.5, 1] }}
                    >
                      +
                    </motion.span>
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-5">
            {/* Expandable search */}
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

            <Link
              to="/contact"
              onClick={close}
              className="font-label-caps text-[11px] tracking-[0.12em] inline-flex items-center justify-center bg-accent text-white hover:bg-primary px-5 py-2.5 transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      </header>

      {/* ── Mega Menu Panel ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && menu && (
          <motion.div
            key={open}
            className="fixed left-0 right-0 z-40 bg-surface border-b border-outline-variant/40 shadow-2xl overflow-hidden"
            style={{ top: headerH }}
            onMouseEnter={() => handleEnter(open)}
            onMouseLeave={handleLeave}
            initial={{ opacity: 0, y: -10, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, y: -10, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
          >
            {/* Accent top border */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-primary to-accent/30" />

            <div className="max-w-[1440px] mx-auto px-10 py-10">
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
                  className="shrink-0 inline-flex items-center gap-2 bg-accent text-white font-label-caps text-[10px] uppercase tracking-[0.16em] px-6 py-3 hover:bg-primary transition-colors duration-200"
                >
                  Talk to a Specialist
                  <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-30 bg-black/15 backdrop-blur-[2px]"
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
