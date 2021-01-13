import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import store from 'store/store'

import ListItem from '../ListItem'

test('renders the component', () => {
  const item = {
    name: 'Pokemon',
    url: 'http://www.image.com/image.png'
  }

  const { getByLabelText } = render(
    <Provider store={store}>
      <ListItem item={item} />
    </Provider>
  )

  const listElement = getByLabelText(/list item/i)

  expect(listElement).toBeInTheDocument()
})
