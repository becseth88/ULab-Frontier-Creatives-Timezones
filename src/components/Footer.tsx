import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#E8EDF2] bg-[#FCFCFD] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-navy-muted">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-navy text-[#FFE66D] flex items-center justify-center text-[10px] font-bold">
            U
          </div>
          <span className="font-serif font-bold text-navy tracking-wider">
            U.Lab 1x 2026 · Frontier Creatives
          </span>
        </div>
        <div className="font-serif italic text-sm text-navy-slate text-center sm:text-right">
          “Energy follows attention.”
        </div>
      </div>
    </footer>
  );
};
