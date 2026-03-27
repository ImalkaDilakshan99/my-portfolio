"use client"

import { Card } from "@/components/ui/card"
import { GraduationCap, Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUpVariants, containerVariants, viewportOptions, slideInLeftVariants } from "@/lib/animations"

const experiences = [
  {
    type: "education",
    title: "Bachelor of Information and Communication Technology",
    organization: "Uva Wellassa University",
    period: "2022 - Present",
    description:
      "Focused on software engineering fundamentals, data structures, algorithms, and oop concepts. Actively engaged in project-based learning and collaborative team assignments.",
    highlights: ["Strong academic performance", "Team collaboration", "Project-based learning"],
  },
  {
    type: "internship",
    title: "Mobile App Development Intern",
    organization: "Hanetz IT Innovations (PVT)",
    period: "Aug 2025 - Dec 2025",
    description: "Built and optimized Flutter mobile applications, improving app performance by ~20%. Integrated RESTful APIs for secure and scalable backend communication. Collaborated in an Agile team, contributing to feature development and sprint deliveries. Identified and fixed bugs, reducing crash/issue rates by ~15%. Wrote clean, maintainable code following Flutter best practices.",
    highlights: ["Mobile App development", "Flutter applications", "Version control"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUpVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Education & Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Academic background and working experience</p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={containerVariants}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={slideInLeftVariants}>
              <Card className="p-6 hover:shadow-xl transition-shadow duration-400 border-border bg-card">
                <div className="flex gap-4">
                  <motion.div
                    className="p-3 rounded-lg bg-primary/10 h-fit"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    {exp.type === "education" ? (
                      <GraduationCap className="h-6 w-6 text-primary" />
                    ) : (
                      <Briefcase className="h-6 w-6 text-primary" />
                    )}
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <span className="text-sm text-muted-foreground font-medium">{exp.period}</span>
                    </div>

                    <p className="text-primary font-medium mb-3">{exp.organization}</p>

                    <p className="text-muted-foreground leading-relaxed mb-3">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-2.5 py-1 text-xs rounded-md bg-accent text-accent-foreground font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
