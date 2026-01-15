"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Github, Instagram, Linkedin, Mail } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { fadeInUpVariants, buttonHoverVariants } from "@/lib/animations"

// Tech icon components
const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565z" />
  </svg>
)

const NextJSIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361z" />
  </svg>
)

const JavaScriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067z" />
  </svg>
)

const JavaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.218M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573z" />
  </svg>
)

const NodeJSIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.990,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392z" />
  </svg>
)

const GitIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72 0.721 1.884 0 2.6-.719.721-1.889.721-2.609 0z" />
  </svg>
)

function FloatingIcon({
  icon: Icon,
  delay = 0,
  radius = 200,
  duration = 25,
  className = "",
}: {
  icon: React.ElementType
  delay?: number
  radius?: number
  duration?: number
  className?: string
}) {
  return (
    <motion.div
      className={`absolute left-1/2 top-1/2 ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.8, 0.9, 1, 0.9, 0.8, 0.8],
        scale: [0, 0.85, 0.95, 1.05, 1, 0.95, 0.85],
        x: Array.from({ length: 60 }, (_, i) => -radius * Math.cos(delay + (i * Math.PI * 2) / 60)),
        y: Array.from({ length: 60 }, (_, i) => -radius * Math.sin(delay + (i * Math.PI * 2) / 60)),
      }}
      transition={{
        opacity: {
          duration: duration / 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: delay * 0.15,
        },
        scale: {
          duration: duration / 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: delay * 0.15,
        },
        x: {
          duration,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          delay: delay * 0.15,
        },
        y: {
          duration,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          delay: delay * 0.15,
        },
      }}
      whileHover={{
        scale: 1.4,
        opacity: 1,
        transition: { duration: 0.3, ease: [0.6, 0.01, 0.05, 0.95] },
      }}
    >
      <motion.div
        className="backdrop-blur-xl bg-primary/10 border border-primary/30 rounded-2xl p-3 shadow-2xl"
        style={{
          boxShadow:
            "0 0 30px rgba(52, 211, 153, 0.3), 0 0 60px rgba(52, 211, 153, 0.15), inset 0 2px 4px rgba(255, 255, 255, 0.15)",
        }}
        animate={{
          boxShadow: [
            "0 0 30px rgba(52, 211, 153, 0.3), 0 0 60px rgba(52, 211, 153, 0.15), inset 0 2px 4px rgba(255, 255, 255, 0.15)",
            "0 0 40px rgba(52, 211, 153, 0.5), 0 0 80px rgba(52, 211, 153, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.2)",
            "0 0 30px rgba(52, 211, 153, 0.3), 0 0 60px rgba(52, 211, 153, 0.15), inset 0 2px 4px rgba(255, 255, 255, 0.15)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: delay * 0.3,
        }}
      >
        <Icon className="h-6 w-6 md:h-8 md:w-8 text-primary drop-shadow-lg" />
      </motion.div>
    </motion.div>
  )
}

function TypingRoles() {
  const roles = [
    { text: "Software Engineer", color: "oklch(0.52 0.15 166)" }, // Emerald Green
    { text: "Full Stack Developer", color: "oklch(0.58 0.14 185)" }, // Teal
    { text: "Mobile App Developer", color: "oklch(0.62 0.12 160)" }, // Mint Green
    { text: "Game Developer Enthusiast", color: "oklch(0.55 0.13 140)" }, // Soft Lime
  ]
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, 2000)
      return () => clearTimeout(pauseTimer)
    }

    if (!isDeleting && displayedText === currentRole.text) {
      setIsPaused(true)
      return
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false)
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      return
    }

    const typingSpeed = isDeleting ? 50 : 100
    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(currentRole.text.substring(0, displayedText.length - 1))
      } else {
        setDisplayedText(currentRole.text.substring(0, displayedText.length + 1))
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, isPaused, currentRoleIndex, roles])

  const currentRole = roles[currentRoleIndex]

  return (
    <div className="h-8 flex items-center justify-center lg:justify-start">
      <motion.span
        className="text-xl md:text-2xl font-medium transition-colors duration-500"
        style={{ color: currentRole.color }}
        key={currentRoleIndex}
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayedText}
        <motion.span
          className="inline-block w-0.5 h-6 ml-1 align-middle"
          style={{ backgroundColor: currentRole.color }}
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            times: [0, 0.5, 0.5, 1],
          }}
        />
      </motion.span>
    </div>
  )
}

export function HeroSection() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1])
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownloadCV = async () => {
    setIsDownloading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsDownloading(false)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"
        style={{ opacity, scale }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            <motion.div
              className="flex-1 text-center lg:text-left space-y-6 order-2 lg:order-1"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              <div className="space-y-3">
                <motion.p
                  className="text-sm text-primary uppercase tracking-wider font-medium"
                  variants={fadeInUpVariants}
                >
                  Welcome to my portfolio
                </motion.p>
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight"
                  variants={fadeInUpVariants}
                >
                  Hi, I'm <span className="text-primary">Your Name</span>
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: [0.6, 0.01, 0.05, 0.95] }}
                >
                  <TypingRoles />
                </motion.div>
              </div>

              <motion.p
                className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-pretty leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65, ease: [0.6, 0.01, 0.05, 0.95] }}
              >
                Aspiring Software Engineer passionate about building user-focused solutions with modern web
                technologies. Currently seeking internship opportunities to apply my full-stack development and machine
                learning skills in real-world projects.
              </motion.p>

              <motion.div
                className="flex items-center justify-center lg:justify-start gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.6, 0.01, 0.05, 0.95] }}
              >
                <motion.div variants={buttonHoverVariants} initial="initial" whileHover="hover" whileTap="tap">
                  <Button
                    size="lg"
                    onClick={handleDownloadCV}
                    disabled={isDownloading}
                    className="relative overflow-hidden group shadow-lg"
                  >
                    <motion.span
                      className="absolute inset-0 bg-primary/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                    <span className="relative flex items-center gap-2">
                      {isDownloading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          >
                            <Download className="h-4 w-4" />
                          </motion.div>
                          Downloading...
                        </>
                      ) : (
                        <>
                          <Download className="h-4 w-4" />
                          Download CV
                        </>
                      )}
                    </span>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex items-center justify-center lg:justify-start gap-4 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.95, ease: [0.6, 0.01, 0.05, 0.95] }}
              >
                {[
                  { icon: Linkedin, href: "https://linkedin.com/in/yourprofile", color: "#0A66C2", label: "LinkedIn" },
                  { icon: Github, href: "https://github.com/yourusername", color: "#181717", label: "GitHub" },
                  {
                    icon: Instagram,
                    href: "https://instagram.com/yourusername",
                    color: "#E4405F",
                    label: "Instagram",
                  },
                  { icon: Mail, href: "mailto:your.email@example.com", color: "#EA4335", label: "Email" },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative p-3 rounded-full bg-accent/50 backdrop-blur-sm transition-all duration-300 group"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.95 + index * 0.1, ease: [0.43, 0.13, 0.23, 0.96] }}
                    whileHover={{
                      scale: 1.15,
                      y: -4,
                      transition: { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] },
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        boxShadow: "0 0 20px rgba(52, 211, 153, 0.4), 0 0 40px rgba(52, 211, 153, 0.2)",
                      }}
                    />
                    {React.createElement(social.icon, {
                      className: "h-5 w-5 relative z-10",
                      style: { color: social.color },
                    })}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right side: Profile photo with floating icons */}
            <motion.div
              className="relative flex-shrink-0 order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.6, 0.01, 0.05, 0.95] }}
            >
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary blur-3xl opacity-40"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.4, 0.6, 0.4],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="relative w-full h-full rounded-full overflow-hidden backdrop-blur-2xl bg-gradient-to-br from-primary/25 via-accent/15 to-primary/25 p-2 shadow-2xl"
                  style={{
                    boxShadow:
                      "0 0 60px rgba(52, 211, 153, 0.4), 0 0 100px rgba(52, 211, 153, 0.25), inset 0 3px 6px rgba(255, 255, 255, 0.15)",
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 60px rgba(52, 211, 153, 0.4), 0 0 100px rgba(52, 211, 153, 0.25), inset 0 3px 6px rgba(255, 255, 255, 0.15)",
                      "0 0 80px rgba(52, 211, 153, 0.6), 0 0 120px rgba(52, 211, 153, 0.35), inset 0 3px 6px rgba(255, 255, 255, 0.2)",
                      "0 0 60px rgba(52, 211, 153, 0.4), 0 0 100px rgba(52, 211, 153, 0.25), inset 0 3px 6px rgba(255, 255, 255, 0.15)",
                    ],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden">
                    <img
                      src="/professional-developer-portrait-photo.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <div className="md:hidden">
                  <FloatingIcon icon={ReactIcon} delay={0} radius={110} duration={30} />
                  <FloatingIcon icon={JavaScriptIcon} delay={(2 * Math.PI) / 3} radius={110} duration={30} />
                  <FloatingIcon icon={NodeJSIcon} delay={(4 * Math.PI) / 3} radius={110} duration={30} />
                </div>
                <div className="hidden md:block">
                  <FloatingIcon icon={ReactIcon} delay={0} radius={180} duration={25} />
                  <FloatingIcon icon={NextJSIcon} delay={Math.PI / 3} radius={180} duration={25} />
                  <FloatingIcon icon={JavaScriptIcon} delay={(2 * Math.PI) / 3} radius={180} duration={25} />
                  <FloatingIcon icon={JavaIcon} delay={Math.PI} radius={180} duration={25} />
                  <FloatingIcon icon={NodeJSIcon} delay={(4 * Math.PI) / 3} radius={180} duration={25} />
                  <FloatingIcon icon={GitIcon} delay={(5 * Math.PI) / 3} radius={180} duration={25} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
