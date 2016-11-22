
import React from 'react'
import { Heading, Text } from 'rebass'
import { Page } from 'components/page'
import { MenuButton, BackButton, PrimaryNav } from 'components'

export default () =>
  <Page
    navbar={{
      nav: <PrimaryNav />,
      leftComponent: <BackButton />,
      centerComponent: <Heading>Contact</Heading>,
      rightComponent: <MenuButton />
    }}>
    <Text
      px={2}
      mb={3}
      style={{ textAlign: 'center' }}>
      Need help on your next project?
      <br />
      Send an email to <a href='mailto:bentatum@me.com'>bentatum@me.com</a> and I'll get back to you as soon as I can!
    </Text>
  </Page>
