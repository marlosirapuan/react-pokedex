import React from 'react'
import { render } from '@testing-library/react'

import List from '../List'

test('renders the component', () => {
  const { getByLabelText } = render(<List />)

  const listElement = getByLabelText(/list/i)

  expect(listElement).toBeInTheDocument()
})
