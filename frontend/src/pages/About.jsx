import React from 'react';
import { Award, Briefcase, Globe, Quote, TrendingUp } from 'lucide-react';
// import founderImage from '../assets/images/vaibhav-kukreja.jpg'; // <-- Placeholder: Import your actual image here

const About = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* 1. FOUNDER HERO SECTION ( Dominant Image + Core Manifesto ) */}
      <section style={{ backgroundColor: '#FF0000' }} className="text-white py-12 md:py-0">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-12 px-6 md:px-12">
          
          {/* A. THE FOUNDER'S IMAGE ( Occupies a good portion of the page ) */}
          <div className="md:col-span-7 flex justify-center md:justify-end">
            <div className="relative group max-w-2xl">
              <div className="absolute inset-0 bg-white rounded-t-[100px] rounded-br-[100px] transform translate-x-4 translate-y-4"></div>
              {/* --- IMAGE PLACEHOLDER --- */}
              {/* Replace the <img> below with: <img src={founderImage} alt="Vaibhav Kukreja..." /> */}
              <img 
                src="https://via.placeholder.com/600x700/FFFFFF/FF0000?text=Vaibhav+Kukreja" 
                alt="Vaibhav Kukreja - Founder, LevelUp Academy" 
                className="relative z-10 w-full h-auto rounded-t-[100px] rounded-br-[100px] shadow-2xl object-cover"
              />
            </div>
          </div>

          {/* B. CORE SPIRITUAL MANIFESTO ( Respect to the photo ) */}
          <div className="md:col-span-5 text-center md:text-left space-y-8">
            <Quote className="w-16 h-16 text-white opacity-40 mx-auto md:mx-0" />
            <h1 className="text-4xl md:text-6xl font-black leading-none tracking-tighter">
              A Mission <br /> Beyond Academics
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 italic text-white/90">
              "At LevelUp, education without spirituality is incomplete."
            </h2>
            <div className="space-y-6 text-xl md:text-2xl font-medium leading-relaxed max-w-xl">
                <p>“Every class begins with the Gayatri Mantra. Our Education Trips start with a Hawan ceremony...”</p>
                <p>“...to inculcate Sanatana Dharma Values. We're building dharmic, confident, & wealth-conscious leaders.”</p>
            </div>
            <div className="h-1 w-20 bg-white mx-auto md:mx-0 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 2. THE JOURNEY & THE RESULTS SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-16 items-center">
          <div className="md:col-span-6 space-y-8">
            <h1 className="text-5xl font-black text-gray-900 tracking-tighter">
              NAMASTE! <br />
              <span style={{ color: '#FF0000' }} className="underline decoration-4 underline-offset-8">OUR STORY</span>
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed font-medium">
              I started my Education Journey in Maths back in 2008 when I was myself in class 10. The sheer excitement & passion for teaching always fuelled my love for the subject.
            </p>
            <div style={{ backgroundColor: '#FFF5F5', borderLeftColor: '#FF0000' }} className="p-8 rounded-3xl border-l-8 shadow-sm">
                <h3 className="text-3xl font-black text-gray-950 mb-4 tracking-tight">The LevelUp Real Mission</h3>
                <p className="text-gray-800 italic font-medium text-lg leading-relaxed">
                    "Our mission isn't just academic excellence—though we're proud that over 100 students 
                    scored 90+ in 2025. Our real mission is to make students fall in love with studies 
                    and see the connection to AI, Self-driving cars, and Entrepreneurship."
                </p>
            </div>
            <div className="pt-6">
              <h3 className="text-2xl font-bold text-gray-950">Vaibhav Kukreja</h3>
              <p style={{ color: '#FF0000' }} className="font-bold text-lg">Founder, LevelUp Academy</p>
              <p className="text-gray-500 text-sm mt-2">Co-Founder: Ankita Kukreja (The unwavering pillar of strength)</p>
            </div>
          </div>

          {/* 3. DISTINGUISHED PROFILE (THE TIMELINE) */}
          <div className="md:col-span-4 bg-gray-50 p-10 rounded-[40px] shadow-xl border border-gray-100">
            <h2 className="text-3xl font-black text-gray-950 mb-10 border-b pb-4 text-center">Founder Credentials</h2>
            
            <div className="space-y-10 relative">
                {/* Timeline Line */}
                <div style={{ backgroundColor: '#FF0000', opacity: 0.15 }} className="absolute left-6 inset-y-0 w-0.5"></div>

              {[
                { icon: Award, label: "ISB Hyderabad Alumnus", text: "MBA - Rank Holder of Indian School of Business (ISB)." },
                { icon: Briefcase, label: "Ex-EY Senior Consultant", text: "Strategic experience at Ernst & Young (Big 4 Firm)." },
                { icon: Globe, label: "Global Hackathon Winner", text: "Awarded ₹10 Lakh by Hon. Shri Narendra Modi Ji for innovation." },
                { icon: TrendingUp, label: "Founder, ElevenX Consultancy", text: "Bagged Asia’s largest Urban Mobility project (Ropeway)." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-center relative z-10">
                    {/* Timeline Circle */}
                  <div style={{ backgroundColor: '#FF0000' }} className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center shadow-lg">
                      <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-950 text-lg leading-tight">{item.label}</h4>
                    <p className="text-gray-700 font-medium">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;