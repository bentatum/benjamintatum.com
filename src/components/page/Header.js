
import compose from 'recompose/compose'
import React, { PropTypes } from 'react'
import setPropTypes from 'recompose/setPropTypes'
import { Base, Breadcrumbs } from 'rebass'
import { Reflex as withReflex } from 'reflexbox'

const enhance = compose(
  setPropTypes({
    breadcrumbs: PropTypes.shape({
      links: PropTypes.arrayOf(PropTypes.object)
    }),
    rightComponent: PropTypes.node,
    centerComponent: PropTypes.node,
    leftComponent: PropTypes.node
  }),
  withReflex
)

export default enhance(({ rightComponent, leftComponent, breadcrumbs, centerComponent, ...props }) =>
  <Base py={3} {...props}>
    <If condition={breadcrumbs}>
      <Breadcrumbs {...breadcrumbs} />
    </If>
  </Base>
)
