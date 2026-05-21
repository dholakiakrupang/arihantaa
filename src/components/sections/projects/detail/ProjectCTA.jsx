import { motion } from 'framer-motion';
import { Button } from '../../../ui/Button';

export function ProjectCTA() {
  return (
    <section className="w-full bg-surface-variant/40 px-6 md:px-12 lg:px-20 py-24 border-y border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        
        <motion.div 
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <h3 className="font-headline font-semibold text-[32px] md:text-[40px] text-secondary tracking-tight leading-none">
            Have a similar project? <span className="text-accent">Talk to our team.</span>
          </h3>
          <p className="font-body text-[16px] text-on-surface-variant font-light">
            We respond to all project enquiries within 1 business day.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Button variant="primary" to="/contact" theme="dark" size="lg" className="w-full sm:w-auto justify-center">
            CONTACT PROJECT TEAM
          </Button>
          <Button variant="outline" to="/projects" theme="dark" size="lg" className="w-full sm:w-auto justify-center">
            VIEW ALL PROJECTS →
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
