import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders the app', () => {
  const { getByLabelText } = render(<App />)
  const textElement = getByLabelText(/react pokedex/i)
  expect(textElement).toBeInTheDocument()
})
