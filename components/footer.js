import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="em">
      &copy; {new Date().getFullYear()} CIC. All Rights Reserved.
    </Box>
  )
}

export default Footer
