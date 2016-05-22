import { default as React } from 'react'
import { Pulse } from 'better-react-spinkit'
import { Page } from 'components'
import { Flex } from 'reflexbox'
import { Link } from 'react-router'

const BRSKPulse = () =>
  <Page>
    <Page.Title>
      <Link to='/better-react-spinkit'>
        Better React Spinkit
      </Link>
    </Page.Title>
    <Page.Subtitle>
      Pulse
    </Page.Subtitle>
    <Flex align='center' justify='center'>
      <Pulse/>
    </Flex>
  </Page>

export default BRSKPulse
