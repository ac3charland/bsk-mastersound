import React from 'react'
import Enzyme, {mount, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})
Object.defineProperty(window, 'scrollTo', {value: () => {}, writable: true})

global.mount = mount
global.shallow = shallow
global.React = React
