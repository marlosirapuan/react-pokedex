import React, {
  useState,
  useCallback,
  useImperativeHandle,
  forwardRef
} from 'react'

import { Pokemon } from 'typings'

import {
  Modal as ModalBox,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Tag,
  Progress,
  StackDivider,
  VStack,
  Box,
  useDisclosure
} from '@chakra-ui/react'

import imageFallback from 'assets/image-not-found.png'

export interface ModalHandler {
  openModal: (pokemon: Pokemon) => void
}

type ModalProps = {
  title?: string
}

const Modal: React.ForwardRefRenderFunction<ModalHandler, ModalProps> = (
  { title },
  ref
) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [pokemonData, setPokemonData] = useState<Pokemon>({} as Pokemon)

  const openModal = useCallback(
    (pokemon: Pokemon) => {
      setPokemonData(pokemon)
      onOpen()
    },
    [onOpen]
  )

  useImperativeHandle(ref, () => {
    return {
      openModal
    }
  })

  return (
    <div aria-label="modal">
      <ModalBox isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title ?? pokemonData.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="stretch" spacing={3} divider={<StackDivider />}>
              <Box display="flex" alignContent="center" justifyContent="center">
                <img
                  src={
                    pokemonData.sprites?.other.dream_world.front_default ??
                    pokemonData.sprites?.front_default ??
                    imageFallback
                  }
                  alt={pokemonData.name}
                  title={pokemonData.name}
                />
              </Box>

              <Box>
                <Text>Tipo</Text>
                {pokemonData.types?.map((item, idx) => {
                  return (
                    <Tag
                      key={idx}
                      colorScheme="orange"
                      marginRight={1}
                      marginTop={1}
                    >
                      {item.type.name}
                    </Tag>
                  )
                })}
              </Box>

              <Box>
                <Text>Habilidades</Text>
                {pokemonData.abilities?.map((item, idx) => {
                  return (
                    <Tag
                      key={idx}
                      colorScheme="green"
                      marginRight={1}
                      marginTop={1}
                    >
                      {item.ability.name}
                    </Tag>
                  )
                })}
              </Box>

              <Box>
                <Text>Stats</Text>
                {pokemonData.stats?.map((item, idx) => {
                  return (
                    <Tag key={idx} marginRight={1} marginTop={1}>
                      {item.stat.name}
                    </Tag>
                  )
                })}
              </Box>

              <Box display="flex" flexDirection="column">
                <Text>Peso ({pokemonData.weight})</Text>
                <Progress
                  value={pokemonData.weight}
                  size="xs"
                  colorScheme="red"
                />
              </Box>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button variant="link" mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalBox>
    </div>
  )
}

export default forwardRef(Modal)
