import styled from '@emotion/styled'
import { motion } from 'framer-motion'

// const UnderlinedText = styled(Text)`
//   &:hover {
//     text-decoration: underline;
//   }
// `
//
// const AnimatedUnderline = styled(motion.div)`
//   height: 2px;
//   width: 100%;
//   background-color: black;
// `
//
// const HoverLink = ({ children }) => {
//   return (
//     <Box position="relative" display="inline-block">
//       <UnderlinedText>{children}</UnderlinedText>
//       <AnimatedUnderline
//         initial={{ scaleX: 0 }}
//         animate={{ scaleX: 1 }}
//         transition={{ duration: 0.2 }}
//         whileHover={{ scaleX: 1.2 }}
//       />
//     </Box>
//   )
// }

const Underline = styled(motion.span)`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 2px;
  background-color: #38b2ac;
`

const HoverLink = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ display: 'inline-block', position: 'relative' }}
    >
      <span>{children}</span>
      <Underline
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export default HoverLink
