
import React from 'react'
import { Heading, Text } from 'rebass'
import { page, MenuButton, BackButton, PrimaryNav } from 'components'

const enhance = page(props => ({
  ...props,
  navbar: {
    nav: <PrimaryNav />,
    leftComponent: <BackButton />,
    centerComponent: <Heading level={1}>Contact</Heading>,
    rightComponent: <MenuButton />
  }
}))

export default enhance(() =>
  <Text
    px={2}
    mb={3}
    style={{ textAlign: 'center' }}>
    Need help on your next project?
    <br />
    Send an email to <a href='mailto:bentatum@me.com'>bentatum@me.com</a> and I'll get back to you as soon as I can!
  </Text>
)
