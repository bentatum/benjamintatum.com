import React from 'react'
import * as c from './components'
import { IndexRedirect, Route } from 'react-router'

export default (
  <Route path='/' component={c.App}>
    <Route path='work' component={c.Work}>
      <Route path=':slug' component={c.Exhibit} />
    </Route>
    <IndexRedirect to='/work' />
    <Route path='articles' component={c.Articles} />
    <Route path='about' component={c.About} />
    <Route path='contact' component={c.Contact} />
    <Route path='*' component={c.Error404} />
  </Route>
)
