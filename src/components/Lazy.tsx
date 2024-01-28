import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

function useOnScreen(
  ref: MutableRefObject<HTMLDivElement | null>,
  rootMargin = '0px'
): boolean {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    let currentRef: HTMLDivElement | null = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIntersecting(entry?.isIntersecting)
      },
      {
        rootMargin
      }
    )
    if (currentRef) {
      observer.observe(currentRef)
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [ref, rootMargin]) // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting
}

const Lazy = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation()
  const rootRef = useRef<HTMLDivElement>(null)
  const onScreen = useOnScreen(rootRef)
  useEffect(() => {
    if (onScreen) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: 'easeOut'
        }
      })
    }
  }, [onScreen, controls])

  return (
    <motion.div
      className="lazy-div"
      ref={rootRef}
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
    >
      {children}
    </motion.div>
  )
}

export default Lazy
