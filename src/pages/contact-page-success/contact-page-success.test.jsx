import ContactPage from './contact-page-success'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

const cb = 'contact-success'
const mockStore = configureStore([thunk])

describe('ContactPage', () => {
    let props, render, mockState, store

    beforeEach(() => {
        props = {}
        mockState = {}

        store = mockStore(mockState)

        render = (changedProps = {}) => mount(<Provider store={store}><ContactPage {...props} {...changedProps} /></Provider>)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
    })
})
