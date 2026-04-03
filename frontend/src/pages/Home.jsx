import React from 'react';
import { Star, BookOpen, Globe, Quote, MapPin, Target } from 'lucide-react';
// 1. Mandatory Import: Recharts components
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

// Define the exact data from image_0.png
const cityData = [
  { name: 'Delhi', value: 60 },
  { name: 'Mumbai', value: 7 },
  { name: 'Bangalore', value: 7 },
  { name: 'Gurgaon', value: 5 },
  { name: 'Noida', value: 6 },
  { name: 'Chennai', value: 4 },
  { name: 'Other Cities', value: 7 }
];

// Define a fresh, dynamic color palette for each segment
const COLORS = ['#FF0000', '#FF4D4D', '#FF7F7F', '#FFB2B2', '#FFE5E5', '#FDD7D7', '#D1C4E9'];

// Function to render the stylized Stat Cards
const StatCard = ({ icon: Icon, flex, label, sublabel }) => (
  <div className="flex flex-col items-center p-8 text-center border-r border-gray-100 last:border-0 hover:bg-red-50/30 transition-colors">
    <div className="bg-red-100 p-4 rounded-2xl mb-4">
      <Icon style={{ color: '#FF0000' }} className="w-10 h-10" />
    </div>
    <h2 className="text-5xl font-black text-gray-950 leading-none tracking-tighter">{flex}</h2>
    <p className="text-gray-900 font-black uppercase tracking-widest text-sm mt-3">{label}</p>
    <p className="text-gray-600 font-medium text-sm mt-1 max-w-[200px]">{sublabel}</p>
  </div>
);

const Home = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-28 px-6 text-center bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-9xl font-black text-gray-950 tracking-tighter leading-[0.9] mb-8">
            MATHS MASTERS OF <br />
            <span style={{ color: '#FF0000' }}>ROHINI & PITAMPURA</span>
          </h1>
          <p className="text-2xl text-gray-700 font-bold max-w-3xl mx-auto mb-12">
            7,000+ Students Enrolled for CTS in 25-26. <br /> 
            Join the movement that's 100x-ing family wealth through academic mastery.
          </p>
          <button style={{ backgroundColor: '#FF0000' }} className="text-white px-16 py-6 rounded-2xl text-2xl font-black shadow-2xl hover:scale-105 active:scale-95 transition-all">
            BOOK A DEMO CLASS
          </button>
        </div>
      </section>

      {/* 2. POWER STATS RIBBON */}
      <section className="bg-white py-16 border-y-2 border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0">
          <StatCard icon={Star} flex="7000+" label="CTS ENROLLED" sublabel="Online & Offline aspirants for Chanakya Test Series 25-26" />
          <StatCard icon={BookOpen} flex="1 LAKH+" label="GLOBAL USERS" sublabel="Students using LEVELUP Study Material globally today" />
          <StatCard icon={Globe} flex="10 MILLION+" label="STUDENTS IMPACTED" sublabel="Total student interactions in 25-26. Touch wood." />
        </div>
      </section>

      {/* 3. GEOGRAPHIC REACH (Dynamic, Animated Chart - Shifting image_0.png data to life) */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-[1400px] mx-auto flex flex-col xl:flex-row items-center gap-16">
          
          {/* A. The "Sick Animation" Donut Chart (image_0.png Data) */}
          <div className="relative w-full h-[500px] xl:w-2/3 shrink-0 bg-white p-12 rounded-[50px] shadow-2xl border border-gray-100">
            <ResponsiveContainer width="100%" h="100%">
              <PieChart>
                <Tooltip 
                  contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
                  labelStyle={{ fontWeight: 'black', color: '#000' }}
                  itemStyle={{ fontWeight: 'bold', color: '#FF0000' }}
                />
                <Legend iconSize={12} iconType="circle" wrapperStyle={{ fontWeight: 'bold' }} />
                <Pie
                  data={cityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={100}   // <-- This makes it a "Donut"
                  outerRadius={180}
                  fill="#8884d8"
                  paddingAngle={5}     // <-- Gaps between segments for cleaner animation
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`} // <-- Labels inside the chart
                  isAnimationActive={true} // <-- Sick animation enabled
                  animationBegin={200}
                  animationDuration={1500}
                  animationEasing="ease-out" // <-- Smooth entrance
                >
                  {cityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            
            {/* C. Central Branding Text (Over the central hollow) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <h2 className="text-4xl font-black text-gray-950 leading-none">A NATION <br/> CONNECTED</h2>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm mt-3">The LevelUp Network</p>
            </div>
          </div>
          
          {/* B. Descriptive Content */}
          <div className="text-left xl:w-1/3 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-gray-950 mb-6 leading-[0.9] tracking-tight">
              FROM <span style={{ color: '#FF0000' }}>ROHINI</span> <br/> TO THE WORLD
            </h2>
            
            <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-lg">
                <Target className="w-12 h-12 text-red-600 shrink-0" />
                <div>
                  <h4 className="font-extrabold text-xl text-gray-950">Delhi: Our Core (60%)</h4>
                  <p className="text-gray-700 font-medium">While our roots are in Delhi (60%), the LEVELUP methodology is now trusted from the heart of the capital to the corners of the nation.</p>
                </div>
            </div>

            <p className="text-xl text-gray-700 font-bold leading-relaxed italic border-l-8 border-red-200 pl-8 p-6 bg-red-50 rounded-r-3xl">
              "We mentored students from (almost) every city of India! Our geographic footprint is as dynamic as our curriculum."
            </p>
          </div>
        </div>
      </section>

      {/* [Student Testimonials would follow here] */}

    </div>
  );
};

export default Home;