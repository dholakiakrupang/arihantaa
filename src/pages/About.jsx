import { AboutHero } from '../components/sections/about/AboutHero';
import { OurStory } from '../components/sections/about/OurStory';
import { StatsGrid } from '../components/sections/about/StatsGrid';
import { Timeline } from '../components/sections/about/Timeline';
import { Leadership } from '../components/sections/about/Leadership';
import { Partnerships } from '../components/sections/about/Partnerships';
import { ValuesBento } from '../components/sections/about/ValuesBento';
import { Certifications } from '../components/sections/about/Certifications';
import { UnifiedCTA } from '../components/sections/UnifiedCTA';

export function About() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <StatsGrid />
      <Timeline />
      <Leadership />
      <Partnerships />
      <ValuesBento />
      <Certifications />
      <UnifiedCTA 
        heading="Ready to power your next project?"
        subtitle="Talk to our team about electrical infrastructure, MEPF consultancy, or project partnerships."
        primaryText="GET IN TOUCH"
        primaryTo="/contact?inquiry=sales&item=Partnership%20Consultation"
        outlineText="EXPLORE SOLUTIONS"
        outlineTo="/services"
        uppercase={true}
      />
    </>
  );
}
