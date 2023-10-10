'use client'

import {
  Box,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuList,
  MenuButton,
  IconButton
} from '@chakra-ui/react'
import { HamburgerIcon, ViewIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './ThemeToggleButton'
import { IoLogoGithub } from 'react-icons/io5'
import { BarContainer } from './Container'
import { BarBox, PhoneBox } from './Box'
import { LinkItem } from './LinkItem'
import { MenuLink } from './MenuLink'
import { MenuItems } from './MenuItem'

type NavbarProps = {
  path: string
}

const Navbar = (props: NavbarProps) => {
  const { path } = props

  return (
    <BarBox>
      <BarContainer>
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
          <LinkItem href="/works" target="_self" path={path}>
            Works
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://cdaybidayc.netlify.app"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <ViewIcon />
            day post
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>

        <Box flex={1} textAlign="right">
          <ThemeToggleButton />
          <PhoneBox>
            <Menu id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItems as={MenuLink} href="/">
                  About
                </MenuItems>
                <MenuItems as={MenuLink} href="/works">
                  Works
                </MenuItems>
              </MenuList>
            </Menu>
          </PhoneBox>
        </Box>
      </BarContainer>
    </BarBox>
  )
}

export default Navbar
