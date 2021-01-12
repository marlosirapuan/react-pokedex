import React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { Container, Stack } from '@chakra-ui/react'

const App = (): JSX.Element => (
  <ChakraProvider>
    <Container padding={5} aria-label="React Pokedex">
      <Stack spacing={5}>
        <p>Pokedex</p>
      </Stack>
    </Container>
  </ChakraProvider>
)

export default App
