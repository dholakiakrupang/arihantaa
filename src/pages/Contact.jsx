import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Contact() {
  return (
    <div className="bg-background text-on-background font-body min-h-screen">
      
      {/* ── Hero Section ──────────────────────────────────────────────── */}
      <section className="relative bg-inverse-surface text-white py-20 md:py-28 px-8 md:px-16 overflow-hidden border-b border-outline-variant/30">
        {/* Ghost Text Background */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none font-headline font-black text-[120px] md:text-[220px] text-white/5 uppercase tracking-tighter whitespace-nowrap"
        >
          QUOTE
        </div>
        
        <div className="max-w-[1280px] mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-8">
            <motion.span 
              className="inline-block font-label-caps text-[11px] text-accent uppercase tracking-[0.2em] border border-accent px-4 py-2"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            >
              Consultation Request
            </motion.span>
            
            <motion.h1 
              className="font-headline text-[40px] md:text-[64px] text-white leading-tight font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              Engineering solutions for a mission-critical world.
            </motion.h1>
            
            <motion.p 
              className="font-body text-[18px] text-white/70 max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            >
              From grid-scale UPS deployment to high-density thermal management, our specialists are ready to consult on your next infrastructure challenge.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Consultation Matrix Section ───────────────────────────────── */}
      <section className="py-24 px-8 md:px-16 bg-surface-container-lowest">
        <div className="max-w-[1280px] mx-auto">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <h2 className="font-headline text-[32px] md:text-[48px] text-on-background font-bold tracking-tight">How can we assist you?</h2>
            <p className="font-body text-[16px] text-secondary mt-4">Select the appropriate path to connect with the right specialists.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Path 1 */}
            <motion.div 
              className="bg-white p-8 border border-surface-variant shadow-lg hover:-translate-y-2 transition-transform duration-500 flex flex-col justify-between h-full group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                <span className="material-symbols-outlined text-[80px]">precision_manufacturing</span>
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-surface-container-low flex items-center justify-center mb-6 text-accent">
                  <span className="material-symbols-outlined text-[24px]">engineering</span>
                </div>
                <h3 className="font-headline text-[24px] font-bold text-on-background mb-4">Project Sales</h3>
                <p className="font-body text-[16px] text-secondary mb-10 leading-relaxed">
                  Working with our Sales team enables complex designs to be configured to your unique needs.
                </p>
              </div>
              <a href="#quote-form" className="relative z-10 inline-flex items-center font-label-caps text-[11px] uppercase tracking-[0.15em] text-accent group-hover:text-primary transition-colors mt-auto">
                Start Project Brief 
                <span className="material-symbols-outlined ml-3 text-[16px] group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
              </a>
            </motion.div>

            {/* Path 2 */}
            <motion.div 
              className="bg-white p-8 border border-surface-variant shadow-lg hover:-translate-y-2 transition-transform duration-500 flex flex-col justify-between h-full group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                <span className="material-symbols-outlined text-[80px]">support_agent</span>
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-surface-container-low flex items-center justify-center mb-6 text-accent">
                  <span className="material-symbols-outlined text-[24px]">headset_mic</span>
                </div>
                <h3 className="font-headline text-[24px] font-bold text-on-background mb-4">Technical Support</h3>
                <p className="font-body text-[16px] text-secondary mb-10 leading-relaxed">
                  Post-deployment assistance, parts management, and preventive maintenance.
                </p>
              </div>
              <Link to="#" className="relative z-10 inline-flex items-center font-label-caps text-[11px] uppercase tracking-[0.15em] text-accent group-hover:text-primary transition-colors mt-auto">
                Contact Support 
                <span className="material-symbols-outlined ml-3 text-[16px] group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
              </Link>
            </motion.div>

            {/* Path 3 */}
            <motion.div 
              className="bg-white p-8 border border-surface-variant shadow-lg hover:-translate-y-2 transition-transform duration-500 flex flex-col justify-between h-full group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                <span className="material-symbols-outlined text-[80px]">handshake</span>
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-surface-container-low flex items-center justify-center mb-6 text-accent">
                  <span className="material-symbols-outlined text-[24px]">hub</span>
                </div>
                <h3 className="font-headline text-[24px] font-bold text-on-background mb-4">Partner Portal</h3>
                <p className="font-body text-[16px] text-secondary mb-10 leading-relaxed">
                  Find a Reseller or Distributor for standard IT applications and integrated solutions.
                </p>
              </div>
              <Link to="#" className="relative z-10 inline-flex items-center font-label-caps text-[11px] uppercase tracking-[0.15em] text-accent group-hover:text-primary transition-colors mt-auto">
                Find Partner 
                <span className="material-symbols-outlined ml-3 text-[16px] group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Smart Form Section ────────────────────────────────────────── */}
      <section className="py-24 px-8 md:px-16 bg-background border-t border-surface-variant/40" id="quote-form">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Form Context */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-32">
              <motion.h2 
                className="font-headline text-[32px] md:text-[48px] text-on-background font-bold tracking-tight"
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              >
                Technical Brief
              </motion.h2>
              <motion.p 
                className="font-body text-[16px] text-secondary mt-4 mb-10 leading-relaxed"
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              >
                Provide details about your project requirements. Our engineering team typically responds within 24-48 hours with preliminary assessments.
              </motion.p>
              
              <motion.div 
                className="bg-surface p-8 border border-surface-variant/50 shadow-lg"
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              >
                <h4 className="font-label-caps text-[11px] text-on-background uppercase tracking-[0.15em] mb-6 font-bold">Secure Submission</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-accent text-[20px]">lock</span>
                    <span className="font-body text-[14px] text-secondary leading-snug">End-to-end encrypted transfer of specifications.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-accent text-[20px]">verified_user</span>
                    <span className="font-body text-[14px] text-secondary leading-snug">NDAs automatically generated upon request.</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
          
          {/* Form Canvas */}
          <div className="lg:col-span-8 bg-white p-8 md:p-12 shadow-2xl border border-surface-variant/40">
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              
              {/* Step 1: Identity */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="font-headline text-[24px] font-bold text-on-background border-b border-surface-variant/50 pb-4 mb-8 flex items-center gap-4">
                  <span className="bg-surface-container-low text-accent w-10 h-10 flex items-center justify-center font-bold text-[14px] border border-accent/20">1</span>
                  Contact Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label-caps text-[10px] uppercase tracking-[0.15em] text-secondary block" htmlFor="fullName">Full Name *</label>
                    <input type="text" id="fullName" required className="w-full bg-surface border border-outline-variant/30 px-5 py-3 font-body text-[16px] text-on-background focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-caps text-[10px] uppercase tracking-[0.15em] text-secondary block" htmlFor="company">Company *</label>
                    <input type="text" id="company" required className="w-full bg-surface border border-outline-variant/30 px-5 py-3 font-body text-[16px] text-on-background focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="font-label-caps text-[10px] uppercase tracking-[0.15em] text-secondary block" htmlFor="email">Professional Email *</label>
                    <input type="email" id="email" required className="w-full bg-surface border border-outline-variant/30 px-5 py-3 font-body text-[16px] text-on-background focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" />
                  </div>
                </div>
              </motion.div>

              {/* Step 2: Project Scope */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="font-headline text-[24px] font-bold text-on-background border-b border-surface-variant/50 pb-4 mb-8 flex items-center gap-4">
                  <span className="bg-surface-container-low text-accent w-10 h-10 flex items-center justify-center font-bold text-[14px] border border-accent/20">2</span>
                  Project Scope
                </h3>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <label className="font-label-caps text-[10px] uppercase tracking-[0.15em] text-secondary block" htmlFor="industry">Industry Sector</label>
                    <div className="relative">
                      <select id="industry" className="w-full bg-surface border border-outline-variant/30 px-5 py-3 font-body text-[16px] text-on-background focus:border-accent focus:ring-1 focus:ring-accent outline-none appearance-none transition-colors cursor-pointer">
                        <option value="" disabled selected>Select an industry...</option>
                        <option value="data-center">Colocation Data Centers</option>
                        <option value="telecom">Telecom</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="finance">Finance</option>
                        <option value="other">Other</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-secondary pointer-events-none">expand_more</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="font-label-caps text-[10px] uppercase tracking-[0.15em] text-secondary block">Topics of Interest (Select multiple)</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['Critical Power (UPS)', 'Thermal Management', 'Monitoring & Management', 'Racks & Enclosures'].map((topic) => (
                        <label key={topic} className="flex items-center p-4 border border-outline-variant/30 bg-surface cursor-pointer hover:bg-surface-variant transition-colors has-[:checked]:border-accent has-[:checked]:bg-accent/5">
                          <input type="checkbox" className="w-4 h-4 text-accent border-outline-variant rounded focus:ring-accent mr-4 accent-accent" />
                          <span className="font-body text-[14px] text-on-background font-medium">{topic}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-label-caps text-[10px] uppercase tracking-[0.15em] text-secondary block" htmlFor="message">Project Description</label>
                    <textarea id="message" rows="5" placeholder="Briefly describe your challenge or requirements..." className="w-full bg-surface border border-outline-variant/30 px-5 py-4 font-body text-[16px] text-on-background focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-y"></textarea>
                  </div>
                </div>
              </motion.div>

              {/* Step 3: Documentation */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="font-headline text-[24px] font-bold text-on-background border-b border-surface-variant/50 pb-4 mb-8 flex items-center gap-4">
                  <span className="bg-surface-container-low text-accent w-10 h-10 flex items-center justify-center font-bold text-[14px] border border-accent/20">3</span>
                  Technical Documents
                </h3>
                <div className="border-2 border-dashed border-outline-variant/50 p-12 flex flex-col items-center justify-center bg-surface hover:bg-surface-variant/50 transition-colors cursor-pointer group">
                  <span className="material-symbols-outlined text-[48px] text-secondary mb-4 group-hover:text-accent transition-colors">cloud_upload</span>
                  <p className="font-headline text-[18px] font-bold text-on-background text-center mb-1">Drag & drop files here</p>
                  <p className="font-body text-[14px] text-secondary text-center mb-6">or click to browse from your computer</p>
                  <span className="font-label-caps text-[10px] tracking-[0.15em] text-secondary uppercase bg-surface-container-low px-3 py-1">Supported: PDF, DOCX, XLSX (Max 20MB)</span>
                </div>
              </motion.div>

              {/* Actions */}
              <div className="pt-8 border-t border-surface-variant/50 flex flex-col sm:flex-row items-center justify-between gap-6">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" required className="w-4 h-4 text-accent border-outline-variant rounded focus:ring-accent mr-3 accent-accent" />
                  <span className="font-body text-[14px] text-secondary">I consent to the Privacy Policy.</span>
                </label>
                <button type="submit" className="w-full sm:w-auto bg-accent text-white font-label-caps text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-accent/90 transition-colors flex items-center justify-center gap-3 shadow-lg hover:shadow-accent/30 hover:-translate-y-1 duration-300">
                  Submit Brief
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
