import React, { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';

export const Header: React.FC = () => {
  const [utcTime, setUtcTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const h = String(now.getUTCHours()).padStart(2, '0');
      const m = String(now.getUTCMinutes()).padStart(2, '0');
      const s = String(now.getUTCSeconds()).padStart(2, '0');
      setUtcTime(`${h}:${m}:${s} UTC`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="border-b border-[#E8EDF2] bg-[#FCFCFD]/90 backdrop-blur-md sticky top-0 z-30 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-navy text-[#FFE66D] flex items-center justify-center text-[11px] font-bold shadow-xs select-none">
            U
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-serif font-bold text-navy text-sm sm:text-base">Frontier Creatives</span>
            <span className="text-[11px] font-sans font-medium text-navy-muted hidden sm:inline">U.Lab 1x 2026 Cohort</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs font-serif font-medium text-navy-slate">
          <a href="#ecology-of-influences" className="hover:text-navy transition-colors">Ecology of Influences</a>
          <a href="#live-locations" className="hover:text-navy transition-colors">Four Locations</a>
          <a href="#overlaps" className="hover:text-navy transition-colors">World Clock + Time Zone Converter</a>
          <a href="#constellations" className="hover:text-navy transition-colors">Meeting Constellations</a>
        </nav>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E8EDF2] shadow-2xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <Globe className="w-3.5 h-3.5 text-navy-muted" />
          <span className="font-mono text-[11px] text-navy font-semibold">{utcTime || '12:00:00 UTC'}</span>
        </div>
      </div>
    </header>
  );
};
