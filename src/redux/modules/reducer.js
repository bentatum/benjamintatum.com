
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as awaitReducer } from 'redux-await'
import { reducer as app } from 'redux/modules/app'

export default combineReducers({
  app,
  await: awaitReducer,
  routing: routerReducer
})
