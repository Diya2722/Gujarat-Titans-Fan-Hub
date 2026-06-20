import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Ticket, ChevronDown, Zap, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    bg: 'from-[#002D62] via-[#001a3d] to-[#010B1F]',
    accent: '#FFD700',
    title: 'GUJARAT',
    subtitle: 'TITANS',
    tagline: 'AAVA DE!!',
    desc: 'Roar with us. Rise with us.',
    emoji: '🦁',
  },
  {
    bg: 'from-[#3d0000] via-[#1a0000] to-[#010B1F]',
    accent: '#E30613',
    title: 'WE ROAR',
    subtitle: 'TOGETHER',
    tagline: 'Champions of Gujarat',
    desc: 'Built on passion. Driven by pride.',
    emoji: '🏏',
  },
  {
    bg: 'from-[#1a1200] via-[#0d0a00] to-[#010B1F]',
    accent: '#FFD700',
    title: 'FEEL THE',
    subtitle: 'THUNDER',
    tagline: 'NM Stadium is our fortress',
    desc: 'Where legends are born.',
    emoji: '⚡',
  },
];

const ticker = [
  '🦁 GT vs MI — Sep 20 at NM Stadium',
  '⚡ Rashid Khan: 89 wickets in IPL career',
  '🏆 Gujarat Titans — IPL Champions 2022',
  '🎯 Shubman Gill: 1851 runs for GT',
  '🔥 GT vs SRH — WON by 23 runs',
  '🌟 GT Squad announcement for IPL 2025',
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [tickerText] = useState(ticker.join('   •   '));
  const navigate = useNavigate();

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute inset-0 bg-gradient-to-br ${slide.bg}`}
        />
      </AnimatePresence>

      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'linear-gradient(#ffffff11 1px,transparent 1px),linear-gradient(90deg,#ffffff11 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{ background: `radial-gradient(circle, ${slide.accent}44, transparent 70%)` }} />

      <div className="absolute top-20 right-10 w-64 h-64 border border-[#FFD700]/10 rounded-full" />
      <div className="absolute top-32 right-20 w-40 h-40 border border-[#E30613]/10 rounded-full" />
      <div className="absolute bottom-20 left-10 w-80 h-80 border border-[#002D62]/30 rounded-full" />

      {/* Live Ticker */}
      <div className="relative z-10 mt-16 bg-[#E30613]/90 backdrop-blur-sm border-y border-[#E30613]">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-[#FFD700] text-[#002D62] px-4 py-2 text-xs font-black tracking-widest flex items-center gap-1.5">
            <Zap size={12} className="animate-pulse" /> LIVE TICKER
          </div>
          <div className="overflow-hidden flex-1">
            <div className="flex whitespace-nowrap animate-ticker" style={{width:'max-content'}}>
              <span className="text-white text-xs font-semibold py-2 px-4 inline-block whitespace-nowrap">{tickerText} &nbsp;&nbsp;&nbsp;</span>
              <span className="text-white text-xs font-semibold py-2 px-4 inline-block whitespace-nowrap">{tickerText} &nbsp;&nbsp;&nbsp;</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
                Official Fan Hub • IPL 2025
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div key={current}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="leading-none mb-2" style={{fontFamily:'Bebas Neue,Impact,sans-serif', letterSpacing:'0.02em'}}>
                    <span className="block text-7xl sm:text-8xl lg:text-[7rem] text-white">{slide.title}</span>
                    <span className="block text-7xl sm:text-8xl lg:text-[7rem]" style={{background:'linear-gradient(90deg,#FFD700,#FFA500)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>{slide.subtitle}</span>
                  </h1>
                  <p className="text-xl sm:text-2xl text-[#FFD700] font-bold mb-2 tracking-wide">{slide.tagline}</p>
                  <p className="text-gray-400 text-lg mb-8">{slide.desc}</p>
                </motion.div>
              </AnimatePresence>

              {/* CTAs — now clickable */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                <button
                  onClick={() => navigate('/highlights')}
                  className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#002D62] font-black text-sm rounded-lg hover:shadow-xl hover:shadow-yellow-500/30 hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide"
                >
                  <Play size={16} fill="currentColor" /> Watch Highlights
                </button>
                <button
                  onClick={() => navigate('/tickets')}
                  className="flex items-center gap-2 px-6 py-3.5 bg-[#E30613] hover:bg-[#c0040f] text-white font-black text-sm rounded-lg hover:shadow-xl hover:shadow-red-500/30 hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide"
                >
                  <Ticket size={16} /> Buy Tickets
                </button>
                <button
                  onClick={() => navigate('/players')}
                  className="flex items-center gap-2 px-6 py-3.5 bg-white/5 border border-white/20 hover:border-white/40 text-white font-bold text-sm rounded-lg hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide"
                >
                  <Users size={16} /> Meet the Squad
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-10 flex gap-8"
              >
                {[
                  { label: 'IPL Titles', value: '2' },
                  { label: 'Season Wins', value: '14' },
                  { label: 'GT Army', value: '1M+' },
                ].map(stat => (
                  <div key={stat.label}>
                    <div className="text-3xl font-black" style={{background:'linear-gradient(90deg,#FFD700,#FFA500)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', fontFamily:'Bebas Neue,Impact,sans-serif', letterSpacing:'0.02em'}}>{stat.value}</div>
                    <div className="text-gray-400 text-xs font-semibold tracking-widest uppercase">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="w-72 h-72 xl:w-80 xl:h-80 rounded-full border-2 border-[#FFD700]/20 flex items-center justify-center animate-[spin_30s_linear_infinite]">
                  <div className="absolute top-0 w-3 h-3 bg-[#FFD700] rounded-full shadow-[0_0_15px_#FFD700]" />
                  <div className="absolute bottom-0 w-2 h-2 bg-[#E30613] rounded-full shadow-[0_0_10px_#E30613]" />
                </div>
                <div className="absolute inset-8 rounded-full border border-[#E30613]/20 animate-[spin_20s_linear_infinite_reverse]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-44 h-44 xl:w-52 xl:h-52 rounded-full bg-[#001a3d] flex items-center justify-center shadow-2xl shadow-yellow-500/30 border-2 border-[#FFD700]/30">
                    <img src="/gt-logo.png" alt="GT Logo" className="w-36 h-36 xl:w-44 xl:h-44 object-contain" />
                  </div>
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -top-6 -right-6 bg-[#E30613] text-white px-3 py-1.5 rounded-xl text-xs font-black shadow-lg"
                >
                  🏆 2x Champions
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
                  className="absolute -bottom-4 -left-6 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#002D62] px-3 py-1.5 rounded-xl text-xs font-black shadow-lg"
                >
                  ⚡ AAVA DE!!
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex justify-center gap-2 pb-8">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${i === current ? 'w-8 h-2 bg-[#FFD700]' : 'w-2 h-2 bg-white/30 hover:bg-white/50'}`}
          />
        ))}
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-1"
      >
        <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
}