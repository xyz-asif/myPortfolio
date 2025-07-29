"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface SkillBarProps {
  name: string
  level: number
  color: string
  delay?: number
}

export function SkillBar({ name, level, color, delay = 0 }: SkillBarProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-white font-medium">{name}</span>
        <span className="text-gray-400 text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${color} rounded-full relative`}
        >
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="absolute right-0 top-0 h-full w-2 bg-white/30 rounded-full"
          />
        </motion.div>
      </div>
    </div>
  )
}
