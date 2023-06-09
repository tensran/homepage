import { Divider, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layout'
import Section from '../components/section'
import { WorksItem } from '../components/windowDisplay'

const WorksList = () => {
  return (
    <Layout title="WorksList">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
      </Container>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <WorksItem title="error" id="error">
              check error
            </WorksItem>
          </Section>
          <Section delay={0.2}>
            <WorksItem title="todo" id="todo">
              check todo
            </WorksItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Old hard
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorksItem title="todo" id="todo">
              double check test
            </WorksItem>
          </Section>
          <Section delay={0.3}>
            <WorksItem title="todo" id="todo">
              double check test
            </WorksItem>
          </Section>
        </SimpleGrid>
      </Section>
    </Layout>
  )
}

export default WorksList

export { getServerSideProps } from '../components/chakra'
