"use client"

import { Card } from "@/components/ui/card"
import { Award } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInScaleVariants, containerVariants, viewportOptions, fadeInUpVariants } from "@/lib/animations"
import Image from "next/image"

const certifications = [
  {
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2024",
    image: "/aws-certificate-badge.jpg",
  },
  {
    title: "React Advanced Patterns",
    issuer: "Frontend Masters",
    date: "2023",
    image: "/react-certification-badge.jpg",
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
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
