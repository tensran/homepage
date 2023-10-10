import { ReactNode } from 'react'

export interface MainProps {
  children: ReactNode
  router: {
    asPath: string
  }
}

export interface GridItemProps {
  children: ReactNode
  title?: string
  thumbnail?: string
  id?: string
}

export interface LinkItemProps {
  href?: string
  path: string
  target?: string
  children?: ReactNode
  display?: string
  alignItems?: string
  style?: any
  pl?: number
}

export interface MenuItemsProps {
  href?: string
}
