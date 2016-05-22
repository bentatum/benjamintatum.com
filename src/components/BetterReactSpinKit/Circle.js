import { default as React } from 'react'
import { Circle } from 'better-react-spinkit'
import { Page } from 'components'
import { Flex } from 'reflexbox'
import { Link } from 'react-router'

const BRSKCircle = () =>
  <Page>
    <Page.Title>
      <Link to='/better-react-spinkit'>
        Better React Spinkit
      </Link>
    </Page.Title>
    <Page.Subtitle>
      Circle
    </Page.Subtitle>
    <Flex align='center' justify='center'>
      <Circle/>
    </Flex>
  </Page>

export default BRSKCircle
