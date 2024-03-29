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
  useMediaQuery,
  LinkProps,
  Link as ChakraLink
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import ThemeToggleButton from '@/components/ThemeToggleButton'
import { LinkItemProps, HeaderProps } from '@/lib/utils'

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

const Header: React.FC<HeaderProps> = props => {
  const { path } = props
  const [isDesktop] = useMediaQuery('(min-width: 768px)', {})

  return (
    <Box
      as="nav"
      w="100%"
      alignItems="center"
      position="fixed"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ background: 'transparent' }}
      zIndex={2}
    >
      <Container display="flex" p={2} maxW="container.md">
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
                <MenuItem as={MenuLink} href="/vstack">
                  Vstack
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Header
