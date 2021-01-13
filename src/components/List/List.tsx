import React, { useState, useEffect, useMemo } from 'react'

import ListItem from './ListItem'
import api from 'api'
import { PokemonResults, PokemonResultItem } from 'typings'

import {
  HStack,
  Skeleton,
  SimpleGrid,
  Alert,
  AlertIcon,
  useToast,
  useBreakpointValue
} from '@chakra-ui/react'

const LIMIT = 2000
const LIMIT_PER_PAGE = 18

type ListProps = {
  filter?: string
}

const List = ({ filter }: ListProps): JSX.Element => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [pokemonResult, setPokemonResult] = useState<PokemonResults>(
    {} as PokemonResults
  )

  const toast = useToast()

  const fetchPokemons = async (): Promise<void> => {
    try {
      setLoading(true)
      setError(null)
      const { data } = await api.get<PokemonResults>(`/pokemon?limit=${LIMIT}`)
      setPokemonResult(data)
    } catch (error) {
      setError(error.toString())
    } finally {
      setLoading(false)
    }
  }

  const pokemonResultsMemo = useMemo(() => {
    if (!filter) {
      return pokemonResult.results || []
    }

    return (
      pokemonResult.results?.filter((record) => {
        return record.name.toLowerCase().includes(filter.toLowerCase())
      }) || []
    )
  }, [filter, pokemonResult.results])

  const columns = useBreakpointValue({ base: 2, md: 3 })

  useEffect(() => {
    fetchPokemons()
  }, [])

  useEffect(() => {
    if (!error) {
      return
    }

    toast({
      title: 'Erro',
      description: 'Erro ao fazer requisição. Favor, tente novamente.',
      status: 'error',
      duration: 3000,
      isClosable: true
    })
  }, [error, toast])

  return (
    <div aria-label="list">
      {loading && (
        <HStack spacing={5}>
          <Skeleton height={80} width={80} />
          <Skeleton height={80} width={80} />
          <Skeleton height={80} width={80} />
        </HStack>
      )}

      {!loading && (
        <>
          <SimpleGrid columns={columns} spacing={5}>
            {pokemonResultsMemo
              .slice(0, LIMIT_PER_PAGE)
              .map((item: PokemonResultItem) => {
                return <ListItem key={item.name} item={item} />
              })}
          </SimpleGrid>

          {!pokemonResultsMemo.length && (
            <Alert status="error">
              <AlertIcon />
              Nenhum pokemon encontrado com &quot;{filter}&quot;
            </Alert>
          )}
        </>
      )}
    </div>
  )
}

export default List
