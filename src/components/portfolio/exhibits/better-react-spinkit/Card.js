
import React from 'react'
import { colors } from 'theme'
import { card } from 'portfolio'
import { Heading } from 'rebass'
import { FadingCircle } from 'better-react-spinkit'

const enhance = card({
  href: 'http://better-react-spinkit.benjamintatum.com/',
  style: { backgroundColor: colors.betterReactSpinkitRed },
  logo: <FadingCircle color={colors.white} size={70} />
})

export default enhance(props =>
  <Heading
    level={2}
    color='white'
    style={{ fontFamily: 'Roboto, sans-serif' }}>
    Better React Spinkit
  </Heading>
)
