import {scroll} from './scroll'
import {ABOVE_SCROLL_THRESHOLD, BELOW_SCROLL_THRESHOLD} from '../utils/constants'

describe('App Reducer', () => {
    let state

    beforeEach(() => {
        state = {a: 'b'}
    })

    it('sets isBelowScrollThreshold flag to true when BELOW_SCROLL_THRESHOLD is received', () => {
        const newState = scroll(state, {type: BELOW_SCROLL_THRESHOLD})
        expect(newState).toEqual({a: 'b', isBelowScrollThreshold: true})
    })

    it('sets isBelowScrollThreshold flag to false when ABOVE_SCROLL_THRESHOLD is received', () => {
        const newState = scroll(state, {type: ABOVE_SCROLL_THRESHOLD})
        expect(newState).toEqual({a: 'b', isBelowScrollThreshold: false})
    })

    it('handles unknown action', () => {
        const newState = scroll(state, {type: 'whatever'})
        expect(newState).toEqual({a: 'b'})
    })

    it('handles empty action', () => {
        const newState = scroll(state)
        expect(newState).toEqual({a: 'b'})
    })
})
