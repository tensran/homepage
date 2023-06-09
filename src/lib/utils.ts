import { ReactNode } from 'react'

export interface MainProps {
  children: ReactNode
  router: {
    asPath: string
  }
}

export interface GridItem {
  children: ReactNode
  title?: string
  thumbnail?: string
  id?: string
}
