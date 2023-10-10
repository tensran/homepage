import { forwardRef, useEffect, useState } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const DnaSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

type DnaContainerProps = {
  children: React.ReactNode
}

export const DnaContainer = forwardRef<HTMLDivElement, DnaContainerProps>(
  ({ children }, ref) => (
    <Box
      ref={ref}
      className="voxel-dna"
      m="auto"
      mt={['-20px', '-60px', '-120px']}
      mb={['-40px', '-140px', '-200px']}
      w={[280, 480, 640]}
      h={[280, 480, 640]}
      position="relative"
    >
      {children}
    </Box>
  )
)

const Loader = () => {
  const [supportsWebGL, setSupportsWebGL] = useState(false)

  useEffect(() => {
    // Check if WebGL is supported in the browser
    const canvas = document.createElement('canvas')
    const context =
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (context) {
      setSupportsWebGL(true)
    }
  }, [])
  return (
    <DnaContainer>
      {supportsWebGL ? (
        <DnaSpinner />
      ) : (
        <p>Your browser does not support WebGL.</p>
      )}
    </DnaContainer>
  )
}

export default Loader
