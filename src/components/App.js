import '../style.scss'
import React, { PropTypes } from 'react'
import { Theme } from '.'
import Helmet from 'react-helmet'

const App = ({ children }) =>
    <div>
        <Helmet
            link={[
                { rel: 'stylesheet', href: '/style.css' },
                { rel: 'shortcut icon', href: '/favicon.png' },
                { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Tangerine' }
            ]}
            meta={[
                { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, target-densityDpi=device-dpi' }
            ]}
            title="Ann Arbor Pictures"
        />
        <Theme>
            {children}
        </Theme>
    </div>

App.propTypes = {
    children: PropTypes.node
}

export default App
