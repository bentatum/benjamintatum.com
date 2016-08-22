
import { PageHeader } from 'components'
import { Container, Text } from 'rebass'
import { default as React } from 'react'

const About = () =>
  <div>
    <PageHeader
      heading={{ children: 'About' }}
      mb={2}
    />
    <Container>
      <img
        src='//media.benjamintatum.com/benjamin-tatum.jpg'
        alt='Ben Tatum'
        style={{
          margin: 'auto',
          maxWidth: '100%',
          display: 'block'
        }}
      />
      <Text style={{ textAlign: 'center' }} mt={2}>
        I'm Ben, a software designer living in Ann Arbor, Michigan.
      </Text>
    </Container>
  </div>

export default About
