import { Box, BoxProps } from '@chakra-ui/react'

const Footer = (props: BoxProps) => {
  const today = new Date()

  return (
    <Box align="center" opacity={0.4} fontSize="1em" {...props}>
      &copy; {today.getFullYear()} CIC. All Rights Reserved.
    </Box>
  )
}

export default Footer
