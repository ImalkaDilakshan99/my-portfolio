"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { linkHoverVariants, buttonHoverVariants } from "@/lib/animations"

const navItems = ["about", "skills", "projects", "experience", "certifications", "contact"]

export function Navigation() {
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -80% 0px",
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const sections = ["home", ...navItems]
    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleNavClick = (item: string) => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 border-b border-border"
        initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        animate={{
          backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0)",
          backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.a
            href="#home"
            className="text-xl font-semibold text-foreground"
            variants={linkHoverVariants}
            initial="initial"
            whileHover="hover"
            onClick={() => setActiveSection("home")}
          >
            Portfolio
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="relative text-sm capitalize py-2"
                variants={linkHoverVariants}
                initial="initial"
                whileHover="hover"
                onClick={() => handleNavClick(item)}
              >
                <span className={activeSection === item ? "text-primary" : "text-muted-foreground"}>{item}</span>
                {activeSection === item && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full shadow-[0_0_8px_rgba(52,211,153,0.5)]"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </motion.a>
            ))}

            <motion.div variants={buttonHoverVariants} initial="initial" whileHover="hover" whileTap="tap">
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="ml-2">
                <motion.div
                  initial={{ rotate: 0, scale: 1 }}
                  animate={{ rotate: theme === "dark" ? 0 : 180, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </motion.div>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <motion.div variants={buttonHoverVariants} initial="initial" whileHover="hover" whileTap="tap">
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                <motion.div
                  initial={{ rotate: 0, scale: 1 }}
                  animate={{ rotate: theme === "dark" ? 0 : 180, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </motion.div>
              </Button>
            </motion.div>
            <motion.div variants={buttonHoverVariants} initial="initial" whileHover="hover" whileTap="tap">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      <motion.div
        className="md:hidden fixed top-[73px] left-0 right-0 z-40 border-b border-border glass-card"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item}`}
              className={`relative text-sm capitalize py-2 px-4 rounded-md transition-colors duration-300 ${
                activeSection === item
                  ? "bg-primary/10 text-primary shadow-[0_0_12px_rgba(52,211,153,0.3)]"
                  : "text-muted-foreground hover:bg-accent"
              }`}
              onClick={() => handleNavClick(item)}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  )
}
