
import React from 'react'
import { colors } from 'theme'
import { card } from 'portfolio'
import { Heading } from 'rebass'

const enhance = card({
  to: '/work/react-icons',
  style: {
    backgroundColor: colors.white,
    color: colors.black
  }
})

export default enhance(props =>
  <Heading
    level={2}
    color='black'
    style={{
      fontFamily: 'sans-serif',
      fontWeight: 700
    }}>
    React Icons
  </Heading>
)
