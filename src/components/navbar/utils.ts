import { ReactNode } from 'react'
import { MenuItemProps } from '@chakra-ui/react'

export interface LinkItemProps {
  href?: string
  path: string
  target?: string
  children?: ReactNode
}

export interface MenuItemProps {
  href?: string
  title?: string
  children?: ReactNode
}
