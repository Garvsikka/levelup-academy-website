import React from "react";
import { motion } from "framer-motion";

const philosophyData = [
  { id: 1, title: "ROOTED IN VALUES", desc: "Every class begins with Gayatri Mantra. Education without character is hollow.", color: "from-gold to-yellow-600" },
  { id: 2, title: "100X FAMILY WEALTH", desc: "Academic success is the vehicle for financial freedom and legacy.", color: "from-neon-cyan to-blue-500" },
  { id: 3, title: "HONOR TEACHERS", desc: "We complement school foundations, fostering deep respect for educators.", color: "from-gold to-neon-cyan" },
  { id: 4, title: "REPETITION MASTERY", desc: "10-minute formula tests every single class. Mastery is a habit.", color: "from-yellow-600 to-gold" },
  { id: 5, title: "GAMIFIED LEARNING", desc: "Complex logic taught through cinematic AI and tech analogies.", color: "from-blue-500 to-neon-cyan" },
  { id: 6, title: "PERSONALITY DNA", desc: "Communication and confidence are not extras; they are the curriculum.", color: "from-neon-cyan to-gold" },
];

export default function Philosophy() {
  return (
    <div className="pt-32 min-h-screen bg-black text-white overflow-hidden pb-20">
      <div className="max-w-6xl mx-auto px-6 relative">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-center mb-20"
        >
          <h1 className="cinematic-text text-5xl gold-accent italic font-black mb-4">THE BLUEPRINT</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-gold to-transparent mx-auto"></div>
        </motion.div>

        {/* Central Hub */}
        <div className="relative flex flex-wrap justify-center gap-12">
          
          {/* SVG Gradient Lines (Background layer) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 hidden lg:block">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#00F3FF" />
              </linearGradient>
            </defs>
            <path d="M 300,100 L 800,500" stroke="url(#grad1)" strokeWidth="1" fill="none" />
            <path d="M 800,100 L 300,500" stroke="url(#grad1)" strokeWidth="1" fill="none" />
          </svg>

          {/* Philosophy Bubbles */}
          {philosophyData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10 }}
              className="relative z-10 w-full md:w-[30%] group"
            >
              <div className={`p-1 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg group-hover:shadow-gold/20 transition-all`}>
                <div className="bg-black rounded-[14px] p-6 h-full border border-white/5">
                  <span className="text-xs font-bold text-gold/50 mb-2 block italic">0{index + 1}</span>
                  <h3 className="text-lg font-black mb-3 tracking-tighter text-white group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
              
              {/* Connector Glow (Decorative) */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${item.color} blur-xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
            </motion.div>
          ))}
        </div>

        {/* Final Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center border-t border-white/10 pt-12"
        >
          <p className="text-gray-500 uppercase tracking-[0.3em] text-xs mb-2">Established to Disrupt</p>
          <h2 className="text-2xl font-light italic">"Standardized testing is the floor. <span className="gold-accent font-black">Excellence is the ceiling.</span>"</h2>
        </motion.div>
      </div>
    </div>
  );
}