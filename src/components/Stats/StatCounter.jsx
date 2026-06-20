import { useCountUp } from '../../hooks/useCountUp';

export default function StatCounter({ end, label, suffix = '', icon, color = '#FFD700' }) {
  const [count, ref] = useCountUp(end, 1800);
  return (
    <div ref={ref} className="bg-gradient-to-br from-[#0A1628] to-[#0d1e38] border border-[#1a2a4a] rounded-2xl p-6 text-center hover:border-[#FFD700]/30 transition-all duration-300">
      {icon && <div className="text-2xl mb-2">{icon}</div>}
      <div className="font-black text-4xl lg:text-5xl" style={{color, fontFamily:'Bebas Neue,Impact,sans-serif'}}>
        {count}{suffix}
      </div>
      <div className="text-gray-400 text-xs font-semibold tracking-widest uppercase mt-2">{label}</div>
    </div>
  );
}
