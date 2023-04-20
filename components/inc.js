import { Flex, Heading } from '@chakra-ui/react'

export const Inc = ({ title }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(to-l, #3e3e75, #FF0080)"
      bgClip="text"
    >
      <Heading fontSize="6vw">{title}</Heading>
    </Flex>
  )
}
Inc.defaultProps = {
  title: 'something cmd'
}
