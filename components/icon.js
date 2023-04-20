import { Text, Link } from '@chakra-ui/react'
import styled from '@emotion/styled'

const IconStyle = styled.span`
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

const Icon = () => {
  return (
    <Link href="/" scroll={false}>
      <IconStyle>
        <Text ml={3} fontWeight="bold">
          CIC
        </Text>
      </IconStyle>
    </Link>
  )
}

export default Icon
