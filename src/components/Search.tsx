import React from 'react'
import { FormControl, Input } from '@chakra-ui/react'

const SearchInput = (): JSX.Element => {
  return (
    <div aria-label="search">
      <FormControl>
        <Input placeholder="Entre com um Pokemon para pesquisar" size="lg" />
      </FormControl>
    </div>
  )
}

export default SearchInput
