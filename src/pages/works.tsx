'use client'

import type { NextPage } from 'next'
import { SimpleGrid, Heading, Divider, Container } from '@chakra-ui/react'
import { WorkGridItem } from '@/components/Grid-Item'
import Section from '@/components/Section'
import Layout from '@/components/Layout'

import fishThumbnail from '/public/fish.png'
import catThumbnail from '/public/cat02.png'

const WorkPages: NextPage = () => {
  return (
    <Layout title="My Work">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
      </Container>
      <SimpleGrid column={[1, 1, 2]} gap={6}>
        <Section delay={0}>
          <WorkGridItem id="fish" title="Fish Title" thumbnail={fishThumbnail}>
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>
      <SimpleGrid column={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem id="cat" title="Cat Title" thumbnail={catThumbnail}>
            Cat post
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old
        </Heading>
      </Section>
    </Layout>
  )
}

export default WorkPages
export { getServerSideProps } from '../components/Chakra'
