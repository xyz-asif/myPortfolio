"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface StaggeredRevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function StaggeredReveal({ children, delay = 0, className = "" }: StaggeredRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
