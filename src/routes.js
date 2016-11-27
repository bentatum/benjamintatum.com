import React from 'react'
import * as c from 'components'
import { IndexRoute, Route } from 'react-router'

export default (
  <Route path='/' component={c.App}>
    <IndexRoute component={c.Home} />
    <Route path='work' component={c.WorkPage} />
    <Route path='contact' component={c.ContactPage} />
    <Route path='*' component={c.Error404} />
  </Route>
)
