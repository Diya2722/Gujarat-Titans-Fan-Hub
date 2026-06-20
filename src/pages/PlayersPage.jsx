import PlayersSection from '../components/Players/PlayersSection';
import PageHero from '../components/PageHero';
import { Users } from 'lucide-react';

export default function PlayersPage() {
  return (
    <div>
      <PageHero title="GT SQUAD" subtitle="Meet the warriors of Gujarat Titans" breadcrumb="Squad" icon={Users} />
      <PlayersSection />
    </div>
  );
}
