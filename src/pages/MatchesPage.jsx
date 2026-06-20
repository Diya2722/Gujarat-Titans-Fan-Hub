import Matches from '../components/Matches/Matches';
import PageHero from '../components/PageHero';
import { Calendar } from 'lucide-react';

export default function MatchesPage() {
  return (
    <div>
      <PageHero title="MATCHES" subtitle="Upcoming fixtures & recent results" breadcrumb="Matches" icon={Calendar} />
      <Matches />
    </div>
  );
}
