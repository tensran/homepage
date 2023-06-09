import NextLink from 'next/link'
import { Box, Button, Container, Heading } from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Box
        animation="glitch 1s liner infinite"
        _before={{ content: 'attr(title)', position: 'absolute', left: 0 }}
        _after={{ content: 'attr(title)', position: 'absolute', left: 0 }}
      >
        <Heading h="50px" as="h1" align="center">
          404
        </Heading>
      </Box>
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="blue">
          Return to home
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
