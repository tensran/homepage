import { MenuItem } from '@chakra-ui/react'
import NextLink from 'next/link'

type MenuItemProps = {
  href?: string
}

export const MenuItems = ({ href, ...props }: MenuItemProps) => (
  <MenuItem as={NextLink} href={href} {...props} />
)
