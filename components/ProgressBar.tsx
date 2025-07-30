"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface ProgressBarProps {
    progress: number
    showPercentage?: boolean
    className?: string
    animated?: boolean
}

export function ProgressBar({ progress, showPercentage = false, className = "", animated = true }: ProgressBarProps) {
    const [displayProgress, setDisplayProgress] = useState(0)

    useEffect(() => {
        if (animated) {
            const timer = setInterval(() => {
                setDisplayProgress((prev) => {
                    if (prev < progress) {
                        return Math.min(prev + 1, progress)
                    }
                    return prev
                })
            }, 20)
            return () => clearInterval(timer)
        } else {
            setDisplayProgress(progress)
        }
    }, [progress, animated])

    return (
        <div className={`relative ${className}`}>
            {showPercentage && (
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm font-medium text-gray-500">{Math.round(displayProgress)}%</span>
                </div>
            )}

            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                {/* Background Shimmer */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    animate={{ x: [-100, 300] }}
                    transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />

                {/* Progress Fill */}
                <motion.div
                    className="h-full bg-gradient-to-r from-black to-gray-700 rounded-full relative"
                    initial={{ width: "0%" }}
                    animate={{ width: `${displayProgress}%` }}
                    transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
                >
                    {/* Glow Effect */}
                    <motion.div
                        className="absolute inset-0 bg-black rounded-full opacity-30 blur-sm"
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                </motion.div>
            </div>
        </div>
    )
}