import { motion } from 'framer-motion'
import { chakra, shouldForwardProp, Box } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

// import dynamic from 'next/dynamic' // how 2 use this fast with useState & useEffect

const StyleDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Section = ({ children, delay = 0 }) => {
  // by not javascript server
  const [client, setClient] = useState(false)

  useEffect(() => setClient(typeof window !== 'undefined'), [])

  if (!client) {
    return <Box display={{ md: 'flex' }}>{children}</Box>
  }

  return (
    <StyleDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      mb={6}
    >
      {children}
    </StyleDiv>
  )
}

export default Section
