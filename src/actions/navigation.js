import {SET_OFF_HOME_PAGE} from '../utils/constants'

export function setOffHomePage(value) {
    return dispatch => {
        dispatch({type: SET_OFF_HOME_PAGE, data: {value}})
    }
}
