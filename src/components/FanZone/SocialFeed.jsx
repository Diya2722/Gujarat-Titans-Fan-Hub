import { Twitter, Instagram, Heart, MessageCircle, Share2, Repeat2 } from 'lucide-react';

const posts = [
  {
    id: 1,
    platform: 'twitter',
    username: 'GujaratTitans',
    handle: '@GujaratTitans',
    avatar: '🦁',
    time: '2h ago',
    text: "What a performance last night! 🔥 Gill delivers AGAIN with a stunning 89*(52)! The Titans roar louder every match. #GTvsRCB #IPL2025 #AavaDe",
    likes: 12400,
    comments: 843,
    reposts: 2100,
  },
  {
    id: 2,
    platform: 'instagram',
    username: 'gujarat_titans',
    handle: '@gujarat_titans',
    avatar: '🏏',
    time: '5h ago',
    text: "Narendra Modi Stadium turned GOLD last night 💛💙 Thank you GT Army for the electric atmosphere! Swipe to see the best fan moments 📸 #GTArmy #GujaratTitans",
    likes: 31800,
    comments: 1245,
    reposts: null,
  },
  {
    id: 3,
    platform: 'twitter',
    username: 'GujaratTitans',
    handle: '@GujaratTitans',
    avatar: '🦁',
    time: '1d ago',
    text: "🚨 MATCH DAY ALERT 🚨\nGT vs MI | Today | 7:30 PM IST\nNM Stadium 🏟️ is ready. Are YOU? Wear your GT Blue & Gold and make some noise! 📣 #AavaDe",
    likes: 8900,
    comments: 512,
    reposts: 3400,
  },
  {
    id: 4,
    platform: 'instagram',
    username: 'gujarat_titans',
    handle: '@gujarat_titans',
    avatar: '🏏',
    time: '2d ago',
    text: "Rashid Khan. Pure magic. 🪄✨ 3 wickets, 24 runs. The spin wizard does it again! 🕷️ #RashidKhan #GujaratTitans #SpinWizard",
    likes: 54200,
    comments: 2100,
    reposts: null,
  },
];

function formatCount(n) {
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
  return n;
}

export default function SocialFeed() {
  return (
    <div className="space-y-4">
      <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
        <span className="w-1 h-4 bg-gradient-to-b from-[#E30613] to-[#FFD700] rounded-full inline-block" />
        GT Social Feed
      </h3>
      {posts.map((post) => {
        const isTwitter = post.platform === 'twitter';
        return (
          <div
            key={post.id}
            className="bg-gradient-to-br from-[#0A1628] to-[#0d1e38] border border-[#1a2a4a] rounded-xl p-4 hover:border-[#FFD700]/20 transition-all"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center text-lg flex-shrink-0">
                  {post.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-bold leading-none">{post.username}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{post.handle}</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-gray-600 text-[10px]">{post.time}</span>
                {isTwitter
                  ? <Twitter size={14} className="text-sky-400" />
                  : <Instagram size={14} className="text-pink-400" />
                }
              </div>
            </div>

            {/* Post text */}
            <p className="text-gray-300 text-xs leading-relaxed mb-3 whitespace-pre-line">{post.text}</p>

            {/* Engagement */}
            <div className="flex items-center gap-4 pt-2 border-t border-[#1a2a4a]">
              <button className="flex items-center gap-1 text-gray-500 hover:text-[#E30613] transition-colors text-xs">
                <Heart size={12} /> <span>{formatCount(post.likes)}</span>
              </button>
              <button className="flex items-center gap-1 text-gray-500 hover:text-sky-400 transition-colors text-xs">
                <MessageCircle size={12} /> <span>{formatCount(post.comments)}</span>
              </button>
              {isTwitter && post.reposts != null && (
                <button className="flex items-center gap-1 text-gray-500 hover:text-green-400 transition-colors text-xs">
                  <Repeat2 size={12} /> <span>{formatCount(post.reposts)}</span>
                </button>
              )}
              <button className="flex items-center gap-1 text-gray-500 hover:text-[#FFD700] transition-colors text-xs ml-auto">
                <Share2 size={12} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
