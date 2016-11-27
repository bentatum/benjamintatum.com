
import './style.scss'
import { default as color } from 'color'
import { default as css } from 'minify-css-string'
import { default as React, Component, PropTypes } from 'react'

export { default as Input } from './Input'
export { default as Textarea } from './Textarea'

export const breakpoints = {
  small: 425,
  medium: 768,
  large: 1024
}

export const fontFamilyBold = 'Avenir Next Bold, sans-serif'
export const fontFamily = 'Avenir Next Regular, sans-serif'
export const fontFamilyLight = 'Avenir Next UltraLight, sans-serif'

const baseColors = {
  black: '#4A4A4A',
  white: '#fff',
  lightGray: '#f2f2f2',
  gray: '#ddd',
  midgray: '#888',
  blue: '#3c86c8',
  lightBlue: 'aliceblue',
  red: '#f52',
  orange: '#f70',
  green: '#1c7',
  skipstoneBlue: '#005695',
  costimizeBlue: '#043555',
  betterReactSpinkitRed: '#bb453e'
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
const fontSizes = [64, 35, 22, 19, 16, 14, 12]

const fontWeightBase = 200

const shadows = [
  `0 0 3px 2px ${color(colors.black).alpha(0.1).rgbString()}`,
  `0px 0px 14px 3px ${color(colors.lightBlue).alpha(0.9).rgbString()}`
]

const inputHeight = 36

export default class Theme extends Component {

  static propTypes = {
    children: PropTypes.node
  };

  static childContextTypes = {
    betterReactSpinkit: PropTypes.object,
    breakpoints: PropTypes.object,
    colors: PropTypes.object,
    fontSizes: PropTypes.array,
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
      fontSizes,
      reactIconBase: {
        size: 24,
        color: colors.black
      },
      reflexbox: { breakpoints, scale },
      rebass: {
        bold: 500,
        colors,
        fontSizes,
        scale,
        Button: {
          paddingTop: scale[0],
          paddingBottom: scale[0]
        },
        Block: {
          marginBottom: scale[0],
          marginTop: scale[0],
          paddingBottom: scale[3],
          paddingTop: scale[3]
        },
        Container: {
          width: '100%'
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
        Drawer: {
          boxShadow: shadows[0]
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
          {css(`
            * { box-sizing: border-box; }
            html, body {
              background-color: ${colors.white};
              color: ${colors.black};
              font-family: ${fontFamily};
              font-weight: ${fontWeightBase};
            }
            h1, h2, h3, h4, h5, h6 {
              font-family: ${fontFamilyBold};
            }
            a {
              color: ${colors.primary};
              text-decoration: none;
            }
            p {
              font-size: ${fontSizes[5]}px;
            }
            button {
              outline: none;
            }
            button:active {
              box-shadow: none;
            }
            button[disabled] {
              cursor: not-allowed !important;
            }
            ::-webkit-input-placeholder,
            :-moz-placeholder,
            ::-moz-placeholder,
            :-ms-input-placeholder {
              color: ${colors.darkGray};
              font-weight: ${fontWeightBase};
            }
            .Button {
              min-height: ${inputHeight}px !important;
            }
            .Input input {
              height: ${inputHeight}px !important;
            }
          `)}
        </style>
        {this.props.children}
      </div>
    )
  }
}

