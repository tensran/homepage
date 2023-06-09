import NextLink from 'next/link'
import {
  Container,
  Heading,
  Text,
  Divider,
  Button,
  Box
} from '@chakra-ui/react'
import type { NextPage } from 'next'

const SomethingWarn: NextPage = () => {
  return (
    <Container>
      <Heading as="h1" textAlign="center">
        something Warn
      </Heading>
      <Text>dont stay</Text>
      <Divider my={6} />
      <Box my={6} textAlign="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          Return 2 Home
        </Button>
      </Box>
    </Container>
  )
}

export default SomethingWarn
