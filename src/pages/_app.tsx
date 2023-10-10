import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'
import Chakra from '../components/Chakra'
import Main from '../components/Main'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

function WebApp({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <AnimatePresence
        mode="wait"
        onExitComplete={handleExitComplete}
        initial={true}
      >
        <Main router={router}>
          <Component {...pageProps} key={router.route} />
        </Main>
      </AnimatePresence>
    </Chakra>
  )
}

export default WebApp
