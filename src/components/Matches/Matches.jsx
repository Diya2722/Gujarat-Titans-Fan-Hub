import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Ticket, ChevronRight, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { upcomingMatches, recentResults } from '../../data/matches';

function useCountdown(targetDate, targetTime) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(`${targetDate} ${targetTime.replace(' IST', '')}`);

    const calc = () => {
      const diff = target - new Date();
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate, targetTime]);

  return timeLeft;
}

function CountdownTimer({ date, time }) {
  const { days, hours, minutes, seconds } = useCountdown(date, time);
  const pad = (n) => String(n).padStart(2, '0');

  return (
    <div className="flex items-center justify-center gap-1 mb-4 bg-[#010B1F] border border-[#FFD700]/20 rounded-lg px-3 py-2">
      {[['days', days], ['hrs', hours], ['min', minutes], ['sec', seconds]].map(([label, val]) => (
        <div key={label} className="flex flex-col items-center">
          <span className="text-[#FFD700] font-black text-base leading-none">{pad(val)}</span>
          <span className="text-[#FFD700]/50 text-[8px] uppercase tracking-widest">{label}</span>
        </div>
      )).reduce((acc, el, i) => i === 0 ? [el] : [...acc, <span key={`sep-${i}`} className="text-[#FFD700]/40 font-bold text-sm mb-2">:</span>, el], [])}
    </div>
  );
}

function MatchCard({ match, index }) {
  const navigate = useNavigate();
  const date = new Date(match.date);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex-shrink-0 w-72 sm:w-80 bg-gradient-to-br from-[#0A1628] to-[#0d1e38] border border-[#1a2a4a] rounded-2xl overflow-hidden hover:border-[#FFD700]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FFD700]/10 group"
    >
      <div className="h-1 bg-gradient-to-r from-[#E30613] to-[#FFD700]" />

      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold text-[#FFD700] tracking-widest uppercase bg-[#FFD700]/10 px-2 py-1 rounded">{match.matchType}</span>
          {match.isHome && (
            <span className="text-xs font-bold text-[#E30613] tracking-wide bg-[#E30613]/10 px-2 py-1 rounded border border-[#E30613]/20">HOME</span>
          )}
        </div>

        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 text-center">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#001a3d] border border-[#FFD700]/30 flex items-center justify-center mb-1 shadow-lg shadow-yellow-500/20">
            <img src="/gt-logo.png" alt="GT" className="w-10 h-10 object-contain" />
          </div>            <div className="text-xs font-bold text-[#FFD700]">GT</div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-br from-[#1a2a4a] to-[#0d1e38] border border-[#2a3a5a] rounded-xl px-3 py-2">
              <div className="text-xs text-gray-500 font-semibold tracking-widest">VS</div>
              <div className="text-[8px] text-gray-600 mt-0.5">{day} {month}</div>
            </div>
          </div>
          {/* Opponent with team color */}
          <div className="flex-1 text-center">
            <div
              className="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-sm font-black mb-1 border-2"
              style={{ backgroundColor: match.opponentColor + '22', borderColor: match.opponentColor + '55', color: match.opponentColor }}
            >
              {match.opponentShort}
            </div>
            <div className="text-xs font-bold text-white">{match.opponentShort}</div>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <Calendar size={12} className="text-[#E30613]" />
            <span>{date.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'long' })}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <Clock size={12} className="text-[#E30613]" />
            <span>{match.time}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <MapPin size={12} className="text-[#E30613]" />
            <span className="truncate">{match.venueShort}</span>
          </div>
        </div>

        {/* Countdown */}
        <CountdownTimer date={match.date} time={match.time} />

        {match.ticketAvailable ? (
          <button
            onClick={() => navigate('/tickets')}
            className="w-full py-2.5 bg-gradient-to-r from-[#E30613] to-[#ff1a26] text-white text-xs font-bold rounded-lg hover:shadow-lg hover:shadow-red-500/30 transition-all flex items-center justify-center gap-2"
          >
            <Ticket size={12} /> Buy Tickets
          </button>
        ) : (
          <button className="w-full py-2.5 bg-[#1a2a4a] text-gray-400 text-xs font-bold rounded-lg cursor-not-allowed flex items-center justify-center gap-2">
            Sold Out
          </button>
        )}
      </div>
    </motion.div>
  );
}

function ResultCard({ result, index }) {
  const isWon = result.result === 'WON';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-gradient-to-br from-[#0A1628] to-[#0d1e38] border border-[#1a2a4a] rounded-xl p-4 flex items-center gap-4 hover:border-[#1a2a4a]/70 transition-all"
    >
      <div className={`w-2 h-14 rounded-full flex-shrink-0 ${isWon ? 'bg-gradient-to-b from-green-400 to-green-600' : 'bg-gradient-to-b from-red-500 to-red-700'}`} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className={`text-xs font-black px-2 py-0.5 rounded ${isWon ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'}`}>{result.result}</span>
          <span className="text-gray-500 text-xs">vs {result.opponent}</span>
        </div>
        <div className="text-white font-bold text-sm">GT {result.gtScore}</div>
        <div className="text-gray-400 text-xs">{result.opponentShort} {result.opponentScore}</div>
        <div className="text-gray-500 text-xs mt-1">{result.highlights}</div>
      </div>
      <div className="text-right flex-shrink-0">
        <div className={`text-sm font-black ${isWon ? 'text-green-400' : 'text-red-400'}`}>{isWon ? '✓' : '✗'}</div>
        <div className="text-gray-500 text-xs mt-1">{result.margin}</div>
      </div>
    </motion.div>
  );
}

export default function Matches() {
  return (
    <section className="py-20 bg-[#010B1F] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1a2a4a] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E30613]/10 border border-[#E30613]/30 text-[#E30613] px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3">
              <Calendar size={11} /> Schedule
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white" style={{fontFamily:'Bebas Neue,Impact,sans-serif', letterSpacing:'0.02em'}}>
              UPCOMING <span style={{background:'linear-gradient(90deg,#FFD700,#FFA500)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>MATCHES</span>
            </h2>
            <p className="text-gray-400 mt-1">Don't miss a single roar</p>
          </div>
          <button className="hidden sm:flex items-center gap-1.5 text-[#FFD700] text-sm font-semibold hover:text-white transition-colors">
            Full Schedule <ChevronRight size={16} />
          </button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{scrollbarWidth:'none'}}>
          {upcomingMatches.map((match, i) => (
            <div key={match.id} className="snap-start">
              <MatchCard match={match} index={i} />
            </div>
          ))}
        </div>

        <div className="mt-14">
          <div className="flex items-center gap-3 mb-6">
            <Trophy size={20} className="text-[#FFD700]" />
            <h3 className="text-2xl font-black text-white" style={{fontFamily:'Bebas Neue,Impact,sans-serif', letterSpacing:'0.02em'}}>RECENT RESULTS</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {recentResults.map((r, i) => <ResultCard key={r.id} result={r} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
