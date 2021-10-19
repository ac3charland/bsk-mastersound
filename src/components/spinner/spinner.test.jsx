import Spinner from './spinner'

const cb = 'spinner'
let render

describe('Spinner', () => {

    beforeEach(() => {
        render = (changedProps = {}) => mount(<Spinner {...changedProps}/>)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
    })
})
