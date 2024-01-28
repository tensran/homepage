import {
  cookieStorageManagerSSR,
  localStorageManager,
  ChakraProvider
} from '@chakra-ui/react'
import { GetServerSidePropsContext } from 'next'
import theme from '@/lib/theme'

type ChakraCookiesProps = {
  cookies?: string
  children: React.ReactNode
}

function Chakra({ cookies, children }: ChakraCookiesProps) {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager
  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}

export default Chakra
