import { AboutHero } from '../components/sections/about/AboutHero';
import { OurStory } from '../components/sections/about/OurStory';
import { StatsGrid } from '../components/sections/about/StatsGrid';
import { Timeline } from '../components/sections/about/Timeline';
import { Leadership } from '../components/sections/about/Leadership';
import { ValuesBento } from '../components/sections/about/ValuesBento';
import { Certifications } from '../components/sections/about/Certifications';

export function About() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <StatsGrid />
      <Timeline />
      <Leadership />
      <ValuesBento />
      <Certifications />
    </>
  );
}
