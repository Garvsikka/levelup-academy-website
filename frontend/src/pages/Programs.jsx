import React from "react";
import LevelUpLife from "../components/LevelUpLife";

export default function Programs() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-20 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 blur-[120px] pointer-events-none"></div>
      <div className="text-center mb-16 relative z-10">
        <h1 className="text-7xl md:text-9xl font-black uppercase italic tracking-tighter leading-none">
          THE <br/><span className="text-transparent bg-clip-text bg-lava-gradient">LIFESTYLE.</span>
        </h1>
        <p className="text-brand-yellow font-black text-xs tracking-[0.5em] mt-4 uppercase">Beyond the Classroom</p>
      </div>
      <div className="relative z-10">
        <LevelUpLife />
      </div>
    </main>
  );
}