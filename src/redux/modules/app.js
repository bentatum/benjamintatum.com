const SCREEN_DIMENSIONS = 'a2pix/SCREEN_DIMENSIONS_CHANGE'

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

export default function reducer(state = intitialState, action) {
    switch (action.type) {
    case SCREEN_DIMENSIONS:
        return { ...state, ...action.payload }
    default:
        return state
    }
}

export function screenDimensions(height, width) {
    return {
        type: SCREEN_DIMENSIONS,
        payload: {
            height,
            width
        }
    }
}
