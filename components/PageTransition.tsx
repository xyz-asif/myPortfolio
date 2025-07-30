"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface PageTransitionProps {
    children: React.ReactNode
}

const loadingStages = [
    { text: "Loading", progress: 0 },
    { text: "Preparing", progress: 40 },
    { text: "Ready", progress: 100 },
]

export function PageTransition({ children }: PageTransitionProps) {
    const [isLoading, setIsLoading] = useState(true)
    const [showContent, setShowContent] = useState(false)
    const [currentStage, setCurrentStage] = useState(0)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        // Progressive loading stages with longer intervals for minimalist feel
        const stageInterval = setInterval(() => {
            setCurrentStage((prev) => {
                if (prev < loadingStages.length - 1) {
                    return prev + 1
                }
                clearInterval(stageInterval)
                return prev
            })
        }, 600) // Slower, more deliberate transitions

        // Smooth progress animation
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                const targetProgress = loadingStages[currentStage]?.progress || 0
                if (prev < targetProgress) {
                    return Math.min(prev + 1, targetProgress)
                }
                return prev
            })
        }, 25) // Smooth but not too fast

        // Complete loading
        const completeTimer = setTimeout(() => {
            setIsLoading(false)
            setTimeout(() => setShowContent(true), 500)
        }, 2000) // Clean 2-second loading time

        return () => {
            clearInterval(stageInterval)
            clearInterval(progressInterval)
            clearTimeout(completeTimer)
        }
    }, [currentStage])

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                        className="fixed inset-0 z-50 bg-white flex items-center justify-center"
                    >
                        {/* Main Content Container */}
                        <div className="text-center">
                            {/* Logo/Brand */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
                                className="mb-16"
                            >
                                <h1 className="text-2xl font-light tracking-tight text-black font-serif mb-3">Asif Shaik</h1>
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.3, duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
                                    className="h-px bg-black w-16 mx-auto"
                                    style={{ transformOrigin: "center" }}
                                />
                            </motion.div>

                            {/* Loading Status */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.4 }}
                                className="mb-12"
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentStage}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
                                        className="text-sm font-medium text-gray-600 tracking-wide"
                                    >
                                        {loadingStages[currentStage]?.text}
                                    </motion.div>
                                </AnimatePresence>
                            </motion.div>

                            {/* Minimal Progress Indicator */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1, duration: 0.4 }}
                                className="relative"
                            >
                                {/* Clean Progress Bar */}
                                <div className="w-48 h-px bg-gray-200 mx-auto relative">
                                    <motion.div
                                        className="absolute inset-y-0 left-0 bg-black"
                                        initial={{ width: "0%" }}
                                        animate={{ width: `${progress}%` }}
                                        transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                                    />
                                </div>

                                {/* Progress Percentage */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.2, duration: 0.3 }}
                                    className="text-xs font-light text-gray-400 mt-4 tracking-wider"
                                >
                                    {Math.round(progress)}%
                                </motion.div>
                            </motion.div>

                            {/* Minimal Loading Animation */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.4, duration: 0.4 }}
                                className="mt-12"
                            >
                                <div className="flex items-center justify-center space-x-1">
                                    {[0, 1, 2].map((index) => (
                                        <motion.div
                                            key={index}
                                            className="w-1 h-1 bg-gray-400 rounded-full"
                                            animate={{
                                                opacity: [0.3, 1, 0.3],
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Number.POSITIVE_INFINITY,
                                                delay: index * 0.2,
                                                ease: [0.4, 0.0, 0.2, 1],
                                            }}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <AnimatePresence>
                {showContent && (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}