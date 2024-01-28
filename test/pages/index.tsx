'use client'

import type { NextPage } from 'next'
import NextLink from 'next/link'
import {
  Box,
  Link,
  Heading,
  List,
  ListItem,
  Button,
  Container,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import { ProfileImage } from '@/components/Profile-Image'
import P from '@/components/Paragraph'
import ProfileImageAlex from '/public/product-alex.jpg'

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
          Hello, I&apos;m an indie app developer based in cn!
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
                src={ProfileImageAlex}
                alt="Profile image"
                borderRadius="full"
                width="100"
                height="100"
              />
            </Box>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <P>Test Msg </P>
          <Box textAlign="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              My portfolio
            </Button>
          </Box>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On d web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/" target="_blank">
                <Button variant="ghost" colorScheme="teal">
                  @C.I.C
                </Button>
              </Link>
            </ListItem>
          </List>
          <Heading as="h3" variant="section-title">
            Newsletter
          </Heading>
          <p>connect with me</p>
          <Box textAlign="center" my={4}>
            <Button
              as={NextLink}
              href="https://www.google.com"
              scroll={false}
              leftIcon={<EmailIcon />}
              colorScheme="teal"
            >
              Sign up my newsletter here
            </Button>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home

export { getServerSideProps } from '../components/Chakra'
