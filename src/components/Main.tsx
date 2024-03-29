import Head from 'next/head'
import { Box, Container, useMediaQuery } from '@chakra-ui/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { MainProps } from '@/lib/utils'

const Main = ({ children, router }: MainProps) => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)', {})
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
      <Container maxW={isDesktop ? 'max-content' : 'lg'} pt={14}>
        <Header path={router.asPath} />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
