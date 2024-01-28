import { Box, LinkBox, LinkOverlay, Text, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { Global } from '@emotion/react'

import type { GridItemProps, WorkGridItemProps } from '@/lib/utils'

export const GridItem = ({
  children,
  title,
  thumbnail,
  href
}: GridItemProps) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </Flex>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({
  children,
  title,
  thumbnail,
  id
}: WorkGridItemProps) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      as={NextLink}
      href={`/works/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay as="div" href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </Flex>
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
