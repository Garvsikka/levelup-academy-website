import React from 'react';
import { Star, BookOpen, Globe, Users, Target, Quote } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const cityData = [
  { name: 'Delhi', value: 60 },
  { name: 'Mumbai', value: 7 },
  { name: 'Bangalore', value: 7 },
  { name: 'Gurgaon', value: 5 },
  { name: 'Noida', value: 6 },
  { name: 'Chennai', value: 4 },
  { name: 'Other Cities', value: 7 }
];

// Re-using Volcanic Colors for the Chart
const COLORS = ['#FF0000', '#FF4D00', '#FF8000', '#FFB300', '#FFD700', '#E60000', '#CC0000'];

const Home = () => {
  return (
    <div className="bg-gray-950 min-h-screen font-sans overflow-x-hidden text-gray-100">
      
      {/* 1. HERO SECTION - Controlled Side-by-Side */}
      <section className="relative pt-24 pb-40 px-6 bg-gray-950 overflow-hidden border-b border-gray-900">
        {/* Volcanic Ambient Glow */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 opacity-15 blur-[120px]"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          
          {/* LEFT: Resized Header Text (55% width) */}
          <div className="w-full lg:w-[55%] text-left">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tighter leading-tight mb-6 text-white uppercase">
              MATHS MASTERS OF <br />
              <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent italic">
                ROHINI & PITAMPURA
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-medium max-w-lg mb-10 leading-relaxed">
              Transforming academic results into financial destiny. Join the movement that's 100x-ing family wealth through mastery.
            </p>
            <button className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white px-12 py-5 rounded-2xl text-xl font-black shadow-[0_10px_30px_rgba(255,0,0,0.3)] hover:scale-105 transition-all uppercase tracking-tight">
              BOOK A DEMO CLASS
            </button>
          </div>

          {/* RIGHT: Image Placeholder (40% width) */}
          <div className="w-full lg:w-[40%]">
            <div className="bg-gray-900 aspect-[4/3] rounded-[50px] border-2 border-gray-800 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 to-transparent"></div>
              <Users className="w-20 h-20 text-gray-700 group-hover:text-red-500 transition-colors" />
              <span className="mt-4 text-gray-600 font-bold uppercase tracking-[0.2em] text-xs">Student Success Feature</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS GRID - Now in Dark Gray (gray-900) Rectangle */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-30">
        <div className="bg-gray-900 rounded-[40px] shadow-[0_25px_60px_-15px_rgba(255,128,0,0.1)] border border-gray-800 grid grid-cols-2 md:grid-cols-4 overflow-hidden divide-x divide-gray-800">
          {[
            { label: "CTS Enrolled", val: "7000+", icon: Star },
            { label: "Global Users", val: "1 Lakh+", icon: BookOpen },
            { label: "Total Impact", val: "10M+", icon: Globe },
            { label: "Reach", val: "PAN-INDIA", icon: Target }
          ].map((stat, i) => (
            <div key={i} className="p-10 text-center hover:bg-orange-950/20 transition-colors cursor-default">
              <stat.icon className="w-8 h-8 text-orange-600 mx-auto mb-4" />
              <h3 className="text-4xl font-black text-white leading-none">{stat.val}</h3>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-3">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. DYNAMIC CHART SECTION (Dark Gray rounded box) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full h-[450px] lg:w-1/2 bg-gray-900 rounded-[60px] p-10 relative shadow-inner flex items-center justify-center border border-gray-800">
            <ResponsiveContainer width="100%" h="100%">
              <PieChart>
                <Tooltip 
                    contentStyle={{borderRadius: '20px', border:'none', boxShadow:'0 20px 40px rgba(0,0,0,0.4)', backgroundColor: '#030712', color: '#FFF'}}
                    itemStyle={{fontWeight: 'bold', color:'#FFF'}}
                    labelStyle={{fontWeight: 'black', color:'#FFF'}}
                />
                <Pie data={cityData} innerRadius={85} outerRadius={140} paddingAngle={6} dataKey="value" isAnimationActive={true}>
                  {cityData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="#030712" strokeWidth={2}/>)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute text-center">
              <span className="block text-3xl font-black text-white leading-none">INDIA</span>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">Growth</span>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">
              EVERY CITY <br/> <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent uppercase">OF INDIA</span>
            </h2>
            <p className="text-xl text-gray-300 font-bold italic border-l-8 border-orange-500 pl-8 py-4 bg-orange-950/30 rounded-r-3xl">
              "We mentored students from almost every city of India! Our geographic footprint is as dynamic as our curriculum."
            </p>
          </div>
        </div>
      </section>

      {/* 4. STUDENT TESTIMONIALS (Dark Gray cards) */}
      <section className="py-32 px-6 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-white uppercase tracking-tighter">Student Voices</h2>
            <div className="h-2 w-24 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 mx-auto mt-6 rounded-full shadow-lg shadow-orange-900"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Student", score: "98/100 - CBSE", text: "The Chanakya Test Series changed how I viewed maths. It wasn't about practice; it was about the logic behind the numbers." },
              { name: "Student", score: "100 Percentile - CUET", text: "LevelUp isn't just a tuition center. The personality development sessions gave me the confidence to ace my interviews." },
              { name: "Student", score: "JEE Qualifier", text: "The gamified learning approach made the toughest calculus problems feel like a video game. Pure genius teaching." }
            ].map((t, i) => (
              <div key={i} className="bg-gray-950 p-10 rounded-[40px] border border-gray-800 shadow-xl relative mt-16 group hover:-translate-y-2 hover:border-orange-900 transition-all duration-300">
                {/* Photo Slot (Gray circle) */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-gray-900 border-8 border-gray-950 shadow-2xl flex items-center justify-center overflow-hidden">
                   <Users className="w-12 h-12 text-gray-700 group-hover:text-red-500" />
                </div>
                <div className="pt-16 text-center">
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="#FF8000" color="#FF8000" />)}
                  </div>
                  <p className="text-gray-300 italic mb-8 font-medium leading-relaxed">"{t.text}"</p>
                  <h4 className="font-black text-white text-2xl tracking-tight">{t.name}</h4>
                  <span className="text-orange-600 font-bold text-sm uppercase tracking-[0.2em]">{t.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;