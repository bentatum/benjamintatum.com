
import React from 'react'
import routes from './routes'
import { render } from 'react-dom'
import { Html } from './components'
import { Provider } from 'react-redux'
import createStore from './redux/create'
import withScroll from 'scroll-behavior'
import { createMemoryHistory } from 'history'
import { renderToString } from 'react-dom/server'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, RouterContext, match, browserHistory } from 'react-router'

if (typeof document !== 'undefined') {
  let history = withScroll(browserHistory)
  const store = createStore(history)
  history = syncHistoryWithStore(history, store)
  render(
    <Provider store={store}>
      <Router
        history={history}
        routes={routes}
      />
    </Provider>,
    document.getElementById('content')
  )
}

export default ({ assets, path }, callback) => {
  const history = createMemoryHistory()
  const store = createStore(history)
  const location = history.createLocation(path)

  match({ routes, location }, (error, redirectLocation, props) => {
    if (error) {
      throw new Error(error)
    }

    if (redirectLocation) {
      return callback(null, renderToString(<Html assets={assets} />))
    }

    const html = renderToString(
      <Html
        assets={assets}
        component={
          <Provider store={store}>
            <RouterContext {...props} />
          </Provider>
        }
      />
    )
    callback(null, html)
  })
}
