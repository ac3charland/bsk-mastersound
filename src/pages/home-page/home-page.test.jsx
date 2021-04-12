import HomePage from './home-page'

const cb = 'home'

describe('HomePage', () => {
    let render

    beforeEach(() => {
        render = (changedProps = {}) => shallow(<HomePage {...changedProps} />)
    })

    it('displays if home page has been visited', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
    })
})
