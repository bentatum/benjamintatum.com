import { default as React } from 'react'
import { Wordpress } from 'better-react-spinkit'
import { Page } from 'components'
import { Flex } from 'reflexbox'
import { Link } from 'react-router'

const BRSKWordpress = () =>
  <Page>
    <Page.Title>
      <Link to='/better-react-spinkit'>
        Better React Spinkit
      </Link>
    </Page.Title>
    <Page.Subtitle>
      Wordpress
    </Page.Subtitle>
    <Flex align='center' justify='center'>
      <Wordpress />
    </Flex>
  </Page>

export default BRSKWordpress
