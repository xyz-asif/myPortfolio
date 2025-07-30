"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface CleanProgressBarProps {
  progress: number
  width?: string
  showPercentage?: boolean
  className?: string
}

export function CleanProgressBar({
  progress,
  width = "w-48",
  showPercentage = false,
  className = "",
}: CleanProgressBarProps) {
  const [displayProgress, setDisplayProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayProgress((prev) => {
        if (prev < progress) {
          return Math.min(prev + 1, progress)
        }
        return prev
      })
    }, 20)
    return () => clearInterval(timer)
  }, [progress])

  return (
    <div className={`relative ${className}`}>
      {/* Progress Bar */}
      <div className={`${width} h-px bg-gray-200 mx-auto relative`}>
        <motion.div
          className="absolute inset-y-0 left-0 bg-black"
          initial={{ width: "0%" }}
          animate={{ width: `${displayProgress}%` }}
          transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
        />
      </div>

      {/* Optional Percentage */}
      {showPercentage && (
        <div className="text-xs font-light text-gray-400 mt-3 text-center tracking-wider">
          {Math.round(displayProgress)}%
        </div>
      )}
    </div>
  )
}