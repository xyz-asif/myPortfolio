"use client"

import { motion } from "framer-motion"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function LoadingSpinner({ size = "md", className = "" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Outer Ring */}
      <motion.div
        className="absolute inset-0 border-2 border-gray-200 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      {/* Inner Ring */}
      <motion.div
        className="absolute inset-1 border-2 border-black border-t-transparent rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      {/* Center Dot */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-1 h-1 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
    </div>
  )
}
