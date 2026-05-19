import { Hero } from '../components/sections/Hero';
import { Stats } from '../components/sections/Stats';
import { Philosophy } from '../components/sections/Philosophy';
import { Services } from '../components/sections/Services';
import { Portfolio } from '../components/sections/Portfolio';
import { NewsSnippet } from '../components/sections/news/NewsSnippet';

export function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Philosophy />
      <Services />
      <Portfolio />
      <NewsSnippet />
    </>
  );
}
