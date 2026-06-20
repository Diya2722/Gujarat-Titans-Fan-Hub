import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#010B1F] flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-9xl font-black text-transparent mb-2"
            style={{
              fontFamily: 'Bebas Neue,Impact,sans-serif',
              background: 'linear-gradient(90deg,#FFD700,#FFA500)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            404
          </div>
          <div className="text-6xl mb-6">🦁</div>
          <h2 className="text-2xl font-black text-white mb-2" style={{fontFamily:'Bebas Neue,Impact,sans-serif', letterSpacing:'0.05em'}}>
            PAGE NOT FOUND
          </h2>
          <p className="text-gray-400 mb-8 max-w-sm mx-auto">
            Looks like this page went out of bounds. The GT Army couldn't find it either.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#E30613] to-[#ff1a26] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-red-500/30 transition-all"
          >
            <Home size={16} /> Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
