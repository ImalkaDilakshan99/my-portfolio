"use client"

import { Card } from "@/components/ui/card"
import { Award } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInScaleVariants, containerVariants, viewportOptions, fadeInUpVariants } from "@/lib/animations"
import Image from "next/image"

const certifications = [
  {
    title: "C# Mastering Course For Intermediates",
    issuer: "Udemy",
    date: "2026",
    image: "/certification/Csharp-course-for-Intermediates.jpg",
  },
  {
    title: "C# for Beginners",
    issuer: "Udemy",
    date: "2025",
    image: "/certification/Csharp_for_beginners.jpg",
  },
  {
    title: "Maximize Productivity With AI Tools",
    issuer: "Coursera",
    date: "2025",
    image: "/certification/Coursera-Maximize Productivity With AI Tools_page-0001.jpg",
  },
  {
    title: "Java Basic",
    issuer: "SoloLearn",
    date: "2025",
    image: "/certification/java-basic-sololearn.jpg",
  },
  {
    title: "JavaScript Intermediate",
    issuer: "SoloLearn",
    date: "2025",
    image: "/certification/javascript-Intermediate-Sololern.jpg",
  },
  {
    title: "Postman API Certification",
    issuer: "Postman",
    date: "2026",
    image: "/certification/Postman-API-Certification_page-0001.jpg",
  },
  {
    title: "Web Development",
    issuer: "SoloLearn",
    date: "2025",
    image: "/certification/Solo learn WEB.jpg",
  },
  {
    title: "IIT Hackathon",
    issuer: "Institute of Information Technology",
    date: "2025",
    image: "/certification/Imalka Dilakshan-IIT-Hackothon.jpg",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUpVariants}
        >
          Certifications & Achievements
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={containerVariants}
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={fadeInScaleVariants}>
              <motion.div
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 border-border bg-card h-full">
                  <div className="relative w-full h-48 overflow-hidden bg-muted">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                      className="w-full h-full"
                    >
                      <Image
                        src={cert.image || "/placeholder.svg"}
                        alt={cert.title}
                        fill
                        className="object-cover"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzUwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzFhMWExYSIvPjwvc3ZnPg=="
                      />
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="p-2 rounded-lg bg-primary/10"
                        whileHover={{
                          rotate: [0, -10, 10, 0],
                          transition: { duration: 0.5 },
                        }}
                      >
                        <Award className="h-5 w-5 text-primary" />
                      </motion.div>

                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{cert.title}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                        <p className="text-xs text-muted-foreground">{cert.date}</p>
                      </div>
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
