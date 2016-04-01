import '../style.scss'
import React, { PropTypes } from 'react'
import { Theme, TopBar } from '.'
import Helmet from 'react-helmet'
import { Container } from 'rebass'

const App = ({ children }) =>
    <div>
        <Helmet
            link={[
                /* eslint-disable max-len */
                { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/normalize/4.0.0/normalize.min.css' },
                { rel: 'stylesheet', href: '/style.css' },
                { rel: 'shortcut icon', href: '/favicon.png' },
                { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Tangerine' }
            ]}
            meta={[
                { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, target-densityDpi=device-dpi' }
                /* eslint-enable max-len */
            ]}
            title="Ann Arbor Pictures"
        />
        <Theme>
            <div>
                <TopBar/>
                <Container>
                    {children}
                </Container>
            </div>
        </Theme>
    </div>

App.propTypes = {
    children: PropTypes.node
}

export default App
