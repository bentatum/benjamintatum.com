
const { REDUX_PREFIX } = process.env
import { AWAIT_MARKER } from 'redux-await'
// import { default as ApiClient } from 'apiClient'
export const SUBMIT_LEAD = `${REDUX_PREFIX}/createLead`

// const client = new ApiClient()

export function submitLead ({ name, email, phone, message }) {
  return {
    type: SUBMIT_LEAD,
    AWAIT_MARKER
  }
}
