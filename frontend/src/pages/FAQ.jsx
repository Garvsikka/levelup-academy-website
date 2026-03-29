import React, { useState } from "react"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Is LevelUp Academy available in Delhi only?",
      answer:
        "Currently, we have physical centers in Rohini and Pitampura, Delhi. However, we also offer comprehensive online classes for students across India and abroad.",
    },
    {
      question: "What is the success rate of LevelUp Academy?",
      answer:
        "We have a proven 98% success rate with 500+ students successfully transformed. Our students consistently score 90%+ in board exams and clear competitive entrance exams.",
    },
    {
      question: "Do you provide 24/7 doubt support?",
      answer:
        "Yes! We provide round-the-clock doubt support to all our enrolled students through our mobile app, WhatsApp, and in-person sessions.",
    },
    {
      question: "What makes LevelUp Academy different from other institutes?",
      answer:
        "We combine AI-powered gamification, spiritual wisdom, entrepreneurship education, and personalized mentoring. Our 6-pillar philosophy ensures holistic development beyond just academics.",
    },
    {
      question: "Can I join mid-session or in between?",
      answer:
        "Absolutely! We accept new enrollments throughout the academic year. You'll receive special catch-up sessions and customized study material to align with the batch.",
    },
    {
      question: "What is the fee structure?",
      answer:
        "Fees vary based on the class, batch, and location. Please contact us for detailed fee information, available discounts, and flexible payment options.",
    },
    {
      question: "Do you provide study materials and notes?",
      answer:
        "Yes, we provide comprehensive study materials, notes, question banks, and past year papers for all courses. Digital and physical formats are available.",
    },
    {
      question: "How often are tests conducted?",
      answer:
        "We conduct daily 10-minute formula tests, weekly test series, and monthly comprehensive exams to track progress and reinforce learning.",
    },
  ]

  return (
    <>
      <Helmet>
        <title>FAQ - LevelUp Academy | Common Questions Answered</title>
        <meta
          name="description"
          content="Frequently asked questions about LevelUp Academy courses, fees, doubt support, and enrollment. Find answers to all your queries."
        />
        <link rel="canonical" href="https://www.levelupacademy.com/faq" />
      </Helmet>

      <main className="min-h-screen bg-dark-900 pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="cinematic-text text-5xl md:text-6xl mb-4">
              Frequently Asked <span className="gold-accent">Questions</span>
            </h1>
            <p className="text-xl text-gray-400">
              Find answers to common questions about LevelUp Academy
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="card-glow rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full p-6 flex justify-between items-center hover:bg-dark-700/50 transition"
                >
                  <h3 className="text-lg font-bold text-left">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-gold flex-shrink-0" size={24} />
                  </motion.div>
                </button>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: openIndex === idx ? 1 : 0,
                    height: openIndex === idx ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 border-t border-gold/20 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="mt-16 card-glow rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 gold-accent">Still have questions?</h3>
            <p className="text-gray-400 mb-6">
              Can't find the answer you're looking for? Get in touch with our team!
            </p>
            <a
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-gold to-neon-cyan text-dark-900 rounded-lg font-bold hover:shadow-lg inline-block"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </main>
    </>
  )
}