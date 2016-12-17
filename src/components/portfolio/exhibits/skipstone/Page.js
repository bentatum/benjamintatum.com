
import React from 'react'
import { colors } from 'theme'
import { Text, Container, Banner } from 'rebass'
import { Flex } from 'reflexbox'

export default () =>
  <div>
    <Banner
      backgroundColor={colors.skipstoneBlue}
      style={{
        minHeight: '30vh',
        fontFamily: 'Open Sans, sans-serif'
      }}>
      <a href='https://share.skip.st/one/d37776c75fe8971103bfca44ce63a7ab' style={{ color: colors.white }} target='_blank'>
        <Flex flexColumn align='center'>
          <div
            style={{
              backgroundImage: 'url(//media.benjamintatum.com/skipstone-logo.svg)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: 68,
              width: 80
            }} />
          Skipstone
        </Flex>
      </a>
    </Banner>
    <Container style={{ textAlign: 'center' }}>
      <Text mb={1}>
        <a target='_blank' href='https://share.skip.st/one/d37776c75fe8971103bfca44ce63a7ab'>Skipstone</a> is an intelligent video platform. Watch the video, ask it a question and you get an answer.
      </Text>
      <Text>
        My primary role at Skipstone is to lead front-end development. Upon joining I helped to establish sensible development practices like Scrum, Github for code-reviews and pull-requests and helpful tools like Slack to facilitate remote collaboration. Skipstone's products are built on technologies like React, Redux and Webpack. We host our products using AWS services like EC2, Elastic Beanstalk, S3, CloudFront and Elastic Transcoder.
      </Text>
    </Container>
  </div>
