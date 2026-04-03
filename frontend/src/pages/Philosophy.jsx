import React from "react";
import { motion } from "framer-motion";
import "./Philosophy.css"; // <--- IMPORT THE NEW CSS

const philosophyData = [
  { id: 1, title: "ROOTED IN VALUES & CHARACTER", desc: "Every class begins with the Gayatri Mantra.", x: -480, y: -240 },
  { id: 2, title: "PERSONALITY DEVELOPMENT", desc: "Knowledge w/o communication skills & confidence is incomplete.", x: -520, y: 0 },
  { id: 3, title: "GAMIFICATION & CINEMATIC", desc: "Educational games where problems unlock levels.", x: -480, y: 240 },
  { id: 4, title: "100X YOUR FAMILY WEALTH", desc: "Academic success is the passport to financial success.", x: 480, y: -240 },
  { id: 5, title: "HONOR YOUR SCHOOL TEACHERS", desc: "They are the core foundation of education.", x: 520, y: 0 },
  { id: 6, title: "REPETITION IS MOTHER OF LEARNING", desc: "10 min formula tests every class.", x: 480, y: 240 },
];

export default function Philosophy() {
  return (
    <div className="pt-32 min-h-[140vh] bg-black text-white flex items-center justify-center overflow-x-hidden pb-40">
      <div className="relative w-0 h-0 flex items-center justify-center">
        
        {/* THE SVG WITH CSS ANIMATION */}
        <svg className="absolute overflow-visible pointer-events-none z-10">
          <defs>
            <linearGradient id="fire-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff0000" />
              <stop offset="50%" stopColor="#ff8c00" />
              <stop offset="100%" stopColor="#ffd700" />
            </linearGradient>
          </defs>
          {philosophyData.map((item) => (
            <path
              key={`arc-${item.id}`}
              className="fire-arc" // <--- CSS CLASS HANDLES THE SNAKE
              d={`M 0 0 C ${item.x * 0.3} 0, ${item.x * 0.7} ${item.y}, ${item.x} ${item.y}`}
              fill="none"
              stroke="url(#fire-grad)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          ))}
        </svg>

        {/* HUB & POPUPS REMAIN THE SAME */}
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute z-50 w-72 h-72 rounded-full bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 p-[5px] shadow-[0_0_120px_rgba(255,69,0,0.5)]">
          <div className="w-full h-full bg-black rounded-full flex flex-col items-center justify-center text-center p-6 border-4 border-black">
             <h2 className="text-4xl font-black text-white uppercase">LEVELUP</h2>
          </div>
        </motion.div>

        {philosophyData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: 1, x: item.x, y: item.y }}
            transition={{ delay: 2.5 }} // Sync with CSS animation duration
            className="absolute z-40 w-[300px]"
            style={{ x: "-50%", y: "-50%" }}
          >
            <div className="bg-zinc-950 border border-orange-900/40 p-5 rounded-2xl">
              <h3 className="text-orange-500 font-black uppercase italic">{item.title}</h3>
              <p className="text-[11px] text-gray-400 uppercase">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}