import NextLink from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'
import React, { forwardRef } from 'react'

export const MenuLink = forwardRef<HTMLAnchorElement>((props, ref) => (
  <ChakraLink ref={ref} target="_self" as={NextLink} {...props} />
))
