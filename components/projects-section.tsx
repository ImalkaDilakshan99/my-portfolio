"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { scrollRevealVariants, containerVariants, viewportOptions, buttonHoverVariants } from "@/lib/animations"
import Image from "next/image"

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio showcasing projects and skills with smooth animations, dark mode support, and performance optimization.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: ["Framer Motion", "SEO optimized", "Accessibility focused"],
    liveUrl: "https://imalka.netlify.app/",
    githubUrl: "https://github.com/ImalkaDilakshan99/my-portfolio",
    image: "/projects/portfolio.png",
  },
  {
    title: "Movie App",
    description:
      "Cross-platform Flutter application that allows users to browse, search, and discover popular and upcoming movies using the TMDB API. The app follows Clean Architecture principles and uses Riverpod for scalable state management, with a modern UI featuring infinite scrolling and dark mode support.",
    tech: ["Flutter", "Dart", "REST APIs", "Riverpod", "Mobile Application Development", "Cross-Platform App Development"],
    highlights: ["Infinite scrolling", "Dark mode support", "Clean Architecture", "TMDB API integration"],
    githubUrl: "https://github.com/ImalkaDilakshan99/Movie-app",
    image: "/projects/Movie_app_poster.png",
  },
  {
    title: "To-Do Application",
    description:
      "Cross-platform To-Do mobile application using React Native (Expo) with a real-time backend powered by Convex. Features full CRUD operations, real-time data synchronization, light & dark mode with persistent user preferences, task progress tracking, and smooth animations for both iOS and Android platforms.",
    tech: ["React Native", "Expo", "TypeScript", "Convex", "Expo Router", "Async Storage"],
    highlights: ["Full CRUD operations", "Real-time sync", "Light & Dark mode", "Task progress tracking", "Responsive design", "Smooth animations"],
    githubUrl: "https://github.com/ImalkaDilakshan99/To-Do-App_rn",
    image: "/projects/todo_app.png",
  },
  {
    title: "Travel Budget Planner",
    description:
      "JavaFX desktop application for travel expense management with budget forecasting, expense categorization, and visual analytics reports.",
    tech: ["Java", "JavaFX"],
    highlights: ["Data visualization", "Budget forecasting", "Expense tracking"],
    githubUrl: "https://github.com/ImalkaDilakshan99/TravelBudgetPlanner",
    image: "/travel-budget-planning-app-with-charts.jpg",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={scrollRevealVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world applications demonstrating full-stack development and problem-solving skills
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={scrollRevealVariants}>
              <motion.div
                initial={{ y: 0 }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] },
                }}
              >
                <Card className="overflow-hidden transition-shadow duration-400 hover:shadow-xl border-border bg-card flex flex-col h-full">
                  <div className="relative w-full h-48 overflow-hidden bg-muted">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                      className="w-full h-full"
                    >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzFhMWExYSIvPjwvc3ZnPg=="
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

                    <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-3 mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-2 py-0.5 text-xs rounded-md bg-accent text-accent-foreground"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <motion.div
                          className="flex-1"
                          variants={buttonHoverVariants}
                          initial="initial"
                          whileHover="hover"
                          whileTap="tap"
                        >
                          <Button size="sm" variant="default" asChild className="w-full">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        </motion.div>
                      )}
                      {project.githubUrl && (
                        <motion.div
                          className="flex-1"
                          variants={buttonHoverVariants}
                          initial="initial"
                          whileHover="hover"
                          whileTap="tap"
                        >
                          <Button size="sm" variant="outline" asChild className="w-full bg-transparent">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
