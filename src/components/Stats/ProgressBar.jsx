import { motion } from 'framer-motion';

export default function ProgressBar({ label, value, max = 100, color = '#FFD700', suffix = '' }) {
  const pct = (value / max) * 100;
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-gray-300 text-sm font-medium">{label}</span>
        <span className="text-white text-sm font-bold">{value}{suffix}</span>
      </div>
      <div className="h-2.5 bg-[#010B1F] rounded-full overflow-hidden border border-[#1a2a4a]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}aa)` }}
        />
      </div>
    </div>
  );
}
