"use client"

import type { Variant } from "framer-motion"

const EASING = {
  smooth: [0.6, 0.01, 0.05, 0.95],
  elegant: [0.43, 0.13, 0.23, 0.96],
  snappy: [0.4, 0, 0.2, 1],
  bouncy: [0.68, -0.55, 0.265, 1.55],
}

const DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.7,
  verySlow: 1.0,
}

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

export const fadeInUpVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
}

export const fadeInScaleVariants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION.normal,
      ease: EASING.elegant,
    },
  },
}

export const slideInLeftVariants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
}

export const slideInRightVariants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
}

export const cardHoverVariants = {
  initial: {
    y: 0,
    transition: { duration: DURATION.fast, ease: EASING.snappy },
  },
  hover: {
    y: -6,
    transition: {
      duration: DURATION.normal,
      ease: EASING.elegant,
    },
  },
}

export const iconHoverVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: {
      duration: DURATION.fast,
      ease: EASING.snappy,
    },
  },
}

export const buttonHoverVariants = {
  initial: {
    scale: 1,
    transition: { duration: DURATION.fast, ease: EASING.snappy },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: DURATION.fast,
      ease: EASING.elegant,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
      ease: EASING.snappy,
    },
  },
}

export const scrollRevealVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
}

export const viewportOptions = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -100px 0px",
}

export const viewportOptionsAggressive = {
  once: true,
  amount: 0.1,
  margin: "0px 0px -50px 0px",
}

export const linkHoverVariants = {
  initial: { scale: 1, opacity: 0.7 },
  hover: {
    scale: 1.05,
    opacity: 1,
    transition: {
      duration: DURATION.fast,
      ease: EASING.snappy,
    },
  },
}

// Reduced motion check
export const getReducedMotion = () => {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

// Get variants based on reduced motion preference
export const getAnimationVariants = (variants: Record<string, Variant>) => {
  if (getReducedMotion()) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.2 } },
    }
  }
  return variants
}
