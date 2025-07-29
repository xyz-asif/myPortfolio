"use client"

import { motion } from "framer-motion"

interface SimpleSpinnerProps {
  size?: number
  strokeWidth?: number
  className?: string
}

export function SimpleSpinner({ size = 20, strokeWidth = 2, className = "" }: SimpleSpinnerProps) {
  return (
    <motion.div
      className={`inline-block ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12a9 9 0 11-6.219-8.56" />
      </svg>
    </motion.div>
  )
}
