import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, TrendingUp, Star } from 'lucide-react';

export default function PlayerModal({ player, onClose }) {
  return (
    <AnimatePresence>
      {player && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-[#0A1628] to-[#0d1e38] border border-[#1a2a4a] rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto relative"
          >
            <button onClick={onClose} className="absolute top-4 right-4 z-20 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white transition-colors">
              <X size={18} />
            </button>

            {/* Header */}
            <div className="relative h-48 bg-gradient-to-br from-[#002D62] to-[#010B1F] overflow-hidden">
              <img src={player.image} alt={player.name} className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 flex items-center gap-4">
                <div className="font-display text-6xl text-[#FFD700]/40" style={{fontFamily:'Bebas Neue,Impact,sans-serif'}}>{player.jersey}</div>
                <div>
                  <h2 className="text-3xl font-black text-white" style={{fontFamily:'Bebas Neue,Impact,sans-serif', letterSpacing:'0.02em'}}>{player.name}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[#FFD700] text-xs font-bold uppercase bg-[#FFD700]/10 px-2 py-0.5 rounded">{player.role}</span>
                    <span className="text-gray-400 text-xs">{player.country} • {player.age} yrs</span>
                    {player.isCaptain && (
                      <span className="text-[#002D62] text-xs font-black bg-gradient-to-r from-[#FFD700] to-[#FFA500] px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Star size={9} fill="currentColor" /> CAPTAIN
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Bio */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">{player.bio}</p>

              {/* Stats grid */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={16} className="text-[#E30613]" />
                  <h3 className="text-white font-bold text-sm uppercase tracking-wide">IPL Career Stats</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {Object.entries(player.stats).map(([key, value]) => (
                    <div key={key} className="bg-[#010B1F] border border-[#1a2a4a] rounded-xl p-3 text-center">
                      <div className="text-[#FFD700] font-black text-xl">{value}</div>
                      <div className="text-gray-500 text-[10px] uppercase tracking-wide mt-1">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Award size={16} className="text-[#FFD700]" />
                  <h3 className="text-white font-bold text-sm uppercase tracking-wide">Achievements</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {player.achievements.map((a, i) => (
                    <span key={i} className="text-xs font-semibold text-gray-200 bg-gradient-to-r from-[#1a2a4a] to-[#0d1e38] border border-[#2a3a5a] px-3 py-1.5 rounded-full">
                      🏆 {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
