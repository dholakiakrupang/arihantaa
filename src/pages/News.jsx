import { NewsHero } from '../components/sections/news/NewsHero';
import { FeaturedNews } from '../components/sections/news/FeaturedNews';
import { Newsletter } from '../components/sections/news/Newsletter';

export function News() {
  return (
    <>
      <NewsHero />
      <FeaturedNews />
      <Newsletter />
    </>
  );
}
