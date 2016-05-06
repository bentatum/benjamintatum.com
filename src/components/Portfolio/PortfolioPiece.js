import React, { Component, PropTypes } from 'react'
import { Base, Heading } from 'rebass'
import { connect } from 'react-redux'
import { Flex, Box } from 'reflexbox'
import { default as style } from './style.scss'

@connect((state) => ({
  width: state.app.width
}))

export default class PortfolioPiece extends Component {

  static contextTypes = {
    breakpoints: PropTypes.object.isRequired,
    rebass: PropTypes.object.isRequired
  };

  static propTypes = {
    linkProps: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    screenShot: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired
  };

  render () {
    const { ...props, linkProps, name, screenShot, width } = this.props
    const { colors: { lightBlue } } = this.context.rebass
    const { small } = this.context.breakpoints
    if (!width) { return null }
    return (
      <Base
        className={style.outer}
        {...props}
      >
        <Flex
          align='center'
          column
        >
          <Box>
            <Heading
              level={3}
              mb={2}
            >
              <a {...linkProps}>
                {name}
              </a>
            </Heading>
          </Box>
          <Base
            style={{
              borderColor: lightBlue,
              borderStyle: 'solid',
              borderWidth: 5,
              width: width > small ? 300 : '100%'
            }}
          >
            <a {...linkProps}>
              <div
                style={{
                  backgroundImage: `url('${screenShot}')`,
                  backgroundPosition: 'top center',
                  backgroundSize: 'cover',
                  boxShadow: '0 0 18px 4px rgba(0, 0, 0, 0.1)',
                  height: 275,
                  width: '100%'
                }}
              />
            </a>
          </Base>
        </Flex>
      </Base>
    )
  }
}
