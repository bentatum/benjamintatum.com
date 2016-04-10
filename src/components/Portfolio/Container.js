import React from 'react'
import { TopBar, Page, Portfolio } from '..'

const PortfolioContainer = () =>
    <Page>
        <TopBar/>
        <Page.Title>
            Work, Work, Work,<br/>
            Work, Work
        </Page.Title>
        <Page.Content>
            <Portfolio/>
        </Page.Content>
    </Page>

export default PortfolioContainer
