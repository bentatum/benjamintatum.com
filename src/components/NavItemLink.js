
import React from 'react'
import { Link } from 'react-router'
import { NavItem } from 'rebass'

export default props =>
  <NavItem is={Link} {...props} />
