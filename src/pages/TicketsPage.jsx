import { motion } from 'framer-motion';
import { Ticket, MapPin, Calendar, Clock, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import PageHero from '../components/PageHero';

const matches = [
  {
    id: 1,
    opponent: 'Mumbai Indians',
    opponentShort: 'MI',
    opponentColor: '#004BA0',
    date: 'Sep 20, 2025',
    day: 'Saturday',
    time: '7:30 PM IST',
    venue: 'Narendra Modi Stadium, Ahmedabad',
    isHome: true,
    categories: [
      { name: 'General Stand', price: '800', available: true },
      { name: 'Premium Stand', price: '1,500', available: true },
      { name: 'Corporate Box', price: '5,000', available: false },
    ],
    bookingLink: 'https://www.bookmyshow.com',
  },
  {
    id: 2,
    opponent: 'Chennai Super Kings',
    opponentShort: 'CSK',
    opponentColor: '#F9CD05',
    date: 'Sep 25, 2025',
    day: 'Thursday',
    time: '3:30 PM IST',
    venue: 'MA Chidambaram Stadium, Chennai',
    isHome: false,
    categories: [
      { name: 'General Stand', price: '700', available: true },
      { name: 'Premium Stand', price: '1,200', available: true },
      { name: 'VIP Lounge', price: '4,500', available: true },
    ],
    bookingLink: 'https://www.bookmyshow.com',
  },
  {
    id: 3,
    opponent: 'Kolkata Knight Riders',
    opponentShort: 'KKR',
    opponentColor: '#3A225D',
    date: 'Oct 05, 2025',
    day: 'Sunday',
    time: '7:30 PM IST',
    venue: 'Eden Gardens, Kolkata',
    isHome: false,
    categories: [
      { name: 'General Stand', price: '600', available: true },
      { name: 'Premium Stand', price: '1,400', available: false },
      { name: 'VIP Lounge', price: '4,000', available: true },
    ],
    bookingLink: 'https://www.bookmyshow.com',
  },
  {
    id: 4,
    opponent: 'Rajasthan Royals',
    opponentShort: 'RR',
    opponentColor: '#E91C8B',
    date: 'Oct 12, 2025',
    day: 'Sunday',
    time: '7:30 PM IST',
    venue: 'Narendra Modi Stadium, Ahmedabad',
    isHome: true,
    categories: [
      { name: 'General Stand', price: '800', available: true },
      { name: 'Premium Stand', price: '1,500', available: true },
      { name: 'Corporate Box', price: '5,000', available: true },
    ],
    bookingLink: 'https://www.bookmyshow.com',
  },
];

const perks = [
  { icon: '🦁', title: 'GT Welcome Kit', desc: 'Every ticket includes a GT flag and wristband' },
  { icon: '🎵', title: 'Live DJ and Anthem', desc: 'Pre-match show with GT anthem performances' },
  { icon: '🍔', title: 'Food Concessions', desc: 'Wide range of local and fast food inside the stadium' },
  { icon: '📸', title: 'Fan Zone Access', desc: 'Photo booths, selfie zones, and player cutouts' },
];

export default function TicketsPage() {
  return (
    <div>
      <PageHero
        title="BUY TICKETS"
        subtitle="Secure your seat — be part of the roar"
        breadcrumb="Tickets"
        icon={Ticket}
      />

      <section className="py-16 bg-[#010B1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Trust banner */}
          <div className="flex flex-wrap items-center justify-center gap-6 bg-gradient-to-r from-[#0A1628] to-[#0d1e38] border border-[#1a2a4a] rounded-xl px-6 py-4 mb-12">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <ShieldCheck size={16} className="text-[#FFD700]" /> Secure and Official Booking
            </div>
            <div className="w-px h-4 bg-[#1a2a4a] hidden sm:block" />
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <CheckCircle size={16} className="text-green-400" /> Instant Confirmation
            </div>
            <div className="w-px h-4 bg-[#1a2a4a] hidden sm:block" />
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Ticket size={16} className="text-[#E30613]" /> E-Tickets Delivered
            </div>
          </div>

          {/* Match cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {matches.map((match, i) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-[#0A1628] to-[#0d1e38] border border-[#1a2a4a] hover:border-[#FFD700]/20 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <div className="h-1 bg-gradient-to-r from-[#E30613] to-[#FFD700]" />

                <div className="p-6">
                  {/* Teams row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center text-2xl">
                        🦁
                      </div>
                      <span className="text-gray-400 font-bold text-sm">VS</span>
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black border-2"
                        style={{
                          background: match.opponentColor + '22',
                          borderColor: match.opponentColor + '66',
                          color: match.opponentColor,
                        }}
                      >
                        {match.opponentShort}
                      </div>
                    </div>
                    {match.isHome && (
                      <span className="text-xs font-bold text-[#E30613] bg-[#E30613]/10 border border-[#E30613]/30 px-2 py-1 rounded">
                        HOME
                      </span>
                    )}
                  </div>

                  <h3
                    className="text-white font-black text-lg mb-3"
                    style={{ fontFamily: 'Bebas Neue,Impact,sans-serif', letterSpacing: '0.03em' }}
                  >
                    GT vs {match.opponent}
                  </h3>

                  <div className="space-y-1.5 mb-5">
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                      <Calendar size={12} className="text-[#E30613]" />
                      <span>{match.day}, {match.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                      <Clock size={12} className="text-[#E30613]" />
                      <span>{match.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                      <MapPin size={12} className="text-[#E30613]" />
                      <span>{match.venue}</span>
                    </div>
                  </div>

                  {/* Seat categories */}
                  <div className="space-y-2 mb-5">
                    {match.categories.map((cat) => (
                      <div
                        key={cat.name}
                        className="flex items-center justify-between bg-[#010B1F] border border-[#1a2a4a] rounded-lg px-3 py-2"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-white text-xs font-semibold">{cat.name}</span>
                          {!cat.available && (
                            <span className="text-[10px] text-red-400 font-bold">SOLD OUT</span>
                          )}
                        </div>
                        <span
                          className={
                            'text-sm font-black ' +
                            (cat.available ? 'text-[#FFD700]' : 'text-gray-600')
                          }
                        >
                          Rs. {cat.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Two action buttons */}
                  <div className="flex gap-2">
                    <a
                      href={match.bookingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-gradient-to-r from-[#E30613] to-[#ff1a26] text-white text-xs font-black rounded-xl hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-0.5 transition-all"
                    >
                      <Ticket size={13} /> Book on BookMyShow
                    </a>
                    <a
                      href="https://www.iplt20.com/tickets"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-[#010B1F] border border-[#1a2a4a] hover:border-[#FFD700]/40 text-gray-300 text-xs font-bold rounded-xl hover:-translate-y-0.5 transition-all"
                    >
                      <ExternalLink size={13} /> IPL Site
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Perks section */}
          <h2
            className="text-2xl font-black text-white mb-6 text-center"
            style={{ fontFamily: 'Bebas Neue,Impact,sans-serif', letterSpacing: '0.03em' }}
          >
            WHAT IS INCLUDED WITH YOUR{' '}
            <span style={{ color: '#FFD700' }}>TICKET</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-gradient-to-br from-[#0A1628] to-[#0d1e38] border border-[#1a2a4a] rounded-xl p-5 text-center hover:border-[#FFD700]/20 transition-all"
              >
                <div className="text-3xl mb-3">{perk.icon}</div>
                <h4 className="text-white font-bold text-sm mb-1">{perk.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}