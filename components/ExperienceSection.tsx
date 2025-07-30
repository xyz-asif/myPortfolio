"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { SectionHeader } from "./SectionHeader"

const experiences = [
  {
    company: "Ahex Technologies",
    position: "Software Engineer",
    location: "Hyderabad",
    duration: "2024 — Present",
    description:
      "Leading CI/CD implementation and native platform integration for Flutter applications. Managing end-to-end deployment processes for mobile applications across multiple platforms.",
  },
  {
    company: "DigitalRaiz Creative Solutions",
    position: "Software Engineer",
    location: "Hyderabad",
    duration: "2023 — 2024",
    description:
      "Developed Flutter applications using MVC architecture. Collaborated with cross-functional teams to deliver high-quality mobile solutions for diverse client requirements.",
  },
  {
    company: "MSM Technologies",
    position: "Software Engineer",
    location: "Bangalore",
    duration: "2021 — 2023",
    description:
      "Orchestrated cross-functional collaboration and implemented rigorous testing protocols for iOS and Android applications. Established development best practices.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0.0, 0.2, 1] as [number, number, number, number],
      staggerChildren: 0.15,
    },
  },
}

const experienceVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0.0, 0.2, 1] as [number, number, number, number],
    },
  },
}

export default function ExperienceSection() {
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: "-5%", // More lenient margin
    amount: 0.05, // Lower threshold
  })
  // Fallback visibility
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const shouldShow = isInView || hasAnimated

  return (
    <section id="experience" className="py-40 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
          style={{ willChange: "transform, opacity" }}
        >
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-3">
              <SectionHeader title="Experience" />
            </div>

            <div className="lg:col-span-9">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={shouldShow ? "visible" : "hidden"}
                className="space-y-20"
                style={{ willChange: "transform, opacity", minHeight: "200px" }}
              >
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={experienceVariants}
                    className="border-b border-gray-200 pb-16 last:border-b-0"
                    style={{ willChange: "transform, opacity" }}
                  >
                    <div className="grid md:grid-cols-4 gap-8">
                      <div className="md:col-span-1">
                        <div className="text-sm font-medium text-gray-400 tracking-wide mb-2">{exp.duration}</div>
                        <div className="text-sm text-gray-500">{exp.location}</div>
                      </div>

                      <div className="md:col-span-3">
                        <h3 className="text-xl font-medium text-black mb-2 tracking-tight">{exp.company}</h3>
                        <h4 className="text-lg font-light text-gray-700 mb-6">{exp.position}</h4>
                        <p className="text-gray-600 font-light leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={shouldShow  ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  delay: 0.6,
                  duration: 0.6,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className="mt-24 pt-16 border-t border-gray-200"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="grid md:grid-cols-2 gap-16">
                  <div>
                    <h3 className="text-lg font-medium text-black mb-8 tracking-tight">Education</h3>
                    <div>
                      <h4 className="font-medium text-black mb-2">Civil Engineering</h4>
                      <p className="text-sm text-gray-600 mb-1">PVKK Institute of Technology</p>
                      <p className="text-sm text-gray-400">2018 — 2022</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-black mb-8 tracking-tight">Certification</h3>
                    <div>
                      <h4 className="font-medium text-black mb-2">Flutter Developer</h4>
                      <p className="text-sm text-gray-600 mb-1">Udacity</p>
                      <p className="text-sm text-gray-400">2020</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
