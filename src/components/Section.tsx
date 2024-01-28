import { motion, Transition } from 'framer-motion'
import { chakra, shouldForwardProp, Box } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

import { StyleDivProps } from '@/lib/utils'

// import dynamic from 'next/dynamic' // how 2 use this fast with useState & useEffect

const StyleDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Section = ({ children, delay = 0 }: StyleDivProps) => {
  // check javascript support
  const [client, setClient] = useState(false)

  useEffect(() => setClient(typeof window !== 'undefined'), [])

  if (!client) {
    return <Box display={{ md: 'flex' }}>{children}</Box>
  }

  const transition: Transition = {
    duration: 0.8,
    delay
  }

  return (
    <StyleDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={transition}
      mb={6}
    >
      {children}
    </StyleDiv>
  )
}

export default Section
