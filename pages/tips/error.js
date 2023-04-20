import { Box, Container, Heading, List, ListItem, Text } from '@chakra-ui/react'
import Title from '../../components/title'

const ErrorList = () => {
  return (
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
  )
}
export default ErrorList
