import { default as React, Component } from 'react'
import { Container, NavItem, Toolbar, Space } from 'rebass'
import { IndexLink, Link } from 'react-router'
import { Flex } from 'reflexbox'

const Navbar = () =>
  <Toolbar backgroundColor='white'>
    <Container style={{ width: '100%' }} is={Flex}>
      <NavItem is={IndexLink} to='/' pl={0}>
        Benjamin Tatum
      </NavItem>
      <Space auto />
      <NavItem is={Link} to='/portfolio'>
        Portfolio
      </NavItem>
      <NavItem is={Link} to='/resume' pr={0}>
        Resume
      </NavItem>
    </Container>
  </Toolbar>

export default Navbar
