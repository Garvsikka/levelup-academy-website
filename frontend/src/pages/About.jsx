import React from "react"
import { Helmet } from "react-helmet-async"
import AboutFounder from "../components/AboutFounder"

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Vaibhav Khukhreja - LevelUp Academy</title>
      </Helmet>

      <main className="min-h-screen bg-black pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
           <h1 className="text-7xl md:text-9xl font-black uppercase italic tracking-tighter">
             THE <span className="text-transparent bg-clip-text bg-lava-gradient">ARCHITECT.</span>
           </h1>
           <div className="h-2 w-24 bg-brand-red mx-auto mt-4"></div>
        </div>
        <AboutFounder />
      </main>
    </>
  )
}