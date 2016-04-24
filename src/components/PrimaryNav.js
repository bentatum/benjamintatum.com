import { default as React } from 'react'
import { NavItem } from 'rebass'
import { Link } from 'react-router'

const PrimaryNav = () =>
    <div>
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
    </div>

export default PrimaryNav
