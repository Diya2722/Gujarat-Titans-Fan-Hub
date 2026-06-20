import { Heart } from 'lucide-react';
import PollWidget from './PollWidget';
import FanWall from './FanWall';
import AnthemPlayer from './AnthemPlayer';
import JoinArmyForm from './JoinArmyForm';
import SocialFeed from './SocialFeed';

export default function FanZoneSection() {
  return (
    <section className="py-20 bg-[#010B1F] relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-[#E30613]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#FFD700]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3">
            <Heart size={11} /> Fan Engagement
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white" style={{fontFamily:'Bebas Neue,Impact,sans-serif', letterSpacing:'0.02em'}}>
            FAN <span style={{background:'linear-gradient(90deg,#FFD700,#FFA500)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>ZONE</span>
          </h2>
          <p className="text-gray-400 mt-2">Where the GT Army comes alive</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="space-y-6">
            <PollWidget />
            <AnthemPlayer />
          </div>
          <FanWall />
          <div className="space-y-6">
            <JoinArmyForm />
            <SocialFeed />
          </div>
        </div>
      </div>
    </section>
  );
}
