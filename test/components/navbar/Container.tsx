import { Container, ContainerProps } from '@chakra-ui/react'

export const BarContainer = (props: ContainerProps) => (
  <Container
    display="flex"
    p={2}
    maxW="container.md"
    wrap="wrap"
    align="center"
    justify="space-between"
    {...props}
  />
)
