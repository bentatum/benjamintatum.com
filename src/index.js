
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './redux/create'
import { App, Html } from './components'
import { renderToString } from 'react-dom/server'
import { BrowserRouter, ServerRouter, createServerRenderContext } from 'react-router'

const store = createStore()

if (typeof document !== 'undefined') {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('content')
  )
}

export default ({ assets, path }, callback) => {
  const context = createServerRenderContext()

  const result = context.getResult()

  if (result.redirect) {
    return callback(null, renderToString(<Html assets={assets} />))
  }

  callback(null, renderToString(
    <Html
      assets={assets}
      component={
        <Provider store={store}>
          <ServerRouter location={path} context={context}>
            <App />
          </ServerRouter>
        </Provider>
      } />
  ))
}
