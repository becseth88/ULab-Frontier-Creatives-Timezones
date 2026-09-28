import React from 'react';
import { CONSTELLATIONS } from '../data/constellations';
import { ConstellationOption } from '../types';

interface GroupConstellationsProps {
  onSelectConstellation?: (constellation: ConstellationOption) => void;
}

const CONFETTI_PIECES = [
  { id: 1, top: '4%', left: '6%', type: 'star' as const, color: '#FFD166', rot: 15, size: 14, opacity: 0.55, delay: '0s', duration: '3.2s' },
  { id: 2, top: '7%', left: '22%', type: 'rect' as const, color: '#FF6B6B', rot: -28, size: 8, opacity: 0.45, delay: '0.4s', duration: '3.8s' },
  { id: 3, top: '14%', left: '8%', type: 'circle' as const, color: '#4ECDC4', rot: 0, size: 7, opacity: 0.5, delay: '0.8s', duration: '2.9s' },
  { id: 4, top: '18%', left: '28%', type: 'squiggle' as const, color: '#E07A5F', rot: 18, size: 16, opacity: 0.45, delay: '1.2s', duration: '3.5s' },
  { id: 5, top: '23%', left: '6%', type: 'diamond' as const, color: '#9B5DE5', rot: 40, size: 8, opacity: 0.45, delay: '0.2s', duration: '3.1s' },
  { id: 6, top: '4%', right: '8%', type: 'squiggle' as const, color: '#F4A261', rot: -12, size: 16, opacity: 0.55, delay: '0.5s', duration: '3.4s' },
  { id: 7, top: '8%', right: '24%', type: 'star' as const, color: '#4ECDC4', rot: 30, size: 14, opacity: 0.55, delay: '0.9s', duration: '3s' },
  { id: 8, top: '15%', right: '6%', type: 'rect' as const, color: '#FFD166', rot: 42, size: 9, opacity: 0.55, delay: '1.5s', duration: '4s' },
  { id: 9, top: '22%', right: '18%', type: 'circle' as const, color: '#FF6B6B', rot: 0, size: 7, opacity: 0.45, delay: '0.3s', duration: '3.3s' },
  { id: 10, top: '28%', right: '8%', type: 'diamond' as const, color: '#4361EE', rot: -25, size: 8, opacity: 0.45, delay: '1.1s', duration: '3.7s' },
  { id: 11, top: '35%', left: '10%', type: 'rect' as const, color: '#06D6A0', rot: -35, size: 8, opacity: 0.45, delay: '0.7s', duration: '3.6s' },
  { id: 12, top: '37%', right: '12%', type: 'star' as const, color: '#FF8E72', rot: 10, size: 12, opacity: 0.5, delay: '1.6s', duration: '3.2s' },
  { id: 13, top: '44%', left: '26%', type: 'circle' as const, color: '#E9C46A', rot: 0, size: 6, opacity: 0.4, delay: '0.1s', duration: '2.8s' },
  { id: 14, top: '48%', right: '7%', type: 'squiggle' as const, color: '#9B5DE5', rot: 25, size: 15, opacity: 0.45, delay: '1.3s', duration: '3.9s' },
  { id: 15, top: '52%', left: '6%', type: 'rect' as const, color: '#FF6B6B', rot: 55, size: 8, opacity: 0.45, delay: '0.6s', duration: '3.4s' },
  { id: 16, top: '56%', right: '22%', type: 'diamond' as const, color: '#4ECDC4', rot: 15, size: 8, opacity: 0.45, delay: '1.8s', duration: '3.1s' },
  { id: 17, bottom: '38%', left: '15%', type: 'star' as const, color: '#F4A261', rot: -20, size: 12, opacity: 0.5, delay: '0.4s', duration: '3.5s' },
  { id: 18, bottom: '34%', right: '6%', type: 'rect' as const, color: '#4361EE', rot: -45, size: 8, opacity: 0.45, delay: '1s', duration: '3.3s' },
  { id: 19, bottom: '26%', left: '8%', type: 'circle' as const, color: '#FFD166', rot: 0, size: 6, opacity: 0.55, delay: '1.7s', duration: '2.7s' },
  { id: 20, bottom: '24%', right: '16%', type: 'squiggle' as const, color: '#FF6B6B', rot: -15, size: 15, opacity: 0.45, delay: '0.3s', duration: '3.8s' },
  { id: 21, bottom: '16%', left: '22%', type: 'rect' as const, color: '#2A9D8F', rot: 32, size: 8, opacity: 0.45, delay: '0.9s', duration: '3.4s' },
  { id: 22, bottom: '14%', right: '8%', type: 'diamond' as const, color: '#9B5DE5', rot: 48, size: 8, opacity: 0.45, delay: '1.4s', duration: '3s' },
  { id: 23, bottom: '6%', left: '7%', type: 'squiggle' as const, color: '#E9C46A', rot: 12, size: 15, opacity: 0.45, delay: '0.2s', duration: '3.6s' },
  { id: 24, bottom: '5%', right: '12%', type: 'star' as const, color: '#4ECDC4', rot: 40, size: 13, opacity: 0.55, delay: '0.8s', duration: '3.2s' },
  { id: 25, bottom: '8%', right: '28%', type: 'circle' as const, color: '#FF8E72', rot: 0, size: 6, opacity: 0.5, delay: '1.2s', duration: '2.9s' },
  { id: 26, top: '2%', left: '46%', type: 'rect' as const, color: '#4ECDC4', rot: -18, size: 8, opacity: 0.5, delay: '0.5s', duration: '3.5s' },
  { id: 27, top: '2%', right: '35%', type: 'diamond' as const, color: '#E07A5F', rot: 22, size: 8, opacity: 0.45, delay: '1.0s', duration: '3.1s' },
  { id: 28, bottom: '2%', left: '42%', type: 'rect' as const, color: '#FFD166', rot: 36, size: 8, opacity: 0.5, delay: '1.3s', duration: '3.7s' }
];

const EveryoneConfettiBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none select-none z-0 opacity-80">
      {CONFETTI_PIECES.map((p) => {
        const style: React.CSSProperties = {
          position: 'absolute',
          top: p.top,
          bottom: p.bottom,
          left: p.left,
          right: p.right,
          opacity: p.opacity,
          animationDelay: p.delay,
          animationDuration: p.duration,
          ['--rot' as any]: `${p.rot}deg`
        };

        if (p.type === 'rect') {
          return (
            <div key={p.id} className="animate-confetti" style={style}>
              <div
                style={{
                  width: `${p.size}px`,
                  height: `${p.size * 1.8}px`,
                  backgroundColor: p.color,
                  borderRadius: '2px',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.06)'
                }}
              />
            </div>
          );
        }

        if (p.type === 'circle') {
          return (
            <div key={p.id} className="animate-confetti" style={style}>
              <div
                style={{
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  backgroundColor: p.color,
                  borderRadius: '50%',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.06)'
                }}
              />
            </div>
          );
        }

        if (p.type === 'diamond') {
          return (
            <div key={p.id} className="animate-confetti" style={style}>
              <div
                style={{
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  backgroundColor: p.color,
                  transform: 'rotate(45deg)',
                  borderRadius: '1px',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.06)'
                }}
              />
            </div>
          );
        }

        if (p.type === 'squiggle') {
          return (
            <div key={p.id} className="animate-confetti" style={style}>
              <svg
                viewBox="0 0 24 12"
                style={{
                  width: `${p.size * 1.3}px`,
                  height: `${p.size * 0.7}px`,
                  stroke: p.color,
                  fill: 'none',
                  strokeWidth: 2.6,
                  strokeLinecap: 'round'
                }}
              >
                <path d="M2 6 Q 7 0, 12 6 T 22 6" />
              </svg>
            </div>
          );
        }

        return (
          <div key={p.id} className="animate-confetti" style={style}>
            <svg
              viewBox="0 0 24 24"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                fill: p.color,
                filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.08))'
              }}
            >
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export const GroupConstellations: React.FC<GroupConstellationsProps> = ({
  onSelectConstellation
}) => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8 pb-16" id="constellations">
      <div className="mb-8">
        <span className="font-serif text-xs uppercase tracking-widest text-gold font-bold">
          Group Constellations
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-navy mt-1 font-normal">
          Time Blocks We Can Meet
        </h2>
      </div>

      {/* 4 Cards showing meeting possibilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {CONSTELLATIONS.map((item) => {
          let taglineColor = 'text-gold';
          if (item.id === 'eu-na') taglineColor = 'text-aqua';
          if (item.id === 'eu-bali') taglineColor = 'text-coral';
          if (item.id === 'bali-na') taglineColor = 'text-violet';

          const isEveryone = item.id === 'everyone';

          return (
            <div
              key={item.id}
              id={`combo-${item.id}`}
              onClick={() => onSelectConstellation?.(item)}
              className={`combo-card text-left p-5 rounded-2xl transition duration-200 flex flex-col justify-between relative cursor-pointer overflow-hidden ${
                isEveryone
                  ? 'bg-gradient-to-br from-amber-50/50 via-white to-orange-50/30 border-2 border-amber-300 hover:border-amber-400 shadow-warm-lg ring-1 ring-amber-300/40'
                  : 'bg-white border border-[#E8EDF2] hover:border-gold/60 shadow-warm'
              }`}
            >
              {isEveryone && <EveryoneConfettiBackground />}

              <div className="relative z-10">
                <span className="text-[11px] font-mono uppercase tracking-wider text-navy-muted font-bold block">
                  {item.memberCount} GROUP MEMBERS
                </span>
                <h3 className="font-serif text-xl text-navy mt-1 font-semibold">
                  {item.name}
                </h3>
                <p className={`text-xs ${taglineColor} font-serif italic mt-0.5`}>
                  {item.tagline}
                </p>
                <p className="text-xs text-navy-slate mt-3 leading-relaxed font-normal">
                  {item.quote}
                </p>
              </div>

              <div className="relative z-10 mt-6 pt-4 border-t border-[#E8EDF2] text-xs space-y-2 w-full">
                {item.times.bali && (
                  <div className="flex items-baseline justify-between text-[11px]">
                    <span className="text-navy-muted">Bali</span>
                    <span className="font-medium text-navy">{item.times.bali}</span>
                  </div>
                )}
                {item.times.portugal && (
                  <div className="flex items-baseline justify-between text-[11px]">
                    <span className="text-navy-muted">Portugal</span>
                    <span className="font-medium text-navy">{item.times.portugal}</span>
                  </div>
                )}
                {item.times.germany && (
                  <div className="flex items-baseline justify-between text-[11px]">
                    <span className="text-navy-muted">Germany</span>
                    <span className="font-medium text-navy">{item.times.germany}</span>
                  </div>
                )}
                {item.times.eastern && (
                  <div className="flex items-baseline justify-between text-[11px]">
                    <span className="text-navy-muted">Eastern N. America</span>
                    <span className="font-medium text-navy">{item.times.eastern}</span>
                  </div>
                )}

                {/* Avatar Stack with Hover Name Tooltips */}
                <div className="flex items-center -space-x-1.5 pt-3">
                  {item.members.map((m) => (
                    <div key={m.name} className="relative group/avatar">
                      <button
                        type="button"
                        className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white text-white shadow-2xs cursor-pointer transition-transform duration-150 group-hover/avatar:scale-125 group-hover/avatar:z-30 relative"
                        style={{ backgroundColor: m.bgColor }}
                        aria-label={m.name}
                      >
                        {m.avatarChar}
                      </button>

                      {/* Tooltip displaying person's name on hover */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/avatar:flex flex-col items-center z-50 pointer-events-none">
                        <div className="px-2.5 py-1 rounded-md bg-navy text-white text-[11px] font-medium whitespace-nowrap shadow-lg">
                          {m.name}
                        </div>
                        <div className="w-2 h-2 bg-navy rotate-45 -mt-1"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
