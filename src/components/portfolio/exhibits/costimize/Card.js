
import React from 'react'
import { colors } from 'theme'
import { card } from 'portfolio'
import { Heading } from 'rebass'

const enhance = card({
  to: '/work/costimize',
  style: { backgroundColor: colors.costimizeBlue }
})

export default enhance(props =>
  <Heading
    level={2}
    color='white'
    style={{ fontFamily: 'Avenir Next Regular, sans-serif' }}>
    Costimize
  </Heading>
)
