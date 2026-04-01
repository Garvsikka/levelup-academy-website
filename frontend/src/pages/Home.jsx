import React, { useState, useEffect } from 'react';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // 1. THE GUARD: Prevents the popup from ever appearing again if dismissed
    if (localStorage.getItem('popup_seen_v1')) return;

    const timer = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const killPopupPermanently = () => {
    setShowPopup(false);
    localStorage.setItem('popup_seen_v1', 'true');
  };

  return (
    <div className="bg-black text-white font-sans selection:bg-brand-yellow selection:text-black">
      
      {/* PERSISTENT VOLCANIC POPUP */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-black/90 backdrop-blur-md">
          <div className="bg-[#0a0a0a] border-2 border-brand-red/50 p-8 rounded-[2rem] max-w-lg w-full relative shadow-[0_0_50px_rgba(255,0,0,0.3)]">
            <button onClick={killPopupPermanently} className="absolute top-4 right-4 text-gray-500 hover:text-brand-yellow transition-all text-xl">✕</button>
            <div className="text-brand-yellow font-black mb-2 tracking-[0.3em] uppercase text-[10px]">Enrollment 2026-27</div>
            <h2 className="text-4xl font-black mb-4 uppercase italic leading-tight">Master Your <br/><span className="text-transparent bg-clip-text bg-lava-gradient text-5xl">Future.</span></h2>
            <p className="text-gray-400 mb-8 text-sm leading-relaxed">Join the intensive commerce mentorship program by <span className="text-white font-bold">Vaibhav Khukhreja</span>.</p>
            <button className="w-full py-5 bg-brand-red hover:bg-brand-orange text-white font-black uppercase transition-all rounded-xl shadow-lg" onClick={killPopupPermanently}>
              Secure My Strategy Session
            </button>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block border-l-4 border-brand-yellow px-4 py-1 mb-6 bg-brand-yellow/5">
            <span className="text-brand-yellow font-bold text-xs tracking-widest uppercase">Level Up Academy</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-8">
            OWN YOUR <br/> 
            <span className="text-transparent bg-clip-text bg-lava-gradient">LEGACY.</span>
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-md border-l border-brand-orange/30 pl-6">
            Premier commerce mentorship for Class XI, XII & CUET. Led by <span className="text-brand-orange italic font-bold text-white">Vaibhav Khukhreja</span>.
          </p>
          <button className="px-10 py-4 bg-brand-red hover:bg-brand-orange text-white font-black rounded-xl transition-all shadow-[0_10px_30px_rgba(255,0,0,0.2)] uppercase tracking-widest text-xs">
            Start Now
          </button>
        </div>
        <div className="relative p-[2px] bg-gradient-to-tr from-brand-red via-brand-orange to-brand-yellow rounded-[2.5rem]">
           <div className="bg-black aspect-[4/5] rounded-[2.5rem] flex items-center justify-center text-brand-orange font-black uppercase text-[10px] tracking-widest">
             [Vaibhav Photo]
           </div>
        </div>
      </section>

      {/* SYMMETRICAL COLOR-CODED PROGRAMS GRID */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-20 uppercase tracking-tighter italic">
            Academic <span className="text-brand-red underline decoration-brand-yellow decoration-4 underline-offset-8">Programs</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Foundation XI", color: "text-brand-red", border: "border-brand-red/20", tag: "The Start" },
              { title: "Board Mastery XII", color: "text-brand-orange", border: "border-brand-orange/20", tag: "The Heat" },
              { title: "Pro-Commerce + CUET", color: "text-brand-yellow", border: "border-brand-yellow/20", tag: "The Gold" }
            ].map((course, i) => (
              <div key={i} className={`bg-[#0a0a0a] p-8 rounded-[2rem] flex flex-col h-full border ${course.border} hover:border-brand-yellow/50 transition-all duration-500`}>
                <span className={`text-[10px] font-black tracking-widest uppercase mb-6 ${course.color}`}>
                  {course.tag}
                </span>
                <h4 className="text-3xl font-black mb-4 uppercase italic tracking-tighter">{course.title}</h4>
                <p className="text-gray-500 text-sm mb-10 flex-grow leading-relaxed">
                  Deep-dive conceptual coaching to ensure 100% clarity and a path toward 95+ board scores.
                </p>
                <button className="w-full py-4 rounded-xl font-black bg-white/5 hover:bg-white hover:text-black transition-all uppercase text-[10px] tracking-widest border border-white/10">
                  View Syllabus
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}