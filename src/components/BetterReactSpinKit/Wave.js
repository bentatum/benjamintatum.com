import { default as React } from 'react'
import { Wave } from 'better-react-spinkit'
import { Page } from 'components'
import { Flex } from 'reflexbox'
import { Link } from 'react-router'

const BRSKWave = () =>
  <Page>
    <Page.Title>
      <Link to='/better-react-spinkit'>
        Better React Spinkit
      </Link>
    </Page.Title>
    <Page.Subtitle>
      Wave
    </Page.Subtitle>
    <Flex align='center' justify='center'>
      <Wave count={4}/>
    </Flex>
  </Page>

export default BRSKWave
