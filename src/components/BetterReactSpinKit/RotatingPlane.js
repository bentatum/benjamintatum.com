import { default as React } from 'react'
import { RotatingPlane } from 'better-react-spinkit'
import { Page } from 'components'
import { Flex } from 'reflexbox'
import { Link } from 'react-router'

const BRSKRotatingPlane = () =>
  <Page>
    <Page.Title>
      <Link to='/better-react-spinkit'>
        Better React Spinkit
      </Link>
    </Page.Title>
    <Page.Subtitle>
      RotatingPlane
    </Page.Subtitle>
    <Flex align='center' justify='center'>
      <RotatingPlane/>
    </Flex>
  </Page>

export default BRSKRotatingPlane
