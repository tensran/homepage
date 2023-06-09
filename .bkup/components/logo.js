import { Text, Link, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoStyle = styled.span`
  font-weight: bold;
  font-size: 18px;
  align-items: center;
  line-height: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoStyle>
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          ml={3}
          fontWeight="bold"
        >
          @CIC
        </Text>
      </LogoStyle>
    </Link>
  )
}

export default Logo
