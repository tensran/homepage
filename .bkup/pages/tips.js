import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layout'
import Section from '../components/section'
import { TipsItem } from '../components/windowDisplay'

const TipsList = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Tips
        </Heading>
        <Section delay={0.1}>
          <TipsItem title="error" id="error">
            error msg{' '}
          </TipsItem>
        </Section>
      </Container>
    </Layout>
  )
}

export default TipsList

export { getServerSideProps } from '../components/chakra'
