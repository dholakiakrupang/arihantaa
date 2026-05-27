import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { ProductImageGallery } from '../components/ui/ProductImageGallery';
import { engineeredProductsData } from '../data/engineeredProductsData';
import { UnifiedCTA } from '../components/sections/UnifiedCTA';

/* ── Static Mappings ─────────────────────────────────────────────────────────── */

const categoryMap = {
  'ups': 'Uninterruptible Power Supplies (UPS)',
  'dc-power': 'DC Power Systems',
  'power-distribution': 'Power Distribution',
  'industrial-ac-dc': 'Industrial AC & DC Systems',
  'liquid-cooling': 'Liquid Cooling Solutions',
  'enclosure-cooling': 'Enclosure Cooling',
  'integrated-solutions': 'Integrated Solutions',
  'digital-infrastructure': 'Digital Infrastructure Solutions'
};

const categoryIcons = {
  'ups': 'battery_charging_full',
  'dc-power': 'bolt',
  'power-distribution': 'grid_view',
  'industrial-ac-dc': 'electrical_services',
  'liquid-cooling': 'ac_unit',
  'enclosure-cooling': 'mode_cool',
  'integrated-solutions': 'developer_board',
  'digital-infrastructure': 'monitoring'
};

const getStatIcon = (label) => {
  const lbl = label.toLowerCase();
  if (lbl.includes('capacity') || lbl.includes('power')) return 'bolt';
  if (lbl.includes('efficiency') || lbl.includes('rating')) return 'trending_up';
  if (lbl.includes('voltage')) return 'electrical_services';
  if (lbl.includes('parallel') || lbl.includes('hub')) return 'device_hub';
  if (lbl.includes('footprint') || lbl.includes('size') || lbl.includes('dimension')) return 'aspect_ratio';
  if (lbl.includes('noise')) return 'volume_down';
  if (lbl.includes('logistics') || lbl.includes('dispatch')) return 'schedule';
  if (lbl.includes('accuracy') || lbl.includes('rate') || lbl.includes('index')) return 'verified';
  if (lbl.includes('heat') || lbl.includes('cooling') || lbl.includes('cop')) return 'thermostat';
  if (lbl.includes('flow')) return 'water_drop';
  if (lbl.includes('coolant') || lbl.includes('refrigerant')) return 'science';
  if (lbl.includes('pump') || lbl.includes('redundancy')) return 'sync';
  if (lbl.includes('rack') || lbl.includes('integration')) return 'dns';
  if (lbl.includes('deployment')) return 'cloud_upload';
  if (lbl.includes('alert') || lbl.includes('time')) return 'notification_important';
  if (lbl.includes('data') || lbl.includes('retention')) return 'database';
  if (lbl.includes('support') || lbl.includes('network')) return 'support_agent';
  if (lbl.includes('breaker')) return 'toggle_on';
  if (lbl.includes('monitoring')) return 'monitor_heart';
  if (lbl.includes('design') || lbl.includes('life')) return 'engineering';
  if (lbl.includes('ip')) return 'shield';
  if (lbl.includes('dynamic') || lbl.includes('stability')) return 'equalizer';
  return 'settings_input_component';
};

const getFeatureIcon = (index) => {
  const icons = [
    'settings_input_component', 'shield', 'cable', 'speed',
    'monitor_heart', 'battery_5_bar', 'thermostat', 'hub',
    'precision_manufacturing', 'bolt', 'verified', 'tune'
  ];
  return icons[index % icons.length];
};

/* ── Framer Motion Variants ──────────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
  })
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

/* ── Nav Items ───────────────────────────────────────────────────────────────── */

const NAV_ITEMS = [
  { id: 'overview', label: 'OVERVIEW', icon: 'visibility' },
  { id: 'features', label: 'FEATURES', icon: 'star' },
  { id: 'specifications', label: 'SPECIFICATIONS', icon: 'data_table' },
  { id: 'downloads', label: 'DOWNLOADS', icon: 'download' }
];

/* ── Main Component ──────────────────────────────────────────────────────────── */

export function ProductDetail() {
  const { categoryId, productId } = useParams();
  const [activeSection, setActiveSection] = useState('overview');
  const [unitSystem, setUnitSystem] = useState('metric');
  const [activeTab, setActiveTab] = useState('elec');
  const [imageError, setImageError] = useState(false);
  const sectionRefs = useRef({});

  // Scroll to top on product change
  useEffect(() => {
    window.scrollTo(0, 0);
    setImageError(false);
    setActiveTab('elec');
    setUnitSystem('metric');
  }, [productId]);

  // Precision Scroll Spy – IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sectionIds = ['overview', 'features', 'specifications', 'downloads'];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [productId]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      const yOffset = isMobile ? -120 : isTablet ? -136 : -140;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Find product
  const product = engineeredProductsData.find(item => item.id === productId) || engineeredProductsData[0];
  const categoryTitle = categoryMap[categoryId] || categoryMap[product.categoryId] || 'Products';
  const categoryIcon = categoryIcons[product.categoryId] || 'settings_input_component';

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="text-center">
          <span className="material-symbols-outlined text-[64px] text-secondary/30 mb-6 block">search_off</span>
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-3">Product Not Found</h2>
          <p className="text-secondary mb-8 text-[15px]">The requested product could not be located in our catalog.</p>
          <Button to="/products" variant="primary" theme="light" icon="arrow_forward" iconPosition="right" noTextAnimation={false}>
            RETURN TO CATALOG
          </Button>
        </div>
      </div>
    );
  }

  // Unit conversion helpers
  const convertDimension = (val, system) => {
    if (typeof val === 'number') {
      return system === 'metric' ? `${val} mm` : `${(val / 25.4).toFixed(1)} in`;
    }
    return val || 'N/A';
  };

  const convertWeight = (weightStr, system) => {
    if (!weightStr) return 'N/A';
    if (system === 'metric') return weightStr;
    const numbers = weightStr.match(/\d+/g);
    if (!numbers) return weightStr;
    const converted = numbers.map(num => Math.round(parseInt(num, 10) * 2.20462));
    return converted.length === 2
      ? `${converted[0]}–${converted[1]} lbs`
      : converted.length === 1
        ? `${converted[0]} lbs`
        : weightStr;
  };

  // Derived spec values for tabbed display
  const specCapacity = product.stats?.find(s => s.label.includes('CAPACITY'))?.value || '6–200 kVA';
  const specInputVoltage = product.models?.[0]?.inputVoltage || '400V (3-Phase) / 230V (1-Phase)';
  const specOutputVoltage = product.models?.[0]?.outputVoltage || '400V ± 1% (Static)';
  const specEfficiency = product.stats?.find(s => s.label.includes('EFFICIENCY'))?.value || 'Up to 97% in Eco Mode';
  const specCooling = product.categoryId === 'liquid-cooling'
    ? 'Liquid-to-Air / Liquid-to-Water direct exchange'
    : 'Redundant Forced Air Cooling';
  const specEnclosure = product.categoryId === 'liquid-cooling'
    ? 'IP54 Standard'
    : 'IP42 Standard (IP54 Optional)';
  const specFootprint = product.stats?.find(s => s.label.includes('FOOTPRINT'))?.value || 'Highly optimized space-saving footprint';
  const specTemp = product.stats?.find(s => s.label.includes('TEMP'))?.value || '-10°C to +50°C';

  // Spec tab data
  const specTabs = [
    {
      key: 'elec',
      label: 'Electrical',
      icon: 'bolt',
      rows: [
        ['Power / Capacity Range', specCapacity],
        ['Input Voltage Configuration', specInputVoltage],
        ['Output Voltage Regulation', specOutputVoltage],
        ['Operating Efficiency', specEfficiency],
      ]
    },
    {
      key: 'phys',
      label: 'Physical',
      icon: 'straighten',
      rows: [
        ['Enclosure Protection Rating', specEnclosure],
        ['Cooling Architecture', specCooling],
        ['System Footprint & Frame', specFootprint],
      ]
    },
    {
      key: 'env',
      label: 'Environmental',
      icon: 'thermostat',
      rows: [
        ['Operating Temperature Range', specTemp],
        ['Operating Altitude Limits', '< 1000m without derating'],
        ['Relative Humidity', '0% to 95% (Non-condensing)'],
      ]
    }
  ];

  const activeSpecTab = specTabs.find(t => t.key === activeTab) || specTabs[0];

  return (
    <div className="bg-background text-on-background font-body min-h-screen selection:bg-primary-container selection:text-on-primary-container">

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1 — Sticky Sub-Navigation Bar
          ═══════════════════════════════════════════════════════════════════════ */}
      <div className="bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant/30 sticky top-[56px] sm:top-[64px] md:top-[80px] z-40 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 py-3">

            {/* Breadcrumb Trail */}
            <nav className="text-[11.5px] text-secondary flex flex-wrap items-center gap-1 font-medium leading-none" aria-label="Breadcrumb">
              <Link to="/products" className="hover:text-accent transition-colors duration-200 flex items-center gap-1">
                <span className="material-symbols-outlined text-[17px]">open_in_new</span>
                Products
              </Link>
              <span className="material-symbols-outlined text-[16px] text-secondary/30 select-none">chevron_right</span>
              <Link to={`/products/${product.categoryId}`} className="hover:text-accent transition-colors duration-200">
                {categoryTitle}
              </Link>
              <span className="material-symbols-outlined text-[16px] text-secondary/30 select-none">chevron_right</span>
              <span className="text-on-surface font-semibold truncate max-w-[200px]">{product.title}</span>
            </nav>

            {/* Anchor Navigation Tabs */}
            <div className="flex overflow-x-auto w-full lg:w-auto gap-1 pb-0.5 lg:pb-0 hide-scrollbar select-none">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative px-4 py-2 font-label-caps text-[10px] tracking-[0.12em] font-bold whitespace-nowrap transition-all duration-300 flex items-center ${
                    activeSection === item.id
                      ? 'text-accent'
                      : 'text-secondary hover:text-on-surface'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[17px] transition-all duration-300 overflow-hidden ${
                    activeSection === item.id 
                      ? 'max-w-[22px] opacity-100 mr-1.5' 
                      : 'max-w-0 opacity-0 mr-0 group-hover:max-w-[22px] group-hover:opacity-100 group-hover:mr-1.5'
                  }`}>
                    {item.icon}
                  </span>
                  {item.label}
                  {/* Active indicator bar */}
                  <span className={`absolute bottom-0 left-2 right-2 h-[2px] bg-accent transition-transform duration-300 origin-left ${
                    activeSection === item.id ? 'scale-x-100' : 'scale-x-0'
                  }`} />
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 2 — Premium Hero / Overview
          ═══════════════════════════════════════════════════════════════════════ */}
      <section id="overview" className="relative overflow-hidden bg-surface-container-lowest">
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-12 border-t border-l border-outline-variant/30 gap-0 relative z-10 bg-white">

          {/* Left Column (Content & CTAs) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="col-span-12 lg:col-span-7 border-r border-b border-outline-variant/30 p-8 md:p-16 flex flex-col justify-center order-2 lg:order-1"
          >
            {/* Category Eyebrow */}
            <motion.span
              variants={fadeUp}
              custom={0}
              className="text-accent font-label-caps text-[10px] tracking-[0.25em] font-bold uppercase mb-3 flex items-center gap-2"
            >
              <span className="w-5 h-[1.5px] bg-accent block" />
              {categoryTitle}
            </motion.span>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-headline text-[30px] md:text-[40px] lg:text-[46px] leading-[1.1] font-black text-on-surface mb-5 uppercase tracking-tight"
            >
              {product.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-secondary text-[15px] md:text-[16px] leading-[1.7] mb-8 max-w-[540px]"
            >
              {product.description}
            </motion.p>

            {/* Stat Badges Grid */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="grid grid-cols-2 sm:grid-cols-4 border-t border-l border-outline-variant/30 gap-0 mb-10 bg-white"
            >
              {product.stats && product.stats.slice(0, 4).map((stat, idx) => (
                <div
                  key={idx}
                  className="border-r border-b border-outline-variant/30 p-4 bg-surface-container-high/20 hover:bg-accent/[0.015] transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-accent text-[20px]">{getStatIcon(stat.label)}</span>
                    <span className="font-label-caps text-[9px] tracking-[0.06em] text-secondary/80 font-bold">{stat.label}</span>
                  </div>
                  <div className="font-headline text-[13px] md:text-[14px] font-bold text-on-surface uppercase truncate">
                    {stat.value}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} custom={4} className="flex flex-col sm:flex-row gap-3.5">
              <Button
                to={`/contact?inquiry=quote&item=${encodeURIComponent(product.title)}`}
                variant="primary"
                theme="light"
                icon="arrow_forward"
                iconPosition="right"
                noTextAnimation={false}
                className="px-8 py-3.5 text-[10px] tracking-[0.2em] font-bold justify-center"
              >
                REQUEST A QUOTE
              </Button>
              <Button
                onClick={() => scrollToSection('downloads')}
                variant="outline"
                theme="light"
                icon="expand_more"
                iconPosition="left"
                noTextAnimation={false}
                className="px-8 py-3.5 text-[10px] tracking-[0.2em] font-bold justify-center"
              >
                DOWNLOAD SPEC SHEET
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column (Image Gallery) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUp}
            className="col-span-12 lg:col-span-5 border-r border-b border-outline-variant/30 pt-12 md:pt-20 lg:pt-24 pb-0 px-0 bg-surface-container-low/10 flex items-center justify-center order-1 lg:order-2 relative"
          >
            <ProductImageGallery
              images={product.images}
              imageSrc={product.imageSrc}
              imageAlt={product.imageAlt}
              categoryIcon={categoryIcon}
              onImageError={() => setImageError(true)}
            />
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 — Core Features & Advantages
          ═══════════════════════════════════════════════════════════════════════ */}
      <section id="features" className="bg-surface-container border-y border-outline-variant/30 py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">

          {/* Section Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="mb-12"
          >
            <h2 className="font-headline text-[24px] md:text-[28px] text-on-surface flex items-center gap-4 font-bold uppercase tracking-tight">
              <span className="w-8 h-[3px] bg-accent block shrink-0" />
              Core Features & Advantages
            </h2>
            <p className="text-secondary text-[14px] mt-3 ml-12 max-w-[520px]">
              Engineered capabilities that set this system apart in demanding operational environments.
            </p>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-outline-variant/30 gap-0 bg-white">
            {product.features && product.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                custom={idx}
                className="bg-surface-container-lowest p-8 border-r border-b border-outline-variant/30 hover:bg-accent/[0.015] transition-all duration-400 flex flex-col group relative"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="material-symbols-outlined text-[34px] text-accent/80 group-hover:text-accent group-hover:scale-110 transition-all duration-300">
                    {getFeatureIcon(idx)}
                  </span>
                  <span className="font-mono text-[14px] text-accent font-bold select-none">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-headline text-[16px] font-bold mb-3 text-on-surface leading-snug uppercase tracking-tight">
                  {feature}
                </h3>
                <p className="text-secondary text-[13.5px] leading-[1.65]">
                  Engineered to deliver high-reliability performance and optimize operational capacity under demanding conditions.
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4 — Technical Specifications & Models
          ═══════════════════════════════════════════════════════════════════════ */}
      <section id="specifications" className="bg-surface-container-lowest py-16 md:py-24 border-b border-outline-variant/30">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">

          {/* Section Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="mb-10"
          >
            <h2 className="font-headline text-[24px] md:text-[28px] text-on-surface flex items-center gap-4 font-bold uppercase tracking-tight">
              <span className="w-8 h-[3px] bg-accent block shrink-0" />
              Technical Specifications
            </h2>
          </motion.div>

          {/* ── Tabbed Specifications Panel ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeUp}
            className="border border-outline-variant/30 bg-white overflow-hidden mb-16 shadow-none"
          >
            {/* Tab Headers */}
            <div className="flex border-b border-outline-variant/30 bg-surface-container-low overflow-x-auto select-none">
              {specTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative px-6 py-4 font-label-caps text-[10px] tracking-[0.12em] font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-2 border-r border-outline-variant/30 ${
                    activeTab === tab.key
                      ? 'text-accent bg-surface-container-lowest'
                      : 'text-secondary hover:text-on-surface hover:bg-surface-container-lowest/50'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">{tab.icon}</span>
                  {tab.label}
                  {/* Active tab indicator */}
                  <span className={`absolute bottom-0 left-0 right-0 h-[2px] bg-accent transition-transform duration-300 ${
                    activeTab === tab.key ? 'scale-x-100' : 'scale-x-0'
                  }`} />
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-0"
              >
                {activeSpecTab.rows.map((row, idx) => (
                  <div
                    key={idx}
                    className="border-r border-b border-outline-variant/20 p-6 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 hover:bg-accent/[0.015] transition-colors duration-200"
                  >
                    <div className="font-headline text-[13.5px] font-bold text-on-surface uppercase tracking-tight sm:w-2/5 shrink-0">
                      {row[0]}
                    </div>
                    <div className="font-body text-[13.5px] text-secondary leading-relaxed">
                      {row[1]}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* ── Model Configuration Table ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeUp}
          >
            {/* Subheading with Metric/Imperial Toggle */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-6">
              <h3 className="font-headline text-[20px] text-on-surface font-bold uppercase tracking-tight flex items-center gap-3">
                <span className="material-symbols-outlined text-accent text-[26px]">comparison</span>
                Model Configuration Options
              </h3>

              {/* Unit Toggle */}
              <div className="flex border border-outline-variant/30 bg-white font-label-caps text-[10px] font-bold select-none shrink-0 self-start sm:self-auto overflow-hidden shadow-none">
                <button
                  onClick={() => setUnitSystem('metric')}
                  className={`px-4 py-2 transition-all duration-300 tracking-wider uppercase flex items-center gap-1.5 ${
                    unitSystem === 'metric'
                      ? 'bg-inverse-surface text-inverse-on-surface'
                      : 'text-secondary hover:bg-surface-container'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">straighten</span>
                  Metric
                </button>
                <button
                  onClick={() => setUnitSystem('imperial')}
                  className={`px-4 py-2 transition-all duration-300 tracking-wider uppercase flex items-center gap-1.5 border-l border-outline-variant/30 ${
                    unitSystem === 'imperial'
                      ? 'bg-inverse-surface text-inverse-on-surface'
                      : 'text-secondary hover:bg-surface-container'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">square_foot</span>
                  Imperial
                </button>
              </div>
            </div>

            {/* Models Data Table */}
            <div className="border border-outline-variant/30 overflow-hidden bg-white shadow-none">
              <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[760px]">
                  <thead>
                    <tr className="bg-surface-container-high/45 border-b border-outline-variant/30 text-on-surface font-label-caps text-[9.5px] tracking-[0.15em] uppercase">
                      <th className="py-4 px-6 font-bold border-r border-outline-variant/20">Model ID</th>
                      <th className="py-4 px-6 font-bold border-r border-outline-variant/20">Capacity</th>
                      <th className="py-4 px-6 font-bold border-r border-outline-variant/20">Voltage Config</th>
                      <th className="py-4 px-6 font-bold border-r border-outline-variant/20">Efficiency</th>
                      <th className="py-4 px-6 font-bold border-r border-outline-variant/20">Dimensions (H × W × D)</th>
                      <th className="py-4 px-6 font-bold">Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.models && product.models.map((model, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-outline-variant/20 last:border-b-0 hover:bg-accent/[0.015] transition-colors duration-200"
                      >
                        <td className="py-4 px-6 font-headline text-[13px] font-bold text-accent border-r border-outline-variant/20">{model.name}</td>
                        <td className="py-4 px-6 text-[13px] text-on-surface font-semibold border-r border-outline-variant/20">{model.capacity || 'N/A'}</td>
                        <td className="py-4 px-6 text-[12.5px] text-secondary border-r border-outline-variant/20">
                          {model.inputVoltage || model.voltage}
                          {model.outputVoltage && ` / ${model.outputVoltage}`}
                        </td>
                        <td className="py-4 px-6 text-[13px] text-secondary font-medium border-r border-outline-variant/20">{model.efficiency || '—'}</td>
                        <td className="py-4 px-6 text-[12.5px] text-secondary whitespace-nowrap border-r border-outline-variant/20">
                          {convertDimension(model.height, unitSystem)} × {convertDimension(model.width, unitSystem)} × {convertDimension(model.depth, unitSystem)}
                        </td>
                        <td className="py-4 px-6 text-[13px] text-on-surface font-semibold">
                          {convertWeight(model.weight, unitSystem)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5 — Downloads & Resources
          ═══════════════════════════════════════════════════════════════════════ */}
      <section id="downloads" className="bg-surface-container py-16 md:py-24 border-b border-outline-variant/30">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">

          {/* Section Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="mb-10"
          >
            <h2 className="font-headline text-[24px] md:text-[28px] text-on-surface flex items-center gap-4 font-bold uppercase tracking-tight">
              <span className="w-8 h-[3px] bg-accent block shrink-0" />
              Resources & Downloads
            </h2>
            <p className="text-secondary text-[14px] mt-3 ml-12 max-w-[480px]">
              Access technical documentation, datasheets, and installation guides.
            </p>
          </motion.div>

          {/* Download Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-outline-variant/30 gap-0 max-w-4xl bg-white shadow-none">
            {/* Datasheet Card */}
            <motion.a
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              custom={0}
              href="#"
              onClick={(e) => { e.preventDefault(); alert('Product Datasheet download started for: ' + product.title); }}
              className="border-r border-b border-outline-variant/30 p-8 hover:bg-accent/[0.015] group transition-all duration-300 bg-surface-container-lowest flex flex-col justify-between relative"
            >
              <div>
                <span className="material-symbols-outlined text-[36px] text-accent/80 group-hover:text-accent group-hover:-translate-y-1 transition-all duration-300 mb-5 block select-none">
                  picture_as_pdf
                </span>
                <h4 className="font-headline text-[17px] font-bold text-on-surface mb-2 group-hover:text-accent transition-colors duration-300 uppercase tracking-tight">
                  Product Datasheet
                </h4>
                <p className="text-secondary text-[13.5px] leading-[1.65] mb-6">
                  Detailed technical specifications, power charts, dimensions, and structural configuration options.
                </p>
              </div>
              <span className="text-accent font-label-caps text-[10px] font-bold flex items-center gap-2 tracking-[0.12em] select-none">
                DOWNLOAD PDF
                <span className="material-symbols-outlined text-[18px] group-hover:translate-y-0.5 transition-transform duration-300">download</span>
              </span>
            </motion.a>

            {/* User Manual Card */}
            <motion.a
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              custom={1}
              href="#"
              onClick={(e) => { e.preventDefault(); alert('User Manual download started for: ' + product.title); }}
              className="border-r border-b border-outline-variant/30 p-8 hover:bg-accent/[0.015] group transition-all duration-300 bg-surface-container-lowest flex flex-col justify-between relative"
            >
              <div>
                <span className="material-symbols-outlined text-[36px] text-accent/80 group-hover:text-accent group-hover:-translate-y-1 transition-all duration-300 mb-5 block select-none">
                  menu_book
                </span>
                <h4 className="font-headline text-[17px] font-bold text-on-surface mb-2 group-hover:text-accent transition-colors duration-300 uppercase tracking-tight">
                  User Manual
                </h4>
                <p className="text-secondary text-[13.5px] leading-[1.65] mb-6">
                  Installation guidelines, terminal configurations, operation parameters, and maintenance checklists.
                </p>
              </div>
              <span className="text-accent font-label-caps text-[10px] font-bold flex items-center gap-2 tracking-[0.12em] select-none">
                DOWNLOAD PDF
                <span className="material-symbols-outlined text-[18px] group-hover:translate-y-0.5 transition-transform duration-300">download</span>
              </span>
            </motion.a>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 6 — Standardized Get A Quote CTA
          ═══════════════════════════════════════════════════════════════════════ */}
      <UnifiedCTA 
        heading={`Ready to configure your ${product.title}?`}
        accent="Partner with us."
        subtitle="Our engineering team will help you select the optimal configuration for your infrastructure requirements."
        primaryText="START YOUR INQUIRY"
        primaryTo={`/contact?inquiry=quote&item=${encodeURIComponent(product.title)}`}
        outlineText="BACK TO PRODUCTS"
        outlineTo="/products"
        uppercase={true}
      />

    </div>
  );
}
