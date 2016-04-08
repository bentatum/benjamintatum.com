import React from 'react'
import { Page, Portfolio } from '.'
import { NavItem, Space, Toolbar } from 'rebass'
import { IndexLink } from 'react-router'

const Home = () =>
    <Page>
        <Toolbar>
            <NavItem is="div">
                <IndexLink to="/">
                    Benjamin Tatum
                </IndexLink>
            </NavItem>
            <Space auto/>
            <NavItem
                href="http://github.com/bentatum"
                is="a"
                target="_blank"
            >
                Github
            </NavItem>
        </Toolbar>
        <Page.Title>
            Benjamin Tatum
        </Page.Title>
        <Page.Subtitle>
            <span>Software Developer<br/>Ann Arbor, Michigan</span>
        </Page.Subtitle>
        <Portfolio/>
    </Page>

export default Home
