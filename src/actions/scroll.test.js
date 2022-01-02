import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {setAboveScrollThreshold, setBelowScrollThreshold} from './scroll'

const mockStore = configureStore([thunk])

describe('Scroll Actions', () => {
    let store
    beforeEach(() => {
        store = mockStore()
    })

    it('dispatches correct action when setAboveScrollThreshold is called', () => {
        store.dispatch(setAboveScrollThreshold())
        expect(store.getActions()).toEqual([{type: 'ABOVE_SCROLL_THRESHOLD'}])
    })

    it('dispatches correct action when setBelowScrollThreshold is called', () => {
        store.dispatch(setBelowScrollThreshold())
        expect(store.getActions()).toEqual([{type: 'BELOW_SCROLL_THRESHOLD'}])
    })
})
