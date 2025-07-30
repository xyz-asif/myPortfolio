"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FadeInSectionProps {
    children: ReactNode
    delay?: number
    duration?: number
    className?: string
}

export function FadeInSection({ children, delay = 0, duration = 0.6, className = "" }: FadeInSectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.4, 0.0, 0.2, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}