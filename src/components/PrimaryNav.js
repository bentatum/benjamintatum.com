
import React from 'react'
import { Menu } from 'rebass'
import { NavItemLink } from 'components'

export default () =>
  <Menu>
    <NavItemLink to='/work'>
      work
    </NavItemLink>
    <NavItemLink to='/articles'>
      articles
    </NavItemLink>
    <NavItemLink to='/about'>
      about
    </NavItemLink>
    <NavItemLink to='/contact'>
      contact
    </NavItemLink>
  </Menu>
