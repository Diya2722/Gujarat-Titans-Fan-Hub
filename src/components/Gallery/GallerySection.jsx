import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  { id: 1, type: 'image', src: 'https://cf-images.assettype.com/thequint%2F2022-05%2Fce999e71-9117-4067-b0df-37371a82da2f%2F_AI_3919.jpg?auto=format%2Ccompress&fmt=webp&width=720', caption: 'IPL 2022 Trophy Celebration' },
  { id: 2, type: 'image', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHWfMmCc1rDXnCJ8q0ZN3F4dAvehS40-D2rBtTA4HiAaJvg1FsO-pobh4&s=10', caption: 'Best Sixes of the Season' },
  { id: 3, type: 'image', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Narendra_Modi_Stadium_view_from_the_gallery.jpg/1280px-Narendra_Modi_Stadium_view_from_the_gallery.jpg', caption: 'Narendra Modi Stadium' },
  { id: 4, type: 'image', src: 'https://island.lk/wp-content/uploads/2026/05/ipl-67-GT.png', caption: 'Pre-Match Team Huddle' },
  { id: 5, type: 'image', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcewj-IkFSp4wE5ypR8NMyxvh2vWfU2Aw_O-UR_5UHfspRGewldcEdUpI-&s=10', caption: "Rashid Khan's Spin Wizardry" },
  { id: 6, type: 'image', src: 'https://c.ndtvimg.com/2026-04/41nifqt8_gt-_625x300_03_April_26.jpeg?im=FeatureCrop,algorithm=dnn,width=1200,height=738', caption: 'GT Army at the Stadium' },
  { id: 7, type: 'image', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSs_B1MZOGbIwW5xgSPeLebBaPeMaYlK-raA5B-0xDOREbtg8XO5vEIiw&s=10', caption: "Gill's Match-Winning Century" },
  { id: 8, type: 'image', src: 'https://images.hindustantimes.com/img/2022/05/31/original/ANI-20220530113-0_1653980353916.jpg', caption: 'Victory Lap Celebrations' },
];

const videoCount = galleryItems.filter(i => i.type === 'video').length;

export default function GallerySection() {
  const [filter, setFilter] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filtered = filter === 'all' ? galleryItems : galleryItems.filter(i => i.type === filter);
  const selected = selectedIndex !== null ? filtered[selectedIndex] : null;

  const goNext = () => setSelectedIndex(i => (i + 1) % filtered.length);
  const goPrev = () => setSelectedIndex(i => (i - 1 + filtered.length) % filtered.length);
  const close = () => setSelectedIndex(null);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handler = (e) => {
      if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selectedIndex, filtered.length]);

  const tabs = [
    // { key: 'all', label: 'All' },
    // { key: 'image', label: 'Photos' },
    
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#000814] to-[#010B1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#E30613]/10 border border-[#E30613]/30 text-[#E30613] px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3">
            <Camera size={11} /> Moments
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white" style={{fontFamily:'Bebas Neue,Impact,sans-serif', letterSpacing:'0.02em'}}>
            PHOTO & VIDEO <span style={{background:'linear-gradient(90deg,#FFD700,#FFA500)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>GALLERY</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {tabs.map(({ key, label, badge }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`relative px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-all flex items-center gap-2 ${
                filter === key
                  ? 'bg-gradient-to-r from-[#E30613] to-[#ff1a26] text-white shadow-lg shadow-red-500/30'
                  : 'bg-[#0A1628] border border-[#1a2a4a] text-gray-400 hover:border-[#FFD700]/30 hover:text-white'
              }`}
            >
              {label}
              {badge !== undefined && (
                <span className={`text-xs px-1.5 py-0.5 rounded-full font-black ${filter === key ? 'bg-white/20 text-white' : 'bg-[#FFD700]/20 text-[#FFD700]'}`}>
                  {badge}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelectedIndex(i)}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group border border-[#1a2a4a] hover:border-[#FFD700]/40 transition-all"
            >
              <img src={item.src} alt={item.caption} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                {item.type === 'video' && (
                  <div className="w-10 h-10 rounded-full bg-[#FFD700] flex items-center justify-center">
                    <Play size={16} className="text-[#002D62]" fill="currentColor" />
                  </div>
                )}
                <p className="text-white text-xs font-semibold text-center px-3 absolute bottom-3">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full"
            >
              {/* Close */}
              <button onClick={close} className="absolute -top-10 right-0 text-white hover:text-[#FFD700] transition-colors">
                <X size={24} />
              </button>

              {/* Prev */}
              <button
                onClick={goPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full bg-[#0A1628] border border-[#FFD700]/30 flex items-center justify-center text-white hover:bg-[#FFD700] hover:text-[#002D62] transition-all"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Next */}
              <button
                onClick={goNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-[#0A1628] border border-[#FFD700]/30 flex items-center justify-center text-white hover:bg-[#FFD700] hover:text-[#002D62] transition-all"
              >
                <ChevronRight size={20} />
              </button>

              <img src={selected.src} alt={selected.caption} className="w-full rounded-xl" />
              <p className="text-white text-center mt-4 font-semibold">{selected.caption}</p>

              {/* Position indicator */}
              <p className="text-gray-500 text-xs text-center mt-2">{selectedIndex + 1} / {filtered.length}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
