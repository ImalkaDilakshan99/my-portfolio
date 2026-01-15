"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  useEffect(() => {
    const root = document.documentElement
    const initialTheme = root.classList.contains("dark") ? "dark" : "light"
    setTheme(initialTheme)
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    const newTheme = theme === "dark" ? "light" : "dark"

    root.classList.remove(theme)
    root.classList.add(newTheme)
    setTheme(newTheme)
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-accent hover:bg-accent/80 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === "dark" ? 1 : 0,
          opacity: theme === "dark" ? 1 : 0,
          rotate: theme === "dark" ? 0 : 180,
        }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon className="h-5 w-5" />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          scale: theme === "light" ? 1 : 0,
          opacity: theme === "light" ? 1 : 0,
          rotate: theme === "light" ? 0 : -180,
        }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="flex items-center justify-center"
      >
        <Sun className="h-5 w-5" />
      </motion.div>
    </motion.button>
  )
}
