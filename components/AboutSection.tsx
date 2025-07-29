"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "./SectionHeader"

const skills = [
  "Flutter & Dart",
  "Swift & iOS",
  "Kotlin & Android",
  "Go & Golang",
  "Firebase & Cloud",
  "MongoDB & PostgreSQL",
  "REST APIs & GraphQL",
  "Git & Version Control",
  "CI/CD Pipelines",
  "Testing Frameworks",
  "UI/UX Design",
  "Socket Programming",
  "Push Notifications",
  "Payment Integration",
  "App Store Optimization",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0.0, 0.2, 1],
      staggerChildren: 0.05,
    },
  },
}

const skillVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
}

export default function AboutSection() {
  const ref = useRef(null)
  const skillsRef = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: "-15%",
    amount: 0.2,
  })
  const skillsInView = useInView(skillsRef, {
    once: true,
    margin: "-10%",
    amount: 0.1,
  })

  return (
    <section id="about" className="py-40 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
          style={{ willChange: "transform, opacity" }}
        >
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-3">
              <SectionHeader title="About" />
            </div>

            <div className="lg:col-span-9">
              <div className="space-y-12">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
                  className="text-2xl font-light text-black leading-relaxed"
                  style={{ willChange: "transform, opacity" }}
                >
                  A passionate mobile developer with over 4 years of experience crafting innovative applications that
                  users love and businesses depend on.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
                  className="text-lg font-light text-gray-600 leading-relaxed max-w-3xl"
                  style={{ willChange: "transform, opacity" }}
                >
                  Transitioned from civil engineering to software development, bringing a unique problem-solving
                  perspective to every project. I believe in creating applications that not only function flawlessly but
                  also provide meaningful experiences that make a difference in people's lives.
                </motion.p>

                <div className="pt-8">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
                    className="text-lg font-medium text-black mb-8 tracking-tight"
                    style={{ willChange: "transform, opacity" }}
                  >
                    Technical Expertise
                  </motion.h3>
                  <motion.div
                    ref={skillsRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={skillsInView ? "visible" : "hidden"}
                    className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6"
                    style={{ willChange: "transform, opacity" }}
                  >
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        variants={skillVariants}
                        className="text-sm font-medium text-gray-700 py-2 border-b border-gray-100"
                        style={{ willChange: "transform, opacity" }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
