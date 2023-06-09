import { Box, Container, Heading, List, ListItem } from '@chakra-ui/react'
import Title from '../../components/title'
import P from '../../components/paragraph'

const TodoList = () => {
  return (
    <Container>
      <Box>
        <Title title="Todo List" />
      </Box>
      <Box>
        <Heading>Todo</Heading>
        <List>
          <ListItem>
            <P>get wechat xiao chengxu 1000~1500 simple</P>
          </ListItem>
        </List>
      </Box>
    </Container>
  )
}
export default TodoList
