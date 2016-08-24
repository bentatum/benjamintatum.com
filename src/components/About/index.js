
import { PageHeader } from 'components'
import { Container, Base } from 'rebass'
import { default as React } from 'react'
import { default as content } from './content'

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
      <Base
        mt={2}
        style={{
          textAlign: 'center'
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Container>
  </div>

export default About
