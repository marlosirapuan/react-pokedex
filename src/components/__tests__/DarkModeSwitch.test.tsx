import React from 'react'
import { shallow } from 'enzyme'

import DarkModeSwitch from '../DarkModeSwitch'

describe('DarkModeSwitch component', () => {
  it('should be able to render', () => {
    const darkModeComponent = shallow(<DarkModeSwitch position="relative" />)
    expect(darkModeComponent).toMatchSnapshot()
  })

  it('should be able to change prop position', () => {
    const darkModeComponent = shallow(<DarkModeSwitch position="absolute" />)
    expect(darkModeComponent.props().position).toEqual('absolute')
  })
})
