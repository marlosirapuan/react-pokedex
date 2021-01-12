import React, { useState, useCallback } from 'react'
import { FormControl, Input } from '@chakra-ui/react'

import { List } from 'components'

const SearchInput = (): JSX.Element => {
  const [filterPokemon, setFilterPokemon] = useState('')

  const handleInputEntered = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void =>
      setFilterPokemon(e.target.value),
    []
  )

  return (
    <div aria-label="search">
      <FormControl marginBottom={5}>
        <Input
          placeholder="Entre com um Pokemon para pesquisar"
          size="lg"
          onChange={handleInputEntered}
        />
      </FormControl>

      <List filter={filterPokemon} />
    </div>
  )
}

export default SearchInput
