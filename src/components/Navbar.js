
import { Flex, Box } from 'reflexbox'
import { activeNavItem } from 'Theme/style'
import { IndexLink, Link } from 'react-router'
import { default as React, PropTypes } from 'react'
import { Container, NavItem, Toolbar, Heading, Text } from 'rebass'

const navItemProps = {
  is: Link,
  activeClassName: activeNavItem
}

const Navbar = (props, { colors, fontSizes, media }) => {
  const large = media.indexOf('large') > -1
  return (
    <Toolbar backgroundColor='white' color='black'>
      <Container py={2}>
        <Flex
          wrap
          align='flex-start'
          justify='space-between'
        >
          <Box col={large ? 6 : 12} flex column align={large ? 'flex-start' : 'center'}>
            <Heading level={1} style={{ textAlign: 'center' }}>
              <IndexLink to='/' style={{ color: colors.black }}>
                Ben Tatum
              </IndexLink>
            </Heading>
            <Text mb={2} style={{ textAlign: 'center' }}>
              Product design & development.
            </Text>
          </Box>
          <Box col={large ? 6 : 12} flex justify={large ? 'flex-end' : 'center'}>
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
          </Box>
        </Flex>
      </Container>
    </Toolbar>
  )
}

Navbar.contextTypes = {
  colors: PropTypes.object.isRequired,
  fontSizes: PropTypes.array.isRequired,
  media: PropTypes.array.isRequired
}

export default Navbar
