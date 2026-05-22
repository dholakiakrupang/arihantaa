import { industries } from '../../../data/productsData';

/**
 * IndustryScroll
 * A horizontally-scrollable ticker/marquee of industries Arihantaa serves.
 * Redesigned in premium industrial wireframe style with a status dot indicator
 * and digital tags.
 */
export function IndustryScroll() {
  // Duplicate for seamless infinite scroll effect via CSS animation
  const doubled = [...industries, ...industries];

  return (
    <section className="bg-surface-container-lowest py-8 overflow-hidden border-b border-outline-variant/30 relative z-20">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 relative">
        
        {/* Technical label box */}
        <div className="flex items-center gap-2 border border-accent/20 px-4 py-2 bg-accent/[0.03] shrink-0 pointer-events-none">
          <span className="w-2 h-2 bg-accent animate-pulse" />
          <span className="font-label-caps text-[10px] text-accent uppercase tracking-[0.25em] font-black">
            Serving Industries
          </span>
        </div>

        {/* Scrolling marquee */}
        <div className="overflow-hidden flex-1 w-full relative">
          {/* Left and right fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-surface-container-lowest to-transparent pointer-events-none z-10 hidden md:block" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-surface-container-lowest to-transparent pointer-events-none z-10 hidden md:block" />

          <div
            className="flex gap-12 items-center py-1"
            style={{ animation: 'industryScroll 32s linear infinite' }}
          >
            {doubled.map((name, i) => (
              <span key={i} className="flex items-center gap-12 whitespace-nowrap">
                <span className="font-headline text-[18px] font-bold text-on-surface/60 hover:text-accent transition-all duration-300 cursor-default flex items-center gap-3">
                  <span className="font-mono text-[10px] text-accent opacity-50">[0{(i % industries.length) + 1}]</span>
                  {name}
                </span>
                <span className="text-outline-variant/40 font-mono text-[14px] select-none">
                  //
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframe injected inline to avoid global CSS file dep */}
      <style>{`
        @keyframes industryScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
