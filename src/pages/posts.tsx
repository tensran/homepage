'use client'

import type { NextPage } from 'next'
import { SimpleGrid, Heading, Divider, Container } from '@chakra-ui/react'
import { GridItem } from '@/components/Grid-Item'
import Section from '@/components/Section'
import Layout from '@/components/Layout'

import catThumbnail from '/public/product-bigcat.jpg'

const PostsPages: NextPage = () => {
  return (
    <Layout title="My Post">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Posts
        </Heading>
      </Container>
      <Section delay={0.1}>
        <SimpleGrid column={[1, 2, 2]} gap={6}>
          <GridItem id="cat" title="Cat Title" thumbnail={catThumbnail}>
            Posts Test
          </GridItem>
        </SimpleGrid>
      </Section>
      <Section delay={0.2}>
        <Divider my={6} />
      </Section>
    </Layout>
  )
}

export default PostsPages

export { getServerSideProps } from '../components/Chakra'
