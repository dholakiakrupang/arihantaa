import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button';

/**
 * NewsHero — Uses the exact same diagonal split-screen layout 
 * as Services, Products, and About pages to maintain absolute consistency.
 */
export function NewsHero() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] flex flex-col md:flex-row bg-inverse-surface overflow-hidden">

      {/* ── Left: Dark text panel ───────────────────────────────────────────── */}
      <div className="relative w-full md:w-[55%] flex items-center px-8 py-16 md:py-24 md:pl-16 md:pr-20 bg-inverse-surface z-10">

        <div className="w-full max-w-[520px]">

          {/* Breadcrumb */}
          <motion.nav
            className="flex items-center gap-2 mb-8"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="font-label-caps text-[10px] text-accent tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Home</Link>
            <span className="material-symbols-outlined text-surface-variant text-[14px]">chevron_right</span>
            <span className="font-label-caps text-[10px] text-surface-variant tracking-[0.2em] uppercase">News</span>
          </motion.nav>

          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="h-[2px] w-10 bg-accent" />
            <span className="font-label-caps text-[11px] text-accent tracking-[0.25em] uppercase">
              Intelligence
            </span>
          </motion.div>

          {/* Hero Heading */}
          <motion.h1
            className="font-headline text-[38px] md:text-[60px] lg:text-[72px] leading-[1.0] font-black text-inverse-on-surface uppercase tracking-tighter mb-6"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          >
            News & Media <br className="hidden lg:block"/> Center
          </motion.h1>

          {/* Accent divider */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
            style={{ originX: 0 }}
          >
            <div className="h-[2px] w-[200px] bg-accent" />
          </motion.div>

          {/* Sub-copy */}
          <motion.p
            className="font-body text-[15px] md:text-[17px] leading-relaxed text-surface-variant/80 max-w-md mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          >
            Stay up-to-date with the latest announcements, project milestones, and industry breakthroughs shaping the future of engineering.
          </motion.p>

          {/* CTA */}
          <Button 
            to="#media" 
            variant="primary" 
            size="lg" 
            icon="arrow_downward"
            sweepBg="bg-inverse-surface"
            className="rounded-none mt-4"
          >
            Media Enquiries
          </Button>
        </div>
      </div>

      {/* ── Diagonal Divider ─────────────────────────────────────────────────── */}
      <div
        className="hidden md:block absolute top-0 bottom-0 left-[49%] w-[80px] bg-inverse-surface z-10"
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
      />

      {/* ── Right: Industrial Photo ───────────────────────────────────────────── */}
      <div className="w-full md:w-[55%] md:absolute md:right-0 md:top-0 md:bottom-0 h-[300px] md:h-full z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaZXpdbjLr9LR1AZHlH13OoPIe3jejJ5QnOcZ65UtIXTYGB3FhPhWEysa5L62jlOrhOuIauc30AyV27W61lMnslCrsaPW-417zxIv6lwC0psaVj4kKhOln4z4KLECJ_PGSJfsImraGudDu7PWlQES3CGRX27W8z1SbOwyT-mkSui_n_DpRCHOZJdsdHcWZ0ezqLgJkCeCvxXO-YSfJ6mNTUN7OMzS2PFmVWdky77FtgjIaJHenC1H4lGTuyumwdjVpcqwEBdaHTa0"
          alt="Abstract light trails"
          className="w-full h-full object-cover object-center grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
          loading="eager"
          decoding="async"
        />
        {/* Left fade to blend with the diagonal */}
        <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface via-inverse-surface/30 to-transparent" />
      </div>
    </section>
  );
}
