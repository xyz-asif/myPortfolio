"use client"

import { motion } from "framer-motion"

interface MinimalLoaderProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function MinimalLoader({ size = "md", className = "" }: MinimalLoaderProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  }

  const dotSize = {
    sm: "w-0.5 h-0.5",
    md: "w-1 h-1",
    lg: "w-1.5 h-1.5",
  }

  return (
    <div className={`flex items-center justify-center space-x-1 ${sizeClasses[size]} ${className}`}>
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`${dotSize[size]} bg-current rounded-full`}
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 1.2,
            repeat: Number.POSITIVE_INFINITY,
            delay: index * 0.15,
            ease: [0.4, 0.0, 0.2, 1],
          }}
        />
      ))}
    </div>
  )
}