import { Container, Heading, SimpleGrid, GridItem } from '@chakra-ui/react'
import Layout from '../components/layout'
import Section from '../components/section'
import TipsItem from '../components/windowDisplay'

const TipsList = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Tips
        </Heading>
        <SimpleGrid gap={6}>
          <Section delay={0.1}>
            <TipsItem title="error" href={'/tips/error'} />
          </Section>
          <Section delay={0.1}>
            <TipsItem title="todo" href={'/tips/todo'} />
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default TipsList

export { getServerSideProps } from '../components/chakra'
