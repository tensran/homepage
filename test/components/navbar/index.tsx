'use client'

import NextLink from 'next/link'
import { forwardRef } from 'react'
import {
  Box,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuList,
  MenuItem,
  Container,
  useColorModeValue,
  MenuButton,
  IconButton,
  LinkProps,
  Link as ChakraLink
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import ThemeToggleButton from './ThemeToggleButton'
import { LinkItemProps, NavbarProps } from '@/lib/utils'
import dataConfig from '@/data/index.json'

const { header } = dataConfig

const LinkItem = ({
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

const MenuLink = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <ChakraLink ref={ref} target="_self" as={NextLink} {...props} />
))

const Navbar: React.FC<NavbarProps> = props => {
  const { path } = props

  return (
    <Box
      as="nav"
      w="100%"
      alignItems="center"
      position="fixed"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
    >
      <Container display="flex" p={2} maxW="container.md">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <LinkItem href="/" target="_self" path={path}>
              C.I.C
            </LinkItem>
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
        </Stack>

        <Box flex={1} textAlign="right">
          <ThemeToggleButton />
          <Box
            // Phone SIze
            ml={2}
            display={{ base: 'inline-block', md: 'none' }}
          >
            <Menu id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  About
                </MenuItem>
                <MenuItem as={MenuLink} href="/works">
                  Works
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
