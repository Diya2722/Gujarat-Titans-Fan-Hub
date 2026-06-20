import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Heart, Send } from 'lucide-react';

const initialPosts = [
  { id: 1, name: 'Priya Patel', text: 'Gujarat Ka Sher! Can\'t wait for the next home match at Motera! 🦁🔥', likes: 124, time: '2h ago' },
  { id: 2, name: 'Arjun Mehta', text: 'Rashid Khan is an absolute magician with the ball. Best signing ever! 🌟', likes: 98, time: '5h ago' },
  { id: 3, name: 'Sneha Shah', text: 'Been a GT fan since day one. This team has so much heart! 💛💙', likes: 76, time: '1d ago' },
];

export default function FanWall() {
  const [posts, setPosts] = useState(initialPosts);
  const [text, setText] = useState('');
  const [liked, setLiked] = useState({});

  const handlePost = () => {
    if (!text.trim()) return;
    setPosts([{ id: Date.now(), name: 'You', text, likes: 0, time: 'now' }, ...posts]);
    setText('');
  };

  const toggleLike = (id) => {
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
    setPosts(prev => prev.map(p => p.id === id ? { ...p, likes: p.likes + (liked[id] ? -1 : 1) } : p));
  };

  return (
    <div className="bg-gradient-to-br from-[#0A1628] to-[#0d1e38] border border-[#1a2a4a] rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-5">
        <MessageCircle size={18} className="text-[#E30613]" />
        <h3 className="text-white font-bold text-sm uppercase tracking-wide">Fan Wall</h3>
      </div>

      <div className="flex gap-2 mb-5">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handlePost()}
          placeholder="Share your GT pride..."
          className="flex-1 bg-[#010B1F] border border-[#1a2a4a] rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD700]/50"
        />
        <button onClick={handlePost} className="bg-[#E30613] hover:bg-[#c0040f] text-white px-4 rounded-lg transition-colors">
          <Send size={16} />
        </button>
      </div>

      <div className="space-y-4 max-h-80 overflow-y-auto pr-1">
        {posts.map((post) => (
          <motion.div key={post.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="border-b border-[#1a2a4a] pb-3 last:border-0">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center text-[#002D62] text-xs font-bold">
                {post.name.charAt(0)}
              </div>
              <span className="text-white text-sm font-semibold">{post.name}</span>
              <span className="text-gray-500 text-xs">{post.time}</span>
            </div>
            <p className="text-gray-300 text-sm mb-2 pl-9">{post.text}</p>
            <button onClick={() => toggleLike(post.id)} className="pl-9 flex items-center gap-1 text-xs">
              <Heart size={13} className={liked[post.id] ? 'fill-[#E30613] text-[#E30613]' : 'text-gray-500'} />
              <span className={liked[post.id] ? 'text-[#E30613]' : 'text-gray-500'}>{post.likes}</span>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
