import React from "react";
import { motion } from "framer-motion";

const philosophyData = [
  // LEFT COLUMN - Pushed further left (-480) and spread vertically
  { id: 1, title: "ROOTED IN VALUES & CHARACTER", desc: "Every class begins with the Gayatri Mantra. Education without values is incomplete.", x: -480, y: -200 },
  { id: 2, title: "PERSONALITY DEVELOPMENT", desc: "Knowledge w/o communication skills & confidence is incomplete. Part of our DNA.", x: -480, y: 20 },
  { id: 3, title: "GAMIFICATION & CINEMATIC", desc: "Educational games where problems unlock levels. ChatGPT & Self-driving car logic.", x: -420, y: 240 },
  
  // RIGHT COLUMN - Pushed further right (480)
  { id: 4, title: "100X YOUR FAMILY WEALTH", desc: "The ultimate goal we are studying for. Academic success is the passport to financial success.", x: 480, y: -220 },
  { id: 5, title: "HONOR YOUR SCHOOL TEACHERS", desc: "They are the core foundation of education. We complement schools, never replace them.", x: 450, y: -20 },
  { id: 6, title: "REPETITION IS MOTHER OF LEARNING", desc: "10 min formula tests every class. Mastery comes from repetition, not blind practice.", x: 480, y: 200 },
];

export default function Philosophy() {
  return (
    <div className="pt-32 min-h-[140vh] bg-black text-white flex items-center justify-center overflow-x-hidden pb-40">
      <div className="relative">
        
        {/* THE ARCS (SVG Layer) */}
        <svg className="absolute overflow-visible pointer-events-none" style={{ top: 0, left: 0 }}>
          <defs>
            <linearGradient id="warm-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff4500" />
              <stop offset="100%" stopColor="#ffd700" />
            </linearGradient>
          </defs>
          {philosophyData.map((item) => {
            // Cubic Bezier to create the "S" curve
            const cx1 = item.x * 0.3; // First control point (exit from hub)
            const cy1 = 0;
            const cx2 = item.x * 0.7; // Second control point (approach to bubble)
            const cy2 = item.y;

            return (
              <motion.path
                key={`arc-${item.id}`}
                d={`M 0 0 C ${cx1} ${cy1}, ${cx2} ${cy2}, ${item.x} ${item.y}`}
                fill="none"
                stroke="url(#warm-grad)"
                strokeWidth="2.5"
                strokeDasharray="10,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            );
          })}
        </svg>

        {/* THE CENTRAL HUB (The Anchor) */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="relative z-50 w-72 h-72 rounded-full bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500 p-[6px] shadow-[0_0_120px_rgba(234,88,12,0.4)]"
        >
          <div className="w-full h-full bg-black rounded-full flex flex-col items-center justify-center text-center p-6 border-4 border-black">
            <span className="text-[10px] font-black tracking-[0.4em] text-orange-500 uppercase mb-1">the iconic</span>
            <h2 className="text-4xl font-black text-white leading-none tracking-tighter mb-1">LEVELUP</h2>
            <h2 className="text-lg font-light tracking-[0.2em] text-gray-400 uppercase">PHILOSOPHY</h2>
          </div>
        </motion.div>

        {/* THE BUBBLES (Forced Distance) */}
        {philosophyData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: item.x * 1.1 }}
            animate={{ opacity: 1, x: item.x }}
            transition={{ delay: 0.8 + index * 0.1, type: "spring", damping: 15 }}
            className="absolute z-40 w-[320px]"
            style={{
              top: 0,
              left: 0,
              // Fixed translation to prevent stacking
              transform: `translate(calc(-50% + ${item.x}px), calc(-50% + ${item.y}px))`,
            }}
          >
            <div className="bg-zinc-950/95 backdrop-blur-md border-2 border-orange-900/40 p-5 rounded-2xl hover:border-yellow-500 transition-all group shadow-2xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <h3 className="text-[13px] font-black text-orange-500 group-hover:text-yellow-400 tracking-wider uppercase italic">
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