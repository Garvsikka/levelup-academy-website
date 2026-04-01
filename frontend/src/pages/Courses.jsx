import React from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"

export default function Courses() {
  const batches = [
    { name: "Foundation XI", color: "brand-red", tag: "LEVEL 1", slug: "dronacharya-batch-maths" },
    { name: "Board Mastery XII", color: "brand-orange", tag: "LEVEL 2", slug: "warren-buffet-batch-accounts" },
    { name: "Pro CUET", color: "brand-yellow", tag: "ELITE", slug: "nikola-tesla-batch-physics" }
  ];

  return (
    <main className="min-h-screen bg-black pt-32 pb-20 px-6 text-white">
      <Helmet><title>Batches - LevelUp Academy</title></Helmet>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-7xl md:text-9xl font-black mb-20 tracking-tighter uppercase italic text-center leading-none">
          SELECT <br/><span className="text-transparent bg-clip-text bg-lava-gradient">BATCH.</span>
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {batches.map((b, i) => (
            <div key={i} className="bg-dark-card border border-white/5 p-10 rounded-[2.5rem] flex flex-col h-full hover:border-brand-orange/40 transition-all group">
               <span className={`text-[10px] font-black uppercase tracking-widest mb-6 text-${b.color}`}>{b.tag}</span>
               <h2 className="text-4xl font-black mb-6 uppercase italic leading-none">{b.name}</h2>
               <p className="text-gray-500 text-sm mb-12 flex-grow leading-relaxed">Advanced commerce curriculum led by Vaibhav Khukhreja to dominate your academic goals.</p>
               <Link to={`/courses/${b.slug}`} className={`w-full py-4 text-center rounded-xl font-black uppercase text-[10px] tracking-widest border border-white/10 group-hover:bg-${b.color} group-hover:text-black transition-all`}>
                 View Details
               </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}