import NextLink from 'next/link'
import { Stack, Container, Heading, SimpleGrid, Link } from '@chakra-ui/react'
import Layout from '../components/layout'
import Section from '../components/section'
import P from '../components/paragraph'

const worksList = [
  {
    title: 'Todo List',
    content: 'test message',
    slug: 'blog',
    updatedAt: '2023-04-10T10:00:00.000Z'
  },
  {
    title: 'Error List',
    content: 'test message',
    slug: 'test',
    updatedAt: '2023-04-10T10:00:00.000Z'
  }
]

const WorksList = () => {
  return (
    <Layout title="WorksList">
      <Container>
        <Heading as="h3" mb={4}>
          WorksList
        </Heading>

        <SimpleGrid fontSize={20} gap={6}>
          <Section delay={0.2}>
            {worksList.map(work => (
              <Stack key={work.slug} m="50px">
                <Link as={NextLink} href={`/works/${work.slug}`}>
                  <Heading>{work.title}</Heading>
                </Link>
                <P>{work.content}</P>
              </Stack>
            ))}
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default WorksList

export { getServerSideProps } from '../components/chakra'
