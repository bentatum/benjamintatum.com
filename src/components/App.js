
import { debounce } from 'lodash'
import { connect } from 'react-redux'
import { Input, Textarea } from 'Theme'
import { Navbar, Theme } from 'components'
import { default as Helmet } from 'react-helmet'
import { setScreenSize } from 'redux/modules/app'
import { default as React, Component, PropTypes } from 'react'

@connect(() => ({}), { setScreenSize })
export default class App extends Component {

  static propTypes = {
    children: PropTypes.node,
    setScreenSize: PropTypes.func.isRequired
  };

  static childContextTypes = {
    joifulReactForms: PropTypes.object
  };

  constructor () {
    super()
    this.setScreenSize = debounce(this.setScreenSize.bind(this), 100)
  }

  componentDidMount () {
    this.setScreenSize()
    window.addEventListener('resize', this.setScreenSize)
  }

  setScreenSize () {
    const height = () => window.innerHeight || $(window).height()
    const width = () => window.innerWidth || $(window).width()
    this.props.setScreenSize({ height: height(), width: width() })
  }

  getChildContext () {
    return {
      joifulReactForms: {
        Input: {
          types: {
            text: Input,
            textarea: Textarea
          }
        }
      }
    }
  }

  render () {
    return (
      <div>
        <Helmet
          link={[
            { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/normalize/4.0.0/normalize.min.css' },
            { rel: 'stylesheet', href: '/style.css' },
            { rel: 'shortcut icon', href: '/favicon.png' }
          ]}
          meta={[
            { name: 'description', content: 'Software application and web developer located in Ann Arbor, Michigan and available for remote hire. Services include product design, development & deployment.' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' }
          ]}
          script={[
            { src: '//code.jquery.com/jquery-2.1.4.min.js' },
            { src: '//cdnjs.cloudflare.com/ajax/libs/lodash.js/4.7.0/lodash.min.js' }
          ]}
          title='Software Development'
          titleTemplate='Benjamin Tatum - %s'
        />
        <Theme>
          <div>
            <Navbar />
            {this.props.children}
          </div>
        </Theme>
      </div>
    )
  }
}
