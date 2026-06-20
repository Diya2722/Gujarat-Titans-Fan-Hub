import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart2 } from 'lucide-react';

const initialOptions = [
  { name: 'Shubman Gill', votes: 342 },
  { name: 'Rashid Khan', votes: 298 },
  { name: 'David Miller', votes: 187 },
  { name: 'Rahul Tewatia', votes: 95 },
];

export default function PollWidget() {
  const [options, setOptions] = useState(initialOptions);
  const [voted, setVoted] = useState(null);

  const total = options.reduce((s, o) => s + o.votes, 0);

  const handleVote = (idx) => {
    if (voted !== null) return;
    setOptions(prev => prev.map((o, i) => i === idx ? { ...o, votes: o.votes + 1 } : o));
    setVoted(idx);
  };

  return (
    <div className="bg-gradient-to-br from-[#0A1628] to-[#0d1e38] border border-[#1a2a4a] rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-1">
        <BarChart2 size={18} className="text-[#FFD700]" />
        <h3 className="text-white font-bold text-sm uppercase tracking-wide">Live Poll</h3>
        <span className="ml-auto flex items-center gap-1 text-xs text-green-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Live
        </span>
      </div>
      <p className="text-gray-300 text-sm mb-5">Who will be Player of the Match vs MI?</p>

      <div className="space-y-3">
        {options.map((opt, i) => {
          const pct = total ? Math.round((opt.votes / total) * 100) : 0;
          return (
            <button
              key={opt.name}
              onClick={() => handleVote(i)}
              disabled={voted !== null}
              className="w-full text-left relative group disabled:cursor-default"
            >
              <div className="flex justify-between mb-1 text-sm">
                <span className={`font-medium ${voted === i ? 'text-[#FFD700]' : 'text-gray-200'}`}>{opt.name}</span>
                {voted !== null && <span className="text-gray-400 text-xs">{pct}%</span>}
              </div>
              <div className="h-8 bg-[#010B1F] rounded-lg border border-[#1a2a4a] overflow-hidden relative">
                {voted !== null && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.6 }}
                    className={`h-full ${voted === i ? 'bg-gradient-to-r from-[#FFD700] to-[#FFA500]' : 'bg-[#1a2a4a]'}`}
                  />
                )}
                {voted === null && (
                  <div className="absolute inset-0 flex items-center px-3 text-gray-500 text-xs group-hover:text-[#FFD700] group-hover:border-l-2 group-hover:border-[#FFD700] transition-colors">
                    Tap to vote
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
      <p className="text-gray-500 text-xs mt-4 text-center">{total.toLocaleString()} votes cast</p>
    </div>
  );
}
