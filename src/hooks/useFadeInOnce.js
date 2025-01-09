import { useInView } from "motion/react"
import { useRef } from "react"

export function useFadeInOnce(threshold = 0.1) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold })

  const animationStyles = {
    transform: isInView ? "none" : "translateY(50px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  }

  return { ref, animationStyles }
}
