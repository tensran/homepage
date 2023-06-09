import { Box } from '@chakra-ui/react'

const Footer = () => {
  const today = new Date()

  return (
    <Box align="center" opacity={0.4} fontSize="em">
      &copy; {today.getFullYear()} CIC. All Rights Reserved.
    </Box>
  )
}

export default Footer
