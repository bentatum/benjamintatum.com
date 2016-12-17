
import client from 'client'
const { REDUX_PREFIX } = process.env
import { AWAIT_MARKER } from 'redux-await'
export const GET_POSTS = `${REDUX_PREFIX}/getPosts`

const initialState = {
  posts: []
}

export function reducer (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload[action.type].Items
      }
    default:
      return state
  }
}

export function getPosts () {
  return {
    type: GET_POSTS,
    AWAIT_MARKER,
    payload: {
      [GET_POSTS]: client.get('get-posts')
    }
  }
}
