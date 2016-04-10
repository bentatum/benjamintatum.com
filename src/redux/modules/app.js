import ApiClient from '../../apiClient'
import { AWAIT_MARKER } from 'redux-await'
const SCREEN_DIMENSIONS = 'benjamintatum.com/SCREEN_DIMENSIONS_CHANGE'
const SUBMIT_LEAD = 'benjamintatum.com/SUBMIT_LEAD'
const client = new ApiClient()
import { EventTypes } from 'redux-segment'

const BREAKPOINTS = {
    small: 425,
    medium: 768,
    large: 1024
}

export const constants = {
    BREAKPOINTS,
    SUBMIT_LEAD
}

const intitialState = {
    errors: null,
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

export function createLead({ name, email, phone, issue }) {
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
                            phone: \"${phone}\",
                            issue: \"${issue}"\
                        ) { id, name }
                    }
                `
            })
        },
        meta: {
            analytics: {
                eventType: EventTypes.track,
                eventPayload: {
                    datetime: new Date(),
                    isMobile:
                        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
                            .test(navigator.userAgent)
                },
            }
        }
    }
}

export function reducer(state = intitialState, action) {
    switch (action.type) {
    case SUBMIT_LEAD:
        return {
            ...state,
            errors: action.payload[SUBMIT_LEAD].errors
        }
    case SCREEN_DIMENSIONS:
        return { ...state, ...action.payload }
    default:
        return state
    }
}
