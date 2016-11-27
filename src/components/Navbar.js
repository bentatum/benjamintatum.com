
import React from 'react'
import { Flex, Box } from 'reflexbox'
import { CloseButton } from 'components'
import { Drawer, Container, Toolbar } from 'rebass'
import { connect } from 'react-redux'
import { toggleDrawer } from 'redux/modules/app'

const enhance = connect(state => ({ drawer: state.app.drawer }), { toggleDrawer })

export default enhance(props =>
  <Toolbar backgroundColor='white' color='black'>
    <Container py={2}>
      <Flex align='center'>
        <Box col={4} flex justify='flex-start'>
          {props.leftComponent}
        </Box>
        <Box col={4} flex justify='center'>
          {props.centerComponent}
        </Box>
        <Box col={4} flex justify='flex-end'>
          {props.rightComponent}
        </Box>
      </Flex>
      <If condition={props.nav}>
        <Drawer
          color='black'
          position='right'
          open={props.drawer}
          onDismiss={() => props.toggleDrawer(false)}
          backgroundColor='white'>
          <Flex
            mb={2}
            justify='flex-end'
            style={{ height: 41, width: '100%' }}>
            <CloseButton onClick={() => props.toggleDrawer(!props.drawer)} />
          </Flex>
          {props.nav}
        </Drawer>
      </If>
    </Container>
  </Toolbar>
)
