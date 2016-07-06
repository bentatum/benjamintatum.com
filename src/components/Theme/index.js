import './style.scss'
import { default as React, Component, PropTypes } from 'react'
import { default as color } from 'color'

export const breakpoints = {
  small: 425,
  medium: 768,
  large: 1024
}

const baseColors = {
  black: '#404040',
  white: '#fff',
  lightGray: '#f2f2f2',
  gray: '#ddd',
  midgray: '#888',
  blue: '#3c86c8',
  lightBlue: 'aliceblue',
  red: '#f52',
  orange: '#f70',
  green: '#1c7'
}

export const colors = {
  ...baseColors,
  primary: baseColors.blue,
  secondary: baseColors.lightBlue,
  default: baseColors.black,
  info: baseColors.blue,
  success: baseColors.green,
  warning: baseColors.orange,
  error: baseColors.red
}

const scale = [0, 10, 20, 48, 64]
const fontSizes = [64, 32, 25, 19, 18, 14, 12]

const fontWeightBase = 200

const shadows = [
  `0 0 18px 4px ${color(colors.black).alpha(0.1).rgbString()}`,
  `0px 0px 14px 3px ${color(colors.lightBlue).alpha(0.9).rgbString()}`
]

export default class Theme extends Component {

  static propTypes = {
    children: PropTypes.node
  };

  static childContextTypes = {
    betterReactSpinkit: PropTypes.object,
    breakpoints: PropTypes.object,
    colors: PropTypes.object,
    reactIconBase: PropTypes.object,
    rebass: PropTypes.object,
    reflexbox: PropTypes.object,
    shadows: PropTypes.array
  };

  getChildContext () {
    return {
      betterReactSpinkit: {
        color: colors.primary
      },
      breakpoints,
      colors,
      reactIconBase: {
        size: 24
      },
      reflexbox: { scale },
      rebass: {
        bold: 500,
        colors,
        fontSizes,
        scale,
        Block: {
          marginBottom: scale[0],
          marginTop: scale[0],
          paddingBottom: scale[3],
          paddingTop: scale[3]
        },
        Breadcrumbs: {
          marginBottom: 0
        },
        Button: {
          border: `1px solid ${colors.black}`,
          color: colors.black
        },
        Container: {
          width: '100%'
        },
        DropdownMenu: {
          boxShadow: shadows.lightBlue
        },
        Pre: {
          backgroundColor: colors.black,
          borderLeft: 0,
          color: colors.white,
          margin: 0,
          overflowX: 'auto',
          paddingLeft: 0
        },
        SectionHeader: {
          borderBottomColor: colors.lightGray,
          borderBottomStyle: 'dashed'
        },
        Badge: {
          fontWeight: 'lighter'
        },
        Heading: {
          fontWeight: fontWeightBase
        },
        Label: {
          display: 'block',
          marginBottom: 10
        },
        Menu: {
          borderColor: colors.white,
          marginBottom: 'inherit'
        },
        NavItem: {
          color: colors.black
        },
        Text: {
          marginBottom: scale[1],
          marginTop: scale[1]
        },
        Toolbar: {
          backgroundColor: 'transparent',
          paddingLeft: 0,
          paddingRight: 0
        }
      },
      shadows
    }
  }

  render () {
    return (
      <div>
        <style>
          {
            `
              * { box-sizing: border-box; }
              html, body {
                background-color: ${colors.blue};
                color: ${colors.white};
                font-weight: ${fontWeightBase};
              }
              ::-webkit-input-placeholder,
              :-moz-placeholder,
              ::-moz-placeholder,
              :-ms-input-placeholder {
                color: ${colors.darkGray};
                font-weight: ${fontWeightBase};
              }
            `
          }
        </style>
        {this.props.children}
      </div>
    )
  }
}
