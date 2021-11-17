import ServicePage from './service-page'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {MemoryRouter} from 'react-router-dom'

const cb = 'service'
const mockStore = configureStore([thunk])
const MockCopy = () => <div>The Big Mouth Hormone Monsters (Mostly) Suck</div> 

describe('ServicePage', () => {
    let props, render, mockState, store

    beforeEach(() => {
        props = {
            services: [
                'Morrie',
                'Connie',
                'Rick',
                'Mona',
                'Gavin',
                'Tyler',
            ],
            copy: MockCopy,
        }
        mockState = {}

        store = mockStore(mockState)

        render = (changedProps = {}) => mount(<MemoryRouter><Provider store={store}><ServicePage {...props} {...changedProps} /></Provider></MemoryRouter>)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
    })

    // TODO Check services length & url
    // TODO Check Copy component prop gets rendered
    // TODO Check that title gets displayed correctly
    // TODO Check that background image works correctly
})
