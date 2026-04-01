import React from 'react';

export default function Home() {
  return (
    <div className="bg-black text-white font-sans selection:bg-brand-red">
      
      {/* 1. HERO SECTION - Level Up Branding */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block border-l-4 border-brand-red px-4 py-1 mb-6 bg-white/5">
            <span className="text-brand-orange font-bold text-sm tracking-widest uppercase">Level Up Your Ambition</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-none mb-8">
            Define Your <br/> 
            <span className="heading-accent text-7xl md:text-8xl">Legacy.</span>
          </h1>
          <div className="flex gap-4 mb-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <span className="flex items-center gap-2 text-brand-red">● XI & XII Boards</span>
            <span>|</span>
            <span>Professional Courses</span>
            <span>|</span>
            <span>CUET Prep</span>
          </div>
          <p className="text-gray-400 text-lg mb-10 max-w-md">Experience the premier commerce coaching led by Vaibhav Khukhreja. We don't just teach; we mentor future industry leaders through conceptual rigor.</p>
          <div className="flex gap-4">
            <button className="volcanic-btn">Book a Strategy Session</button>
            <button className="px-8 py-4 border border-white/20 rounded-xl font-bold hover:bg-brand-red/10 transition-all">View Prospectus</button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-red to-brand-orange rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative aspect-[4/5] bg-[#111] rounded-3xl border border-white/10 flex items-center justify-center text-gray-700 font-black uppercase overflow-hidden">
             [Image: Vaibhav Khukhreja]
          </div>
        </div>
      </section>

      {/* 2. ACADEMY STATS - From Prospectus */}
      <div className="border-y border-white/5 bg-[#050505] py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><h2 className="text-4xl font-black text-white">95+</h2><p className="text-brand-red uppercase text-[10px] font-bold tracking-[0.2em] mt-2">Board Scores</p></div>
          <div><h2 className="text-4xl font-black text-white">500+</h2><p className="text-brand-red uppercase text-[10px] font-bold tracking-[0.2em] mt-2">Professional Selections</p></div>
          <div><h2 className="text-4xl font-black text-white">1:1</h2><p className="text-brand-red uppercase text-[10px] font-bold tracking-[0.2em] mt-2">Mentorship Ratio</p></div>
          <div><h2 className="text-4xl font-black text-white">100%</h2><p className="text-brand-red uppercase text-[10px] font-bold tracking-[0.2em] mt-2">Conceptual Clarity</p></div>
        </div>
      </div>

      {/* 3. FACULTY LEADERSHIP */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-16 uppercase tracking-tighter">Academic <span className="heading-accent">Leadership</span></h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Mentor: Vaibhav Khukhreja */}
          <div className="volcanic-card">
            <div className="aspect-square bg-gray-900 rounded-2xl mb-8 overflow-hidden flex items-center justify-center text-gray-800 font-black uppercase tracking-[0.5em]">
              [Profile Photo]
            </div>
            <h3 className="text-3xl font-black mb-1 italic">Vaibhav Khukhreja</h3>
            <p className="text-brand-orange text-xs font-bold uppercase mb-4 tracking-widest">Lead Mentor & Founder</p>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">Dedicated to revolutionizing commerce education by bridging the gap between theoretical textbooks and practical application.</p>
            <ul className="space-y-3 text-gray-300 text-sm font-medium">
              <li className="flex items-center gap-3"> <span className="text-brand-red">■</span> Expert in Advanced Accountancy & Finance</li>
              <li className="flex items-center gap-3"> <span className="text-brand-red">■</span> Mentored 1000+ Students for Board Excellence</li>
            </ul>
          </div>

          {/* FACULTY TEMPLATE - For Future Mentors */}
          <div className="volcanic-card border-dashed border-white/10 opacity-80">
            <div className="aspect-square bg-gray-900/50 rounded-2xl mb-8 border border-white/5 flex items-center justify-center text-gray-800">
               <span className="text-xs font-bold uppercase tracking-widest">Mentor Image Slot</span>
            </div>
            <h3 className="text-3xl font-black mb-1 text-gray-500 italic">[Faculty Name]</h3>
            <p className="text-gray-600 text-[10px] font-bold uppercase mb-4 tracking-widest italic">Subject Expert</p>
            <div className="h-20 w-full bg-white/5 rounded-lg mb-6 border border-white/5 flex items-center justify-center italic text-gray-600 text-xs">
              Brief faculty bio and teaching philosophy goes here...
            </div>
            <div className="space-y-2">
              <div className="h-2 w-3/4 bg-white/5 rounded"></div>
              <div className="h-2 w-1/2 bg-white/5 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LEVEL UP METHODOLOGY - Rebranded Steps */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black mb-16 uppercase tracking-tighter">The <span className="heading-accent">Level Up</span> Way</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { t: 'Concept First', d: 'No Rote Learning' },
              { t: 'Rigorous Testing', d: 'Weekly Evaluation' },
              { t: 'Doubt Clearance', d: 'Instant Resolution' },
              { t: 'Performance Tracking', d: 'Data-Driven Insights' }
            ].map((step, i) => (
              <div key={i} className="volcanic-card p-10 hover:bg-brand-red/5">
                <p className="text-brand-red font-black text-4xl mb-4">0{i+1}</p>
                <h4 className="font-black text-sm uppercase mb-2">{step.t}</h4>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}