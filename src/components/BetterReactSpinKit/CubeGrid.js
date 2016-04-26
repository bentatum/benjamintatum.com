import { default as React } from 'react'
import { CubeGrid } from 'better-react-spinkit'
import { Page, Navbar } from 'components'
import { Flex } from 'reflexbox'
import { Link } from 'react-router'
import { default as Demo } from './Demo'

const BRSKCubeGrid = () =>
  <Page>
    <Navbar/>
    <Page.Title>
      <Link to='/better-react-spinkit'>
        Better React Spinkit
      </Link>
    </Page.Title>
    <Page.Subtitle>
      CubeGrid
    </Page.Subtitle>
    <Flex align='center' justify='center'>
      <Demo
        code={`
<CubeGrid
  rows={8}
  cols={8}
  size={200}
/>
        `}
        component={
          <CubeGrid
            rows={8}
            cols={8}
            size={200}
          />
        }
        hideHeading
        name='CubeGrid'
      />
    </Flex>
  </Page>

export default BRSKCubeGrid
