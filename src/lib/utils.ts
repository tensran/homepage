import type { LinkProps, ChakraProps } from '@chakra-ui/react'
import type { ImageProps, StaticImageData } from 'next/image'

export type ProfileImageProps = ChakraProps & ImageProps

export interface MainProps {
  children: React.ReactNode
  router: {
    asPath: string
  }
}

export interface GridItemProps {
  children: React.ReactNode
  title: string
  thumbnail: StaticImageData
  href: string
}

export interface WorkGridItemProps {
  children: React.ReactNode
  title: string
  thumbnail: StaticImageData
  id: string
}

export interface LinkItemProps extends LinkProps {
  href: string
  path: string
  target?: string
  children: React.ReactNode
}

export interface MenuItemsProps {
  href?: string
}

export interface HeaderProps {
  path: string
}

export interface StyleDivProps {
  children: React.ReactNode
  delay: number
}

export interface LazyProps {
  children: React.ReactNode
  // delay: number
}
