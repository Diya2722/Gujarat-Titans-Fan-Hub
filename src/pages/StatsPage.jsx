import StatsSection from '../components/Stats/StatsSection';
import PageHero from '../components/PageHero';
import { BarChart2 } from 'lucide-react';

export default function StatsPage() {
  return (
    <div>
      <PageHero title="STATS & RECORDS" subtitle="By the numbers — Gujarat Titans dominance" breadcrumb="Stats" icon={BarChart2} />
      <StatsSection />
    </div>
  );
}
