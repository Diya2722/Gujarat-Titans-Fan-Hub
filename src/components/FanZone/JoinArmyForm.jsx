import { useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, CheckCircle2 } from 'lucide-react';

export default function JoinArmyForm() {
  const [form, setForm] = useState({ name: '', email: '', city: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-gradient-to-br from-[#E30613]/10 to-[#0A1628] border border-[#E30613]/30 rounded-2xl p-6 relative overflow-hidden">
      <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#E30613]/10 rounded-full blur-2xl" />
      <div className="flex items-center gap-2 mb-2 relative">
        <UserPlus size={18} className="text-[#E30613]" />
        <h3 className="text-white font-bold text-sm uppercase tracking-wide">Join GT Army</h3>
      </div>
      <p className="text-gray-400 text-sm mb-5 relative">Become an official member and get exclusive perks, early ticket access, and merch discounts.</p>

      {submitted ? (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-8 text-center relative">
          <CheckCircle2 size={40} className="text-[#FFD700] mb-3" />
          <p className="text-white font-bold">Welcome to the GT Army, {form.name.split(' ')[0]}! 🦁</p>
          <p className="text-gray-400 text-sm mt-1">Check your inbox for confirmation.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3 relative">
          <input
            type="text" placeholder="Full Name" value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="w-full bg-[#010B1F] border border-[#1a2a4a] rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E30613]/50"
          />
          <input
            type="email" placeholder="Email Address" value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="w-full bg-[#010B1F] border border-[#1a2a4a] rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E30613]/50"
          />
          <input
            type="text" placeholder="City" value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            className="w-full bg-[#010B1F] border border-[#1a2a4a] rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E30613]/50"
          />
          <button type="submit" className="w-full bg-gradient-to-r from-[#E30613] to-[#ff1a26] text-white font-bold text-sm py-3 rounded-lg hover:shadow-lg hover:shadow-red-500/30 transition-all uppercase tracking-wide">
            Join Now — It's Free
          </button>
        </form>
      )}
    </div>
  );
}
