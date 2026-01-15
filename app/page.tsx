"use client"

import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { IntroLoader } from "@/components/intro-loader"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && <IntroLoader key="intro" onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <motion.main
        className="min-h-screen bg-background scroll-smooth"
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navigation />
        <div id="home">
          <HeroSection />
        </div>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </motion.main>
    </>
  )
}
