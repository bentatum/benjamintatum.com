import React from 'react'
import { NavItem, Toolbar } from 'rebass'
import { IndexLink, Link } from 'react-router'

const TopBar = () =>
    <Toolbar>
        <NavItem is="div">
            <IndexLink to="/">
                AnnArbor Pictures
            </IndexLink>
        </NavItem>
        <NavItem is="div">
            <Link to="/contact">
                Contact
            </Link>
        </NavItem>
    </Toolbar>

export default TopBar
