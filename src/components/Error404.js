
import { Header } from 'components/page'
import { Container, Text } from 'rebass'
import { default as React } from 'react'
import { default as Helmet } from 'react-helmet'

export default () =>
  <Container>
    <Helmet
      meta={[{ name: '404', content: 'This page does not exist.' }]}
      title='404'
    />
    <Header heading={{ children: '404' }} mb={2} />
    <Text style={{ textAlign: 'center' }}>
      Sorry, that page doesn't exist.
    </Text>
  </Container>
