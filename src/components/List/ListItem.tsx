import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/rootReducer'

import { add, remove } from 'store/pokedexSlice'
import { PokemonResultItem, Pokemon } from 'typings'
import api from 'api'

import { ModalHandler } from 'components/Modal'

import { Box, Text, Button } from '@chakra-ui/react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

import imageFallback from 'assets/image-not-found.png'

type ListItemProps = {
  item: PokemonResultItem
  modalRef?: React.RefObject<ModalHandler>
}

const ListItem = ({ item, modalRef }: ListItemProps): JSX.Element => {
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
      aria-label="list item"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight={100}
      borderRadius={10}
      borderWidth={4}
      padding={3}
      bgGradient="linear(to-r, gray.100,blue.100)"
      _hover={{
        bgGradient: 'linear(to-t, gray.200,blue.300)'
      }}
      color="black"
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
      <Button
        bgGradient="linear(to-t, blue.200,gray.100)"
        _hover={{
          bgGradient: 'linear(to-t, gray.100,blue.200)'
        }}
        size="sm"
        onClick={() => {
          if (modalRef) {
            modalRef.current?.openModal(pokemonListItem)
          }
        }}
      >
        Detalhar
      </Button>
    </Box>
  )
}

export default ListItem
