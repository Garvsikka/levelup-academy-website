import React from "react";
import { motion } from "framer-motion";

const philosophyData = [
  { id: 1, title: "100X YOUR FAMILY WEALTH", desc: "That's the ultimate goal we are studying for. Academic success is the passport to financial success.", pos: "top-[-120px] left-[50%] -translate-x-1/2" },
  { id: 2, title: "ROOTED IN VALUES & CHARACTER", desc: "Every class begins with the Gayatri Mantra. Education without spirituality & values is incomplete.", pos: "top-[20px] left-[-280px]" },
  { id: 3, title: "HONOR YOUR SCHOOL TEACHERS", desc: "They are the core foundation of education. We complement schools, never replace them.", pos: "top-[20px] right-[-280px]" },
  { id: 4, title: "PERSONALITY DEVELOPMENT", desc: "Part of the curriculum. Knowledge w/o communication skills & confidence is incomplete.", pos: "bottom-[20px] left-[-280px]" },
  { id: 5, title: "REPETITION IS MOTHER OF LEARNING", desc: "Every class starts with a 10 min formula test. Mastery comes from repetition, not blind practice.", pos: "bottom-[20px] right-[-280px]" },
  { id: 6, title: "GAMIFICATION & CINEMATIC", desc: "Educational games where problems unlock levels. How ChatGPT & Self-driving cars work?", pos: "bottom-[-120px] left-[50%] -translate-x-1/2" },
];

export default function Philosophy() {
  return (
    <div className="pt-32 min-h-screen bg-black text-white flex items-center justify-center overflow-hidden pb-40">
      <div className="relative w-[300px] h-[300px]">
        
        {/* SVG Gradient Connections */}
        <svg className="absolute inset-[-300px] w-[900px] h-[900px] pointer-events-none z-0">
          <defs>
            <linearGradient id="warm-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff4500" />
              <stop offset="50%" stopColor="#ff8c00" />
              <stop offset="100%" stopColor="#ffd700" />
            </linearGradient>
          </defs>
          {/* Centralized Lines */}
          <line x1="450" y1="450" x2="450" y2="200" stroke="url(#warm-grad)" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="450" y1="450" x2="450" y2="700" stroke="url(#warm-grad)" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="450" y1="450" x2="150" y2="350" stroke="url(#warm-grad)" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="450" y1="450" x2="750" y2="350" stroke="url(#warm-grad)" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="450" y1="450" x2="150" y2="550" stroke="url(#warm-grad)" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="450" y1="450" x2="750" y2="550" stroke="url(#warm-grad)" strokeWidth="2" strokeDasharray="5,5" />
        </svg>

        {/* Central Hub */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 rounded-full flex flex-col items-center justify-center text-center p-4 z-20 shadow-[0_0_50px_rgba(255,140,0,0.4)] border-4 border-black"
        >
          <span className="text-xs font-bold text-black/80">THE ICONIC</span>
          <h2 className="text-2xl font-black text-black leading-tight">LEVELUP<br/>PHILOSOPHY</h2>
        </motion.div>

        {/* Floating Content Bubbles */}
        {philosophyData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className={`absolute z-30 w-[240px] ${item.pos}`}
          >
            <div className="bg-zinc-950 border border-orange-500/30 p-4 rounded-xl hover:border-yellow-400 transition-all group">
              <h3 className="text-sm font-black text-orange-500 mb-2 group-hover:text-yellow-400">
                {item.title}
              </h3>
              <p className="text-[11px] text-gray-400 leading-relaxed uppercase tracking-tight">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}