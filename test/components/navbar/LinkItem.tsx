import NextLink from 'next/link'
import React from 'react'
import { Link as ChakraLink, useColorModeValue } from '@chakra-ui/react'
import { LinkItemProps } from '@/lib/utils'

export const LinkItem = ({
  href,
  path,
  target,
  children,
  ...props
}: LinkItemProps) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const activeColor = useColorModeValue('gray.900', 'whiteAlpha.800')
  return (
    <ChakraLink
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? inactiveColor : activeColor}
      target={target}
      {...props}
    >
      {children}
    </ChakraLink>
  )
}
