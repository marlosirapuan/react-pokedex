import React from 'react'
import { render } from '@testing-library/react'

import DarkModeSwitch from '../DarkModeSwitch'

test('renders the component', () => {
  const { getByLabelText } = render(<DarkModeSwitch position="relative" />)

  const darkModeSwitchElement = getByLabelText(/toggle dark mode/i)

  expect(darkModeSwitchElement).toBeInTheDocument()
})
