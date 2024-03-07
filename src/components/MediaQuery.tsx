import { useMediaQuery } from '@chakra-ui/react'

export default function MediaQuery() {
  const [isDesktop] = useMediaQuery('(min-width: 768px)', {
    ssr: true,
    fallback: false // return false on the server, and re-evaluate on the client side
  })
  return isDesktop
}
