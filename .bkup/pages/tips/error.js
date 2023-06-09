import { Box, Container, Heading, List, ListItem, Text } from '@chakra-ui/react'
import Layout from '../../components/layout'
import Title from '../../components/title'

const ErrorList = () => {
  return (
    <Layout>
      <Container>
        <Box>
          <Title title="Error List" />
        </Box>
        <Box>
          <Heading>Error</Heading>
          <List>
            <ListItem>
              <Text>Posts.js cant not slug `.map`</Text>
            </ListItem>
          </List>
        </Box>
      </Container>
    </Layout>
  )
}
export default ErrorList

export { getServerSideProps } from '../../components/chakra'
