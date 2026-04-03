import React from "react";
import { motion } from "framer-motion";

const philosophyData = [
  { id: 1, title: "ROOTED IN VALUES & CHARACTER", desc: "Every class begins with the Gayatri Mantra. Education without values is incomplete.", x: -480, y: -240 },
  { id: 2, title: "PERSONALITY DEVELOPMENT", desc: "Knowledge w/o communication skills & confidence is incomplete. Part of our DNA.", x: -520, y: 0 },
  { id: 3, title: "GAMIFICATION & CINEMATIC", desc: "Educational games where problems unlock levels. ChatGPT & Self-driving car logic.", x: -480, y: 240 },
  { id: 4, title: "100X YOUR FAMILY WEALTH", desc: "The ultimate goal we are studying for. Academic success is the passport to financial success.", x: 480, y: -240 },
  { id: 5, title: "HONOR YOUR SCHOOL TEACHERS", desc: "They are the core foundation of education. We complement schools, never replace them.", x: 520, y: 0 },
  { id: 6, title: "REPETITION IS MOTHER OF LEARNING", desc: "10 min formula tests every class. Mastery comes from repetition, not blind practice.", x: 480, y: 240 },
];

export default function Philosophy() {
  return (
    <div className="pt-32 min-h-[140vh] bg-black text-white flex items-center justify-center overflow-x-hidden pb-40">
      <div className="relative w-0 h-0 flex items-center justify-center">
        
        {/* THE DYNAMIC FIRE ARCS */}
        <svg className="absolute overflow-visible pointer-events-none" style={{ width: 0, height: 0 }}>
          <defs>
            {/* THIS IS THE TRI-COLOR GRADIENT YOU ASKED FOR */}
            <linearGradient id="fire-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff0000" />    {/* RED */}
              <stop offset="50%" stopColor="#ff8c00" />   {/* ORANGE */}
              <stop offset="100%" stopColor="#ffd700" />  {/* YELLOW */}
            </linearGradient>
          </defs>
          {philosophyData.map((item) => (
            <motion.path
              key={`arc-${item.id}`}
              // The 'C' command creates the snake-like curve
              d={`M 0 0 C ${item.x * 0.3} 0, ${item.x * 0.7} ${item.y}, ${item.x} ${item.y}`}
              fill="none"
              stroke="url(#fire-grad)"
              strokeWidth="3"
              strokeDasharray="12,6"
              strokeLinecap="round"
              // THIS MAKES THEM DYNAMIC (SNAKING OUT)
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
            />
          ))}
        </svg>

        {/* THE CENTRAL HUB (Perfect Circle) */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute z-50 w-72 h-72 rounded-full bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 p-[5px] shadow-[0_0_120px_rgba(255,69,0,0.5)] flex-shrink-0"
        >
          <div className="w-full h-full bg-black rounded-full flex flex-col items-center justify-center text-center p-6 border-4 border-black">
            <span className="text-[10px] font-black tracking-[0.4em] text-orange-500 uppercase mb-2">the iconic</span>
            <h2 className="text-4xl font-black text-white leading-none tracking-tighter uppercase">LEVELUP</h2>
            <h2 className="text-sm font-light tracking-[0.3em] text-gray-400 uppercase mt-2 border-t border-white/10 pt-2">PHILOSOPHY</h2>
          </div>
        </motion.div>

        {/* THE POPUPS */}
        {philosophyData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            animate={{ opacity: 1, scale: 1, x: item.x, y: item.y }}
            transition={{ delay: 1.5 + (index * 0.1), type: "spring", damping: 18 }}
            className="absolute z-40 w-[300px]"
            style={{ x: "-50%", y: "-50%" }}
          >
            <div className="bg-zinc-950/95 backdrop-blur-md border border-orange-900/40 p-5 rounded-2xl hover:border-yellow-500 transition-all group shadow-2xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-red-600 rounded-full shadow-[0_0_8px_#ff0000]"></div>
                <h3 className="text-[12px] font-black text-orange-500 tracking-wider uppercase italic">
                  {item.title}
                </h3>
              </div>
              <p className="text-[11px] text-gray-400 leading-relaxed font-medium uppercase tracking-tighter">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}