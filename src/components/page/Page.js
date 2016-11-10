
import React from 'react'
import { Navbar, Header } from 'components/page'

export default props =>
  <div>
    <If condition={props.navbar}>
      <Navbar {...props.navbar} />
    </If>
    <Header {...props.header} />
    {props.children}
  </div>
