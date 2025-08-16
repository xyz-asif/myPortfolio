"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { SectionHeader } from "./SectionHeader"

const education = [
    {
        institution: "PVKK Institute of Technology",
        degree: "Bachelor of Technology",
        field: "Civil Engineering",
        location: "Anantapur",
        duration: "2018 — 2022",
        description:
            "Specialized in structural engineering and project management. Developed strong analytical and problem-solving skills that later translated into software development.",
    },
]

const certifications = [
    {
        provider: "Google Developers",
        title: "Advanced Flutter Development",
        location: "Online",
        duration: "2021",
        description:
            "Advanced concepts in Flutter including state management, performance optimization, and platform integration.",
    },
    {
        provider: "Apple Developer Academy",
        title: "iOS Development with Swift",
        location: "Online",
        duration: "2022",
        description:
            "Native iOS development using Swift, UIKit, and SwiftUI for creating high-performance mobile applications.",
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

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.4, 0.0, 0.2, 1] as [number, number, number, number]
        },
    },
}

export default function EducationSection() {
    const ref = useRef(null)
    const [hasAnimated, setHasAnimated] = useState(false)

    const isInView = useInView(ref, {
        once: true,
        margin: "-5%",
        amount: 0.05,
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            setHasAnimated(true)
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    const shouldShow = isInView || hasAnimated

    return (
        <section id="education" className="py-40 bg-gray-50">
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
                            <SectionHeader title="Education" />
                        </div>

                        <div className="lg:col-span-9">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate={shouldShow ? "visible" : "hidden"}
                                className="space-y-20"
                                style={{ willChange: "transform, opacity" }}
                            >
                                {/* Academic Education */}
                                {education.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="border-b border-gray-200 pb-16"
                                        style={{ willChange: "transform, opacity" }}
                                    >
                                        <div className="grid md:grid-cols-4 gap-8">
                                            <div className="md:col-span-1">
                                                <div className="text-sm font-medium text-gray-400 tracking-wide mb-2">{edu.duration}</div>
                                                <div className="text-sm text-gray-500">{edu.location}</div>
                                            </div>

                                            <div className="md:col-span-3">
                                                <h3 className="text-xl font-medium text-black mb-2 tracking-tight">{edu.institution}</h3>
                                                <h4 className="text-lg font-light text-gray-700 mb-2">{edu.degree}</h4>
                                                <h5 className="text-base font-light text-gray-600 mb-6">{edu.field}</h5>
                                                <p className="text-gray-600 font-light leading-relaxed">{edu.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Professional Certifications */}
                                {certifications.map((cert, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="border-b border-gray-200 pb-16 last:border-b-0"
                                        style={{ willChange: "transform, opacity" }}
                                    >
                                        <div className="grid md:grid-cols-4 gap-8">
                                            <div className="md:col-span-1">
                                                <div className="text-sm font-medium text-gray-400 tracking-wide mb-2">{cert.duration}</div>
                                                <div className="text-sm text-gray-500">{cert.location}</div>
                                            </div>

                                            <div className="md:col-span-3">
                                                <h3 className="text-xl font-medium text-black mb-2 tracking-tight">{cert.provider}</h3>
                                                <h4 className="text-lg font-light text-gray-700 mb-6">{cert.title}</h4>
                                                <p className="text-gray-600 font-light leading-relaxed">{cert.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
