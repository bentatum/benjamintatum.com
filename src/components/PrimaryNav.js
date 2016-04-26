import { default as React } from 'react'
import { NavItem } from 'rebass'
import { Link } from 'react-router'
import { Flex } from 'reflexbox'

const PrimaryNav = () =>
  <Flex>
    <NavItem is={Link} to='/portfolio'>
      Portfolio
    </NavItem>
    <NavItem is={Link} to='/resume'>
      Resume
    </NavItem>
    <NavItem is={Link} to='/contact'>
      Contact
    </NavItem>
  </Flex>

export default PrimaryNav
