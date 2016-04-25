import { default as React } from 'react'
import { NavItem } from 'rebass'
import { Link } from 'react-router'
import { Flex } from 'reflexbox'

const PrimaryNav = () =>
  <Flex>
    <NavItem is='div'>
      <Link to='/portfolio'>
        Portfolio
      </Link>
    </NavItem>
    <NavItem is='div'>
      <Link to='/contact'>
        Contact
      </Link>
    </NavItem>
  </Flex>

export default PrimaryNav
