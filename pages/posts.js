import { Box, Heading, Link, Stack, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

const PostList = ({ posts }) => {
  return (
    <Box>
      {posts.map(post => (
        <Stack key={post.slug} m="50px">
          <Link as={NextLink} href={`/posts/${post.slug}`}>
            <Heading>{post.title}</Heading>
          </Link>
          <Text>{post.content}</Text>
        </Stack>
      ))}
    </Box>
  )
}

export async function getStaticProps() {
  const posts = getPosts()
  return { props: { posts } }
}

export default PostList
