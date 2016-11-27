
import React from 'react'
import { colors } from 'theme'
import { card } from 'portfolio'
import { Heading } from 'rebass'

const enhance = card({
  to: '/work/skipstone',
  style: { backgroundColor: colors.skipstoneBlue }
})

export default enhance(props =>
  <Heading
    level={2}
    color='white'
    style={{ fontFamily: 'Open Sans, sans-serif' }}>
    Skipstone
  </Heading>
)
