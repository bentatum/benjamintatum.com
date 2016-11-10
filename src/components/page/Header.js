
import React from 'react'
import { Flex, Box, Reflex as withReflex } from 'reflexbox'
import { Base, Breadcrumbs, Heading } from 'rebass'
import compose from 'recompose/compose'
import setPropTypes from 'recompose/setPropTypes'

const enhance = compose(
  setPropTypes({
    breadcrumbs: React.PropTypes.shape({
      links: React.PropTypes.arrayOf(React.PropTypes.object)
    }),
    heading: React.PropTypes.shape({
      children: React.PropTypes.string.isRequired
    })
  }),
  withReflex
)

export default enhance(({ rightComponent, leftComponent, breadcrumbs, heading, ...props }) =>
  <Base py={2} {...props}>
    <Flex align='center'>
      <Box col={4}>
        {leftComponent}
      </Box>
      <Box col={4} flex justify='center'>
        <Heading level={2} {...heading} style={{ textAlign: 'center' }} />
      </Box>
      <Box col={4}>
        {rightComponent}
      </Box>
    </Flex>
    <If condition={breadcrumbs}>
      <Breadcrumbs {...breadcrumbs} />
    </If>
  </Base>
)
