import React from 'react'
import { render } from 'react-dom'
import { renderToString } from 'react-dom/server'
import { createHistory, createMemoryHistory } from 'history'
import { Router, RouterContext, match } from 'react-router'
import routes from './routes'
import { Html } from './components'
import createStore from './redux/create'
import { Provider } from 'react-redux'

if (typeof document !== 'undefined') {
    const store = createStore()
    render(
        <Provider store={store}>
            <Router
                history={createHistory()}
                routes={routes}
            />
        </Provider>,
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
