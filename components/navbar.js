import {
  MenuGroup,
  MenuItem,
  MenuList,
  IconButton,
  MenuButton,
  Menu,
  Stack,
  Link,
  Flex,
  Box,
  Container,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { forwardRef } from 'react'
import Icon from './icon'
import ThemeToggleButton from './themeToggleButton'

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const LinkItem = ({ path, href, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      {...props}
    >
      {children}
    </Link>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box position="fixed" as="nav" w="100%" {...props}>
      <Container
        display="fixed"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg">
            <Icon />
          </Heading>
        </Flex>
        <Stack
          display={{ base: 'none', md: 'flex' }}
          direction={{ base: 'column', md: 'row' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" post={path}>
            Works
          </LinkItem>
          <LinkItem href="/tips" post={path}>
            Tips
          </LinkItem>
        </Stack>
        <Box align="right" display={{ base: 'run-in', md: 'flex' }}>
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton as={IconButton} aria-label="Open navigation" />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  About
                </MenuItem>
                <MenuItem as={MenuLink} href="works">
                  Works
                </MenuItem>
                <MenuGroup
                  align="left"
                  fontSize={20}
                  title="Tips barabarabara"
                  as={MenuLink}
                  href="tips"
                >
                  <MenuItem as={MenuLink} href="/tips/error">
                    Error
                  </MenuItem>
                  <MenuItem as={MenuLink} href="/tips/todo">
                    Todo
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
