import React from 'react'
import * as views from './components'
import { IndexRoute, Route } from 'react-router'

export default (
    <Route
        component={views.App}
        path="/"
    >
        <IndexRoute component={views.Home}/>
        <Route
            component={views.BetterReactSpinKit}
            path="better-react-spinkit"
        />
        <Route
            component={views.Contact}
            path="contact"
        />
        <Route
            component={views.ContactFailure}
            path="contact/failure"
        />
        <Route
            component={views.ContactSuccess}
            path="contact/success"
        />
        <Route
            component={views.PortfolioContainer}
            path="portfolio"
        />
        <Route
            component={views.ReduxSimpleStorage}
            path="redux-simplestorage"
        />
        <Route
            component={views.Error404}
            path="*"
        />
    </Route>
)
