import React from 'react';

export default function Home() {
  return (
    <div className="bg-black text-white font-sans selection:bg-brand-red">
      
      {/* 1. HERO SECTION (Screenshot 1.14.57) */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block border-l-4 border-brand-orange px-4 py-1 mb-6 bg-white/5">
            <span className="text-brand-orange font-bold text-sm">COMMERCE ली है तो LEVEL UP Join करना पड़ेगा</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-none mb-8">
            Master Commerce with <br/> 
            <span className="heading-accent text-7xl md:text-8xl">Excellence.</span>
          </h1>
          <div className="flex gap-4 mb-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <span className="flex items-center gap-2">✅ XI - XII</span>
            <span>|</span>
            <span>OFFLINE</span>
            <span>|</span>
            <span>ONLINE</span>
          </div>
          <p className="text-gray-400 text-lg mb-10 max-w-md">Transform your potential into excellence with the most trusted commerce mentors. Score 95+ in boards with proven methodology.</p>
          <div className="flex gap-4">
            <button className="volcanic-btn">Enrol Now — Free Demo</button>
            <button className="px-8 py-4 border border-white/20 rounded-xl font-bold hover:bg-white/5 transition-all">Explore Programs</button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-red to-brand-orange rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative aspect-[4/3] bg-[#111] rounded-3xl border border-white/10 flex items-center justify-center text-gray-700 font-black uppercase overflow-hidden">
             {/* TEMPLATE FOR HERO IMAGE */}
             [Founder Photo Placeholder]
          </div>
        </div>
      </section>

      {/* 2. STATS RIBBON (Screenshot 1.15.04) */}
      <div className="border-y border-white/5 bg-[#050505] py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 text-center">
          <div><h2 className="text-4xl font-black text-brand-red">25+</h2><p className="text-gray-500 uppercase text-xs font-bold tracking-widest mt-2">Years Experience</p></div>
          <div><h2 className="text-4xl font-black text-brand-orange">5000+</h2><p className="text-gray-500 uppercase text-xs font-bold tracking-widest mt-2">Students Taught</p></div>
          <div><h2 className="text-4xl font-black text-brand-yellow">98%</h2><p className="text-gray-500 uppercase text-xs font-bold tracking-widest mt-2">Success Rate</p></div>
        </div>
      </div>

      {/* 3. MEET YOUR FACULTY (Screenshot 1.15.23) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-16 uppercase tracking-tighter">Meet Your <span className="heading-accent">Faculty</span></h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="volcanic-card">
            <div className="aspect-[4/3] bg-gray-900 rounded-2xl mb-8 overflow-hidden">[Image: Faculty 1]</div>
            <h3 className="text-3xl font-black mb-1">Sumit Dang <span className="text-sm font-normal text-gray-500">— Accountancy</span></h3>
            <p className="text-brand-orange text-xs font-bold uppercase mb-4 italic">"Accountancy is about understanding the story behind transactions."</p>
            <ul className="space-y-3 text-gray-400 font-medium">
              <li className="flex items-center gap-3"> <span className="text-brand-red font-bold">✓</span> 25+ Years Experience in Commerce</li>
              <li className="flex items-center gap-3"> <span className="text-brand-red font-bold">✓</span> Chartered Accountant — Expert Mentor</li>
            </ul>
          </div>
          <div className="volcanic-card">
            <div className="aspect-[4/3] bg-gray-900 rounded-2xl mb-8 overflow-hidden">[Image: Faculty 2]</div>
            <h3 className="text-3xl font-black mb-1">Ashima Dang <span className="text-sm font-normal text-gray-500">— Economics</span></h3>
            <p className="text-brand-orange text-xs font-bold uppercase mb-4 italic">"Economics comes alive when you connect theory to reality."</p>
            <ul className="space-y-3 text-gray-400 font-medium">
              <li className="flex items-center gap-3"> <span className="text-brand-red font-bold">✓</span> CBSE Economics Board Topper</li>
              <li className="flex items-center gap-3"> <span className="text-brand-red font-bold">✓</span> Expert in Micro & Macro Analysis</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. TEACHING METHODOLOGY (Screenshot 1.16.02) */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black text-center mb-16 uppercase tracking-tighter">Teaching <span className="heading-accent">Methodology</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {['Assessment', 'Planning', 'Concept', 'Testing', 'Doubt', 'Reporting'].map((step, i) => (
              <div key={i} className="volcanic-card p-6 text-center rounded-2xl">
                <div className="w-12 h-12 bg-brand-red/10 border border-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-red font-black text-xl">{i+1}</div>
                <h4 className="font-black text-sm uppercase tracking-tighter">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION (Screenshot 1.16.13) */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl font-black mb-6 leading-none">Ready to Transform Your <br/><span className="heading-accent">Academic Future?</span></h2>
        <p className="text-gray-500 text-lg mb-12">Join thousands of successful students who have achieved excellence.</p>
        <div className="bg-brand-red/5 border border-brand-red/20 p-12 rounded-[3rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 animate-pulse">⚠️ <span className="text-[10px] font-bold text-brand-red uppercase tracking-widest">Limited Seats</span></div>
          <button className="volcanic-btn text-xl px-16 relative z-10">Claim Your Seat Now</button>
        </div>
      </section>

    </div>
  );
}