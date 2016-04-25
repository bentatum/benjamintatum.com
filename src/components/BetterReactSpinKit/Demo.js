import React, { PropTypes } from 'react'
import { Flex } from 'reflexbox'
import { Base, Pre } from 'rebass'

const BetterReactSpinKitDemo = ({ code, component }) =>
  <Flex
    align='center'
    column
    justify='center'
  >
    <Base mb={2}>
      {component}
    </Base>
    <Pre>
      {code.trim()}
    </Pre>
  </Flex>

BetterReactSpinKitDemo.propTypes = {
  code: PropTypes.string.isRequired,
  component: PropTypes.node.isRequired
}

export default BetterReactSpinKitDemo
