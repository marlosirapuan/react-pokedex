import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import store from 'store/store'
import App from './App'

test('renders the app', () => {
  const { getByLabelText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  const containerAppElement = getByLabelText(/container/i)
  const containerHeaderElement = getByLabelText(/header/i)
  const containerSearchElement = getByLabelText(/search/i)

  expect(containerAppElement).toBeInTheDocument()
  expect(containerHeaderElement).toBeInTheDocument()
  expect(containerSearchElement).toBeInTheDocument()
})
