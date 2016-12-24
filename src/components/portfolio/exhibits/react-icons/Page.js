
import React from 'react'
import { colors } from 'theme'
import { Text, Container, Banner } from 'rebass'
import { Flex } from 'reflexbox'

export default () =>
  <div>
    <Banner
      backgroundColor={colors.white}
      style={{
        minHeight: '30vh',
        fontFamily: 'sans-serif'
      }}>
      <a href='http://react-icons.benjamintatum.com' style={{ color: colors.black }} target='_blank'>
        <Flex flexColumn align='center'>
          <div
            style={{
              backgroundImage: 'url(//media.benjamintatum.com/react-icons-logo-small.svg)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: 80,
              width: 80
            }} />
          <div style={{ fontWeight: 700 }}>React Icons</div>
        </Flex>
      </a>
    </Banner>
    <Container style={{ textAlign: 'center' }}>
      <Text>
        React Icons is the all-in-one open-source icon library for React. It was created by <a target='_blank' href='https://github.com/gorangajic'>gorangajic</a>. I was lucky enough to be invited to help maintain it.
      </Text>
    </Container>
  </div>
