import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import Chakra from '@/components/Chakra'
import Main from '@/components/Main'
import SmoothScrolling from '@/components/SmoothScrolling'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

function WebApp({ Component, pageProps, router }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <AnimatePresence
        mode="wait"
        onExitComplete={handleExitComplete}
        initial={true}
      >
        <Main router={router}>
          <SmoothScrolling>
            <Component {...pageProps} key={router.route} />
          </SmoothScrolling>
        </Main>
      </AnimatePresence>
    </Chakra>
  )
}

export default WebApp
