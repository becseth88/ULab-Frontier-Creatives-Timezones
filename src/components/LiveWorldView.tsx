import React, { useEffect, useState } from 'react';
import { LOCATIONS } from '../data/locations';
import { LocationInfo } from '../types';

interface WeatherData {
  temp: number;
  desc: string;
  icon: string;
  subtext: string;
}

const DEFAULT_WEATHER: Record<string, WeatherData> = {
  bali: { temp: 21, desc: 'Partly cloudy', icon: '⛅', subtext: 'humidity ~82%' },
  germany: { temp: 16, desc: 'Partly cloudy', icon: '⛅', subtext: 'moderate breeze' },
  lisbon: { temp: 20, desc: 'Partly cloudy', icon: '⛅', subtext: 'ocean breeze' },
  eastern: { temp: 26, desc: 'Clear skies', icon: '☀️', subtext: 'morning mist clearing' }
};

export const LiveWorldView: React.FC = () => {
  const [now, setNow] = useState<Date>(new Date());
  const [weatherMap, setWeatherMap] = useState<Record<string, WeatherData>>(DEFAULT_WEATHER);

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch Open-Meteo current weather
  useEffect(() => {
    const fetchWeather = async () => {
      const updated: Record<string, WeatherData> = { ...DEFAULT_WEATHER };

      for (const loc of LOCATIONS) {
        try {
          const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.lng}&current_weather=true`
          );
          if (res.ok) {
            const data = await res.json();
            const cur = data.current_weather;
            if (cur) {
              const code = cur.weathercode;
              let desc = 'Clear skies';
              let icon = '☀️';

              if (code >= 1 && code <= 3) {
                desc = 'Partly cloudy';
                icon = '⛅';
              } else if (code >= 45 && code <= 48) {
                desc = 'Morning mist';
                icon = '🌫️';
              } else if (code >= 51 && code <= 67) {
                desc = 'Light rain';
                icon = '🌧️';
              } else if (code >= 71 && code <= 77) {
                desc = 'Snow dust';
                icon = '❄️';
              } else if (code >= 80 && code <= 82) {
                desc = 'Passing showers';
                icon = '🌦️';
              } else if (code >= 95) {
                desc = 'Thunderstorm';
                icon = '⛈️';
              }

              updated[loc.id] = {
                temp: Math.round(cur.temperature),
                desc,
                icon,
                subtext: DEFAULT_WEATHER[loc.id]?.subtext || 'ambient breeze'
              };
            }
          }
        } catch {
          // silently keep fallback
        }
      }

      setWeatherMap(updated);
    };

    fetchWeather();
  }, []);

  const getSolarAtmosphere = (hour: number) => {
    if (hour >= 6 && hour < 8) {
      return { label: 'Dawn', icon: '🌅', overlay: 'rgba(244, 189, 60, 0.25)' };
    }
    if (hour >= 8 && hour < 18) {
      return { label: 'Daylight', icon: '☀️', overlay: 'rgba(255, 230, 109, 0.12)' };
    }
    if (hour >= 18 && hour < 20) {
      return { label: 'Golden Hour', icon: '🌇', overlay: 'rgba(244, 189, 60, 0.35)' };
    }
    return { label: 'Night', icon: '🌙', overlay: 'rgba(25, 41, 67, 0.45)' };
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-8" id="live-locations">
      <div className="flex flex-col md:flex-row items-baseline justify-between mb-6 pb-3 border-b border-[#E8EDF2] gap-2">
        <div>
          <h2 className="font-serif text-xs uppercase tracking-widest text-navy-muted font-bold">
            Live World View
          </h2>
          <p className="font-serif text-2xl sm:text-3xl text-navy mt-0.5 font-normal">
            Our four locations
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {LOCATIONS.map((loc) => {
          // Time calculations for timezone
          const timeStr = new Intl.DateTimeFormat('en-US', {
            timeZone: loc.timezone,
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
          }).format(now);

          const secStr = new Intl.DateTimeFormat('en-US', {
            timeZone: loc.timezone,
            second: '2-digit'
          }).format(now);

          const dateStr = new Intl.DateTimeFormat('en-US', {
            timeZone: loc.timezone,
            weekday: 'short',
            month: 'short',
            day: 'numeric'
          }).format(now);

          const hourInt = parseInt(
            new Intl.DateTimeFormat('en-US', {
              timeZone: loc.timezone,
              hour: 'numeric',
              hour12: false
            }).format(now),
            10
          );

          const atmo = getSolarAtmosphere(hourInt);
          const weather = weatherMap[loc.id] || DEFAULT_WEATHER[loc.id];

          let activityNote = loc.activityNotes.afternoon;
          if (hourInt >= 22 || hourInt < 6) activityNote = loc.activityNotes.night;
          else if (hourInt >= 6 && hourInt < 12) activityNote = loc.activityNotes.morning;
          else if (hourInt >= 18 && hourInt < 22) activityNote = loc.activityNotes.evening;

          return (
            <article
              key={loc.id}
              id={`card-${loc.id}`}
              className="bg-white rounded-2xl border border-[#E8EDF2] shadow-warm overflow-hidden flex flex-col transition duration-300 hover:shadow-warm-lg group"
            >
              {/* Card Photo Header */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <img
                  src={loc.image}
                  alt={loc.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 transition-colors"
                  style={{ backgroundColor: atmo.overlay }}
                ></div>

                {/* Day / Night Solar Pill */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-medium backdrop-blur-md bg-navy-deep/60 text-white flex items-center gap-1.5 border border-white/20">
                    <span>{atmo.icon}</span>
                    <span>{atmo.label}</span>
                  </span>
                </div>

                {/* Location Banner Text */}
                <div className="absolute bottom-3 left-4 text-white">
                  <div className="text-[10px] uppercase tracking-wider text-white opacity-90 font-bold drop-shadow-xs">
                    {loc.country === 'Indonesia'
                      ? 'Central Indonesia Time (WITA)'
                      : loc.country === 'Germany'
                      ? 'Central European Time (CEST)'
                      : loc.country === 'Portugal'
                      ? 'Western European Time (WEST)'
                      : 'Eastern Time (EDT)'}
                  </div>
                  <h3 className="font-serif text-2xl font-normal tracking-wide text-white">
                    {loc.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-3xl font-serif text-navy font-semibold tracking-tight">
                      {timeStr}
                    </span>
                    <span className="text-xs font-mono text-navy-muted">
                      :{secStr}
                    </span>
                  </div>
                  <div className="text-xs text-navy-muted mt-0.5 font-medium">
                    {dateStr}
                  </div>
                </div>

                {/* Weather Pill */}
                <div className="py-2.5 px-3 rounded-xl bg-[#FCFCFD] border border-[#E8EDF2] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{weather.icon}</span>
                    <div>
                      <div className="font-medium text-navy capitalize">
                        {weather.desc}
                      </div>
                      <div className="text-[10px] text-navy-muted">
                        {weather.subtext}
                      </div>
                    </div>
                  </div>
                  <span className="text-base font-serif font-semibold text-navy">
                    {weather.temp}°C
                  </span>
                </div>

                {/* Members in Location */}
                <div className="pt-2 border-t border-[#E8EDF2]">
                  <span className="text-[10px] font-serif uppercase tracking-wider text-navy-muted font-bold block mb-2">
                    Members ({loc.members.length})
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {loc.members.map((m) => (
                      <div
                        key={m.name}
                        className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#FCFCFD] border border-[#E8EDF2] shadow-2xs"
                        title={m.name}
                      >
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                          style={{ backgroundColor: m.bgColor }}
                        >
                          {m.avatarChar}
                        </div>
                        <span className="text-xs font-medium text-navy">
                          {m.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="text-[11px] text-navy-muted italic font-serif mt-2">
                    {activityNote}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
};
