"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Check, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { fadeInUpVariants, viewportOptions, slideInLeftVariants, slideInRightVariants } from "@/lib/animations"
import emailjs from "emailjs-com"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsError(false)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({ name: "", email: "", message: "" })

      setTimeout(() => setIsSuccess(false), 3000)
    } catch (error) {
      console.error("Full error:", error)
      console.error("Stringified:", JSON.stringify(error))
      setIsSubmitting(false)
      setIsError(true) // Set error state to show the user something went wrong

      // Auto-hide error message after 5 seconds
      setTimeout(() => setIsError(false), 5000)
    }
  }
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={fadeInUpVariants}
        >
          {"Let's"} Connect
        </motion.h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOptions} variants={slideInLeftVariants}>
            <Card className="p-8 border-border bg-card">
              <h3 className="text-xl font-semibold mb-6">Send me a message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" className="w-full relative" disabled={isSubmitting}>
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.span
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="inline-block h-4 w-4 border-2 border-background border-t-transparent rounded-full"
                          />
                          Sending...
                        </motion.span>
                      ) : isError ? (
                        <motion.span key="error" className="text-red-400 flex items-center gap-2">
                          <X className="h-4 w-4" /> Try Again
                        </motion.span>
                      ) : isSuccess ? (
                        <motion.span
                          key="success"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          Message Sent!
                        </motion.span>
                      ) : (
                        <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          Send Message
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={slideInRightVariants}
          >
            <Card className="p-6 border-border bg-card hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Connect with me</h3>

              <div className="space-y-3">
                <motion.a
                  href="mailto:imalkadilakshan99@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <span>imalkadilakshan99@gmail.com</span>
                </motion.a>

                <motion.a
                  href="https://github.com/imalkadilakshan99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Github className="h-5 w-5 text-primary" />
                  <span>github.com/imalkadilakshan99</span>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/imalka-dilakshan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                  <span>linkedin.com/in/imalka-dilakshan</span>
                </motion.a>
              </div>
            </Card>

            <Card className="p-6 border-border bg-card">
              <h3 className="text-lg font-semibold mb-2">{"Let's"} build something together</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {"I'm"} always open to discussing new projects, creative ideas, or opportunities to be part of your
                vision. Feel free to reach out!
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Success Modal */}
        <AnimatePresence>
          {isSuccess && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black/50 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />

              {/* Modal */}
              <motion.div
                className="fixed top-1/2 left-1/2 z-50 w-full max-w-sm"
                initial={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
                animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                exit={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Card className="p-8 border-border bg-card shadow-2xl">
                  <div className="flex flex-col items-center text-center">
                    {/* Success Icon */}
                    <motion.div
                      className="mb-4 p-3 bg-green-500/20 rounded-full"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <Check className="h-8 w-8 text-green-500" />
                    </motion.div>

                    {/* Message */}
                    <h3 className="text-2xl font-bold mb-2">Success!</h3>
                    <p className="text-muted-foreground mb-6">
                      Your message has been sent successfully. I'll get back to you soon!
                    </p>

                    {/* Close Button */}
                    <Button
                      onClick={() => setIsSuccess(false)}
                      className="w-full"
                    >
                      Continue
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
