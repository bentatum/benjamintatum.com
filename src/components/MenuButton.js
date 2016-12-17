
import React from 'react'
import { Button } from 'rebass'
import MenuIcon from 'react-icons/lib/md/menu'
import { toggleDrawer } from 'redux/modules/app'
import { connect } from 'react-redux'

const enhance = connect(state => ({ drawer: state.app.drawer }), { toggleDrawer })

export default enhance(props =>
  <Button
    px={0}
    color='black'
    backgroundColor='white'
    onClick={() => props.toggleDrawer(!props.drawer)}>
    <MenuIcon />
  </Button>
)
