import NavBar from './nav-bar'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {MemoryRouter} from 'react-router'
import {Link} from 'react-router-dom'
import {CONTACT_URL} from '../../utils/constants'

const cb = 'navbar'
const mockStore = configureStore([thunk])

describe('NavBar', () => {
    let props, render, mockState, store

    beforeEach(() => {
        props = {}
        mockState = {
            app: {
                isBelowScrollThreshold: true,
            },
        }

        store = mockStore(mockState)

        render = (changedProps = {}) => mount(<MemoryRouter><Provider store={store}><NavBar {...props} {...changedProps} /></Provider></MemoryRouter>)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.${cb}__home`).find(Link).prop('to')).toEqual('/')
        expect(component.find(`.${cb}__link`).find(Link).at(0).prop('to')).toEqual('/audio-engineering')
        expect(component.find(`.${cb}__link`).find(Link).at(1).prop('to')).toEqual('/audio-transfer')
        expect(component.find(`.${cb}__link`).find(Link).at(2).prop('to')).toEqual('/audio-equipment')
        expect(component.find(`.${cb}__link`).find('a').at(3).prop('href')).toEqual(CONTACT_URL)
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
