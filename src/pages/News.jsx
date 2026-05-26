import { useState } from 'react';
import { NewsHero } from '../components/sections/news/NewsHero';
import { FeaturedNews } from '../components/sections/news/FeaturedNews';
import { UnifiedCTA } from '../components/sections/UnifiedCTA';

export function News() {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleLatestStoriesClick = () => {
    setActiveCategory('All');
    setTimeout(() => {
      document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <>
      <NewsHero onLatestStoriesClick={handleLatestStoriesClick} />
      <FeaturedNews activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
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

