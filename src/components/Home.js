import React from 'react'
import { Page, Portfolio } from 'components'

const Home = () =>
  <Page>
    <Page.Title>
      Benjamin Tatum
    </Page.Title>
    <Page.Subtitle>
      <span>Software Development<br />Ann Arbor, Michigan</span>
    </Page.Subtitle>
    <Page.Content>
      <Portfolio />
    </Page.Content>
  </Page>

export default Home
