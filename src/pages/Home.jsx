import { Hero } from '../components/sections/Hero';
import { Stats } from '../components/sections/Stats';
import { Philosophy } from '../components/sections/Philosophy';
import { Services } from '../components/sections/Services';
import { ProductsShowcase } from '../components/sections/products/ProductsShowcase';
import { Partnerships } from '../components/sections/about/Partnerships';
import { PartnershipShowcase } from '../components/sections/about/PartnershipShowcase';
import { UnifiedCTA } from '../components/sections/UnifiedCTA';

export function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Philosophy />
      <Services />
      <ProductsShowcase />
      <Partnerships isHome={true} />
      <PartnershipShowcase />
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


