import FanZoneSection from '../components/FanZone/FanZoneSection';
import PageHero from '../components/PageHero';
import { Star } from 'lucide-react';

export default function FanZonePage() {
  return (
    <div>
      <PageHero title="FAN ZONE" subtitle="For the GT Army — by the GT Army" breadcrumb="Fan Zone" icon={Star} />
      <FanZoneSection />
    </div>
  );
}
