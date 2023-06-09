import {
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
import Logo from './logo'
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
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
      >
        <Flex align="center" mr={5} flex="1 1 0%">
          <Heading as="h1" size="lg">
            <Logo />
          </Heading>
        </Flex>
        <Stack
          display={{ base: 'none', md: 'flex' }}
          direction={{ base: 'column', md: 'row' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          lineHeight={1.5}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" post={path}>
            Works
          </LinkItem>
          <LinkItem href="/tips" post={path}>
            Tips
          </LinkItem>
          <LinkItem href="http://localhost:3010/">Posts</LinkItem>
        </Stack>
        <Box align="right" display={{ base: 'inline-block', md: 'flex' }}>
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                aria-label="Options"
                variant="outline"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  About
                </MenuItem>
                <MenuItem as={NextLink} href="/works">
                  Works
                </MenuItem>
                <MenuItem as={MenuLink} href="/tips">
                  Tips
                </MenuItem>
                <MenuItem as={MenuLink} href="http://localhost:3010/">
                  Tips
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
