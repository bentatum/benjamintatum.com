import React from 'react'
import { NavItem, Space, Toolbar } from 'rebass'
import { IndexLink, Link } from 'react-router'

const TopBar = () =>
    <Toolbar>
        <NavItem is="div">
            <IndexLink to="/">
                Benjamin Tatum
            </IndexLink>
        </NavItem>
        <Space auto/>
        <NavItem is="div">
            <Link to="/portfolio">
                Portfolio
            </Link>
        </NavItem>
        <NavItem is="div">
            <Link to="/contact">
                Contact
            </Link>
        </NavItem>
        <NavItem
            href="http://github.com/bentatum"
            is="a"
            target="_blank"
        >
            Github
        </NavItem>
    </Toolbar>

export default TopBar
