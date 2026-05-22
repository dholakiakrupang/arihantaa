import { NewsHero } from '../components/sections/news/NewsHero';
import { FeaturedNews } from '../components/sections/news/FeaturedNews';
import { UnifiedCTA } from '../components/sections/UnifiedCTA';

export function News() {
  return (
    <>
      <NewsHero />
      <FeaturedNews />
      <UnifiedCTA 
        heading="Stay informed on critical tech?"
        accent="Read our analysis."
        subtitle="Get specialized engineering briefs, industry reports, and energy infrastructure insights."
        primaryText="SUBSCRIBE TO BRIEFINGS"
        primaryTo="/contact?inquiry=news&item=Newsletter%20Subscription"
        outlineText="EXPLORE PROJECTS"
        outlineTo="/projects"
      />
    </>
  );
}

