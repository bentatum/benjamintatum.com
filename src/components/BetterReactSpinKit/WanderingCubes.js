import { default as React } from 'react'
import { WanderingCubes } from 'better-react-spinkit'
import { Page } from 'components'
import { Flex } from 'reflexbox'
import { Link } from 'react-router'

const BRSKWanderingCubes = () =>
  <Page>
    <Page.Title>
      <Link to='/better-react-spinkit'>
        Better React Spinkit
      </Link>
    </Page.Title>
    <Page.Subtitle>
      WanderingCubes
    </Page.Subtitle>
    <Flex align='center' justify='center'>
      <WanderingCubes />
    </Flex>
  </Page>

export default BRSKWanderingCubes
