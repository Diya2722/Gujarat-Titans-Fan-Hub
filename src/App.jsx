import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import PlayersPage from './pages/PlayersPage';
import MatchesPage from './pages/MatchesPage';
import StatsPage from './pages/StatsPage';
import NewsPage from './pages/NewsPage';
import FanZonePage from './pages/FanZonePage';
import GalleryPage from './pages/GalleryPage';
import HighlightsPage from './pages/HighlightsPage';
import TicketsPage from './pages/TicketsPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#010B1F]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/matches" element={<MatchesPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/fanzone" element={<FanZonePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/highlights" element={<HighlightsPage />} />
          <Route path="/tickets" element={<TicketsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}