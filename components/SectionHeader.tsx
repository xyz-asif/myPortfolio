"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"


interface SectionHeaderProps {
  title: string
  className?: string
}

export function SectionHeader({ title, className = "" }: SectionHeaderProps) {
  const ref = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const isInView = useInView(ref, {
    once: true,
    margin: "-5%", // Reduced from -20% for better triggering
    amount: 0.1, // Reduced from 0.5 for easier triggering
  })

  // Fallback to ensure visibility after a timeout
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (!hasAnimated) {
        setHasAnimated(true)
      }
    }, 3000) // Show after 3 seconds regardless

    return () => clearTimeout(fallbackTimer)
  }, [hasAnimated])

  // Track when animation should trigger
  const shouldAnimate = isInView || hasAnimated

  useEffect(() => {
    if (shouldAnimate && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [shouldAnimate, hasAnimated])


  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.6,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-4xl font-light tracking-tighter text-black"
        style={{ willChange: "transform, opacity", minHeight: "1.2em", }}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={shouldAnimate ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{
          delay: shouldAnimate ? 0.2 : 0,
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
