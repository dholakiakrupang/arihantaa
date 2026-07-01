import { motion } from 'framer-motion';
import { Reveal } from '../../ui/Reveal';

export function ProcessSection() {
  const steps = [
    {
      number: "1",
      title: "Understand",
      desc: "Assess project scope, site conditions, and compliance requirements."
    },
    {
      number: "2",
      title: "Design",
      desc: "BIM-ready, code-compliant technical designs across all disciplines."
    },
    {
      number: "3",
      title: "Supply",
      desc: "Source and supply products via verified brand partnerships and JV alliances."
    },
    {
      number: "4",
      title: "Execute",
      desc: "On-site supervision, installation coordination, and quality checks."
    },
    {
      number: "5",
      title: "Commission",
      desc: "Full system testing, sign-off documentation, and handover support."
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-[140px] px-6 md:px-8 lg:px-16 bg-inverse-surface text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 mb-10 md:mb-16 lg:mb-20">
          <div className="col-span-12">
            <Reveal>
              <span className="eyebrow text-primary mb-6 block">Our Methodology</span>
              <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">How We Work</h2>
            </Reveal>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 border-t border-l border-white/10 gap-0">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className={`border-r border-b border-white/10 p-6 md:p-8 hover:bg-white/[0.02] transition-colors duration-300 flex flex-col justify-start xl:justify-between group min-h-[150px] md:min-h-[160px] xl:min-h-[250px] relative ${index === 4 ? 'md:col-span-2 xl:col-span-1' : ''}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="flex flex-col justify-start w-full">
                <div className="flex items-center justify-between mb-3 sm:mb-4 lg:mb-6 shrink-0">
                  <span className="font-headline text-sm font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                    {`0${step.number}`}
                  </span>
                  <div className="w-2 h-2 bg-white/20 group-hover:bg-primary transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h4>
              </div>
              <p className="text-white/60 text-[13px] leading-relaxed mt-2 lg:mt-4">
                {step.desc}
              </p>
              {/* Bottom active accent border */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
