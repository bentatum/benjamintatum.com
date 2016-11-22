
import React from 'react'
import { Navbar, Header } from 'components/page'

export default props =>
  <div>
    <If condition={props.navbar}>
      <Navbar {...props.navbar} />
    </If>
    <If condition={props.header}>
      <Header {...props.header} />
    </If>
    {props.children}
  </div>
