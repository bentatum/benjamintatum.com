
import React from 'react'
import { colors } from 'theme'
import { Flex } from 'reflexbox'
import { Text, Container, Banner } from 'rebass'

export default () =>
  <div>
    <Banner
      backgroundColor={colors.costimizeBlue}
      style={{ minHeight: '30vh' }}>
      <a href='https://costimize.com' style={{ color: colors.white }} target='_blank'>
        <Flex flexColumn align='center'>
          <div
            style={{
              backgroundImage: 'url(//media.benjamintatum.com/costimize-logo-white-100.svg)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: 77,
              width: 68
            }} />
          Costimize
        </Flex>
      </a>
    </Banner>
    <Container style={{ textAlign: 'center' }}>
      <Text>
        <a href='https://costimize.com' target='_blank'>Costimize</a> is a purchase ordering platform aiming to reduce costs for restaurants while providing online ordering, inventory management and CRM tools for vendors. Our technology stack on the front-end is React / Redux / Webpack and the backend is ran on MongoDB. All of which is hosted using AWS tools. Today we’re putting the final touches on our IOS and Android apps and populating our platform with vendors in the Southeastern Michigan area.
      </Text>
    </Container>
  </div>
