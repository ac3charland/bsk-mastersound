import NavBar from './nav-bar'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const cb = 'navbar'
const mockStore = configureStore([thunk])

describe('NavBar', () => {
    let props, render, mockState, store

    beforeEach(() => {
        props = {}
        mockState = {
            scroll: {
                isBelowScrollThreshold: true,
            },
        }

        store = mockStore(mockState)

        render = (changedProps = {}) => mount(<Provider store={store}><NavBar {...props} {...changedProps} /></Provider>)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.${cb}__home`).prop('href')).toEqual('/')
        expect(component.find(`.${cb}__link`).prop('href')).toEqual('/secondary')
    })

    it('toggles between open and closed', () => {
        const component = render()

        expect(component.find('button.closed').length).toEqual(1)
        expect(component.find('button.open').length).toEqual(0)
        expect(component.find('.fa-bars').length).toEqual(1)
        expect(component.find('.fa-times').length).toEqual(0)

        component.find('.icon').simulate('click')
        
        expect(component.find('button.closed').length).toEqual(0)
        expect(component.find('button.open').length).toEqual(1)
        expect(component.find('.fa-bars').length).toEqual(0)
        expect(component.find('.fa-times').length).toEqual(1)
    })
})
