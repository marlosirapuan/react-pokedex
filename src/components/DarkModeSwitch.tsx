import React from 'react'

import { Box, Switch, useColorMode } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'

type DarkModeSwitchProps = {
  position: 'relative' | 'absolute'
}

const DarkModeSwitch = ({ position }: DarkModeSwitchProps): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      position={position}
    >
      {colorMode === 'dark' ? <FiMoon /> : <FiSun />}

      <Switch
        title={`${colorMode === 'light' ? 'Dark' : 'Light'} mode`}
        size="md"
        aria-label="toggle dark mode"
        marginLeft={2}
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
    </Box>
  )
}

export default DarkModeSwitch
