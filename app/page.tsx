"use client"

import { useRef } from "react"
import { useScroll } from "framer-motion"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ExperienceSection from "@/components/ExperienceSection"
import ProjectsSection from "@/components/ProjectsSection"
import ContactSection from "@/components/ContactSection"
import Navigation from "@/components/Navigation"
import { PageTransition } from "@/components/PageTransition"
import { StaggeredReveal } from "@/components/StaggeredReveal"
import { FadeInSection } from "@/components/FadeInSection"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <PageTransition>
      <div ref={containerRef} className="bg-white text-black">
        <FadeInSection delay={0.2}>
          <Navigation />
        </FadeInSection>

        <StaggeredReveal delay={0.4}>
          <HeroSection />
        </StaggeredReveal>

        <StaggeredReveal delay={0.6}>
          <AboutSection />
        </StaggeredReveal>

        <StaggeredReveal delay={0.8}>
          <ExperienceSection />
        </StaggeredReveal>

        <StaggeredReveal delay={1.0}>
          <ProjectsSection />
        </StaggeredReveal>

        <StaggeredReveal delay={1.2}>
          <ContactSection />
        </StaggeredReveal>
      </div>
    </PageTransition>
  )
}
