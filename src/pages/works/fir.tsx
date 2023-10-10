import Layout from '../../components/Layout'
import P from '../../components/Paragraph'
import {
  Container,
  Badge,
  List,
  ListItem,
  Link,
  Heading,
  UnorderedList,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/works'
import type { NextPage } from 'next'

const Work: NextPage = () => (
  <Layout title="First Page">
    <Container>
      <Title>
        First Page <Badge>2016-2023</Badge>
      </Title>
      <P>
        A Markdown note-taking app with 100+ plugins, cross-platform and
        encrypted data sync support. The life-time revenue is more than $300k.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>DeepLearning, neural-style, Caffe, NodeJS</span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>{' '}
          <Link href="localhost:3010">
            The fun Deep Learning <ExternalLinkIcon mx="2px" />{' '}
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="localhost:3010">
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="localhost:3010">
            Deep Learning
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="localhost:3010">
            <Badge mr={2}>Hacker News</Badge>
            The Four Painters: A Video Work Created with Deep Learning
          </Link>
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work

export { getServerSideProps } from '../../components/Chakra'
