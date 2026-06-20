import Hero from '../components/Hero/Hero';
import Matches from '../components/Matches/Matches';
import PlayersSection from '../components/Players/PlayersSection';
import StatsSection from '../components/Stats/StatsSection';
import NewsSection from '../components/News/NewsSection';
import FanZoneSection from '../components/FanZone/FanZoneSection';
import GallerySection from '../components/Gallery/GallerySection';

export default function Home() {
  return (
    <>
      <Hero />
      <Matches />
      <PlayersSection />
      <StatsSection />
      <NewsSection />
      <FanZoneSection />
      <GallerySection />
    </>
  );
}
