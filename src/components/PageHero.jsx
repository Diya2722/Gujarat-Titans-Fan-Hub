import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function PageHero({ title, subtitle, breadcrumb, icon: Icon }) {
  return (
    <div
      className="relative pt-24 pb-10 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #002D62 0%, #001636 50%, #010B1F 100%)' }}
    >
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#E30613]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#FFD700]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#010B1F] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-4">
          <Link to="/" className="hover:text-[#FFD700] transition-colors flex items-center gap-1">
            <Home size={11} /> Home
          </Link>
          <ChevronRight size={11} className="text-gray-600" />
          <span className="text-[#FFD700] font-semibold">{breadcrumb}</span>
        </div>

        {/* Title */}
        <div className="flex items-center gap-4">
          {Icon && (
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E30613]/20 to-[#FFD700]/10 border border-[#FFD700]/20 flex items-center justify-center flex-shrink-0">
              <Icon size={22} className="text-[#FFD700]" />
            </div>
          )}
          <div>
            <h1
              className="text-4xl lg:text-5xl font-black text-white leading-none"
              style={{ fontFamily: 'Bebas Neue,Impact,sans-serif', letterSpacing: '0.03em' }}
            >
              {title}
            </h1>
            {subtitle && <p className="text-gray-400 text-sm mt-1">{subtitle}</p>}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="mt-6 h-px bg-gradient-to-r from-[#E30613] via-[#FFD700] to-transparent" />
      </div>
    </div>
  );
}
