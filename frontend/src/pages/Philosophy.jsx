import React from 'react';
import { ShieldCheck, Heart, UserCheck, Flame, Scale, Anchor } from 'lucide-react';

const PhilosophyRequirement = ({ icon: Icon, title, desc }) => (
  <div className="group bg-[#0a0a0a] border border-gray-900 p-10 rounded-[50px] hover:border-red-600 transition-all duration-500">
    <div className="bg-gray-950 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-gray-800 group-hover:scale-110 transition-transform">
      <Icon className="w-8 h-8 text-red-600" />
    </div>
    <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{title}</h3>
    <p className="text-gray-400 font-medium leading-relaxed italic">"{desc}"</p>
  </div>
);

const Philosophy = () => {
  return (
    <div className="bg-[#000000] min-h-screen font-sans text-white overflow-x-hidden">
      
      {/* 1. THE MANIFESTO HERO */}
      <section className="relative pt-32 pb-24 px-6 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent blur-[120px]"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-950/30 border border-red-900/50 mb-10">
            <ShieldCheck className="w-4 h-4 text-red-500" />
            <span className="text-red-500 text-xs font-black uppercase tracking-[0.4em]">The LevelUp Code</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-10 uppercase">
            CORE <br />
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent italic">PHILOSOPHY</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-bold max-w-3xl mx-auto leading-relaxed border-y border-gray-900 py-8">
            We are not a "Tuition Center." We are a high-performance ecosystem where character is built alongside the marksheet.
          </p>
        </div>
      </section>

      {/* 2. THE NON-NEGOTIABLES GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <PhilosophyRequirement 
            icon={Heart}
            title="Honor Your School Teachers"
            desc="You are strictly forbidden from disrespecting your school teachers. They are the foundation of your formal education. Disrespect at school means no place at LevelUp."
          />

          <PhilosophyRequirement 
            icon={UserCheck}
            title="The Brotherhood Code"
            desc="Seniors guide juniors. Juniors respect seniors. We build a network of future leaders who look out for one another, not just competitors fighting for a rank."
          />

          <PhilosophyRequirement 
            icon={Flame}
            title="Zero Ego Policy"
            desc="Whether you score 100/100 or 40/100, humility is the entry fee. We celebrate progress, but we destroy arrogance the moment it appears."
          />

          <PhilosophyRequirement 
            icon={Anchor}
            title="Spiritual Discipline"
            desc="The Gayatri Mantra isn't a ritual; it's a focus tool. We root ourselves in Dharma to stay grounded while our careers take flight."
          />

        </div>
      </section>

      {/* 3. THE "NOT A MARKS FACTORY" TRUTH BOX */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-b from-[#0a0a0a] to-black p-12 md:p-20 rounded-[80px] border border-gray-900 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[100px]"></div>
          <Scale className="w-16 h-16 text-red-600 mx-auto mb-10 opacity-40" />
          
          <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tighter leading-tight">
            "Intelligence without <span className="text-red-600 italic">Integrity</span> is a Danger to Society."
          </h2>
          
          <div className="space-y-6 text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
            <p>
              Many centers will take your money and promise you 95%. We don't. We tell you that if you don't respect your parents, if you don't honor your school teachers, and if you aren't ready to grind—this isn't for you.
            </p>
            <p className="text-white font-bold italic">
              "We develop dynamic personalities. Marks are just a byproduct of that discipline."
            </p>
          </div>
          
          <div className="mt-12 h-1.5 w-24 bg-gradient-to-r from-red-600 to-orange-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* 4. FINAL CALL TO ALIGNMENT */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tighter">Do you align with <br/><span className="text-red-600 italic">Our Values?</span></h2>
        <button className="bg-white text-black px-16 py-6 rounded-2xl text-2xl font-black hover:bg-red-600 hover:text-white transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)]">
          JOIN THE MOVEMENT
        </button>
      </section>

    </div>
  );
};

export default Philosophy;