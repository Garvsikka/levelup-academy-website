import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Zap } from "lucide-react"
import { Link } from "react-router-dom"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen hero-gradient pt-32 pb-20 px-6 md:px-12 overflow-hidden">
      <motion.div
        className="absolute top-10 right-10 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
        >
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <motion.div className="inline-block px-4 py-2 rounded-full border border-gold/50 mb-6">
              <span className="text-gold text-sm font-semibold flex items-center gap-2">
                <Zap size={16} /> Delhi's First & Only AI-Powered Institute
              </span>
            </motion.div>

            <h1 className="cinematic-text text-5xl md:text-7xl leading-tight mb-6">
              Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-neon-cyan to-neon-purple">
                Mathematics
              </span> with <span className="neon-cyan">AI Games</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
              <span className="gold-accent font-semibold">From Engineering → AI → CA → Entrepreneurship.</span> 
              Transform your maths journey with gamification, AI innovation, and spiritual wisdom.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <Link
                to="/courses"
                className="px-8 py-4 bg-gradient-to-r from-gold to-neon-cyan text-dark-900 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-gold/50 inline-flex items-center justify-center gap-2 w-fit"
              >
                Explore Courses <ArrowRight size={20} />
              </Link>

              <Link
                to="/contact"
                className="px-8 py-4 border border-gold text-gold rounded-lg font-bold hover:bg-gold/10 inline-flex items-center justify-center w-fit"
              >
                Book Free Workshop
              </Link>
            </div>

            <motion.div className="flex gap-8 mt-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              {[
                { number: "500+", label: "Students", icon: "👨‍🎓" },
                { number: "98%", label: "Success", icon: "🎯" },
                { number: "24/7", label: "Support", icon: "💬" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className="text-3xl" aria-hidden="true">{stat.icon}</span>
                  <p className="text-3xl gold-accent font-bold mt-2">{stat.number}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="card-glow rounded-2xl h-96 md:h-[500px] flex items-center justify-center"
              whileHover={{ y: -10 }}
            >
              <article className="text-center">
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity }}
                  aria-hidden="true"
                >
                  🎮
                </motion.div>
                <h2 className="cinematic-text text-3xl mb-4 gold-accent">Gamified Learning</h2>
                <p className="text-gray-300">Unlock mathematical powers through AI-driven games</p>
              </article>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}