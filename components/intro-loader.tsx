"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function IntroLoader({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0)
  const [typedText, setTypedText] = useState("")
  const name = "Your Name" // Replace with actual name
  const shouldReduceMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  useEffect(() => {
    // Check if intro has been shown in this session
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro")

    if (hasSeenIntro || shouldReduceMotion) {
      onComplete()
      return
    }

    // Step 1: Hello with wave (1.5s display)
    const timer1 = setTimeout(() => setStep(1), 300)
    const timer2 = setTimeout(() => setStep(2), 2000)

    // Step 2: Welcome (1.5s display)
    const timer3 = setTimeout(() => setStep(3), 3700)

    // Step 3: Start typing name with realistic delays
    let charIndex = 0
    const timer4 = setTimeout(() => {
      const typeNextChar = () => {
        if (charIndex < name.length) {
          setTypedText(name.slice(0, charIndex + 1))
          charIndex++
          const nextDelay = 80 + Math.random() * 40
          setTimeout(typeNextChar, nextDelay)
        } else {
          // Show complete for 1s then fade out
          setTimeout(() => {
            sessionStorage.setItem("hasSeenIntro", "true")
            onComplete()
          }, 1000)
        }
      }
      typeNextChar()
    }, 3900)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [onComplete, shouldReduceMotion, name])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        <div className="relative">
          {/* Step 1: Hello with wave */}
          {step === 1 && (
            <motion.div
              className="text-5xl md:text-7xl font-bold text-center"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <span>Hello </span>
              <motion.span
                className="inline-block origin-[70%_70%]"
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                  times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1],
                }}
              >
                👋
              </motion.span>
            </motion.div>
          )}

          {/* Step 2: Welcome */}
          {step === 2 && (
            <motion.div
              className="text-5xl md:text-7xl font-bold text-primary text-center"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              Welcome
            </motion.div>
          )}

          {/* Step 3: Typing name */}
          {step === 3 && (
            <motion.div
              className="text-5xl md:text-7xl font-bold text-center font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <span className="text-primary">{typedText}</span>
              <motion.span
                className="inline-block w-1 h-[0.9em] bg-primary ml-1 align-middle"
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  times: [0, 0.5, 0.5, 1],
                }}
              />
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
