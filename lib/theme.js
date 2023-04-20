import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const style = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderLineOffset: 6,
        marginTop: 3,
        marginButtom: 4
      }
    },
    Link: {
      baseStyle: props => ({
        color: mode('#3d7aed', '#ff63c3')(props),
        textUnderLineOffset: 3
      })
    }
  }
}

const config = {
  initiaColorMode: 'dark'
}

const theme = extendTheme({ config, style, components })

export default theme
