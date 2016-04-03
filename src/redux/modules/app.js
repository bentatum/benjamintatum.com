import ApiClient from '../../apiClient'
import { AWAIT_MARKER } from 'redux-await'
const SCREEN_DIMENSIONS = 'a2pix/SCREEN_DIMENSIONS_CHANGE'
const SUBMIT_LEAD = 'a2pix/SUBMIT_LEAD'
const client = new ApiClient()

const breakpoints = {
    small: 425,
    medium: 768,
    large: 1024
}

export const constants = {
    breakpoints
}

const intitialState = {
    height: 0,
    width: 0
}

export function setScreenSize(height, width) {
    return {
        type: SCREEN_DIMENSIONS,
        payload: {
            height,
            width
        }
    }
}

export function submitLead({ name, email, phone }) {
    return {
        type: SUBMIT_LEAD,
        AWAIT_MARKER,
        payload: {
            results: client.post({
                data: `
                    mutation {
                        createLead(
                            id: \"109\",
                            name: \"${name}\",
                            email: \"${email}\",
                            phone: \"${phone}\"
                        ) { id, name }
                    }
                `
            })
        }
    }
}

export function reducer(state = intitialState, action) {
    switch (action.type) {
    case SCREEN_DIMENSIONS:
        return { ...state, ...action.payload }
    default:
        return state
    }
}
