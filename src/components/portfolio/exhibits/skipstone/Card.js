
import React from 'react'
import { colors } from 'theme'
import { card } from 'portfolio'
import { Heading } from 'rebass'

const enhance = card({
  href: 'https://share.skip.st/one/d37776c75fe8971103bfca44ce63a7ab',
  style: { backgroundColor: colors.skipstoneBlue },
  logo: (
    <div
      style={{
        backgroundImage: 'url(//media.benjamintatum.com/skipstone-logo.svg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 68,
        width: 80
      }} />
  )
})

export default enhance(props =>
  <Heading
    level={2}
    color='white'
    style={{ fontFamily: 'Open Sans, sans-serif' }}>
    Skipstone
  </Heading>
)
