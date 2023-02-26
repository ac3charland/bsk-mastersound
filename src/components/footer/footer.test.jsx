import Footer from './footer'

const cb = 'footer'

describe('Footer', () => {
    let props, render

    beforeEach(() => {
        props = {}

        render = (changedProps = {}) => mount(<Footer {...props} {...changedProps} />)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.${cb}__text`).text()).toEqual('Copyright © 2023 BSK Mastersound')
        expect(component.find(`.${cb}__disclaimer`).text()).toEqual('Site by Alex Charland')
        expect(component.find(`.${cb}__disclaimer a`).prop('href')).toEqual('https://www.alexcharland.com/')
    })
})
