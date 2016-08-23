
import { Flex } from 'reflexbox'
import { IndexLink, Link } from 'react-router'
import { default as React, PropTypes } from 'react'
import { Container, NavItem, Toolbar, Heading, Text } from 'rebass'
import { activeNavItem } from 'Theme/style'

const navItemProps = {
  is: Link,
  activeClassName: activeNavItem
}

const Navbar = (props, { colors, fontSizes }) =>
  <Toolbar backgroundColor='white' color='black'>
    <Container
      style={{ width: '100%' }}
      is={Flex}
      column
      align='center'
      py={2}
    >
      <Heading level={1} style={{ textAlign: 'center' }}>
        <IndexLink to='/' style={{ color: colors.black }}>
          Ben Tatum
        </IndexLink>
      </Heading>
      <Text mb={2} style={{ textAlign: 'center' }}>
        Product design & development.
      </Text>
      <Flex mb={2}>
        <NavItem {...navItemProps} to='/work'>
          work
        </NavItem>
        <NavItem {...navItemProps} to='/articles'>
          articles
        </NavItem>
        <NavItem {...navItemProps} to='/about'>
          about
        </NavItem>
        <NavItem {...navItemProps} to='/contact'>
          contact
        </NavItem>
      </Flex>
    </Container>
  </Toolbar>

Navbar.contextTypes = {
  colors: PropTypes.object.isRequired,
  fontSizes: PropTypes.array.isRequired
}

export default Navbar
