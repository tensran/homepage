import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react'

export const BarBox = (props: BoxProps) => (
  <Box
    as="nav"
    w="100%"
    alignItems="center"
    position="fixed"
    bg={useColorModeValue('#ffffff40', '#20202380')}
    css={{ backdropFilter: 'blur(10px)' }}
    zIndex={2}
    {...props}
  />
)

export const PhoneBox = (props: BoxProps) => (
  <Box ml={2} display={{ base: 'inline-block', md: 'none' }} {...props} />
)
