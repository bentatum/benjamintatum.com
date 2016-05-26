import { default as React } from 'react'
import { DoubleBounce } from 'better-react-spinkit'
import { Page } from 'components'
import { Flex } from 'reflexbox'
import { Link } from 'react-router'

const BRSKDoubleBounce = () =>
  <Page>
    <Page.Title>
      <Link to='/better-react-spinkit'>
        Better React Spinkit
      </Link>
    </Page.Title>
    <Page.Subtitle>
      DoubleBounce
    </Page.Subtitle>
    <Flex align='center' justify='center'>
      <DoubleBounce />
    </Flex>
  </Page>

export default BRSKDoubleBounce
