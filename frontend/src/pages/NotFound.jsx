import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-dark-900 pt-32 pb-20 px-6 flex items-center justify-center">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-8xl gold-accent mb-4 font-bold"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          404
        </motion.div>

        <h1 className="cinematic-text text-4xl mb-4">Page Not Found</h1>

        <p className="text-gray-400 mb-8 leading-relaxed">
          Sorry, the page you're looking for doesn't exist. Let's get you back on track to mastering mathematics!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-gradient-to-r from-gold to-neon-cyan text-dark-900 rounded-lg font-bold hover:shadow-lg flex items-center justify-center gap-2"
          >
            <Home size={20} /> Back to Home
          </Link>

          <Link
            to="/courses"
            className="px-6 py-3 border border-gold text-gold rounded-lg font-bold hover:bg-gold/10 flex items-center justify-center gap-2"
          >
            <ArrowLeft size={20} /> Explore Courses
          </Link>
        </div>

        <motion.div
          className="mt-12 text-6xl"
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-hidden="true"
        >
          🚀
        </motion.div>
      </motion.div>
    </main>
  )
}