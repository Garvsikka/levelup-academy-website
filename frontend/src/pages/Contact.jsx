import React, { useState } from "react"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    class: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", phone: "", class: "", subject: "", message: "" })
        setTimeout(() => setSubmitted(false), 3000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us - LevelUp Academy | Book Free Workshop</title>
        <meta
          name="description"
          content="Get in touch with LevelUp Academy. Book a free workshop, schedule a demo class, or ask any questions about our maths coaching programs."
        />
        <link rel="canonical" href="https://www.levelupacademy.com/contact" />
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
              Get in <span className="gold-accent">Touch</span>
            </h1>
            <p className="text-xl text-gray-400">
              Have questions? We'd love to hear from you. Reach out anytime!
            </p>
          </motion.div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: <Phone size={32} />, title: "Phone", content: "+91-XXXX-XXXX-XX" },
              { icon: <Mail size={32} />, title: "Email", content: "hello@levelupacademy.com" },
              { icon: <MapPin size={32} />, title: "Location", content: "Rohini & Pitampura, Delhi" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="card-glow rounded-xl p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-gold mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Enquiry Form */}
          <motion.div
            className="card-glow rounded-xl p-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-dark-700/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-dark-700/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-dark-700/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold"
                />
                <select
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  required
                  className="bg-dark-700/50 border border-gold/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold"
                >
                  <option value="">Select Your Class</option>
                  <option value="8">Class 8</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                </select>
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject of Inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-dark-700/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-dark-700/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold"
              ></textarea>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-gold to-neon-cyan text-dark-900 rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} /> Send Message
              </motion.button>

              {submitted && (
                <motion.div
                  className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  ✓ Message sent successfully! We'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </main>
    </>
  )
}