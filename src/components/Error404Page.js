
import React from 'react'
import Helmet from 'react-helmet'
import { Heading, Text } from 'rebass'
import { page, BackButton, PrimaryNav } from 'components'

const enhance = page(props => ({
  ...props,
  navbar: {
    leftComponent: <BackButton />,
    centerComponent: <Heading level={1}>404</Heading>
  }
}))

export default enhance(() =>
  <div>
    <Helmet
      meta={[{ name: '404', content: 'This page does not exist.' }]}
      title='404' />
    <Text style={{ textAlign: 'center' }} mb={2}>
      Sorry, that page doesn't exist. Try one of the links below.
    </Text>
    <PrimaryNav />
  </div>
)
