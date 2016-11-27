
import React from 'react'
import { colors } from 'theme'
import { card } from 'portfolio'
import { Heading } from 'rebass'

const enhance = card({
  href: 'https://costimize.com',
  style: { backgroundColor: colors.costimizeBlue },
  logo: (
    <div
      style={{
        backgroundImage: 'url(//media.benjamintatum.com/costimize-logo-white-100.svg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 77,
        width: 68
      }} />
  )
})

export default enhance(props =>
  <Heading
    level={2}
    color='white'
    style={{ fontFamily: 'Avenir Next Regular, sans-serif' }}>
    Costimize
  </Heading>
)
