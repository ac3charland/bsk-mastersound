import Services from './services'
import {MemoryRouter} from 'react-router'

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
        {url: 'https://tinyurl.com/47d4v6uj?subject=Re: Studio Recording', text: 'STUDIO RECORDING'},
        {url: 'https://tinyurl.com/47d4v6uj?subject=Re: Live Recording', text: 'LIVE RECORDING'},
        {url: 'https://tinyurl.com/47d4v6uj?subject=Re: Mixing', text: 'MIXING'},
        {url: 'https://tinyurl.com/47d4v6uj?subject=Re: Mastering', text: 'MASTERING'},
        {url: 'https://tinyurl.com/47d4v6uj?subject=Re: Tape Machine Cleaning', text: 'TAPE MACHINE CLEANING'},
        {url: 'https://tinyurl.com/47d4v6uj?subject=Re: Tape Machine Restoration', text: 'TAPE MACHINE RESTORATION'},
        {url: 'https://tinyurl.com/47d4v6uj?subject=Re: Tape Machine Calibration', text: 'TAPE MACHINE CALIBRATION'},
        {url: 'https://tinyurl.com/47d4v6uj?subject=Re: Turntable Setup', text: 'TURNTABLE SETUP'},
        {url: 'https://tinyurl.com/47d4v6uj?subject=Re: Audio Format Transfer', text: 'AUDIO FORMAT TRANSFER'},
        {url: 'https://tinyurl.com/47d4v6uj?subject=Re: Audio Restoration', text: 'AUDIO RESTORATION'},
    ].forEach((link, i) => {
        it(`has the correct URL for the ${i}th link`, () => {
            const component = render()
            expect(component.find('a').at(i).prop('href')).toEqual(link.url)
            expect(component.find('a').at(i).text()).toEqual(link.text)
        })
    })
})
