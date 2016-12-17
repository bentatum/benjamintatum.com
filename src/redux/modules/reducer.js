
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as awaitReducer } from 'redux-await'
import { reducer as app } from 'redux/modules/app'
import { reducer as blog } from 'redux/modules/blog'

export default combineReducers({
  app,
  blog,
  await: awaitReducer,
  routing: routerReducer
})
