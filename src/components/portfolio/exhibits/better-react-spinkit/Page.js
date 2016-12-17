
import React from 'react'
import { colors } from 'theme'
import { Flex, Box } from 'reflexbox'
import { Text, Container, Banner } from 'rebass'
import { FadingCircle } from 'better-react-spinkit'

export default () =>
  <div>
    <Banner
      backgroundColor={colors.betterReactSpinkitRed}
      style={{ minHeight: '30vh' }}>
      <a href='http://better-react-spinkit.benjamintatum.com' style={{ color: colors.white }} target='_blank'>
        <Flex flexColumn align='center'>
          <Box mb={2}>
            <FadingCircle color={colors.white} size={80} />
          </Box>
          Better React Spinkit
        </Flex>
      </a>
    </Banner>
    <Container style={{ textAlign: 'center' }}>
      <Text>
        <a target='_blank' href='http://better-react-spinkit.benjamintatum.com'>Better React Spinkit</a> is a highly confgurable open source loading indicator set for React based on <a href='http://tobiasahlin.com/spinkit/' target='_blank'>Spinkit</a>
      </Text>
    </Container>
  </div>
