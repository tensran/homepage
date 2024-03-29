import Head from 'next/head'
import { motion } from 'framer-motion'
import { GridItemStyle } from '@/components/Grid-Item'

// import Loader from '@/components/threejs/loader'

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -1, y: 0 }
}

// const LazyVoxelDna = dynamic(() => import('@/components/threejs/voxel-dna'), {
//   ssr: false,
//   loading: () => <Loader />
// })

const Layout = ({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) => {
  const titleMsg = `${title} - co`
  return (
    <motion.article
      animate="enter"
      initial="hidden"
      exit="exit"
      variants={variants}
      style={{ position: 'relative' }}
      transition={{ duration: 0.4, type: 'easeInOut' }}
    >
      <>
        {title && (
          <Head>
            <title>{titleMsg}</title>
            <meta property="og:title" content={titleMsg} />
          </Head>
        )}
        {children}

        <GridItemStyle />
      </>
    </motion.article>
  )
}

export default Layout
