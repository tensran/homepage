import { Flex, FlexProps, useColorModeValue } from '@chakra-ui/react'
export const Container = (props: FlexProps) => (
  <Flex
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
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
