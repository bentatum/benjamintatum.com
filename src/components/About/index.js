
import { Page } from 'components/page'
import { default as React } from 'react'
import { default as content } from './content'
import { Heading, Base } from 'rebass'
import { BackButton, PrimaryNav } from 'components'

export default () =>
  <Page
    navbar={{
      nav: <PrimaryNav />,
      leftComponent: <BackButton />,
      centerComponent: <Heading>About</Heading>
    }}>
    <Base
      mt={2}
      style={{ textAlign: 'center' }}
      dangerouslySetInnerHTML={{ __html: content }} />
  </Page>
