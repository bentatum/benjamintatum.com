import { default as React, Component, PropTypes } from 'react'
import { Navbar, Theme } from 'components'
import { default as Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { setScreenSize } from 'redux/modules/app'

@connect(() => ({}), { setScreenSize })

export default class App extends Component {

  static propTypes = {
    children: PropTypes.node,
    setScreenSize: PropTypes.func.isRequired
  };

  componentDidMount () {
    const getHeight = () => window.innerHeight || $(window).height()
    const getWidth = () => window.innerWidth || $(window).width()
    const _setScreenSize = () => this.props.setScreenSize(getHeight(), getWidth())
    window.addEventListener('resize', _setScreenSize)
    _setScreenSize()
  }

  render () {
    return (
      <div>
        <Helmet
          link={[
            /* eslint-disable max-len */
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
            /* eslint-enable max-len */
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
