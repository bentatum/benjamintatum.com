import React from 'react'
import { Page, Portfolio } from '.'
import { TopBar } from '.'

const Home = () =>
    <Page>
        <TopBar/>
        <Page.Title>
            Benjamin Tatum
        </Page.Title>
        <Page.Subtitle>
            <span>Software Developer<br/>Ann Arbor, Michigan</span>
        </Page.Subtitle>
        <Page.Content>
            <Portfolio/>
        </Page.Content>
    </Page>

export default Home
