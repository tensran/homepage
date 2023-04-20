import { Box, Heading } from '@chakra-ui/react'

const Title = ({ text, children }) => {
  return (
    <Box position="relative" display="inline-block">
      <Heading as="h1" fontSize={['4xl', '5xl']} zIndex={2} position="relative">
        {text}
      </Heading>
      {children}
    </Box>
  )
}

export default Title
