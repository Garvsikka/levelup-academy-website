import React from "react";
import { motion } from "framer-motion";

const philosophyData = [
  { id: 1, title: "100X YOUR FAMILY WEALTH", desc: "The ultimate goal we are studying for. Academic success is the passport to financial success.", pos: "top-[-240px] left-1/2 -translate-x-1/2" },
  { id: 2, title: "ROOTED IN VALUES & CHARACTER", desc: "Every class begins with the Gayatri Mantra. Education without spirituality & values is incomplete.", pos: "top-[-80px] left-[-380px]" },
  { id: 3, title: "HONOR YOUR SCHOOL TEACHERS", desc: "They are the core foundation of education. We complement schools, never replace them.", pos: "top-[-80px] right-[-380px]" },
  { id: 4, title: "PERSONALITY DEVELOPMENT", desc: "Part of the curriculum. Knowledge w/o communication skills & confidence is incomplete.", pos: "bottom-[-80px] left-[-380px]" },
  { id: 5, title: "REPETITION IS MOTHER OF LEARNING", desc: "Every class starts with a 10 min formula test. Mastery comes from repetition, not blind practice.", pos: "bottom-[-80px] right-[-380px]" },
  { id: 6, title: "GAMIFICATION & CINEMATIC", desc: "Educational games where problems unlock levels. How ChatGPT & Self-driving cars work?", pos: "bottom-[-240px] left-1/2 -translate-x-1/2" },
];

export default function Philosophy() {
  return (
    <div className="pt-32 min-h-[130vh] bg-black text-white flex items-center justify-center overflow-x-hidden pb-40">
      <div className="relative w-[300px] h-[300px]">
        
        {/* SVG using Percentage Coordinates for Perfect Connection */}
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] pointer-events-none z-0">
          <defs>
            <linearGradient id="warm-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff4500" />
              <stop offset="100%" stopColor="#ffd700" />
            </linearGradient>
          </defs>
          <g transform="translate(50vw, 50vh)">
            {/* 6 Lines starting from (0,0) center and reaching out to the bubbles */}
            <line x1="0" y1="0" x2="0" y2="-220" stroke="url(#warm-grad)" strokeWidth="2" strokeDasharray="8,4" opacity="0.6" />
            <line x1="0" y1="0" x2="0" y2="220" stroke="url(#warm-grad)" strokeWidth="2" strokeDasharray="8,4" opacity="0.6" />
            <line x1="0" y1="0" x2="-350" y2="-100" stroke="url(#warm-grad)" strokeWidth="2" strokeDasharray="8,4" opacity="0.6" />
            <line x1="0" y1="0" x2="350" y2="-100" stroke="url(#warm-grad)" strokeWidth="2" strokeDasharray="8,4" opacity="0.6" />
            <line x1="0" y1="0" x2="-350" y2="100" stroke="url(#warm-grad)" strokeWidth="2" strokeDasharray="8,4" opacity="0.6" />
            <line x1="0" y1="0" x2="350" y2="100" stroke="url(#warm-grad)" strokeWidth="2" strokeDasharray="8,4" opacity="0.6" />
          </g>
        </svg>

        {/* Central Hub */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 rounded-full flex flex-col items-center justify-center text-center p-4 z-20 shadow-[0_0_80px_rgba(255,69,0,0.6)] border-8 border-black"
        >
          <span className="text-[10px] font-bold text-black/80 tracking-widest uppercase">The Iconic</span>
          <h2 className="text-2xl font-black text-black leading-none tracking-tighter">LEVELUP<br/>PHILOSOPHY</h2>
        </motion.div>

        {/* Floating Content Bubbles */}
        {philosophyData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + index * 0.1 }}
            className={`absolute z-30 w-[280px] ${item.pos}`}
          >
            <div className="bg-black/95 backdrop-blur-md border-2 border-orange-600/50 p-5 rounded-2xl hover:border-yellow-500 transition-all group shadow-2xl">
              <h3 className="text-xs font-black text-orange-500 mb-2 group-hover:text-yellow-400 tracking-widest uppercase italic">
                {item.title}
              </h3>
              <p className="text-[12px] text-gray-300 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}