'use client'

import type { NextPage } from 'next'
import { Box, Heading, Container, useColorModeValue } from '@chakra-ui/react'
import { ProfileImage } from '../components/Profile-Image'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout title="cic">
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m an indie app developer based in zh!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              C.I.C
            </Heading>
            <p>Digital Craftsman ( Artist / Developer / Designer )</p>
          </Box>
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
                src="/public/box.png"
                alt="Profile image"
                borderRadius="full"
                width="100"
                height="100"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default Home

export { getServerSideProps } from '../components/Chakra'
