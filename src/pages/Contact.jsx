import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "../components/ui/Button";

export function Contact() {
  const [searchParams, setSearchParams] = useSearchParams();
  const inquiry = searchParams.get("inquiry");
  const item = searchParams.get("item");

  const [formState, setFormState] = useState({
    fullName: "",
    company: "",
    phone: "",
    email: "",
    enquiryType: "",
    location: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isWaHovered, setIsWaHovered] = useState(false);

  useEffect(() => {
    if (inquiry || item) {
      setFormState((prev) => {
        let mappedType = prev.enquiryType;
        let messageText = prev.message;

        if (item) {
          const lowerItem = item.toLowerCase();
          if (lowerItem.includes("tta") || lowerItem.includes("panel")) {
            mappedType = "L&T TTA Panel";
          } else if (lowerItem.includes("rmu")) {
            mappedType = "Lucy RMU";
          } else if (
            lowerItem.includes("css") ||
            lowerItem.includes("substation")
          ) {
            mappedType = "Lucy CSS";
          } else if (
            lowerItem.includes("mepf") ||
            lowerItem.includes("consultancy")
          ) {
            mappedType = "MEPF Consultancy";
          } else if (
            lowerItem.includes("epc") ||
            lowerItem.includes("turnkey") ||
            lowerItem.includes("infrastructure")
          ) {
            mappedType = "EPC Contracting";
          } else {
            mappedType = "Other";
          }

          messageText = `I am interested in obtaining specifications, quotes, or consultation details regarding: ${item}.\n\nPlease contact me with further details.`;
        } else if (inquiry) {
          if (inquiry === "quote") {
            mappedType = "Other";
          } else if (inquiry === "consultation") {
            mappedType = "MEPF Consultancy";
          } else if (inquiry === "sales") {
            mappedType = "EPC Contracting";
          }
        }

        return {
          ...prev,
          enquiryType: mappedType || prev.enquiryType,
          message: messageText || prev.message,
        };
      });
    }
  }, [inquiry, item]);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormState((prev) => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        // Reset form
        setFormState({
          fullName: "",
          company: "",
          phone: "",
          email: "",
          enquiryType: "",
          location: "",
          message: "",
        });
        setSearchParams({});
      }, 3000);
    }, 1500);
  };

  return (
    <div className="bg-background text-on-background font-body pt-[56px] sm:pt-[64px] md:pt-[80px]">
      {/* ── Hero Section ──────────────────────────────────────────────── */}
      <section className="relative bg-[#08090c] text-white py-16 md:py-24 overflow-hidden border-b border-outline-variant/30 flex flex-col justify-center">
        {/* Ambient Spotlights */}
        <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -top-[30%] -left-[10%] w-[65%] h-[80%] max-w-[1100px] max-h-[768px] rounded-full bg-accent/10 blur-[100px]" />
          <div className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[80%] max-w-[1000px] max-h-[768px] rounded-full bg-primary/5 blur-[120px]" />
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10 w-full px-8 md:px-16">
          <div className="max-w-4xl space-y-6">
            <motion.nav
              className="flex items-center gap-2 mb-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/"
                className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
              >
                Home
              </Link>
              <span className="material-symbols-outlined text-white/35 text-[14px] select-none flex items-center justify-center">
                chevron_right
              </span>
              <span className="font-label-caps text-[10px] text-white/35 tracking-[0.2em] uppercase">
                Contact
              </span>
            </motion.nav>

            <motion.h1
              className="font-headline text-[38px] md:text-[62px] lg:text-[72px] leading-[1.08] font-black tracking-tighter uppercase"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Let's power your <br />
              <span className="text-accent">next project</span> together.
            </motion.h1>

            <motion.p
              className="font-body text-[15px] md:text-[17px] text-white/60 max-w-xl leading-relaxed font-light"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Whether you need a product quote, MEPF consultancy, or want to
              discuss a project partnership — our team is ready to help.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Main Two-Column split ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Details Card */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-32 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[2px] w-6 bg-accent" />
                  <span className="font-label-caps text-[11px] text-accent tracking-[0.22em] uppercase font-bold">
                    Connect Directly
                  </span>
                </div>
                <h2 className="font-headline text-3xl font-bold text-on-surface uppercase tracking-tight">
                  Our Offices
                </h2>
              </div>

              {/* Contacts Block */}
              <div className="border border-outline-variant/30 bg-surface-container-low p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
                <ul className="space-y-6">
                  {/* Address */}
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-accent text-[24px] shrink-0 mt-0.5">
                      location_on
                    </span>
                    <div>
                      <span className="font-label-caps text-[9px] text-secondary/50 tracking-[0.15em] uppercase block mb-1 font-bold">
                        Office Address
                      </span>
                      <p className="font-body text-[14px] text-on-surface leading-relaxed">
                        Ahmedabad, Gujarat, India
                        <br />
                        <span className="text-[12px] text-secondary/60">
                          (Full office address details pending from client)
                        </span>
                      </p>
                    </div>
                  </li>

                  {/* Phone */}
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-accent text-[24px] shrink-0 mt-0.5">
                      call
                    </span>
                    <div>
                      <span className="font-label-caps text-[9px] text-secondary/50 tracking-[0.15em] uppercase block mb-1 font-bold">
                        Phone Connection
                      </span>
                      <p className="font-body text-[14px] text-on-surface">
                        +91 XXXXX XXXXX
                        <br />
                        <span className="text-[12px] text-secondary/60">
                          (Official contact number pending)
                        </span>
                      </p>
                    </div>
                  </li>

                  {/* Email */}
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-accent text-[24px] shrink-0 mt-0.5">
                      mail
                    </span>
                    <div>
                      <span className="font-label-caps text-[9px] text-secondary/50 tracking-[0.15em] uppercase block mb-1 font-bold">
                        Technical Enquiries
                      </span>
                      <a
                        href="mailto:info@arihantaa.com"
                        className="font-body text-[14px] text-on-surface hover:text-accent transition-colors"
                      >
                        info@arihantaa.com
                      </a>
                    </div>
                  </li>

                  {/* Hours */}
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-accent text-[24px] shrink-0 mt-0.5">
                      schedule
                    </span>
                    <div className="flex-1">
                      <span className="font-label-caps text-[9px] text-secondary/50 tracking-[0.15em] uppercase block mb-2.5 font-bold">
                        Business Hours
                      </span>

                      {/* Day block badges */}
                      <div className="flex items-center gap-1.5 mb-2.5">
                        {["M", "T", "W", "T", "F", "S"].map((day, idx) => (
                          <div
                            key={idx}
                            className="w-6 h-6 flex items-center justify-center text-[10px] font-mono font-bold bg-accent/10 text-accent border border-accent/20 select-none rounded-none"
                            title="Open"
                          >
                            {day}
                          </div>
                        ))}
                        <div
                          className="w-6 h-6 flex items-center justify-center text-[10px] font-mono font-bold bg-white/5 text-accent border border-accent/20 select-none rounded-none"
                          title="Closed"
                        >
                          S
                        </div>
                      </div>

                      {/* Timings */}
                      <div className="font-body text-[13.5px] text-on-surface leading-relaxed">
                        <span className="text-accent font-bold">
                          9:00 AM – 6:30 PM
                        </span>
                        <span className="text-secondary/60 text-[12px] ml-2 font-medium">
                          (Monday – Saturday)
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* WhatsApp Trigger */}
              <div className="pt-4">
                <a
                  href={`https://wa.me/917434999919?text=${encodeURIComponent("Hello! I visited your website and have an inquiry regarding Arihantaa Powertech services/products.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setIsWaHovered(true)}
                  onMouseLeave={() => setIsWaHovered(false)}
                  className="group relative flex items-center justify-center gap-4 border border-outline-variant/30 bg-[#0c0c0c] p-3.5 shadow-md transition-colors duration-500 overflow-hidden select-none cursor-pointer w-full h-[52px] rounded-none"
                >
                  {/* Luxury dual diagonal sweeps */}
                  <div className="absolute inset-0 bg-accent -translate-x-[120%] group-hover:translate-x-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] z-0 skew-x-12 scale-110 origin-left" />
                  <div className="absolute inset-0 bg-[#25D366] -translate-x-[120%] group-hover:translate-x-0 transition-transform duration-[600ms] delay-[60ms] ease-[cubic-bezier(0.76,0,0.24,1)] z-0 skew-x-12 scale-110 origin-left" />

                  {/* Content Wrapper */}
                  <div className="relative z-10 flex items-center justify-center gap-3.5">
                    {/* WhatsApp Icon with Premium Glow Ripple */}
                    <div className="flex items-center relative">
                      <div className="absolute inset-[-4px] rounded-full bg-white/10 group-hover:bg-[#25D366]/20 blur-[3px] scale-75 group-hover:scale-125 transition-all duration-500 pointer-events-none" />
                      <motion.svg
                        className="w-5 h-5 text-white relative z-10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        variants={{
                          idle: { scale: 1, rotate: 0 },
                          hover: {
                            scale: 1.18,
                            rotate: [0, -18, 15, -12, 10, -5, 0],
                            transition: {
                              rotate: {
                                duration: 0.6,
                                ease: "easeInOut",
                              },
                              scale: {
                                type: "spring",
                                stiffness: 300,
                                damping: 10,
                              },
                            },
                          },
                        }}
                        animate={isWaHovered ? "hover" : "idle"}
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </motion.svg>
                    </div>

                    {/* Elegant Separator */}
                    <div className="w-[1px] h-4 bg-white/20 group-hover:bg-white/40 transition-colors" />

                    {/* Rolling character animation */}
                    <div className="flex overflow-hidden font-label-caps text-[10px] tracking-[0.2em] font-semibold text-white">
                      {"CHAT ON WHATSAPP".split("").map((char, i) => (
                        <div
                          key={i}
                          className="relative flex flex-col items-center justify-center"
                        >
                          {/* Default Text */}
                          <span
                            className="inline-block transition-transform duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[150%]"
                            style={{ transitionDelay: `${i * 0.015}s` }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </span>
                          {/* Hover Roll-up Text */}
                          <span
                            className="absolute top-full left-0 text-white inline-block transition-transform duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full font-bold"
                            style={{ transitionDelay: `${i * 0.015}s` }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form Canvas */}
          <div className="lg:col-span-8 bg-surface-container-lowest p-6 sm:p-10 md:p-12 border border-outline-variant/30">
            <h3 className="font-headline text-[22px] font-black text-on-surface border-b border-outline-variant/20 pb-4 mb-8 uppercase tracking-wide">
              Submit Enquiry Brief
            </h3>

            <form className="space-y-8" onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2 group relative">
                  <label
                    className="font-label-caps text-[9.5px] uppercase tracking-[0.2em] font-semibold text-secondary/65 group-focus-within:text-accent transition-colors block"
                    htmlFor="fullName"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={formState.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-surface-container border border-outline-variant/20 px-5 py-3.5 font-body text-[14.5px] text-on-background focus:border-accent/40 outline-none transition-colors rounded-none"
                  />
                </div>

                {/* Company Name */}
                <div className="space-y-2 group relative">
                  <label
                    className="font-label-caps text-[9.5px] uppercase tracking-[0.2em] font-semibold text-secondary/65 group-focus-within:text-accent transition-colors block"
                    htmlFor="company"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formState.company}
                    onChange={handleInputChange}
                    className="w-full bg-surface-container border border-outline-variant/20 px-5 py-3.5 font-body text-[14.5px] text-on-background focus:border-accent/40 outline-none transition-colors rounded-none"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2 group relative">
                  <label
                    className="font-label-caps text-[9.5px] uppercase tracking-[0.2em] font-semibold text-secondary/65 group-focus-within:text-accent transition-colors block"
                    htmlFor="phone"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formState.phone}
                    onChange={handleInputChange}
                    className="w-full bg-surface-container border border-outline-variant/20 px-5 py-3.5 font-body text-[14.5px] text-on-background focus:border-accent/40 outline-none transition-colors rounded-none"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2 group relative">
                  <label
                    className="font-label-caps text-[9.5px] uppercase tracking-[0.2em] font-semibold text-secondary/65 group-focus-within:text-accent transition-colors block"
                    htmlFor="email"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    className="w-full bg-surface-container border border-outline-variant/20 px-5 py-3.5 font-body text-[14.5px] text-on-background focus:border-accent/40 outline-none transition-colors rounded-none"
                  />
                </div>

                {/* Enquiry Type Dropdown */}
                <div className="space-y-2 group relative md:col-span-2">
                  <label
                    className="font-label-caps text-[9.5px] uppercase tracking-[0.2em] font-semibold text-secondary/65 block"
                    htmlFor="enquiryType"
                  >
                    Enquiry Type *
                  </label>
                  <div className="relative">
                    <select
                      id="enquiryType"
                      required
                      value={formState.enquiryType}
                      onChange={handleInputChange}
                      className="w-full bg-surface-container border border-outline-variant/20 px-5 py-3.5 font-body text-[14.5px] text-on-background focus:border-accent/40 outline-none appearance-none cursor-pointer rounded-none"
                    >
                      <option value="" disabled>
                        Select inquiry type...
                      </option>
                      <option value="L&T TTA Panel">
                        L&T TTA Panel — Product Quote
                      </option>
                      <option value="Lucy RMU">
                        Lucy RMU — Supply Enquiry
                      </option>
                      <option value="Lucy CSS">
                        Lucy CSS — Supply Enquiry
                      </option>
                      <option value="Vertiv UPS">
                        Vertiv UPS — Product Quote
                      </option>
                      <option value="Capital Goods">
                        Capital Goods — Consolidated Quote
                      </option>
                      <option value="MEPF Consultancy">
                        MEPF Consultancy — New Project
                      </option>
                      <option value="EPC Contracting">
                        EPC Project — Full Delivery
                      </option>
                      <option value="Vertiv AMC">
                        Vertiv AMC / Service Contract
                      </option>
                      <option value="EPC Partnership">
                        EPC Contracting — Partnership
                      </option>
                      <option value="Other">Other / General Enquiry</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-secondary/60 pointer-events-none text-[22px]">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Project Location */}
                <div className="space-y-2 group relative md:col-span-2">
                  <label
                    className="font-label-caps text-[9.5px] uppercase tracking-[0.2em] font-semibold text-secondary/65 group-focus-within:text-accent transition-colors block"
                    htmlFor="location"
                  >
                    Project Location (City / State)
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={formState.location}
                    onChange={handleInputChange}
                    placeholder="e.g. Ahmedabad, Gujarat"
                    className="w-full bg-surface-container border border-outline-variant/20 px-5 py-3.5 font-body text-[14.5px] text-on-background focus:border-accent/40 outline-none transition-colors rounded-none"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2 group relative md:col-span-2">
                  <label
                    className="font-label-caps text-[9.5px] uppercase tracking-[0.2em] font-semibold text-secondary/65 group-focus-within:text-accent transition-colors block"
                    htmlFor="message"
                  >
                    Message Brief *
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    required
                    placeholder="Specify project capacity requirements, product configurations, or engineering deliverables..."
                    value={formState.message}
                    onChange={handleInputChange}
                    className="w-full bg-surface-container border border-outline-variant/20 px-5 py-3.5 font-body text-[14.5px] text-on-background focus:border-accent/40 outline-none transition-colors resize-y rounded-none"
                  ></textarea>
                </div>
              </div>

              {/* Action Submit */}
              <div className="pt-6 border-t border-outline-variant/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
                <span className="text-[12px] text-secondary/60 max-w-sm leading-relaxed">
                  We typically respond within 1 business day. Your information
                  is kept confidential and never shared with third parties.
                </span>

                <div className="relative">
                  <Button
                    type="submit"
                    variant="primary"
                    theme="light"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto min-w-[200px]"
                    showArrow={!isSubmitting}
                  >
                    {isSubmitting ? "PROCESSING..." : "SUBMIT BRIEF"}
                  </Button>

                  <AnimatePresence>
                    {submitSuccess && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute inset-0 bg-[#16a34a] border border-[#16a34a] flex items-center justify-center gap-2 text-white shadow-lg font-bold"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          check_circle
                        </span>
                        <span className="font-label-caps text-[10px] uppercase tracking-wider">
                          BRIEF SUBMITTED
                        </span>
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
