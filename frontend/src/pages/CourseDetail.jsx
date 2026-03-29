import React from "react"
import { useParams, Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { ArrowLeft, Check } from "lucide-react"

export default function CourseDetail() {
  const { slug } = useParams()

  const courseData = {
    "dronacharya-batch-maths": {
      name: "Dronacharya Batch",
      subject: "Advanced Mathematics",
      image: "📊",
      description: "Master advanced mathematics with real-world financial applications",
      fullDescription:
        "The Dronacharya Batch is our premium mathematics coaching program designed for serious aspirants preparing for board exams and competitive entrance tests. We integrate stock market knowledge, financial literacy, and real-world applications into pure mathematics.",
      price: "₹25,000/month",
      duration: "1 Year",
      classesPerWeek: 3,
      features: [
        "3 Classes per week (3 hours each)",
        "24/7 Doubt Support via App & Chat",
        "Chanakya Test Series (Weekly)",
        "Stock Market Integration Sessions",
        "Personal Mentoring",
        "Formula Tests (10-minute daily)",
        "Weekend Doubt Clearing",
      ],
      curriculum: [
        "Calculus (Limits, Derivatives, Integration)",
        "Algebra (Quadratic Equations, Sequences, Series)",
        "Trigonometry (Advanced Applications)",
        "Vectors & 3D Geometry",
        "Stock Market Basics & Portfolio Management",
      ],
    },
    "nikola-tesla-batch-physics": {
      name: "Nikola Tesla Batch",
      subject: "Physics Excellence",
      image: "⚛️",
      description: "Understand physics through innovation and practical experiments",
      fullDescription:
        "The Nikola Tesla Batch brings physics to life through hands-on experiments, real-world applications, and innovation projects. Learn concepts through building and experimentation rather than rote learning.",
      price: "₹20,000/month",
      duration: "1 Year",
      classesPerWeek: 3,
      features: [
        "3 Classes per week with Lab Access",
        "24/7 Doubt Support",
        "Innovation Lab Projects",
        "Real-world Application Sessions",
        "Personal Project Mentoring",
        "Practical Experiments",
        "Research Paper Guidance",
      ],
      curriculum: [
        "Mechanics (Motion, Forces, Energy)",
        "Thermodynamics (Heat, Entropy)",
        "Waves & Oscillations",
        "Electromagnetism",
        "Modern Physics & Quantum Concepts",
        "Innovation Projects & Prototyping",
      ],
    },
    "warren-buffet-batch-accounts": {
      name: "Warren Buffet Batch",
      subject: "Accounts & Finance",
      image: "💼",
      description: "Learn accounting with entrepreneurial finance perspectives",
      fullDescription:
        "The Warren Buffet Batch teaches accounting not as a boring subject, but as a tool to understand business, make smart investments, and create wealth. We integrate real business case studies and investment principles.",
      price: "₹22,000/month",
      duration: "1 Year",
      classesPerWeek: 3,
      features: [
        "3 Classes per week",
        "24/7 Doubt Support",
        "Case Study Sessions",
        "Business Simulation Games",
        "Investment Strategy Workshops",
        "Financial Analysis Training",
        "CA Exam Preparation Guidance",
      ],
      curriculum: [
        "Accounting Principles & Standards",
        "Financial Statement Analysis",
        "Cost Accounting & Management",
        "Financial Management & Planning",
        "Business Valuation Methods",
        "Investment & Stock Market Analysis",
      ],
    },
    "brahmastra-batch-jee-foundation": {
      name: "Brahmastra Batch",
      subject: "JEE Foundation",
      image: "🎯",
      description: "Build strong fundamentals for JEE entrance exams",
      fullDescription:
        "Start your JEE preparation early with our Brahmastra Batch. We focus on building unshakeable fundamentals and developing problem-solving skills from Class 8 onwards.",
      price: "₹18,000/month",
      duration: "1 Year",
      classesPerWeek: 3,
      features: [
        "3 Classes per week",
        "24/7 Doubt Support",
        "Mock Test Series",
        "JEE Strategy Sessions",
        "Foundation Workshops",
        "Personalized Study Plan",
        "Regular Progress Reports",
      ],
      curriculum: [
        "Physics Fundamentals",
        "Chemistry Fundamentals",
        "Mathematics Fundamentals",
        "Problem-Solving Techniques",
        "JEE Exam Pattern & Strategy",
      ],
    },
    "lakshya-100-cbse": {
      name: "Lakshya 100",
      subject: "CBSE Excellence",
      image: "📚",
      description: "Achieve excellence in CBSE with our proven strategy",
      fullDescription:
        "Lakshya 100 is our comprehensive CBSE preparation program designed to help students achieve perfect or near-perfect scores. We use proven strategies and focused learning.",
      price: "₹15,000/month",
      duration: "1 Year",
      classesPerWeek: 3,
      features: [
        "3 Classes per week",
        "24/7 Doubt Support",
        "CBSE Test Series",
        "100/100 Strategy Workshops",
        "Previous Year Papers Analysis",
        "Exam Pattern Coaching",
        "Score Guarantee Program",
      ],
      curriculum: [
        "NCERT Complete Coverage",
        "Higher Order Thinking Skills (HOTS)",
        "Board Exam Paper Pattern",
        "Time Management Techniques",
        "Revision Strategies",
      ],
    },
    "inception-batch-class8": {
      name: "Inception Batch",
      subject: "Class 8 Foundation",
      image: "🚀",
      description: "Build rock-solid mathematical foundations from the start",
      fullDescription:
        "The Inception Batch is perfect for Class 8 students who want to build strong mathematical foundations early. We make concepts crystal clear and develop a love for mathematics.",
      price: "₹12,000/month",
      duration: "1 Year",
      classesPerWeek: 3,
      features: [
        "3 Classes per week",
        "24/7 Doubt Support",
        "Personal Mentoring",
        "Foundation-focused Content",
        "Interactive Learning Games",
        "Progress Tracking",
        "Parent-Teacher Meetings",
      ],
      curriculum: [
        "Rational Numbers & Operations",
        "Algebra Basics",
        "Geometry Fundamentals",
        "Data Handling",
        "Mensuration Basics",
        "Problem-Solving Skills",
      ],
    },
  }

  const course = courseData[slug]

  if (!course) {
    return (
      <main className="min-h-screen bg-dark-900 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl gold-accent mb-4">Course Not Found</h1>
          <Link to="/courses" className="text-neon-cyan hover:gold-accent flex items-center gap-2 justify-center">
            ← Back to Courses
          </Link>
        </div>
      </main>
    )
  }

  return (
    <>
      <Helmet>
        <title>{course.name} - LevelUp Academy | Expert Maths Coaching</title>
        <meta name="description" content={course.description} />
        <link rel="canonical" href={`https://www.levelupacademy.com/courses/${slug}`} />
      </Helmet>

      <main className="min-h-screen bg-dark-900 pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-gold hover:neon-cyan mb-8"
          >
            <ArrowLeft size={20} /> Back to Courses
          </Link>

          <motion.div
            className="grid md:grid-cols-2 gap-12 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="text-6xl mb-4" aria-hidden="true">{course.image}</p>
              <h1 className="cinematic-text text-5xl mb-4">{course.name}</h1>
              <p className="text-xl text-gray-300 mb-6">{course.fullDescription}</p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="card-glow rounded-lg p-4">
                  <p className="text-gold text-sm">Duration</p>
                  <p className="font-bold">{course.duration}</p>
                </div>
                <div className="card-glow rounded-lg p-4">
                  <p className="text-gold text-sm">Classes/Week</p>
                  <p className="font-bold">{course.classesPerWeek}</p>
                </div>
                <div className="card-glow rounded-lg p-4">
                  <p className="text-gold text-sm">Price</p>
                  <p className="font-bold">{course.price}</p>
                </div>
              </div>

              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-gold to-neon-cyan text-dark-900 rounded-lg font-bold hover:shadow-lg inline-block"
              >
                Enroll Now
              </Link>
            </div>

            <motion.div
              className="card-glow rounded-xl p-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">What's Included</h2>
              <ul className="space-y-3">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="text-neon-cyan flex-shrink-0 mt-1" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="card-glow rounded-xl p-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6">Curriculum</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {course.curriculum.map((topic, idx) => (
                <div key={idx} className="bg-dark-700/50 p-4 rounded-lg border border-gold/20">
                  <p className="font-semibold">{topic}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </>
  )
}
