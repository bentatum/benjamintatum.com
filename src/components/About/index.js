
import { Header } from 'components/page'
import { Container, Base } from 'rebass'
import { default as React } from 'react'
import { default as content } from './content'

const About = () =>
  <div>
    <Header
      heading={{ children: 'About' }}
      mb={2}
    />
    <Container>
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
