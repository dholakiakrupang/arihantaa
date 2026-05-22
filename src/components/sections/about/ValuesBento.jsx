import { motion } from 'framer-motion';

const values = [
  { icon: 'bolt',                   title: 'Technical Integrity',   desc: 'Uncompromising standards in engineering design and meticulous project execution.', span: 'col-span-1' },
  { icon: 'shield_with_heart',      title: 'Unwavering Safety',     desc: 'Placing the well-being of our people and communities at the forefront of every action.', span: 'col-span-1' },
  { icon: 'eco',                    title: 'Global Sustainability',  desc: 'Engineering solutions that respect the environment and preserve future resources for generations.', span: 'col-span-1 md:col-span-2' },
  { icon: 'precision_manufacturing',title: 'Innovation Led',         desc: 'Applying the latest technological breakthroughs to solve infrastructure challenges at scale.', span: 'col-span-1 md:col-span-2' },
  { icon: 'group',                  title: 'Collaborative Growth',  desc: 'Building enduring partnerships through transparency and mutual excellence.', span: 'col-span-1' },
  { icon: 'verified',               title: 'Delivering Quality',    desc: 'A relentless pursuit of perfection in every detail, from grid to greatness.', span: 'col-span-1' },
];

export function ValuesBento() {
  return (
    <section className="py-24 md:py-32 bg-surface">
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
        <div className="grid grid-cols-1 md:grid-cols-4 border-t border-l border-outline-variant/30 gap-0">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className={`${v.span} group p-8 md:p-10 border-r border-b border-outline-variant/30 bg-surface hover:bg-accent/[0.015] transition-all duration-400 cursor-default rounded-none`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.25, 1, 0.5, 1] }}
            >
              {/* Icon row */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <span className="material-symbols-outlined text-accent text-[22px] group-hover:text-on-primary transition-colors duration-300">
                    {v.icon}
                  </span>
                </div>
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
