import {SET_OFF_HOME_PAGE, ABOVE_SCROLL_THRESHOLD, BELOW_SCROLL_THRESHOLD} from '../utils/constants'

export function app(state = {}, action = {}) {
    switch(action.type) {
        case ABOVE_SCROLL_THRESHOLD:
            return {...state, isBelowScrollThreshold: false}
        case BELOW_SCROLL_THRESHOLD:
            return {...state, isBelowScrollThreshold: true}
        case SET_OFF_HOME_PAGE:
            return {...state, isOffHomePage: action.data.value}
        default:
            return state
    }
}
