"use client"

import { motion, useInView, useScroll } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { SectionHeader } from "./SectionHeader"
import { Quote } from "lucide-react"

const testimonials = [
    {
        name: "Priya Sharma",
        position: "CEO",
        company: "TechFlow Solutions",
        quote: "Asif doesn't just deliver, he delivers with perfection. His attention to detail is unmatched.",
    },
    {
        name: "Marcus Rodriguez",
        position: "Founder",
        company: "InnovateLab",
        quote: "Working with Asif transformed our mobile presence. Exceptional quality and professionalism.",
    },
    {
        name: "Rajesh Kumar",
        position: "CTO",
        company: "Digital Dynamics",
        quote: "Asif's technical expertise and creative vision brought our app idea to life beyond expectations.",
    },
    {
        name: "David Kim",
        position: "Product Director",
        company: "NextGen Apps",
        quote: "Reliable, innovative, and always ahead of schedule. Asif is the developer every startup needs.",
    },
    {
        name: "Anita Patel",
        position: "Founder & CEO",
        company: "HealthTech Pro",
        quote: "Asif's Flutter expertise helped us scale to 100K+ users. Outstanding technical leadership.",
    },
    {
        name: "James Wilson",
        position: "VP Engineering",
        company: "CloudVision",
        quote: "The most dedicated developer we've worked with. Asif turns complex ideas into elegant solutions.",
    },
    {
        name: "Vikram Singh",
        position: "Co-Founder",
        company: "StartupHub",
        quote: "Asif's code quality and architecture decisions saved us months of technical debt. Brilliant work.",
    },
    {
        name: "Michael Chang",
        position: "CEO",
        company: "MobileFirst",
        quote: "From concept to deployment, Asif exceeded every milestone. A true mobile development expert.",
    },
]

// Create only 2 rows with different testimonials
const testimonialRows = [
    [...testimonials.slice(0, 4), ...testimonials.slice(0, 4)], // Row 1
    [...testimonials.slice(4, 8), ...testimonials.slice(4, 8)], // Row 2
]

export default function TestimonialsSection() {
    const ref = useRef(null)
    const containerRef = useRef(null)
    const [hasAnimated, setHasAnimated] = useState(false)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })
    const isInView = useInView(ref, {
        once: true,
        margin: "-5%",
        amount: 0.1,
    })
    const testimonialRowTransforms = [0, 0] // Placeholder for useTransform

    useEffect(() => {
        const timer = setTimeout(() => {
            setHasAnimated(true)
        }, 4000)
        return () => clearTimeout(timer)
    }, [])

    const shouldShow = isInView || hasAnimated

    return (
        <section id="testimonials" className="py-40 bg-white overflow-hidden" ref={containerRef}>
            <div className="max-w-6xl mx-auto px-8 mb-20">
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
                            <SectionHeader title="Client Testimonials" />
                        </div>
                        <div className="lg:col-span-9">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.2, duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
                                className="text-xl font-light text-gray-600 leading-relaxed"
                                style={{ willChange: "transform, opacity" }}
                            >
                                Trusted by founders, CTOs, and product leaders from innovative companies worldwide.
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Floating Testimonials - Only 2 Rows */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={shouldShow ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative space-y-8"
            >
                {testimonialRows.map((row, rowIndex) => (
                    <motion.div
                        key={rowIndex}
                        className="relative overflow-hidden"
                        style={{ y: testimonialRowTransforms[rowIndex] }}
                    >
                        <motion.div
                            className="flex space-x-6"
                            animate={{
                                x: rowIndex % 2 === 0 ? [0, -1920] : [-1920, 0],
                            }}
                            transition={{
                                duration: 40 + rowIndex * 5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                            }}
                            style={{ width: "fit-content" }}
                        >
                            {row.map((testimonial, index) => (
                                <CompactTestimonialCard key={`row${rowIndex}-${index}`} testimonial={testimonial} index={index} />
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Stats Section */}
            {/* <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.6, duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
                className="max-w-5xl mx-auto px-8 mt-32"
            >
                <div className="bg-gray-50 p-12 rounded-2xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: "50+", label: "Projects Delivered", icon: "📱" },
                            { number: "5M+", label: "App Downloads", icon: "⬇️" },
                            { number: "98%", label: "Client Satisfaction", icon: "⭐" },
                            { number: "4+", label: "Years Experience", icon: "🚀" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                                className="space-y-3"
                            >
                                <div className="text-2xl">{stat.icon}</div>
                                <div className="text-3xl font-light text-black">{stat.number}</div>
                                <div className="text-sm font-medium text-gray-500 tracking-wide">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div> */}
        </section>
    )
}

interface CompactTestimonialCardProps {
    testimonial: {
        name: string
        position: string
        company: string
        quote: string
    }
    index: number
}

function CompactTestimonialCard({ testimonial, index }: CompactTestimonialCardProps) {
    return (
        <motion.div
            className="flex-shrink-0 w-80 bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group"
            whileHover={{
                y: -6,
                scale: 1.02,
            }}
            transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        // transition={{ delay: index * 0.1, duration: 0.5 }}
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Quote Icon */}
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote size={24} />
            </div>

            {/* Quote */}
            <div className="mb-6 relative z-10">
                <motion.p
                    className="text-sm font-light text-gray-700 leading-relaxed italic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    "{testimonial.quote}"
                </motion.p>
            </div>

            {/* Author Info - Without Image */}
            <motion.div
                className="relative z-10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                <div className="font-medium text-black text-sm mb-1">{testimonial.name}</div>
                <div className="text-xs text-gray-500 leading-tight">
                    <div>{testimonial.position}</div>
                    <div className="font-medium text-gray-600">{testimonial.company}</div>
                </div>
            </motion.div>

            {/* Hover Effect Border */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gray-200/50 transition-colors duration-300" />
        </motion.div>
    )
}
