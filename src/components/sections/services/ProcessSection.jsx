import { Reveal } from '../../ui/Reveal';

export function ProcessSection() {
  const steps = [
    {
      number: "1",
      title: "Requirement Analysis",
      desc: "Detailed technical assessment of project parameters and client objectives."
    },
    {
      number: "2",
      title: "Design & Engineering",
      desc: "Custom engineering solutions using advanced BIM and CAD modeling."
    },
    {
      number: "3",
      title: "Approval & Planning",
      desc: "Securing certifications and meticulous resource scheduling."
    },
    {
      number: "4",
      title: "Execution",
      desc: "On-site implementation led by certified industrial engineers."
    },
    {
      number: "5",
      title: "Commissioning",
      desc: "Final testing, certification, and project handover to client."
    }
  ];

  return (
    <section className="py-[140px] px-8 bg-inverse-surface text-white stitch-up overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 mb-20">
          <div className="col-span-12">
            <Reveal>
              <span className="eyebrow text-primary mb-6 block">Our Methodology</span>
              <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">From Brief to Handover</h2>
            </Reveal>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative">
          {/* Continuous Line Decor */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-[2px] bg-primary/20 z-0"></div>
          
          {/* Steps */}
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-start">
              <Reveal delay={0.1 * (index + 1)}>
                <div className="w-20 h-20 bg-primary/10 border border-primary text-primary flex items-center justify-center text-3xl font-bold mb-8">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
