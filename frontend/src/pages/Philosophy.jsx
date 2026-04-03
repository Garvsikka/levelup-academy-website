import React from "react";
import { motion } from "framer-motion";
import "./Philosophy.css";

const philosophyData = [
  // LEFT SIDE
  { id: 1, title: "ROOTED IN VALUES & CHARACTER", desc: "Every class begins with the Gayatri Mantra.", x: -480, y: -240 },
  { id: 2, title: "PERSONALITY DEVELOPMENT", desc: "Communication skills & confidence.", x: -520, y: 0 },
  { id: 3, title: "GAMIFICATION & CINEMATIC", desc: "Educational games where problems unlock levels.", x: -480, y: 240 },
  
  // RIGHT SIDE
  { id: 4, title: "100X YOUR FAMILY WEALTH", desc: "Academic success is the passport to financial success.", x: 480, y: -240 },
  { id: 5, title: "HONOR YOUR SCHOOL TEACHERS", desc: "We complement schools, never replace them.", x: 520, y: 0 },
  { id: 6, title: "REPETITION IS MOTHER OF LEARNING", desc: "10 min formula tests every class.", x: 480, y: 240 },
];

export default function Philosophy() {
  return (
    <div className="pt-32 min-h-[140vh] bg-black text-white flex items-center justify-center overflow-x-hidden pb-40">
      <div className="relative">
        
        {/* THE 6 SNAKES (SVG) */}
        <svg 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible pointer-events-none" 
          style={{ width: "1px", height: "1px" }}
        >
          <defs>
            <linearGradient id="fire-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff0000" />    {/* Red */}
              <stop offset="50%" stopColor="#ff8c00" />   {/* Orange */}
              <stop offset="100%" stopColor="#ffd700" />  {/* Yellow */}
            </linearGradient>
          </defs>

          {philosophyData.map((item) => (
            <path
              key={`snake-${item.id}`}
              className="philosophy-snake"
              // Path starts at 0,0 (Hub) and snakes to item.x, item.y (Popup)
              d={`M 0 0 C ${item.x * 0.3} 0, ${item.x * 0.7} ${item.y}, ${item.x} ${item.y}`}
              fill="none"
              stroke="url(#fire-grad)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="15,10"
            />
          ))}
        </svg>

        {/* THE CENTRAL HUB */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="relative z-50 w-72 h-72 rounded-full bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 p-[5px] shadow-[0_0_120px_rgba(255,69,0,0.6)]"
        >
          <div className="w-full h-full bg-black rounded-full flex flex-col items-center justify-center text-center p-6 border-4 border-black">
            <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">LEVELUP</h2>
            <p className="text-sm font-bold text-orange-500 tracking-widest mt-2 uppercase">Philosophy</p>
          </div>
        </motion.div>

        {/* THE 6 POPUPS */}
        {philosophyData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 + (index * 0.1) }}
            className="absolute z-40 w-[300px]"
            style={{ 
              left: `calc(50% + ${item.x}px)`, 
              top: `calc(50% + ${item.y}px)`,
              transform: "translate(-50%, -50%)" 
            }}
          >
            <div className="bg-zinc-950/90 backdrop-blur-md border border-orange-500/30 p-5 rounded-2xl shadow-2xl">
              <h3 className="text-orange-500 font-black text-xs uppercase italic mb-1">{item.title}</h3>
              <p className="text-[10px] text-gray-400 font-medium uppercase tracking-tight leading-tight">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}