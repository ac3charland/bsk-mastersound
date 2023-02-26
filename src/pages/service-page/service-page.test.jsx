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
                'Maury aka Maurice',
                'Connie-Bonnie',
                'Rick',
            ],
            copy: MockCopy,
            title: 'A Loving Take: ',
            background: 'a.jpg',
        }
        mockState = {}

        store = mockStore(mockState)

        render = (changedProps = {}) => mount(<MemoryRouter><Provider store={store}><ServicePage {...props} {...changedProps} /></Provider></MemoryRouter>)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
    })

    it('renders the services passed to it with the correct links', () => {
        const component = render()
        expect(component.find('a').length).toEqual(4)
        expect(component.find('a').at(0).prop('href')).toEqual('https://tinyurl.com/47d4v6uj?subject=Re: Maury aka Maurice')
        expect(component.find('a').at(1).prop('href')).toEqual('https://tinyurl.com/47d4v6uj?subject=Re: Connie-Bonnie')
        expect(component.find('a').at(2).prop('href')).toEqual('https://tinyurl.com/47d4v6uj?subject=Re: Rick')
    })

    it('displays the copy component prop and title', () => {
        const component = render()
        expect(component.find(`.${cb}__copy`).text()).toEqual('A Loving Take: The Big Mouth Hormone Monsters (Mostly) Suck')
    })

    it('correctly passes the provided background image', () => {
        const component = render()
        expect(component.find(`.${cb}`).prop('style')).toHaveProperty('backgroundImage', 'url(a.jpg)')
    })
})
