"use client"

import { Card } from "@/components/ui/card"
import { Code2, Database, Server, Wrench, Smartphone } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { scrollRevealVariants, containerVariants, viewportOptions, iconHoverVariants } from "@/lib/animations"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      { name: "React", color: "#61DAFB", proficiency: 75 },
      { name: "Next.js", color: "#000000", proficiency: 70 },
      { name: "HTML/CSS", color: "#E34F26", proficiency: 85 },
      { name: "Tailwind CSS", color: "#06B6D4", proficiency: 80 },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", color: "#339933", proficiency: 70 },
      { name: "Express", color: "#000000", proficiency: 65 },
      { name: ".Net", color:"#339933", proficiency: 65},
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
    { name: "Firebase", color: "#FFCA28", proficiency: 65 },
    { name: "MongoDB", color: "#FFCA28", proficiency: 65 },
    { name: "MySql", color: "#FFCA28", proficiency: 65 },
    ],
  },
  {
    title: "Languages & Tools",
    icon: Wrench,
    skills: [
      { name: "JavaScript", color: "#F7DF1E", proficiency: 80 },
      { name: "TypeScript", color: "#3178C6", proficiency: 70 },
      { name: "C#", color: "#007396", proficiency: 75 },
      { name: "Java", color: "#007396", proficiency: 75 },
      { name: "Dart", color: "#007396", proficiency: 75 },
      { name: "Git & GitHub", color: "#F05032", proficiency: 80 },
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "Flutter", color: "#02569B", proficiency: 75 },
      { name: "React Native", color: "#61DAFB", proficiency: 60 },
      { name: "Expo", color: "#000020", proficiency: 60 },
    ],
  },
]

function ProficiencyBar({ proficiency, delay = 0 }: { proficiency: number; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const segments = 5
  const filledSegments = Math.ceil((proficiency / 100) * segments)

  return (
    <div ref={ref} className="flex gap-1 mt-2">
      {Array.from({ length: segments }).map((_, index) => (
        <motion.div
          key={index}
          className="h-1.5 flex-1 rounded-full bg-muted overflow-hidden"
          initial={{ opacity: 0.3 }}
          animate={
            isInView && index < filledSegments
              ? {
                opacity: 1,
                backgroundColor: "oklch(0.65 0.18 166)",
              }
              : { opacity: 0.3 }
          }
          transition={{
            duration: 0.4,
            delay: delay + index * 0.1,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      ))}
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={scrollRevealVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with, organized by proficiency level
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <blockquote className="relative">
            <motion.div
              className="absolute -top-4 -left-4 text-5xl md:text-6xl text-primary/20 font-serif"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              "
            </motion.div>
            <p className="text-lg md:text-xl italic text-muted-foreground/90 mb-3 relative z-10 text-pretty leading-relaxed">
              The more you learn, the more you realize how much you don't know
            </p>
            <footer className="text-sm md:text-base text-muted-foreground/70 font-medium">— Albert Einstein</footer>
          </blockquote>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={containerVariants}
        >
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div key={category.title} variants={scrollRevealVariants} className="flex">
                <motion.div
                  initial={{ y: 0 }}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] },
                  }}
                  className="w-full"
                >
                  <Card className="p-6 transition-shadow duration-400 hover:shadow-xl border-border bg-card h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-5">
                      <motion.div
                        className="p-2.5 rounded-lg bg-primary/10"
                        variants={iconHoverVariants}
                        initial="initial"
                        whileHover="hover"
                      >
                        <Icon className="h-5 w-5 text-primary" />
                      </motion.div>
                      <h3 className="font-semibold text-lg">{category.title}</h3>
                    </div>

                    <div className="space-y-4 flex-1">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: categoryIndex * 0.1 + index * 0.05,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-xs text-muted-foreground">
                              {skill.proficiency >= 75
                                ? "Advanced"
                                : skill.proficiency >= 65
                                  ? "Intermediate"
                                  : "Learning"}
                            </span>
                          </div>
                          <ProficiencyBar proficiency={skill.proficiency} delay={categoryIndex * 0.1 + index * 0.05} />
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
