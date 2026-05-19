import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 text-white pt-24 pb-8 overflow-hidden relative">
      
      {/* Background ambient light */}
      <div className="absolute top-[-50%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[120px] mix-blend-screen pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 relative z-10">
        
        {/* Massive Pre-Footer CTA */}
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
          <Link to="/contact" className="group relative inline-flex items-center justify-center bg-accent text-white font-label-caps text-[12px] uppercase tracking-[0.2em] px-10 py-5 overflow-hidden shrink-0">
            <span className="relative z-10 flex items-center gap-4">
              Get a Quote
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
            </span>
            <div className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0 mix-blend-difference" />
          </Link>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Brand & Info */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-block mb-10">
                <img 
                  src="/arihantaa-vertical-logo.png" 
                  alt="Arihantaa Powertech Logo" 
                  className="h-[100px] w-auto object-contain filter grayscale brightness-200" 
                />
              </Link>
              <p className="font-body text-[15px] leading-relaxed text-white/60 max-w-sm">
                Engineering solutions for a mission-critical world. From grid-scale deployment to high-density thermal management, we shape the future of global energy systems.
              </p>
            </div>
          </div>
          
          {/* Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-8">
            
            {/* Sitemap */}
            <div>
              <h4 className="font-label-caps text-[11px] tracking-[0.2em] text-white mb-8 border-l-2 border-accent pl-3 uppercase">
                Explore
              </h4>
              <ul className="flex flex-col gap-5">
                <li><Link to="/about" className="font-body text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">About Us</Link></li>
                <li><Link to="/portfolio" className="font-body text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Live Projects</Link></li>
                <li><Link to="/news" className="font-body text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">News Hub</Link></li>
                <li><Link to="/contact" className="font-body text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Request Quote</Link></li>
              </ul>
            </div>
            
            {/* Expertise */}
            <div>
              <h4 className="font-label-caps text-[11px] tracking-[0.2em] text-white mb-8 border-l-2 border-accent pl-3 uppercase">
                Expertise
              </h4>
              <ul className="flex flex-col gap-5">
                <li><Link to="/services" className="font-body text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Turnkey Projects</Link></li>
                <li><Link to="/services" className="font-body text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">MEPF Solutions</Link></li>
                <li><Link to="/products" className="font-body text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Critical Power</Link></li>
                <li><Link to="/products" className="font-body text-[15px] text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">Thermal Management</Link></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-label-caps text-[11px] tracking-[0.2em] text-white mb-8 border-l-2 border-accent pl-3 uppercase">
                Contact
              </h4>
              <ul className="flex flex-col gap-6">
                <li className="flex gap-4 items-center group">
                  <span className="material-symbols-outlined text-accent/50 group-hover:text-accent transition-colors text-[20px]">call</span>
                  <a href="tel:+917434999919" className="font-body text-[14px] text-white/60 group-hover:text-white transition-colors">+91 7434999919</a>
                </li>
                <li className="flex gap-4 items-center group">
                  <span className="material-symbols-outlined text-accent/50 group-hover:text-accent transition-colors text-[20px]">mail</span>
                  <a href="mailto:info@arihantaa.com" className="font-body text-[14px] text-white/60 group-hover:text-white transition-colors">info@arihantaa.com</a>
                </li>
                <li className="flex gap-4 items-start group">
                  <span className="material-symbols-outlined text-accent/50 group-hover:text-accent transition-colors mt-0.5 text-[20px]">location_on</span>
                  <span className="font-body text-[14px] leading-relaxed text-white/60 group-hover:text-white transition-colors opacity-0">.</span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] font-label-caps tracking-[0.1em] text-white/40 uppercase">
          <div className="flex items-center gap-6">
            <span className="text-white/60">© 2026 Arihantaa Powertech</span>
            <span className="hidden sm:inline-block w-1 h-1 bg-white/20 rounded-full" />
            <span>ISO 9001:2015 Certified</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <Link to="#" className="hover:text-white transition-colors">Privacy Protocol</Link>
            <Link to="#" className="hover:text-white transition-colors">Safety Standards</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
