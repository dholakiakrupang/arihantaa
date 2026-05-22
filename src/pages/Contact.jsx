import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { cn } from '../lib/utils';

export function Contact() {
  const [searchParams, setSearchParams] = useSearchParams();
  const inquiry = searchParams.get('inquiry');
  const item = searchParams.get('item');

  const heroParticles = useMemo(() => Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1.5,
    duration: Math.random() * 12 + 10,
    delay: Math.random() * 5,
  })), []);

  const matrixGlowDots = useMemo(() => Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 4,
  })), []);

  const [message, setMessage] = useState('');
  const [topics, setTopics] = useState({
    'Critical Power (UPS)': false,
    'Thermal Management': false,
    'Monitoring & Management': false,
    'Racks & Enclosures': false
  });

  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isVerifyingFile, setIsVerifyingFile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Form inputs state
  const [formState, setFormState] = useState({
    fullName: '',
    company: '',
    email: '',
    industry: '',
  });

  useEffect(() => {
    let prefilledMessage = '';
    const newTopics = {
      'Critical Power (UPS)': false,
      'Thermal Management': false,
      'Monitoring & Management': false,
      'Racks & Enclosures': false
    };

    if (inquiry && item) {
      const decodedItem = decodeURIComponent(item);
      if (inquiry === 'brochure') {
        prefilledMessage = `Hello, I would like to request the brochure/datasheet for: ${decodedItem}.`;
      } else if (inquiry === 'support') {
        prefilledMessage = `Hello, I require technical support regarding: ${decodedItem}.`;
      } else if (inquiry === 'quote') {
        prefilledMessage = `Hello, I would like to request a quotation for: ${decodedItem}.`;
      } else if (inquiry === 'sales') {
        prefilledMessage = `Hello, I would like to initiate a custom system design brief for: ${decodedItem}.`;
      } else if (inquiry === 'portal') {
        prefilledMessage = `Hello, I would like to enquire about enterprise partnerships and cabinet distribution for: ${decodedItem}.`;
      }
      
      const itemLower = decodedItem.toLowerCase();
      if (itemLower.includes('ups') || itemLower.includes('power') || itemLower.includes('critical')) {
        newTopics['Critical Power (UPS)'] = true;
      }
      if (itemLower.includes('cooling') || itemLower.includes('thermal') || itemLower.includes('chilled') || itemLower.includes('pcw')) {
        newTopics['Thermal Management'] = true;
      }
      if (itemLower.includes('monitoring') || itemLower.includes('management') || itemLower.includes('digital') || itemLower.includes('infrastructure')) {
        newTopics['Monitoring & Management'] = true;
      }
      if (itemLower.includes('rack') || itemLower.includes('enclosure') || itemLower.includes('cabinet')) {
        newTopics['Racks & Enclosures'] = true;
      }
    }
    
    setMessage(prefilledMessage);
    setTopics(newTopics);
  }, [inquiry, item]);

  const handleTopicChange = (topic) => {
    setTopics(prev => ({ ...prev, [topic]: !prev[topic] }));
  };

  // Pre-select topics based on Consultation Matrix clicks and scroll smoothly
  const handleMatrixClick = (targetTopics, inquiryType, itemName) => {
    setTopics(prev => {
      const next = { ...prev };
      Object.keys(next).forEach(key => {
        next[key] = targetTopics.includes(key);
      });
      return next;
    });
    
    setSearchParams({ inquiry: inquiryType, item: itemName });

    const el = document.getElementById('quote-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Simulate premium file analysis and secure attachment
  const startFileVerification = (file) => {
    setSelectedFile(file);
    setIsVerifyingFile(true);
    setUploadProgress(0);
    
    let current = 0;
    const interval = setInterval(() => {
      current += 8;
      if (current >= 100) {
        setUploadProgress(100);
        setIsVerifyingFile(false);
        clearInterval(interval);
      } else {
        setUploadProgress(current);
      }
    }, 60);
  };

  // Drag and drop handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      startFileVerification(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      startFileVerification(e.target.files[0]);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        // Clear form
        setFormState({
          fullName: '',
          company: '',
          email: '',
          industry: '',
        });
        setMessage('');
        setTopics({
          'Critical Power (UPS)': false,
          'Thermal Management': false,
          'Monitoring & Management': false,
          'Racks & Enclosures': false
        });
        setSelectedFile(null);
        // Clear search parameters
        setSearchParams({});
      }, 3000);
    }, 1500);
  };

  return (
    <div className="bg-background text-on-background font-body min-h-screen">
      
      {/* ── Hero Section ──────────────────────────────────────────────── */}
      <section className="relative bg-[#080808] text-white py-24 md:py-32 px-8 md:px-16 overflow-hidden border-b border-outline-variant/30 flex flex-col justify-center min-h-[55vh]">
        
        {/* Ambient warm orange spotlight glows */}
        <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            className="absolute -top-[30%] -left-[10%] w-[65%] h-[80%] rounded-full"
            style={{
              background: 'radial-gradient(ellipse, rgba(233,101,43,0.15) 0%, transparent 75%)',
              filter: 'blur(90px)',
            }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[70%] rounded-full"
            style={{
              background: 'radial-gradient(ellipse, rgba(233,101,43,0.06) 0%, transparent 70%)',
              filter: 'blur(100px)',
            }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
        </div>

        {/* Floating Ambient Particles */}
        <div aria-hidden className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {heroParticles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-accent"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                opacity: Math.random() * 0.18 + 0.05,
                filter: 'blur(0.5px)',
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 40 - 20, 0],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Diagonal micro structural grid backdrop */}
        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none z-0" />

        {/* Ghost Text Background with subtle animation */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none font-headline font-black text-[120px] md:text-[220px] lg:text-[280px] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.02)] uppercase tracking-tighter whitespace-nowrap select-none"
          animate={{
            scale: [0.98, 1.02, 0.98],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          CONTACT
        </motion.div>
        
        <div className="max-w-[1440px] mx-auto relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center px-4 md:px-8">
          <div className="md:col-span-9 space-y-8">
            <motion.span 
              className="inline-block font-label-caps text-[11px] text-accent uppercase tracking-[0.25em] border border-accent/30 px-4 py-2 bg-accent/5 backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
            >
              Consultation & Intake
            </motion.span>
            
            <motion.h1 
              className="font-headline text-[40px] md:text-[68px] lg:text-[80px] text-white leading-[1.05] font-black tracking-tighter uppercase max-w-4xl"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Engineering solutions<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">for a mission-critical world.</span>
            </motion.h1>
            
            <motion.p 
              className="font-body text-[16px] md:text-[18px] text-white/60 max-w-2xl leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From grid-scale UPS deployment to high-density thermal management, our specialists are ready to consult on your next infrastructure challenge.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Consultation Matrix Section ───────────────────────────────── */}
      <section className="py-24 px-8 md:px-16 bg-surface-container-lowest relative overflow-hidden">
        
        {/* Soft glowing mesh circles in background */}
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
          <div 
            className="absolute top-1/4 left-1/3 w-[30vw] h-[30vw] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(233,101,43,0.05) 0%, transparent 70%)',
              filter: 'blur(70px)',
            }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(10,10,10,0.02) 0%, transparent 70%)',
              filter: 'blur(90px)',
            }}
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
          
          <motion.div 
            className="mb-16 border-l-2 border-accent pl-5 font-headline"
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
          >
            <span className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase font-bold mb-2 block">Choose Your Route</span>
            <h2 className="font-headline text-[32px] md:text-[48px] text-secondary font-black uppercase tracking-tight leading-none">How can we assist you?</h2>
            <p className="font-body text-[15px] text-secondary/60 mt-3 max-w-xl">Select the appropriate path to connect with the right specialists instantly.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Path 1 */}
            <motion.div 
              onClick={() => handleMatrixClick(['Critical Power (UPS)', 'Thermal Management'], 'sales', 'Mission-Critical Power & Thermal System')}
              className="backdrop-blur-md bg-white/40 p-8 border border-outline-variant/30 flex flex-col justify-between h-[340px] group relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-accent/40 cursor-pointer shadow-sm"
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.05 }}
            >
              {/* Sleek diagonal hover sheen */}
              <div className="absolute inset-0 w-full h-full -translate-x-[100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-transform duration-1000 ease-out pointer-events-none" />
              
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 pointer-events-none">
                <span className="material-symbols-outlined text-[100px] text-secondary">engineering</span>
              </div>
              <div className="relative z-10">
                <div className="relative w-14 h-14 bg-white/80 border border-outline-variant/30 flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-[0_0_0_0_rgba(233,101,43,0)] group-hover:shadow-[0_0_20px_rgba(233,101,43,0.3)]">
                  {/* Outer glowing double border line */}
                  <div className="absolute inset-[-4px] border border-accent/0 group-hover:border-accent/30 transition-all duration-500 scale-95 group-hover:scale-100" />
                  <span className="material-symbols-outlined text-[28px] relative z-10">precision_manufacturing</span>
                </div>
                <h3 className="font-headline text-[22px] font-bold text-secondary mb-3 group-hover:text-accent transition-colors">Project Sales</h3>
                <p className="font-body text-[14px] text-secondary/70 leading-relaxed max-w-xs font-light">
                  Working with our Sales team enables complex power and cooling configurations to be engineered to your unique technical needs.
                </p>
              </div>
              <span className="relative z-10 inline-flex items-center font-label-caps text-[10px] uppercase tracking-[0.2em] font-bold text-accent group-hover:text-secondary transition-colors mt-auto">
                Start Project Brief 
                <span className="material-symbols-outlined ml-3 text-[18px] group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
              </span>
            </motion.div>

            {/* Path 2 */}
            <motion.div 
              onClick={() => handleMatrixClick(['Monitoring & Management'], 'support', 'Custom Maintenance SLA & Remote Monitoring')}
              className="backdrop-blur-md bg-white/40 p-8 border border-outline-variant/30 flex flex-col justify-between h-[340px] group relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-accent/40 cursor-pointer shadow-sm"
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.1 }}
            >
              {/* Sleek diagonal hover sheen */}
              <div className="absolute inset-0 w-full h-full -translate-x-[100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-transform duration-1000 ease-out pointer-events-none" />
              
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 pointer-events-none">
                <span className="material-symbols-outlined text-[100px] text-secondary">headset_mic</span>
              </div>
              <div className="relative z-10">
                <div className="relative w-14 h-14 bg-white/80 border border-outline-variant/30 flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-[0_0_0_0_rgba(233,101,43,0)] group-hover:shadow-[0_0_20px_rgba(233,101,43,0.3)]">
                  {/* Outer glowing double border line */}
                  <div className="absolute inset-[-4px] border border-accent/0 group-hover:border-accent/30 transition-all duration-500 scale-95 group-hover:scale-100" />
                  <span className="material-symbols-outlined text-[28px] relative z-10">support_agent</span>
                </div>
                <h3 className="font-headline text-[22px] font-bold text-secondary mb-3 group-hover:text-accent transition-colors">Technical Support</h3>
                <p className="font-body text-[14px] text-secondary/70 leading-relaxed max-w-xs font-light">
                  Post-deployment assistance, genuine spare parts management, routine compliance audits, and custom preventative SLA maintenance.
                </p>
              </div>
              <span className="relative z-10 inline-flex items-center font-label-caps text-[10px] uppercase tracking-[0.2em] font-bold text-accent group-hover:text-secondary transition-colors mt-auto">
                Contact Support 
                <span className="material-symbols-outlined ml-3 text-[18px] group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
              </span>
            </motion.div>

            {/* Path 3 */}
            <motion.div 
              onClick={() => handleMatrixClick(['Racks & Enclosures'], 'portal', 'Enterprise Cabinet & IT Infrastructure Distribution')}
              className="backdrop-blur-md bg-white/40 p-8 border border-outline-variant/30 flex flex-col justify-between h-[340px] group relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-accent/40 cursor-pointer shadow-sm"
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.15 }}
            >
              {/* Sleek diagonal hover sheen */}
              <div className="absolute inset-0 w-full h-full -translate-x-[100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-transform duration-1000 ease-out pointer-events-none" />
              
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 pointer-events-none">
                <span className="material-symbols-outlined text-[100px] text-secondary">hub</span>
              </div>
              <div className="relative z-10">
                <div className="relative w-14 h-14 bg-white/80 border border-outline-variant/30 flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-[0_0_0_0_rgba(233,101,43,0)] group-hover:shadow-[0_0_20px_rgba(233,101,43,0.3)]">
                  {/* Outer glowing double border line */}
                  <div className="absolute inset-[-4px] border border-accent/0 group-hover:border-accent/30 transition-all duration-500 scale-95 group-hover:scale-100" />
                  <span className="material-symbols-outlined text-[28px] relative z-10">handshake</span>
                </div>
                <h3 className="font-headline text-[22px] font-bold text-secondary mb-3 group-hover:text-accent transition-colors">Partner Portal</h3>
                <p className="font-body text-[14px] text-secondary/70 leading-relaxed max-w-xs font-light">
                  Connect with registered distributors and resellers for enterprise server racks, micro data centers, and standardized IT enclosures.
                </p>
              </div>
              <span className="relative z-10 inline-flex items-center font-label-caps text-[10px] uppercase tracking-[0.2em] font-bold text-accent group-hover:text-secondary transition-colors mt-auto">
                Find Partner 
                <span className="material-symbols-outlined ml-3 text-[18px] group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Smart Form Section ────────────────────────────────────────── */}
      <section className="py-24 px-8 md:px-16 bg-background border-t border-outline-variant/30" id="quote-form">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Form Context */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-32">
              <motion.h2 
                className="font-headline text-[32px] md:text-[44px] text-secondary font-black uppercase tracking-tight leading-none mb-4"
                initial={{ opacity: 0, x: -20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
              >
                Technical Brief
              </motion.h2>
              <motion.p 
                className="font-body text-[15px] text-secondary/70 leading-relaxed mb-10 max-w-sm font-light"
                initial={{ opacity: 0, x: -20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.1 }}
              >
                Provide details about your project scale and specifications. Our electrical and mechanical engineering team typically compiles preliminary assessments within 1 business day.
              </motion.p>
              
              <motion.div 
                className="bg-white p-8 border border-outline-variant/30 shadow-sm relative overflow-hidden"
                initial={{ opacity: 0, x: -20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.15 }}
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
                <h4 className="font-label-caps text-[11px] text-secondary uppercase tracking-[0.2em] mb-6 font-bold">Resilience Protocols</h4>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-accent text-[22px] shrink-0">lock</span>
                    <span className="font-body text-[13px] text-secondary/70 leading-snug">Encrypted end-to-end specification data transfers.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-accent text-[22px] shrink-0">verified_user</span>
                    <span className="font-body text-[13px] text-secondary/70 leading-snug">Mutual Non-Disclosure Agreement (NDA) drafts dispatched instantly on demand.</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
          
          {/* Form Canvas */}
          <div className="lg:col-span-8 bg-white p-8 md:p-12 border border-outline-variant/30 shadow-sm relative">
            
            {/* Elegant Prefilled Context Notification Banner */}
            <AnimatePresence>
              {inquiry && item && (
                <motion.div 
                  initial={{ opacity: 0, y: -20, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -20, height: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="bg-accent/[0.04] border border-accent/25 p-5 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-accent relative overflow-hidden backdrop-blur-md"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-accent z-20" />
                  
                  {/* Subtle animated light sweep across banner */}
                  <motion.div 
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-accent/[0.05] to-transparent pointer-events-none"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                  
                  <div className="flex items-center gap-3 relative z-10">
                    <span className="material-symbols-outlined text-[24px] text-accent animate-pulse shrink-0">bolt</span>
                    <div className="flex flex-col gap-0.5 text-left">
                      <span className="font-label-caps text-[9px] tracking-[0.15em] text-secondary/60 font-semibold uppercase">Live Brief Generator</span>
                      <span className="font-headline text-[13px] font-black uppercase tracking-wide text-secondary leading-none">
                        Prefilled for: <span className="text-accent underline font-black decoration-accent/40 decoration-2 underline-offset-2">{decodeURIComponent(item)}</span> <span className="text-secondary/50 font-normal">({inquiry})</span>
                      </span>
                    </div>
                  </div>
                  <button 
                    type="button" 
                    onClick={() => {
                      setSearchParams({});
                    }}
                    className="font-label-caps text-[9px] font-bold uppercase tracking-wider text-secondary hover:text-accent transition-colors border border-outline/35 px-4 py-2 bg-white shrink-0 hover:bg-accent/5 hover:border-accent/40 shadow-sm relative z-10 rounded-none"
                  >
                    Reset Form
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form className="space-y-12" onSubmit={handleFormSubmit}>
              
              {/* Step 1: Contact details */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
              >
                <h3 className="font-headline text-[22px] font-black text-secondary border-b border-outline-variant/20 pb-4 mb-8 flex items-center gap-4 uppercase tracking-wide">
                  <span className="bg-surface-container-low text-accent w-9 h-9 flex items-center justify-center font-bold text-[13px] border border-outline-variant/35 rounded-none">01</span>
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 group relative">
                    <label className="font-label-caps text-[9px] uppercase tracking-[0.2em] font-semibold text-secondary/65 group-focus-within:text-accent transition-colors block" htmlFor="fullName">Full Name *</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        id="fullName" 
                        required 
                        value={formState.fullName}
                        onChange={handleInputChange}
                        className="w-full bg-surface-container-lowest border border-outline-variant/30 px-5 py-3.5 font-body text-[15px] text-on-background focus:border-accent/50 outline-none transition-colors rounded-none" 
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-center scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100 pointer-events-none" />
                    </div>
                  </div>
                  <div className="space-y-2 group relative">
                    <label className="font-label-caps text-[9px] uppercase tracking-[0.2em] font-semibold text-secondary/65 group-focus-within:text-accent transition-colors block" htmlFor="company">Company / Facility *</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        id="company" 
                        required 
                        value={formState.company}
                        onChange={handleInputChange}
                        className="w-full bg-surface-container-lowest border border-outline-variant/30 px-5 py-3.5 font-body text-[15px] text-on-background focus:border-accent/50 outline-none transition-colors rounded-none" 
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-center scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100 pointer-events-none" />
                    </div>
                  </div>
                  <div className="space-y-2 group relative md:col-span-2">
                    <label className="font-label-caps text-[9px] uppercase tracking-[0.2em] font-semibold text-secondary/65 group-focus-within:text-accent transition-colors block" htmlFor="email">Professional Email Address *</label>
                    <div className="relative">
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        value={formState.email}
                        onChange={handleInputChange}
                        className="w-full bg-surface-container-lowest border border-outline-variant/30 px-5 py-3.5 font-body text-[15px] text-on-background focus:border-accent/50 outline-none transition-colors rounded-none" 
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-center scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 2: Project Scope */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
              >
                <h3 className="font-headline text-[22px] font-black text-secondary border-b border-outline-variant/20 pb-4 mb-8 flex items-center gap-4 uppercase tracking-wide">
                  <span className="bg-surface-container-low text-accent w-9 h-9 flex items-center justify-center font-bold text-[13px] border border-outline-variant/35 rounded-none">02</span>
                  Project Parameters
                </h3>
                <div className="space-y-8">
                  <div className="space-y-2 group relative">
                    <label className="font-label-caps text-[9px] uppercase tracking-[0.2em] font-semibold text-secondary/65 group-focus-within:text-accent transition-colors block" htmlFor="industry">Industry Sector</label>
                    <div className="relative">
                      <select 
                        id="industry" 
                        value={formState.industry}
                        onChange={handleInputChange}
                        className="w-full bg-surface-container-lowest border border-outline-variant/30 px-5 py-3.5 font-body text-[15px] text-on-background focus:border-accent/50 outline-none appearance-none transition-colors cursor-pointer rounded-none"
                      >
                        <option value="" disabled>Select an industry...</option>
                        <option value="data-center">Colocation & Hyperscale Data Centers</option>
                        <option value="telecom">Telecommunications & NOCs</option>
                        <option value="manufacturing">Heavy Industrial & Process Plants</option>
                        <option value="healthcare">Healthcare Campuses & Labs</option>
                        <option value="finance">Banking & Financial institutions</option>
                        <option value="infrastructure">Airports, Transit & Infrastructure</option>
                        <option value="other">Other Mission-Critical Applications</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-secondary pointer-events-none text-[22px] group-hover:text-accent transition-colors">expand_more</span>
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-center scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="font-label-caps text-[9px] uppercase tracking-[0.2em] font-semibold text-secondary/65 block">Engineering Topics of Interest (Select multiple)</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.keys(topics).map((topic) => (
                        <label 
                          key={topic} 
                          className={cn(
                            "flex items-center p-4 border transition-all duration-300 bg-surface-container-lowest cursor-pointer select-none relative overflow-hidden group rounded-none",
                            topics[topic] 
                              ? "border-accent bg-accent/[0.02]" 
                              : "border-outline-variant/30 hover:border-accent/40 hover:bg-surface-container-low"
                          )}
                        >
                          {/* Hidden checkbox */}
                          <input 
                            type="checkbox" 
                            checked={topics[topic]}
                            onChange={() => handleTopicChange(topic)}
                            className="sr-only" 
                          />
                          
                          {/* Custom Checkbox Frame */}
                          <div className={cn(
                            "w-5 h-5 border flex items-center justify-center mr-4 transition-all duration-300 relative shrink-0",
                            topics[topic] 
                              ? "border-accent bg-accent text-white scale-105 shadow-[0_0_10px_rgba(233,101,43,0.3)]" 
                              : "border-outline-variant/60 group-hover:border-accent"
                          )}>
                            <AnimatePresence>
                              {topics[topic] && (
                                <motion.span 
                                  initial={{ scale: 0, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  exit={{ scale: 0, opacity: 0 }}
                                  className="material-symbols-outlined text-[14px] font-bold relative z-10"
                                >
                                  check
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </div>
                          
                          <span className={cn(
                            "font-body text-[14px] font-medium transition-colors duration-300",
                            topics[topic] ? "text-accent font-semibold" : "text-secondary group-hover:text-accent"
                          )}>
                            {topic}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 group relative">
                    <label className="font-label-caps text-[9px] uppercase tracking-[0.2em] font-semibold text-secondary/65 group-focus-within:text-accent transition-colors block" htmlFor="message">Project Description & Specifications</label>
                    <div className="relative">
                      <textarea 
                        id="message" 
                        rows="5" 
                        placeholder="Briefly detail your design constraints, capacities, single-line diagrams, or scheduled PM intervals..." 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-surface-container-lowest border border-outline-variant/30 px-5 py-4 font-body text-[15px] text-on-background focus:border-accent/50 outline-none transition-colors resize-y rounded-none"
                      ></textarea>
                      <div className="absolute bottom-[6px] left-0 right-0 h-[2px] bg-accent origin-center scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 3: Technical Brief Upload */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
              >
                <h3 className="font-headline text-[22px] font-black text-secondary border-b border-outline-variant/20 pb-4 mb-8 flex items-center gap-4 uppercase tracking-wide">
                  <span className="bg-surface-container-low text-accent w-9 h-9 flex items-center justify-center font-bold text-[13px] border border-outline-variant/35 rounded-none">03</span>
                  Documentation Upload
                </h3>
                
                <div 
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={cn(
                    "border-2 border-dashed p-10 flex flex-col items-center justify-center bg-white transition-all duration-500 relative group cursor-pointer rounded-none",
                    isDragging ? "border-accent bg-accent/[0.03] scale-[1.01]" : "border-outline-variant/30 hover:border-accent/40 hover:bg-surface-container-lowest",
                    selectedFile ? (isVerifyingFile ? "border-accent/40 bg-accent/[0.01]" : "border-[#16a34a]/30 bg-[#16a34a]/[0.01]") : ""
                  )}
                >
                  <input 
                    type="file" 
                    id="fileUpload" 
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer z-10" 
                    disabled={isVerifyingFile}
                  />
                  
                  {isVerifyingFile ? (
                    <div className="flex flex-col items-center justify-center w-full max-w-md py-4">
                      {/* Pulsing Bolt Loader */}
                      <div className="relative mb-4">
                        <span className="material-symbols-outlined text-[48px] text-accent animate-bounce">bolt</span>
                        <div className="absolute inset-0 rounded-full bg-accent/20 blur-md animate-ping" />
                      </div>
                      <p className="font-headline text-[16px] font-bold text-on-background text-center mb-2 uppercase tracking-wide">
                        Analyzing Specifications...
                      </p>
                      <p className="font-body text-[12px] text-secondary/60 text-center mb-4">
                        Hashing data stream & verifying security signature
                      </p>
                      
                      {/* Progress Bar Container */}
                      <div className="w-full bg-outline-variant/20 h-[4px] overflow-hidden relative">
                        <motion.div 
                          className="h-full bg-accent"
                          initial={{ width: '0%' }}
                          animate={{ width: `${uploadProgress}%` }}
                          transition={{ ease: 'easeOut' }}
                        />
                      </div>
                      <span className="font-label-caps text-[10px] tracking-wider text-accent font-bold mt-2">
                        {uploadProgress}% COMPLETE
                      </span>
                    </div>
                  ) : selectedFile ? (
                    <div className="flex flex-col items-center justify-center w-full py-2 relative z-20">
                      <motion.div 
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="w-16 h-16 bg-[#16a34a]/10 border border-[#16a34a]/30 flex items-center justify-center mb-4 text-[#16a34a] shadow-[0_0_15px_rgba(22,163,74,0.2)]"
                      >
                        <span className="material-symbols-outlined text-[32px]">task</span>
                      </motion.div>
                      <p className="font-headline text-[18px] font-bold text-on-background text-center mb-1 uppercase tracking-wide">
                        Verified Technical Document
                      </p>
                      <div className="flex items-center justify-center gap-2 mb-6">
                        <span className="font-body text-[14px] text-secondary font-medium">{selectedFile.name}</span>
                        <span className="font-body text-[12px] text-secondary/50 font-light">
                          ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
                        </span>
                      </div>
                      
                      <button 
                        type="button" 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setSelectedFile(null);
                          setUploadProgress(0);
                        }}
                        className="font-label-caps text-[9px] tracking-[0.15em] text-red-500 uppercase bg-red-50 hover:bg-red-100 hover:border-red-400 px-5 py-2.5 border border-red-200 transition-all duration-300 z-30 shadow-sm rounded-none"
                      >
                        Remove Document
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-4">
                      {/* Floating Cloud Upload Icon */}
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="mb-4 text-secondary group-hover:text-accent transition-colors"
                      >
                        <span className="material-symbols-outlined text-[54px] duration-300">cloud_upload</span>
                      </motion.div>
                      <p className="font-headline text-[18px] font-bold text-on-background text-center mb-1 uppercase tracking-wide">
                        Drag & drop specifications here
                      </p>
                      <p className="font-body text-[14px] text-secondary/60 text-center mb-6">
                        or click to browse from local directories
                      </p>
                      <span className="font-label-caps text-[10px] tracking-[0.15em] text-secondary/60 uppercase bg-surface-container-low px-4 py-1.5 border border-outline-variant/35 font-bold">
                        Supported: PDF, DOCX, XLSX (Max 20MB)
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Actions & Submit */}
              <div className="pt-8 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-6">
                <label className="flex items-center cursor-pointer select-none group">
                  <input type="checkbox" required className="sr-only" />
                  
                  {/* Custom Checkbox */}
                  <div className="w-5 h-5 border border-outline-variant/65 flex items-center justify-center mr-3 shrink-0 group-hover:border-accent transition-colors duration-300">
                    <span className="material-symbols-outlined text-[14px] text-white bg-accent w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-10 scale-90 group-hover:scale-100 transition-all duration-300">check</span>
                  </div>
                  
                  <span className="font-body text-[14px] text-secondary/70 group-hover:text-secondary transition-colors">I consent to secure data compliance & privacy protocols *</span>
                </label>
                
                <div className="w-full sm:w-auto relative">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    theme="light" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto min-w-[200px]"
                    showArrow={!isSubmitting}
                  >
                    {isSubmitting ? 'PROCESSING...' : 'SUBMIT BRIEF'}
                  </Button>
                  
                  <AnimatePresence>
                    {submitSuccess && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        exit={{ opacity: 0, scale: 0.95 }} 
                        className="absolute inset-0 bg-[#16a34a] border border-[#16a34a] flex items-center justify-center gap-2 text-white shadow-lg font-bold"
                      >
                        <span className="material-symbols-outlined text-[22px]">check_circle</span>
                        <span className="font-label-caps text-[10.5px] uppercase tracking-wider">BRIEF SUBMITTED</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
