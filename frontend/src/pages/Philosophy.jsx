import React from "react";
import { motion } from "framer-motion";

const philosophyData = [
  // LEFT COLUMN
  { id: 1, title: "ROOTED IN VALUES & CHARACTER", desc: "Every class begins with the Gayatri Mantra. Education without values is incomplete.", x: -460, y: -200 },
  { id: 2, title: "PERSONALITY DEVELOPMENT", desc: "Knowledge w/o communication skills & confidence is incomplete. Part of our DNA.", x: -500, y: 20 },
  { id: 3, title: "GAMIFICATION & CINEMATIC", desc: "Educational games where problems unlock levels. ChatGPT & Self-driving car logic.", x: -440, y: 240 },
  
  // RIGHT COLUMN
  { id: 4, title: "100X YOUR FAMILY WEALTH", desc: "The ultimate goal we are studying for. Academic success is the passport to financial success.", x: 460, y: -220 },
  { id: 5, title: "HONOR YOUR SCHOOL TEACHERS", desc: "They are the core foundation of education. We complement schools, never replace them.", x: 500, y: -20 },
  { id: 6, title: "REPETITION IS MOTHER OF LEARNING", desc: "10 min formula tests every class. Mastery comes from repetition, not blind practice.", x: 460, y: 200 },
];

export default function Philosophy() {
  return (
    <div className="pt-32 min-h-[140vh] bg-black text-white flex items-center justify-center overflow-x-hidden pb-40">
      <div className="relative">
        
        {/* THE 6 ARCS */}
        <svg className="absolute overflow-visible pointer-events-none" style={{ top: 0, left: 0 }}>
          <defs>
            <linearGradient id="arc-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff4500" />
              <stop offset="100%" stopColor="#ffd700" />
            </linearGradient>
          </defs>
          {philosophyData.map((item) => (
            <motion.path
              key={`arc-${item.id}`}
              // C creates the 'S' curve. x1,y1 and x2,y2 are control points.
              d={`M 0 0 C ${item.x * 0.3} 0, ${item.x * 0.7} ${item.y}, ${item.x} ${item.y}`}
              fill="none"
              stroke="url(#arc-grad)"
              strokeWidth="2.5"
              strokeDasharray="10,5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 1.4, delay: 0.3, ease: "easeInOut" }}
            />
          ))}
        </svg>

        {/* THE CENTRAL HUB (Restored Orange Ring) */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="relative z-50 w-72 h-72 rounded-full bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500 p-[6px] shadow-[0_0_120px_rgba(234,88,12,0.4)]"
        >
          <div className="w-full h-full bg-black rounded-full flex flex-col items-center justify-center text-center p-6 border-4 border-black">
            <span className="text-[10px] font-black tracking-[0.4em] text-orange-500 uppercase mb-1">the iconic</span>
            <h2 className="text-4xl font-black text-white leading-none tracking-tighter mb-1 uppercase">LEVELUP</h2>
            <h2 className="text-lg font-light tracking-[0.2em] text-gray-400 uppercase">PHILOSOPHY</h2>
          </div>
        </motion.div>

        {/* THE 6 POPUPS (Locked to Arc Ends) */}
        {philosophyData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 + (index * 0.1), type: "spring", stiffness: 120 }}
            className="absolute z-40 w-[300px]"
            style={{
              top: 0,
              left: 0,
              // translate(-50%, -50%) ensures the box center matches the arc endpoint
              transform: `translate(calc(-50% + ${item.x}px), calc(-50% + ${item.y}px))`
            }}
          >
            <div className="bg-zinc-950/95 backdrop-blur-md border-2 border-orange-900/40 p-5 rounded-2xl hover:border-yellow-500 transition-all group shadow-2xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_8px_#ff4500]"></div>
                <h3 className="text-[12px] font-black text-orange-500 group-hover:text-yellow-400 tracking-wider uppercase italic">
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