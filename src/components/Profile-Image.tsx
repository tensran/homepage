import { chakra } from '@chakra-ui/react'
import Image from 'next/image'

import { ProfileImageProps } from '@/lib/utils'

export const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
}) as React.FC<ProfileImageProps>
