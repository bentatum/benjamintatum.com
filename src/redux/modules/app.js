
const { REDUX_PREFIX } = process.env
// import { AWAIT_MARKER } from 'redux-await'
export const TOGGLE_DRAWER = `${REDUX_PREFIX}/toggleDrawer`
import { LOCATION_CHANGE } from 'react-router-redux'

const initialState = {
  drawer: false
}

export function reducer (state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case LOCATION_CHANGE:
      return {
        ...state,
        drawer: false
      }
    case TOGGLE_DRAWER:
      return {
        ...state,
        drawer: action.payload
      }
    default:
      return state
  }
}

export function toggleDrawer (payload = false) {
  return {
    payload,
    type: TOGGLE_DRAWER
  }
}
