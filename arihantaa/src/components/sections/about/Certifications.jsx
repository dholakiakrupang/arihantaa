import { Reveal } from '../../ui/Reveal';

export function Certifications() {
  return (
    <section className="py-24 bg-inverse-surface stitch-up">
      <div className="max-w-[1440px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        
        <Reveal>
          <h3 className="font-headline text-3xl md:text-5xl font-bold text-white max-w-xl">
            Certified Excellence in Global Engineering.
          </h3>
        </Reveal>
        
        <div className="flex gap-6 overflow-x-auto pb-4 w-full md:w-auto">
          <Reveal delay={0.1}>
            <div className="min-w-[200px] p-8 bg-white/5 border border-white/10 text-center">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">workspace_premium</span>
              <p className="eyebrow !text-white !mb-1">ISO 9001:2015</p>
              <p className="text-[10px] text-white/40 uppercase tracking-tighter">Quality Systems</p>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="min-w-[200px] p-8 bg-white/5 border border-white/10 text-center">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">gavel</span>
              <p className="eyebrow !text-white !mb-1">Class 'A'</p>
              <p className="text-[10px] text-white/40 uppercase tracking-tighter">Electrical Contractor</p>
            </div>
          </Reveal>
        </div>
        
      </div>
    </section>
  );
}
