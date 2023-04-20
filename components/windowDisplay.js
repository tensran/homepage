import { NextLink } from 'next/link'
import { Text, Box, LinkBox, LinkOverlay } from '@chakra-ui/react'
import P from '../components/paragraph'

export const TipsItem = ({ title, children, href }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="zoom-in" scroll={false}>
      <LinkOverlay as={NextLink} href={href} target="_blank">
        <P mt={2}>{title}</P>
      </LinkOverlay>
      <P fontSize={14}>{children}</P>
      <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC" align="right">
        __ days ago
      </Box>
    </LinkBox>
  </Box>
)

export const WorksItem = ({ id }) => (
  <Box w="100%" textAlign="center">
    <LinkBox as={NextLink} href={`/works/${id}`}></LinkBox>
  </Box>
)
