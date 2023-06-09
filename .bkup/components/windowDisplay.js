'use strict'

import Image from 'next/image'
import { NextLink } from 'next/link'
import {
  Box,
  LinkBox,
  LinkOverlay,
  Text,
  Heading,
  Link
} from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const WorksItem = ({ id, title, children, imgUrl }) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      as={NextLink}
      href={`/works/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <Image src={imgUrl} alt={title} className="win-display-imgUrl" />
      <LinkOverlay as="div" href={`/works/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const TipsItem = ({ id, title, children }) => (
  <Box w="100%" textAlign="justify">
    <Link as={NextLink} href={`/tips/${id}`} scroll={false} cursor="pointer">
      <Heading>{title}</Heading>
    </Link>
    <Text fontSize={14}>{children}</Text>
  </Box>
)

export const winDisplayStyle = () => (
  <Global
    styles={`
    .win-display-imgUrl {
    border-radius: 12px;
    }`}
  />
)
