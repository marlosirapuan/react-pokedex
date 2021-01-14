import { combineReducers } from '@reduxjs/toolkit'

import pokedexReducer from 'store/pokedexSlice'

const rootReducer = combineReducers({
  pokedex: pokedexReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
