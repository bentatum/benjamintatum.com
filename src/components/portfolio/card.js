
import React from 'react'
import { Flex } from 'reflexbox'
import { Link } from 'react-router'

export default ({ to, href, style }) => Component => {
  const component = (
    <Flex
      py={2}
      align='center'
      justify='center'
      style={style}>
      <Component />
    </Flex>
  )
  if (to) {
    return (
      <Link to={to}>
        {component}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} target='_blank'>
        {component}
      </a>
    )
  }
  return component
}
