import { useState } from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Clock, ArrowRight } from 'lucide-react';
import { newsArticles, newsCategories } from '../../data/news';
import NewsModal from './NewsModal';

function NewsCard({ article, index, featured = false, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`group bg-gradient-to-br from-[#0A1628] to-[#0d1e38] border border-[#1a2a4a] rounded-2xl overflow-hidden hover:border-[#FFD700]/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer ${featured ? 'lg:col-span-2' : ''}`}
      onClick={onClick}
    >
      <div className={`relative overflow-hidden ${featured ? 'h-64' : 'h-44'}`}>
        <img src={article.image} alt={article.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
        <span className="absolute top-3 left-3 text-[10px] font-bold text-[#002D62] bg-gradient-to-r from-[#FFD700] to-[#FFA500] px-2.5 py-1 rounded-full uppercase tracking-wide">
          {article.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className={`text-white font-bold leading-snug mb-2 group-hover:text-[#FFD700] transition-colors ${featured ? 'text-xl' : 'text-base'}`}>
          {article.title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2 mb-4">{article.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-gray-500 text-xs">
            <Clock size={11} /> {article.readTime}
          </div>
          <span className="flex items-center gap-1 text-[#FFD700] text-xs font-bold group-hover:gap-2 transition-all">
            Read More <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function NewsSection() {
  const [filter, setFilter] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filtered = filter === 'All' ? newsArticles : newsArticles.filter(a => a.category === filter);

  return (
    <section className="py-20 bg-gradient-to-b from-[#000814] to-[#010B1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E30613]/10 border border-[#E30613]/30 text-[#E30613] px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3">
              <Newspaper size={11} /> Latest Updates
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white" style={{fontFamily:'Bebas Neue,Impact,sans-serif', letterSpacing:'0.02em'}}>
              GT <span style={{background:'linear-gradient(90deg,#FFD700,#FFA500)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>NEWS</span> & STORIES
            </h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            {newsCategories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${
                  filter === cat ? 'bg-[#FFD700] text-[#002D62]' : 'bg-[#0A1628] border border-[#1a2a4a] text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article, i) => (
            <NewsCard
              key={article.id}
              article={article}
              index={i}
              featured={article.featured && i === 0}
              onClick={() => setSelectedArticle(article)}
            />
          ))}
        </div>
      </div>

      <NewsModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
}