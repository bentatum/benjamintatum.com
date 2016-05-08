import { default as React, Component, PropTypes } from 'react'
import { Arrow, Drawer, Dropdown, DropdownMenu, Fixed, Toolbar } from 'rebass'
import { Flex } from 'reflexbox'
import { default as Close } from 'react-icons/lib/md/close'
import { default as Hamburger } from 'react-icons/lib/md/menu'
import { CircleButton, PrimaryNav } from 'components'
import { connect } from 'react-redux'

@connect(({ app: { width } }) => ({ width }))

export default class Navbar extends Component {

  static contextTypes = {
    breakpoints: PropTypes.object.isRequired
  };

  static propType = {
    width: PropTypes.number.isRequired
  };

  state = {}

  render () {
    const { drawer, menu } = this.state
    const { width } = this.props
    const { breakpoints: { small } } = this.context
    const isSmall = width <= small
    return (
      <If condition={width}>
        <Fixed style={{ width: '100%' }}>
          <Toolbar pt={1} style={{ margin: 'auto', maxWidth: small }}>
            <Flex
              align='center'
              justify='center'
              style={{ width }}
            >
              <If condition={isSmall}>
                <CircleButton>
                  <Hamburger onClick={() => this.setState({ drawer: true })}/>
                </CircleButton>
                <Else/>
                <CircleButton>
                  <Hamburger onClick={() => this.setState({ menu: true })}/>
                </CircleButton>
                <Dropdown>
                  <DropdownMenu
                    onDismiss={() => this.setState({ menu: false })}
                    open={menu}
                    style={{
                      left: -95,
                      top: 27
                    }}
                  >
                    <Arrow
                      color='primary'
                      direction='up'
                      style={{
                        position: 'absolute',
                        top: -7,
                        left: '50%',
                        marginLeft: -7 / 2
                      }}
                    />
                    <PrimaryNav/>
                  </DropdownMenu>
                </Dropdown>
              </If>
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
                <CircleButton>
                  <Close onClick={() => this.setState({ drawer: false })}/>
                </CircleButton>
              </Flex>
              <PrimaryNav/>
            </Drawer>
          </Toolbar>
        </Fixed>
      </If>
    )
  }
}
