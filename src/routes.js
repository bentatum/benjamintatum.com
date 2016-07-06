import React from 'react'
import * as v from './components'
import { IndexRoute, Route } from 'react-router'

export default (
  <Route component={v.App} path='/'>
    <IndexRoute component={v.Home} />
    <Route
      component={v.PortfolioPage}
      path='portfolio'
    />
    <Route
      component={v.PortfolioItemPage}
      path='portfolio/:slug'
    />
    <Route
      component={v.Resume}
      path='resume'
    />
    <Route
      component={v.Error404}
      path='*'
    />
  </Route>
)
