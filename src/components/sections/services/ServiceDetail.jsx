import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function ServiceDetail({
  id,
  title,
  eyebrow,
  description,
  features,
  imageSrc,
  imageAlt,
  isReversed,
  bgClass = 'bg-surface',
}) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${bgClass} overflow-hidden scroll-mt-20 border-b border-outline-variant/30`}>

      {/* Faint section number watermark */}
      <span className="absolute top-8 right-8 font-headline text-[120px] md:text-[180px] font-black text-on-surface/[0.03] leading-none select-none pointer-events-none tracking-tighter">
        {eyebrow.split('/')[0].trim()}
      </span>

      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className={`flex flex-col md:flex-row gap-12 md:gap-20 items-stretch ${isReversed ? 'md:flex-row-reverse' : ''}`}>

          {/* ── Image side ────────────────────────────────────────────────── */}
          <motion.div
            className="w-full md:w-[45%] relative flex-shrink-0"
            initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          >
            {/* Accent corner bracket top-left */}
            <div className={`absolute -top-3 ${isReversed ? '-right-3' : '-left-3'} w-8 h-8 border-t-[3px] border-accent ${isReversed ? 'border-r-[3px]' : 'border-l-[3px]'} z-10`} />
            <div className={`absolute -bottom-3 ${isReversed ? '-left-3' : '-right-3'} w-8 h-8 border-b-[3px] border-accent ${isReversed ? 'border-l-[3px]' : 'border-r-[3px]'} z-10`} />

            <div className="overflow-hidden">
              <img
                src={imageSrc}
                alt={imageAlt}
                loading="lazy"
                decoding="async"
                className="w-full h-[340px] md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Floating stat badge */}
            <div className={`absolute -bottom-5 ${isReversed ? 'left-6' : 'right-6'} bg-accent text-on-primary px-5 py-3 shadow-xl`}>
              <span className="block font-headline text-[11px] tracking-[0.15em] uppercase opacity-80">Certified</span>
              <span className="block font-headline text-[18px] font-black leading-none">ISO 9001</span>
            </div>
          </motion.div>

          {/* ── Content side ──────────────────────────────────────────────── */}
          <motion.div
            className="w-full md:flex-1 flex flex-col justify-center pt-6 md:pt-0"
            initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[2px] w-8 bg-accent" />
              <span className="font-label-caps text-[11px] text-accent tracking-[0.2em] uppercase">{eyebrow}</span>
            </div>

            {/* Title */}
            <h2 className="font-headline text-[32px] md:text-[46px] lg:text-[54px] leading-[1.05] font-black tracking-tighter text-on-surface mb-5">
              {title}
            </h2>

            {/* Animated underline */}
            <motion.div
              className="h-[3px] w-16 bg-accent mb-7"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              style={{ originX: 0 }}
            />

            {/* Description */}
            <div className="space-y-4 mb-8">
              {description.map((para, i) => (
                <p key={i} className="font-body text-[15px] md:text-[16px] leading-relaxed text-secondary">
                  {para}
                </p>
              ))}
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-outline-variant/30 mb-10 gap-0">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="border-r border-b border-outline-variant/30 p-4 flex items-center gap-3 hover:bg-accent/[0.015] transition-all duration-300 group"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                >
                  <div className="w-5 h-5 bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                    <span className="material-symbols-outlined text-[12px] text-accent group-hover:text-on-primary transition-colors duration-300">
                      check
                    </span>
                  </div>
                  <span className="font-body text-[13px] font-semibold text-on-surface/80">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to={`/contact?inquiry=quote&item=${encodeURIComponent(title)}`}
              className="inline-flex items-center gap-2 font-label-caps text-[11px] tracking-[0.15em] uppercase text-accent border-b border-accent pb-0.5 hover:gap-4 transition-all duration-300 w-fit group"
            >
              Request a Service Quote
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform duration-300">
                arrow_forward
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
