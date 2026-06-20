import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Facebook, MapPin, Mail, Phone } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Squad', href: '/players' },
  { name: 'Matches', href: '/matches' },
  { name: 'Stats', href: '/stats' },
  { name: 'News', href: '/news' },
];

const fanLinks = [
  { name: 'Fan Zone', href: '/fanzone' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Membership', href: '/fanzone' },
  { name: 'GT Store', href: '#shop' },
  { name: 'Tickets', href: '/tickets' },
];

export default function Footer() {
  return (
    <footer className="bg-[#000814] border-t border-[#1a2a4a] relative overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-[#002D62] via-[#E30613] to-[#FFD700]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/gt-logo.png" alt="GT Logo" className="w-11 h-11 object-contain" />
              <div>
                <div className="font-display text-base text-white tracking-wider leading-none" style={{fontFamily:'Bebas Neue,Impact,sans-serif'}}>GUJARAT</div>
                <div className="font-display text-base leading-none" style={{fontFamily:'Bebas Neue,Impact,sans-serif', background:'linear-gradient(90deg,#FFD700,#FFA500)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>TITANS</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">Gujarat Ka Sher. The official fan hub of Gujarat Titans — celebrating passion, pride, and the roar of the GT Army.</p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-[#0A1628] border border-[#1a2a4a] flex items-center justify-center text-gray-400 hover:text-[#FFD700] hover:border-[#FFD700]/40 transition-all">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 text-sm hover:text-[#FFD700] transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fan Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Fan Hub</h4>
            <ul className="space-y-2.5">
              {fanLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 text-sm hover:text-[#FFD700] transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={15} className="text-[#E30613] mt-0.5 flex-shrink-0" />
                Narendra Modi Stadium, Motera, Ahmedabad, Gujarat 380005
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={15} className="text-[#E30613] flex-shrink-0" /> fanclub@gujarattitans.com
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={15} className="text-[#E30613] flex-shrink-0" /> +91 79 6000 0000
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1a2a4a] mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Gujarat Titans Fan Hub. All rights reserved. This is an unofficial fan website.</p>
          <p className="text-[#FFD700] text-xs font-bold tracking-wide">🦁 Proudly Supporting Gujarat Titans</p>
        </div>
      </div>
    </footer>
  );
}
