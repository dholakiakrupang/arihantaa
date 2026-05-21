import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { ProductImageGallery } from '../components/ui/ProductImageGallery';
import { engineeredServicesData } from '../data/engineeredServicesData';

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
  'liquid-cooling': 'Liquid Cooling Services'
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
  'liquid-cooling': 'ac_unit'
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
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

/* ═══════════════════════════════════════════════════════════════════════════════
   ServiceDetail Component
   ═══════════════════════════════════════════════════════════════════════════════ */
export function ServiceDetail() {
  const { categoryId, serviceId } = useParams();
  const [activeSection, setActiveSection] = useState('overview');
  const [imageError, setImageError] = useState(false);
  const heroRef = useRef(null);

  /* ── Scroll to top on service change ── */
  useEffect(() => {
    window.scrollTo(0, 0);
    setImageError(false);
  }, [serviceId]);

  /* ── Precision Scroll Spy ── */
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-45% 0px -45% 0px',
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
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [serviceId]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -140;
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
          <span className="material-symbols-outlined text-[64px] text-secondary/30 mb-4 block">search_off</span>
          <h2 className="font-headline text-2xl font-bold text-secondary mb-4">Service Not Found</h2>
          <p className="text-secondary mb-8 text-[14px]">The service you're looking for doesn't exist or has been moved.</p>
          <Button to="/services" noTextAnimation={false}>Return to Catalog</Button>
        </div>
      </div>
    );
  }

  const navItems = [
    { id: 'overview', label: 'OVERVIEW', icon: 'visibility' },
    { id: 'scope', label: 'SCOPE OF WORK', icon: 'assignment' },
    { id: 'sla', label: 'SLA TIERS', icon: 'verified' },
    { id: 'inquiries', label: 'INQUIRIES', icon: 'contact_support' }
  ];

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/10 selection:text-primary min-h-screen">

      {/* ══════════════════════════════════════════════════════════════════════
          Section 1: Sticky Sub-Navigation Bar
          ══════════════════════════════════════════════════════════════════════ */}
      <div className="bg-surface-container-low/95 backdrop-blur-md border-b border-surface-variant sticky top-[79px] z-40 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 py-0">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-0 md:gap-6">

            {/* Breadcrumb Trail */}
            <div className="text-[12px] text-secondary flex flex-wrap items-center gap-1.5 font-medium leading-none py-4 md:py-0 shrink-0">
              <Link to="/services" className="hover:text-primary transition-colors duration-200 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">home</span>
                Services
              </Link>
              <span className="material-symbols-outlined text-[14px] text-secondary/30 select-none">chevron_right</span>
              <Link to={`/services/${service.categoryId}`} className="hover:text-primary transition-colors duration-200">
                {categoryTitle}
              </Link>
              <span className="material-symbols-outlined text-[14px] text-secondary/30 select-none">chevron_right</span>
              <span className="text-on-surface font-semibold truncate max-w-[200px]">{service.title}</span>
            </div>

            {/* Jump Navigation Tabs */}
            <div className="flex overflow-x-auto w-full md:w-auto gap-1 pb-0 hide-scrollbar select-none border-t md:border-t-0 border-surface-variant/50 md:border-none">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group flex items-center px-4 py-4 whitespace-nowrap font-label-caps text-[10.5px] tracking-[0.12em] font-bold transition-all duration-200 border-b-[2.5px] hover:text-primary relative ${
                    activeSection === item.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-secondary/70 hover:text-secondary'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[14px] transition-all duration-300 overflow-hidden ${
                    activeSection === item.id 
                      ? 'max-w-[20px] opacity-100 mr-1.5' 
                      : 'max-w-0 opacity-0 mr-0 group-hover:max-w-[20px] group-hover:opacity-100 group-hover:mr-1.5'
                  }`}>
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          Section 2: Premium Hero Section (Overview)
          ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative bg-gradient-to-b from-surface-container-lowest via-surface-container-lowest to-surface-container-low border-b border-surface-variant overflow-hidden"
        id="overview"
        ref={heroRef}
      >
        {/* Subtle decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 md:px-16 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── Right (Desktop): Service Image Gallery ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative order-1 lg:order-2"
            >
              <ProductImageGallery
                images={service.images}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
                tag={service.tag}
                categoryIcon={categoryIcon}
                onImageError={() => setImageError(true)}
              />
            </motion.div>

            {/* ── Left (Desktop): Content & CTAs ── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col justify-center order-2 lg:order-1"
            >
              {/* Category eyebrow */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className="material-symbols-outlined text-accent text-[16px]">{categoryIcon}</span>
                <span className="text-accent font-semibold tracking-[0.25em] text-[10px] uppercase font-label-caps">
                  {categoryTitle}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-headline text-[30px] md:text-[40px] lg:text-[46px] leading-[1.1] font-bold text-on-surface mb-5 uppercase tracking-tight">
                {service.title}
              </h1>

              {/* Score badge inline */}
              {service.scorePercentage && (
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-2 bg-primary/8 border border-primary/20 px-3 py-1.5">
                    <span className="material-symbols-outlined text-primary text-[16px]">verified</span>
                    <span className="font-label-caps text-[9px] tracking-[0.12em] font-bold text-primary">
                      {service.scoreLabel}: {service.scorePercentage}%
                    </span>
                  </div>
                </div>
              )}

              {/* Description */}
              <p className="text-[15px] md:text-[16px] leading-[1.7] text-secondary mb-8 max-w-[540px]">
                {service.description}
              </p>

              {/* Stat Badges */}
              <div className="flex flex-wrap gap-2.5 mb-10">
                {service.stats && service.stats.slice(0, 3).map((stat, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                    className="bg-surface-container-high/80 px-3.5 py-2 font-label-caps text-[8.5px] tracking-[0.08em] text-on-surface border border-surface-variant flex items-center gap-2 select-none hover:border-accent/50 transition-colors duration-300 font-bold"
                  >
                    <span className="material-symbols-outlined text-primary text-[15px]">{getStatIcon(stat.label)}</span>
                    <span className="text-secondary font-semibold">{stat.value}</span>
                    <span className="text-secondary/50">·</span>
                    <span className="text-secondary/60">{stat.label}</span>
                  </motion.span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  to={`/contact?inquiry=consultation&item=${encodeURIComponent(service.title)}`}
                  variant="primary"
                  theme="light"
                  icon="arrow_forward"
                  iconPosition="right"
                  noTextAnimation={false}
                  className="px-8 py-3.5 text-[11px] justify-center tracking-widest"
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
                  className="px-8 py-3.5 text-[11px] justify-center tracking-widest"
                >
                  VIEW SCOPE OF WORK
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Section 3: Scope of Work & Responsibilities
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-surface-container py-16 md:py-24 border-b border-surface-variant" id="scope">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">

          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            className="mb-12 md:mb-14"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="w-10 h-[3px] bg-primary block" />
              <span className="font-label-caps text-[10px] tracking-[0.2em] text-secondary/60 font-bold uppercase">Service Deliverables</span>
            </div>
            <h2 className="font-headline text-[24px] md:text-[30px] text-on-surface font-bold uppercase tracking-tight">
              Scope of Work & Responsibilities
            </h2>
          </motion.div>

          {/* Scope Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          >
            {service.features && service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                custom={idx}
                className="bg-surface-container-lowest p-7 md:p-8 border-t-[3px] border-primary shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-400 flex flex-col group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/12 transition-colors duration-300">
                    <span className="material-symbols-outlined text-primary text-[22px]">{getScopeIcon(idx)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-label-caps text-[8.5px] tracking-[0.15em] text-secondary/40 font-bold block mb-1">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-headline text-[16px] md:text-[17px] font-bold text-on-surface leading-snug">
                      {feature}
                    </h3>
                  </div>
                </div>
                <p className="text-secondary text-[13px] leading-[1.7] ml-[60px]">
                  Executed per Arihantaa standardized quality metrics and OEM-certified safety guidelines.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Section 4: SLA Tiers Comparison
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-surface-container-lowest py-16 md:py-24 border-b border-surface-variant" id="sla">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">

          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            className="mb-12 md:mb-14"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="w-10 h-[3px] bg-primary block" />
              <span className="font-label-caps text-[10px] tracking-[0.2em] text-secondary/60 font-bold uppercase">Service Level Agreement</span>
            </div>
            <h2 className="font-headline text-[24px] md:text-[30px] text-on-surface font-bold uppercase tracking-tight">
              SLA Tiers Comparison
            </h2>
            <p className="text-secondary text-[14px] mt-3 max-w-[600px] leading-relaxed">
              Choose the service tier that matches your operational requirements and uptime targets.
            </p>
          </motion.div>

          {/* SLA Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-surface-variant overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] bg-white"
          >
            <div className="w-full overflow-x-auto scrollbar-thin">
              <table className="w-full text-left border-collapse min-w-[760px]">
                <thead>
                  <tr className="border-b border-surface-variant">
                    <th className="bg-surface-container-low py-4.5 px-6 font-label-caps text-[9.5px] tracking-[0.15em] uppercase text-secondary font-bold w-[28%]">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[14px] text-secondary/40">tune</span>
                        Service Parameter
                      </div>
                    </th>
                    <th className="bg-surface-container-low py-4.5 px-6 font-label-caps text-[9.5px] tracking-[0.15em] uppercase text-secondary font-bold w-[24%]">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#CD7F32]" />
                        Bronze Standard
                      </div>
                    </th>
                    <th className="bg-surface-container-low py-4.5 px-6 font-label-caps text-[9.5px] tracking-[0.15em] uppercase text-secondary font-bold w-[24%]">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#A0A0A0]" />
                        Silver Priority
                      </div>
                    </th>
                    <th className="bg-accent/[0.04] py-4.5 px-6 font-label-caps text-[9.5px] tracking-[0.15em] uppercase text-accent font-bold w-[24%] border-l-2 border-r-2 border-accent/15">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        Gold Enterprise
                        <span className="bg-accent/15 text-accent text-[7px] px-1.5 py-0.5 tracking-[0.1em] font-bold ml-1">BEST</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {service.slaPlans && service.slaPlans.map((plan, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-surface-variant/70 last:border-0 transition-colors duration-200 hover:bg-surface-container-low/50 ${idx % 2 === 1 ? 'bg-surface-container-lowest' : ''}`}
                    >
                      <td className="py-4 px-6">
                        <span className="font-headline text-[13px] font-bold text-on-surface/80 leading-snug">
                          {plan.parameter}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-[12.5px] text-secondary/65 leading-snug">
                        {plan.bronze}
                      </td>
                      <td className="py-4 px-6 text-[12.5px] text-secondary font-medium leading-snug">
                        {plan.silver}
                      </td>
                      <td className="py-4 px-6 text-[13px] font-bold text-accent bg-accent/[0.02] border-l-2 border-r-2 border-accent/15 leading-snug">
                        <div className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-accent/60 text-[14px] mt-0.5 shrink-0">check_circle</span>
                          <span>{plan.gold}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table footer CTA */}
            <div className="border-t border-surface-variant bg-surface-container-low/50 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-[12px] text-secondary/60 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">info</span>
                All tiers include standard Arihantaa warranty terms. Custom configurations available on request.
              </p>
              <Button
                to={`/contact?inquiry=consultation&item=${encodeURIComponent(service.title)}`}
                variant="primary"
                theme="light"
                size="sm"
                icon="arrow_forward"
                iconPosition="right"
                noTextAnimation={false}
                className="text-[9px] tracking-widest shrink-0"
              >
                COMPARE IN DETAIL
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          Section 5: Inquiries / Consultation CTA
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-surface-container py-16 md:py-24" id="inquiries">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">

          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            className="mb-10 md:mb-12"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="w-10 h-[3px] bg-primary block" />
              <span className="font-label-caps text-[10px] tracking-[0.2em] text-secondary/60 font-bold uppercase">Get Started</span>
            </div>
            <h2 className="font-headline text-[24px] md:text-[30px] text-on-surface font-bold uppercase tracking-tight">
              Request Service Consultation
            </h2>
          </motion.div>

          {/* Split CTA Panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-5 border border-surface-variant overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.05)] max-w-5xl"
          >

            {/* Left Panel: Consultation Details (3/5 width) */}
            <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-between bg-white relative overflow-hidden">
              {/* Subtle corner accent */}
              <div className="absolute top-0 left-0 w-20 h-[2px] bg-primary/20" />
              <div className="absolute top-0 left-0 w-[2px] h-20 bg-primary/20" />

              <div>
                <h4 className="font-headline font-bold text-[20px] text-on-surface mb-3 tracking-tight">
                  Discuss Custom SLA Parameters
                </h4>
                <p className="text-[14px] leading-[1.7] text-secondary mb-8 max-w-[480px]">
                  We understand critical plant management demands custom uptime strategies. Our OEM-certified electrical and mechanical service consultants can review your single-line schematics or facility layouts to build custom response plans, spare parts reserves, and preventative diagnostics schedules.
                </p>
              </div>

              {/* Feature badges */}
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-primary/8 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[16px]">verified</span>
                  </div>
                  <div>
                    <span className="font-label-caps text-[8.5px] font-bold tracking-[0.12em] text-on-surface block leading-tight">Custom Coverage</span>
                    <span className="text-[10px] text-secondary/50">Available on request</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-primary/8 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[16px]">support_agent</span>
                  </div>
                  <div>
                    <span className="font-label-caps text-[8.5px] font-bold tracking-[0.12em] text-on-surface block leading-tight">24-Hour Dispatch</span>
                    <span className="text-[10px] text-secondary/50">Engineer on-site</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-primary/8 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[16px]">description</span>
                  </div>
                  <div>
                    <span className="font-label-caps text-[8.5px] font-bold tracking-[0.12em] text-on-surface block leading-tight">Full Documentation</span>
                    <span className="text-[10px] text-secondary/50">Reports & audit trails</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel: Prefilled CTA (2/5 width) */}
            <div className="lg:col-span-2 bg-[#141b2b] p-8 md:p-10 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-surface-variant relative overflow-hidden">
              {/* Grid subtle background */}
              <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
              <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-5 h-[2px] bg-primary block" />
                  <span className="font-label-caps text-[9px] text-primary tracking-[0.2em] font-bold">Prefilled SLA Request</span>
                </div>
                <h5 className="font-headline text-[17px] font-bold mb-3 uppercase tracking-wide leading-snug">
                  Consultation<br />Intake
                </h5>
                <p className="text-[12px] leading-[1.7] text-white/55 mb-8">
                  Pre-loads the <span className="text-white/80 font-medium">{service.title}</span> plan parameters straight into our service intake portal for prioritized processing.
                </p>
              </div>

              <div className="relative z-10">
                <Button
                  to={`/contact?inquiry=consultation&item=${encodeURIComponent(service.title)}`}
                  variant="primary"
                  theme="light"
                  icon="arrow_forward"
                  iconPosition="right"
                  noTextAnimation={false}
                  className="w-full justify-center text-[10px]"
                >
                  GO TO CONTACT FORM
                </Button>
                <p className="text-[10px] text-white/30 mt-3 text-center tracking-wide">
                  No commitment required · Free consultation
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
