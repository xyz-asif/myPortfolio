"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface SectionHeaderProps {
  title: string
  className?: string
}

export function SectionHeader({ title, className = "" }: SectionHeaderProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: "-20%",
    amount: 0.5,
  })

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.6,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-4xl font-light tracking-tighter text-black"
        style={{ willChange: "transform, opacity" }}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="h-px bg-black mt-4"
        style={{
          willChange: "transform",
          transformOrigin: "left center",
          transform: "translate3d(0, 0, 0)",
        }}
      />
    </div>
  )
}
