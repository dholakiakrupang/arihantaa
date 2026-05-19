import { industries } from '../../../data/productsData';

/**
 * IndustryScroll
 * A horizontally-scrollable ticker/marquee of industries Arihantaa serves.
 */
export function IndustryScroll() {
  // Duplicate for seamless infinite scroll effect via CSS animation
  const doubled = [...industries, ...industries];

  return (
    <section className="bg-surface-container py-5 overflow-hidden border-b border-surface-variant">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex items-center gap-8">

        {/* Fixed label */}
        <span className="font-label-caps text-label-caps text-accent uppercase tracking-widest font-bold whitespace-nowrap shrink-0">
          Serving Industries:
        </span>

        {/* Scrolling marquee */}
        <div className="overflow-hidden flex-1">
          <div
            className="flex gap-10 items-center"
            style={{ animation: 'industryScroll 28s linear infinite' }}
          >
            {doubled.map((name, i) => (
              <span key={i} className="flex items-center gap-10 whitespace-nowrap">
                <span className="font-headline text-[22px] font-bold text-on-surface opacity-70 hover:opacity-100 hover:text-accent transition-all duration-300 cursor-default">
                  {name}
                </span>
                <span className="text-accent font-headline text-[22px] font-bold select-none">
                  /
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
