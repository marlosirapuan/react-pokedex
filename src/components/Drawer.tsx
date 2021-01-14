import React, { useCallback } from 'react'
import { RootState } from 'store/rootReducer'
import { useDispatch, useSelector } from 'react-redux'

import { remove } from 'store/pokedexSlice'

import {
  Drawer as DrawerBox,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  List,
  ListItem,
  IconButton,
  Tag,
  Alert,
  AlertIcon
} from '@chakra-ui/react'
import { FiTrash2 } from 'react-icons/fi'

import imageFallback from 'assets/image-not-found.png'

type DrawerProps = {
  isOpen: boolean
  onClose: () => void
}

const Drawer = ({ isOpen, onClose }: DrawerProps): JSX.Element => {
  const dispatch = useDispatch()
  const pokedex = useSelector((state: RootState) => state.pokedex)

  const handleRemoveFavorite = useCallback(
    (name: string | undefined): void => {
      if (!name) {
        return
      }

      dispatch(remove(name))
    },
    [dispatch]
  )

  return (
    <DrawerBox onClose={onClose} isOpen={isOpen} size="md">
      <DrawerOverlay zIndex={2}>
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Favoritos</DrawerHeader>
          <DrawerBody>
            <List spacing={3}>
              {pokedex.map((pokemon) => {
                return (
                  <ListItem
                    key={pokemon.name}
                    display="flex"
                    alignItems="center"
                  >
                    <IconButton
                      title="Remover da Pokedex"
                      aria-label="Remover da Pokedex"
                      icon={<FiTrash2 />}
                      color="red.500"
                      variant="ghost"
                      size="sm"
                      marginRight={2}
                      onClick={() => handleRemoveFavorite(pokemon.name)}
                    />
                    <img
                      src={pokemon.sprites?.front_default ?? imageFallback}
                      alt={pokemon.name}
                      title={pokemon.name}
                      width={64}
                    />
                    <Tag>{pokemon.name}</Tag>
                  </ListItem>
                )
              })}
            </List>

            {!pokedex.length && (
              <Alert status="info">
                <AlertIcon />
                Sua Pokedex está vazia! : (
              </Alert>
            )}
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button colorScheme="dark" variant="ghost" onClick={onClose}>
              Fechar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </DrawerBox>
  )
}

export default Drawer
