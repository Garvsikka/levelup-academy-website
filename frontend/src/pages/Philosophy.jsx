import React from "react";
import { motion } from "framer-motion";

const philosophyData = [
  { id: 1, title: "100X YOUR FAMILY WEALTH", desc: "The ultimate goal we are studying for. Academic success is the passport to financial success.", x: 0, y: -250 },
  { id: 2, title: "ROOTED IN VALUES & CHARACTER", desc: "Every class begins with the Gayatri Mantra. Education without spirituality & values is incomplete.", x: -400, y: -80 },
  { id: 3, title: "HONOR YOUR SCHOOL TEACHERS", desc: "They are the core foundation of education. We complement schools, never replace them.", x: 400, y: -80 },
  { id: 4, title: "PERSONALITY DEVELOPMENT", desc: "Part of the curriculum. Knowledge w/o communication skills & confidence is incomplete.", x: -400, y: 120 },
  { id: 5, title: "REPETITION IS MOTHER OF LEARNING", desc: "Every class starts with a 10 min formula test. Mastery comes from repetition, not blind practice.", x: 400, y: 120 },
  { id: 6, title: "GAMIFICATION & CINEMATIC", desc: "Educational games where problems unlock levels. How ChatGPT & Self-driving cars work?", x: 0, y: 280 },
];

export default function Philosophy() {
  return (
    <div className="pt-32 min-h-[120vh] bg-black text-white flex items-center justify-center overflow-x-hidden pb-40">
      {/* THE MASTER CONTAINER: Everything is relative to this point */}
      <div className="relative w-1 h-1 flex items-center justify-center">
        
        {/* THE LINES: Starting from center (0,0) to bubble coordinates */}
        <svg className="absolute overflow-visible w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff4500" />
              <stop offset="100%" stopColor="#ffd700" />
            </linearGradient>
          </defs>
          {philosophyData.map((item) => (
            <line 
              key={`line-${item.id}`}
              x1="0" y1="0" 
              x2={item.x} y2={item.y} 
              stroke="url(#line-grad)" 
              strokeWidth="2" 
              strokeDasharray="8,4"
              opacity="0.5"
            />
          ))}
        </svg>

        {/* THE CENTRAL HUB */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute w-64 h-64 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 rounded-full flex flex-col items-center justify-center text-center p-4 z-20 shadow-[0_0_80px_rgba(255,69,0,0.6)] border-8 border-black"
        >
          <span className="text-[10px] font-bold text-black/80 tracking-widest uppercase">The Iconic</span>
          <h2 className="text-2xl font-black text-black leading-none tracking-tighter">LEVELUP<br/>PHILOSOPHY</h2>
        </motion.div>

        {/* THE BUBBLES */}
        {philosophyData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            style={{ 
              position: 'absolute',
              transform: `translate(${item.x}px, ${item.y}px) translate(-50%, -50%)`,
              left: 0,
              top: 0
            }}
            className="z-30 w-[280px]"
          >
            <div className="bg-black/90 backdrop-blur-md border-2 border-orange-600/50 p-5 rounded-2xl hover:border-yellow-500 transition-all group shadow-2xl">
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