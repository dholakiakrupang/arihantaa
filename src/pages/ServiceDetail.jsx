import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { ProductImageGallery } from '../components/ui/ProductImageGallery';
import { engineeredServicesData } from '../data/engineeredServicesData';
import { UnifiedCTA } from '../components/sections/UnifiedCTA';

/* ─── Category Maps ─────────────────────────────────────────────────────────── */
const categoryMap = {
  'spare-parts': 'Spare Parts & Management',
  'preventive-maint': 'Preventive Maintenance',
  'performance-opt': 'Performance Optimization',
  'remote-services': 'Remote Services',
  'project-commission': 'Project & Commissioning',
  'industrial-maint': 'Industrial Maintenance',
  'ups-battery': 'UPS & Battery Services',
  'generator': 'Generator & Switchgear',
  'liquid-cooling': 'Liquid Cooling Services',
  'mepf': 'MEPF Consultancy'
};

const categoryIcons = {
  'spare-parts': 'settings',
  'preventive-maint': 'verified_user',
  'performance-opt': 'speed',
  'remote-services': 'support_agent',
  'project-commission': 'engineering',
  'industrial-maint': 'build',
  'ups-battery': 'battery_charging_full',
  'generator': 'bolt',
  'liquid-cooling': 'ac_unit',
  'mepf': 'architecture'
};

/* ─── Utility Icon Resolvers ────────────────────────────────────────────────── */
const getStatIcon = (label) => {
  const lbl = label.toLowerCase();
  if (lbl.includes('time') || lbl.includes('frequency') || lbl.includes('schedule')) return 'schedule';
  if (lbl.includes('center') || lbl.includes('hub') || lbl.includes('parts')) return 'local_shipping';
  if (lbl.includes('accuracy') || lbl.includes('rate') || lbl.includes('index') || lbl.includes('compliance')) return 'verified';
  if (lbl.includes('compatibility') || lbl.includes('engineers') || lbl.includes('validation')) return 'engineering';
  if (lbl.includes('reports') || lbl.includes('coverage') || lbl.includes('frequency')) return 'description';
  if (lbl.includes('capacity') || lbl.includes('power') || lbl.includes('load')) return 'bolt';
  if (lbl.includes('resolution') || lbl.includes('monitored')) return 'monitor_heart';
  if (lbl.includes('transition') || lbl.includes('speed')) return 'speed';
  if (lbl.includes('analysis') || lbl.includes('method') || lbl.includes('audit')) return 'analytics';
  if (lbl.includes('safety') || lbl.includes('envelope')) return 'health_and_safety';
  if (lbl.includes('test') || lbl.includes('standard')) return 'science';
  if (lbl.includes('battery') || lbl.includes('cell')) return 'battery_full';
  if (lbl.includes('filtration') || lbl.includes('pressure') || lbl.includes('coolant') || lbl.includes('chemistry')) return 'water_drop';
  if (lbl.includes('savings') || lbl.includes('payback') || lbl.includes('retention') || lbl.includes('estimated')) return 'trending_up';
  if (lbl.includes('voltage')) return 'electrical_services';
  if (lbl.includes('documentation') || lbl.includes('project')) return 'description';
  return 'settings';
};

const getScopeIcon = (index) => {
  const icons = ['settings_suggest', 'shield', 'checklist', 'analytics', 'history_edu', 'assignment_turned_in', 'tune', 'engineering'];
  return icons[index % icons.length];
};

/* ─── Animation Variants ────────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
  })
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

/* ─── Nav Items ─────────────────────────────────────────────────────────────── */
const NAV_ITEMS = [
  { id: 'overview', label: 'OVERVIEW', icon: 'visibility' },
  { id: 'scope', label: 'SCOPE OF WORK', icon: 'assignment' },
  { id: 'sla', label: 'SLA TIERS', icon: 'verified' },
  { id: 'inquiries', label: 'INQUIRIES', icon: 'contact_support' }
];

/* ═══════════════════════════════════════════════════════════════════════════════
   ServiceDetail Component
   ═══════════════════════════════════════════════════════════════════════════════ */
export function ServiceDetail() {
  const { categoryId, serviceId } = useParams();
  const [activeSection, setActiveSection] = useState('overview');
  const [imageError, setImageError] = useState(false);

  /* ── Scroll to top on service change ── */
  useEffect(() => {
    window.scrollTo(0, 0);
    setImageError(false);
  }, [serviceId]);

  /* ── Precision Scroll Spy ── */
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
    const sectionIds = ['overview', 'scope', 'sla', 'inquiries'];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [serviceId]);

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

  /* ── Resolve Service Data ── */
  const service = engineeredServicesData.find(item => item.id === serviceId) || engineeredServicesData[0];
  const categoryTitle = categoryMap[categoryId] || categoryMap[service?.categoryId] || 'Services';
  const categoryIcon = categoryIcons[service?.categoryId] || 'support_agent';

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="text-center">
          <span className="material-symbols-outlined text-[64px] text-secondary/30 mb-6 block">search_off</span>
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-3">Service Not Found</h2>
          <p className="text-secondary mb-8 text-[15px]">The requested service could not be located in our catalog.</p>
          <Button to="/services" variant="primary" theme="light" icon="arrow_forward" iconPosition="right" noTextAnimation={false}>
            RETURN TO SERVICES
          </Button>
        </div>
      </div>
    );
  }

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
              <Link to="/services" className="hover:text-accent transition-colors duration-200 flex items-center gap-1">
                <span className="material-symbols-outlined text-[17px]">support_agent</span>
                Services
              </Link>
              <span className="material-symbols-outlined text-[16px] text-secondary/30 select-none">chevron_right</span>
              <Link to={`/services/${service.categoryId}`} className="hover:text-accent transition-colors duration-200">
                {categoryTitle}
              </Link>
              <span className="material-symbols-outlined text-[16px] text-secondary/30 select-none">chevron_right</span>
              <span className="text-on-surface font-semibold truncate max-w-[200px]">{service.title}</span>
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
              {service.title}
            </motion.h1>

            {/* Score badge inline */}
            {service.scorePercentage && (
              <motion.div 
                variants={fadeUp}
                custom={1.5}
                className="flex items-center gap-3 mb-6"
              >
                <div className="flex items-center gap-2 bg-accent/5 border border-accent/20 px-3 py-1.5 select-none">
                  <span className="material-symbols-outlined text-accent text-[20px]">verified</span>
                  <span className="font-label-caps text-[9px] tracking-[0.12em] font-bold text-accent">
                    {service.scoreLabel}: {service.scorePercentage}%
                  </span>
                </div>
              </motion.div>
            )}

            {/* Description */}
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-secondary text-[15px] md:text-[16px] leading-[1.7] mb-8 max-w-[540px]"
            >
              {service.description}
            </motion.p>

            {/* Stat Badges Grid */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="grid grid-cols-2 sm:grid-cols-4 border-t border-l border-outline-variant/30 gap-0 mb-10 bg-white"
            >
              {service.stats && service.stats.slice(0, 4).map((stat, idx) => (
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
                to={`/contact?inquiry=consultation&item=${encodeURIComponent(service.title)}`}
                variant="primary"
                theme="light"
                icon="arrow_forward"
                iconPosition="right"
                noTextAnimation={false}
                className="px-8 py-3.5 text-[10px] tracking-[0.2em] font-bold justify-center"
              >
                REQUEST SLA CONSULTATION
              </Button>
              <Button
                onClick={() => scrollToSection('scope')}
                variant="outline"
                theme="light"
                icon="expand_more"
                iconPosition="left"
                noTextAnimation={false}
                className="px-8 py-3.5 text-[10px] tracking-[0.2em] font-bold justify-center"
              >
                VIEW SCOPE OF WORK
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column (Image Gallery) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeUp}
            className="col-span-12 lg:col-span-5 border-r border-b border-outline-variant/30 pt-12 md:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-0 px-4 sm:px-6 lg:px-0 bg-surface-container-low/10 flex flex-col items-center justify-center order-1 lg:order-2 relative"
          >
            <ProductImageGallery
              images={service.images}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
              categoryIcon={categoryIcon}
              onImageError={() => setImageError(true)}
            />
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 — Scope of Work & Responsibilities
          ═══════════════════════════════════════════════════════════════════════ */}
      <section id="scope" className="bg-surface-container border-y border-outline-variant/30 py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">

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
              Scope of Work & Responsibilities
            </h2>
            <p className="text-secondary text-[14px] mt-3 ml-12 max-w-[520px]">
              Standardized processes, deliverables, and engineering oversight included under this contract.
            </p>
          </motion.div>

          {/* Scope Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-outline-variant/30 gap-0 bg-white">
            {service.features && service.features.map((feature, idx) => (
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
                    {getScopeIcon(idx)}
                  </span>
                  <span className="font-mono text-[14px] text-accent font-bold select-none">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-headline text-[16px] font-bold mb-3 text-on-surface leading-snug uppercase tracking-tight">
                  {feature}
                </h3>
                <p className="text-secondary text-[13.5px] leading-[1.65]">
                  Executed according to Arihantaa certified processes, ensuring 100% compliance with industry standards.
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4 — SLA Tiers Comparison
          ═══════════════════════════════════════════════════════════════════════ */}
      <section id="sla" className="bg-surface-container-lowest py-16 md:py-24 border-b border-outline-variant/30">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">

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
              SLA Tiers Comparison
            </h2>
          </motion.div>

          {/* Models Data Table */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeUp}
            className="border border-outline-variant/30 overflow-hidden bg-white shadow-none"
          >
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[650px] md:min-w-[720px] lg:min-w-[760px]">
                <thead>
                  <tr className="bg-surface-container-high/45 border-b border-outline-variant/30 text-on-surface font-label-caps text-[9.5px] tracking-[0.15em] uppercase">
                    <th className="py-4 px-6 font-bold border-r border-outline-variant/20">Service Parameter</th>
                    <th className="py-4 px-6 font-bold border-r border-outline-variant/20">Bronze Standard</th>
                    <th className="py-4 px-6 font-bold border-r border-outline-variant/20">Silver Priority</th>
                    <th className="py-4 px-6 font-bold text-accent">Gold Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {service.slaPlans && service.slaPlans.map((plan, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-outline-variant/20 last:border-b-0 hover:bg-accent/[0.015] transition-colors duration-200"
                    >
                      <td className="py-4 px-6 font-headline text-[13px] font-bold text-on-surface border-r border-outline-variant/20 uppercase tracking-tight">
                        {plan.parameter}
                      </td>
                      <td className="py-4 px-6 text-[13px] text-secondary border-r border-outline-variant/20">
                        {plan.bronze}
                      </td>
                      <td className="py-4 px-6 text-[13px] text-on-surface font-semibold border-r border-outline-variant/20">
                        {plan.silver}
                      </td>
                      <td className="py-4 px-6 text-[13px] font-bold text-accent bg-accent/[0.01]">
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-accent text-[18px] shrink-0">check_circle</span>
                          <span>{plan.gold}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer Note */}
            <div className="border-t border-outline-variant/30 bg-surface-container-low/40 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-[12px] text-secondary/70 flex items-center gap-1.5 font-medium">
                <span className="material-symbols-outlined text-[17px] text-accent">info</span>
                All tiers include standard Arihantaa warranty terms. Custom configurations and response times are available.
              </p>
              <Button
                to={`/contact?inquiry=consultation&item=${encodeURIComponent(service.title)}`}
                variant="primary"
                theme="light"
                className="text-[9px] tracking-widest shrink-0 px-4 py-2 font-bold font-label-caps"
              >
                COMPARE IN DETAIL
              </Button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5 — Standardized Consultation CTA
          ═══════════════════════════════════════════════════════════════════════ */}
      <div id="inquiries">
        <UnifiedCTA 
          heading={`Ready to deploy ${service.title}?`}
          accent="Talk to our experts."
          subtitle="We compile customized SLA preventative maintenance plans and layout briefs for your facility."
          primaryText="CONSULT AN EXPERT"
          primaryTo={`/contact?inquiry=sales&item=${encodeURIComponent(service.title)}`}
          outlineText="VIEW ALL SERVICES"
          outlineTo="/services"
          uppercase={true}
        />
      </div>

    </div>
  );
}
