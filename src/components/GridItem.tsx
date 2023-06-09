import { GridItem } from '../lib/utils'
import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { Global } from '@emotion/react'

export const WorkGridItem = ({ children, title, thumbnail, id }: GridItem) => (
  <Box w="100%" textAlign="center">
    <LinkBox as={NextLink} href={`/works/${id}`}>
      <Image src={thumbnail} alt={title} className="grid-item-thumbnail" />
      <LinkOverlay as="div" href={`/works/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;

    }
  `}
  />
)
