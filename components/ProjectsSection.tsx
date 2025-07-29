"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { SectionHeader } from "./SectionHeader"

const featuredProject = {
  title: "HarGharwala",
  description:
    "Essential services and daily groceries delivery platform with comprehensive subscription management and real-time order tracking. Built with Flutter, featuring complex state management, payment integration, and real-time notifications.",
  link: "https://play.google.com/store/apps/details?id=com.hargharwala.customer&pli=1",
  image: "/placeholder.svg?height=600&width=900",
  year: "2024",
  category: "E-commerce",
  featured: true,
}

const projects = [
  {
    title: "TASO Social",
    description: "Social trading platform featuring real-time communication and mentorship programs for traders.",
    link: "https://play.google.com/store/apps/details?id=com.taso.main&hl=en_US",
    image: "/placeholder.svg?height=400&width=600",
    year: "2024",
    category: "Social & Finance",
  },
  {
    title: "PaperBoys",
    description: "Multi-language news application delivering real-time information with personalized content curation.",
    link: "https://play.google.com/store/apps/details?id=com.jsl.paperboys&hl=en",
    image: "/placeholder.svg?height=400&width=600",
    year: "2023",
    category: "News & Media",
  },
  {
    title: "Actin Plus",
    description: "Healthcare platform enabling seamless test bookings and secure payment processing.",
    link: "https://play.google.com/store/apps/details?id=com.actin.user&pcampaignid=web_share",
    image: "/placeholder.svg?height=400&width=600",
    year: "2023",
    category: "Healthcare",
  },
  {
    title: "Neer App",
    description: "IoT-integrated water purifier monitoring system with Bluetooth connectivity and real-time updates.",
    link: "https://play.google.com/store/apps/details?id=com.kanavneer.serviceman&hl=en_US",
    image: "/placeholder.svg?height=400&width=600",
    year: "2022",
    category: "IoT & Hardware",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      staggerChildren: 0.1,
    },
  },
}

const projectVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
}

export default function ProjectsSection() {
  const ref = useRef(null)
  const projectsRef = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: "-15%",
    amount: 0.1,
  })
  const projectsInView = useInView(projectsRef, {
    once: true,
    margin: "-10%",
    amount: 0.1,
  })

  return (
    <section id="projects" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
          style={{ willChange: "transform, opacity" }}
        >
          <div className="grid lg:grid-cols-12 gap-20 mb-24">
            <div className="lg:col-span-3">
              <SectionHeader title="Selected Work" />
            </div>
            <div className="lg:col-span-9">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
                className="text-xl font-light text-gray-600 leading-relaxed"
                style={{ willChange: "transform, opacity" }}
              >
                A collection of mobile applications that have reached millions of users worldwide, showcasing expertise
                in cross-platform development and user experience design.
              </motion.p>
            </div>
          </div>

          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="mb-24"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="bg-gray-50 overflow-hidden group">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-[4/3] lg:aspect-auto bg-gray-100 overflow-hidden">
                  <Image
                    src={featuredProject.image || "/placeholder.svg"}
                    alt={featuredProject.title}
                    width={900}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    style={{ willChange: "transform" }}
                  />
                </div>
                <div className="p-12 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-medium text-gray-400 tracking-wide">{featuredProject.year}</span>
                    <span className="text-xs text-gray-300">•</span>
                    <span className="text-xs font-medium text-gray-400 tracking-wide">{featuredProject.category}</span>
                    <span className="text-xs text-gray-300">•</span>
                    <span className="text-xs font-medium text-blue-600 tracking-wide">FEATURED</span>
                  </div>
                  <h3 className="text-3xl font-light tracking-tighter text-black mb-6">{featuredProject.title}</h3>
                  <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">{featuredProject.description}</p>
                  <motion.a
                    href={featuredProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ opacity: 0.6 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center gap-2 text-sm font-medium text-black tracking-wide transition-opacity duration-200"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Projects Grid */}
          <motion.div
            ref={projectsRef}
            variants={containerVariants}
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            style={{ willChange: "transform, opacity" }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={projectVariants}
                className="group"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg">
                  <div className="aspect-[4/3] bg-gray-50 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={267}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    style={{ willChange: "transform" }}
                  />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-medium text-gray-400 tracking-wide">{project.year}</span>
                      <span className="text-xs text-gray-300">•</span>
                      <span className="text-xs font-medium text-gray-400 tracking-wide">{project.category}</span>
                    </div>
                    <h3 className="text-lg font-medium tracking-tight text-black mb-2">{project.title}</h3>
                    <p className="text-sm font-light text-gray-600 leading-relaxed mb-4">{project.description}</p>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ opacity: 0.6 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex items-center gap-2 text-xs font-medium text-black tracking-wide transition-opacity duration-200"
                    >
                      View Project
                      <ExternalLink size={14} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Button Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-center mt-20"
            style={{ willChange: "transform, opacity" }}
          >
            <p className="text-sm font-light text-gray-500 mb-8">
              More projects available upon request • Total downloads: 5M+
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="px-8 py-3 border border-gray-300 text-sm font-medium text-black tracking-wide hover:border-black transition-colors duration-200"
            >
              View All Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
