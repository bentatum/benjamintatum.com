import { default as React, Component, PropTypes } from 'react'
import { Base, Drawer, Fixed, Toolbar } from 'rebass'
import { Flex } from 'reflexbox'
import { default as Close } from 'react-icons/lib/md/close'
import { default as Hamburger } from 'react-icons/lib/md/menu'
import { PrimaryNav } from 'components'
import { connect } from 'react-redux'

const CircleIcon = ({ children }, { rebass: { colors } }) =>
  <Base
    backgroundColor={colors.blue}
    circle
    m={1}
    p={1}
    style={{
      color: colors.white
    }}
  >
    {children}
  </Base>

CircleIcon.contextTypes = {
  rebass: PropTypes.object.isRequired
}

@connect(({ app: { width } }) => ({ width }))
export default class Navbar extends Component {

  static propType = {
    width: PropTypes.number.isRequired
  };

  state = {}

  render () {
    const { drawer } = this.state
    const { width } = this.props
    return (
      <Fixed style={{ width: '100%' }}>
        <Toolbar pt={1}>
          <Flex
            align='center'
            justify='center'
            style={{ width }}
          >
            <CircleIcon>
              <Hamburger onClick={() => this.setState({ drawer: true })}/>
            </CircleIcon>
          </Flex>
          <Drawer
            backgroundColor='primary'
            color='default'
            open={drawer}
            pt={1}
            size={width}
          >
            <Flex
              align='center'
              justify='center'
              mb={2}
            >
              <CircleIcon>
                <Close onClick={() => this.setState({ drawer: false })}/>
              </CircleIcon>
            </Flex>
            <PrimaryNav/>
          </Drawer>
        </Toolbar>
      </Fixed>
    )
  }
}
