import { useState } from 'react';
import { motion } from 'framer-motion';

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "917434999919";
  const message = encodeURIComponent("Hello! I visited your website and have an inquiry regarding Arihantaa Powertech services/products.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const text = "CHAT WITH US";

  return (
    <motion.div
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[99]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center gap-4 border border-outline/30 bg-[#0c0c0c] px-5 py-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-colors duration-500 overflow-hidden select-none cursor-pointer"
        style={{ minWidth: '190px' }}
      >
        {/* Luxury dual diagonal sweeps */}
        <div className="absolute inset-0 bg-accent -translate-x-[120%] group-hover:translate-x-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] z-0 skew-x-12 scale-110 origin-left" />
        <div className="absolute inset-0 bg-[#25D366] -translate-x-[120%] group-hover:translate-x-0 transition-transform duration-[600ms] delay-[60ms] ease-[cubic-bezier(0.76,0,0.24,1)] z-0 skew-x-12 scale-110 origin-left" />

        {/* Content Wrapper */}
        <div className="relative z-10 flex items-center justify-between w-full gap-3.5">
          {/* WhatsApp Icon with Premium Glow Ripple */}
          <div className="flex items-center relative">
            {/* Ambient signal ring behind the icon */}
            <div className="absolute inset-[-4px] rounded-full bg-white/10 group-hover:bg-[#25D366]/20 blur-[3px] scale-75 group-hover:scale-125 transition-all duration-500 pointer-events-none" />

            {/* Custom monochrome WhatsApp SVG with organic spring-ring animation */}
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
                      damping: 10
                    }
                  }
                }
              }}
              animate={isHovered ? "hover" : "idle"}
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </motion.svg>
          </div>

          {/* Thin elegant separator */}
          <div className="w-[1px] h-4 bg-white/20 group-hover:bg-white/40 transition-colors" />

          {/* Rolling character animation for senior-level look */}
          <div className="flex overflow-hidden font-label-caps text-[10px] tracking-[0.2em] font-semibold text-white">
            {text.split('').map((char, i) => (
              <div key={i} className="relative flex flex-col items-center justify-center">
                {/* Default Text */}
                <span
                  className="inline-block transition-transform duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[150%]"
                  style={{ transitionDelay: `${i * 0.015}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
                {/* Hover Roll-up Text */}
                <span
                  className="absolute top-full left-0 text-white inline-block transition-transform duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full font-bold"
                  style={{ transitionDelay: `${i * 0.015}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              </div>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  );
}
