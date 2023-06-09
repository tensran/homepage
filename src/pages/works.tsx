'use client'

import type { NextPage } from 'next'
import { SimpleGrid, Heading, Divider, Container } from '@chakra-ui/react'
import { WorkGridItem } from '../components/GridItem'
import Section from '../components/Section'
import Layout from '../components/Layout'
import thumbFish from '/public/fish.png'
import thumbBox from '/public/box.png'

const WorkPages: NextPage = () => {
  return (
    <Layout title="My Work">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
      </Container>
      <SimpleGrid column={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="fir" title="First Page" thumbnail={thumbFish}>
            Twitter client app for iPhone Safari
          </WorkGridItem>
          <WorkGridItem id="sec" title="Sec Page" thumbnail={thumbBox}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Section delay={0.2}>
        <Divider my={6} />
      </Section>
    </Layout>
  )
}

export default WorkPages

export { getServerSideProps } from '../components/Chakra'
