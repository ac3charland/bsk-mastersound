import {ABOVE_SCROLL_THRESHOLD, BELOW_SCROLL_THRESHOLD} from '../utils/constants'

export function setAboveScrollThreshold() {
    return dispatch => {
        dispatch({type: ABOVE_SCROLL_THRESHOLD})
    }
}

export function setBelowScrollThreshold() {
    return dispatch => {
        dispatch({type: BELOW_SCROLL_THRESHOLD})
    }
}
