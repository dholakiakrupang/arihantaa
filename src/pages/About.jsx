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
        heading="Ready to partner with our engineers?"
        accent="Connect with us."
        subtitle="Learn how our technical expertise and engineering capabilities can secure your mission-critical facilities."
        primaryText="GET IN TOUCH"
        primaryTo="/contact?inquiry=sales&item=Partnership%20Consultation"
        outlineText="EXPLORE PROJECTS"
        outlineTo="/projects"
        uppercase={true}
      />
    </>
  );
}
