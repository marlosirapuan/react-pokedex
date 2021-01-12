import React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { Container, Stack } from '@chakra-ui/react'

const App = (): JSX.Element => (
  <ChakraProvider>
    <Container padding={5}>
      <Stack spacing={5}>
        <p>Chakra</p>
      </Stack>
    </Container>
  </ChakraProvider>
)

export default App
