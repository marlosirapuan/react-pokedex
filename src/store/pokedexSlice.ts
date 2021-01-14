import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, AppDispatch } from 'store/store'

import { Pokemon } from 'typings'

const initialState: Pokemon[] = []

const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {
    add(state, action: PayloadAction<Pokemon>) {
      state.push(action.payload)
    },
    remove(state, action: PayloadAction<string>) {
      const idx = state.findIndex((record) => record.name === action.payload)
      state.splice(idx, 1)
    }
  }
})

export const add = (pokemon: Pokemon): AppThunk => async (
  dispatch: AppDispatch
) => {
  const { name, abilities, sprites, stats, types, weight, order } = pokemon
  const newPokemon = {
    name,
    abilities,
    sprites,
    stats,
    types,
    weight,
    order
  } as Pokemon

  dispatch(pokedexSlice.actions.add(newPokemon))
}

export const remove = (name: string): AppThunk => async (
  dispatch: AppDispatch
) => {
  dispatch(pokedexSlice.actions.remove(name))
}

export default pokedexSlice.reducer
