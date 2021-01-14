import React from 'react'
import { shallow } from 'enzyme'

import { Provider } from 'react-redux'
import store from 'store/store'

import ListItem from '../ListItem'

describe('ListItem component', () => {
  it('should be able to render', () => {
    const item = {
      name: 'Pokemon',
      url: 'http://www.image.com/image.png'
    }

    const listItemComponent = shallow(
      <Provider store={store}>
        <ListItem item={item} />
      </Provider>
    )
    expect(listItemComponent).toMatchSnapshot()
  })

  it('should be able to change prop title', () => {
    const item = {
      name: 'Pokemon',
      url: 'http://www.image.com/image.png'
    }

    const listItemComponent = shallow(
      <Provider store={store}>
        <ListItem item={item} />
      </Provider>
    ).find('ListItem')

    expect(listItemComponent.props()).toEqual({
      item: { name: 'Pokemon', url: 'http://www.image.com/image.png' }
    })
  })
})
