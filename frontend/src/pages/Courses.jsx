import React, { useState } from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"

export default function Courses() {
  const [expandedClass, setExpandedClass] = useState(null)

  const courses = {
    "Classes 11-12": [
      {
        id: 1,
        name: "Dronacharya Batch",
        subject: "Advanced Mathematics",
        xFactor: "Stock Market Insights & Financial Literacy",
        description:
          "Master advanced mathematics (Calculus, Algebra, Trigonometry) with real-world financial applications. Learn stock market strategies, portfolio management, and investment fundamentals integrated into maths concepts.",
        slug: "dronacharya-batch-maths",
      },
      {
        id: 2,
        name: "Nikola Tesla Batch",
        subject: "Physics Excellence",
        xFactor: "Innovation Lab & Experimental Physics",
        description: "Understand physics through innovation and practical experiments. Real-world applications of quantum mechanics, relativity, and modern physics.",
        slug: "nikola-tesla-batch-physics",
      },
      {
        id: 3,
        name: "Warren Buffet Batch",
        subject: "Accounts & Finance",
        xFactor: "Entrepreneurial Finance & Business Strategy",
        description: "Learn accounting with entrepreneurial finance perspectives. Understand business valuations, cash flows, financial statements, and investment principles.",
        slug: "warren-buffet-batch-accounts",
      },
    ],
    "Classes 8-10": [
      {
        id: 4,
        name: "Brahmastra Batch",
        subject: "JEE Foundation Program",
        xFactor: "Early Competitive Exam Preparation",
        description:
          "Build rock-solid fundamentals for JEE entrance exams starting from Class 8. Comprehensive curriculum covering Physics, Chemistry, and Mathematics.",
        slug: "brahmastra-batch-jee-foundation",
      },
      {
        id: 5,
        name: "Lakshya 100",
        subject: "CBSE Excellence Program",
        xFactor: "Achieve 100/100 Strategy",
        description:
          "Achieve excellence in CBSE with our proven 100/100 score strategy. Comprehensive coverage of NCERT with exam-focused techniques.",
        slug: "lakshya-100-cbse",
      },
      {
        id: 6,
        name: "Inception Batch",
        subject: "Class 8 Foundation",
        xFactor: "Strong Mathematical Fundamentals",
        description:
          "Build unshakeable mathematical foundations from Class 8. Perfect introduction to advanced concepts with personalized mentoring.",
        slug: "inception-batch-class8",
      },
    ],
  }

  return (
    <>
      <Helmet>
        <title>Courses & Batches - LevelUp Academy | Expert Maths Coaching</title>
        <meta
          name="description"
          content="Explore specialized maths batches for Classes 8-12. Dronacharya, Brahmastra, Lakshya 100, and more. Expert coaching with 98% success rate."
        />
        <link rel="canonical" href="https://www.levelupacademy.com/courses" />
      </Helmet>

      <main className="min-h-screen bg-dark-900 pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="cinematic-text text-5xl md:text-6xl mb-4">
              Our <span className="gold-accent">Courses & Batches</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Specialized, expert-led programs for every academic level
            </p>
          </motion.div>

          {Object.entries(courses).map((courseGroup, groupIdx) => (
            <motion.div key={groupIdx} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 gold-accent">
                {courseGroup[0]}
              </h2>

              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                {courseGroup[1].map((course, idx) => (
                  <motion.article
                    key={course.id}
                    className="card-glow rounded-xl overflow-hidden cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    whileHover={{ y: -10 }}
                    onClick={() =>
                      setExpandedClass(
                        expandedClass === course.id ? null : course.id
                      )
                    }
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-gold text-sm font-semibold mb-1">
                            {course.subject}
                          </p>
                          <h3 className="text-2xl font-bold">{course.name}</h3>
                        </div>
                        <motion.div
                          animate={{
                            rotate:
                              expandedClass === course.id ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="text-gold" size={24} />
                        </motion.div>
                      </div>

                      <p className="text-gray-400 mb-4">{course.description}</p>

                      <div className="mb-4 p-3 bg-dark-700/50 rounded-lg border border-neon-cyan/20">
                        <p className="text-neon-cyan text-sm font-semibold">
                          ✨ {course.xFactor}
                        </p>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: expandedClass === course.id ? 1 : 0,
                          height:
                            expandedClass === course.id ? "auto" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-gold/20 pt-4 mt-4">
                          <p className="text-sm text-gray-300 font-semibold mb-3">
                            Key Features:
                          </p>
                          {["3 Classes/Week", "24x7 Doubt Support", "Chanakya Test Series", "Personal Mentoring"].map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2 mb-2">
                              <span className="text-gold">✓</span>
                              <span className="text-gray-400 text-sm">{feature}</span>
                            </div>
                          ))}
                          <Link
                            to={`/courses/${course.slug}`}
                            className="mt-4 w-full px-4 py-3 bg-gradient-to-r from-gold to-neon-cyan text-dark-900 rounded-lg font-bold hover:shadow-lg hover:shadow-gold/50 inline-flex items-center justify-center gap-2"
                          >
                            View Details <ArrowRight size={18} />
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  )
}