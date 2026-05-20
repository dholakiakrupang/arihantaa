import { Link } from 'react-router-dom';

export default function AnimatedQuoteButtonProjects({ onClick }) {
  const text = "GET A QUOTE";
  return (
    <Link
      to="/contact"
      onClick={onClick}
      className="group relative flex items-center justify-center overflow-hidden border border-accent/20 px-6 py-2.5 min-w-[150px] bg-transparent transition-colors duration-500"
    >
      {/* Sweep backgrounds (reverse slide from right) */}
      <div className="absolute inset-0 bg-accent translate-x-[120%] group-hover:translate-x-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] z-0 skew-x-12 scale-110 origin-right" />
      <div className="absolute inset-0 bg-white translate-x-[120%] group-hover:translate-x-0 transition-transform duration-[600ms] delay-[50ms] ease-[cubic-bezier(0.76,0,0.24,1)] z-0" />

      {/* Staggered text roll-up */}
      <div className="relative z-10 flex overflow-hidden font-label-caps text-[11px] tracking-[0.2em] font-semibold text-accent">
        {text.split('').map((char, i) => (
          <div key={i} className="relative flex flex-col items-center justify-center">
            {/* Initial text */}
            <span
              className="inline-block transition-transform duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[150%]"
              style={{ transitionDelay: `${i * 0.02}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
            {/* Hover text (rolls up from bottom) */}
            <span
              className="absolute top-full left-0 text-white inline-block transition-transform duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
              style={{ transitionDelay: `${i * 0.02}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          </div>
        ))}
      </div>

      {/* Arrow icon pushes in */}
      <div className="relative z-10 ml-2 overflow-hidden flex items-center h-[14px]">
        <span className="material-symbols-outlined text-[13px] text-white group-hover:text-accent translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-[400ms] delay-300 ease-[cubic-bezier(0.76,0,0.24,1)]">
          arrow_forward
        </span>
      </div>
    </Link>
  );
}
