import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/rootReducer'

import { add, remove } from 'store/pokedexSlice'
import { PokemonResultItem, Pokemon } from 'typings'
import api from 'api'

import { Box, Text, Button } from '@chakra-ui/react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

import imageFallback from 'assets/image-not-found.png'

type ListItemProps = {
  item: PokemonResultItem
}

const ListItem = ({ item }: ListItemProps): JSX.Element => {
  const dispatch = useDispatch()
  const pokedex = useSelector((state: RootState) => state.pokedex)

  const [pokemonListItem, setPokemonListItem] = useState<Pokemon>({} as Pokemon)

  const getInfoPokemon = async (name: string): Promise<void> => {
    try {
      const { data } = await api.get<Pokemon>(`/pokemon/${name}`)
      setPokemonListItem(data)
    } catch (error) {
      setPokemonListItem({ error: true })
    }
  }

  const isFavorited = (name: string | undefined): boolean => {
    if (!name) {
      return false
    }

    return pokedex.some((pokemon) => pokemon.name === name)
  }

  const handleToggleFavorite = useCallback(
    (pokemon: Pokemon | undefined) => {
      if (pokemon) {
        if (
          pokemon.name &&
          pokedex.some((item) => item.name === pokemon.name)
        ) {
          dispatch(remove(pokemon.name))
        } else {
          dispatch(add(pokemon))
        }
      }
    },
    [dispatch, pokedex]
  )

  useEffect(() => {
    getInfoPokemon(item.name)
  }, [item.name])

  return (
    <Box
      key={pokemonListItem.name}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight={100}
      borderRadius={10}
      borderWidth={4}
      padding={3}
    >
      <Text fontSize="lg">{pokemonListItem.name}</Text>
      <img
        src={pokemonListItem.sprites?.front_default ?? imageFallback}
        alt={pokemonListItem.name}
      />
      <Button
        variant="ghost"
        _active={{ background: 'none' }}
        _hover={{ background: 'none' }}
        _focus={{ border: 'none' }}
        onClick={() => handleToggleFavorite(pokemonListItem)}
      >
        {isFavorited(pokemonListItem.name) ? (
          <AiFillStar color="orange" size={32} />
        ) : (
          <AiOutlineStar color="orange" size={32} />
        )}
      </Button>
      <Button variant="ghost">Detalhar</Button>
    </Box>
  )
}

export default ListItem
