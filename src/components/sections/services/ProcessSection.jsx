import { motion } from 'framer-motion';
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
    <section className="py-16 md:py-24 lg:py-[140px] px-6 md:px-8 lg:px-16 bg-inverse-surface text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 mb-10 md:mb-16 lg:mb-20">
          <div className="col-span-12">
            <Reveal>
              <span className="eyebrow text-primary mb-6 block">Our Methodology</span>
              <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">From Brief to Handover</h2>
            </Reveal>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-white/10 gap-0">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className={`border-r border-b border-white/10 p-6 md:p-8 hover:bg-white/[0.02] transition-colors duration-300 flex flex-col justify-start lg:justify-between group min-h-[150px] sm:min-h-[160px] lg:min-h-[250px] relative ${index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div>
                <span className="block font-headline text-sm font-bold text-primary mb-3 sm:mb-4 lg:mb-6 group-hover:translate-x-1 transition-transform duration-300">
                  {`0${step.number}`}
                </span>
                <h4 className="text-lg font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h4>
              </div>
              <p className="text-white/60 text-[13px] leading-relaxed mt-2 lg:mt-4">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
