import { BarChart3, Target, Swords, Trophy } from 'lucide-react';
import StatCounter from './StatCounter';
import ProgressBar from './ProgressBar';

const topScorers = [
  { name: 'Shubman Gill', runs: 1851, max: 1851 },
  { name: 'David Miller', runs: 1123, max: 1851 },
  { name: 'Sai Sudharsan', runs: 723, max: 1851 },
  { name: 'Rahul Tewatia', runs: 621, max: 1851 },
];

const topWicketTakers = [
  { name: 'Rashid Khan', wickets: 89, max: 89 },
  { name: 'Mohit Sharma', wickets: 67, max: 89 },
  { name: 'Alzarri Joseph', wickets: 35, max: 89 },
  { name: 'Noor Ahmad', wickets: 24, max: 89 },
];

const headToHead = [
  { team: 'Mumbai Indians', wins: 6, losses: 4 },
  { team: 'Chennai Super Kings', wins: 5, losses: 3 },
  { team: 'Royal Challengers', wins: 7, losses: 2 },
  { team: 'Kolkata Knight Riders', wins: 4, losses: 5 },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-[#000814] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{backgroundImage:'radial-gradient(circle at 20% 30%, #FFD700 0%, transparent 40%), radial-gradient(circle at 80% 70%, #E30613 0%, transparent 40%)'}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3">
            <BarChart3 size={11} /> Performance
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white" style={{fontFamily:'Bebas Neue,Impact,sans-serif', letterSpacing:'0.02em'}}>
            TEAM <span style={{background:'linear-gradient(90deg,#FFD700,#FFA500)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>STATISTICS</span>
          </h2>
          <p className="text-gray-400 mt-2">IPL 2025 season at a glance</p>
        </div>

        {/* Season performance counters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          <StatCounter end={20} label="Points" icon="🎯" color="#FFD700" />
          <StatCounter end={10} label="Wins" icon="🏆" color="#E30613" />
          <StatCounter end={4} label="Losses" icon="📉" color="#ffffff" />
          <StatCounter end={68} suffix="%" label="NRR Win Rate" icon="⚡" color="#FFD700" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Top Run Scorers */}
          <div className="bg-gradient-to-br from-[#0A1628] to-[#0d1e38] border border-[#1a2a4a] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <Target size={18} className="text-[#FFD700]" />
              <h3 className="text-white font-bold text-sm uppercase tracking-wide">Top Run Scorers</h3>
            </div>
            {topScorers.map(p => (
              <ProgressBar key={p.name} label={p.name} value={p.runs} max={p.max} color="#FFD700" />
            ))}
          </div>

          {/* Top Wicket Takers */}
          <div className="bg-gradient-to-br from-[#0A1628] to-[#0d1e38] border border-[#1a2a4a] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <Swords size={18} className="text-[#E30613]" />
              <h3 className="text-white font-bold text-sm uppercase tracking-wide">Top Wicket Takers</h3>
            </div>
            {topWicketTakers.map(p => (
              <ProgressBar key={p.name} label={p.name} value={p.wickets} max={p.max} color="#E30613" />
            ))}
          </div>

          {/* Head to Head */}
          <div className="bg-gradient-to-br from-[#0A1628] to-[#0d1e38] border border-[#1a2a4a] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <Trophy size={18} className="text-[#FFD700]" />
              <h3 className="text-white font-bold text-sm uppercase tracking-wide">Head-to-Head Record</h3>
            </div>
            <div className="space-y-3">
              {headToHead.map(h => (
                <div key={h.team} className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">{h.team}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-green-400 font-bold bg-green-400/10 px-2 py-0.5 rounded text-xs">{h.wins}W</span>
                    <span className="text-red-400 font-bold bg-red-400/10 px-2 py-0.5 rounded text-xs">{h.losses}L</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
