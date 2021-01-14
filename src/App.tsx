import React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { Container, Stack } from '@chakra-ui/react'

import { Header, Search } from 'components'

const App = (): JSX.Element => (
  <ChakraProvider>
    <Container padding={5} aria-label="container">
      <Stack spacing={5}>
        <Header />
        <Search />
      </Stack>
    </Container>
  </ChakraProvider>
)

export default App
