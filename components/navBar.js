import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Flex,
  Box,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
import { HiMenu } from '@react-icons/all-files/hi/HiMenu'
import { MdClose } from '@react-icons/all-files/md/MdClose'
import styled from '@emotion/styled'

// Styled component to display link text
const LinkText = styled.span`
  margin-left: 5px;
`

const variants = {
  open: {
    width: '200px',
    transition: {
      duration: 0.3
    }
  },
  closed: {
    width: '50px',
    transition: {
      duration: 0.3
    }
  }
}

const MenuButtonLink = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <Menu>
      <MenuButton
        as={motion.div}
        whileHover={{ width: '200px' }}
        whileTap={{ width: '200px' }}
        variants={variants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        onClick={toggleMenu}
      >
        <IconButton
          aria-label="Open menu"
          icon={<HiMenu />}
          fontSize="20px"
          variant="ghost"
          colorScheme="blue"
        />
      </MenuButton>

      <MenuList
        p={0}
        m={0}
        bg="blue.500"
        borderColor="blue.500"
        borderWidth="2px"
        w="200px"
      >
        <MenuItem onClick={toggleMenu}>
          <Link href="/about" passHref>
            <Button
              as="a"
              w="100%"
              justifyContent="left"
              leftIcon={<Box as={MdClose} />}
              color="white"
            >
              <LinkText>About</LinkText>
            </Button>
          </Link>
        </MenuItem>
        <MenuItem onClick={toggleMenu}>
          <Link href="/tips" passHref>
            <Button
              as="a"
              w="100%"
              justifyContent="left"
              leftIcon={<Box as={MdClose} />}
              color="white"
            >
              <LinkText>Tips</LinkText>
            </Button>
          </Link>
        </MenuItem>
        <MenuItem onClick={toggleMenu}>
          <Link href="/works" passHref>
            <Button
              as="a"
              w="100%"
              justifyContent="left"
              leftIcon={<Box as={MdClose} />}
              color="white"
            >
              <LinkText>Works</LinkText>
            </Button>
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default MenuButtonLink
