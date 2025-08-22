"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const words = ["Design", "Develop", "Deploy"]

export default function AnimatedText() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-4">
      <span className="text-4xl font-bold">I</span>
      <div className="w-[120px] relative"> {/* Fixed width container */}
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-4xl font-bold bg-gradient-to-r from-primary to-pink-500 
                                 bg-clip-text text-transparent absolute left-1/2 -translate-x-1/2"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-4xl font-bold">Mobile Apps</span>
    </div>
  )
}
