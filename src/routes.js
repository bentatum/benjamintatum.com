import React from 'react'
import * as c from 'components'
import * as Work from 'Work'
import { IndexRedirect, Route } from 'react-router'

export default (
  <Route path='/' component={c.App}>
    <Route path='work' component={c.Work}>
      <Route path=':slug' component={Work.ExhibitPage} />
    </Route>
    <IndexRedirect to='/work' />
    <Route path='articles' component={c.Articles} />
    <Route path='about' component={c.About} />
    <Route path='contact' component={c.Contact} />
    <Route path='*' component={c.Error404} />
  </Route>
)
