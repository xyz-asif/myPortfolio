"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

const navItems = [
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 50
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled)
    }
  }, [scrolled])

  useEffect(() => {
    // Throttle scroll events for better performance
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledHandleScroll, { passive: true })
    return () => window.removeEventListener("scroll", throttledHandleScroll)
  }, [handleScroll])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  // Close menu on window resize (when switching to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false) // Close mobile menu after navigation
    }
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm"
            : "bg-transparent backdrop-blur-none"
        }`}
        style={{
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          willChange: "background-color, backdrop-filter",
          transform: "translate3d(0, 0, 0)",
        }}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center py-6">
            <motion.button
              onClick={() => handleNavClick("#home")}
              className="text-xl font-medium tracking-tight text-black font-serif relative z-50"
              whileHover={{ opacity: 0.7 }}
              transition={{ duration: 0.2 }}
              style={{ willChange: "opacity" }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Asif Shaik
            </motion.button>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex space-x-12"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm font-medium tracking-wide text-black transition-opacity duration-200"
                  style={{ willChange: "opacity" }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMobileMenu}
              className="md:hidden relative z-50 p-2 -m-2"
              whileHover={{ opacity: 0.7 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              style={{ willChange: "opacity, transform" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
                    style={{ willChange: "transform, opacity" }}
                  >
                    <X size={24} className="text-black" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
                    style={{ willChange: "transform, opacity" }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M3 12H21" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                      <path d="M3 6H21" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                      <path d="M3 18H21" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
              style={{ willChange: "opacity" }}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
              className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg z-40 md:hidden"
              style={{
                paddingTop: "5rem",
                willChange: "transform, opacity",
                transform: "translate3d(0, 0, 0)",
              }}
            >
              <div className="px-8 py-8">
                <nav className="space-y-8">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.3,
                        ease: [0.4, 0.0, 0.2, 1],
                      }}
                      className="block w-full text-left text-2xl font-light tracking-tight text-black hover:opacity-60 transition-opacity duration-200"
                      style={{ willChange: "transform, opacity" }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </nav>

                {/* Contact Info in Mobile Menu */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: navItems.length * 0.05 + 0.1,
                    duration: 0.3,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                  className="mt-12 pt-8 border-t border-gray-200"
                  style={{ willChange: "transform, opacity" }}
                >
                  <div className="space-y-4">
                    <motion.a
                      href="mailto:connectasifshaik@gmail.com"
                      className="block text-sm font-medium text-gray-600 hover:text-black transition-colors duration-200"
                      whileHover={{ opacity: 0.7 }}
                      transition={{ duration: 0.2 }}
                    >
                      connectasifshaik@gmail.com
                    </motion.a>
                    <motion.a
                      href="tel:7036727179"
                      className="block text-sm font-medium text-gray-600 hover:text-black transition-colors duration-200"
                      whileHover={{ opacity: 0.7 }}
                      transition={{ duration: 0.2 }}
                    >
                      +91 7036727179
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com/in/asifdeveloper"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm font-medium text-gray-600 hover:text-black transition-colors duration-200"
                      whileHover={{ opacity: 0.7 }}
                      transition={{ duration: 0.2 }}
                    >
                      LinkedIn
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
