import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Music } from 'lucide-react';

export default function AnthemPlayer() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [showVolume, setShowVolume] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      setProgress((video.currentTime / video.duration) * 100 || 0);
    };
    const onLoaded = () => setDuration(video.duration);
    const onEnded = () => setPlaying(false);

    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('loadedmetadata', onLoaded);
    video.addEventListener('ended', onEnded);
    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('loadedmetadata', onLoaded);
      video.removeEventListener('ended', onEnded);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.pause();
    } else {
      video.play();
    }
    setPlaying(!playing);
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    if (!video) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    video.currentTime = ratio * video.duration;
  };

  const handleVolume = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) videoRef.current.volume = val;
    setMuted(val === 0);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !muted;
    setMuted(!muted);
  };

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.requestFullscreen) video.requestFullscreen();
    else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
  };

  const fmt = (s) => {
    if (!s || isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gradient-to-br from-[#002D62] to-[#0A1628] border border-[#1a2a4a] rounded-2xl overflow-hidden relative">
      {/* Glow */}
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#FFD700]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-2 px-5 pt-5 pb-3 relative">
        <Music size={16} className="text-[#FFD700]" />
        <h3 className="text-white font-bold text-sm uppercase tracking-wide">GT Anthem</h3>
        <span className="ml-auto text-[10px] font-bold text-[#FFD700] bg-[#FFD700]/10 border border-[#FFD700]/20 px-2 py-0.5 rounded-full">
          🦁 Official
        </span>
      </div>

      {/* Video */}
      <div className="relative mx-4 rounded-xl overflow-hidden bg-black" style={{ aspectRatio: '16/9' }}>
        <video
          ref={videoRef}
          src="/GT.mp4"
          className="w-full h-full object-cover"
          playsInline
          preload="metadata"
          onClick={togglePlay}
          style={{ cursor: 'pointer' }}
        />

        {/* Play overlay when paused */}
        {!playing && (
          <div
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/30"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center shadow-2xl shadow-yellow-500/40 hover:scale-110 transition-transform">
              <Play size={24} className="text-[#002D62] ml-1" fill="currentColor" />
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="px-4 pb-5 pt-3 relative space-y-2">
        {/* Song info */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white text-xs font-bold">Aavi Gaiyo Toofan</p>
            <p className="text-gray-400 text-[10px]">Official Gujarat Titans Anthem</p>
          </div>
          <button
            onClick={handleFullscreen}
            className="p-1.5 rounded-lg text-gray-400 hover:text-[#FFD700] hover:bg-[#FFD700]/10 transition-colors"
            title="Fullscreen"
          >
            <Maximize2 size={14} />
          </button>
        </div>

        {/* Progress bar */}
        <div
          className="h-1.5 bg-[#010B1F] rounded-full overflow-hidden cursor-pointer group"
          onClick={handleSeek}
        >
          <div
            className="h-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full relative transition-all"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Time + volume */}
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-[10px] font-mono">
            {fmt(currentTime)} / {fmt(duration)}
          </span>

          <div className="flex items-center gap-2 relative">
            {showVolume && (
              <input
                type="range" min="0" max="1" step="0.05"
                value={muted ? 0 : volume}
                onChange={handleVolume}
                className="w-16 h-1 accent-[#FFD700] cursor-pointer"
              />
            )}
            <button
              onClick={() => { toggleMute(); setShowVolume(v => !v); }}
              className="p-1.5 rounded-lg text-gray-400 hover:text-[#FFD700] hover:bg-[#FFD700]/10 transition-colors"
            >
              {muted || volume === 0 ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>

            <button
              onClick={togglePlay}
              className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center text-[#002D62] hover:scale-105 transition-transform shadow-lg shadow-yellow-500/20"
            >
              {playing
                ? <Pause size={14} fill="currentColor" />
                : <Play size={14} fill="currentColor" className="ml-0.5" />
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}