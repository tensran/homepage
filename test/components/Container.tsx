import {
  Flex,
  FlexProps,
  useColorModeValue,
  useMediaQuery
} from '@chakra-ui/react'

export const Container = (props: FlexProps) => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)', {
    ssr: true,
    fallback: false // return false on the server, and re-evaluate on the client side
  })
  return (
    <Flex
      direction={isDesktop ? 'row' : 'column'}
      alignItems="center"
      justifyContent={isDesktop ? 'center' : 'flex-start'}
      p={3}
      mb={6}
      bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
      color={useColorModeValue('gray.950', 'whitesmoke')}
      // _dark={{
      //   bg: 'gray.900',
      //   color: 'white'
      // }}
      transition="all 0.15s ease-out"
      {...props}
    />
  )
}
