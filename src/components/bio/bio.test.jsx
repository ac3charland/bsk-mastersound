import Bio from './bio'

const cb = 'bio'

describe('Bio', () => {
    let render

    beforeEach(() => {
        render = (changedProps = {}) => mount(<Bio {...changedProps} />)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
    })
})
