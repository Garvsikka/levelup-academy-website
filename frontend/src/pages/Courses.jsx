import React from 'react';
import { Sparkles, Star, Zap, Target, BookOpen, Clock, ShieldCheck, Trophy, Brain } from 'lucide-react';

const CourseCard = ({ title, subtitle, subjects, xFactor, frequency, target, icon: Icon, color }) => (
  <div className="group bg-[#0a0a0a] border border-gray-900 rounded-[40px] p-8 hover:border-red-600/50 transition-all duration-500 relative overflow-hidden flex flex-col h-full">
    <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 blur-[80px] group-hover:bg-red-600/10 transition-colors"></div>
    
    <div className="flex justify-between items-start mb-6">
      <div className={`p-4 rounded-2xl bg-gray-950 border border-gray-800 group-hover:scale-110 transition-transform`}>
        <Icon className={`w-8 h-8 ${color}`} />
      </div>
      <span className="bg-yellow-500 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
        Batch
      </span>
    </div>

    <h3 className="text-3xl font-black text-white tracking-tighter uppercase mb-1">{title}</h3>
    <p className={`text-sm font-bold uppercase tracking-widest mb-4 ${color}`}>{subtitle}</p>
    
    <div className="space-y-4 mb-8 flex-grow">
      <div className="flex items-center gap-3">
        <Clock className="w-4 h-4 text-gray-500" />
        <p className="text-gray-400 text-sm font-medium"><span className="text-white">Frequency:</span> {frequency}</p>
      </div>
      <div className="flex items-center gap-3">
        <Target className="w-4 h-4 text-gray-500" />
        <p className="text-gray-400 text-sm font-medium"><span className="text-white">For:</span> {target}</p>
      </div>
      <div className="flex items-center gap-3">
        <BookOpen className="w-4 h-4 text-gray-500" />
        <p className="text-gray-400 text-sm font-medium"><span className="text-white">Subjects:</span> {subjects}</p>
      </div>
    </div>

    <div className="bg-gray-950 p-5 rounded-3xl border border-gray-900 group-hover:border-red-900/50 transition-colors mt-auto">
      <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-2">The LevelUp X-Factor</p>
      <p className="text-sm text-gray-200 font-bold italic leading-snug">"{xFactor}"</p>
    </div>
  </div>
);

const Courses = () => {
  return (
    <div className="bg-[#000000] min-h-screen font-sans text-white overflow-x-hidden">
      
      {/* 1. HERO - VOLCANIC HEADER */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent blur-[140px]"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-950/30 border border-red-900/50 mb-10">
            <Sparkles className="w-4 h-4 text-red-500" />
            <span className="text-red-500 text-xs font-black uppercase tracking-[0.4em]">Elite Academic Programs</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-10 uppercase">
            CHOOSE YOUR <br />
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent italic">BATTLEFIELD</span>
          </h1>
          
          <div className="max-w-3xl mx-auto py-6 px-10 bg-yellow-400 text-black font-black uppercase tracking-tight text-lg md:text-xl rounded-2xl shadow-[0_20px_50px_rgba(255,215,0,0.2)]">
            "In every competitive exam on PLANET EARTH, Maths will be there. There is no ESCAPE. Love it. Master it."
          </div>
        </div>
      </section>

      {/* 2. CLASSES 11 & 12 SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12 border-l-8 border-red-600 pl-6">
           <h2 className="text-4xl font-black uppercase tracking-tighter">Classes 11 & 12</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CourseCard 
            title="Dronacharya" 
            subtitle="Batch for Maths" 
            subjects="Maths, CBSE + CUET + JEE"
            frequency="3 classes/week"
            target="CBSE + CUET + JEE"
            xFactor="We make maths games using AI."
            icon={Brain}
            color="text-orange-500"
          />
          <CourseCard 
            title="Nikola Tesla" 
            subtitle="Batch for Physics" 
            subjects="Physics, CBSE + CUET + JEE"
            frequency="3 classes/week"
            target="CBSE + CUET + JEE"
            xFactor="We make physics games using AI."
            icon={Zap}
            color="text-blue-500"
          />
          <CourseCard 
            title="Warren Buffet" 
            subtitle="Batch for Accounts" 
            subjects="Accounts, CBSE + CUET"
            frequency="3 classes/week"
            target="CBSE + CUET"
            xFactor="Finance & Money focused sessions."
            icon={Trophy}
            color="text-green-500"
          />
        </div>
      </section>

      {/* 3. CLASSES 8, 9 & 10 SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto bg-[#050505] rounded-[60px] border border-gray-900 my-20">
        <div className="flex items-center gap-4 mb-12 px-8 border-l-8 border-orange-500 pl-6">
           <h2 className="text-4xl font-black uppercase tracking-tighter">Classes 8, 9 & 10</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pb-8">
          <CourseCard 
            title="Brahmāstra" 
            subtitle="JEE Foundation" 
            subjects="Maths, Physics, Chem, Logical Reasoning"
            frequency="Every Sunday"
            target="JEE Foundation"
            xFactor="Basic Finance & Money focused Sessions."
            icon={Sparkles}
            color="text-red-500"
          />
          <CourseCard 
            title="Lakshya 100" 
            subtitle="CBSE Excellence" 
            subjects="Maths, Science, English, SST"
            frequency="3 classes/week"
            target="CBSE 100/100"
            xFactor="Personality Dev. sessions are part of curriculum."
            icon={Target}
            color="text-red-600"
          />
          <CourseCard 
            title="Inception" 
            subtitle="Foundation Batch" 
            subjects="Maths & Science for 8th"
            frequency="3 classes/week"
            target="Strong Fundamentals"
            xFactor="Perfect introduction to competitive logic."
            icon={Zap}
            color="text-yellow-500"
          />
        </div>
      </section>

      {/* 4. DETAILED FEATURES GRID (From Screenshots) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-20 uppercase">The LevelUp <span className="text-red-600">Standard</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Class Schedule", desc: "1-1.5 hours long. Available OFFLINE & ONLINE with recordings.", icon: Clock },
            { title: "Doubt Support", desc: "24x7 Support Group. Unlimited offline sessions & regular backups.", icon: ShieldCheck },
            { title: "Study Material", desc: "Lakhs of students use our materials. Chanakya Test Series included.", icon: BookOpen },
            { title: "Progress Tracking", desc: "1:1 Mentoring and timely parent connects with action plans.", icon: Target }
          ].map((feature, i) => (
            <div key={i} className="p-8 bg-[#0a0a0a] rounded-3xl border border-gray-900 hover:border-gray-700 transition-colors">
              <feature.icon className="w-10 h-10 text-red-600 mb-6" />
              <h4 className="text-xl font-black mb-3 uppercase tracking-tight">{feature.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Courses;