"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface SmoothAnimatedTextProps {
  words: string[]
  className?: string
}

export function SmoothAnimatedText({ words, className = "" }: SmoothAnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, 2500)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [words.length])

  return (
    <span
      className={`inline-block relative ${className}`}
      style={{
        transition: "width 0.4s cubic-bezier(0.4, 0.0, 0.2, 1)",
        paddingRight: "0.2em",
        willChange: "width",
        transform: "translate3d(0, 0, 0)", // Force GPU acceleration
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 6, filter: "blur(1px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -6, filter: "blur(1px)" }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
            filter: { duration: 0.3 },
          }}
          className="block whitespace-nowrap"
          style={{
            willChange: "transform, opacity, filter",
            transform: "translate3d(0, 0, 0)",
          }}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
