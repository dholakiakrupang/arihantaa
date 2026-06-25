import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/Button";

export function Footer() {
  const location = useLocation();
  const path = location.pathname;

  // Paths that already have their own bottom CTA or enquiry forms
  const shouldHidePreFooterCTA =
    path === "/" ||
    path === "/about" ||
    path === "/contact" ||
    path === "/services" ||
    path === "/products" ||
    path === "/partners/vertiv" ||
    path === "/partnerships/vertiv" ||
    path.startsWith("/solutions/") ||
    /^\/products\/[^/]+/.test(path) ||
    /^\/services\/[^/]+$/.test(path);

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 text-white pt-24 pb-8 overflow-hidden relative">
      {/* Background ambient light */}
      <div className="absolute top-[-50%] left-[-10%] w-[50%] h-[50%] max-w-[960px] max-h-[960px] rounded-full bg-accent/10 blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-8 md:px-16 relative z-10">
        {/* Massive Pre-Footer CTA */}
        {!shouldHidePreFooterCTA && (
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 border-b border-white/10 pb-20 mb-20">
            <div className="max-w-3xl">
              <span className="font-label-caps text-[11px] text-accent tracking-[0.2em] uppercase mb-6 block border-l-2 border-accent pl-3">
                Initiate Project
              </span>
              <h2 className="font-headline text-[48px] md:text-[80px] lg:text-[100px] leading-[0.9] font-black text-white tracking-tighter uppercase">
                Ready to power
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">
                  the future?
                </span>
              </h2>
            </div>
            <Button
              to="/contact"
              variant="primary"
              theme="black"
              size="lg"
              className="rounded-none w-full lg:w-auto mt-4 lg:mt-0"
            >
              GET A QUOTE
            </Button>
          </div>
        )}

        {/* Main Footer Links */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-16 lg:gap-0 mb-24">
          {/* Brand & Info */}
          <div className="flex-shrink-0 lg:w-[320px] lg:pr-16 flex flex-col gap-6 items-start">
            <Link
              to="/"
              className="w-[140px] sm:w-[160px] lg:w-full lg:max-w-[180px] block"
            >
              <img
                src="/arihantaa-vertical-logo.png"
                alt="Arihantaa Powertech Logo"
                className="w-full h-auto object-contain grayscale brightness-200 transition-transform duration-300 hover:scale-[1.02] origin-left"
              />
            </Link>
            <div className="space-y-2">
              <p className="font-headline text-[15px] font-bold text-white/90 tracking-tight">
                From Grid to Greatness
              </p>
              <p className="font-body text-[13.5px] leading-relaxed text-white/50">
                Your single point of contact for all capital goods supply, EPC
                project execution, and MEPF consultancy across India.
              </p>
            </div>
          </div>

          {/* Navigation Columns Grid */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-12 sm:gap-8 lg:pl-16">
            {/* Sitemap */}
            <div className="flex flex-col">
              <h4 className="font-label-caps text-[11px] tracking-[0.2em] text-white mb-8 border-l-2 border-accent pl-3 uppercase">
                Explore
              </h4>
              <ul className="flex flex-col gap-5 flex-1">
                <li>
                  <Link
                    to="/about"
                    className="font-body text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="font-body text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="font-body text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about#partnerships"
                    className="font-body text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    Partnerships
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="font-body text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Expertise */}
            <div className="flex flex-col">
              <h4 className="font-label-caps text-[11px] tracking-[0.2em] text-white mb-8 border-l-2 border-accent pl-3 uppercase">
                Expertise
              </h4>
              <ul className="flex flex-col gap-5 flex-1">
                <li>
                  <Link
                    to="/solutions/epc-mepf"
                    className="font-body text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    MEPF Consultancy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/epc-mepf"
                    className="font-body text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    EPC Contracting
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/ups"
                    className="font-body text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    Vertiv UPS Systems
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/lt-tta-panel"
                    className="font-body text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    L&T TTA Panel
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/lucy-rmu"
                    className="font-body text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    Lucy RMU & CSS
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col">
              <h4 className="font-label-caps text-[11px] tracking-[0.2em] text-white mb-8 border-l-2 border-accent pl-3 uppercase">
                Contact
              </h4>
              <ul className="flex flex-col gap-6 flex-1">
                <li className="flex gap-4 items-center group">
                  <span className="material-symbols-outlined text-accent/50 group-hover:text-accent transition-colors text-[30px] shrink-0">
                    call
                  </span>
                  <a
                    href="tel:+917434999919"
                    className="font-body text-[14px] text-white/60 group-hover:text-white transition-colors"
                  >
                    +91 XXXXX XXXXX
                  </a>
                </li>
                <li className="flex gap-4 items-center group">
                  <span className="material-symbols-outlined text-accent/50 group-hover:text-accent transition-colors text-[30px] shrink-0">
                    mail
                  </span>
                  <a
                    href="mailto:info@arihantaa.com"
                    className="font-body text-[14px] text-white/60 group-hover:text-white transition-colors"
                  >
                    info@arihantaa.com
                  </a>
                </li>
                <li className="flex gap-4 items-center group">
                  <span className="material-symbols-outlined text-accent/50 group-hover:text-accent transition-colors text-[30px] shrink-0">
                    location_on
                  </span>
                  <span className="font-body text-[14px] leading-relaxed text-white/60">
                    Ahmedabad, Gujarat, India
                  </span>
                </li>
              </ul>
            </div>

            {/* Partnership (Clean Typographic Column matching the other columns) */}
            <div className="flex flex-col">
              <h4 className="font-label-caps text-[11px] tracking-[0.2em] text-white mb-8 border-l-2 border-accent pl-3 uppercase">
                Partnership
              </h4>

              <div className="flex flex-col h-full justify-between">
                {/* Official Partner Authorization Status */}
                <div className="space-y-4">
                  <Link
                    to="/partners/vertiv"
                    className="flex items-center gap-3 group select-none cursor-pointer"
                  >
                    {/* Status Beacon */}
                    <div className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline text-[15px] font-black text-white tracking-[0.12em] leading-none group-hover:text-accent transition-colors duration-300">
                        VERTIV
                      </span>
                      <span className="font-label-caps text-[7.5px] text-accent tracking-[0.15em] uppercase font-bold mt-2 leading-none">
                        Authorised Channel Partner
                      </span>
                    </div>
                  </Link>

                  <p className="font-body text-[13.5px] leading-relaxed text-white/50 group-hover:text-white/70 transition-colors duration-300">
                    Direct OEM channel support routing for Vertiv UPS & critical
                    digital infrastructure solutions.
                  </p>
                </div>

                {/* Bottom Section: Core Operations Tags */}
                <div className="space-y-3 mt-6">
                  <span className="font-label-caps text-[7.5px] text-white/30 tracking-[0.15em] uppercase block">
                    Authorised Domains
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      to="/solutions/epc-mepf"
                      className="bg-white/[0.02] border border-white/10 py-1 px-2.5 text-center text-white/70 hover:text-white hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 font-label-caps text-[8.5px] tracking-wider uppercase font-semibold"
                    >
                      EPC
                    </Link>
                    <Link
                      to="/solutions/epc-mepf"
                      className="bg-white/[0.02] border border-white/10 py-1 px-2.5 text-center text-white/70 hover:text-white hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 font-label-caps text-[8.5px] tracking-wider uppercase font-semibold"
                    >
                      MEPF
                    </Link>
                    <Link
                      to="/solutions/capital-goods"
                      className="bg-white/[0.02] border border-white/10 py-1 px-2.5 text-center text-white/70 hover:text-white hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 font-label-caps text-[8.5px] tracking-wider uppercase font-semibold"
                    >
                      Capital
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* JV Alliance Credit */}
        <div className="pt-6 pb-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-label-caps tracking-[0.1em] text-white/30 uppercase">
          <span>Anish Shah, Founder & CEO · Ahmedabad, Gujarat, India</span>
          <span className="text-white/25">
            In Association with{" "}
            <a
              href="https://synchroelectricals.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent/50 hover:text-accent transition-colors"
            >
              Synchro Electricals Pvt. Ltd.
            </a>
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-3 text-[10px] sm:text-[11px] font-label-caps tracking-[0.1em] text-white/40 uppercase">
          <div className="flex items-center gap-3 sm:gap-5 flex-wrap justify-center sm:justify-start">
            <span className="text-white/60 whitespace-nowrap">
              © 2026 Arihantaa Powertech
            </span>
            <span className="inline-block w-1 h-1 bg-white/20 rounded-full shrink-0" />
            <span className="whitespace-nowrap">ISO 9001:2015 Certified</span>
            <span className="inline-block w-1 h-1 bg-white/20 rounded-full shrink-0" />
            <span className="whitespace-nowrap">
              Vertiv Authorised Channel Partner
            </span>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            <Link
              to="/contact?inquiry=privacy"
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              Privacy Protocol
            </Link>
            <Link
              to="/about"
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              Safety Standards
            </Link>
            <Link
              to="/contact?inquiry=legal"
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
