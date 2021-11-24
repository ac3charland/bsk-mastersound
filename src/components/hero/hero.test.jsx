import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import Hero from './hero'
import {Provider} from 'react-redux'

const cb = 'hero'
const mockStore = configureStore([thunk])

describe('Hero', () => {
    let render, mockState, store
    
    beforeEach(() => {
        mockState = {
            app: {
                isBelowScrollThreshold: true,
            },
        }
        store = mockStore(mockState)

        render = (changedProps = {}) => mount(<Provider store={store}><Hero {...changedProps} /></Provider>)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
    })
})
