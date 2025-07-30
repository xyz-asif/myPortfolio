"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { SectionHeader } from "./SectionHeader"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0.0, 0.2, 1] as [number, number, number, number],
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0.0, 0.2, 1] as [number, number, number, number],
    },
  },
}

export default function ContactSection() {
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: "-5%", // More lenient
    amount: 0.05, // Lower threshold
  })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true)
    }, 7000)
    return () => clearTimeout(timer)
  }, [])

  const shouldShow = isInView || hasAnimated

  return (
    <section id="contact" className="py-40 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
          style={{
            willChange: "transform, opacity",
            minHeight: "200px",
          }}
        >
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-3">
              <SectionHeader title="Contact" />
            </div>

            <div className="lg:col-span-9">
              <div className="grid lg:grid-cols-5 gap-20">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={shouldShow ? "visible" : "hidden"}

                  className="lg:col-span-2"
                  style={{ willChange: "transform, opacity" }}
                >
                  <motion.p
                    variants={itemVariants}
                    className="text-xl font-light text-black leading-relaxed mb-16"
                    style={{ willChange: "transform, opacity" }}
                  >
                    Let's discuss your next project and create something exceptional together.
                  </motion.p>

                  <div className="space-y-12">
                    <motion.div variants={itemVariants} style={{ willChange: "transform, opacity" }}>
                      <h3 className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-3">Email</h3>
                      <motion.a
                        href="mailto:connectasifshaik@gmail.com"
                        whileHover={{ opacity: 0.6 }}
                        transition={{ duration: 0.2 }}
                        className="text-lg font-light text-black transition-opacity duration-200"
                      >
                        connectasifshaik@gmail.com
                      </motion.a>
                    </motion.div>

                    <motion.div variants={itemVariants} style={{ willChange: "transform, opacity" }}>
                      <h3 className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-3">Phone</h3>
                      <motion.a
                        href="tel:7036727179"
                        whileHover={{ opacity: 0.6 }}
                        transition={{ duration: 0.2 }}
                        className="text-lg font-light text-black transition-opacity duration-200"
                      >
                        +91 7036727179
                      </motion.a>
                    </motion.div>

                    <motion.div variants={itemVariants} style={{ willChange: "transform, opacity" }}>
                      <h3 className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-3">LinkedIn</h3>
                      <motion.a
                        href="https://linkedin.com/in/asifdeveloper"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ opacity: 0.6 }}
                        transition={{ duration: 0.2 }}
                        className="text-lg font-light text-black transition-opacity duration-200"
                      >
                        linkedin.com/in/asifdeveloper
                      </motion.a>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
                  className="lg:col-span-3"
                  style={{ willChange: "transform, opacity" }}
                >
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full text-base font-light bg-transparent border-b border-gray-300 pb-4 focus:outline-none focus:border-black transition-colors duration-200 placeholder-gray-400"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full text-base font-light bg-transparent border-b border-gray-300 pb-4 focus:outline-none focus:border-black transition-colors duration-200 placeholder-gray-400"
                        />
                      </div>
                    </div>

                    <div>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full text-base font-light bg-transparent border-b border-gray-300 pb-4 focus:outline-none focus:border-black transition-colors duration-200 placeholder-gray-400"
                      />
                    </div>

                    <div>
                      <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full text-base font-light bg-transparent border-b border-gray-300 pb-4 focus:outline-none focus:border-black transition-colors duration-200 resize-none placeholder-gray-400"
                      />
                    </div>

                    <div className="pt-8">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="px-12 py-4 bg-black text-white text-sm font-medium tracking-widest uppercase transition-all duration-200 hover:bg-gray-800"
                      >
                        Send Message
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
