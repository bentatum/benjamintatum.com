
import React from 'react'
import { Flex, Box } from 'reflexbox'
import { Container, Toolbar } from 'rebass'
import getContext from 'recompose/getContext'

/*
<Flex flexColumn align='center'>
  <Box>
    {props.nav}
  </Box>
</Flex>
*/

const enhance = getContext({
  colors: React.PropTypes.object
})

export default enhance(props =>
  <Toolbar backgroundColor='white' color='black'>
    <Container py={2}>
      <Flex align='center'>
        <Box col={4}>
          {props.leftComponent}
        </Box>
        <Box col={4} flex justify='center'>
          {props.centerComponent}
        </Box>
        <Box col={4}>
          {props.rightComponent}
        </Box>
      </Flex>
    </Container>
  </Toolbar>
)
