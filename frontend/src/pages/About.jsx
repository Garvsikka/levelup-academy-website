import React from 'react';
import { Award, BookOpen, Briefcase, Globe, Heart, Quote, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. MESSAGE FROM THE FOUNDER BOX (Red Section) */}
      <section className="bg-red-950 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 text-red-400 mx-auto mb-6 opacity-50" />
          <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight italic">
            "At LevelUp, education without spirituality is incomplete."
          </h2>
          <p className="text-xl md:text-2xl text-red-100 font-medium leading-relaxed mb-6">
            “Every class begins with the Gayatri Mantra. Our Education Trips start with a 
            Hawan ceremony, to inculcate Sanatana Dharma Values. We're building dharmic, 
            confident, & wealth-conscious leaders who will shape the future.”
          </p>
          <div className="h-1 w-20 bg-red-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* 2. THE JOURNEY SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-black text-gray-900 tracking-tighter">
              NAMASTE! <br />
              <span className="text-red-600 underline decoration-4 underline-offset-8">OUR STORY</span>
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              I started my Education Journey in Maths back in 2008 when I was myself in class 10. 
              The sheer excitement & passion for teaching & guiding my juniors always lit up my 
              eyes and fuelled my love for the subject.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              After ranking among the top at <strong>ISB Hyderabad</strong> and working as a 
              consultant at <strong>Ernst & Young (EY)</strong>, I realized my true calling: 
              to transform how students experience mathematics.
            </p>
            <div className="bg-red-50 p-6 rounded-2xl border-l-8 border-red-600">
              <p className="text-gray-800 italic font-medium">
                "Our mission isn't just academic excellence—though we're proud that over 100 students 
                scored 90+ in 2025. Our real mission is to make students fall in love with studies 
                and see the connection to AI, Self-driving cars, and Entrepreneurship."
              </p>
            </div>
            <div className="pt-4">
              <h3 className="text-2xl font-bold text-gray-900">Vaibhav Kukreja</h3>
              <p className="text-red-600 font-bold">Founder, LevelUp Academy</p>
              <p className="text-gray-500 text-sm mt-2">Co-Founder: Ankita Kukreja</p>
            </div>
          </div>

          {/* 3. FOUNDER CREDENTIALS (THE "PRO" BOX) */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-[40px] shadow-xl border border-gray-100">
            <h2 className="text-3xl font-black text-gray-900 mb-8 border-b pb-4">Distinguished Profile</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <Award className="text-red-600 w-8 h-8 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">ISB Hyderabad Alumnus</h4>
                  <p className="text-gray-600">MBA - Rank Holder of Indian School of Business (ISB).</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Briefcase className="text-red-600 w-8 h-8 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Ex-EY Senior Consultant</h4>
                  <p className="text-gray-600">Strategic experience at Ernst & Young (Big 4 Firm).</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Globe className="text-red-600 w-8 h-8 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Global Hackathon Winner</h4>
                  <p className="text-gray-600">Awarded ₹10 Lakh by Hon. Shri Narendra Modi Ji for innovation.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <TrendingUp className="text-red-600 w-8 h-8 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Founder, ElevenX Consultancy</h4>
                  <p className="text-gray-600">Bagged Asia’s largest Urban Mobility project in Himachal Pradesh.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;