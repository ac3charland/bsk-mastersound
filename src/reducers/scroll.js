import {ABOVE_SCROLL_THRESHOLD, BELOW_SCROLL_THRESHOLD} from '../utils/constants'

export function scroll(state = {}, action = {}) {
    switch(action.type) {
        case ABOVE_SCROLL_THRESHOLD:
            return {...state, isBelowScrollThreshold: false}
        case BELOW_SCROLL_THRESHOLD:
            return {...state, isBelowScrollThreshold: true}
        default:
            return state
    }
}
