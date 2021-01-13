import React from 'react'
import { shallow } from 'enzyme'

import List from '../List'

describe('List component', () => {
  it('should be able to render', () => {
    const listComponent = shallow(<List />)
    expect(listComponent).toMatchSnapshot()
  })
})
