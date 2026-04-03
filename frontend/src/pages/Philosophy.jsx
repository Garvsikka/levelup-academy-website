import React from "react";
import { motion } from "framer-motion";

const philosophyData = [
  // LEFT COLUMN
  { id: 1, title: "ROOTED IN VALUES & CHARACTER", desc: "Every class begins with the Gayatri Mantra. Education without values is incomplete.", x: -380, y: -180, arcDir: -1 },
  { id: 2, title: "PERSONALITY DEVELOPMENT", desc: "Knowledge w/o communication skills & confidence is incomplete. Part of our DNA.", x: -380, y: 50, arcDir: -1 },
  { id: 3, title: "GAMIFICATION & CINEMATIC", desc: "Educational games where problems unlock levels. ChatGPT & Self-driving car logic.", x: -320, y: 260, arcDir: -1 },
  
  // RIGHT COLUMN
  { id: 4, title: "100X YOUR FAMILY WEALTH", desc: "The ultimate goal we are studying for. Academic success is the passport to financial success.", x: 380, y: -260, arcDir: 1 },
  { id: 5, title: "HONOR YOUR SCHOOL TEACHERS", desc: "They are the core foundation of education. We complement schools, never replace them.", x: 340, y: -40, arcDir: 1 },
  { id: 6, title: "REPETITION IS MOTHER OF LEARNING", desc: "10 min formula tests every class. Mastery comes from repetition, not blind practice.", x: 380, y: 200, arcDir: 1 },
];

export default function Philosophy() {
  return (
    <div className="pt-32 min-h-[140vh] bg-black text-white flex items-center justify-center overflow-x-hidden pb-40">
      <div className="relative">
        
        {/* THE ARCS (Curved snaking lines) */}
        <svg className="absolute overflow-visible pointer-events-none" style={{ top: 0, left: 0 }}>
          <defs>
            <linearGradient id="warm-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff4500" />
              <stop offset="100%" stopColor="#ffd700" />
            </linearGradient>
          </defs>
          {philosophyData.map((item) => {
            // "S" Curve Logic: Pulls control point out then back
            const cx = item.x * 0.5; 
            const cy = item.y * 0.1; 

            return (
              <motion.path
                key={`arc-${item.id}`}
                d={`M 0 0 C ${cx} 0, ${cx} ${item.y}, ${item.x} ${item.y}`}
                fill="none"
                stroke="url(#warm-grad)"
                strokeWidth="2"
                strokeDasharray="8,4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              />
            );
          })}
        </svg>

        {/* THE CENTRAL HUB (Matched to your Design Text) */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="relative z-50 flex flex-col items-center justify-center text-center p-6"
        >
           <div className="absolute inset-0 bg-orange-600/20 blur-[80px] rounded-full"></div>
           <span className="text-xl font-light tracking-[0.3em] text-gray-400 uppercase">the iconic</span>
           <h2 className="text-6xl font-black text-white leading-none tracking-tighter">LEVELUP</h2>
           <h2 className="text-4xl font-light tracking-[0.2em] text-gray-300 uppercase">PHILOSOPHY</h2>
        </motion.div>

        {/* THE BUBBLES (Box Layout) */}
        {philosophyData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: item.x * 1.2, y: item.y }}
            animate={{ opacity: 1, x: item.x, y: item.y }}
            transition={{ delay: 0.8 + index * 0.1, type: "spring", damping: 20 }}
            className="absolute z-50 w-[300px]"
            style={{
              top: 0,
              left: 0,
              transform: `translate(-50%, -50%)`, // Centers the box on the coordinate
            }}
          >
            <div className="bg-zinc-950/90 backdrop-blur-md border-2 border-orange-900/30 p-5 rounded-2xl hover:border-orange-500 transition-all group shadow-2xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <h3 className="text-[13px] font-black text-orange-500 group-hover:text-yellow-500 tracking-wider uppercase">
                  {item.title}
                </h3>
              </div>
              <p className="text-[11px] text-gray-400 leading-relaxed font-medium uppercase tracking-tight">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}