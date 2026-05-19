import { ProductsHero } from '../components/sections/products/ProductsHero';
import { ProductsTrustBar } from '../components/sections/products/ProductsTrustBar';
import { IndustryScroll } from '../components/sections/products/IndustryScroll';
import { ProductSectors } from '../components/sections/products/ProductSectors';

/**
 * Products page — assembles all product sections in order.
 */
export function Products() {
  return (
    <>
      <ProductsHero />
      <ProductsTrustBar />
      <IndustryScroll />
      <ProductSectors />
    </>
  );
}
