import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders the app', () => {
  const { getByLabelText } = render(<App />)
  const containerAppElement = getByLabelText(/container/i)
  const containerHeaderElement = getByLabelText(/header/i)
  const containerSearchElement = getByLabelText(/search/i)

  expect(containerAppElement).toBeInTheDocument()
  expect(containerHeaderElement).toBeInTheDocument()
  expect(containerSearchElement).toBeInTheDocument()
})
