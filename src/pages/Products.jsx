import { ProductsHero } from '../components/sections/products/ProductsHero';
import { ProductsTrustBar } from '../components/sections/products/ProductsTrustBar';
import { ProductsStickyNav } from '../components/sections/products/ProductsStickyNav';
import { ProductSectors } from '../components/sections/products/ProductSectors';
import { UnifiedCTA } from '../components/sections/UnifiedCTA';

/**
 * Products page — assembles all product sections in order.
 */
export function Products() {
  return (
    <>
      <ProductsHero />
      <ProductsTrustBar />
      <ProductsStickyNav />
      <ProductSectors />
      <UnifiedCTA 
        heading="Looking for high-density equipment?"
        accent="Enquire today."
        subtitle="Request comprehensive datasheets, physical dimensions, or custom cabinet scaling parameter briefings."
        primaryText="REQUEST SPECIFICATIONS"
        primaryTo="/contact?inquiry=quote&item=Industrial%20Equipment%20Specifications"
        outlineText="VIEW SYSTEM DESIGNS"
        outlineTo="/projects"
      />
    </>
  );
}

