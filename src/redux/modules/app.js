
import { breakpoints } from 'Theme'
const { REDUX_PREFIX } = process.env
import { AWAIT_MARKER } from 'redux-await'
import { default as ApiClient } from 'apiClient'
export const SUBMIT_LEAD = `${REDUX_PREFIX}/createLead`
import { getScreenSize } from 'small-medium-large-xlarge'
export const SET_SCREEN_SIZE = `${REDUX_PREFIX}/setScreenSize`

const client = new ApiClient()

const intitialState = {
  errors: null,
  height: 0,
  width: 0
}

export function reducer (state = intitialState, action) {
  switch (action.type) {
    case SET_SCREEN_SIZE:
      return {
        ...state,
        ...action.payload,
        screenSize: getScreenSize(action.payload.width, breakpoints)
      }
    default:
      return state
  }
}

export function setScreenSize ({ height, width }) {
  return {
    type: SET_SCREEN_SIZE,
    payload: {
      height,
      width
    }
  }
}

export function submitLead ({ name, email, phone, message }) {
  return {
    type: SUBMIT_LEAD,
    AWAIT_MARKER,
    payload: {
      [SUBMIT_LEAD]: client.post({
        data: `
          mutation {
            createLead(
              name: \"${name}\",
              email: \"${email}\",
              phone: \"noop\",
              issue: \"${message}"\
            ) { id, name }
          }
        `
      })
    }
  }
}
