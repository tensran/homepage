import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from './navbar/index'
import { MainProps } from '../lib/utils'

const Main = ({ children, router }: MainProps) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="C.I.C homepage" />
        <meta name="author" content="CIC" />
        <meta name="author" content="C" />
        <meta name="og:title" content="CIC" />
        <meta property="og:site_name" content="CIC" />
        <meta property="og:type" content="website" />
        <title>C.I.C - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container>{children}</Container>
    </Box>
  )
}

export default Main
