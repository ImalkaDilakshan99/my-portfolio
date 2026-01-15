"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { scrollRevealVariants, viewportOptions } from "@/lib/animations"
import { useRef } from "react"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const watermarkY = useTransform(scrollYProgress, [0, 1], [-50, 50])
  const watermarkScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1])

  return (
    <section id="about" className="py-24 sm:py-28 bg-muted/30 relative overflow-hidden" ref={sectionRef}>
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.07] pointer-events-none hidden lg:block"
        style={{
          y: watermarkY,
          scale: watermarkScale,
        }}
      >
        <img
          src="/professional-developer-portrait-photo.jpg"
          alt=""
          className="w-full h-full object-cover grayscale blur-sm"
          aria-hidden="true"
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-12 space-y-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={scrollRevealVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <p className="text-muted-foreground">Aspiring Software Engineer | Quick Learner | Team Player</p>
          </motion.div>

          <motion.div
            className="space-y-6 text-muted-foreground leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            <motion.p className="text-base md:text-lg" variants={scrollRevealVariants}>
              I'm a software engineering student passionate about creating user-focused solutions that solve real
              problems. Currently pursuing my Bachelor of Information and Communication Technology, I combine academic
              learning with hands-on project experience in web development and machine learning.
            </motion.p>

            <motion.p className="text-base md:text-lg" variants={scrollRevealVariants}>
              I thrive on learning new technologies and applying them to practical challenges. From building responsive
              web applications with React and Next.js to exploring AI algorithms, I approach each project as an
              opportunity to grow my skills and deliver quality results.
            </motion.p>

            <motion.p className="text-base md:text-lg" variants={scrollRevealVariants}>
              I'm actively seeking internship opportunities where I can contribute to meaningful projects, collaborate
              with experienced developers, and continue developing my expertise in full-stack development and machine
              learning. I bring enthusiasm, adaptability, and a commitment to continuous improvement.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
