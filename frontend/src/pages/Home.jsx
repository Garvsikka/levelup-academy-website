import React, { useState, useEffect } from 'react';

export default function Home() {
  // ONLY ONE STATE FOR POPUP
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if the user already closed the popup in this browser
    const isDismissed = localStorage.getItem('levelUpPopupDismissed');
    
    if (!isDismissed) {
      // Trigger the new popup after 3 seconds
      const timer = setTimeout(() => setShowPopup(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    // This flag stops it from coming back
    localStorage.setItem('levelUpPopupDismissed', 'true');
  };

  return (
    <div className="bg-black text-white font-sans selection:bg-brand-red">
      
      {/* --- SINGLE POPUP BLOCK (NEW VERSION) --- */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-black/90 backdrop-blur-md">
          <div className="volcanic-card max-w-lg w-full relative border-brand-red/50 shadow-[0_0_50px_rgba(255,0,0,0.3)]">
            <button onClick={closePopup} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-all text-xl">✕</button>
            <div className="text-brand-red font-black mb-2 tracking-[0.3em] uppercase text-[10px]">Enrollment 2026-27</div>
            <h2 className="text-4xl font-black mb-4 uppercase italic leading-tight">Master Your <br/><span className="heading-accent text-5xl">Future.</span></h2>
            <p className="text-gray-400 mb-8 text-sm leading-relaxed">Join the most intensive commerce mentorship program led by Vaibhav Khukhreja. Secure your 95+ Boards and CUET goals.</p>
            <button className="volcanic-btn w-full py-5" onClick={closePopup}>Secure My Seat Now</button>
          </div>
        </div>
      )}

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block border-l-4 border-brand-red px-4 py-1 mb-6 bg-white/5">
            <span className="text-brand-orange font-bold text-xs tracking-widest uppercase">Level Up Academy</span>
          </div>
          <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
            Build Your <br/> 
            <span className="heading-accent text-8xl">Legacy.</span>
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-md">Experience professional commerce mentorship for Class XI, XII & CUET. Led by Vaibhav Khukhreja.</p>
          <button className="volcanic-btn">Start Your Journey</button>
        </div>
        <div className="relative aspect-[4/5] bg-neutral-900 rounded-[2.5rem] border border-white/5 flex items-center justify-center text-gray-700 font-black uppercase tracking-widest overflow-hidden">
          [Image: Vaibhav Khukhreja]
        </div>
      </section>

      {/* --- SYMMETRICAL PROGRAMS GRID --- */}
      <section className="py-32 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-20 uppercase tracking-tighter">Academic <span className="heading-accent">Programs</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Foundation XI", 
                desc: "Mastering the core fundamentals of Accountancy and Economics. We build the base that others ignore for Class XI students.",
                tag: "CORE"
              },
              { 
                title: "Board Mastery XII", 
                desc: "High-intensity board prep with targeted mock tests and specialized answer-writing drills to hit that 95+ score.",
                tag: "95+ GOAL"
              },
              { 
                title: "Pro-Commerce + CUET", 
                desc: "The ultimate pathway to SRCC and top-tier DU colleges. Includes integrated coaching for both Boards and CUET.",
                tag: "ELITE BATCH"
              }
            ].map((course, i) => (
              <div key={i} className="volcanic-card flex flex-col h-full border-white/5 hover:border-brand-red/30 transition-all duration-500">
                <div className="mb-6">
                  <span className="text-[9px] font-black tracking-widest text-brand-red uppercase bg-brand-red/10 px-3 py-1.5 rounded-md border border-brand-red/20">
                    {course.tag}
                  </span>
                </div>
                <h4 className="text-2xl font-black mb-4 uppercase italic">{course.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-10 flex-grow">
                  {course.desc}
                </p>
                <button className="w-full py-4 rounded-xl font-black bg-white/5 hover:bg-brand-red text-white transition-all uppercase text-[10px] tracking-widest border border-white/10">
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