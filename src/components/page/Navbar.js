
import React from 'react'
import { Flex } from 'reflexbox'
import { IndexLink } from 'react-router'
import { Avatar, Container, Toolbar, Heading } from 'rebass'
import getContext from 'recompose/getContext'

const enhance = getContext({
  colors: React.PropTypes.object
})

export default enhance(props =>
  <Toolbar backgroundColor='white' color='black'>
    <Container py={2}>
      <Flex
        mb={2}
        align='center'>
        <Avatar mr={1} circle size={80} src='//media.benjamintatum.com/benjamin-tatum.jpg' />
        <Heading level={1} m={0} style={{ textAlign: 'center' }}>
          <IndexLink to='/' style={{ color: props.colors.black }}>
            Ben Tatum
          </IndexLink>
        </Heading>
      </Flex>
      {props.nav}
    </Container>
  </Toolbar>
)
