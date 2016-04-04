import { Component, PropTypes } from 'react'

const baseColors = {
    black: '#111',
    white: '#fff',
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
    primary: baseColors.black,
    secondary: baseColors.lightBlue,
    default: baseColors.black,
    info: baseColors.blue,
    success: baseColors.green,
    warning: baseColors.orange,
    error: baseColors.red
}

const scale = [0, 10, 25, 48, 64]
const fontSizes = [64, 40, 33, 19, 18, 14, 12]

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
                Badge: {
                    fontWeight: 'lighter'
                },
                Button: {
                    backgroundColor: colors.primary
                },
                Label: {
                    display: 'block',
                    marginBottom: 10
                },
                NavItem: {
                    fontWeight: 100
                },
                Text: {
                    marginTop: scale[1]
                },
                Toolbar: {
                    backgroundColor: baseColors.black,
                    color: baseColors.white
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
