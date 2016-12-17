
import React from 'react'
import Helmet from 'react-helmet'
import { breakpoints } from 'theme'
import { Match, Miss } from 'react-router'
import MediaContext from 'react-media-context'
import { BlogPage, Error404Page, PortfolioPage, HomePage, Theme, ContactPage } from 'components'

export default props =>
  <div>
    <Helmet
      link={[
        { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/normalize/4.0.0/normalize.min.css' },
        { rel: 'stylesheet', href: '/style.css' },
        { rel: 'shortcut icon', href: '/favicon.png' }
      ]}
      meta={[
        { name: 'description', content: 'Software application and web developer located in Ann Arbor, Michigan and available for hire. Services include product design, development & deployment.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
        { name: 'charset', content: 'UTF-8' }
      ]}
      script={[
        { src: '//cdnjs.cloudflare.com/ajax/libs/lodash.js/4.7.0/lodash.min.js' }
      ]}
      title='Passionate Leader & Full Stack Software Developer in Ann Arbor, Michigan'
      titleTemplate='Benjamin Tatum - %s' />
    <MediaContext
      queries={{
        xsmall: `screen and (max-width: ${breakpoints.small}px)`,
        small: `screen and (min-width: ${breakpoints.small}px)`,
        medium: `screen and (min-width: ${breakpoints.medium}px)`,
        large: `screen and (min-width: ${breakpoints.large}px)`
      }}>
      <Theme>
        <Match pattern='/' exactly component={HomePage} />
        <Match pattern='/blog' component={BlogPage} />
        <Match pattern='/work' component={PortfolioPage} />
        <Match pattern='/contact' component={ContactPage} />
        <Miss component={Error404Page} />
      </Theme>
    </MediaContext>
  </div>
