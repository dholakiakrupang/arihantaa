import { motion } from 'framer-motion';

const values = [
  { icon: 'bolt',                   title: 'Engineering Integrity',   desc: 'We never compromise on technical quality, code compliance, or project safety.' },
  { icon: 'handshake',              title: 'Trusted Partnerships',    desc: 'Every JV and brand alliance we form is built on mutual trust and shared accountability.' },
  { icon: 'groups',                 title: 'Client-First Delivery',   desc: 'We align our timelines, expertise, and resources entirely around client success.' },
  { icon: 'eco',                    title: 'Sustainable Solutions',   desc: 'Energy efficiency, green building standards, and long-term performance guide every design.' },
];

export function ValuesBento() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-[2px] w-8 bg-accent" />
          <span className="font-label-caps text-[11px] text-accent tracking-[0.22em] uppercase">Principles</span>
        </div>
        <h2 className="font-headline text-[34px] md:text-[50px] leading-[1.05] font-black tracking-tighter text-on-surface mb-14">
          The Values that Drive Us
        </h2>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-outline-variant/30 gap-0">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="group p-8 md:p-10 border-r border-b border-outline-variant/30 bg-surface hover:bg-accent/[0.015] transition-all duration-400 cursor-default rounded-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.25, 1, 0.5, 1] }}
            >
              {/* Icon row */}
              <div className="flex items-start justify-between mb-6">
                <span className="material-symbols-outlined text-accent text-[36px] group-hover:scale-110 transition-transform duration-300">
                  {v.icon}
                </span>
                <span className="material-symbols-outlined text-outline/30 text-[18px] group-hover:text-accent group-hover:rotate-45 transition-all duration-300">
                  arrow_outward
                </span>
              </div>

              <h4 className="font-headline text-[18px] font-bold text-on-surface mb-3 group-hover:text-accent transition-colors duration-300">
                {v.title}
              </h4>
              <p className="font-body text-[13px] leading-relaxed text-secondary">{v.desc}</p>

              {/* Hover bottom border */}
              <div className="h-[2px] w-0 bg-accent mt-6 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
