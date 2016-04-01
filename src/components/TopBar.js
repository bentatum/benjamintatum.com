import React from 'react'
import { NavItem, Toolbar } from 'rebass'
import { Link } from 'react-router'

const TopBar = () =>
    <Toolbar>
        <NavItem is="div">
            <Link to="/about">
                About
            </Link>
        </NavItem>
        <NavItem is="div">
            <Link to="/contact">
                Contact
            </Link>
        </NavItem>
    </Toolbar>

export default TopBar
