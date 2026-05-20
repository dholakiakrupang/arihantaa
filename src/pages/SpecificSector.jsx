import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { sectorsData, sectorExperts } from '../data/sectorsData';

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

export function SpecificSector() {
  const { sectorId } = useParams();
  const sector = sectorsData[sectorId];

  // Active section for sticky sub-nav
  const [activeSection, setActiveSection] = useState('overview');

  // Form State
  const [formState, setFormState] = useState({
    firstName: '',
    surname: '',
    companyName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Scroll spy for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'capabilities', 'stack', 'projects', 'enquiry'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sectorId]);

  if (!sector) {
    return (
      <div className="bg-surface min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 text-center">
        <span className="material-symbols-outlined text-[64px] text-accent mb-6">engineering</span>
        <h1 className="font-headline text-[32px] font-black text-on-surface uppercase tracking-tight mb-4">
          Sector Not Found
        </h1>
        <p className="font-body text-[15px] text-secondary max-w-md mb-8">
          The requested industry sector does not exist or has been relocated.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2.5 bg-accent text-on-primary font-label-caps text-[11px] uppercase px-8 py-4 tracking-[0.2em] hover:bg-primary-container transition-colors duration-300"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.firstName || !formState.email || !formState.message) {
      alert("Please fill in the required fields (First Name, Email, and Enquiry details).");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        firstName: '',
        surname: '',
        companyName: '',
        email: '',
        message: ''
      });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const scrollToAnchor = (id) => {
    const el = document.getElementById(id);
    if (el) {
      // Dynamically calculate actual sticky heights to ensure perfect alignment
      const headerEl = document.querySelector('header');
      const headerHeight = headerEl ? headerEl.offsetHeight : 80;
      const offset = headerHeight + 56 + 12; // header height + subnav height + extra spacing

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

  return (
    <div className="bg-surface text-on-surface selection:bg-accent selection:text-white min-h-screen relative">
      
      {/* ── Section 1: Breadcrumb ── */}
      <div className="bg-surface relative z-10 pt-8 pb-4 border-b border-surface-variant/40">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-16">
          <nav className="font-label-caps text-[10px] text-secondary flex items-center gap-2 uppercase tracking-[0.18em]">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[12px] text-secondary/40 select-none">chevron_right</span>
            <Link to="/products" className="hover:text-accent transition-colors">Sectors</Link>
            <span className="material-symbols-outlined text-[12px] text-secondary/40 select-none">chevron_right</span>
            <span className="text-on-surface font-semibold">{sector.title}</span>
          </nav>
        </div>
      </div>

      {/* ── Section 2: Sticky Anchor Sub-Nav ── */}
      <div className="sticky top-[56px] sm:top-[64px] md:top-[80px] z-30 bg-surface/95 backdrop-blur-md border-b border-surface-variant/60">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-16 flex items-center justify-between overflow-x-auto hide-scrollbar">
          <div className="flex whitespace-nowrap border-l border-surface-variant/40">
            {[
              { id: 'overview', label: '01 // INTENT' },
              { id: 'capabilities', label: '02 // CAPABILITIES' },
              { id: 'stack', label: '03 // ARCHITECTURE' },
              { id: 'projects', label: '04 // TRACK RECORD' },
              { id: 'enquiry', label: '05 // SPECIFICATION' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToAnchor(tab.id)}
                className={`font-label-caps text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-bold transition-all px-4 sm:px-6 py-5 border-r border-surface-variant/40 flex items-center gap-2 relative ${
                  activeSection === tab.id 
                    ? 'text-accent bg-surface-container-low' 
                    : 'text-secondary hover:text-on-surface hover:bg-surface-container-low/40'
                }`}
              >
                {/* Active indicator dot */}
                <span className={`w-1.5 h-1.5 rounded-full bg-accent transition-all duration-300 ${
                  activeSection === tab.id ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`} />
                {tab.label}
              </button>
            ))}
          </div>
          
          <button 
            onClick={() => scrollToAnchor('enquiry')}
            className="hidden lg:inline-flex items-center gap-2 bg-on-surface text-surface hover:bg-accent hover:text-white transition-colors px-5 py-3.5 font-label-caps text-[10px] uppercase tracking-wider font-bold"
          >
            Request Specs
            <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
          </button>
        </div>
      </div>

      {/* ── Section 3: Overview Hero ── */}
      <section 
        id="overview" 
        className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 md:px-16 py-20 md:py-32 border-b border-surface-variant/40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Headline Column */}
          <div className="lg:col-span-8 pr-0 lg:pr-10">
            <span className="block font-label-caps text-[11px] text-accent tracking-[0.25em] uppercase mb-4 font-bold">
              Sector Division
            </span>
            <motion.h1 
              className="font-headline text-[38px] sm:text-[54px] md:text-[68px] lg:text-[76px] leading-[1.02] text-on-surface font-black tracking-tighter uppercase mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
            >
              {sector.heroTitle}
            </motion.h1>
            
            {/* Horizontal rule with geometric anchor */}
            <div className="relative w-full flex items-center mb-8">
              <div className="w-4 h-4 rounded-full border-2 border-accent bg-surface shrink-0" />
              <div className="h-[1px] w-full bg-surface-variant/60" />
            </div>
            
            <p className="font-body text-[16px] md:text-[18px] text-secondary leading-relaxed max-w-3xl">
              {sector.heroDescription}
            </p>
          </div>

          {/* Key Indicators Column */}
          <div className="lg:col-span-4 lg:mt-6">
            <div className="bg-surface-container-low border border-surface-variant/60 p-8 relative overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent" />
              
              <h3 className="font-label-caps text-[11px] text-on-surface uppercase tracking-[0.2em] font-black mb-8 border-b border-surface-variant/40 pb-4">
                Operational Metrics
              </h3>
              
              <div className="space-y-8">
                {sector.stats.map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                    className="flex flex-col"
                  >
                    <span className="font-headline text-[32px] md:text-[38px] text-accent font-black leading-none mb-1">
                      {stat.value}
                    </span>
                    <span className="font-label-caps text-[9px] text-secondary uppercase tracking-[0.2em] font-bold">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Capabilities ── */}
      <section 
        id="capabilities" 
        className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 md:px-16 py-20 md:py-32 border-b border-surface-variant/40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Sticky left heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-[200px] h-fit">
            <span className="block font-label-caps text-[11px] text-accent tracking-[0.25em] uppercase mb-4 font-bold">
              Scope of Delivery
            </span>
            <h2 className="font-headline text-[32px] md:text-[44px] text-on-surface font-black uppercase tracking-tight mb-6 leading-none">
              Engineering Capabilities
            </h2>
            <p className="font-body text-[14px] text-secondary leading-relaxed">
              Our capability stack spans conceptual layout planning, site commissioning, component testing, and long-term diagnostic operations matching global standards.
            </p>
          </div>

          {/* Right listing cards */}
          <div className="lg:col-span-8 space-y-6">
            {sector.capabilities.map((group, idx) => (
              <div 
                key={group.number}
                className="bg-surface border border-surface-variant/50 p-6 md:p-8 hover:border-accent hover:shadow-xl transition-all duration-300 relative group"
              >
                {/* Visual grid numbers */}
                <div className="absolute top-6 right-6 font-headline text-[24px] font-black text-accent/25 tracking-tighter select-none">
                  {group.number}
                </div>

                <h3 className="font-headline text-[20px] md:text-[22px] text-on-surface font-extrabold uppercase tracking-tight mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-accent" />
                  {group.title}
                </h3>

                <div className="space-y-4 border-t border-surface-variant/30 pt-6">
                  {group.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-3.5">
                      <span className="material-symbols-outlined text-accent text-[18px] mt-0.5 select-none">
                        arrow_right_alt
                      </span>
                      <p className="font-body text-[14px] sm:text-[15px] text-secondary leading-relaxed">
                        <strong className="text-on-surface font-bold">{item.boldText}</strong> {item.restText}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Section 5: The Complete Stack (Zones) ── */}
      <section 
        id="stack" 
        className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 md:px-16 py-20 md:py-32 border-b border-surface-variant/40"
      >
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="inline-block font-label-caps text-[11px] text-accent tracking-[0.25em] uppercase mb-4 font-bold">
            Systems Architecture
          </span>
          <h2 className="font-headline text-[32px] md:text-[44px] text-on-surface font-black uppercase tracking-tight leading-none mb-6">
            The Complete Infrastructure Stack
          </h2>
          <p className="font-body text-[15px] text-secondary leading-relaxed">
            We deliver systems that cover every node of your critical network—from external high-voltage grids down to the telemetry controllers at the rack level.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sector.zones.map((zone) => (
            <div 
              key={zone.label} 
              className="bg-surface-container border border-surface-variant/50 p-8 flex flex-col h-full relative group hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Highlight top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-on-surface group-hover:bg-accent transition-colors" />

              <div className="w-12 h-12 bg-surface flex items-center justify-center border border-surface-variant/60 mb-8 rounded-none group-hover:border-accent transition-colors">
                <span className="material-symbols-outlined text-accent text-[26px]">
                  {zone.icon}
                </span>
              </div>

              <span className="block font-label-caps text-[10px] text-accent font-bold tracking-[0.2em] uppercase mb-2">
                {zone.label}
              </span>
              <h3 className="font-headline text-[18px] text-on-surface font-bold uppercase tracking-tight mb-4">
                {zone.title}
              </h3>
              
              <p className="font-body text-[13px] text-secondary leading-relaxed">
                {zone.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 6: Experience Projects ── */}
      <section 
        id="projects" 
        className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 md:px-16 py-20 md:py-32 border-b border-surface-variant/40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left info column */}
          <div className="lg:col-span-4 lg:pr-8">
            <span className="block font-label-caps text-[11px] text-accent tracking-[0.25em] uppercase mb-4 font-bold">
              Landmark Cases
            </span>
            <h2 className="font-headline text-[32px] md:text-[44px] text-on-surface font-black uppercase tracking-tight mb-6 leading-none">
              Proven Sector Records
            </h2>
            <p className="font-body text-[14px] text-secondary leading-relaxed mb-8">
              We bring proven execution history in industrial infrastructure, with experience delivering on complex, heavy engineering specifications across India.
            </p>
            
            {/* Custom geometric outline element */}
            <div className="hidden lg:block w-32 h-32 border-2 border-dashed border-surface-variant/80 p-2 relative">
              <div className="w-full h-full bg-surface-container-low flex items-center justify-center">
                <span className="material-symbols-outlined text-accent/50 text-[32px]">architecture</span>
              </div>
            </div>
          </div>

          {/* Right columns: project list with blueprint styling */}
          <div className="lg:col-span-8 lg:pl-10 lg:border-l border-surface-variant/40">
            <div className="divide-y divide-surface-variant/40">
              {sector.projects.map((proj, idx) => (
                <div 
                  key={idx} 
                  className={`pb-8 group transition-all duration-200 ${idx > 0 ? 'pt-8' : ''}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <h3 className="font-headline text-[18px] sm:text-[22px] text-on-surface font-extrabold uppercase tracking-tight group-hover:text-accent transition-colors">
                        {proj.title}
                      </h3>
                    </div>
                    <span className="font-label-caps text-[11px] text-accent bg-accent/5 border border-accent/35 px-4 py-1.5 font-bold uppercase tracking-[0.18em] shrink-0 self-start sm:self-auto select-none">
                      {proj.cost}
                    </span>
                  </div>
                  <p className="font-body text-[14px] text-secondary leading-relaxed pl-0 sm:pl-5">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Section 7: Credentials Bar ── */}
      <section className="bg-surface-container-low border-b border-surface-variant/40 py-12 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: 'verified', label: 'ISO 9001:2015', sub: 'Quality Certified' },
              { icon: 'electric_bolt', label: 'Class-A License', sub: 'EC Approved Class-A' },
              { icon: 'badge', label: 'PAN & GST', sub: 'Fully Registered' },
              { icon: 'security', label: 'PF & ESI Compliant', sub: 'Labour Standards' },
              { icon: 'account_balance', label: 'Bank Solvency', sub: 'Audit Ready' },
              { icon: 'history', label: 'Established 1994', sub: '30 Years Experience' }
            ].map((cred, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-2 border-r border-dashed border-surface-variant/40 last:border-r-0">
                <span className="material-symbols-outlined text-[24px] text-accent mb-3 select-none">{cred.icon}</span>
                <span className="font-label-caps text-[10px] text-on-surface font-bold uppercase tracking-wider mb-1">
                  {cred.label}
                </span>
                <span className="font-body text-[9px] text-secondary">{cred.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 8: Enquiry & Contact Expert ── */}
      <section 
        id="enquiry" 
        className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 md:px-16 py-20 md:py-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Expert contacts card (Left Column) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="block font-label-caps text-[11px] text-accent tracking-[0.25em] uppercase mb-4 font-bold">
                Direct Consulting
              </span>
              <h2 className="font-headline text-[32px] md:text-[44px] text-on-surface font-black uppercase tracking-tight mb-6 leading-none">
                Speak with Partners
              </h2>
              <p className="font-body text-[15px] text-secondary mb-10 leading-relaxed">
                Consult with our managing partners regarding specific tender files, custom electrical designs, or commercial details.
              </p>
              
              <div className="space-y-6">
                {sectorExperts.map((expert, i) => (
                  <div key={i} className="flex gap-4 items-center pb-6 border-b border-surface-variant/40 last:border-b-0">
                    <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-full overflow-hidden border border-surface-variant/60">
                      <span className="material-symbols-outlined text-secondary text-[24px]">
                        {expert.avatar}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline text-[16px] text-on-surface font-bold uppercase tracking-tight mb-0.5">
                        {expert.name}
                      </h3>
                      <p className="font-label-caps text-[9px] text-accent font-bold uppercase tracking-wider leading-none">
                        {expert.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Form container (Right Column) */}
          <div className="lg:col-span-7 bg-surface-container-low border border-surface-variant/60 p-6 sm:p-10 relative overflow-hidden">
            
            {/* Top orange stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-accent" />

            <h3 className="font-headline text-[22px] text-on-surface font-extrabold uppercase tracking-tight mb-8 flex items-center justify-between">
              <span>Submit Enquiry</span>
              <span className="material-symbols-outlined text-[20px] text-accent select-none">description</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-label-caps text-[9px] text-on-surface uppercase tracking-widest block mb-2 font-bold">
                    First Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-surface-variant/80 focus:border-accent focus:ring-0 px-4 py-3 bg-surface text-[14px] rounded-none outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="font-label-caps text-[9px] text-on-surface uppercase tracking-widest block mb-2 font-bold">
                    Surname
                  </label>
                  <input
                    type="text"
                    name="surname"
                    value={formState.surname}
                    onChange={handleInputChange}
                    className="w-full border border-surface-variant/80 focus:border-accent focus:ring-0 px-4 py-3 bg-surface text-[14px] rounded-none outline-none transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="font-label-caps text-[9px] text-on-surface uppercase tracking-widest block mb-2 font-bold">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formState.companyName}
                  onChange={handleInputChange}
                  className="w-full border border-surface-variant/80 focus:border-accent focus:ring-0 px-4 py-3 bg-surface text-[14px] rounded-none outline-none transition-all duration-200"
                />
              </div>

              <div>
                <label className="font-label-caps text-[9px] text-on-surface uppercase tracking-widest block mb-2 font-bold">
                  Email Address <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-surface-variant/80 focus:border-accent focus:ring-0 px-4 py-3 bg-surface text-[14px] rounded-none outline-none transition-all duration-200"
                />
              </div>

              <div>
                <label className="font-label-caps text-[9px] text-on-surface uppercase tracking-widest block mb-2 font-bold">
                  Please Detail Your Enquiry <span className="text-accent">*</span>
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full border border-surface-variant/80 focus:border-accent focus:ring-0 px-4 py-3 bg-surface text-[14px] rounded-none outline-none transition-all duration-200 resize-none"
                />
              </div>

              <p className="font-body text-[11px] text-secondary leading-relaxed">
                By submitting this form, you acknowledge that Arihantaa Powertech will use the provided details to respond directly to your commercial enquiry.
              </p>

              <div className="relative">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-accent text-on-primary font-label-caps text-[10px] uppercase tracking-[0.2em] py-4 px-10 hover:bg-primary-container disabled:bg-secondary/40 transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4.5 w-4.5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Submit Enquiry'
                  )}
                </button>

                {/* Animated Form Success Message */}
                <AnimatePresence>
                  {submitSuccess && (
                    <motion.div 
                      className="absolute inset-0 bg-[#f3f3f3] flex items-center justify-center text-center px-4"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-2.5 text-[#16a34a]">
                        <span className="material-symbols-outlined text-[20px] font-bold">check_circle</span>
                        <span className="font-headline text-[13px] font-bold uppercase tracking-wide">Enquiry submitted successfully!</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
