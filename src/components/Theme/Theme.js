import './style.scss'
import { Component, PropTypes } from 'react'

const baseColors = {
    black: '#111',
    white: '#fff',
    lightGray: '#f2f2f2',
    gray: '#ddd',
    midgray: '#888',
    blue: '#44749d',
    lightBlue: '#c6d4e1',
    red: '#f52',
    orange: '#f70',
    green: '#1c7'
}

const colors = {
    ...baseColors,
    primary: baseColors.white,
    secondary: baseColors.lightBlue,
    default: baseColors.black,
    info: baseColors.blue,
    success: baseColors.green,
    warning: baseColors.orange,
    error: baseColors.red
}

const scale = [0, 10, 25, 48, 64]
const fontSizes = [64, 32, 25, 19, 18, 14, 12]

export default class Theme extends Component {

    static propTypes = {
        children: PropTypes.node
    };

    static childContextTypes = {
        rebass: PropTypes.object,
        reflexbox: PropTypes.object
    };

    getChildContext() {
        return {
            rebass: {
                colors,
                fontSizes,
                scale,
                Pre: {
                    borderLeftWidth: 0,
                    overflowX: 'auto'
                },
                SectionHeader: {
                    borderBottomColor: colors.lightGray,
                    borderBottomStyle: 'dashed'
                },
                HeadingLink: {
                    textAlign: 'center'
                },
                Badge: {
                    fontWeight: 'lighter'
                },
                Button: {
                    border: `1px solid ${colors.black}`,
                    color: colors.black
                },
                Label: {
                    display: 'block',
                    marginBottom: 10
                },
                NavItem: {
                    fontWeight: 200
                },
                Text: {
                    marginBottom: scale[1],
                    marginTop: scale[1]
                },
                Toolbar: {
                    backgroundColor: colors.white,
                    color: colors.black
                }
            },
            reflexbox: {
                scale
            }
        }
    }

    render() {
        return this.props.children
    }
}
