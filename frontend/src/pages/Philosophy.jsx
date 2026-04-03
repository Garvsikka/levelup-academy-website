import React from "react";
import { motion } from "framer-motion";

const philosophyData = [
  { id: 1, angle: -90, title: "100X YOUR FAMILY WEALTH", desc: "The ultimate goal we are studying for. Academic success is the passport to financial success." },
  { id: 2, angle: -150, title: "ROOTED IN VALUES & CHARACTER", desc: "Every class begins with the Gayatri Mantra. Education without values is incomplete." },
  { id: 3, angle: -30, title: "HONOR YOUR SCHOOL TEACHERS", desc: "They are the core foundation of education. We complement schools, never replace them." },
  { id: 4, angle: 150, title: "PERSONALITY DEVELOPMENT", desc: "Knowledge w/o communication skills & confidence is incomplete. Part of our DNA." },
  { id: 5, angle: 30, title: "REPETITION IS MOTHER OF LEARNING", desc: "10 min formula tests every class. Mastery comes from repetition, not blind practice." },
  { id: 6, angle: 90, title: "GAMIFICATION & CINEMATIC", desc: "Educational games where problems unlock levels. ChatGPT & Self-driving car logic." },
];

export default function Philosophy() {
  const radius = 380; // Distance from center to bubbles

  return (
    <div className="pt-32 min-h-screen bg-black text-white flex items-center justify-center overflow-hidden pb-40">
      <div className="relative">
        
        {/* THE ARCS (SVG Layer) */}
        <svg className="absolute overflow-visible pointer-events-none" style={{ top: 0, left: 0 }}>
          <defs>
            <linearGradient id="arc-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff4500" />
              <stop offset="100%" stopColor="#ffd700" />
            </linearGradient>
          </defs>
          {philosophyData.map((item) => {
            const rad = (item.angle * Math.PI) / 180;
            const tx = Math.cos(rad) * radius;
            const ty = Math.sin(rad) * radius;
            // Control point for the arc (halfway out but pulled slightly to create a curve)
            const cx = Math.cos(rad) * (radius / 2) + 50; 
            const cy = Math.sin(rad) * (radius / 2) - 50;

            return (
              <motion.path
                key={`arc-${item.id}`}
                d={`M 0 0 Q ${cx} ${cy} ${tx} ${ty}`}
                fill="none"
                stroke="url(#arc-grad)"
                strokeWidth="2"
                strokeDasharray="10,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            );
          })}
        </svg>

        {/* THE CENTRAL HUB */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="relative w-64 h-64 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 rounded-full flex flex-col items-center justify-center text-center p-6 z-50 shadow-[0_0_100px_rgba(255,69,0,0.4)] border-8 border-black"
        >
          <span className="text-[10px] font-black text-black/80 tracking-widest uppercase">The Iconic</span>
          <h2 className="text-2xl font-black text-black leading-none tracking-tighter italic">LEVELUP<br/>PHILOSOPHY</h2>
        </motion.div>

        {/* THE BUBBLES (Calculated Position) */}
        {philosophyData.map((item, index) => {
          const rad = (item.angle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="absolute z-50 w-[260px]"
              style={{
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="bg-black/95 backdrop-blur-xl border-2 border-orange-600/40 p-5 rounded-2xl hover:border-yellow-500 transition-all group shadow-[0_0_30px_rgba(0,0,0,1)]">
                <h3 className="text-xs font-black text-orange-500 mb-2 group-hover:text-yellow-400 tracking-widest uppercase italic">
                  {item.title}
                </h3>
                <p className="text-[11px] text-gray-400 leading-relaxed font-medium uppercase">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}