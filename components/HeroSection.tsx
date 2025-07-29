"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { SmoothAnimatedText } from "./SmoothAnimatedText"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0.0, 0.2, 1],
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
}

export default function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: "-10%",
    amount: 0.3,
  })

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-left"
          style={{
            willChange: "transform, opacity",
            transform: "translate3d(0, 0, 0)",
          }}
        >
          <motion.p
            variants={itemVariants}
            className="text-lg font-light text-gray-600 mb-6 tracking-wide"
            style={{ willChange: "transform, opacity" }}
          >
            Hey! I'm Asif
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter text-black mb-16 leading-none"
            style={{ willChange: "transform, opacity" }}
          >
            <span>I </span>
            <SmoothAnimatedText words={["Design", "Develop", "Deploy"]} className="font-medium" />
            <span> Mobile Apps</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-sm font-medium text-gray-400 tracking-widest uppercase"
            style={{ willChange: "transform, opacity" }}
          >
            Available for new opportunities
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={isInView ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
        transition={{
          delay: 0.8,
          duration: 0.6,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        style={{
          willChange: "transform, opacity",
          transformOrigin: "top center",
        }}
      >
        <div className="w-px h-16 bg-gray-300"></div>
      </motion.div>
    </section>
  )
}
