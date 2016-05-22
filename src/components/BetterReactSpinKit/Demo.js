import React, { PropTypes } from 'react'
import { Flex } from 'reflexbox'
import { Base, Heading } from 'rebass'
import { Link } from 'react-router'
import { kebabCase } from 'lodash'

const BetterReactSpinKitDemo = ({ component, hideHeading, name, ...props }) => {
  const path = `/better-react-spinkit/${kebabCase(name)}`
  return (
    <Base {...props}>
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
      </Flex>
    </Base>
  )
}

BetterReactSpinKitDemo.propTypes = {
  component: PropTypes.node.isRequired,
  hideHeading: PropTypes.bool,
  name: PropTypes.string.isRequired
}

export default BetterReactSpinKitDemo
