import React, { useState } from 'react';
import { INFLUENCES } from '../data/influences';
import { InfluenceHotspot } from '../types';
import { ExternalLink, X, Activity } from 'lucide-react';

export const EcologyOfInfluences: React.FC = () => {
  const [selectedInfluence, setSelectedInfluence] = useState<InfluenceHotspot | null>(null);
  const [hoveredInfluence, setHoveredInfluence] = useState<InfluenceHotspot | null>(null);

  // Extra info card below artwork is only shown for clickable items
  const activeInfluence =
    selectedInfluence && !selectedInfluence.nonClickable
      ? selectedInfluence
      : hoveredInfluence && !hoveredInfluence.nonClickable
      ? hoveredInfluence
      : null;

  return (
    <section className="relative pt-4 pb-12 w-full border-b border-[#E8EDF2]" id="ecology-of-influences">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        {/* Artwork Canvas Container */}
        <div className="relative w-full max-w-3xl rounded-3xl bg-white border border-[#E8EDF2] p-2 sm:p-6 shadow-warm">
          <div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-white">
            <img
              src="/ecology-of-influences.png"
              alt="Ecology of Influences artwork"
              className="w-full h-full object-contain block select-none pointer-events-none"
            />

            {/* Interactive Hotspots */}
            <div className="absolute inset-0">
              {INFLUENCES.map((item) => {
                const isHovered = hoveredInfluence?.id === item.id;
                const leftPct = parseFloat(item.left);

                let tooltipPositionClass = 'left-1/2 -translate-x-1/2';
                let arrowPositionClass = 'left-1/2 -translate-x-1/2';
                if (leftPct < 18) {
                  tooltipPositionClass = 'left-0 translate-x-0';
                  arrowPositionClass = 'left-4 translate-x-0';
                } else if (leftPct > 72) {
                  tooltipPositionClass = 'right-0 translate-x-0 left-auto';
                  arrowPositionClass = 'right-4 translate-x-0 left-auto';
                }

                return (
                  <div
                    key={item.id}
                    className="absolute"
                    style={{
                      left: item.left,
                      top: item.top,
                      width: item.width,
                      height: item.height
                    }}
                  >
                    {/* Hotspot touch/click target - strictly no visible borders, rings, or circles on click */}
                    <button
                      type="button"
                      onClick={() => {
                        if (item.nonClickable) return;
                        setSelectedInfluence(selectedInfluence?.id === item.id ? null : item);
                      }}
                      onMouseEnter={() => setHoveredInfluence(item)}
                      onMouseLeave={() => setHoveredInfluence(null)}
                      aria-label={item.name}
                      className={`w-full h-full block select-none bg-transparent border-0 outline-none ring-0 focus:outline-none focus:ring-0 focus:border-0 active:outline-none active:ring-0 active:border-0 ${
                        item.nonClickable ? 'cursor-default' : 'cursor-pointer'
                      }`}
                    >
                      <span className="sr-only">{item.name}</span>
                    </button>

                    {/* Floating Hover Tooltip */}
                    {isHovered && (
                      <div
                        className={`absolute bottom-full ${tooltipPositionClass} mb-2 z-30 pointer-events-none transition-all duration-150 animate-in fade-in zoom-in-95`}
                      >
                        {item.nonClickable ? (
                          <div className="px-3 py-1.5 rounded-xl bg-navy text-white text-xs font-serif font-medium shadow-xl whitespace-nowrap flex items-center gap-1.5 border border-white/20">
                            <Activity className="w-3.5 h-3.5 text-aqua shrink-0" />
                            <span>{item.hoverTooltipText || item.name}</span>
                          </div>
                        ) : (
                          <div className="px-3 py-1.5 rounded-xl bg-navy text-white text-xs font-serif font-medium shadow-xl whitespace-nowrap flex flex-col items-center border border-white/20">
                            <span>{item.name}</span>
                            {item.subtitle && (
                              <span className="text-[10px] text-slate-300 font-sans italic mt-0.5">
                                {item.subtitle}
                              </span>
                            )}
                          </div>
                        )}
                        <div
                          className={`w-2 h-2 bg-navy rotate-45 absolute -bottom-1 ${arrowPositionClass} border-r border-b border-white/20`}
                        ></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active / Selected Floating Card Preview (only for clickable items) */}
          {activeInfluence && (
            <div className="mt-4 p-4 rounded-2xl bg-white border border-[#E8EDF2] shadow-warm-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-gold/15 text-navy border border-gold/30">
                    {activeInfluence.category}
                  </span>
                  <span className="font-serif font-bold text-navy text-base">
                    {activeInfluence.name}
                  </span>
                </div>
                {activeInfluence.subtitle && (
                  <div className="text-xs font-serif italic text-navy-slate mt-0.5">
                    {activeInfluence.subtitle}
                  </div>
                )}
                <p className="text-xs text-navy-muted mt-1 leading-relaxed">
                  {activeInfluence.description}
                </p>
                {activeInfluence.note && (
                  <div className="text-[11px] text-navy-muted/80 italic font-serif mt-1.5">
                    {activeInfluence.note}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                {activeInfluence.url && (
                  <a
                    href={activeInfluence.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-navy text-white text-xs font-serif font-medium hover:bg-navy-deep shadow-xs transition"
                  >
                    <span>Explore origin</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {selectedInfluence && (
                  <button
                    type="button"
                    onClick={() => setSelectedInfluence(null)}
                    className="p-1.5 rounded-lg text-navy-muted hover:text-navy hover:bg-slate-100 transition"
                    title="Close details"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Caption */}
        <p className="text-xs text-navy-muted italic font-serif mt-4 text-center">
          Ecology of some shared influences and projects: Click to explore.
        </p>
      </div>
    </section>
  );
};
