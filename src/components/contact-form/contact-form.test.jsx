import ContactForm from './contact-form'

const cb = 'form'

describe('ContactForm', () => {
    let render, props

    beforeEach(() => {
        props = {}
        render = (changedProps = {}) => mount(<ContactForm {...props} {...changedProps} />)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
    })

    it('pre-populates subject field if passed in props', () => {
        props.subjectPrefill = 'Slartibartfast'
        const component = render()
        expect(component.find(`#${cb}__subject`).prop('value')).toEqual('Slartibartfast')
    })

})
