import HomePage from './home-page'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {MemoryRouter} from 'react-router-dom'

const cb = 'home'
const mockStore = configureStore([thunk])

describe('HomePage', () => {
    let render, props, mockState, store

    beforeEach(() => {
        props = {}
        mockState = {
            app: {
                isBelowScrollThreshold: true,
            },
        }

        store = mockStore(mockState)

        render = (changedProps = {}) => mount(<MemoryRouter><Provider store={store}><HomePage {...props} {...changedProps} /></Provider></MemoryRouter>)
    })

    it('displays if home page has been visited', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
    })
})
