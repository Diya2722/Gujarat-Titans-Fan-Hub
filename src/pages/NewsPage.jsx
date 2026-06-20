import NewsSection from '../components/News/NewsSection';
import PageHero from '../components/PageHero';
import { Newspaper } from 'lucide-react';

export default function NewsPage() {
  return (
    <div>
      <PageHero title="LATEST NEWS" subtitle="Stay updated with GT headlines" breadcrumb="News" icon={Newspaper} />
      <NewsSection />
    </div>
  );
}
