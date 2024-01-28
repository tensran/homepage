import type { NextPage } from 'next'
import { Container, Badge } from '@chakra-ui/react'
import P from '@/components/Paragraph'
import Layout from '@/components/Layout'
import { Title } from '@/components/work'

const Work: NextPage = () => (
  <Layout title="Cat Page">
    <Container>
      <Title>
        Sec Page <Badge>2016-2023</Badge>
      </Title>
      <P>
        A Markdown note-taking app with 100+ plugins, cross-platform and
        encrypted data sync support. The life-time revenue is more than $300k.
      </P>
    </Container>
  </Layout>
)

export default Work

export { getServerSideProps } from '../../components/Chakra'
