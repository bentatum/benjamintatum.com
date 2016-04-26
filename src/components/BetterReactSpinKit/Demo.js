import React, { PropTypes } from 'react'
import { Flex } from 'reflexbox'
import { Base, Heading, Pre } from 'rebass'
import { Link } from 'react-router'
import { kebabCase } from 'lodash'

const BetterReactSpinKitDemo = ({ code, component, hideHeading, name }) => {
  const path = `/better-react-spinkit/${kebabCase(name)}`
  return (
    <Flex
      align='center'
      column
      justify='center'
    >
      <If condition={!hideHeading}>
        <Heading level={3} mb={2}>
          <Link to={path}>
            {name}
          </Link>
        </Heading>
      </If>
      <Base mb={2}>
        <Link to={path}>
          {component}
        </Link>
      </Base>
      <Pre
        p={2}
        rounded
      >
        {code.trim()}
      </Pre>
    </Flex>
  )
}

BetterReactSpinKitDemo.propTypes = {
  code: PropTypes.string.isRequired,
  component: PropTypes.node.isRequired,
  hideHeading: PropTypes.bool,
  name: PropTypes.string.isRequired
}

export default BetterReactSpinKitDemo
