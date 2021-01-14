import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store/rootReducer'

import { DarkModeSwitch, Drawer } from 'components'

import { Box, Flex, Heading, Button, useDisclosure } from '@chakra-ui/react'
import { AiFillStar } from 'react-icons/ai'

const Header = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const pokedex = useSelector((state: RootState) => state.pokedex)

  return (
    <Box aria-label="header">
      <Flex justifyContent="space-between" marginBottom={5}>
        <Heading>Pokedex</Heading>
        <DarkModeSwitch position="relative" />
      </Flex>

      <Button
        leftIcon={<AiFillStar color="orange" />}
        size="xs"
        variant="solid"
        onClick={() => onOpen()}
      >
        Meus favoritos ({pokedex.length})
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default Header
