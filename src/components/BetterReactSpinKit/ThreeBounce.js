import { default as React } from 'react'
import { ThreeBounce } from 'better-react-spinkit'
import { Page } from 'components'
import { Flex } from 'reflexbox'
import { Link } from 'react-router'

const BRSKThreeBounce = () =>
  <Page>
    <Page.Title>
      <Link to='/better-react-spinkit'>
        Better React Spinkit
      </Link>
    </Page.Title>
    <Page.Subtitle>
      ThreeBounce
    </Page.Subtitle>
    <Flex align='center' justify='center'>
      <ThreeBounce />
    </Flex>
  </Page>

export default BRSKThreeBounce
