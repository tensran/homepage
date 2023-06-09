'use client'

import {
  Box,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton
} from '@chakra-ui/react'
import { HamburgerIcon, ViewIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './ThemeToggleButton'
import { IoLogoGithub } from 'react-icons/io5'
import { BarContainer } from './Container'
import { BarBox } from './Box'
import { LinkItem } from './LinkItem'
import { MenuLink } from './MenuLink'

const Navbar = (props: any) => {
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

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
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
      </BarContainer>
    </BarBox>
  )
}

export default Navbar
