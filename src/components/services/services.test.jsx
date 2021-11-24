import Services from './services'
import {MemoryRouter} from 'react-router'
import {Link} from 'react-router-dom'

const cb = 'services'

describe('Services', () => {
    let props, render

    beforeEach(() => {
        props = {}

        render = (changedProps = {}) => mount(<MemoryRouter><Services {...props} {...changedProps} /></MemoryRouter>)
    })

    it('renders without crashing', () => {
        const component = render()
        expect(component.find(`.${cb}`).length).toEqual(1)
        expect(component.find(`.${cb}`).prop('tabIndex')).toEqual(-1)
    })

    ;[
        {url: '/contact?subject=Studio Recording', text: 'STUDIO RECORDING'},
        {url: '/contact?subject=Live Recording', text: 'LIVE RECORDING'},
        {url: '/contact?subject=Mixing', text: 'MIXING'},
        {url: '/contact?subject=Mastering', text: 'MASTERING'},
        {url: '/contact?subject=Tape Machine Cleaning', text: 'TAPE MACHINE CLEANING'},
        {url: '/contact?subject=Tape Machine Restoration', text: 'TAPE MACHINE RESTORATION'},
        {url: '/contact?subject=Tape Machine Calibration', text: 'TAPE MACHINE CALIBRATION'},
        {url: '/contact?subject=Turntable Setup', text: 'TURNTABLE SETUP'},
        {url: '/contact?subject=Audio Format Transfer', text: 'AUDIO FORMAT TRANSFER'},
        {url: '/contact?subject=Audio Restoration', text: 'AUDIO RESTORATION'},
    ].forEach((link, i) => {
        it(`has the correct URL for the ${i}th link`, () => {
            const component = render()
            expect(component.find(Link).at(i).prop('to')).toEqual(link.url)
            expect(component.find(Link).at(i).text()).toEqual(link.text)
        })
    })
})
