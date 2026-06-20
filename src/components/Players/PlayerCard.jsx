import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function PlayerCard({ player, onClick, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 8) * 0.06 }}
      onClick={onClick}
      className="group relative bg-gradient-to-br from-[#0A1628] to-[#0d1e38] border border-[#1a2a4a] rounded-2xl overflow-hidden cursor-pointer hover:border-[#FFD700]/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FFD700]/10"
    >
      {player.isCaptain && (
        <div className="absolute top-3 right-3 z-20 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#002D62] text-[10px] font-black px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
          <Star size={10} fill="currentColor" /> CAPTAIN
        </div>
      )}

      {/* Jersey number watermark */}
      <div className="absolute top-2 left-3 z-20 font-display text-5xl text-white/10 select-none" style={{fontFamily:'Bebas Neue,Impact,sans-serif'}}>
        {player.jersey}
      </div>

      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-b from-[#002D62] to-[#0A1628]">
        <img
          src={player.image}
          alt={player.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />

        {/* Hover stats overlay */}
        <div className="absolute inset-0 bg-[#010B1F]/90 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
          <div className="text-[#FFD700] text-xs font-bold tracking-widest uppercase mb-1">Key Stats</div>
          <div className="grid grid-cols-2 gap-3 w-full">
            {player.stats.runs !== undefined && (
              <div className="text-center">
                <div className="text-white font-black text-lg">{player.stats.runs}</div>
                <div className="text-gray-400 text-[10px] uppercase">Runs</div>
              </div>
            )}
            {player.stats.wickets !== undefined && (
              <div className="text-center">
                <div className="text-white font-black text-lg">{player.stats.wickets}</div>
                <div className="text-gray-400 text-[10px] uppercase">Wickets</div>
              </div>
            )}
            {player.stats.average !== undefined && (
              <div className="text-center">
                <div className="text-white font-black text-lg">{player.stats.average}</div>
                <div className="text-gray-400 text-[10px] uppercase">Average</div>
              </div>
            )}
            {player.stats.economy !== undefined && (
              <div className="text-center">
                <div className="text-white font-black text-lg">{player.stats.economy}</div>
                <div className="text-gray-400 text-[10px] uppercase">Economy</div>
              </div>
            )}
          </div>
          <span className="mt-3 text-xs font-bold text-[#FFD700] border border-[#FFD700]/40 rounded-full px-3 py-1">View Profile</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-white font-bold text-lg leading-tight">{player.name}</h3>
        <div className="flex items-center justify-between mt-1.5">
          <span className="text-[#FFD700] text-xs font-semibold tracking-wide uppercase bg-[#FFD700]/10 px-2 py-0.5 rounded">{player.role}</span>
          <span className="text-gray-500 text-xs">{player.country}</span>
        </div>
      </div>
    </motion.div>
  );
}
