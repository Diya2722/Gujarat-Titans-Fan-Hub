import GallerySection from '../components/Gallery/GallerySection';
import PageHero from '../components/PageHero';
import { Camera } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div>
      <PageHero title="GALLERY" subtitle="Moments that made history" breadcrumb="Gallery" icon={Camera} />
      <GallerySection />
    </div>
  );
}
