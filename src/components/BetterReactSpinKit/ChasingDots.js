import { default as React } from 'react'
import { ChasingDots } from 'better-react-spinkit'
import { Page } from 'components'
import { Flex } from 'reflexbox'
import { Link } from 'react-router'

const BRSKChasingDots = () =>
  <Page>
    <Page.Title>
      <Link to='/better-react-spinkit'>
        Better React Spinkit
      </Link>
    </Page.Title>
    <Page.Subtitle>
      ChasingDots
    </Page.Subtitle>
    <Flex align='center' justify='center'>
      <ChasingDots />
    </Flex>
  </Page>

export default BRSKChasingDots
