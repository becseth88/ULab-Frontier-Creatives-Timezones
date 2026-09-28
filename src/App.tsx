import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EcologyOfInfluences } from './components/EcologyOfInfluences';
import { LiveWorldView } from './components/LiveWorldView';
import { WorldClockConverter } from './components/WorldClockConverter';
import { GroupConstellations } from './components/GroupConstellations';
import { Footer } from './components/Footer';
import { ConstellationOption } from './types';

export default function App() {
  const [selectedUtcHour, setSelectedUtcHour] = useState<number>(new Date().getUTCHours());

  const handleSelectConstellation = (item: ConstellationOption) => {
    setSelectedUtcHour(item.targetUtcHour);
  };

  return (
    <div className="min-h-screen bg-[#FCFCFD] text-navy font-sans antialiased selection:bg-[#FFE66D] selection:text-navy">
      <Header />
      <Hero />
      <EcologyOfInfluences />
      <LiveWorldView />
      <WorldClockConverter
        selectedUtcHour={selectedUtcHour}
        onSelectUtcHour={setSelectedUtcHour}
      />
      <GroupConstellations
        onSelectConstellation={handleSelectConstellation}
      />
      <Footer />
    </div>
  );
}
