import React from 'react'
import { render } from '@testing-library/react'

import Modal from '../Modal'

test('renders the component', () => {
  const { getByLabelText } = render(<Modal />)

  const modalElement = getByLabelText(/modal/i)

  expect(modalElement).toBeInTheDocument()
})
