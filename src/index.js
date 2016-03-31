import React from 'react'
import { render } from 'react-dom'
import { renderToString } from 'react-dom/server'
import { createHistory, createMemoryHistory } from 'history'
import { Router, RouterContext, match } from 'react-router'
import routes from './routes'
import { Html } from './components'

if (typeof document !== 'undefined') {
    const history = createHistory()
    render(
        <Router history={history} routes={routes}/>,
        document.getElementById('content')
    )
}

export default ({ assets, path }, callback) => {
    const history = createMemoryHistory()
    const location = history.createLocation(path)

    match({ routes, location }, (error, redirectLocation, props) => {
        const html = renderToString(
            <Html
                assets={assets}
                component={<RouterContext {...props}/>}
            />
        )
        callback(null, html)
    })
}
