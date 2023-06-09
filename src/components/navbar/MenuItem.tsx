import { MenuItem } from '@chakra-ui/react'
import { MenuLink } from './MenuLink'
import NextLink from 'next/link'
import { MenuItemProps } from './utils'

export const MenuItems = ({ href, children, ...props }: MenuItemProps) => (
  <MenuItem as={NextLink} href={href} {...props} />
)
