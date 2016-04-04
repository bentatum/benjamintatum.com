import React from 'react'
import { NavItem, Toolbar } from 'rebass'
import { IndexLink, Link } from 'react-router'
import { Flex } from 'reflexbox'

const TopBar = () =>
    <Toolbar>
        <Flex 
            justify="center"
            style={{
                width: '100%'
            }}
        >
            <NavItem is="div">
                <IndexLink to="/">
                    AnnArbor Pictures
                </IndexLink>
            </NavItem>
        </Flex>
    </Toolbar>

export default TopBar
