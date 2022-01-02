import {app} from './app'
import {ABOVE_SCROLL_THRESHOLD, BELOW_SCROLL_THRESHOLD, SET_OFF_HOME_PAGE} from '../utils/constants'

describe('App Reducer', () => {
    let state

    beforeEach(() => {
        state = {a: 'b'}
    })

    it('sets isBelowScrollThreshold flag to true when BELOW_app_THRESHOLD is received', () => {
        const newState = app(state, {type: BELOW_SCROLL_THRESHOLD})
        expect(newState).toEqual({a: 'b', isBelowScrollThreshold: true})
    })

    it('sets isBelowScrollThreshold flag to false when ABOVE_SCROLL_THRESHOLD is received', () => {
        const newState = app(state, {type: ABOVE_SCROLL_THRESHOLD})
        expect(newState).toEqual({a: 'b', isBelowScrollThreshold: false})
    })

    it('handles unknown action', () => {
        const newState = app(state, {type: 'whatever'})
        expect(newState).toEqual({a: 'b'})
    })

    it('handles setOffHomePage when passed true', () => {
        const newState = app(state, {type: SET_OFF_HOME_PAGE, data: {value: true}})
        expect(newState).toEqual({a: 'b', isOffHomePage: true})
    })

    it('handles setOffHomePage when passed false', () => {
        const newState = app(state, {type: SET_OFF_HOME_PAGE, data: {value: false}})
        expect(newState).toEqual({a: 'b', isOffHomePage: false})
    })

    it('handles empty action', () => {
        const newState = app(state)
        expect(newState).toEqual({a: 'b'})
    })
})
