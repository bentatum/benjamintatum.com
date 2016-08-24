
import { Navbar, Theme } from 'components'
import { default as Helmet } from 'react-helmet'
import { Input, Textarea, breakpoints } from 'Theme'
import { default as MediaContext } from 'react-media-context'
import { default as React, Component, PropTypes } from 'react'

export default class App extends Component {

  static propTypes = {
    children: PropTypes.node
  };

  static childContextTypes = {
    joifulReactForms: PropTypes.object
  };

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
        <MediaContext
          queries={{
            xsmall: `screen and (max-width: ${breakpoints.small}px)`,
            small: `screen and (min-width: ${breakpoints.small}px)`,
            medium: `screen and (min-width: ${breakpoints.medium}px)`,
            large: `screen and (min-width: ${breakpoints.large}px)`
          }}
        >
          <Theme>
            <div>
              <Navbar />
              {this.props.children}
            </div>
          </Theme>
        </MediaContext>
      </div>
    )
  }
}
