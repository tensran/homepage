import {
  Box,
  Heading,
  Container,
  List,
  ListItem,
  Flex,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'

import Section from '@/components/Section'
import { ProfileImage } from '@/components/Profile-Image'
import Lazy from '@/components/Lazy'
import P from '@/components/Paragraph'
import ProfileImageAlex from '/public/product-alex.jpg'

const Phone: React.FC = () => (
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
    <Section delay={0.1}>
      <Heading as="h3" variant="section-title">
        Work
      </Heading>
      <P>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.{' '}
      </P>
      <P>
        Just edit the config.json file with details about your company and voila
        your beautiful state of the art landing page is ready to go live!
        Remember to also update your assets, add any images you want to show to
        /assets/images and link them in the config.json
      </P>
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
          <NextLink href="https://github.com/" target="_blank">
            <Button variant="ghost" colorScheme="teal">
              @C.I.C
            </Button>
          </NextLink>
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
)

export default Phone
