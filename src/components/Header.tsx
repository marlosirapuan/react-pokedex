import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'

import DarkModeSwitch from 'components/DarkModeSwitch'

const Header = (): JSX.Element => {
  return (
    <Box aria-label="header">
      <Flex justifyContent="space-between" marginBottom={5}>
        <Heading>Pokedex</Heading>
        <DarkModeSwitch position="relative" />
      </Flex>
    </Box>
  )
}

export default Header
