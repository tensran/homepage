import { MenuItem } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ReactNode, ForwardRefRenderFunction, RefAttributes } from 'react'

type MenuItemProps = {
  href?: string
  children: ReactNode
}

export const MenuItems = ({ href, children, ...props }: MenuItemProps) => (
  <MenuItem as={NextLink} href={href} {...props}>
    {children}
  </MenuItem>
)
