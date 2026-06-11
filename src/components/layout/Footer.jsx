import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';

export function Footer() {
  const location = useLocation();
  const path = location.pathname;

  // Paths that already have their own bottom CTA or enquiry forms
  const shouldHidePreFooterCTA = 
    path === '/' ||
    path === '/about' ||
    path === '/contact' ||
    path === '/services' ||
    path === '/products' ||
    path === '/projects' ||
    path === '/news' ||
    /^\/projects\/[^/]+$/.test(path) ||
    /^\/products\/[^/]+/.test(path) ||
    /^\/services\/[^/]+/.test(path) ||
    /^\/sectors\/[^/]+$/.test(path) ||
    /^\/news\/[^/]+$/.test(path);

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 text-white pt-24 pb-8 overflow-hidden relative">
      
      {/* Background ambient light */}
      <div className="absolute top-[-50%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[120px] mix-blend-screen pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 relative z-10">
        
        {/* Massive Pre-Footer CTA */}
        {!shouldHidePreFooterCTA && (
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 border-b border-white/10 pb-20 mb-20">
            <div className="max-w-3xl">
              <span className="font-label-caps text-[11px] text-accent tracking-[0.2em] uppercase mb-6 block border-l-2 border-accent pl-3">
                Initiate Project
              </span>
              <h2 className="font-headline text-[48px] md:text-[80px] lg:text-[100px] leading-[0.9] font-black text-white tracking-tighter uppercase">
                Ready to power<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">the future?</span>
              </h2>
            </div>
            <Button to="/contact" variant="primary" theme="black" size="lg" className="rounded-none w-full lg:w-auto mt-4 lg:mt-0">
              GET A QUOTE
            </Button>
          </div>
        )}

        {/* Main Footer Links */}
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-16 lg:gap-0 mb-24">
          
          {/* Brand & Info */}
          <div className="flex-shrink-0 lg:w-[320px] lg:pr-16 flex flex-col gap-6 items-start">
            <Link to="/" className="w-[140px] sm:w-[160px] lg:w-full lg:max-w-[180px] block">
              <img 
                src="/arihantaa-vertical-logo.png" 
                alt="Arihantaa Powertech Logo" 
                className="w-full h-auto object-contain grayscale brightness-200 transition-transform duration-300 hover:scale-[1.02] origin-left" 
              />
            </Link>
            <p className="font-body text-[15px] leading-relaxed text-white/60 max-w-sm">
              Engineering solutions for a mission-critical world. From grid-scale deployment to high-density thermal management, we shape the future of India's energy systems.
            </p>
          </div>
          
          {/* Navigation Columns */}
          <div className="flex-1 flex flex-col sm:flex-row justify-between gap-12 sm:gap-8">
            
            {/* Sitemap */}
            <div className="flex-1 flex flex-col">
              <h4 className="font-label-caps text-[11px] tracking-[0.2em] text-white mb-8 border-l-2 border-accent pl-3 uppercase">
                Explore
              </h4>
              <ul className="flex flex-col gap-5 flex-1">
                <li><Link to="/about" className="font-body text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">About Us</Link></li>
                <li><Link to="/projects" className="font-body text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Projects</Link></li>
                <li><Link to="/news" className="font-body text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">News Hub</Link></li>
                <li><Link to="/contact" className="font-body text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Request Quote</Link></li>
              </ul>
            </div>
            
            {/* Expertise */}
            <div className="flex-1 flex flex-col">
              <h4 className="font-label-caps text-[11px] tracking-[0.2em] text-white mb-8 border-l-2 border-accent pl-3 uppercase">
                Expertise
              </h4>
              <ul className="flex flex-col gap-5 flex-1">
                <li><Link to="/services#epc-contracting" className="font-body text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">EPC Contracting</Link></li>
                <li><Link to="/services#mepf-consultancy" className="font-body text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">MEPF Solutions</Link></li>
                <li><Link to="/products#critical-power" className="font-body text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Critical Power</Link></li>
                <li><Link to="/products#thermal-management" className="font-body text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Thermal Management</Link></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div className="flex-1 flex flex-col">
              <h4 className="font-label-caps text-[11px] tracking-[0.2em] text-white mb-8 border-l-2 border-accent pl-3 uppercase">
                Contact
              </h4>
              <ul className="flex flex-col gap-6 flex-1">
                <li className="flex gap-4 items-center group">
                  <span className="material-symbols-outlined text-accent/50 group-hover:text-accent transition-colors text-[30px] shrink-0">call</span>
                  <a href="tel:+917434999919" className="font-body text-[14px] text-white/60 group-hover:text-white transition-colors">+91 XXXXX XXXXX</a>
                </li>
                <li className="flex gap-4 items-center group">
                  <span className="material-symbols-outlined text-accent/50 group-hover:text-accent transition-colors text-[30px] shrink-0">mail</span>
                  <a href="mailto:info@arihantaa.com" className="font-body text-[14px] text-white/60 group-hover:text-white transition-colors">info@arihantaa.com</a>
                </li>
                <li className="flex gap-4 items-center group">
                  <span className="material-symbols-outlined text-accent/50 group-hover:text-accent transition-colors text-[30px] shrink-0">location_on</span>
                  <a href="https://www.google.com/maps/search/?api=1&query=22.6708056,71.5723889" target="_blank" rel="noopener noreferrer" className="font-body text-[14px] leading-relaxed text-white/60 group-hover:text-white transition-colors" style={{ fontWeight: '500', letterSpacing: '0.02em' }}>
                    22°40'14.9"N 71°34'20.6"E
                  </a>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-3 text-[10px] sm:text-[11px] font-label-caps tracking-[0.1em] text-white/40 uppercase">
          <div className="flex items-center gap-3 sm:gap-5 flex-wrap justify-center sm:justify-start">
            <span className="text-white/60 whitespace-nowrap">© 2026 Arihantaa Powertech</span>
            <span className="inline-block w-1 h-1 bg-white/20 rounded-full shrink-0" />
            <span className="whitespace-nowrap">ISO 9001:2015 Certified</span>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            <Link to="/contact?inquiry=privacy" className="hover:text-white transition-colors whitespace-nowrap">Privacy Protocol</Link>
            <Link to="/about" className="hover:text-white transition-colors whitespace-nowrap">Safety Standards</Link>
            <Link to="/contact?inquiry=legal" className="hover:text-white transition-colors whitespace-nowrap">Terms</Link>
          </div>
          <div></div>
        </div>

      </div>
    </footer>
  );
}
