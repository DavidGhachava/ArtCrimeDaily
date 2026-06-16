export const viewportOnce = { amount: 0.18, once: true }

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
    rotate: -0.4,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.04,
    },
  },
}

export const popCard = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.96,
    rotate: -1,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.48,
      ease: [0.2, 0.9, 0.2, 1],
    },
  },
}

export const hoverLift = {
  y: -5,
  scale: 1.015,
  transition: {
    duration: 0.16,
    ease: 'easeOut',
  },
}

export const tapPress = {
  scale: 0.98,
}
