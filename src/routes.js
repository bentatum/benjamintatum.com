import React from 'react'
import * as c from 'components'
import * as Work from 'Work'
import { IndexRoute, Route } from 'react-router'

export default (
  <Route path='/' component={c.App}>
    <IndexRoute component={c.Home} />
    <Route path='work' component={c.Work}>
      <Route path=':slug' component={Work.ExhibitPage} />
    </Route>
    <Route path='contact' component={c.ContactPage} />
    <Route path='*' component={c.Error404} />
  </Route>
)
