import React from 'react'
import { render } from '@testing-library/react'

import Search from '../Search'

test('renders the component', () => {
  const { getByLabelText } = render(<Search />)

  const searchElement = getByLabelText(/search/i)

  expect(searchElement).toBeInTheDocument()
})
