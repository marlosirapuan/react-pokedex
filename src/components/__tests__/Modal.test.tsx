import React from 'react'
import { shallow } from 'enzyme'

import Modal from '../Modal'

describe('Modal component', () => {
  it('should be able to render', () => {
    const modalComponent = shallow(<Modal />)
    expect(modalComponent).toMatchSnapshot()
  })

  it('should be able to change prop title', () => {
    const props = {
      title: 'test'
    }
    const modalComponent = shallow(<Modal {...props} />).find('ModalHeader')
    expect(modalComponent.props().children).toEqual('test')
  })
})
