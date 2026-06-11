import { Hero } from '../components/sections/Hero';
import { Stats } from '../components/sections/Stats';
import { Philosophy } from '../components/sections/Philosophy';
import { Services } from '../components/sections/Services';
import { Portfolio } from '../components/sections/Portfolio';
import { Partnerships } from '../components/sections/about/Partnerships';
import { NewsSnippet } from '../components/sections/news/NewsSnippet';
import { UnifiedCTA } from '../components/sections/UnifiedCTA';

export function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Philosophy />
      <Services />
      <Portfolio />
      <Partnerships isHome={true} />
      <NewsSnippet />
      <UnifiedCTA 
        heading="Ready to initiate your infrastructure brief?"
        accent="Partner with us."
        subtitle="We deliver integrated critical power grid integrations, mechanical thermal systems, and robust PM execution."
        primaryText="START TECHNICAL BRIEF"
        primaryTo="/contact?inquiry=sales&item=Infrastructure%20Project%20Brief"
        outlineText="EXPLORE SOLUTIONS"
        outlineTo="/services"
      />
    </>
  );
}

