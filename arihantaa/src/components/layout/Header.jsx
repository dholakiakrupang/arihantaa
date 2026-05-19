import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// ── Mega menu data (Vertiv-inspired content, Arihantaa-mapped) ──────────────
const MEGA_MENUS = {
  Products: {
    featured: {
      label: 'Critical Power',
      desc: 'UPS systems, power distribution, switchgear, and busway solutions for mission-critical environments.',
      icon: 'bolt',
      link: '/products',
    },
    columns: [
      {
        title: 'Critical Power',
        icon: 'bolt',
        items: [
          { label: 'Uninterruptible Power (UPS)', link: '/products' },
          { label: 'DC Power Systems', link: '/products' },
          { label: 'Power Distribution', link: '/products' },
          { label: 'Switchgear & Switchboard', link: '/products' },
          { label: 'Busway & Busduct', link: '/products' },
          { label: 'Static Transfer Switches', link: '/products' },
        ],
      },
      {
        title: 'Thermal Management',
        icon: 'thermostat',
        items: [
          { label: 'Liquid Cooling Solutions', link: '/products' },
          { label: 'Room Cooling', link: '/products' },
          { label: 'In-Row Cooling', link: '/products' },
          { label: 'Enclosure Cooling', link: '/products' },
          { label: 'Free Cooling Chillers', link: '/products' },
          { label: 'Heat Rejection', link: '/products' },
        ],
      },
      {
        title: 'Racks & Monitoring',
        icon: 'dns',
        items: [
          { label: 'Racks & Containment', link: '/products' },
          { label: 'Integrated Solutions', link: '/products' },
          { label: 'Outdoor Enclosures', link: '/products' },
          { label: 'Digital Infrastructure Mgmt', link: '/products' },
          { label: 'Power Monitoring', link: '/products' },
          { label: 'Thermal Control Systems', link: '/products' },
        ],
      },
    ],
  },
  Services: {
    featured: {
      label: 'Turnkey Projects',
      desc: 'End-to-end engineering from concept to commissioning for data centers and industrial facilities.',
      icon: 'engineering',
      link: '/services',
    },
    columns: [
      {
        title: 'Maintenance',
        icon: 'build',
        items: [
          { label: 'Preventive Maintenance', link: '/services' },
          { label: 'UPS & Battery Services', link: '/services' },
          { label: 'Spare Parts Management', link: '/services' },
          { label: 'Performance Optimization', link: '/services' },
        ],
      },
      {
        title: 'Project Services',
        icon: 'construction',
        items: [
          { label: 'Electrical Contracting', link: '/services' },
          { label: 'MEPF Solutions', link: '/services' },
          { label: 'Project & Commissioning', link: '/services' },
          { label: 'Remote Services', link: '/services' },
        ],
      },
      {
        title: 'Specialised',
        icon: 'science',
        items: [
          { label: 'Data Center Infrastructure', link: '/services' },
          { label: 'HVAC Systems', link: '/services' },
          { label: 'Liquid Cooling Services', link: '/services' },
          { label: 'Generator & Switchgear', link: '/services' },
        ],
      },
    ],
  },
};

const NAV_LINKS = [
  { label: 'Home',     to: '/' },
  { label: 'Products', to: '/products', hasMega: true },
  { label: 'Services', to: '/services', hasMega: true },
  { label: 'About',    to: '/about' },
  { label: 'News',     to: '/news' },
];

export function Header() {
  const location   = useLocation();
  const [open, setOpen] = useState(null); // which mega menu is open
  const closeTimer = useRef(null);

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  const handleEnter = (label) => {
    clearTimeout(closeTimer.current);
    setOpen(label);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 120);
  };

  return (
    <>
      <header className="bg-surface border-b border-outline-variant/30 sticky top-0 z-50">
        <nav className="flex justify-between items-center w-full px-8 py-2 md:py-3 max-w-[1440px] mx-auto">

          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 relative h-12 md:h-14 w-[120px] md:w-[160px]">
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
                  className={[
                    'font-label-caps text-label-caps px-4 py-2 flex items-center gap-1 transition-colors duration-200',
                    isActive(to)
                      ? 'text-accent border-b-2 border-accent'
                      : 'text-secondary hover:text-on-surface',
                  ].join(' ')}
                >
                  {label}
                  {hasMega && (
                    <span
                      className={`material-symbols-outlined text-[14px] transition-transform duration-300 ${open === label ? 'rotate-180' : ''}`}
                    >
                      expand_more
                    </span>
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-6">
            {/* Expandable search */}
            <div className="relative group/search hidden lg:block overflow-hidden transition-all duration-500 w-10 h-10 focus-within:w-56 border border-outline-variant/30 bg-surface-container-highest rounded-none cursor-pointer focus-within:cursor-text">
              <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-secondary group-focus-within/search:text-accent transition-colors pointer-events-none" style={{ fontSize: '1.25rem' }}>
                search
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-full pl-9 pr-3 bg-transparent text-sm font-body text-on-surface placeholder:text-secondary focus:outline-none opacity-0 group-focus-within/search:opacity-100 transition-opacity duration-300"
              />
            </div>
            <span className="material-symbols-outlined text-on-surface cursor-pointer block lg:hidden" style={{ fontSize: '1.5rem' }}>
              search
            </span>
            <Link
              to="/contact"
              className="font-label-caps text-label-caps transition-all inline-flex items-center justify-center border-2 border-on-surface hover:bg-on-surface hover:text-surface px-6 py-3"
            >
              Get a Quote
            </Link>
          </div>

        </nav>
      </header>

      {/* ── Mega Menu Panel (rendered outside header to span full width) ── */}
      <AnimatePresence>
        {open && MEGA_MENUS[open] && (
          <motion.div
            key={open}
            className="fixed top-[calc(var(--header-h,64px))] left-0 right-0 z-40 bg-surface border-b border-outline-variant/40 shadow-2xl"
            style={{ top: document.querySelector('header')?.offsetHeight ?? 64 }}
            onMouseEnter={() => handleEnter(open)}
            onMouseLeave={handleLeave}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="max-w-[1440px] mx-auto px-8 py-10 grid grid-cols-12 gap-8">

              {/* Left: Featured card */}
              <div className="col-span-3">
                <div className="bg-inverse-surface h-full p-7 flex flex-col justify-between group">
                  <div>
                    <div className="w-10 h-10 bg-accent flex items-center justify-center mb-5">
                      <span className="material-symbols-outlined text-white text-[20px]">
                        {MEGA_MENUS[open].featured.icon}
                      </span>
                    </div>
                    <p className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase mb-2">Featured</p>
                    <h3 className="font-headline text-[22px] font-bold text-white leading-tight mb-3">
                      {MEGA_MENUS[open].featured.label}
                    </h3>
                    <p className="font-body text-[13px] text-white/60 leading-relaxed">
                      {MEGA_MENUS[open].featured.desc}
                    </p>
                  </div>
                  <Link
                    to={MEGA_MENUS[open].featured.link}
                    className="inline-flex items-center gap-2 font-label-caps text-[10px] tracking-[0.15em] uppercase text-accent border-b border-accent/40 hover:border-accent pb-0.5 mt-8 transition-colors group-hover:gap-3 duration-300"
                    onClick={() => setOpen(null)}
                  >
                    Explore All
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Right: 3 columns of links */}
              <div className="col-span-9 grid grid-cols-3 gap-8 pl-4 border-l border-outline-variant/20">
                {MEGA_MENUS[open].columns.map((col) => (
                  <div key={col.title}>
                    <div className="flex items-center gap-2 mb-5">
                      <span className="material-symbols-outlined text-accent text-[16px]">{col.icon}</span>
                      <h4 className="font-label-caps text-[10px] text-on-background tracking-[0.2em] uppercase font-bold">
                        {col.title}
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {col.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            to={item.link}
                            onClick={() => setOpen(null)}
                            className="flex items-center gap-2 font-body text-[14px] text-secondary hover:text-accent hover:translate-x-1 transition-all duration-200 group/item"
                          >
                            <span className="w-1 h-1 rounded-full bg-accent/40 group-hover/item:bg-accent transition-colors shrink-0" />
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Bottom action strip */}
                <div className="col-span-3 pt-6 border-t border-outline-variant/20 flex items-center justify-between">
                  <p className="font-body text-[13px] text-secondary">
                    Need help choosing the right solution?
                  </p>
                  <Link
                    to="/contact"
                    onClick={() => setOpen(null)}
                    className="inline-flex items-center gap-2 bg-accent text-white font-label-caps text-[10px] uppercase tracking-[0.15em] px-5 py-3 hover:bg-primary transition-colors"
                  >
                    Talk to a Specialist
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
            style={{ top: document.querySelector('header')?.offsetHeight ?? 64 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
