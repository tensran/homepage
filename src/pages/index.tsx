'use strict'

import {
  Box,
  Flex,
  Heading,
  Container,
  useColorModeValue
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { css } from '@emotion/react'

import Layout from '@/components/Layout'
import Lazy from '@/components/Lazy'
import { ProfileImage } from '@/components/Profile-Image'
import ProfileImageAlex from '/public/product-alex.jpg'

const HomePage = () => {
  const router = useRouter()
  const [isDesktop] = useMediaQuery('(min-width: 768px)', {})

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollPos = scrollContainerRef.current.scrollLeft
        setScrollPosition(scrollPos)
      }
    }

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  useEffect(() => {
    router.prefetch('/wokrs')
  }, [])

  return (
    <Layout title="cic">
      <Flex
        overflowX="scroll"
        flexDirection="row"
        alignItems="center"
        py={3}
        bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
        ref={scrollContainerRef}
      >
        <Box
          flexShrink={0}
          bg="red"
          minWidth="100vw"
          minHeight="100vh"
          opacity={
            typeof window !== 'undefined'
              ? 1 - scrollPosition / window.innerWidth
              : 1
          }
        >
          <Box display={{ md: 'flex' }}>
            <Box flexGrow={1}>
              <Heading as="h2" variant="page-title">
                C.I.C
              </Heading>
              <p>Digital Craftsman ( Artist / Developer / Designer )</p>
            </Box>
            Hello, I&apos;m an indie app developer based in cn!
          </Box>
          <Lazy>
            <Box
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
              textAlign="center"
            >
              <Box
                borderColor={useColorModeValue('gray.900', 'whiteAlpha.800')}
                borderWidth={2}
                borderStyle="solid"
                w="100px"
                h="100px"
                display="inline-block"
                borderRadius="full"
                overflow="hidden"
              >
                <ProfileImage
                  src={ProfileImageAlex}
                  alt="Profile image"
                  borderRadius="full"
                  width="100"
                  height="100"
                />
              </Box>
            </Box>
          </Lazy>
        </Box>
        <Box
          flexShrink={0}
          bg="blue"
          minWidth="100vw"
          minHeight="100vh"
          opacity={
            typeof window !== 'undefined'
              ? 1 -
                Math.abs(scrollPosition - window.innerWidth) / window.innerWidth
              : 1
          }
        >
          {/* B页面的内容 */}
        </Box>
        <Box
          flexShrink={0}
          bg="green"
          minWidth="100vw"
          minHeight="100vh"
          opacity={
            typeof window !== 'undefined'
              ? (scrollPosition - 2 * window.innerWidth) / window.innerWidth
              : 1
          }
        >
          {/* C页面的内容 */}
        </Box>
      </Flex>
    </Layout>
  )
}

export default HomePage

export { getServerSideProps } from '@/components/Chakra'
