import React from 'react'
import { Page, PrimaryNav, TopBar, Portfolio } from 'components'

const Home = () =>
    <Page>
        <TopBar nav={<PrimaryNav/>}/>
        <Page.Title>
            Benjamin Tatum
        </Page.Title>
        <Page.Subtitle>
            <span>Software Development<br/>Ann Arbor, Michigan</span>
        </Page.Subtitle>
        <Page.Content>
            <Portfolio/>
        </Page.Content>
    </Page>

export default Home
