import React from "react";
import { motion } from "framer-motion";
import "./Philosophy.css";

const philosophyData = [
  { id: 1, title: "ROOTED IN VALUES & CHARACTER", x: -400, y: -250, desc: "Every class begins with the Gayatri Mantra." },
  { id: 2, title: "PERSONALITY DEVELOPMENT", x: -450, y: 0, desc: "Communication skills & confidence." },
  { id: 3, title: "GAMIFICATION & CINEMATIC", x: -400, y: 250, desc: "Educational games where problems unlock levels." },
  { id: 4, title: "100X YOUR FAMILY WEALTH", x: 400, y: -250, desc: "Academic success is the passport to wealth." },
  { id: 5, title: "HONOR YOUR SCHOOL TEACHERS", x: 450, y: 0, desc: "We complement schools, never replace them." },
  { id: 6, title: "REPETITION IS MOTHER OF LEARNING", x: 400, y: 250, desc: "10 min formula tests every class." },
];

export default function Philosophy() {
  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden py-20">
      
      {/* THE SVG VIEWPORT (The fix) */}
      <svg 
        viewBox="-500 -500 1000 1000" 
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="fire-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff0000" />
            <stop offset="100%" stopColor="#ffd700" />
          </linearGradient>
        </defs>

        {philosophyData.map((item) => (
          <path
            key={`snake-${item.id}`}
            className="philosophy-snake"
            // Starts at 0,0 (Absolute center of viewBox)
            d={`M 0 0 C ${item.x * 0.3} 0, ${item.x * 0.7} ${item.y}, ${item.x} ${item.y}`}
            fill="none"
            stroke="url(#fire-grad)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        ))}
      </svg>

      {/* THE CENTRAL HUB */}
      <div className="relative z-50 w-64 h-64 rounded-full bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 p-1 shadow-[0_0_100px_rgba(255,69,0,0.5)]">
        <div className="w-full h-full bg-black rounded-full flex flex-col items-center justify-center text-center p-6 border-4 border-black">
          <h2 className="text-3xl font-black text-white italic tracking-tighter">LEVELUP</h2>
        </div>
      </div>

      {/* THE 6 POPUPS */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {philosophyData.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute z-40 w-72 pointer-events-auto"
            style={{ 
              transform: `translate(${item.x}px, ${item.y}px)`,
            }}
          >
            <div className="bg-zinc-950/90 border border-orange-500/30 p-4 rounded-xl shadow-2xl backdrop-blur-sm">
              <h3 className="text-orange-500 font-black text-xs uppercase italic">{item.title}</h3>
              <p className="text-[10px] text-gray-400 mt-1 uppercase leading-tight">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}