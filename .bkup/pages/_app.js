import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import Layout from '../components/main'
import Footer from '../components/footer'

// unknow meaning
if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

const Website = ({ Component, pageProps, router }) => {
  return (
    <Chakra>
      <Layout router={router}>
        <AnimatePresence
          onExitComplete={() => {
            // Fires when all exiting nodes have completed animating out.
            if (typeof window !== 'undefined') {
              window.scroll({ top: 10 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
          <Footer />
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}

export default Website
