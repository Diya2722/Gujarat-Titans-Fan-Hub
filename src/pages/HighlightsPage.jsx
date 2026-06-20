import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Eye, Clock, ChevronRight, Tv } from 'lucide-react';
import PageHero from '../components/PageHero';

const highlights = [
  {
    id: 1,
    title: "Shubman Gill's Masterclass 89 off 52 vs SRH",
    match: "GT vs SRH | Sep 14, 2025",
    duration: "4:32",
    views: "2.1M",
    thumbnail: "https://placehold.co/640x360/002D62/FFD700?text=Gill+89+(52)",
    tag: "BATTING",
    tagColor: "#FFD700",
    ytLink: "https://www.youtube.com/@IPL",
    description: "Gill walked in at the powerplay and dismantled SRH's bowling attack with 8 fours and 4 sixes. A career-defining knock.",
  },
  {
    id: 2,
    title: "Rashid Khan's Spell of 3 wickets for 24 runs",
    match: "GT vs SRH | Sep 14, 2025",
    duration: "3:18",
    views: "1.7M",
    thumbnail: "https://placehold.co/640x360/3d0000/E30613?text=Rashid+3+for+24",
    tag: "BOWLING",
    tagColor: "#E30613",
    ytLink: "https://www.youtube.com/@IPL",
    description: "Rashid Khan at his hypnotic best. Three wickets in four overs with a mystery googly that bamboozled three of SRH top order.",
  },
  {
    id: 3,
    title: "David Miller's 78 off 42 — The Killer Miller Show",
    match: "GT vs DC | Sep 06, 2025",
    duration: "5:10",
    views: "3.4M",
    thumbnail: "https://placehold.co/640x360/1a1200/FFD700?text=Miller+78+(42)",
    tag: "BATTING",
    tagColor: "#FFD700",
    ytLink: "https://www.youtube.com/@IPL",
    description: "Miller destroyed DC in the death overs with 6 sixes in the last 3 overs. GT went from 140 for 3 to 221 for 3 — pure carnage.",
  },
  {
    id: 4,
    title: "Top 10 GT Catches of IPL 2025",
    match: "Season Compilation",
    duration: "6:45",
    views: "980K",
    thumbnail: "https://placehold.co/640x360/002D62/FFD700?text=Top+10+Catches",
    tag: "FIELDING",
    tagColor: "#00C853",
    ytLink: "https://www.youtube.com/@IPL",
    description: "From Tewatia's diving slip to Gill's boundary catch, here are the top 10 fielding moments that had NM Stadium on its feet.",
  },
  {
    id: 5,
    title: "GT vs MI — Full Match Highlights",
    match: "GT vs MI | Sep 20, 2025",
    duration: "12:00",
    views: "4.8M",
    thumbnail: "https://placehold.co/640x360/004BA0/FFD700?text=GT+vs+MI+Highlights",
    tag: "FULL MATCH",
    tagColor: "#FF6B00",
    ytLink: "https://www.youtube.com/@IPL",
    description: "A thriller at NM Stadium. GT chased 187 in the final over with Tewatia hitting two consecutive sixes off the last two balls.",
  },
  {
    id: 6,
    title: "Alzarri Joseph's 3-Wicket Spell vs DC",
    match: "GT vs DC | Sep 06, 2025",
    duration: "3:55",
    views: "1.2M",
    thumbnail: "https://placehold.co/640x360/3d0000/FFFFFF?text=Alzarri+3+for+28",
    tag: "BOWLING",
    tagColor: "#E30613",
    ytLink: "https://www.youtube.com/@IPL",
    description: "Joseph's raw pace and swing was unplayable. He set up GT's 32-run win with early wickets that derailed DC's chase.",
  },
];

const filters = ['All', 'Batting', 'Bowling', 'Fielding', 'Full Match'];

export default function HighlightsPage() {
  const [active, setActive] = useState('All');
  const [featured, setFeatured] = useState(highlights[0]);

  const filtered =
    active === 'All'
      ? highlights
      : highlights.filter(
          (h) => h.tag.toLowerCase() === active.toLowerCase()
        );

  return (
    <div>
      <PageHero
        title="MATCH HIGHLIGHTS"
        subtitle="Relive every roar — best moments from the GT camp"
        breadcrumb="Highlights"
        icon={Tv}
      />

      <section className="py-16 bg-[#010B1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured video */}
          <div className="mb-14 bg-gradient-to-br from-[#0A1628] to-[#0d1e38] border border-[#1a2a4a] rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">

              {/* Thumbnail side */}
              <div className="relative group">
                <img
                  src={featured.thumbnail}
                  alt={featured.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <a
                    href={featured.ytLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-full bg-[#FFD700] flex items-center justify-center shadow-2xl shadow-yellow-500/40 hover:scale-110 transition-transform"
                  >
                    <Play size={28} fill="#002D62" className="text-[#002D62] ml-1" />
                  </a>
                </div>
                <span
                  className="absolute top-3 left-3 text-xs font-black px-2 py-1 rounded"
                  style={{
                    background: featured.tagColor,
                    color: featured.tagColor === '#FFD700' ? '#002D62' : '#fff',
                  }}
                >
                  {featured.tag}
                </span>
              </div>

              {/* Info side */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <p className="text-[#FFD700] text-xs font-bold tracking-widest uppercase mb-2">
                    {featured.match}
                  </p>
                  <h2
                    className="text-white text-2xl font-black mb-4 leading-tight"
                    style={{ fontFamily: 'Bebas Neue,Impact,sans-serif', letterSpacing: '0.02em' }}
                  >
                    {featured.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {featured.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {featured.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye size={12} /> {featured.views} views
                    </span>
                  </div>
                </div>

                {/* Two clickable buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={featured.ytLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#002D62] font-black text-sm rounded-xl hover:shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-0.5 transition-all"
                  >
                    <Play size={15} fill="currentColor" /> Watch on YouTube
                  </a>
                  <a
                    href="https://www.iplt20.com/video"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-3 bg-[#0A1628] border border-[#1a2a4a] hover:border-[#FFD700]/40 text-white font-bold text-sm rounded-xl hover:-translate-y-0.5 transition-all"
                  >
                    <ExternalLink size={15} /> View on IPL Official
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={
                  'px-4 py-2 rounded-full text-sm font-bold transition-all ' +
                  (active === f
                    ? 'bg-gradient-to-r from-[#E30613] to-[#ff1a26] text-white shadow-lg shadow-red-500/30'
                    : 'bg-[#0A1628] border border-[#1a2a4a] text-gray-400 hover:border-[#FFD700]/30 hover:text-white')
                }
              >
                {f}
              </button>
            ))}
          </div>

          {/* Video grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setFeatured(item)}
                className={
                  'bg-gradient-to-br from-[#0A1628] to-[#0d1e38] border rounded-xl overflow-hidden cursor-pointer hover:-translate-y-1 transition-all duration-300 ' +
                  (featured.id === item.id
                    ? 'border-[#FFD700]/50'
                    : 'border-[#1a2a4a] hover:border-[#FFD700]/20')
                }
              >
                <div className="relative">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-44 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-[#FFD700] flex items-center justify-center">
                      <Play size={16} fill="#002D62" className="text-[#002D62] ml-0.5" />
                    </div>
                  </div>
                  <span
                    className="absolute top-2 left-2 text-[10px] font-black px-2 py-0.5 rounded"
                    style={{
                      background: item.tagColor,
                      color: item.tagColor === '#FFD700' ? '#002D62' : '#fff',
                    }}
                  >
                    {item.tag}
                  </span>
                  <span className="absolute bottom-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded bg-black/70 text-white">
                    {item.duration}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-[#FFD700] text-[10px] font-bold tracking-widest uppercase mb-1">
                    {item.match}
                  </p>
                  <h3 className="text-white font-bold text-sm leading-snug mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs flex items-center gap-1">
                      <Eye size={10} /> {item.views}
                    </span>
                    <ChevronRight size={14} className="text-gray-600" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}