import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function UnifiedCTA({
  heading,
  accent,
  subtitle,
  primaryText,
  primaryTo,
  outlineText,
  outlineTo,
  uppercase = false
}) {
  return (
    <section className="w-full bg-surface-variant/40 py-20 md:py-24 border-y border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12">
        
        {/* Left Column: Heading and Subtitle */}
        <motion.div 
          className="flex flex-col gap-4 flex-grow lg:max-w-3xl text-left"
          initial={{ opacity: 0, x: -20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
        >
          <h3 className={`font-headline font-semibold text-[26px] sm:text-[32px] lg:text-[40px] text-secondary tracking-tight leading-tight ${uppercase ? 'uppercase' : ''}`}>
            {heading}{' '}
            {accent && <span className="text-accent">{accent}</span>}
          </h3>
          {subtitle && (
            <p className="font-body text-[14.5px] md:text-[15.5px] text-on-surface-variant font-light leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Right Column: Actions */}
        <motion.div 
          className="flex flex-wrap items-center gap-4 w-full lg:w-auto flex-shrink-0 justify-start"
          initial={{ opacity: 0, x: 20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {primaryText && primaryTo && (
            <Button 
              variant="primary" 
              to={primaryTo} 
              theme="dark" 
              size="lg" 
              className="w-full sm:w-auto justify-center"
            >
              {primaryText}
            </Button>
          )}
          {outlineText && outlineTo && (
            <Button 
              variant="outline" 
              to={outlineTo} 
              theme="dark" 
              size="lg" 
              className="w-full sm:w-auto justify-center"
            >
              {outlineText}
            </Button>
          )}
        </motion.div>

      </div>
    </section>
  );
}
