import { Container, Box } from '@chakra-ui/react'
import Navbar from './navbar'
// import { withRouter } from 'next/router'

const Main = ({ children, router }) => {
  return (
    <Box as="main">
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
// export default withRouter(Main)
