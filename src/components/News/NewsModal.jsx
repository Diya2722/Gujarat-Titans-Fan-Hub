import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Calendar, ArrowLeft, Tag } from 'lucide-react';

const fullContent = {
  1: `Captain Shubman Gill walked out to bat at the 3rd over and never looked back. His innings of 89 off 52 balls was a masterclass in modern T20 batting — timing the ball to perfection, rotating strike intelligently, and unleashing six boundaries and four sixes at the right moments.

Gujarat Titans posted 198/4, a total that always looked competitive at Narendra Modi Stadium. Rashid Khan then turned the match on its head with figures of 3/24 in 4 overs, strangling SRH's middle order when they needed quick runs.

The win puts GT firmly in the top two of the IPL 2025 standings with 10 wins from 14 matches. Gill praised the team's collective effort in the post-match presentation: "Every single player contributed today. That's what this team is about."

SRH never quite recovered from losing their top three inside the powerplay. Their chase stalled at 175/8, 23 runs short of the target.`,

  2: `Rashid Khan has been the standout performer of IPL 2025, and GT management has officially named him Player of the Tournament at the halfway stage of the season.

In 8 matches, Rashid has taken 18 wickets at an economy of just 6.2 — numbers that no other bowler in the competition comes close to matching. His googly has been virtually unplayable, and batsmen across all franchises have struggled to read his variations.

"Rashid is not just a bowler — he's a match-winner and a leader," said GT head coach Ashish Nehra. "He changes the momentum of games single-handedly."

Rashid himself remained humble: "The team trusts me with the ball in big moments. I just try to do my job and make the team proud."

His best figures this season came against Mumbai Indians — 4/18 in a must-win game — a spell that is already being called one of the greatest in GT's history.`,

  3: `Gujarat Titans have officially inaugurated their new state-of-the-art training complex on the outskirts of Ahmedabad. Spread across 8 acres adjacent to the Narendra Modi Stadium precinct, the facility is now the permanent home base for GT's senior squad and development academy.

The complex includes three full-size practice pitches with drop-in capability, a high-performance gym equipped with biomechanical analysis stations, an indoor batting centre with bowling machines, a hydrotherapy and recovery pool, and a dedicated video analysis suite.

GT CEO Vikram Solanki called it a "landmark moment" for cricket infrastructure in Gujarat. "This facility is world-class. It will attract the best talent from across the state and help us build GT's identity for the next decade."

The GT Academy, which feeds directly into the IPL squad, will now conduct year-round training programmes for under-16 and under-19 cricketers from across Gujarat.`,

  4: `David Miller is in the form of his life, and the South African dasher credits Gujarat Titans' unique team culture for his purple patch this season.

After his 5th consecutive score of 40 or more, Miller spoke candidly about what makes GT different from other franchises he has played for. "The environment here is genuinely special. Everyone backs each other. The support staff, the captain, the management — they give you freedom to play your natural game without fear of failure."

Miller's strike rate this season stands at a staggering 162.9, and his finishing ability has won GT at least three close matches. His unbeaten 67 off 38 balls against RCB last week is being called the innings of the season.

The 35-year-old also spoke about his partnership with Shubman Gill: "Shubman reads the game brilliantly. When he's at the crease, it takes pressure off everyone else. We complement each other well."`,

  5: `The stage is set for what promises to be an epic clash at Narendra Modi Stadium as Gujarat Titans host Mumbai Indians in what could be a top-two decider in IPL 2025.

GT come into this match on the back of three consecutive wins and will be riding the crest of a wave. Mumbai Indians, however, are no pushovers — they have won five of their last six matches and boast one of the most experienced T20 line-ups in the world.

Key Battles to Watch:
Rohit Sharma vs Rashid Khan — the veteran opener against the world's best T20 bowler. This battle could define the match.
Shubman Gill vs Jasprit Bumrah — GT's captain against India's pace spearhead. Expect fireworks.
David Miller vs the MI death bowlers — Miller has been unstoppable in the powerplay phase.

GT have a strong home record at Motera — 7 wins from 9 home games this season. The crowd will be a 12th man. Tickets are sold out, and the atmosphere promises to be electric.

Toss will be crucial. Teams chasing have won 6 of the last 8 matches at this venue.`,

  6: `Sai Sudharsan has been one of the most exciting batting talents to emerge in Indian cricket in recent years, and his IPL 2025 season has sent a strong message to the national selectors.

With 723 runs from 14 innings at an average of 40.2 and a strike rate of 133.9, the elegant left-hander from Tamil Nadu has drawn comparisons to some of India's finest batsmen. His footwork, his ability to play both pace and spin, and his composure in pressure situations mark him out as a special talent.

GT head coach Ashish Nehra has been effusive in his praise: "Sai is as good a young batsman as I've seen in a long time. His technique is Test-match quality. He's just scratching the surface."

National selectors were spotted at the NM Stadium for GT's last two home games. An India A call-up looks imminent, with a senior debut potentially not far behind.

Sudharsan himself is keeping his feet on the ground: "I'm just focused on helping GT win. Individual milestones will take care of themselves if the team does well."`,
};

export default function NewsModal({ article, onClose }) {
  if (!article) return null;

  const content = fullContent[article.id] || article.excerpt;
  const paragraphs = content.split('\n\n').filter(Boolean);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.97 }}
          transition={{ duration: 0.3 }}
          onClick={e => e.stopPropagation()}
          className="bg-gradient-to-br from-[#0A1628] to-[#0d1e38] border border-[#1a2a4a] rounded-2xl w-full max-w-2xl max-h-[88vh] overflow-y-auto relative"
        >
          {/* Top accent */}
          <div className="h-1 bg-gradient-to-r from-[#E30613] via-[#FFD700] to-[#E30613] rounded-t-2xl sticky top-0" />

          {/* Hero image */}
          <div className="relative h-56 overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/40 to-transparent" />

            {/* Back button */}
            <button
              onClick={onClose}
              className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full hover:bg-[#E30613]/80 transition-colors"
            >
              <ArrowLeft size={13} /> Back
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/80 transition-colors"
            >
              <X size={16} />
            </button>

            {/* Category badge on image */}
            <span className="absolute bottom-4 left-4 text-[10px] font-black text-[#002D62] bg-gradient-to-r from-[#FFD700] to-[#FFA500] px-3 py-1 rounded-full uppercase tracking-wide flex items-center gap-1">
              <Tag size={9} /> {article.category}
            </span>
          </div>

          {/* Content */}
          <div className="px-6 pb-8 pt-5">
            <h2 className="text-white font-black text-xl leading-snug mb-3">
              {article.title}
            </h2>

            {/* Meta row */}
            <div className="flex items-center gap-4 mb-5 pb-5 border-b border-[#1a2a4a]">
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <Calendar size={12} className="text-[#E30613]" />
                {new Date(article.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </div>
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <Clock size={12} className="text-[#E30613]" />
                {article.readTime}
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center text-xs">🦁</div>
                <span className="text-gray-400 text-xs">GT Media</span>
              </div>
            </div>

            {/* Article body */}
            <div className="space-y-4">
              {paragraphs.map((para, i) => (
                <p key={i} className={`leading-relaxed text-sm ${i === 0 ? 'text-gray-200 text-base font-medium' : 'text-gray-400'}`}>
                  {para}
                </p>
              ))}
            </div>

            {/* Footer tag */}
            <div className="mt-8 pt-5 border-t border-[#1a2a4a] flex items-center justify-between">
              <span className="text-[#FFD700] text-xs font-bold bg-[#FFD700]/10 border border-[#FFD700]/20 px-3 py-1.5 rounded-full">
                🦁 Gujarat Titans Official
              </span>
              <button
                onClick={onClose}
                className="text-gray-500 text-xs hover:text-white transition-colors"
              >
                Close article
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}