import { Reveal } from '../../ui/Reveal';

export function FinalCTA() {
  return (
    <section className="py-section-margin px-8 bg-primary">
      <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-gutter items-center">
        <div className="col-span-12 md:col-span-8">
          <Reveal>
            <h2 className="font-headline text-4xl md:text-5xl text-white font-bold tracking-tighter mb-4">
              Partner with Engineering Experts
            </h2>
            <p className="text-xl text-white/90">
              Discuss your infrastructure requirements with our specialist engineering teams today.
            </p>
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-4 flex md:justify-end mt-8 md:mt-0">
          <Reveal delay={0.2}>
            <button className="bg-white text-primary px-12 py-5 font-bold text-lg hover:bg-surface-container-low transition-all shadow-2xl active:scale-95">
              Consult an Expert
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
