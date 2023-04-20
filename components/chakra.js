import {
  cookieStorageManagerSSR,
  cookieStorageManager,
  ChakraProvider
} from '@chakra-ui/react'
import theme from '../lib/theme'

function Chakra({ cookies, children }) {
  const colorModeManager =
    typeof cookies == 'string'
      ? cookieStorageManagerSSR(cookies)
      : cookieStorageManager
  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

export async function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}

export async function getStaticProps() {
  const worksList = getSortedFilesData('works').slice(0, 5)
  const tipsList = getSortedFilesData('tips').slice(0, 5)

  return {
    props: {
      worksList,
      tipsList
    }
  }
}

export default Chakra
