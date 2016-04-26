import React, { Component, PropTypes } from 'react'
import { Theme } from 'components'
import { default as Helmet } from 'react-helmet'
import { Container } from 'rebass'
import { connect } from 'react-redux'
import { setScreenSize } from 'redux/modules/app'
import joifulReactForms from 'JoifulReactFormsOverrides'
import { colors } from 'components/Theme/Theme'

@connect(() => ({}), { screenSize: setScreenSize })

export default class App extends Component {

  static propTypes = {
    children: PropTypes.node,
    screenSize: PropTypes.func.isRequired
  };

  static childContextTypes = {
    betterReactSpinkit: PropTypes.object,
    joifulReactForms: PropTypes.object
  };

  getChildContext () {
    return {
      betterReactSpinkit: {
        color: colors.black,
        size: 50
      },
      joifulReactForms: {
        JoifulInput: {
          types: joifulReactForms.types
        }
      }
    }
  }

  componentDidMount () {
    // 🌎
    const { screenSize } = this.props
    window.addEventListener(
      'resize',
      () => screenSize(
        window.innerHeight || $(window).height(),
        window.innerWidth || $(window).width()
      )
    )
    screenSize(
      window.innerHeight || $(window).height(),
      window.innerWidth || $(window).width()
    )
  }

  render () {
    const { children } = this.props
    return (
      <div>
        <Helmet
          link={[
            /* eslint-disable max-len */
            { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/normalize/4.0.0/normalize.min.css' },
            { rel: 'stylesheet', href: '/style.css' },
            { rel: 'shortcut icon', href: '/favicon.png' },
            { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Oswald:400,700,300' }
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
          <Container
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: 425,
              width: '100%'
            }}
          >
            {children}
          </Container>
        </Theme>
      </div>
    )
  }
}
