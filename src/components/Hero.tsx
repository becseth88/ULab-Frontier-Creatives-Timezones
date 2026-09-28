import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 px-6 max-w-5xl mx-auto text-center pb-4">
      {/* Eyebrow badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8EDF2] shadow-xs mb-5">
        <svg className="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" strokeWidth="1.6"></circle>
          <path d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 000 18M12 3a14 14 0 010 18" strokeWidth="1.6"></path>
        </svg>
        <span className="font-serif text-[11px] tracking-widest uppercase font-semibold text-navy-slate">
          Presencing Across World Geographies
        </span>
      </div>

      {/* Main Title */}
      <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-navy tracking-tight leading-[1.15] mb-4">
        U.Lab 1x 2026 <span className="text-gold italic font-normal">·</span> Frontier Creatives
      </h1>

      {/* Subtitle */}
      <p className="font-serif text-xl sm:text-2xl text-navy-slate max-w-2xl mx-auto font-normal leading-relaxed mb-10">
        Our group is truly global with members spread across the world from Bali, Europe and eastern North America.
      </p>

      {/* Visual Journey Line from East to West with Delicate Gold Thread */}
      <div className="relative max-w-3xl mx-auto py-6">
        {/* Golden Thread */}
        <div className="h-[2px] w-full bg-[#F4BD3C] rounded-full relative shadow-xs"></div>

        {/* Waypoint pins with Gold Rings & Accent Palette */}
        <div className="flex justify-between items-center -mt-5 text-xs relative z-20">
          {/* Bali */}
          <div className="flex flex-col items-center group relative z-20">
            <div className="w-10 h-10 rounded-full bg-[#EBF4FA] border-2 border-coral/80 ring-3 ring-gold/30 flex items-center justify-center shadow-xs overflow-hidden transition-transform duration-300 group-hover:scale-110 relative">
              <svg className="w-full h-full" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="40%" cy="35%" id="soft-ocean-bali" r="65%">
                    <stop offset="0%" stopColor="#E2F1F8"></stop>
                    <stop offset="50%" stopColor="#C4E0ED"></stop>
                    <stop offset="90%" stopColor="#9BC2D8"></stop>
                    <stop offset="100%" stopColor="#82ADC5"></stop>
                  </radialGradient>
                  <radialGradient cx="32%" cy="28%" id="soft-light-bali" r="65%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65"></stop>
                    <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.05"></stop>
                    <stop offset="85%" stopColor="#2A4A60" stopOpacity="0.18"></stop>
                    <stop offset="100%" stopColor="#192F3E" stopOpacity="0.32"></stop>
                  </radialGradient>
                  <linearGradient id="soft-asia-land" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#98D8AA"></stop>
                    <stop offset="55%" stopColor="#79BFA1"></stop>
                    <stop offset="100%" stopColor="#5E9F83"></stop>
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" fill="url(#soft-ocean-bali)" r="48"></circle>
                <path d="M8 50 A42 12 0 0 0 92 50" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8"></path>
                <path d="M50 8 A12 42 0 0 0 50 92" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"></path>
                <path d="M22 18 C32 14, 52 12, 68 18 C78 24, 76 34, 66 38 C58 40, 52 32, 42 34 C36 36, 32 44, 26 40 C18 34, 16 22, 22 18 Z" fill="url(#soft-asia-land)" opacity="0.88"></path>
                <path d="M68 30 C72 26, 75 28, 73 35 C70 40, 66 36, 68 30 Z" fill="url(#soft-asia-land)" opacity="0.88"></path>
                <path d="M38 48 C42 46, 46 48, 48 52 C46 55, 40 54, 38 48 Z" fill="url(#soft-asia-land)" opacity="0.85"></path>
                <path d="M48 53 C54 51, 62 53, 66 56 C60 58, 52 56, 48 53 Z" fill="url(#soft-asia-land)" opacity="0.85"></path>
                <circle cx="52" cy="54" fill="#FF8E72" r="2.8" stroke="#FFFFFF" strokeWidth="1"></circle>
                <path d="M56 64 C66 60, 78 64, 82 74 C78 84, 64 86, 56 80 C50 74, 50 68, 56 64 Z" fill="url(#soft-asia-land)" opacity="0.85"></path>
                <circle cx="50" cy="50" fill="url(#soft-light-bali)" r="48"></circle>
                <circle cx="50" cy="50" fill="none" r="48" stroke="rgba(255,142,114,0.35)" strokeWidth="1.2"></circle>
              </svg>
            </div>
            <span className="mt-2 font-serif font-semibold text-navy text-sm">Bali</span>
            <span className="text-[11px] font-mono text-navy-muted">UTC+8</span>
          </div>

          {/* Line dot */}
          <div className="hidden sm:block w-2.5 h-2.5 rounded-full bg-gold border-2 border-white shadow-xs relative z-20"></div>

          {/* Germany */}
          <div className="flex flex-col items-center group relative z-20">
            <div className="w-10 h-10 rounded-full bg-[#EBF4FA] border-2 border-aqua/80 ring-3 ring-gold/30 flex items-center justify-center shadow-xs overflow-hidden transition-transform duration-300 group-hover:scale-110 relative">
              <svg className="w-full h-full" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="40%" cy="35%" id="soft-ocean-ger" r="65%">
                    <stop offset="0%" stopColor="#E2F1F8"></stop>
                    <stop offset="50%" stopColor="#C4E0ED"></stop>
                    <stop offset="90%" stopColor="#9BC2D8"></stop>
                    <stop offset="100%" stopColor="#82ADC5"></stop>
                  </radialGradient>
                  <radialGradient cx="32%" cy="28%" id="soft-light-ger" r="65%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65"></stop>
                    <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.05"></stop>
                    <stop offset="85%" stopColor="#2A4A60" stopOpacity="0.18"></stop>
                    <stop offset="100%" stopColor="#192F3E" stopOpacity="0.32"></stop>
                  </radialGradient>
                  <linearGradient id="soft-europe-land" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#98D8AA"></stop>
                    <stop offset="55%" stopColor="#79BFA1"></stop>
                    <stop offset="100%" stopColor="#5E9F83"></stop>
                  </linearGradient>
                  <linearGradient id="soft-africa-land" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#E8CD8A"></stop>
                    <stop offset="50%" stopColor="#8EC79E"></stop>
                    <stop offset="100%" stopColor="#6DAF80"></stop>
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" fill="url(#soft-ocean-ger)" r="48"></circle>
                <path d="M8 50 A42 12 0 0 0 92 50" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8"></path>
                <path d="M50 8 A12 42 0 0 0 50 92" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"></path>
                <path d="M44 14 C48 10, 54 12, 56 22 C52 26, 46 22, 44 14 Z" fill="url(#soft-europe-land)" opacity="0.85"></path>
                <path d="M36 24 C40 22, 42 26, 40 30 C37 30, 35 26, 36 24 Z" fill="url(#soft-europe-land)" opacity="0.85"></path>
                <path d="M38 32 C48 26, 64 26, 72 32 C74 40, 64 46, 54 44 C46 48, 38 44, 38 32 Z" fill="url(#soft-europe-land)" opacity="0.88"></path>
                <circle cx="51" cy="35" fill="#4ECDC4" r="2.8" stroke="#FFFFFF" strokeWidth="1"></circle>
                <path d="M30 48 C42 46, 70 46, 76 56 C74 74, 58 88, 48 84 C38 78, 30 64, 30 48 Z" fill="url(#soft-africa-land)" opacity="0.85"></path>
                <circle cx="50" cy="50" fill="url(#soft-light-ger)" r="48"></circle>
                <circle cx="50" cy="50" fill="none" r="48" stroke="rgba(78,205,196,0.35)" strokeWidth="1.2"></circle>
              </svg>
            </div>
            <span className="mt-2 font-serif font-semibold text-navy text-sm">Germany</span>
            <span className="text-[11px] font-mono text-navy-muted">UTC+1</span>
          </div>

          {/* Line dot */}
          <div className="hidden sm:block w-2.5 h-2.5 rounded-full bg-gold border-2 border-white shadow-xs relative z-20"></div>

          {/* Portugal */}
          <div className="flex flex-col items-center group relative z-20">
            <div className="w-10 h-10 rounded-full bg-[#EBF4FA] border-2 border-violet/80 ring-3 ring-gold/30 flex items-center justify-center shadow-xs overflow-hidden transition-transform duration-300 group-hover:scale-110 relative">
              <svg className="w-full h-full" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="40%" cy="35%" id="soft-ocean-pt" r="65%">
                    <stop offset="0%" stopColor="#E2F1F8"></stop>
                    <stop offset="50%" stopColor="#C4E0ED"></stop>
                    <stop offset="90%" stopColor="#9BC2D8"></stop>
                    <stop offset="100%" stopColor="#82ADC5"></stop>
                  </radialGradient>
                  <radialGradient cx="32%" cy="28%" id="soft-light-pt" r="65%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65"></stop>
                    <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.05"></stop>
                    <stop offset="85%" stopColor="#2A4A60" stopOpacity="0.18"></stop>
                    <stop offset="100%" stopColor="#192F3E" stopOpacity="0.32"></stop>
                  </radialGradient>
                  <linearGradient id="soft-pt-landmass" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#98D8AA"></stop>
                    <stop offset="55%" stopColor="#79BFA1"></stop>
                    <stop offset="100%" stopColor="#5E9F83"></stop>
                  </linearGradient>
                  <linearGradient id="soft-pt-africa" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#E8CD8A"></stop>
                    <stop offset="45%" stopColor="#8EC79E"></stop>
                    <stop offset="100%" stopColor="#6DAF80"></stop>
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" fill="url(#soft-ocean-pt)" r="48"></circle>
                <path d="M8 50 A42 12 0 0 0 92 50" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8"></path>
                <path d="M50 8 A12 42 0 0 0 50 92" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"></path>
                <path d="M50 18 C56 16, 60 22, 58 28 C52 28, 50 22, 50 18 Z" fill="url(#soft-pt-landmass)" opacity="0.85"></path>
                <path d="M52 28 C64 26, 78 28, 84 34 C82 42, 70 46, 60 42 C54 44, 48 38, 52 28 Z" fill="url(#soft-pt-landmass)" opacity="0.88"></path>
                <path d="M44 38 C52 36, 58 38, 56 46 C50 50, 44 48, 44 38 Z" fill="url(#soft-pt-landmass)" opacity="0.85"></path>
                <circle cx="45" cy="43" fill="#A78BFA" r="2.8" stroke="#FFFFFF" strokeWidth="1"></circle>
                <path d="M48 52 C58 50, 78 52, 82 64 C78 82, 60 88, 52 82 C46 72, 44 58, 48 52 Z" fill="url(#soft-pt-africa)" opacity="0.85"></path>
                <circle cx="50" cy="50" fill="url(#soft-light-pt)" r="48"></circle>
                <circle cx="50" cy="50" fill="none" r="48" stroke="rgba(167,139,250,0.35)" strokeWidth="1.2"></circle>
              </svg>
            </div>
            <span className="mt-2 font-serif font-semibold text-navy text-sm">Portugal</span>
            <span className="text-[11px] font-mono text-navy-muted">UTC+0</span>
          </div>

          {/* Line dot */}
          <div className="hidden sm:block w-2.5 h-2.5 rounded-full bg-gold border-2 border-white shadow-xs relative z-20"></div>

          {/* Eastern North America */}
          <div className="flex flex-col items-center group relative z-20">
            <div className="w-10 h-10 rounded-full bg-[#EBF4FA] border-2 border-gold/80 ring-3 ring-gold/30 flex items-center justify-center shadow-xs overflow-hidden transition-transform duration-300 group-hover:scale-110 relative">
              <svg className="w-full h-full" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="40%" cy="35%" id="soft-ocean-na" r="65%">
                    <stop offset="0%" stopColor="#E2F1F8"></stop>
                    <stop offset="50%" stopColor="#C4E0ED"></stop>
                    <stop offset="90%" stopColor="#9BC2D8"></stop>
                    <stop offset="100%" stopColor="#82ADC5"></stop>
                  </radialGradient>
                  <radialGradient cx="32%" cy="28%" id="soft-light-na" r="65%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65"></stop>
                    <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.05"></stop>
                    <stop offset="85%" stopColor="#2A4A60" stopOpacity="0.18"></stop>
                    <stop offset="100%" stopColor="#192F3E" stopOpacity="0.32"></stop>
                  </radialGradient>
                  <linearGradient id="soft-na-land" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#98D8AA"></stop>
                    <stop offset="55%" stopColor="#79BFA1"></stop>
                    <stop offset="100%" stopColor="#5E9F83"></stop>
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" fill="url(#soft-ocean-na)" r="48"></circle>
                <path d="M8 50 A42 14 0 0 0 92 50" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8"></path>
                <path d="M14 30 A42 10 0 0 0 86 30" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8"></path>
                <path d="M14 70 A42 10 0 0 0 86 70" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8"></path>
                <path d="M50 8 A14 42 0 0 0 50 92" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"></path>
                <path d="M18 20 C28 14, 52 14, 62 25 C60 32, 54 38, 50 46 C40 48, 30 44, 22 35 C17 28, 15 23, 18 20 Z" fill="url(#soft-na-land)" opacity="0.88"></path>
                <ellipse cx="42" cy="30" fill="#C4E0ED" rx="2.5" ry="1.5"></ellipse>
                <path d="M48 44 C52 47, 50 51, 46 53 C44 49, 47 46, 48 44 Z" fill="url(#soft-na-land)" opacity="0.85"></path>
                <path d="M50 54 C60 54, 68 62, 64 74 C58 82, 50 80, 46 70 C44 62, 46 56, 50 54 Z" fill="url(#soft-na-land)" opacity="0.88"></path>
                <circle cx="54" cy="33" fill="#F4BD3C" r="3" stroke="#FFFFFF" strokeWidth="1"></circle>
                <circle cx="50" cy="50" fill="url(#soft-light-na)" r="48"></circle>
                <circle cx="50" cy="50" fill="none" r="48" stroke="rgba(244,189,60,0.4)" strokeWidth="1.2"></circle>
              </svg>
            </div>
            <span className="mt-2 font-serif font-semibold text-navy text-sm">Eastern N. America</span>
            <span className="text-[11px] font-mono text-navy-muted">UTC-5</span>
          </div>
        </div>
      </div>
    </section>
  );
};
