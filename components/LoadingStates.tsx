"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface LoadingStatesProps {
  states: string[]
  interval?: number
  className?: string
}

export function LoadingStates({ states, interval = 800, className = "" }: LoadingStatesProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (states.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % states.length)
    }, interval)

    return () => clearInterval(timer)
  }, [states.length, interval])

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-center"
        >
          {states[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
