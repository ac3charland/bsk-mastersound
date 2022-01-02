import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {setOffHomePage} from './navigation'

const mockStore = configureStore([thunk])

describe('Navigation Actions', () => {
    let store
    beforeEach(() => {
        store = mockStore()
    })

    it('dispatches correct action when setAboveScrollThreshold is called', () => {
        store.dispatch(setOffHomePage(false))
        expect(store.getActions()).toEqual([{type: 'SET_ON_HOME_PAGE', data: {value: false}}])
    })
})
