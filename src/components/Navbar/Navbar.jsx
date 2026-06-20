import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Ticket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GTStore from '../GTStore/GTStore';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Squad', href: '/players' },
  { name: 'Matches', href: '/matches' },
  { name: 'Stats', href: '/stats' },
  { name: 'News', href: '/news' },
  { name: 'Fan Zone', href: '/fanzone' },
  { name: 'Gallery', href: '/gallery' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [storeOpen, setStoreOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#000D1F]/95 backdrop-blur-xl border-b border-[#1a2a4a] shadow-2xl shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <div className="h-0.5 bg-gradient-to-r from-[#E30613] via-[#FFD700] to-[#E30613]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img src="/gt-logo.png" alt="GT Logo" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <div className="font-display text-base text-white tracking-wider leading-none" style={{fontFamily:'Bebas Neue, Impact, sans-serif'}}>GUJARAT</div>
              <div className="font-display text-base leading-none" style={{fontFamily:'Bebas Neue, Impact, sans-serif', background:'linear-gradient(90deg,#FFD700,#FFA500)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>TITANS</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative px-3 py-2 text-sm font-semibold tracking-wide transition-all duration-200 rounded-md group ${
                  location.pathname === link.href ? 'text-[#FFD700]' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#E30613] to-[#FFD700] transform transition-transform duration-200 ${
                  location.pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <a href="/tickets" className="flex items-center gap-1.5 px-4 py-2 bg-[#E30613] hover:bg-[#c0040f] text-white text-sm font-bold rounded-lg transition-all hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-0.5">
              <Ticket size={14} /> Tickets
            </a>
            <button
              onClick={() => setStoreOpen(true)}
              className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#002D62] text-sm font-bold rounded-lg transition-all hover:shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-0.5"
            >
              <ShoppingBag size={14} /> GT Store
            </button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg text-white hover:bg-white/10">
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#000D1F]/98 backdrop-blur-xl border-t border-[#1a2a4a]"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all ${
                    location.pathname === link.href ? 'text-[#FFD700] bg-[#FFD700]/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 flex gap-2">
                <a href="/tickets" className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#E30613] text-white text-sm font-bold rounded-lg">
                  <Ticket size={14} /> Tickets
                </a>
                <button
                  onClick={() => setStoreOpen(true)}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#002D62] text-sm font-bold rounded-lg"
                >
                  <ShoppingBag size={14} /> GT Store
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <GTStore isOpen={storeOpen} onClose={() => setStoreOpen(false)} />
    </motion.nav>
  );
}
