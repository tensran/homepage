import { chakra } from '@chakra-ui/react'
import Image from 'next/image'

export const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})
