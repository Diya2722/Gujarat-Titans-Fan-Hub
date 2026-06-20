import { useState } from 'react';
import { Users } from 'lucide-react';
import { players, playerRoles } from '../../data/players';
import PlayerCard from './PlayerCard';
import PlayerModal from './PlayerModal';

export default function PlayersSection() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = filter === 'All' ? players : players.filter(p => p.role === filter);

  return (
    <section className="py-20 bg-gradient-to-b from-[#010B1F] to-[#000814] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3">
            <Users size={11} /> The Squad
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white" style={{fontFamily:'Bebas Neue,Impact,sans-serif', letterSpacing:'0.02em'}}>
            OUR <span style={{background:'linear-gradient(90deg,#FFD700,#FFA500)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>TITANS</span>
          </h2>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto">The roaring lions who carry Gujarat's pride onto the field</p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {playerRoles.map(role => (
            <button
              key={role}
              onClick={() => setFilter(role)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-200 ${
                filter === role
                  ? 'bg-gradient-to-r from-[#E30613] to-[#ff1a26] text-white shadow-lg shadow-red-500/20'
                  : 'bg-[#0A1628] border border-[#1a2a4a] text-gray-400 hover:text-white hover:border-[#FFD700]/30'
              }`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {filtered.map((player, i) => (
            <PlayerCard key={player.id} player={player} index={i} onClick={() => setSelected(player)} />
          ))}
        </div>
      </div>

      <PlayerModal player={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
