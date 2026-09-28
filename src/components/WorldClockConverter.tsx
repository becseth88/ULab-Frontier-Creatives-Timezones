import React, { useEffect, useRef, useState, useCallback } from 'react';
import { LOCATIONS } from '../data/locations';
import { RotateCcw, Calendar, Check } from 'lucide-react';

interface WorldClockConverterProps {
  selectedUtcHour: number;
  onSelectUtcHour: (hour: number) => void;
}

export const WorldClockConverter: React.FC<WorldClockConverterProps> = ({
  selectedUtcHour,
  onSelectUtcHour
}) => {
  const boardRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const baliBarRef = useRef<HTMLDivElement>(null);
  const [resetFeedback, setResetFeedback] = useState(false);

  // Function to reposition the cursor bracket over the 90-minute window (supports 30-min fractions)
  const updateCursor = useCallback((targetHour: number) => {
    if (!baliBarRef.current || !cursorRef.current || !boardRef.current) return;
    const baseHour = Math.min(23, Math.max(0, Math.floor(targetHour)));
    const fraction = Math.max(0, targetHour - baseHour); // 0 or 0.5
    const targetCell = baliBarRef.current.children[baseHour] as HTMLElement;
    if (targetCell) {
      const cellRect = targetCell.getBoundingClientRect();
      const boardRect = boardRef.current.getBoundingClientRect();
      const cellWidth = cellRect.width;
      const relativeLeft = cellRect.left - boardRect.left + fraction * cellWidth;
      cursorRef.current.style.left = `${relativeLeft}px`;
      // 90 minutes = 1.5 columns wide (1 hour + 30 min)
      cursorRef.current.style.width = `${cellWidth * 1.5}px`;
    }
  }, []);

  // Synchronize the cursor position on selectedUtcHour change and window resize
  useEffect(() => {
    updateCursor(selectedUtcHour);
    const handleResize = () => updateCursor(selectedUtcHour);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [selectedUtcHour, updateCursor]);

  // Initial cursor alignment once mounted
  useEffect(() => {
    const timer = setTimeout(() => {
      updateCursor(selectedUtcHour);
    }, 50);
    return () => clearTimeout(timer);
  }, [selectedUtcHour, updateCursor]);

  // Use current UTC date base
  const now = new Date();
  const baseUtcYear = now.getUTCFullYear();
  const baseUtcMonth = now.getUTCMonth();
  const baseUtcDate = now.getUTCDate();

  // Helper for simulated local start time (formatted cleanly e.g. "9:00 pm" or "9:30 pm")
  const getSimulatedTime = (tz: string, utcHour: number) => {
    const baseHour = Math.floor(utcHour);
    const minute = Math.round((utcHour % 1) * 60);
    const dStart = new Date(Date.UTC(baseUtcYear, baseUtcMonth, baseUtcDate, baseHour, minute, 0));

    // Format local time without the 90-min window range
    const timeStr = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
      .format(dStart)
      .toLowerCase();

    const dateStr = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    }).format(dStart);

    return { timeStr, dateStr };
  };

  // Robust Reset to current time handler
  const handleResetToNow = () => {
    const d = new Date();
    const currentUtc = d.getUTCHours() + (d.getUTCMinutes() >= 30 ? 0.5 : 0);
    onSelectUtcHour(currentUtc);
    setResetFeedback(true);
    setTimeout(() => setResetFeedback(false), 2000);

    // Reposition cursor and smoothly center in scroll container
    requestAnimationFrame(() => {
      updateCursor(currentUtc);
      if (baliBarRef.current) {
        const cell = baliBarRef.current.children[Math.floor(currentUtc)] as HTMLElement;
        if (cell) {
          cell.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      }
    });
  };

  const rows = [
    {
      key: 'bali',
      location: LOCATIONS[0],
      tagColor: 'bg-coral/10 text-coral border-coral/20',
      tagText: 'WITA',
      subtext: 'WITA (UTC+8) · Bec',
      offsetIcon: (
        <div className="pt-0.5 text-coral">
          <svg className="w-4 h-4 fill-coral" viewBox="0 0 24 24">
            <path d="M12 2L4.5 10.5h4.5v11.5h6v-11.5h4.5L12 2z"></path>
          </svg>
        </div>
      ),
      ref: baliBarRef
    },
    {
      key: 'germany',
      location: LOCATIONS[1],
      tagColor: 'bg-aqua/20 text-navy border-aqua/40',
      tagText: 'CEST',
      subtext: 'CEST (UTC+2) · Varun, Laurin, Arsham',
      offsetIcon: (
        <div className="pt-0.5 text-xs font-mono font-bold text-navy-muted w-4 text-center">
          -6
        </div>
      ),
      ref: undefined
    },
    {
      key: 'lisbon',
      location: LOCATIONS[2],
      tagColor: 'bg-violet/20 text-navy border-violet/40',
      tagText: 'WEST',
      subtext: 'WEST (UTC+1) · Vesta',
      offsetIcon: (
        <div className="pt-0.5 text-xs font-mono font-bold text-navy-muted w-4 text-center">
          -7
        </div>
      ),
      ref: undefined
    },
    {
      key: 'eastern',
      location: LOCATIONS[3],
      tagColor: 'bg-yellow/40 text-navy border-gold/40',
      tagText: 'EDT',
      subtext: 'EDT (UTC-4) · Justin, Isaac, River',
      offsetIcon: (
        <div className="pt-0.5 text-xs font-mono font-bold text-navy-muted w-4 text-center">
          -12
        </div>
      ),
      ref: undefined
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-10" id="overlaps">
      <div className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-8 shadow-warm">
        {/* Header and Legend */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 pb-4 border-b border-[#E8EDF2] gap-4">
          <div>
            <span className="font-serif text-xs uppercase tracking-widest text-gold font-bold">
              Interactive Converter
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-navy mt-1 font-semibold">
              World Clock + Time Zone Converter
            </h2>
            <p className="text-xs text-navy-muted font-sans mt-1">
              Select or adjust any start time to visualize the 90-minute meeting window across all four locations.
            </p>
          </div>

          {/* Legend and Actions */}
          <div className="flex flex-wrap items-center gap-3 text-xs bg-[#FCFCFD] px-4 py-2.5 rounded-xl border border-[#E8EDF2]">
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-sm bg-[#8da4c4]"></span>
              <span className="text-navy-muted">Night / Sleep</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-sm bg-[#ebf3fa] border border-[#cbd8e6]"></span>
              <span className="text-navy-muted">Day / Active</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded-sm border-2 border-navy bg-aqua/20"></span>
              <span className="font-semibold text-navy">90-min Window</span>
            </div>

            {/* Reset to Current Time Button */}
            <button
              type="button"
              onClick={handleResetToNow}
              className="ml-2 px-3 py-1.5 rounded-lg bg-white hover:bg-gold/20 text-navy font-serif font-semibold border border-gold transition text-xs flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-2xs"
              title="Reset to current local time"
            >
              {resetFeedback ? (
                <Check className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <RotateCcw className="w-3.5 h-3.5 text-navy" />
              )}
              <span>{resetFeedback ? 'Current Time Set!' : 'Reset to Current Time'}</span>
            </button>
          </div>
        </div>

        {/* TIMELINE TABLE WRAPPER */}
        <div className="overflow-x-auto pb-6 pt-6 select-none">
          <div className="min-w-[1080px] relative" id="tz-converter-board" ref={boardRef}>
            {/* 90-Minute Synchronized Cursor Bracket */}
            <div
              ref={cursorRef}
              id="tz-sync-cursor"
              className="absolute top-0 bottom-0 z-20 pointer-events-none transition-all duration-150"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-navy text-white text-[9px] font-mono font-bold tracking-tight uppercase whitespace-nowrap shadow-xs flex items-center gap-1">
                <span>90 MIN WINDOW</span>
              </div>
            </div>

            {/* 4 Location Rows */}
            {rows.map((row, idx) => {
              const { timeStr, dateStr } = getSimulatedTime(
                row.location.timezone,
                selectedUtcHour
              );

              return (
                <div
                  key={row.key}
                  className={`flex items-center py-3.5 ${
                    idx < rows.length - 1 ? 'border-b border-[#E8EDF2]' : ''
                  } hover:bg-[#FCFCFD] transition-colors`}
                >
                  {/* Left Label Column */}
                  <div className="w-[340px] shrink-0 flex items-start gap-3 pr-3">
                    {row.offsetIcon}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 whitespace-nowrap">
                        <span className="font-serif font-semibold text-navy text-base leading-tight whitespace-nowrap">
                          {row.location.name}
                        </span>
                        <span
                          className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded border shrink-0 leading-none ${row.tagColor}`}
                        >
                          {row.tagText}
                        </span>
                      </div>
                      <div className="text-xs text-navy-muted font-normal mt-0.5">
                        {row.subtext}
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-sm font-serif font-bold text-navy leading-tight whitespace-nowrap">
                        {timeStr}
                      </div>
                      <div className="text-[11px] text-navy-muted mt-0.5 font-mono whitespace-nowrap">
                        {dateStr}
                      </div>
                    </div>
                  </div>

                  {/* Right Timeline Bar (24 columns) */}
                  <div className="flex-1 pl-4 flex items-center relative">
                    <div
                      ref={row.ref}
                      className="w-full grid grid-cols-24 rounded-lg overflow-hidden border border-[#D5DFE8] shadow-2xs h-10"
                    >
                      {Array.from({ length: 24 }).map((_, utcH) => {
                        const slotDate = new Date(
                          Date.UTC(baseUtcYear, baseUtcMonth, baseUtcDate, utcH, 0, 0)
                        );
                        const localHour = parseInt(
                          new Intl.DateTimeFormat('en-US', {
                            timeZone: row.location.timezone,
                            hour: 'numeric',
                            hour12: false
                          }).format(slotDate),
                          10
                        );

                        const isMidnight = localHour === 0;

                        if (isMidnight) {
                          const monthStr = new Intl.DateTimeFormat('en-US', {
                            timeZone: row.location.timezone,
                            month: 'short'
                          })
                            .format(slotDate)
                            .toUpperCase();
                          const dayNum = new Intl.DateTimeFormat('en-US', {
                            timeZone: row.location.timezone,
                            day: 'numeric'
                          }).format(slotDate);

                          return (
                            <button
                              key={utcH}
                              type="button"
                              onClick={() => onSelectUtcHour(utcH)}
                              className="h-full flex flex-col items-center justify-center cursor-pointer transition-colors relative tz-cell-date-boundary"
                              title={`UTC ${utcH}:00 -> ${row.location.name} midnight ${monthStr} ${dayNum} (90 min start)`}
                            >
                              <div className="text-[8px] uppercase tracking-tighter leading-none font-bold opacity-90">
                                {monthStr}
                              </div>
                              <div className="text-[11px] font-extrabold leading-tight">
                                {dayNum}
                              </div>
                            </button>
                          );
                        }

                        const displayH = (localHour % 12) || 12;
                        const ampm = localHour >= 12 ? 'pm' : 'am';

                        let cellClass = 'tz-cell-day';
                        if (localHour >= 22 || localHour < 6) {
                          cellClass = 'tz-cell-night';
                        } else if (
                          (localHour >= 6 && localHour < 8) ||
                          (localHour >= 18 && localHour < 22)
                        ) {
                          cellClass = 'tz-cell-evening';
                        }

                        return (
                          <button
                            key={utcH}
                            type="button"
                            onClick={() => onSelectUtcHour(utcH)}
                            className={`h-full flex flex-col items-center justify-center cursor-pointer transition-colors relative ${cellClass}`}
                            title={`Select UTC ${utcH}:00 (${displayH}:00 ${ampm} in ${row.location.name}) for 90-min window`}
                          >
                            <div className="text-[12px] font-medium leading-none">
                              {displayH}
                            </div>
                            <div className="text-[8px] font-normal opacity-80 leading-none mt-0.5">
                              {ampm}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Slider Scrub Control (30-min intervals, mobile-friendly) */}
        <div className="mt-5 pt-4 border-t border-[#E8EDF2] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4 w-full md:w-auto">
            <label
              htmlFor="tzHourSlider"
              className="font-serif font-semibold text-navy text-xs shrink-0 select-none cursor-pointer"
            >
              Adjust time:
            </label>
            <div className="flex items-center gap-3 w-full sm:w-80">
              <input
                id="tzHourSlider"
                type="range"
                min={0}
                max={23.5}
                step={0.5}
                value={selectedUtcHour}
                onChange={(e) => onSelectUtcHour(parseFloat(e.target.value))}
                className="tz-range-slider w-full cursor-pointer touch-pan-x"
                aria-label="Adjust time by 30 minute intervals"
              />
            </div>
          </div>
        </div>

        {/* Daylight Savings Alert Callout Box with Gold Accent */}
        <div className="mt-6 p-4 rounded-2xl bg-gold-light border border-gold/60 shadow-xs flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-gold/25 text-navy flex items-center justify-center shrink-0 mt-0.5 border border-gold/40">
            <Calendar className="w-5 h-5 text-navy" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-sm text-navy tracking-tight uppercase">
                Reminder: Daylight Saving Time Transition
              </span>
            </div>
            <p className="text-xs text-navy-slate mt-1 leading-relaxed">
              <strong>Note:</strong> Europe shifts back on <b>October 25th</b> and North America shifts on <b>November 1st</b>. Subsequent meetings will fall 1 hour earlier in relative local schedules.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
