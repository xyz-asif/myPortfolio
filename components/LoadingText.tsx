"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface LoadingTextProps {
  messages: string[]
  interval?: number
  className?: string
}

export function LoadingText({ messages, interval = 1000, className = "" }: LoadingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (messages.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length)
    }, interval)

    return () => clearInterval(timer)
  }, [messages.length, interval])

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-center"
        >
          {messages[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
